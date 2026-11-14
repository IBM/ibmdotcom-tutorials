"""Sarvam client helpers and the HTTP behaviour of the Sarvam client (with a fake transport)."""
import asyncio

import httpx
import pytest

import config
import sarvam


def run(coro):
    return asyncio.run(coro)


def make_client(handler) -> sarvam.SarvamClient:
    http = httpx.AsyncClient(base_url="https://api.sarvam.ai", transport=httpx.MockTransport(handler))
    return sarvam.SarvamClient("secret-key-123", client=http)


# ── language / text helpers ────────────────────────────────────────────────

@pytest.mark.parametrize("text,lang", [
    ("Hello there", "en-IN"),
    ("नमस्ते दुनिया", "hi-IN"),
    ("வணக்கம்", "ta-IN"),
    ("నమస్కారం", "te-IN"),
    ("ಕನ್ನಡ", "kn-IN"),
    ("", "en-IN"),
])
def test_language_from_script(text, lang):
    assert sarvam.language_from_script(text) == lang


def test_is_mostly_latin():
    assert sarvam.is_mostly_latin("How do I cook rice?")
    assert not sarvam.is_mostly_latin("चावल कैसे पकाएं")


def test_speakable_strips_markdown_and_bullets():
    assert sarvam.speakable("**Hello** world\n- one\n- two") == "Hello world one two"


def test_speakable_cuts_at_a_sentence_boundary():
    text = ("This is a sentence. " * 60).strip()
    out = sarvam.speakable(text, limit=100)
    assert len(out) <= 100 and out.endswith(".")


# ── HTTP behaviour ─────────────────────────────────────────────────────────

def test_chat_sends_key_header_and_strips_think_blocks():
    seen = {}

    def handler(request: httpx.Request) -> httpx.Response:
        seen["key"] = request.headers.get("api-subscription-key")
        seen["path"] = request.url.path
        return httpx.Response(200, json={"choices": [{"message": {"content": "<think>hmm</think>Hello!"}}]})

    answer = run(make_client(handler).chat([{"role": "user", "content": "hi"}]))
    assert answer == "Hello!"
    assert seen == {"key": "secret-key-123", "path": "/v1/chat/completions"}


def test_chat_uses_the_conversations_model_and_sends_no_reasoning_effort():
    """Found in live testing: plain sarvam-105b 'thinks' first (slow, and empty when max_tokens is
    small), and reasoning_effort='none' is rejected with HTTP 400."""
    import json
    seen = {}

    def handler(request: httpx.Request) -> httpx.Response:
        seen.update(json.loads(request.content))
        return httpx.Response(200, json={"choices": [{"message": {"content": "ok"}}]})

    run(make_client(handler).chat([{"role": "user", "content": "hi"}]))
    assert seen["model"] == "sarvam-105b-conversations"
    assert "reasoning_effort" not in seen


def test_chat_removes_emoji_because_they_would_be_read_aloud():
    def handler(request):
        return httpx.Response(200, json={"choices": [{"message": {"content": "Hi! 👋 Welcome 🌾"}}]})

    assert run(make_client(handler).chat([{"role": "user", "content": "hi"}])) == "Hi! Welcome"


def test_chat_with_empty_content_returns_empty_string():
    def handler(request):
        return httpx.Response(200, json={"choices": [{"message": {"content": None}}]})

    assert run(make_client(handler).chat([{"role": "user", "content": "hi"}])) == ""


def test_transcribe_returns_text_and_language():
    def handler(request: httpx.Request) -> httpx.Response:
        assert request.url.path == "/speech-to-text"
        return httpx.Response(200, json={"transcript": " नमस्ते ", "language_code": "hi-IN"})

    assert run(make_client(handler).transcribe(b"audio-bytes")) == ("नमस्ते", "hi-IN")


def test_speak_returns_first_audio_chunk():
    def handler(request: httpx.Request) -> httpx.Response:
        assert request.url.path == "/text-to-speech"
        return httpx.Response(200, json={"audios": ["QUJD"]})

    assert run(make_client(handler).speak("Hello", "en-IN", "anand")) == "QUJD"


def test_speak_skips_unsupported_language_without_calling_the_api():
    def handler(request):
        raise AssertionError("must not be called")

    assert run(make_client(handler).speak("text", "ur-IN", "anand")) is None


@pytest.mark.parametrize("status,fragment", [
    (403, "rejected the API key"),
    (429, "rate limit"),
    (500, "Could not reach Sarvam"),
])
def test_errors_become_friendly_messages_without_leaking_the_key(status, fragment):
    def handler(request):
        return httpx.Response(status, text="backend said secret-key-123")

    with pytest.raises(sarvam.SarvamError) as err:
        run(make_client(handler).chat([{"role": "user", "content": "hi"}]))
    assert fragment in err.value.message
    assert "secret-key-123" not in err.value.message


def test_network_failure_becomes_sarvam_error():
    def handler(request):
        raise httpx.ConnectError("boom")

    with pytest.raises(sarvam.SarvamError):
        run(make_client(handler).chat([{"role": "user", "content": "hi"}]))


def test_missing_key_message_is_helpful(monkeypatch):
    monkeypatch.delenv("SARVAM_API_KEY", raising=False)
    with pytest.raises(config.MissingApiKey, match=r"\.env"):
        config.sarvam_api_key()
