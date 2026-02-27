# Phase 5: Multi-Tiered Requirements Implementation Strategy

## Overview

Based on the comprehensive audit, we will create a **multi-tiered requirements file structure** to handle the diverse dependency needs across tutorials while maintaining simplicity for common use cases.

## Requirements File Architecture

```
repository-root/
├── requirements.txt                    # Base dependencies (most common)
├── requirements-rag.txt               # RAG-specific dependencies
├── requirements-agents.txt            # Agent orchestration dependencies
├── requirements-multiagent.txt        # Multi-agent framework dependencies
├── requirements-optional.txt          # Optional/specialized dependencies
├── requirements-dev.txt               # Development dependencies
└── REQUIREMENTS_MAINTENANCE.md        # Maintenance guide
```

## File Structure Details

### 1. requirements.txt (Base Dependencies)
**Purpose**: Core dependencies needed by 60%+ of tutorials

**Target Tutorials**: 
- Basic prompt engineering
- Simple text processing
- Introductory notebooks

**Key Packages**:
```txt
# Core IBM Watsonx
ibm-watsonx-ai>=1.1.22
langchain-ibm>=0.3.3

# Essential LangChain
langchain>=0.1.0
langchain-community>=0.0.13,<0.3.0
langchain-core>=0.1.17

# Basic utilities
python-dotenv>=1.0.1
requests>=2.32.4
pandas
numpy>=1.24.3,<2

# Jupyter support
jupyterlab
ipykernel
```

**Installation**:
```bash
pip install -r requirements.txt
```

### 2. requirements-rag.txt (RAG-Specific)
**Purpose**: Dependencies for RAG and retrieval tutorials

