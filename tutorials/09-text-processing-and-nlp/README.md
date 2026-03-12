# Text Processing and NLP Tutorials

This directory contains tutorials on natural language processing, text analysis, classification, and summarization using IBM Watsonx and NLP frameworks.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/09-text-processing-and-nlp
   ```
3. Open and run your first tutorial

## Available Tutorials

### 1. **Abstractive Text Summarization** (`abstractive-text-summarization.ipynb`)
Generate concise summaries using LLMs.
- **Topics**: Summarization techniques, prompt engineering, evaluation
- **Time**: 30-40 minutes

### 2. **Python Text Summarization** (`python_text_summarization.ipynb`)
Traditional and modern summarization approaches.
- **Topics**: Extractive vs abstractive, NLTK, transformers
- **Time**: 35-45 minutes

### 3. **Text Classification with PyTorch** (`text-classification-pytorch.ipynb`)
Build text classifiers using PyTorch and transformers.
- **Topics**: Fine-tuning, BERT, classification, training
- **Prerequisites**: Optional dependencies (PyTorch)
- **Time**: 45-60 minutes

### 4. **Unit Testing with WCA** (`unit-test-with-wca/`)
Generate unit tests using Watsonx Code Assistant.
- **Topics**: Test generation, code quality, automation
- **Time**: 25-35 minutes

## Key Concepts

### Text Summarization
- **Extractive**: Select important sentences from original text
- **Abstractive**: Generate new sentences capturing key ideas

### Text Classification
- **Binary**: Two classes (spam/not spam)
- **Multi-class**: Multiple exclusive classes
- **Multi-label**: Multiple non-exclusive labels

### NLP Pipeline
1. Text Preprocessing (tokenization, cleaning)
2. Feature Extraction (embeddings, TF-IDF)
3. Model Training
4. Evaluation

## Common Use Cases

- **Summarization**: News aggregation, document management, email digests
- **Classification**: Sentiment analysis, topic modeling, spam filtering
- **Named Entity Recognition**: Extract entities (people, places, organizations)
- **Text Generation**: Create new content

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [Hugging Face Transformers](https://huggingface.co/docs/transformers)
- [NLTK Documentation](https://www.nltk.org/)
- [spaCy Documentation](https://spacy.io/)

## Contributing

Found an issue or want to add a new NLP tutorial? See our [Contributing Guide](../../CONTRIBUTING.md).

## License

See the [LICENSE](../../LICENSE) file in the repository root.