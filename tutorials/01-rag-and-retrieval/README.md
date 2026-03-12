# RAG and Retrieval Tutorials

This directory contains tutorials on Retrieval-Augmented Generation (RAG) and various retrieval techniques using IBM Watsonx and LangChain.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account

### Python Version
- **Minimum**: Python 3.10
- **Recommended**: Python 3.11
- **Maximum**: Python 3.13

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/01-rag-and-retrieval
   ```
3. Open and run your first tutorial: `langchain-rag.ipynb`

## Tutorials

### 1. **LangChain RAG** (`langchain-rag.ipynb`)
Introduction to RAG using LangChain and IBM Watsonx.
- **Topics**: Basic RAG pipeline, vector stores, embeddings
- **Prerequisites**: Base dependencies
- **Estimated time**: 20-30 minutes

### 2. **Agentic RAG** (`agentic-rag.ipynb`)
Combine RAG with agent capabilities for dynamic retrieval.
- **Topics**: Agent-based retrieval, tool calling, dynamic queries
- **Prerequisites**: RAG dependencies + agent concepts
- **Estimated time**: 30-40 minutes

### 3. **Self-RAG** (`self_rag.ipynb`)
Self-reflective RAG that evaluates and improves its own responses.
- **Topics**: Self-reflection, retrieval evaluation, iterative improvement
- **Prerequisites**: RAG dependencies + transformers
- **Estimated time**: 40-50 minutes

### 4. **Corrective RAG** (`correctiverag.ipynb`)
RAG with correction mechanisms for improved accuracy.
- **Topics**: Error correction, retrieval refinement, quality assessment
- **Prerequisites**: RAG dependencies
- **Estimated time**: 30-40 minutes

### 5. **Graph RAG** (`graphrag.ipynb`)
Use knowledge graphs for structured retrieval.
- **Topics**: Neo4j integration, graph-based retrieval, structured knowledge
- **Prerequisites**: RAG dependencies + Neo4j database
- **Estimated time**: 40-50 minutes
- **Additional setup**: Neo4j database instance required

### 6. **RAG Chunking Strategies** (`rag-chunking-strategies.ipynb`)
Explore different text chunking approaches for optimal retrieval.
- **Topics**: Text splitting, chunk size optimization, overlap strategies
- **Prerequisites**: RAG dependencies
- **Estimated time**: 30-40 minutes

### 7. **RAG Evaluation with RAGAS** (`rag-evaluation-ragas.ipynb`)
Evaluate RAG system performance using RAGAS metrics.
- **Topics**: RAG metrics, evaluation frameworks, performance analysis
- **Prerequisites**: RAG dependencies + RAGAS
- **Estimated time**: 30-40 minutes

### 8. **LlamaIndex RAG** (`llamaindex_rag.ipynb`)
RAG implementation using LlamaIndex framework.
- **Topics**: LlamaIndex basics, index creation, querying
- **Prerequisites**: RAG dependencies + LlamaIndex (optional)
- **Estimated time**: 30-40 minutes
- **Note**: May require additional LlamaIndex packages

### 9. **Docling Granite Question Answering** (`docling_granite_question_answering.ipynb`)
Document processing and Q&A using Docling and Granite models.
- **Topics**: Document parsing, Docling integration, Q&A systems
- **Prerequisites**: RAG dependencies + docling
- **Estimated time**: 30-40 minutes

### 10. **DeepSeek RAG Reasoning** (`deepseek_rag_reasoning_docling_watsonx.ipynb`)
Advanced RAG with reasoning capabilities using DeepSeek and Docling.
- **Topics**: Reasoning over documents, advanced retrieval, Docling integration
- **Prerequisites**: RAG dependencies + Ollama
- **Estimated time**: 40-50 minutes

### 11. **AutoGen Local Multi-Agent RAG** (`autogen-local-multi-agent-rag.ipynb`)
Multi-agent RAG system using AutoGen framework.
- **Topics**: Multi-agent collaboration, distributed retrieval, AutoGen
- **Prerequisites**: RAG dependencies + requirements-multiagent.txt
- **Estimated time**: 50-60 minutes

## Key Concepts

### What is RAG?
Retrieval-Augmented Generation (RAG) combines:
- **Retrieval**: Finding relevant information from a knowledge base
- **Generation**: Using LLMs to generate responses based on retrieved context

### RAG Pipeline Components
1. **Document Loading**: Ingest documents from various sources
2. **Text Splitting**: Break documents into manageable chunks
3. **Embedding**: Convert text chunks into vector representations
4. **Vector Store**: Store and index embeddings for efficient retrieval
5. **Retrieval**: Find relevant chunks based on user queries
6. **Generation**: Generate responses using retrieved context

### Vector Stores
- **ChromaDB**: Lightweight, easy-to-use vector database
- **FAISS**: Facebook's efficient similarity search library
- **Neo4j**: Graph database for structured knowledge retrieval

## Common Use Cases

- **Question Answering**: Answer questions based on document collections
- **Document Search**: Find relevant documents or passages
- **Knowledge Base**: Build searchable knowledge repositories
- **Chatbots**: Create context-aware conversational agents
- **Research Assistant**: Help users explore and understand documents

## Troubleshooting

### Issue: Package installation fails
**Solution**: Ensure you're using Python 3.10-3.13 and have the latest pip:
```bash
python -m pip install --upgrade pip
pip install -r requirements-rag.txt
```

### Issue: Import errors for vector stores
**Solution**: Verify ChromaDB and FAISS are installed:
```bash
pip install chromadb faiss-cpu
```

### Issue: Neo4j connection errors (Graph RAG)
**Solution**: Ensure Neo4j is running and connection details are correct:
```bash
# Check Neo4j status
neo4j status

# Start Neo4j if needed
neo4j start
```

### Issue: Out of memory errors
**Solution**: Reduce batch size or chunk size in your RAG pipeline:
```python
# Example: Reduce chunk size
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,  # Reduced from 1000
    chunk_overlap=50
)
```

### Issue: Slow retrieval performance
**Solution**: 
- Use FAISS instead of ChromaDB for large datasets
- Reduce the number of retrieved documents (k parameter)
- Consider using approximate nearest neighbor search

### Issue: Version conflicts
**Solution**: Create a fresh virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements-rag.txt
```

## Best Practices

1. **Chunk Size**: Start with 500-1000 characters, adjust based on your use case
2. **Chunk Overlap**: Use 10-20% overlap to maintain context
3. **Embedding Model**: Use sentence-transformers for general purpose, domain-specific models for specialized content
4. **Vector Store**: ChromaDB for development, FAISS for production
5. **Retrieval Count**: Start with k=3-5 documents, adjust based on response quality
6. **Evaluation**: Use RAGAS to measure and improve RAG performance

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [LangChain RAG Documentation](https://python.langchain.com/docs/use_cases/question_answering/)
- [RAGAS Documentation](https://docs.ragas.io/)
- [ChromaDB Documentation](https://docs.trychroma.com/)
- [FAISS Documentation](https://faiss.ai/)

## Contributing

Found an issue or want to add a new RAG tutorial? See our [Contributing Guide](../../CONTRIBUTING.md) for details on how to contribute.

## License

See the [LICENSE](../../LICENSE) file in the repository root for license information.