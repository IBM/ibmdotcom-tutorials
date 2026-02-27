# Phase 5: README Documentation Strategy

## Overview

Each tutorial category will have a README.md file that clearly indicates which requirements file(s) users need to install. This ensures users can quickly get started with the tutorials in that category.

## README Structure Template

Each category README should include:

1. **Category Overview** - Brief description of tutorials in this category
2. **Prerequisites** - Python version, system requirements
3. **Installation Instructions** - Clear, copy-paste commands
4. **Quick Start** - How to run the first tutorial
5. **Tutorial List** - Links to individual tutorials with descriptions
6. **Troubleshooting** - Common issues and solutions
7. **Additional Resources** - Links to documentation

## Category-Specific README Plans

### 1. tutorials/01-rag-and-retrieval/README.md

**Status**: Exists, needs update

**Required Installation**:
```bash
# From repository root
pip install -r requirements-rag.txt
```

**Key Sections to Add/Update**:
- Installation section with requirements-rag.txt
- Note about vector store dependencies (ChromaDB, FAISS)
- Document processing requirements (docling, PyPDF2)
- Python version: 3.10-3.13

**Template Content**:
```markdown
## Installation

This category requires RAG-specific dependencies. From the repository root, run:

```bash
pip install -r requirements-rag.txt
```

This will install:
- Base dependencies (IBM Watsonx, LangChain)
- Vector stores (ChromaDB, FAISS)
- Document processing (docling, PyPDF2, BeautifulSoup)
- Text processing (sentence-transformers, transformers)
- RAG evaluation (RAGAS)

**Estimated installation time**: 5-7 minutes
**Disk space required**: ~800 MB

### Python Version
- Minimum: Python 3.10
- Recommended: Python 3.11
- Maximum: Python 3.13
```

### 2. tutorials/02-agents-and-orchestration/README.md

**Status**: Exists, needs update

**Required Installation**:
```bash
# From repository root
pip install -r requirements-agents.txt
```

**Key Sections to Add/Update**:
- Installation section with requirements-agents.txt
- Note about LangGraph and agent frameworks
- Streamlit for agent UIs
- Python version: 3.10-3.13

**Template Content**:
```markdown
## Installation

This category requires agent orchestration dependencies. From the repository root, run:

```bash
pip install -r requirements-agents.txt
```

This will install:
- Base dependencies (IBM Watsonx, LangChain)
- Agent frameworks (LangGraph, LangGraph SDK)
- Tools and integrations (Tavily, Google Search, Mistral)
- Web frameworks (Streamlit for agent UIs)
- IBM services (Watson, COS)

**Estimated installation time**: 4-6 minutes
**Disk space required**: ~600 MB

### Python Version
- Minimum: Python 3.10
- Recommended: Python 3.11
- Maximum: Python 3.13

### Running Agent Applications

Some tutorials include Streamlit applications:

```bash
cd sql-agent-app
streamlit run app.py
```
```

### 3. tutorials/03-multi-agent-systems/README.md

**Status**: Needs creation

**Required Installation**:
```bash
# From repository root
pip install -r requirements-multiagent.txt

# For BeeAI tutorials, install specific version:
pip install "beeai-framework[a2a]>=0.1.36,<0.2.0"  # For a2a tutorials
# OR
pip install "beeai-framework==0.1.29"  # For beeai_agent_server
```

**Key Sections to Add/Update**:
- Installation section with requirements-multiagent.txt
- Special note about BeeAI version conflicts
- Framework-specific instructions (CrewAI, BeeAI, ACP, AutoGen)
- Python version: 3.10-3.13 (some frameworks require 3.11+)

