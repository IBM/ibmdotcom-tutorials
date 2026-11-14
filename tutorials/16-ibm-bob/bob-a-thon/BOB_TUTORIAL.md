# Build a Voice Agent with Bob

**Goal:** go from `git clone` to a talking agent that answers questions from your own PDF,
using Bob for almost every step. You will copy-paste a handful of prompts.

## Overview

**The use case:** a lot of useful information is locked inside long PDFs: handbooks, manuals,
scheme guides, FAQs. Reading them takes time, and not everyone is comfortable reading, especially
in English. This agent lets someone simply ask a question out loud (or type it) in their own
language and hear a short answer taken from the document.

- **Grounded:** it answers only from your PDF and shows the page numbers it used. If the answer
  is not in the document, it says so instead of guessing.
- **Voice-first:** speak the question, hear the answer. No reading or typing needed.
- **Multilingual:** ask in English, Hindi or another Indian language and get the reply in the same language.
- **One key, no extra infrastructure:** speech-to-text, the language model and text-to-speech all
  run on Sarvam AI APIs. Search is a simple local keyword index, so there is no database or
  embeddings model to set up.

Example uses: a college handbook helper, a product-manual assistant, an HR-policy guide, a recipe
book you can talk to, or a village scheme guide for people who prefer listening to reading.

**What you will build** (it is already written — Bob will help you run, understand and change it):

```
  Voice ──► STT ──► Search your PDF ──► LLM ──► TTS ──► Audio Answer
```

| Stage | What happens | Powered by |
|---|---|---|
| Voice | You speak (or type) a question in the browser | Browser microphone |
| STT | Speech is converted to text | Sarvam speech-to-text |
| Search your PDF | The most relevant passages are found | Local BM25 keyword search |
| LLM | A short answer is written using only those passages | Sarvam chat model |
| TTS | The answer text is turned into speech | Sarvam text-to-speech |
| Audio Answer | The answer is played back, with page numbers shown | Browser audio |

