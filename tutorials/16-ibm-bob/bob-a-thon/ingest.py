"""Build the search index from the PDF(s) in data/.

    python ingest.py                 # index every PDF in data/
    python ingest.py path/to/my.pdf  # index one specific PDF (also copies it into data/)

Run this again whenever you change the PDF. The app also rebuilds automatically on start-up
if the PDFs are newer than the index.
"""
from __future__ import annotations

import shutil
import sys
from pathlib import Path

import config
import rag


def main(argv: list[str]) -> int:
    config.DATA_DIR.mkdir(exist_ok=True)

    if len(argv) > 1:
        src = Path(argv[1]).expanduser().resolve()
        if not src.is_file() or src.suffix.lower() != ".pdf":
            print(f"Not a PDF file: {src}")
            return 1
        target = config.DATA_DIR / src.name
        if src != target:
            shutil.copy2(src, target)
            print(f"Copied {src.name} into data/")

    pdfs = rag.find_pdfs()
    if not pdfs:
        print("No PDF found. Put one in the data/ folder (or run: python ingest.py my.pdf).")
        return 1

    print("Reading:", ", ".join(p.name for p in pdfs))
    try:
        summary = rag.ingest(pdfs)
    except Exception as exc:  # unreadable / encrypted / image-only PDF
        print(f"Ingestion failed: {exc}")
        return 1

    for s in summary["sources"]:
        print(f"  {s['file']}: {s['pages_with_text']} pages with text -> {s['chunks']} chunks")
    print(f"Done. Index saved to {config.INDEX_PATH.relative_to(config.BASE_DIR)}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
