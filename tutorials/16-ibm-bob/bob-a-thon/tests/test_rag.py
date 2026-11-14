"""PDF reading, chunking and BM25 search."""
import pytest

import config
import rag


def test_tokenize_drops_stopwords_and_trims_plurals():
    assert rag.tokenize("The recipes of the farmers") == ["recipe", "farmer"]


def test_tokenize_keeps_non_latin_words():
    assert rag.tokenize("भारत में खेती") == ["भारत", "में", "खेती"]


def test_search_ranks_the_relevant_chunk_first(index):
    top = index.search("How do I make injera?")[0]
    assert top["page"] == 1
    assert "Injera" in top["text"]


def test_search_finds_other_topics(index):
    assert index.search("moringa dish")[0]["page"] == 2
    assert index.search("goats on rangelands")[0]["page"] == 3


def test_index_is_current_detects_swapped_pdfs(tmp_path):
    """A PDF dragged in from elsewhere keeps its old date, so compare names and sizes."""
    from pypdf import PdfWriter
    a = tmp_path / "a.pdf"
    w = PdfWriter()
    w.add_blank_page(width=100, height=100)
    with open(a, "wb") as f:
        w.write(f)
    assert rag.index_is_current([a]) is False                  # nothing indexed yet
    config.INDEX_PATH.write_text(
        '{"sources": [{"file": "a.pdf", "size": %d}], "chunks": []}' % a.stat().st_size)
    assert rag.index_is_current([a]) is True
    b = tmp_path / "b.pdf"
    b.write_bytes(a.read_bytes())
    assert rag.index_is_current([b]) is False                  # different file name
    assert rag.index_is_current([a, b]) is False               # extra file


def test_search_returns_nothing_for_unknown_words(index):
    assert index.search("quantum spaceship") == []


def test_search_with_only_stopwords_returns_nothing(index):
    assert index.search("what is the") == []


def test_search_respects_top_k(index):
    assert len(index.search("women goats moringa injera", top_k=2)) == 2


def test_chunk_pages_overlaps_and_keeps_page_numbers():
    words = " ".join(f"word{i}" for i in range(100))
    chunks = rag.chunk_pages([(7, words)], size=40, overlap=10)
    assert [c["page"] for c in chunks] == [7] * len(chunks)
    assert len(chunks) >= 3
    first, second = chunks[0]["text"].split(), chunks[1]["text"].split()
    assert first[-10:] == second[:10]          # the overlap


def test_ingest_then_load_roundtrip():
    pdfs = rag.find_pdfs(config.DATA_DIR)
    assert pdfs, "the sample PDF should ship in data/"
    summary = rag.ingest(pdfs)
    assert summary["chunks"] > 50
    loaded = rag.Index.load()
    assert loaded.search("injera")[0]["page"] > 0


def test_sample_pdf_answers_a_real_question():
    rag.ingest(rag.find_pdfs(config.DATA_DIR))
    hits = rag.Index.load().search("how is injera made from teff")
    assert hits and "injera" in hits[0]["text"].lower()


def test_ingest_rejects_pdf_without_text(tmp_path):
    from pypdf import PdfWriter
    blank = tmp_path / "blank.pdf"
    writer = PdfWriter()
    writer.add_blank_page(width=200, height=200)
    with open(blank, "wb") as f:
        writer.write(f)
    with pytest.raises(ValueError, match="No readable text"):
        rag.ingest([blank])
