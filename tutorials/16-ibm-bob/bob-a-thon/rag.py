"""Read PDFs, split them into chunks, and search them with BM25 keyword ranking.

No embedding model and no vector database: that keeps the install small (a few MB, not GBs)
and lets everything run on a laptop. BM25 ranks chunks by how many of the question's words
they contain, weighting rare words higher.

    ingest()  PDF files in data/  ->  storage/index.json
    Index     loads index.json and answers  search("your question")  ->  best chunks + page numbers
"""
from __future__ import annotations

import json
import logging
import math
import re
from collections import Counter
from pathlib import Path

from pypdf import PdfReader

import config

# pypdf prints one line per image it cannot decode; we only want the text.
logging.getLogger("pypdf").setLevel(logging.ERROR)

# Letters and digits, plus the Indic block (U+0900-U+0DFF) so vowel signs stay inside the word.
_TOKEN = re.compile(r"(?:[^\W_]|[\u0900-\u0DFF])+", re.UNICODE)

# Words too common to help ranking (English). Add yours if your PDF is in another language.
STOPWORDS = frozenset("""
a about above after again all also am an and any are as at be because been before being below
between both but by can could did do does doing down during each few for from further had has
have having he her here hers him his how i if in into is it its just me more most my no nor not
of off on once only or other our out over own same she should so some such than that the their
them then there these they this those through to too under until up very was we were what when
where which while who whom why will with would you your
""".split())


def tokenize(text: str) -> list[str]:
    """Lower-case words, minus stopwords, with a light plural/ending trim ('recipes' -> 'recipe')."""
    out = []
    for word in _TOKEN.findall((text or "").lower()):
        if word in STOPWORDS or len(word) < 2:
            continue
        if len(word) > 4 and word.endswith("ies"):
            word = word[:-3] + "y"
        elif len(word) > 3 and word.endswith("s") and not word.endswith("ss"):
            word = word[:-1]
        out.append(word)
    return out


def extract_pages(pdf_path: Path) -> list[tuple[int, str]]:
    """[(page_number, text), ...] — page numbers start at 1. Pages with no text are skipped."""
    reader = PdfReader(str(pdf_path))
    pages = []
    for number, page in enumerate(reader.pages, start=1):
        text = re.sub(r"\s+", " ", (page.extract_text() or "")).strip()
        if len(text) >= 40:           # skips blank pages and lone headings
            pages.append((number, text))
    return pages


def chunk_pages(pages: list[tuple[int, str]], size: int, overlap: int) -> list[dict]:
    """Slide a window of `size` words (stepping by size-overlap) over each page."""
    step = max(1, size - overlap)
    chunks = []
    for number, text in pages:
        words = text.split()
        for start in range(0, len(words), step):
            window = words[start:start + size]
            if len(window) < 12 and start > 0:     # drop tiny trailing fragments
                break
            chunks.append({"page": number, "text": " ".join(window)})
            if start + size >= len(words):
                break
    return chunks


def ingest(pdf_paths: list[Path], index_path: Path | None = None) -> dict:
    """Build the search index from PDFs and save it. Returns a small summary."""
    index_path = index_path or config.INDEX_PATH       # looked up at call time, so tests can redirect it
    chunks: list[dict] = []
    sources = []
    for pdf in pdf_paths:
        pages = extract_pages(pdf)
        new = chunk_pages(pages, config.CHUNK_WORDS, config.CHUNK_OVERLAP_WORDS)
        for c in new:
            c["source"] = pdf.name
        chunks.extend(new)
        sources.append({"file": pdf.name, "size": pdf.stat().st_size,
                        "pages_with_text": len(pages), "chunks": len(new)})
    if not chunks:
        raise ValueError(
            "No readable text found. Scanned/image-only PDFs have no text layer — "
            "use a PDF where you can select and copy the text."
        )
    index_path.parent.mkdir(parents=True, exist_ok=True)
    index_path.write_text(json.dumps({"sources": sources, "chunks": chunks}, ensure_ascii=False),
                          encoding="utf-8")
    return {"sources": sources, "chunks": len(chunks)}


class Index:
    """BM25 index over the chunks saved by ingest()."""

    K1 = 1.5
    B = 0.75

    def __init__(self, chunks: list[dict], sources: list[dict] | None = None):
        self.chunks = chunks
        self.sources = sources or []
        self._tf = [Counter(tokenize(c["text"])) for c in chunks]
        self._len = [sum(tf.values()) for tf in self._tf]
        self._avg_len = (sum(self._len) / len(self._len)) if self._len else 0.0
        df: Counter = Counter()
        for tf in self._tf:
            df.update(tf.keys())
        n = len(chunks)
        self._idf = {t: math.log(1 + (n - d + 0.5) / (d + 0.5)) for t, d in df.items()}

    @classmethod
    def load(cls, index_path: Path | None = None) -> "Index":
        index_path = index_path or config.INDEX_PATH
        data = json.loads(index_path.read_text(encoding="utf-8"))
        return cls(data["chunks"], data.get("sources"))

    def search(self, query: str, top_k: int = config.TOP_K) -> list[dict]:
        """Best chunks for `query`: [{'page', 'text', 'source', 'score'}], best first."""
        terms = [t for t in tokenize(query) if t in self._idf]
        if not terms:
            return []
        scored = []
        for i, tf in enumerate(self._tf):
            score = 0.0
            for t in terms:
                f = tf.get(t, 0)
                if not f:
                    continue
                norm = f + self.K1 * (1 - self.B + self.B * self._len[i] / (self._avg_len or 1))
                score += self._idf[t] * f * (self.K1 + 1) / norm
            if score > 0:
                scored.append((score, i))
        scored.sort(reverse=True)
        results = []
        for score, i in scored[:top_k]:
            c = self.chunks[i]
            results.append({"page": c["page"], "text": c["text"],
                            "source": c.get("source", ""), "score": score})
        return results

    @property
    def stats(self) -> dict:
        return {"chunks": len(self.chunks), "sources": self.sources}


def find_pdfs(folder: Path | None = None) -> list[Path]:
    folder = folder or config.DATA_DIR
    return sorted(p for p in folder.glob("*.pdf") if p.is_file())


def index_is_current(pdfs: list[Path], index_path: Path | None = None) -> bool:
    """True when the saved index was built from exactly these PDFs (same names and sizes).

    Compares names and sizes, not dates: a PDF moved in from Downloads keeps its old
    modified-date, so a date check would miss it.
    """
    index_path = index_path or config.INDEX_PATH
    try:
        saved = json.loads(index_path.read_text(encoding="utf-8")).get("sources", [])
    except (OSError, ValueError):
        return False
    return sorted((s.get("file"), s.get("size")) for s in saved) == \
        sorted((p.name, p.stat().st_size) for p in pdfs)