**Template Content**:
```markdown
## Installation

This category requires multi-agent framework dependencies. From the repository root, run:

```bash
pip install -r requirements-multiagent.txt
```

This will install:
- Base dependencies (IBM Watsonx, LangChain)
- CrewAI framework with tools
- ACP SDK for agent communication
- AutoGen framework
- Pydantic for data validation

**Estimated installation time**: 4-5 minutes
**Disk space required**: ~500 MB

### Python Version
- Minimum: Python 3.10
- Recommended: Python 3.11
- Maximum: Python 3.13

### Framework-Specific Requirements

#### BeeAI Framework
⚠️ **Version Conflict Warning**: Different BeeAI tutorials require different versions.

For **a2a tutorials** (Agent-to-Agent communication):
```bash
pip install "beeai-framework[a2a]>=0.1.36,<0.2.0"
pip install "pydantic>=2.10,<3.0.0"
```

For **beeai_agent_server**:
```bash
pip install "beeai-framework==0.1.29"
pip install "pydantic-ai==0.2.14"
```

#### CrewAI Framework
Already included in requirements-multiagent.txt. No additional installation needed.

#### ACP Framework
Already included in requirements-multiagent.txt. No additional installation needed.

#### AutoGen Framework
Already included in requirements-multiagent.txt. For web-surfer capabilities:
```bash
pip install autogen-ext[web-surfer]
playwright install
```

### Tutorial-Specific Requirements

Some tutorials maintain their own requirements files due to version conflicts:
- `a2a_tutorial/beeai-a2a-client/requirements.txt`
- `a2a_tutorial/beeai-a2a-server/requirements.txt`
- `chatdev_watsonx_tutorial_/requirements.txt`

Refer to individual tutorial READMEs for specific instructions.
```

### 4. tutorials/04-prompt-engineering/README.md

**Status**: Needs creation

**Required Installation**:
```bash
# From repository root
pip install -r requirements.txt  # Base dependencies sufficient
```

**Template Content**:
```markdown
## Installation

Most prompt engineering tutorials only require base dependencies. From the repository root, run:

```bash
pip install -r requirements.txt
```

This will install:
- IBM Watsonx AI
- LangChain basics
- Python utilities

**Estimated installation time**: 2-3 minutes
**Disk space required**: ~150 MB

### Python Version
- Minimum: Python 3.10
- Recommended: Python 3.11
- Maximum: Python 3.13

### Advanced Tutorials

Some advanced tutorials (e.g., Agentic Chunking, Prompt Caching) may require additional dependencies:

```bash
pip install -r requirements-rag.txt  # For chunking strategies
```

Check individual tutorial notebooks for specific requirements.
```

### 5. tutorials/05-multimodal-ai/README.md

**Status**: Needs creation

**Required Installation**:
```bash
# From repository root
pip install -r requirements-optional.txt
```

**Template Content**:
```markdown
## Installation

Multimodal AI tutorials require specialized dependencies. From the repository root, run:

```bash
pip install -r requirements-optional.txt
```

This will install:
- Base dependencies (IBM Watsonx, LangChain)
- PyTorch and vision libraries
- Image processing (Pillow)
- Audio processing (soundfile, pytubefix)
- Video processing (moviepy)
- Transformers for multimodal models

**Estimated installation time**: 10-15 minutes
**Disk space required**: ~2 GB

### Python Version
- Minimum: Python 3.10
- Recommended: Python 3.11
- Maximum: Python 3.12

### GPU Support (Optional)

For faster inference, install PyTorch with CUDA support:

```bash
# For CUDA 11.8
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# For CUDA 12.1
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

### Tutorial-Specific Notes

- **Granite Speech**: Requires audio processing libraries
- **PPT AI Analyzer**: Requires python-pptx
- **AI Personal Trainer**: Requires image processing
```

### 6. Other Tutorial Categories

#### tutorials/06-tool-calling-and-function-calling/README.md
```bash
pip install -r requirements-agents.txt
```

#### tutorials/07-guardrails-and-safety/README.md
```bash
pip install -r requirements.txt
pip install -r requirements-optional.txt  # For advanced guardrails
```

#### tutorials/08-time-series-and-forecasting/README.md
```bash
pip install -r requirements-optional.txt
# For Granite TSFM:
pip install "granite-tsfm[notebooks] @ git+https://github.com/ibm-granite/granite-tsfm.git@v0.3.1"
```

#### tutorials/09-text-processing-and-nlp/README.md
```bash
pip install -r requirements.txt
pip install -r requirements-optional.txt  # For PyTorch-based tutorials
```

#### tutorials/10-machine-learning-foundations/README.md
```bash
pip install -r requirements-optional.txt
```

#### tutorials/11-model-context-protocol/README.md
```bash
pip install -r requirements.txt
```

#### tutorials/12-observability-and-monitoring/README.md
```bash
pip install -r requirements-agents.txt
```

#### tutorials/13-full-stack-applications/README.md
```bash
pip install -r requirements-agents.txt  # For Streamlit apps
pip install -r requirements-optional.txt  # For specialized apps
```

#### tutorials/14-lora-and-fine-tuning/README.md
```bash
pip install -r requirements-optional.txt
pip install llamafactory  # For LoRA training
```

## README Update Checklist

For each tutorial category README:

- [ ] Add clear "Installation" section at the top
- [ ] Specify which requirements file(s) to use
- [ ] Include estimated installation time
- [ ] Include disk space requirements
- [ ] Specify Python version compatibility
- [ ] Add framework-specific notes (if applicable)
- [ ] Document version conflicts (if any)
- [ ] Include troubleshooting section
- [ ] Add links to main repository README
- [ ] Include quick start example
- [ ] List all tutorials in the category
- [ ] Add "Additional Resources" section

## Standard README Sections

### 1. Header
```markdown
# [Category Name]

