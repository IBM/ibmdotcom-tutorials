"""Settings for the voice agent.

Two kinds of configuration live here:
  * Secrets and tuning knobs  -> environment variables, loaded from `.env`
  * The assistant's personality -> `assistant.json` (title, persona, sample questions)

Nothing in this file should ever contain a real API key.
"""
from __future__ import annotations

import json
import os
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

# ── Where things live ───────────────────────────────────────────────────────
DATA_DIR = BASE_DIR / "data"          # drop your PDF(s) here
STORAGE_DIR = BASE_DIR / "storage"    # the search index is built here (git-ignored)
INDEX_PATH = STORAGE_DIR / "index.json"
STATIC_DIR = BASE_DIR / "static"
ASSISTANT_PATH = BASE_DIR / "assistant.json"

# ── Sarvam (one key covers speech-to-text, text-to-speech and the LLM) ──────
SARVAM_BASE_URL = "https://api.sarvam.ai"
STT_MODEL = os.getenv("SARVAM_STT_MODEL", "saaras:v4")
TTS_MODEL = os.getenv("SARVAM_TTS_MODEL", "bulbul:v3")
# "-conversations" is the variant tuned for voice agents. Plain "sarvam-105b" also works, but it
# "thinks" first: that adds seconds of delay, and with a small max_tokens it can return nothing.
CHAT_MODEL = os.getenv("SARVAM_CHAT_MODEL", "sarvam-105b-conversations")
DEFAULT_VOICE = os.getenv("SARVAM_VOICE", "anand")
TTS_PACE = float(os.getenv("SARVAM_TTS_PACE", "0.95"))
REQUEST_TIMEOUT_SECONDS = float(os.getenv("SARVAM_TIMEOUT_SECONDS", "60"))

# Bulbul v3 voices (lower-case, as the API requires).
VOICES = {
    "Female": ["ritu", "priya", "neha", "pooja", "simran", "kavya", "ishita", "shreya",
               "roopa", "tanya", "shruti", "suhani", "kavitha", "rupali"],
    "Male": ["anand", "aditya", "ashutosh", "rahul", "rohan", "amit", "dev", "ratan", "varun",
             "manan", "sumit", "kabir", "aayan", "shubh", "advait", "tarun", "sunny", "mani",
             "gokul", "vijay", "mohit", "rehan", "soham"],
}
ALL_VOICES = [v for group in VOICES.values() for v in group]

# ── Server ──────────────────────────────────────────────────────────────────
# 127.0.0.1 = reachable only from this computer. Do not change to 0.0.0.0.
HOST = "127.0.0.1"
PORT = int(os.getenv("PORT", "8000"))

# ── Limits ──────────────────────────────────────────────────────────────────
MAX_QUESTION_CHARS = 1000
MAX_AUDIO_BYTES = 5 * 1024 * 1024     # Sarvam REST speech-to-text accepts up to 30 s of audio
TTS_MAX_CHARS = 600                   # keeps spoken answers short and fast

# ── Retrieval ───────────────────────────────────────────────────────────────
TOP_K = int(os.getenv("TOP_K", "4"))
CHUNK_WORDS = int(os.getenv("CHUNK_WORDS", "180"))
CHUNK_OVERLAP_WORDS = int(os.getenv("CHUNK_OVERLAP_WORDS", "40"))
# The PDF is searched with keywords in ITS language. Questions in another script (Hindi, Tamil...)
# are first rewritten into English search terms. Set to "false" if your PDF is not in English.
TRANSLATE_QUERY = os.getenv("TRANSLATE_QUERY", "true").strip().lower() == "true"


def sarvam_api_key() -> str:
    """The key is read when needed, so `ingest.py` and the tests work without one."""
    key = (os.getenv("SARVAM_API_KEY") or "").strip()
    if not key:
        raise MissingApiKey(
            "SARVAM_API_KEY is not set. Copy .env.example to .env and paste your key into it."
        )
    return key


class MissingApiKey(RuntimeError):
    pass


_DEFAULT_ASSISTANT = {
    "title": "Voice Assistant",
    "subtitle": "Ask a question about your document, by typing or speaking.",
    "persona": "a helpful, friendly assistant",
    "topic": "the uploaded document",
    "welcome": "Type or speak a question about the document.",
    "sample_questions": [],
}


def load_assistant() -> dict:
    """Read assistant.json, falling back to defaults for any missing field."""
    data = dict(_DEFAULT_ASSISTANT)
    try:
        loaded = json.loads(ASSISTANT_PATH.read_text(encoding="utf-8"))
        if isinstance(loaded, dict):
            data.update({k: v for k, v in loaded.items() if k in _DEFAULT_ASSISTANT})
    except (OSError, ValueError):
        pass
    return data
