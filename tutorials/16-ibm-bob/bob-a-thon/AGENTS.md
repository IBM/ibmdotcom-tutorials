# Project guide for Bob

This is a small voice agent: the user asks a question by typing or speaking, the app searches a
PDF, and answers aloud. **Everything runs on Sarvam AI APIs** (speech-to-text, LLM, text-to-speech)
with one key.

## Map of the project

| File | What it does | Change it when you want to... |
|---|---|---|
| `data/*.pdf` | The document the agent answers from | use a different PDF |
| `assistant.json` | Title, personality, topic, welcome text, sample questions | re-brand the agent |
| `.env` | `SARVAM_API_KEY` (never commit, never print) | set the key |
| `config.py` | Models, voices, limits, chunk size | tune behaviour |
| `rag.py` | PDF -> chunks -> BM25 search | improve retrieval |
| `sarvam.py` | The 3 Sarvam API calls (STT, chat, TTS) | change models / API usage |
| `app.py` | FastAPI server and the question -> answer pipeline | change the prompt or flow |
| `static/` | The web page (HTML, CSS, JS) | change the look |
| `ingest.py` | Builds the search index from `data/*.pdf` | re-index after a PDF change |
| `tests/` | Offline tests (no network, no key needed) | keep green after every change |

## Run it

```
python -m venv .venv && source .venv/bin/activate     # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env                                  # then put your key in .env
python ingest.py
python app.py                                         # http://127.0.0.1:8000
```

Tests: `pip install -r requirements-dev.txt && python -m pytest`

## Rules

- **Never** hardcode, print, log or commit the Sarvam key. It lives only in `.env`.
- Keep the server bound to `127.0.0.1`.
- After changing the PDF, run `python ingest.py` (the app also re-indexes on start-up).
- Keep answers short and speakable: no markdown or bullet lists in spoken replies.
- Put new dependencies in `requirements.txt` with an exact version, and prefer the latest stable one.
- Run `python -m pytest` after changes and fix failures before finishing.
- Page text and model output are shown with `textContent`, never `innerHTML`.