**How to read this tutorial:** every block marked **PROMPT** is text to paste into Bob's chat.
Bob's wording will differ a little each time; that is normal. If something looks wrong, tell Bob
what you see (see [Step 9](#step-9--when-something-goes-wrong)).

---

## Step 0 — What you need

| You need | How to check |
|---|---|
| IBM Bob IDE | You are reading this in it (or open it from your Bob install) |
| Python 3.11 or newer | `python3 --version` (Windows: `python --version`) |
| Git | `git --version` |
| A browser with a microphone | Chrome, Edge or Firefox |
| A Sarvam API key | Step 2 |
| A PDF you want to talk to | Any PDF **with selectable text** (Step 6) |

---

## Step 1 — Clone the repository and open it in Bob

In a terminal:

```bash
git clone <YOUR-REPOSITORY-URL>
cd <repository-folder>
```

Then in Bob: **File → Open Folder…** and choose the cloned folder. If Bob asks
*"Do you trust the authors of the files in this folder?"*, click **Yes, I trust the authors**.

Open Bob's chat panel with the Bob icon in the side bar, or **Option + Command + B** (Mac) /
**Ctrl + Alt + B** (Windows).

> This project already contains an `AGENTS.md` file, so Bob knows how it is organised the moment
> you open it. You do **not** need to run `/init`.

---

## Step 2 — Get your Sarvam API key and save it (you do this one yourself)

1. Go to <https://dashboard.sarvam.ai>, sign in, and create an API key.
2. In the project folder, make your own settings file from the template.
   Mac / Linux: `cp .env.example .env`   Windows: `copy .env.example .env`
3. Open `.env` in the editor and paste your key after `SARVAM_API_KEY=` (no quotes, no spaces). Save.

**Why not ask Bob to do this?** The project ships a `.bobignore` file that stops Bob's file tools
from reading `.env`. Your key stays between you and your computer: never paste it into a chat,
and never commit it (`.env` is already git-ignored).

---

## Step 3 — Understand the project (Ask mode)

Choose **Ask** in the mode selector under the chat box. Ask mode is read-only, so Bob cannot
change anything while you explore.

> **PROMPT 1 — tour of the project**
> ```text
> Give me a quick tour of this project. In plain language, what happens from the moment I speak
> a question to the moment I hear the answer? List which file does each step.
> ```

> **PROMPT 2 — see where the Sarvam APIs are used**
> ```text
> @sarvam.py Which three Sarvam APIs does this app call, and which models does it use for each?
> Where would I change a model or the voice?
> ```

> **PROMPT 3 — how does it find answers in the PDF**
> ```text
> @rag.py Explain how a PDF becomes searchable and how a question finds the right passage.
> Why doesn't this project need an embeddings model?
> ```

You should now know the five moving parts: **`data/`** (the PDF), **`rag.py`** (search),
**`sarvam.py`** (speech + LLM), **`app.py`** (the pipeline), **`static/`** (the web page).

---

## Step 4 — Install and run it (Agent mode)

Switch to **Agent** mode. Agent mode can create files and run commands; Bob asks for your
approval before each action, so click **Approve** when you are happy with it.

> **PROMPT 4 — set up and start the app**
> ```text
> Set this project up so I can run it: create a Python virtual environment called .venv, install
> requirements.txt into it, then run `python ingest.py`. Do NOT open or print my .env file.
> When that works, start the app with `python app.py` and tell me the address to open.
> I am on <Mac / Windows / Linux>.
> ```

Bob will run roughly these commands (use them yourself if you prefer a terminal):

```bash
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python ingest.py
python app.py
```

When you see `Voice Agent -> http://127.0.0.1:8000`, open **<http://127.0.0.1:8000>** in your browser.

**Try it:**
1. Click a **sample question** chip, then **Send**. You should see an answer, the **page numbers**
   it came from, and hear a voice.
2. Press **Mic**, say *"Which recipe uses moringa?"*, then press **Stop**. The page shows what it
   heard, then answers aloud. The first time, allow microphone access in the browser.
3. Change the **Voice** drop-down and ask again.
4. Ask a question in **Hindi** or another Indian language; the answer comes back in that language.
5. Ask something that is *not* in the PDF. A good agent says it does not know instead of making things up.

If the page says `SARVAM_API_KEY is missing`, redo Step 2 and restart the app.

---

## Step 5 — Check that everything is healthy

> **PROMPT 5 — run the tests**
> ```text
> Install requirements-dev.txt and run the tests with `python -m pytest`. Tell me if anything
> fails and why. These tests don't use the network or my API key.
> ```

You should see all tests pass (about 45). This is also your safety net for the changes below.
After each change, ask Bob to run them again.

---

## Step 6 — Swap in your own PDF 

Pick a PDF with selectable text. Quick check: open it and try to highlight a sentence with the
mouse. If you cannot, it is a scan and will not work.

**Easiest way:** drag your PDF into the project's `data/` folder in Bob's file explorer, delete
the sample PDF from there, then use the prompt below. Or let Bob copy it from where it is.

> **PROMPT 6a — use my PDF**
> ```text
> I want this agent to answer questions from my own PDF instead of the sample.
> My PDF is at: <full path, e.g. /Users/me/Downloads/handbook.pdf   or   C:\Users\me\Downloads\handbook.pdf>
> Remove the sample PDF from data/, copy my PDF into data/, rebuild the search index with
> `python ingest.py`, and tell me how many pages and chunks were indexed.
> ```

> **PROMPT 6b — if the PDF is already in `data/`**
> ```text
> I put my own PDF in data/ and deleted the sample. Rebuild the search index and tell me how
> many pages and chunks it found. Then restart the app.
> ```

Restart the app after re-indexing (Bob can do it, or press `Ctrl + C` in the terminal and run
`python app.py` again), then **refresh the browser page**.

Now ask a question **about your PDF**. The answer should quote your document and show its page numbers.

> **PROMPT 6c — check the quality**
> ```text
> Search my PDF for 5 interesting facts and write one test question for each. Run each question
> through the app's search (rag.Index.search) and show me which page it finds. Tell me if any
> question finds nothing.
> ```

---

## Step 7 — Make it yours: title, personality, sample questions

The agent's identity lives in **`assistant.json`**. It still says "Farm & Food", so change it to
match your PDF.

> **PROMPT 7 — re-brand the agent**
> ```text
> Update assistant.json for my PDF, which is about <describe your PDF in one sentence>.
> Set a fitting title and subtitle, make the persona <e.g. "a friendly teacher" / "a calm HR
> helper" / "an enthusiastic guide">, describe the topic, write a short welcome message, and
> add 4 sample questions that my PDF can really answer. Keep it valid JSON.
> ```

Refresh the browser (restart the app if the title did not change). The new title and sample-question
chips appear.

---

## Step 8 — Customise the behaviour (pick any)

Each prompt below changes one thing. Run the tests and refresh the browser after each.

**Change the answer style** (in `app.py`, the prompt Bob wrote for the LLM)
> ```text
> In app.py, change the system prompt so answers are exactly two sentences and always end with a
> one-line follow-up question I could ask next. Keep the rule that it must use only the PDF context.
> ```

**Make it answer in a fixed language**
> ```text
> Change the agent so it always answers in Hindi (hi-IN), even when the question is in English.
> The spoken voice must match. Update the prompt in app.py and the language passed to text-to-speech.
> ```

**Change the default voice or add voices**
> ```text
> Make "kavya" the default voice. Show me in config.py where the list of voices is.
> ```

**Use a different Sarvam chat model**
> ```text
> Read https://docs.sarvam.ai/api/token-factory/chat-completions and tell me which chat models I
> can use with the /v1 endpoint. Then switch the default model in config.py to the other one,
> run the tests, and explain the difference.
> ```

**Show the retrieved passages in the page (great for debugging)**
> ```text
> Add a "Show sources" toggle under each answer in the web page that reveals the exact PDF
> passages used. Return them from /ask in app.py, and render them in static/app.js using
> textContent only (never innerHTML). Add a test for the new field.
> ```

**Add a second PDF**
> ```text
> Make the agent use every PDF in data/. Check that rag.py already supports this, add my second
> PDF at <path> to data/, re-index, and make the "Sources" line show the file name as well as the page.
> ```

**Make answers faster**
> ```text
> The reply feels slow. Add timing logs to app.py showing how many milliseconds each step takes
> (search, language-model call, text-to-speech), run one question, and tell me which step is slowest
> and one thing I could try about it.
> ```

> **Tip:** the best prompts name the **file**, the **change**, and the **check**.
> *"In `app.py` … change … then run the tests."* beats *"make it better."*

---

## Step 9 — When something goes wrong

Paste what you see (error text or a description of the screen) and ask Bob to fix it.

> **PROMPT 9 — generic fixer**
> ```text
> The app isn't working. This is what I see: <paste the error from the terminal or the browser>.
> Find the cause, fix it, run the tests, and tell me what you changed. Don't open my .env file.
> ```

Common cases:

| You see | Meaning |
|---|---|
| `SARVAM_API_KEY is missing` | `.env` is missing or the key line is empty (Step 2). Restart after fixing |
| "Sarvam rejected the API key" | Key is wrong or revoked. Create a new one on the dashboard |
| "rate limit or quota reached" | Out of credits or too many calls. Wait, or check the dashboard |
| "No readable text found" | Your PDF is a scan (images). Use one with selectable text |
| "I could not find that in the document" | Rephrase with words that are in the PDF (search is keyword-based) |
| Mic button does nothing | Allow the microphone in the browser; open `http://127.0.0.1:8000`, not another address |
| `Address already in use` | Something else uses port 8000. Add `PORT=8001` to `.env` and restart |

---

## Step 10 — Ideas to go further

- Make an agent for **your own use case**: a college handbook, a product manual, a legal document,
  a recipe book, a village scheme guide, your company's FAQ.
- Ask Bob to add a **"clear chat" button** or **dark mode**.
- Ask Bob to add **answer feedback buttons** (thumbs up / down) that log to a local file.
- Ask Bob to support **uploading a PDF from the web page** instead of copying it to `data/`.
- Ask Bob to write a **README section for your agent** so you can show it to others.

---

## Prompt cheat-sheet

| I want to… | Mode | Say to Bob |
|---|---|---|
| Understand a file | Ask | `@file.py Explain this file in simple terms.` |
| Run the app | Agent | `Start the app and tell me the address.` |
| Use my PDF | Agent | `Replace the sample PDF with <path>, rebuild the index.` |
| Re-brand | Agent | `Update assistant.json for <topic>.` |
| Change behaviour | Agent | `In <file>, change <X> so that <Y>. Then run the tests.` |
| Debug | Agent | `Here is the error: <paste>. Fix it and run the tests.` |
| Plan something big first | Plan | `Plan how to add <feature>. Don't change any files yet.` |

## A note on safety

- **Never put your API key in a prompt, a screenshot or a commit.** If you do, delete it on the
  Sarvam dashboard and create a new one.
- Bob asks for approval before running commands. Read what it is about to run.
- This app listens on `127.0.0.1` only, so it is not reachable from other computers.
- When the Bob-a-thon is over, **delete your key** from the Sarvam dashboard.
