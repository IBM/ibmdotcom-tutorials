"""Offline tests: nothing here calls Sarvam, so no API key or internet is needed."""
import json
import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import config  # noqa: E402
import rag  # noqa: E402


@pytest.fixture(autouse=True)
def _isolate(tmp_path, monkeypatch):
    """Point the index at a temp folder so tests never touch real data."""
    monkeypatch.setattr(config, "INDEX_PATH", tmp_path / "index.json")
    monkeypatch.setattr(config, "STORAGE_DIR", tmp_path)
    monkeypatch.setenv("SARVAM_API_KEY", "test-key-not-real")


@pytest.fixture
def sample_chunks():
    return [
        {"page": 1, "text": "Injera is a fermented teff flatbread eaten across Ethiopia and Eritrea.", "source": "a.pdf"},
        {"page": 2, "text": "Moringa leaves and pods are cooked into a dish called dambou in Niger.", "source": "a.pdf"},
        {"page": 3, "text": "Women pastoralists herd goats and sheep across the rangelands every season.", "source": "a.pdf"},
    ]


@pytest.fixture
def index(sample_chunks):
    return rag.Index(sample_chunks)


@pytest.fixture
def client(tmp_path, monkeypatch, index):
    """A TestClient for the real FastAPI app, with Sarvam replaced by a fake."""
    from fastapi.testclient import TestClient
    import app as app_module
    from sarvam import SarvamError

    class FakeSarvam:
        def __init__(self):
            self.fail_with = None
            self.spoken = []

        async def transcribe(self, audio, filename="q.webm", content_type="audio/webm"):
            if self.fail_with:
                raise self.fail_with
            return "How do I make injera?", "en-IN"

        async def chat(self, messages, max_tokens=1024, temperature=0.2):
            if self.fail_with:
                raise self.fail_with
            return "Injera is a fermented teff flatbread."

        async def speak(self, text, language, voice):
            self.spoken.append((text, language, voice))
            return "UklGRg=="

        async def aclose(self):
            pass

    fake = FakeSarvam()
    fake.SarvamError = SarvamError
    monkeypatch.setattr(app_module, "SarvamClient", lambda key: fake)
    monkeypatch.setattr(app_module, "load_index", lambda: index)
    with TestClient(app_module.app) as c:
        c.fake = fake
        yield c


def write_json(path: Path, data) -> None:
    path.write_text(json.dumps(data), encoding="utf-8")
