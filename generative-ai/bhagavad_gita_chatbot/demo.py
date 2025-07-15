# Bhagavad Gita NLP Chatbot using Semantic Search & FAISS
import pandas as pd
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import gradio as gr

# Step 1: Load Bhagavad Gita data
data = pd.read_csv("https://raw.githubusercontent.com/Rahul29999/-Bhagavad-Gita-NLP-Chatbot-using-Semantic-Search-and-FAISS/main/Bhagwad_Gita.csv")
verses = data['EngMeaning'].astype(str).tolist()  # Use 'Shloka' if you want Sanskrit

# Step 2: Generate embeddings
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')
embeddings = model.encode(verses, show_progress_bar=True)

# Step 3: Create FAISS index
dimension = embeddings[0].shape[0]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(embeddings))

# Step 4: Search function
def search_verse(query):
    query_vec = model.encode([query])
    top_k = 3
    distances, indices = index.search(np.array(query_vec), top_k)
    return "\n\n".join([verses[i] for i in indices[0]])

# Step 5: Gradio UI
gr.Interface(
    fn=search_verse,
    inputs=gr.Textbox(lines=2, placeholder="Ask something like 'What is detachment?'"),
    outputs="text",
    title="🕉 Bhagavad Gita NLP Chatbot",
    description="Ask life questions and receive meaningful answers from the Gita's English verses using semantic search + FAISS."
).launch(share=True)
