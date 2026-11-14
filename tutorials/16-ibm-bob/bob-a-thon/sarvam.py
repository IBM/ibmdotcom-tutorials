"""A tiny client for the three Sarvam APIs this app uses.

    speech-to-text   POST /speech-to-text        (saaras)   audio -> text + language
    chat             POST /v1/chat/completions   (sarvam-105b-conversations)  messages -> answer
    text-to-speech   POST /text-to-speech        (bulbul)   text + language -> audio

All three use the same header:  api-subscription-key: <your key>
Docs: https://docs.sarvam.ai
"""
from __future__ import annotations

import logging
import re

import httpx

import config

log = logging.getLogger(__name__)

# Languages Bulbul v3 can speak.
TTS_LANGUAGES = {"hi-IN", "bn-IN", "kn-IN", "ml-IN", "mr-IN", "od-IN",
                 "pa-IN", "ta-IN", "te-IN", "gu-IN", "en-IN"}

# Guess the language of a piece of text from the script it is written in.
_SCRIPT_LANGUAGES = [
    (re.compile(r"[ऀ-ॿ]"), "hi-IN"),   # Devanagari (Hindi / Marathi share it)
    (re.compile(r"[ঀ-৿]"), "bn-IN"),
    (re.compile(r"[਀-੿]"), "pa-IN"),
    (re.compile(r"[઀-૿]"), "gu-IN"),
    (re.compile(r"[଀-୿]"), "od-IN"),
    (re.compile(r"[஀-௿]"), "ta-IN"),
    (re.compile(r"[ఀ-౿]"), "te-IN"),
    (re.compile(r"[ಀ-೿]"), "kn-IN"),
    (re.compile(r"[ഀ-ൿ]"), "ml-IN"),
]
_LATIN = re.compile(r"[A-Za-z]")
_THINK_BLOCK = re.compile(r"<think>.*?</think>", re.DOTALL | re.IGNORECASE)
_EMOJI = re.compile("[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F\u200D]")


def language_from_script(text: str) -> str:
    """'hi-IN' for Devanagari, 'ta-IN' for Tamil... and 'en-IN' for Latin letters or anything else."""
    for pattern, lang in _SCRIPT_LANGUAGES:
        if pattern.search(text or ""):
            return lang
    return "en-IN"


def is_mostly_latin(text: str) -> bool:
    letters = [c for c in (text or "") if c.isalpha()]
    return not letters or sum(1 for c in letters if _LATIN.match(c)) * 2 >= len(letters)


class SarvamError(Exception):
    """A Sarvam call failed. `.message` is safe to show the user; details go to the server log."""

    def __init__(self, status: int, message: str):
        super().__init__(message)
        self.status = status
        self.message = message


def _friendly(status: int) -> str:
    if status in (401, 403):
        return "Sarvam rejected the API key. Check SARVAM_API_KEY in your .env file."
    if status == 429:
        return "Sarvam rate limit or quota reached. Wait a moment and try again."
    if status == 422:
        return "Sarvam could not process that input (audio too long or unsupported?)."
    return "Could not reach Sarvam. Please try again."


class SarvamClient:
    def __init__(self, api_key: str, client: httpx.AsyncClient | None = None):
        self._headers = {"api-subscription-key": api_key}
        self._http = client or httpx.AsyncClient(
            base_url=config.SARVAM_BASE_URL,
            timeout=httpx.Timeout(config.REQUEST_TIMEOUT_SECONDS),
        )

    async def aclose(self) -> None:
        await self._http.aclose()

    async def _post(self, path: str, **kwargs) -> dict:
        try:
            res = await self._http.post(path, headers=self._headers, **kwargs)
        except httpx.HTTPError as exc:
            log.error("Sarvam %s request failed: %s", path, type(exc).__name__)
            raise SarvamError(0, _friendly(0)) from exc
        if res.status_code != 200:
            # Log the status only — never the request (it carries the key) or the full body.
            log.error("Sarvam %s returned HTTP %s", path, res.status_code)
            raise SarvamError(res.status_code, _friendly(res.status_code))
        try:
            return res.json()
        except ValueError as exc:
            raise SarvamError(res.status_code, _friendly(0)) from exc

    # ── speech-to-text ──────────────────────────────────────────────────────
    async def transcribe(self, audio: bytes, filename: str = "question.webm",
                         content_type: str = "audio/webm") -> tuple[str, str | None]:
        """Audio -> (transcript, detected language code). Language is auto-detected."""
        data = await self._post(
            "/speech-to-text",
            files={"file": (filename, audio, content_type)},
            data={"model": config.STT_MODEL, "mode": "transcribe"},
        )
        return str(data.get("transcript") or "").strip(), data.get("language_code")

    # ── chat (the LLM) ──────────────────────────────────────────────────────
    async def chat(self, messages: list[dict], max_tokens: int = 1024,
                   temperature: float = 0.2) -> str:
        data = await self._post(
            "/v1/chat/completions",
            json={
                "model": config.CHAT_MODEL,
                "messages": messages,
                "temperature": temperature,
                "max_tokens": max_tokens,
            },
        )
        try:
            content = data["choices"][0]["message"].get("content") or ""
        except (KeyError, IndexError, AttributeError) as exc:
            raise SarvamError(200, _friendly(0)) from exc
        text = _EMOJI.sub("", _THINK_BLOCK.sub("", content))   # emoji would be read aloud
        return re.sub(r"[ \t]{2,}", " ", text).strip()

    # ── text-to-speech ──────────────────────────────────────────────────────
    async def speak(self, text: str, language: str, voice: str) -> str | None:
        """Text -> base64 WAV audio, or None when this language has no voice."""
        if language not in TTS_LANGUAGES or not text.strip():
            return None
        data = await self._post(
            "/text-to-speech",
            json={
                "text": text,
                "target_language_code": language,
                "speaker": voice,
                "model": config.TTS_MODEL,
                "pace": config.TTS_PACE,
            },
        )
        audios = data.get("audios") or []
        return audios[0] if audios else None


def speakable(text: str, limit: int = config.TTS_MAX_CHARS) -> str:
    """Strip markdown and cut at a sentence boundary so the spoken reply stays short."""
    t = re.sub(r"\*\*|__|`", "", text or "")
    t = re.sub(r"^\s*(?:[-*•]|\d{1,2}[.)])\s+", "", t, flags=re.MULTILINE)
    t = re.sub(r"\s+", " ", t).strip()
    if len(t) <= limit:
        return t
    t = t[:limit]
    cut = max(t.rfind(". "), t.rfind("। "), t.rfind("? "), t.rfind("! "))
    return t[: cut + 1] if cut > limit // 2 else t
