"""The web app end to end, with Sarvam replaced by a fake (see conftest.py)."""
from sarvam import SarvamError


def test_home_page_and_static_assets_are_served(client):
    assert "<title>" in client.get("/").text
    assert client.get("/static/app.js").status_code == 200
    assert client.get("/static/style.css").status_code == 200


def test_config_exposes_no_secrets(client):
    body = client.get("/config").text
    assert "test-key-not-real" not in body
    assert "voices" in body


def test_health_reports_key_and_index(client):
    data = client.get("/health").json()
    assert data["has_key"] is True and data["indexed"]["chunks"] == 3


def test_ask_returns_answer_sources_and_audio(client):
    res = client.post("/ask", data={"question": "How do I make injera?", "voice": "priya"})
    body = res.json()
    assert res.status_code == 200
    assert body["answer"] == "Injera is a fermented teff flatbread."
    assert body["sources"][0]["page"] == 1
    assert body["audio_b64"] == "UklGRg=="
    assert client.fake.spoken[-1][1:] == ("en-IN", "priya")


def test_unknown_voice_falls_back_to_default(client):
    client.post("/ask", data={"question": "injera", "voice": "../../etc/passwd"})
    assert client.fake.spoken[-1][2] == "anand"


def test_question_not_in_document_skips_the_llm(client):
    body = client.post("/ask", data={"question": "quantum spaceship"}).json()
    assert "could not find" in body["answer"].lower()
    assert body["sources"] == []


def test_empty_and_oversized_questions_are_rejected(client):
    assert client.post("/ask", data={"question": "   "}).status_code == 400
    assert client.post("/ask", data={"question": "x" * 1001}).status_code == 400


def test_ask_voice_transcribes_then_answers(client):
    res = client.post("/ask_voice", files={"audio": ("q.webm", b"fake-audio", "audio/webm")})
    body = res.json()
    assert res.status_code == 200
    assert body["question"] == "How do I make injera?"
    assert "teff" in body["answer"]


def test_ask_voice_rejects_empty_and_oversized_audio(client):
    assert client.post("/ask_voice", files={"audio": ("q.webm", b"", "audio/webm")}).status_code == 400
    big = b"0" * (5 * 1024 * 1024 + 10)
    assert client.post("/ask_voice", files={"audio": ("q.webm", big, "audio/webm")}).status_code == 413


def test_sarvam_failure_returns_friendly_message_not_a_stack_trace(client):
    client.fake.fail_with = SarvamError(429, "Sarvam rate limit or quota reached. Wait and retry.")
    res = client.post("/ask", data={"question": "injera"})
    assert res.status_code == 502
    assert "rate limit" in res.json()["answer"]


def test_unexpected_error_is_generic(client, monkeypatch):
    import app as app_module

    async def boom(*a, **k):
        raise RuntimeError("secret internals")

    monkeypatch.setattr(app_module, "answer_question", boom)
    res = client.post("/ask", data={"question": "injera"})
    assert res.status_code == 500
    assert "secret internals" not in res.text


def test_security_headers_are_present(client):
    h = client.get("/").headers
    assert "script-src 'self'" in h["content-security-policy"]
    assert h["x-content-type-options"] == "nosniff"
