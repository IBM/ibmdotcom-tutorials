"""Voice agent: ask a question by typing or speaking, get a spoken answer from your PDF.

    browser mic -> /ask_voice -> Sarvam STT -> search the PDF -> Sarvam LLM -> Sarvam TTS -> browser speaker
    typed text  -> /ask       ->               search the PDF -> Sarvam LLM -> Sarvam TTS -> browser speaker

Run:  python app.py        then open http://127.0.0.1:8000
"""
from __future__ import annotations

import logging
from contextlib import asynccontextmanager

import uvicorn
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

import config
import rag
from config import MissingApiKey
from sarvam import (SarvamClient, SarvamError, is_mostly_latin,
                    language_from_script, speakable)

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)-7s %(message)s")
log = logging.getLogger("voice-agent")

GENERIC_ERROR = "Sorry, something went wrong while answering. Please try again."
NOT_FOUND_HINT = "I could not find that in the document."


class State:
    """Things shared by all requests, created once at start-up."""
    index: rag.Index | None = None
    sarvam: SarvamClient | None = None
    assistant: dict = {}


state = State()


def load_index() -> rag.Index | None:
    """Load the search index, (re)building it from data/*.pdf when missing or out of date."""
    pdfs = rag.find_pdfs()
    if not pdfs:
        log.warning("No PDF found in data/ — add one, then restart.")
        return None
    if not rag.index_is_current(pdfs):
        log.info("Building the search index from %d PDF(s)...", len(pdfs))
        rag.ingest(pdfs)
    return rag.Index.load()


@asynccontextmanager
async def lifespan(_: FastAPI):
    state.assistant = config.load_assistant()
    state.index = load_index()
    try:
        state.sarvam = SarvamClient(config.sarvam_api_key())
    except MissingApiKey as exc:
        log.warning("%s", exc)          # the UI shows a clear message instead of crashing
    yield
    if state.sarvam:
        await state.sarvam.aclose()


app = FastAPI(title="Voice Agent", docs_url=None, redoc_url=None, openapi_url=None, lifespan=lifespan)


@app.middleware("http")
async def security_headers(request, call_next):
    response = await call_next(request)
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; "
        "media-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'"
    )
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["Referrer-Policy"] = "no-referrer"
    response.headers["Permissions-Policy"] = "microphone=(self)"
    return response


def _fail(status: int, message: str) -> JSONResponse:
    return JSONResponse(status_code=status, content={"answer": message})


# ── The RAG pipeline ────────────────────────────────────────────────────────

async def _search_terms(question: str) -> str:
    """Search the PDF with English keywords when the question is in another script."""
    if not config.TRANSLATE_QUERY or is_mostly_latin(question):
        return question
    try:
        return await state.sarvam.chat([
            {"role": "system", "content": "Translate the user's question into a short English "
                                          "search query. Reply with the English words only."},
            {"role": "user", "content": question},
        ], max_tokens=60, temperature=0.0) or question
    except SarvamError:
        return question


def _build_prompt(question: str, passages: list[dict]) -> list[dict]:
    a = state.assistant
    context = "\n\n".join(f"[Page {p['page']}] {p['text']}" for p in passages)
    system = (
        f"You are {a['persona']}, speaking directly to the user. Your answer will be read aloud, "
        f"so write exactly as you would speak.\n"
        f"The topic is {a['topic']}.\n\n"
        "Rules:\n"
        "- Answer in the SAME language the question is written in.\n"
        "- Keep it SHORT: 2 to 4 spoken sentences. No bullet points, lists, headings or markdown.\n"
        "- Use ONLY the context below. If it does not contain the answer, say so honestly in one "
        "sentence and do not use outside knowledge.\n"
        "- Write numbers as words people say aloud. Never put a translation in brackets.\n\n"
        f"Context from the document:\n{context}"
    )
    return [{"role": "system", "content": system}, {"role": "user", "content": question}]


async def answer_question(question: str, voice: str) -> dict:
    passages = state.index.search(await _search_terms(question))
    sources = [{"page": p["page"], "source": p["source"]} for p in passages]

    if not passages:
        answer = NOT_FOUND_HINT
    else:
        answer = await state.sarvam.chat(_build_prompt(question, passages))
        answer = speakable(answer, limit=10_000) or NOT_FOUND_HINT   # strip markdown, keep it all

    audio = None
    try:
        audio = await state.sarvam.speak(speakable(answer), language_from_script(answer), voice)
    except SarvamError as exc:
        log.warning("Text-to-speech skipped: %s", exc.message)   # still show the text answer
    return {"question": question, "answer": answer, "sources": sources, "audio_b64": audio}


def _ready_error() -> JSONResponse | None:
    if state.sarvam is None:
        return _fail(503, "SARVAM_API_KEY is missing. Copy .env.example to .env, add your key, "
                          "and restart the app.")
    if state.index is None:
        return _fail(503, "No document yet. Put a PDF in the data/ folder and restart the app.")
    return None


def _voice_or_default(voice: str) -> str:
    return voice if voice in config.ALL_VOICES else config.DEFAULT_VOICE


# ── Routes ──────────────────────────────────────────────────────────────────

@app.get("/")
async def home():
    return FileResponse(config.STATIC_DIR / "index.html")


@app.get("/config")
async def get_config():
    """What the page needs to draw itself. Contains no secrets."""
    return {"assistant": state.assistant, "voices": config.VOICES,
            "default_voice": config.DEFAULT_VOICE,
            "max_question_chars": config.MAX_QUESTION_CHARS}


@app.get("/health")
async def health():
    return {"ok": True, "has_key": state.sarvam is not None,
            "indexed": state.index.stats if state.index else None}


@app.post("/ask")
async def ask(question: str = Form(...), voice: str = Form("")):
    if (denied := _ready_error()):
        return denied
    question = question.strip()
    if not question:
        return _fail(400, "Please enter a question.")
    if len(question) > config.MAX_QUESTION_CHARS:
        return _fail(400, f"Please keep your question under {config.MAX_QUESTION_CHARS} characters.")
    try:
        return await answer_question(question, _voice_or_default(voice))
    except SarvamError as exc:
        return _fail(502, exc.message)
    except Exception:
        log.exception("ask failed")
        return _fail(500, GENERIC_ERROR)


@app.post("/ask_voice")
async def ask_voice(audio: UploadFile = File(...), voice: str = Form("")):
    if (denied := _ready_error()):
        return denied
    data = await audio.read(config.MAX_AUDIO_BYTES + 1)
    if not data:
        return _fail(400, "No audio received. Please try again.")
    if len(data) > config.MAX_AUDIO_BYTES:
        return _fail(413, "That recording is too long. Please keep it under 30 seconds.")
    try:
        content_type = (audio.content_type or "audio/webm").split(";")[0]
        question, _lang = await state.sarvam.transcribe(data, content_type=content_type)
        if not question:
            return _fail(400, "I could not hear a question. Please try speaking again.")
        return await answer_question(question[:config.MAX_QUESTION_CHARS], _voice_or_default(voice))
    except SarvamError as exc:
        return _fail(502, exc.message)
    except Exception:
        log.exception("ask_voice failed")
        return _fail(500, GENERIC_ERROR)


app.mount("/static", StaticFiles(directory=config.STATIC_DIR), name="static")


if __name__ == "__main__":
    print(f"\n  Voice Agent  ->  http://{config.HOST}:{config.PORT}\n")
    uvicorn.run(app, host=config.HOST, port=config.PORT, log_level="warning")