**Target Tutorials**:
- tutorials/01-rag-and-retrieval/*
- Agentic RAG
- Self-RAG
- Corrective RAG
- Graph RAG
- LlamaIndex RAG

**Key Packages**:
```txt
# Install base first
-r requirements.txt

# Vector stores
chromadb
faiss-cpu>=1.7.4
neo4j

# Document processing
docling>=2.0.0
PyPDF2
pdfminer.six>=20221105
python-pptx
PyMuPDF
beautifulsoup4>=4.12.2
bs4
markdown>=3.5.2

# Text processing
langchain-text-splitters
langchain_chroma
langchain-huggingface
sentence-transformers
transformers>=4.50.0

# Embeddings
huggingface_hub>=0.26.2

# RAG evaluation
ragas==0.2.1
nltk

# LlamaIndex (optional)
# llama-index-embeddings-huggingface
# llama-index-llms-ibm
# llama-index-readers-file
# llama-index-retrievers-bm25
```

**Installation**:
```bash
pip install -r requirements-rag.txt
```

### 3. requirements-agents.txt (Agent Orchestration)
**Purpose**: Dependencies for single-agent and orchestration tutorials

**Target Tutorials**:
- tutorials/02-agents-and-orchestration/*
- Human-in-the-loop agents
- SQL agents
- ReAct agents
- LangGraph agents

**Key Packages**:
```txt
# Install base first
-r requirements.txt

# Agent frameworks
langgraph>0.2,<0.3
langgraph_sdk
langgraph-prebuilt
langchain_experimental

# Tools and integrations
tavily-python
google-search-results
mistralai
langchain-mistralai
langchain-ollama>=0.0.1

# IBM integrations
ibm-watson>=7.0.0
ibm-cos-sdk>=2.14.0
botocore>=1.37.17

# Web frameworks (for agent apps)
streamlit
streamlit-extras
Flask>=2.3.2
Flask-SocketIO>=5.3.4

# Utilities
tiktoken>=0.8.0
tenacity>=8.2.2
statsmodels>=0.14.4
```

**Installation**:
```bash
pip install -r requirements-agents.txt
```

### 4. requirements-multiagent.txt (Multi-Agent Systems)
**Purpose**: Dependencies for multi-agent framework tutorials

**Target Tutorials**:
- tutorials/03-multi-agent-systems/*
- CrewAI tutorials
- BeeAI tutorials (with version notes)
- ACP tutorials
- AutoGen tutorials
- ChatDev tutorials

**Key Packages**:
```txt
# Install base first
-r requirements.txt

# CrewAI framework
crewai[tools]>=0.95.0,<1.0.0
agentops>=0.4.19

# ACP framework
acp-sdk>=1.0.1
pydantic-ai>=0.2.14

# AutoGen framework
pyautogen
ag2[ollama]

# BeeAI framework - VERSION CONFLICT WARNING
# Different tutorials require different versions:
# - a2a tutorials: beeai-framework[a2a]>=0.1.36,<0.2.0
# - beeai_agent_server: beeai-framework==0.1.29
# Install tutorial-specific version as needed

# Pydantic (for multi-agent coordination)
pydantic>=2.10,<3.0.0

# ChatDev dependencies
colorama>=0.4.6
Werkzeug>=3.0.6
Wikipedia-API>=0.6.0
easydict>=1.10
virtualenv>=20.26.6
```

**Installation**:
```bash
pip install -r requirements-multiagent.txt

# For BeeAI tutorials, install specific version:
# pip install "beeai-framework[a2a]>=0.1.36,<0.2.0"  # For a2a tutorials
# OR
# pip install "beeai-framework==0.1.29"  # For beeai_agent_server
```

### 5. requirements-optional.txt (Specialized Dependencies)
**Purpose**: Optional dependencies for specialized tutorials

**Target Tutorials**:
- Multimodal AI
- Time series forecasting
- Fine-tuning
- Guardrails
- Full-stack applications

**Key Packages**:
```txt
# ML/AI specialized
torch
torchvision
torchaudio
accelerate
peft
llamafactory

# Multimodal
Pillow>=10.3.0
soundfile
pytubefix
pytube
moviepy

# Time series
sktime
# granite-tsfm[notebooks] @ git+https://github.com/ibm-granite/granite-tsfm.git@v0.3.1

# Image processing
image
markupsafe

# Visualization
matplotlib
seaborn
wget

# Text utilities
sumy
lxml_html_clean
regex>=2023.6.3
openai>=1.47.1

# Testing
pytest>=8.3.3

# Ollama
ollama

# Additional utilities
tqdm
json-repair
getpass4
```

**Installation**:
```bash
pip install -r requirements-optional.txt
```

### 6. requirements-dev.txt (Development)
**Purpose**: Development and testing dependencies

**Key Packages**:
```txt
# Testing
pytest>=8.3.3
pytest-cov
pytest-asyncio

# Code quality
black
flake8
mypy
isort

# Documentation
sphinx
sphinx-rtd-theme

# Jupyter development
jupyterlab
notebook
ipywidgets
```

## Installation Workflows

### Quick Start (Most Tutorials)
```bash
# Install base dependencies
pip install -r requirements.txt

# Run basic tutorials
jupyter lab
```

### RAG Tutorials
```bash
# Install base + RAG dependencies
pip install -r requirements-rag.txt

# Navigate to RAG tutorials
cd tutorials/01-rag-and-retrieval
jupyter lab
```

### Agent Tutorials
```bash
# Install base + agent dependencies
pip install -r requirements-agents.txt

# Navigate to agent tutorials
cd tutorials/02-agents-and-orchestration
jupyter lab
```

### Multi-Agent Tutorials
```bash
# Install base + multi-agent dependencies
pip install -r requirements-multiagent.txt

# For specific frameworks, install additional packages:
# CrewAI: Already included
# BeeAI: pip install "beeai-framework[a2a]>=0.1.36,<0.2.0"
# ACP: Already included

# Navigate to multi-agent tutorials
cd tutorials/03-multi-agent-systems
jupyter lab
```

### Full Installation (All Dependencies)
```bash
# Install all dependencies (may take 15-20 minutes)
pip install -r requirements.txt
pip install -r requirements-rag.txt
pip install -r requirements-agents.txt
pip install -r requirements-multiagent.txt
pip install -r requirements-optional.txt
```

## Tutorial-Specific Requirements

Some tutorials have unique requirements that cannot be consolidated:

### 1. BeeAI Version Conflicts
**Affected Tutorials**:
- `tutorials/03-multi-agent-systems/a2a_tutorial/` (requires >=0.1.36)
- `tutorials/03-multi-agent-systems/acp_tutorial/beeai_agent_server/` (requires ==0.1.29)

**Solution**: Keep tutorial-specific requirements.txt files

### 2. Git-Based Dependencies
**Affected Tutorials**:
- `tutorials/13-full-stack-applications/ai-stylist/` (transformers from git)
- `tutorials/08-time-series-and-forecasting/time-series-analysis-granite-tspulse/` (granite-tsfm from git)

**Solution**: Document in tutorial README with installation instructions

### 3. ChatDev Exact Pins
**Affected Tutorial**: `tutorials/03-multi-agent-systems/chatdev_watsonx_tutorial_/`

**Solution**: Keep tutorial-specific requirements.txt with exact versions

## Dependency Categories and Rationale

### Core Dependencies (requirements.txt)
- **IBM Watsonx**: Foundation for all IBM AI tutorials
- **LangChain basics**: Used across 70%+ of tutorials
- **Python utilities**: Common across all Python projects
- **Jupyter**: Required for notebook execution

### RAG Dependencies (requirements-rag.txt)
- **Vector stores**: ChromaDB, FAISS for embeddings
- **Document processing**: PDF, DOCX, HTML parsing
- **Text splitting**: Chunking strategies
- **Embeddings**: HuggingFace, sentence transformers
- **Evaluation**: RAGAS for RAG assessment

### Agent Dependencies (requirements-agents.txt)
- **LangGraph**: Agent orchestration framework
- **Tools**: Search, APIs, function calling
- **Web frameworks**: Streamlit for agent UIs
- **IBM services**: Watson, COS for enterprise integration

### Multi-Agent Dependencies (requirements-multiagent.txt)
- **CrewAI**: Role-based multi-agent framework
- **BeeAI**: IBM's multi-agent framework
- **ACP**: Agent Communication Protocol
- **AutoGen**: Microsoft's multi-agent framework
- **Coordination**: Pydantic for data validation

### Optional Dependencies (requirements-optional.txt)
- **ML frameworks**: PyTorch for model training
- **Multimodal**: Image, audio, video processing
- **Time series**: Specialized forecasting libraries
- **Visualization**: Plotting and charting

## Version Conflict Resolution

### Resolved Conflicts

1. **numpy**: `>=1.24.3,<2` (satisfies all requirements)
2. **langchain-community**: `>=0.0.13,<0.3.0` (satisfies version constraints)
3. **ibm-watsonx-ai**: `>=1.1.22` (highest minimum version)
4. **langchain-ibm**: `>=0.3.3` (Poetry caret converted to >=)
5. **langgraph**: `>0.2,<0.3` (specific version range)
6. **crewai[tools]**: `>=0.95.0,<1.0.0` (satisfies both constraints)

### Unresolved Conflicts (Tutorial-Specific)

1. **beeai-framework**: 
   - Conflict: 0.1.29 vs >=0.1.36
   - Solution: Keep in tutorial-specific requirements

2. **transformers**:
   - Conflict: PyPI vs git+https://
   - Solution: Use PyPI in consolidated, document git install in tutorial

## Python Version Support

**Target**: Python 3.10 - 3.13

**Rationale**:
- Python 3.10: Minimum for some older tutorials
- Python 3.11: Recommended for most tutorials
- Python 3.12: Supported by newer packages
- Python 3.13: Upper bound for compatibility

**Testing Priority**:
1. Python 3.11 (primary target)
2. Python 3.10 (backward compatibility)
3. Python 3.12 (forward compatibility)

## Testing Strategy

### Phase 1: RAG Tutorials (Priority)
Test with `requirements-rag.txt`:
- [ ] `tutorials/01-rag-and-retrieval/langchain-rag.ipynb`
- [ ] `tutorials/01-rag-and-retrieval/agentic-rag.ipynb`
- [ ] `tutorials/01-rag-and-retrieval/self_rag.ipynb`
- [ ] `tutorials/01-rag-and-retrieval/correctiverag.ipynb`
- [ ] `tutorials/01-rag-and-retrieval/graphrag.ipynb`

### Phase 2: Agent Tutorials (Priority)
Test with `requirements-agents.txt`:
- [ ] `tutorials/02-agents-and-orchestration/llm-agent-orchestration.ipynb`
- [ ] `tutorials/02-agents-and-orchestration/human-in-the-loop-agent.ipynb`
- [ ] `tutorials/02-agents-and-orchestration/langgraph-mistral-sql-agent.ipynb`
- [ ] `tutorials/02-agents-and-orchestration/sql-agent-app/` (Streamlit app)

### Phase 3: Multi-Agent Tutorials
Test with `requirements-multiagent.txt`:
- [ ] CrewAI tutorials
- [ ] BeeAI tutorials (with specific versions)
- [ ] ACP tutorials
- [ ] AutoGen tutorials

### Phase 4: Other Categories
Test remaining tutorials with appropriate requirements files

## Implementation Timeline

### Week 1: File Creation
- [x] Day 1-2: Complete dependency audit
- [ ] Day 3: Create requirements-base.txt
- [ ] Day 4: Create requirements-rag.txt
- [ ] Day 5: Create requirements-agents.txt

### Week 2: Testing & Documentation
- [ ] Day 1: Create requirements-multiagent.txt
- [ ] Day 2: Create requirements-optional.txt
- [ ] Day 3-4: Test RAG and Agent tutorials
- [ ] Day 5: Create REQUIREMENTS_MAINTENANCE.md

### Week 3: Finalization
- [ ] Day 1-2: Test remaining tutorials
- [ ] Day 3: Update README.md
- [ ] Day 4: Document tutorial-specific requirements
- [ ] Day 5: Final review and adjustments

## Success Metrics

1. ✅ **Coverage**: 80%+ of tutorials work with consolidated requirements
2. ✅ **Installation Time**: <10 minutes for base + category requirements
3. ✅ **Documentation**: Clear installation instructions for each category
4. ✅ **Maintenance**: Guidelines for adding new dependencies
5. ✅ **Testing**: All priority tutorials (RAG + Agents) tested successfully

## Next Steps

1. Switch to Code mode to begin creating requirements files
2. Start with requirements.txt (base dependencies)
3. Create requirements-rag.txt (RAG-specific)
4. Create requirements-agents.txt (Agent-specific)
5. Test with priority tutorials
6. Iterate based on test results

## Questions Resolved

✅ **Python Version**: Target 3.10-3.13
✅ **Conflicting Dependencies**: Keep tutorial-specific for incompatible versions
✅ **Git Dependencies**: Convert to PyPI where possible, document exceptions
✅ **Implementation Approach**: Multi-tiered requirements files
✅ **Testing Priority**: RAG and Agent tutorials first

## Ready for Implementation

The plan is now complete and ready for implementation. We will:
1. Create 6 requirements files (base, rag, agents, multiagent, optional, dev)
2. Test with RAG and Agent tutorials first
3. Document tutorial-specific requirements
4. Create maintenance guide
5. Update main README

**Estimated Total Time**: 15-20 hours
**Priority**: High (Phase 5 of repository reorganization)
**Status**: Ready to proceed to Code mode