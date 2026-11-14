# Voice Agent with Sarvam AI — Bob-a-thon starter

A small **voice agent** that answers questions from **your own PDF**, by typing or speaking, and
replies in a spoken voice. It runs on your laptop and uses **only Sarvam AI** — one API key for
speech-to-text, the LLM and text-to-speech.

```
  your voice ──► Sarvam STT ──► search your PDF ──► Sarvam LLM ──► Sarvam TTS ──► spoken answer
  (or typing)    (saaras)         (BM25 keywords)    (Sarvam 105B)    (bulbul)
```

It works in English and Indian languages (Hindi, Tamil, Telugu, Bengali, Marathi, Kannada,
Gujarati, Malayalam, Punjabi, Odia): ask in a language, get the answer in the same language.

> **New here?** Follow **[BOB_TUTORIAL.md](BOB_TUTORIAL.md)**. It walks you through the whole
> thing with copy-paste prompts for Bob, from `git clone` to a talking agent on your PDF.

---

## Quick start (no Bob)

You need: **Python 3.11+**, a **Sarvam API key** ([get one here](https://dashboard.sarvam.ai)), and
Chrome, Edge or Firefox (for the microphone).

```bash
python3 -m venv .venv
source .venv/bin/activate            # Windows: .venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env                 # Windows: copy .env.example .env
# open .env in an editor and paste your key after SARVAM_API_KEY=

python ingest.py                     # reads the PDF(s) in data/
python app.py                        # then open http://127.0.0.1:8000
```

Click a sample question, or press **Mic**, speak, and press **Stop**.

## Use your own PDF

1. Delete the sample PDF from `data/` and put your PDF there.
2. `python ingest.py`
3. (Optional) edit `assistant.json` so the title, persona and sample questions match your PDF.
4. `python app.py`

The PDF must contain **selectable text** (try selecting a sentence with the mouse). Scanned
images have no text and will be rejected with a clear message.

## What is in the folder

| Path | Purpose |
|---|---|
| `data/` | Your PDF(s). Ships with a 50-page excerpt of the FAO cookbook *From land and water* |
| `assistant.json` | Title, personality, topic, welcome message, sample questions |
| `.env` | Your `SARVAM_API_KEY` (you create it; never committed) |
| `app.py` | The web server and the question → answer pipeline |
| `sarvam.py` | The three Sarvam API calls: speech-to-text, chat, text-to-speech |
| `rag.py` | PDF → chunks → keyword search (BM25). No GPU, no model downloads |
| `ingest.py` | Builds the search index from `data/*.pdf` |
| `config.py` | Models, voices and limits |
| `static/` | The web page |
| `tests/` | 45 offline tests (`pip install -r requirements-dev.txt && python -m pytest`) |
| `AGENTS.md` | A project guide that Bob reads automatically |

## Good to know

- **Your key stays on your computer.** It lives in `.env`, is read by the Python server, and is
  never sent to the web page. `.env` is git-ignored. Never paste your key into a chat or commit it.
- **The server only listens on `127.0.0.1`**, so nobody else on your network can reach it.
- **Voice questions are limited to about 30 seconds** (a Sarvam limit for this endpoint).
- **Sarvam usage costs credits.** A typed question uses the LLM and TTS; a spoken one adds STT.
- **Why keyword search, not embeddings?** Sarvam has no embeddings model on this tier, and keyword
  search keeps the install tiny (about 6 packages). Questions in non-English scripts are first
  rewritten into English search terms (set `TRANSLATE_QUERY=false` if your PDF is not in English).

## Troubleshooting

| You see | Do this |
|---|---|
| "SARVAM_API_KEY is missing" | Create `.env` from `.env.example`, paste the key, restart `python app.py` |
| "Sarvam rejected the API key" | The key is wrong or revoked. Check it on the Sarvam dashboard |
| "rate limit or quota reached" | Wait a minute, or check your credits on the dashboard |
| "No PDF found" | Put a `.pdf` in `data/`, then restart |
| "No readable text found" | Your PDF is a scan. Use a PDF with selectable text |
| Mic does nothing | Allow microphone access in the browser; use `http://127.0.0.1:8000` (not another address) |
| "I could not find that in the document" | The PDF really does not cover it, or try different keywords |
| `Address already in use` | Another app uses port 8000: set `PORT=8001` in `.env` |
| `python: command not found` | Use `python3`, or install Python 3.11+ |

## Credits

Sample content: FAO. 2026. *From land and water – Recipes from women pastoralists, producers,
fishers and farmers.* Rome. <https://doi.org/10.4060/ce1223en> (excerpt, pages 11–60, images
removed). Used under the FAO publication terms for non-commercial purposes.
