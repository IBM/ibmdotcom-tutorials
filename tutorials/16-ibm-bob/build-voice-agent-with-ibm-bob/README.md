# Build a Voice Agent with IBM Bob

Welcome to the **Build a Voice Agent with IBM Bob** tutorial repository!

In this tutorial, you will build a small, multilingual **voice agent** that can answer questions aloud from your own PDF document using **IBM Bob** and **Sarvam AI APIs** (Speech-to-Text, LLM, and Text-to-Speech).

---

## 🚀 How to Start with this Tutorial

Follow these simple steps to get started:

### 1. Download the Starter Codebase
You can either clone this repository or download the pre-packaged base code ZIP:
- **Download:** [`voice-agent-starter.zip`](./voice-agent-starter.zip)
- **Unzip** the archive into your workspace folder.

### 2. Follow the Step-by-Step Guide
Open [`build-voice-agent.md`](./build-voice-agent.md) for the full tutorial guide. It includes:
- Overview and architecture of the voice pipeline
- Setup and environment configuration (API keys, virtual environment)
- Pre-made Bob prompt templates for Ask, Agent, and Plan modes
- Step-by-step instructions to swap in your own PDF, customize personality/voices, and run offline tests

### 3. Prerequisites
- **[IBM Bob IDE](https://ibm.biz/bobide)**
- **Python 3.11+** (`python3 --version`)
- A modern browser with microphone access (Chrome, Edge, Firefox)
- A **Sarvam AI API key** from [dashboard.sarvam.ai](https://dashboard.sarvam.ai)

---

## 📂 Repository Contents

| File / Folder | Description |
|---|---|
| [`build-voice-agent.md`](./build-voice-agent.md) | The complete hands-on tutorial and prompt guide |
| [`voice-agent-starter.zip`](./voice-agent-starter.zip) | Base codebase zip file ready for readers to download and extract |
| [`README.md`](./README.md) | Entry point explaining how to start this tutorial |

---

## 💡 Quick Overview of What You Will Build

```
  your voice ──► Sarvam STT ──► search your PDF ──► Sarvam LLM ──► Sarvam TTS ──► spoken answer
  (or typing)    (saaras)         (BM25 keywords)    (Sarvam 105B)    (bulbul)
```

- **Grounded:** Answers strictly from your PDF with page citations.
- **Multilingual:** Supports English and 10 Indian languages.
- **Voice-first:** Speak queries, listen to audio answers.

👉 Jump straight to **[`build-voice-agent.md`](./build-voice-agent.md)** to begin!
