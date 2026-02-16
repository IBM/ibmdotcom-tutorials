# RAG and Retrieval

## Overview
Learn how to build Retrieval-Augmented Generation (RAG) systems that answer questions from your documents using vector search, embeddings, and retrieval techniques. These tutorials cover everything from basic RAG implementations to advanced patterns like corrective RAG, self-RAG, and graph RAG.

## What You'll Learn
- Implement RAG pipelines with LangChain, LlamaIndex, and other frameworks
- Evaluate RAG system performance using Ragas
- Apply advanced chunking strategies for better retrieval
- Build agentic RAG systems that can reason and self-correct
- Use graph-based retrieval for complex knowledge bases
- Integrate document processing with Docling and Granite models

## Prerequisites
- Python 3.11+
- IBM watsonx.ai account (for most tutorials)
- Basic understanding of LLMs and embeddings
- Familiarity with vector databases (helpful but not required)

## Tutorials

### Beginner-Friendly
| Tutorial | Description | Technologies |
|----------|-------------|--------------|
| [LangChain RAG](./langchain-rag.ipynb) | Build your first RAG system with LangChain | LangChain, watsonx, Chroma |
| [LlamaIndex RAG](./llamaindex-rag.ipynb) | Implement RAG using LlamaIndex framework | LlamaIndex, watsonx |
| [Docling Granite QA](./docling-granite-question-answering.ipynb) | Question answering with document processing | Docling, Granite, watsonx |

### Intermediate
| Tutorial | Description | Technologies |
|----------|-------------|--------------|
| [RAG Chunking Strategies](./rag-chunking-strategies.ipynb) | Optimize retrieval with advanced chunking | LangChain, watsonx |
| [RAG Evaluation with Ragas](./rag-evaluation-ragas.ipynb) | Evaluate RAG pipeline performance | Ragas, Python, watsonx |
| [Graph RAG](./graphrag.ipynb) | Use knowledge graphs for retrieval | GraphRAG, Neo4j |
| [DeepSeek RAG Reasoning](./deepseek-rag-reasoning-docling-watsonx.ipynb) | Advanced reasoning with DeepSeek and RAG | DeepSeek, Docling, watsonx |

### Advanced
| Tutorial | Description | Technologies |
|----------|-------------|--------------|
| [Agentic RAG](./agentic-rag.ipynb) | Build RAG systems with agentic capabilities | LangChain, watsonx |
| [Corrective RAG](./correctiverag.ipynb) | Implement self-correcting RAG with Tavily | Granite, Tavily, LangGraph |
| [Self-RAG](./self-rag.ipynb) | Build self-reflective RAG agents | Granite, LangGraph |
| [AutoGen Multi-Agent RAG](./autogen-local-multi-agent-rag.ipynb) | Multi-agent RAG with local Granite models | AutoGen, Granite, Ollama |

## Recommended Learning Path

1. **Start Here**: [LangChain RAG](./langchain-rag.ipynb) - Learn RAG fundamentals
2. **Then Try**: [RAG Chunking Strategies](./rag-chunking-strategies.ipynb) - Optimize your retrieval
3. **Evaluate**: [RAG Evaluation with Ragas](./rag-evaluation-ragas.ipynb) - Measure performance
4. **Advanced**: [Agentic RAG](./agentic-rag.ipynb) or [Self-RAG](./self-rag.ipynb) - Add intelligence

## Related Categories

- [Agents & Orchestration](../02-agents-and-orchestration/) - For building agents that use RAG
- [Prompt Engineering](../04-prompt-engineering/) - For optimizing RAG prompts
- [Multimodal AI](../05-multimodal-ai/) - For RAG with images and documents

## Common Use Cases

- **Document Q&A**: Answer questions from internal documentation, manuals, or knowledge bases
- **Customer Support**: Build chatbots that retrieve relevant information from support docs
- **Research Assistant**: Help users find and synthesize information from large document collections
- **Code Documentation**: Query codebases and technical documentation
- **Legal/Compliance**: Search and retrieve information from contracts and regulations

## Key Concepts

- **Retrieval-Augmented Generation**: Combining document retrieval with LLM generation
- **Vector Embeddings**: Converting text to numerical representations for similarity search
- **Chunking**: Breaking documents into optimal sizes for retrieval
- **Reranking**: Improving retrieval quality by reordering results
- **Evaluation Metrics**: Measuring RAG performance (faithfulness, relevance, etc.)

## Additional Resources

- [IBM watsonx.ai Documentation](https://www.ibm.com/docs/en/watsonx/saas)
- [LangChain RAG Documentation](https://python.langchain.com/docs/use_cases/question_answering/)
- [LlamaIndex Documentation](https://docs.llamaindex.ai/)
- [Ragas Evaluation Framework](https://docs.ragas.io/)