Brief description of what this category covers.
```

### 2. Installation
```markdown
## Installation

From the repository root, run:

```bash
pip install -r requirements-[category].txt
```

**Estimated installation time**: X-Y minutes
**Disk space required**: ~X MB/GB

### Python Version
- Minimum: Python 3.X
- Recommended: Python 3.Y
- Maximum: Python 3.Z
```

### 3. Quick Start
```markdown
## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/[category-name]
   ```
3. Launch Jupyter:
   ```bash
   jupyter lab
   ```
4. Open and run your first tutorial: `[tutorial-name].ipynb`
```

### 4. Tutorials
```markdown
## Tutorials in This Category

1. **[Tutorial Name]** (`tutorial-file.ipynb`)
   - Description of what this tutorial covers
   - Prerequisites: [any specific requirements]
   - Estimated time: X minutes

2. **[Another Tutorial]** (`another-tutorial.ipynb`)
   - Description
   - Prerequisites
   - Estimated time
```

### 5. Troubleshooting
```markdown
## Troubleshooting

### Common Issues

**Issue**: Package installation fails
**Solution**: Ensure you're using Python 3.10-3.13 and have the latest pip:
```bash
python -m pip install --upgrade pip
```

**Issue**: Import errors
**Solution**: Verify you installed the correct requirements file from the repository root.

**Issue**: Version conflicts
**Solution**: Create a fresh virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements-[category].txt
```
```

### 6. Additional Resources
```markdown
## Additional Resources

- [Main Repository README](../../README.md)
- [Requirements Maintenance Guide](../../REQUIREMENTS_MAINTENANCE.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [LangChain Documentation](https://python.langchain.com/)
```

## Implementation Order

1. **Priority 1** (RAG & Agents - for testing):
   - [ ] tutorials/01-rag-and-retrieval/README.md
   - [ ] tutorials/02-agents-and-orchestration/README.md

2. **Priority 2** (Multi-Agent):
   - [ ] tutorials/03-multi-agent-systems/README.md

3. **Priority 3** (Other categories):
   - [ ] tutorials/04-prompt-engineering/README.md
   - [ ] tutorials/05-multimodal-ai/README.md
   - [ ] tutorials/06-tool-calling-and-function-calling/README.md
   - [ ] tutorials/07-guardrails-and-safety/README.md
   - [ ] tutorials/08-time-series-and-forecasting/README.md
   - [ ] tutorials/09-text-processing-and-nlp/README.md
   - [ ] tutorials/10-machine-learning-foundations/README.md
   - [ ] tutorials/11-model-context-protocol/README.md
   - [ ] tutorials/12-observability-and-monitoring/README.md
   - [ ] tutorials/13-full-stack-applications/README.md
   - [ ] tutorials/14-lora-and-fine-tuning/README.md

## Consistency Guidelines

1. **Always reference from repository root**: All installation commands should assume user is in repository root
2. **Use consistent formatting**: Follow the template structure
3. **Include estimates**: Always provide installation time and disk space estimates
4. **Version compatibility**: Always specify Python version requirements
5. **Link to main README**: Include link to main repository README
6. **Troubleshooting**: Include common issues and solutions
7. **Framework-specific notes**: Document any framework-specific requirements or conflicts

## Testing README Instructions

For each README:
1. Follow installation instructions exactly as written
2. Verify all commands work from repository root
3. Test quick start example
4. Verify links work
5. Check that troubleshooting solutions are accurate

## Success Criteria

- [ ] All 14 tutorial category READMEs created/updated
- [ ] Each README clearly indicates required installation
- [ ] Installation instructions tested and verified
- [ ] Consistent formatting across all READMEs
- [ ] All links functional
- [ ] Troubleshooting sections helpful and accurate
- [ ] User can get started in <5 minutes after reading README