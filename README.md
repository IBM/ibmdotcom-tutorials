# IBM Tutorials Repository

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Documentation](https://img.shields.io/badge/docs-mkdocs-blue)](https://ibm.github.io/ibmdotcom-tutorials/)

Welcome to the IBM Tutorials repository - your comprehensive resource for learning cutting-edge AI, machine learning, and generative AI technologies through hands-on tutorials and projects.

## 🎯 What You'll Find Here

This repository contains **60+ tutorials** organized by learning intent, covering:

- **Retrieval-Augmented Generation (RAG)** - Build intelligent document Q&A systems
- **AI Agents & Orchestration** - Create autonomous agents with LangChain, LangGraph, and more
- **Multi-Agent Systems** - Implement collaborative AI systems with CrewAI, BeeAI, and AutoGen
- **Prompt Engineering** - Master the art of effective LLM communication
- **Multimodal AI** - Work with vision, speech, and multimodal models
- **Tool & Function Calling** - Extend LLM capabilities with external tools
- **Guardrails & Safety** - Build responsible AI systems
- **Time Series & Forecasting** - Apply AI to temporal data
- **Text Processing & NLP** - Classic and modern NLP techniques
- **Full-Stack AI Applications** - Complete end-to-end AI projects
- **Observability & Monitoring** - Track and optimize AI system performance

## 🚀 Quick Start

### Prerequisites

- **Python 3.11+** recommended
- **IBM watsonx.ai account** (for most tutorials) - [Sign up here](https://www.ibm.com/watsonx)
- **Jupyter Notebook** or **JupyterLab**
- **Git** for cloning the repository

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IBM/ibmdotcom-tutorials.git
   cd ibmdotcom-tutorials
   ```

2. **Set up your environment:**
   ```bash
   # Create a virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # Install dependencies (varies by tutorial)
   pip install -r requirements.txt  # If available in tutorial directory
   ```

3. **Configure credentials:**
   - Most tutorials require IBM watsonx.ai credentials
   - See our [Setup Guide](docs/getting-started/setup.md) for detailed instructions

4. **Start learning:**
   ```bash
   jupyter notebook
   # Navigate to tutorials/ and open any .ipynb file
   ```

## 📚 Tutorial Categories

### [01 - RAG and Retrieval](tutorials/01-rag-and-retrieval/)
Build intelligent systems that answer questions from your documents using vector search and embeddings.

**Featured Tutorials:**
- [LangChain RAG](tutorials/01-rag-and-retrieval/langchain-rag.ipynb) - Your first RAG system
- [Agentic RAG](tutorials/01-rag-and-retrieval/agentic-rag.ipynb) - RAG with reasoning capabilities
- [RAG Evaluation with Ragas](tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb) - Measure performance

### [02 - Agents & Orchestration](tutorials/02-agents-and-orchestration/)
Create autonomous AI agents that can plan, reason, and execute complex tasks.

**Featured Tutorials:**
- [LLM Agent Orchestration](tutorials/02-agents-and-orchestration/llm-agent-orchestration.ipynb)
- [Building Agentic Workflows with LangGraph](tutorials/02-agents-and-orchestration/building-agentic-workflow-langgraph.ipynb)
- [SQL Agent Application](tutorials/02-agents-and-orchestration/sql-agent-app/) - Full-stack agent app

### [03 - Multi-Agent Systems](tutorials/03-multi-agent-systems/)
Implement collaborative AI systems where multiple agents work together.

**Featured Projects:**
- [CrewAI Retail Example](tutorials/03-multi-agent-systems/crewAI-multiagent-retail-example.md)
- [BeeAI Agent-to-Agent Tutorial](tutorials/03-multi-agent-systems/a2a_tutorial/)
- [Customer Service Call Analysis](tutorials/03-multi-agent-systems/multiagent-collab-cs-call-center-analysis/)
- [ChatDev with watsonx](tutorials/03-multi-agent-systems/chatdev_watsonx_tutorial_/)

### [04 - Prompt Engineering](tutorials/04-prompt-engineering/)
Master techniques for effective LLM communication and optimization.

### [05 - Multimodal AI](tutorials/05-multimodal-ai/)
Work with vision, speech, and multimodal models for diverse AI applications.

**Featured Tutorials:**
- [Granite Vision PPT Analyzer](tutorials/05-multimodal-ai/ppt-ai-analyzer-granite-vision.ipynb)
- [AI Personal Trainer with Llama](tutorials/05-multimodal-ai/ai-personal-trainer-llama/)
- [Granite Speech 3.3](tutorials/05-multimodal-ai/granite-speech-3.3-8b.ipynb)

### [06 - Tool & Function Calling](tutorials/06-tool-calling-and-function-calling/)
Extend LLM capabilities by integrating external tools and APIs.

### [07 - Guardrails & Safety](tutorials/07-guardrails-and-safety/)
Build responsible AI systems with safety mechanisms and content filtering.

### [08 - Time Series & Forecasting](tutorials/08-time-series-and-forecasting/)
Apply AI to temporal data for forecasting and analysis.

### [09 - Text Processing & NLP](tutorials/09-text-processing-and-nlp/)
Classic and modern natural language processing techniques.

### [10 - Machine Learning Foundations](tutorials/10-machine-learning-foundations/)
Core ML concepts and techniques.

### [11 - Model Context Protocol](tutorials/11-model-context-protocol/)
Work with MCP servers and IBM Bob integration.

### [12 - Observability & Monitoring](tutorials/12-observability-and-monitoring/)
Track, monitor, and optimize AI system performance.

**Featured Tutorials:**
- [watsonx Orchestrate with AgentOps](tutorials/12-observability-and-monitoring/wxo_agentops/)
- [watsonx Observability with Langfuse](tutorials/12-observability-and-monitoring/wxo_observability_langfuse/)

### [13 - Full-Stack Applications](tutorials/13-full-stack-applications/)
Complete end-to-end AI applications and projects.

**Featured Projects:**
- [AI Stylist](tutorials/13-full-stack-applications/ai-stylist/)
- [TTRPG AI](tutorials/13-full-stack-applications/ttrpgai/)
- [Silly Story Time](tutorials/13-full-stack-applications/silly_story_time/)

### [14 - LoRA & Fine-Tuning](tutorials/14-lora-and-fine-tuning/)
Customize models for your specific use cases.

## 🎓 Learning Paths

### Beginner Path: Getting Started with AI
1. [LangChain RAG](tutorials/01-rag-and-retrieval/langchain-rag.ipynb)
2. [LLM Agent Orchestration](tutorials/02-agents-and-orchestration/llm-agent-orchestration.ipynb)
3. [Function Calling](tutorials/06-tool-calling-and-function-calling/function-calling.ipynb)

### Intermediate Path: Building AI Systems
1. [Agentic RAG](tutorials/01-rag-and-retrieval/agentic-rag.ipynb)
2. [Building Agentic Workflows](tutorials/02-agents-and-orchestration/building-agentic-workflow-langgraph.ipynb)
3. [RAG Evaluation](tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb)

### Advanced Path: Production AI
1. [Multi-Agent Systems](tutorials/03-multi-agent-systems/)
2. [Observability & Monitoring](tutorials/12-observability-and-monitoring/)
3. [Full-Stack Applications](tutorials/13-full-stack-applications/)

## 🛠️ Technologies Used

- **IBM watsonx.ai** - Enterprise AI platform
- **IBM Granite Models** - Open-source foundation models
- **LangChain** - LLM application framework
- **LangGraph** - Agent workflow orchestration
- **LlamaIndex** - Data framework for LLMs
- **CrewAI** - Multi-agent orchestration
- **BeeAI** - Agent framework
- **AutoGen** - Multi-agent conversations
- **Ollama** - Local LLM deployment
- **Chroma, Milvus** - Vector databases
- **Ragas** - RAG evaluation framework

## 📖 Documentation

- **[Full Documentation](https://ibm.github.io/ibmdotcom-tutorials/)** - Complete docs site
- **[Setup Guide](docs/getting-started/setup.md)** - Environment configuration
- **[Contributing Guide](docs/references/contributing.md)** - How to contribute
- **[Tutorials List](docs/tutorials-list.md)** - Complete tutorial index

## 🤝 Contributing

We welcome contributions! Whether you want to:

- 🐛 Report a bug
- 💡 Suggest a new tutorial
- 📝 Improve documentation
- 🔧 Submit a pull request

Please see our [Contributing Guide](docs/references/contributing.md) and [Code of Conduct](docs/references/coc.md).

### Adding a New Tutorial

1. Choose the appropriate category in [`tutorials/`](tutorials/)
2. Follow the naming convention: `descriptive-name.ipynb` or `project-name/`
3. Include a clear README if it's a project
4. Test all code before submitting
5. Update the category README with your tutorial

## 📊 Repository Structure

```
ibmdotcom-tutorials/
├── tutorials/              # All tutorials organized by category
│   ├── 01-rag-and-retrieval/
│   ├── 02-agents-and-orchestration/
│   ├── 03-multi-agent-systems/
│   ├── 04-prompt-engineering/
│   ├── 05-multimodal-ai/
│   ├── 06-tool-calling-and-function-calling/
│   ├── 07-guardrails-and-safety/
│   ├── 08-time-series-and-forecasting/
│   ├── 09-text-processing-and-nlp/
│   ├── 10-machine-learning-foundations/
│   ├── 11-model-context-protocol/
│   ├── 12-observability-and-monitoring/
│   ├── 13-full-stack-applications/
│   ├── 14-lora-and-fine-tuning/
│   └── shared-assets/      # Shared data, images, and resources
├── docs/                   # MkDocs documentation
├── .github/                # GitHub workflows and assets
└── README.md              # This file
```

## 🔗 Useful Links

- **[IBM watsonx](https://www.ibm.com/watsonx)** - AI platform
- **[IBM Granite Models](https://www.ibm.com/granite)** - Open-source LLMs
- **[IBM Think](https://www.ibm.com/think)** - Technical articles
- **[GitHub Discussions](https://github.com/IBM/ibmdotcom-tutorials/discussions)** - Community Q&A

## 📝 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

- **Questions?** Open a [GitHub Discussion](https://github.com/IBM/ibmdotcom-tutorials/discussions)
- **Issues?** Report them in [GitHub Issues](https://github.com/IBM/ibmdotcom-tutorials/issues)
- **Documentation:** Visit our [docs site](https://ibm.github.io/ibmdotcom-tutorials/)

## 🌟 Star History

If you find these tutorials helpful, please consider giving us a star! ⭐

---

**Maintained by:** IBM.com Technical Content Team  
**Last Updated:** February 2026  
**Total Tutorials:** 60+  
**Categories:** 14