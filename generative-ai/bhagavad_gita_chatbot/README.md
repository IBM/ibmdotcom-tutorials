#  📜🤖 Bhagavad Gita NLP Chatbot using Semantic Search & FAISS

This project presents a semantic chatbot that retrieves spiritually meaningful verses from the **Bhagavad Gita** based on user queries. Built using modern **Natural Language Processing (NLP)** techniques like sentence transformers and FAISS, this chatbot bridges ancient Indian wisdom with contemporary AI.

---

## 🧠 Overview

The chatbot allows users to ask open-ended questions like:

> "How can I control my desires?"  
> "What is karma according to the Gita?"

It then returns the top-matching verses from the Gita using **semantic similarity**, not just keyword matching — making it more intelligent and human-like.

---

## 🗂 Dataset Description

We use a CSV dataset named `Bhagwad_Gita.csv` hosted on GitHub.  
The dataset includes **verse-level data** in three languages:

| Column         | Description                         |
|----------------|-------------------------------------|
| `Shloka`       | Original Sanskrit verse             |
| `EngMeaning`   | English translation of the verse    |
| `HinMeaning`   | Hindi translation                   |
| `Chapter`, `Verse` | Chapter and Verse numbers       |

You can toggle which language the chatbot responds in by changing one line in the script (default: English).

---

## 📦 Libraries Used

The following libraries are used to build this chatbot:

| Library                | Purpose                                      |
|------------------------|----------------------------------------------|
| `sentence-transformers` | Generate sentence-level semantic embeddings |
| `faiss-cpu`            | Perform fast similarity search               |
| `gradio`               | Build interactive chatbot UI                |
| `pandas`               | Load and process CSV data                   |
| `numpy`                | Handle vector operations                    |

---

## 🛠️ Setup & Installation

```bash
pip install sentence-transformers faiss-cpu gradio pandas numpy
````

OR use the included `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

## ⚙️ How It Works – Full Pipeline

### 1️⃣ Import Libraries

All required modules for data handling, NLP, and UI are imported at the top.

```python
import pandas as pd
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import gradio as gr
```

---

### 2️⃣ Load and Inspect Dataset

```python
data = pd.read_csv("https://raw.githubusercontent.com/Rahul29999/-Bhagavad-Gita-NLP-Chatbot-using-Semantic-Search-and-FAISS/main/Bhagwad_Gita.csv")
verses = data['EngMeaning'].astype(str).tolist()  # You can also use 'Shloka' or 'HinMeaning'
```

You may switch to Hindi or Sanskrit by changing `EngMeaning` to `HinMeaning` or `Shloka`.

---

### 3️⃣ Sentence Embedding with Transformers

We use HuggingFace's `paraphrase-MiniLM-L6-v2` for converting each verse to a dense vector.

```python
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')
embeddings = model.encode(verses, show_progress_bar=True)
```

---

### 4️⃣ FAISS Vector Indexing

FAISS allows fast retrieval of nearest verses based on query embedding.

```python
index = faiss.IndexFlatL2(embeddings[0].shape[0])
index.add(np.array(embeddings))
```

---

### 5️⃣ Semantic Search Function

This function takes a user question and returns top 3 closest verses.

```python
def search_verse(query):
    query_vec = model.encode([query])
    distances, indices = index.search(np.array(query_vec), 3)
    return "\n\n".join([verses[i] for i in indices[0]])
```

---

### 6️⃣ Gradio Chat Interface

A clean UI is launched where the user can interact with the chatbot.

```python
gr.Interface(
    fn=search_verse,
    inputs=gr.Textbox(lines=2, placeholder="Ask something like 'What is karma?'"),
    outputs="text",
    title="Bhagavad Gita NLP Chatbot",
    description="Ask life questions and receive relevant verses from the Gita using semantic search."
).launch(share=True)
```

---

## 💬 Sample Input-Output

**Input:** `"How can I control my desires?"`
**Output:**

> *"When a man thinks of objects, attachment to them arises; from attachment, desire is born; from desire, anger arises..."*
> — *Bhagavad Gita 2.62*

---

## 🌍 Multi-language Support (Optional)

You can switch the language of output by simply changing:

```python
verses = data['HinMeaning'].astype(str).tolist()  # For Hindi  
verses = data['Shloka'].astype(str).tolist()     # For Sanskrit
```

---

## 📈 Results

* ⏱️ \~1s average response time
* 🔍 Context-aware retrieval of verses
* 🧘 Real-time spiritual exploration using AI

---

## 🧠 Future Scope

* 🎤 Add voice output (TTS)
* 📱 Deploy as web app (Flask / Streamlit)
* 🗣️ Multi-turn memory-based conversation
* 🌐 Language toggle via UI

---

## 🙏 Author

**Rahul Kumar Sharma**
* B.Tech, Mining Engineering — IIT (ISM) Dhanbad
* 📧 [20je0749@iitism.ac.in](mailto:20je0749@iitism.ac.in)
* 🔗 [GitHub](https://github.com/Rahul29999) | [LinkedIn](https://linkedin.com/in/rahul-kumar-sharma-aa0b57233) | [Kaggle](https://www.kaggle.com/oops26/code)

---
