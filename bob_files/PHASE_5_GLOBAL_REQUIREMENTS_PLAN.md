# Phase 5: Global Requirements Setup - Implementation Plan

## Executive Summary

This document outlines the comprehensive plan for creating a single, consolidated `requirements.txt` file that installs all dependencies for any notebook in the repository. The audit has identified **81 Jupyter notebooks with inline pip install commands**, **6 requirements.txt files**, and **7 pyproject.toml files** across the tutorials directory.

## Current State Analysis

### Dependency Management Approaches Found

1. **Traditional requirements.txt** (6 files)
   - Simple pip-based dependency management
   - Used in older tutorials and simpler projects

2. **Modern pyproject.toml** (7 files)
   - Poetry, UV, and Hatch-based projects
   - Used in newer multi-agent system tutorials
   - Includes lock files for reproducibility

3. **Inline Jupyter Notebook pip installs** (81 notebooks)
   - Most common approach across tutorials
   - Varies from simple to complex installations
   - Some use git+https:// URLs for latest packages

### Discovered Requirements Files

#### requirements.txt Files (6 total)

1. **tutorials/03-multi-agent-systems/a2a_tutorial/beeai-a2a-client/requirements.txt**
   ```
   beeai-framework[a2a]>=0.1.36,<0.2.0
   pydantic>=2.10,<3.0.0
   ```

2. **tutorials/03-multi-agent-systems/a2a_tutorial/beeai-a2a-server/requirements.txt**
   ```
   beeai-framework[a2a,search]>=0.1.36,<0.2.0
   ```

3. **tutorials/03-multi-agent-systems/bee-ai-multi-agent-contract-management/requirements.txt**
   ```
   beeai-framework
   beeai-framework[duckduckgo]
   langchain-core
   langchain-community
   pandas
   ```

4. **tutorials/03-multi-agent-systems/chatdev_watsonx_tutorial_/requirements.txt**
   ```
   colorama==0.4.6
   Flask==2.3.2
   Flask-SocketIO==5.3.4
   importlib-metadata==6.8.0
   numpy==1.24.3
   openai==1.47.1
   regex==2023.6.3
   requests==2.32.4
   tenacity==8.2.2
   tiktoken==0.8.0
   virtualenv==20.26.6
   Werkzeug==3.0.6
   Markdown==3.4.4
   Pillow==10.3.0
   Wikipedia-API==0.6.0
   beautifulsoup4==4.12.2
   faiss-cpu==1.7.4
   pyyaml==6.0
   easydict==1.10
   langchain-ibm
   ```

5. **tutorials/13-full-stack-applications/ai-stylist/requirements.txt**
   ```
   streamlit
   git+https://github.com/huggingface/transformers
   image
   langchain
   botocore
   langchain-ibm
   ibm-watsonx-ai
   python-dotenv
   torch
   markupsafe
   ```

6. **tutorials/02-agents-and-orchestration/sql-agent-app/requirements.txt**
   ```
   streamlit
   ibm-watsonx-ai
   langchain-ibm
   mistralai
   langchain-mistralai
   langgraph
   langchain_experimental
   tavily-python
   langchain-community
   python-dotenv
   image
   ibm-watson>=7.0.0
   streamlit-extras
   torch
   ```

#### pyproject.toml Files (7 total)

1. **tutorials/02-agents-and-orchestration/react-agent-it-support/pyproject.toml** (Poetry)
   - Python: ^3.11
   - Key deps: langchain-ibm ^0.3.3, ibm-watsonx-ai >=1.1.22, langgraph >0.2,<0.3, numpy <2

2. **tutorials/03-multi-agent-systems/multiagent-collab-cs-call-center-analysis/pyproject.toml** (Hatch)
   - Python: >=3.10,<=3.13
   - Key deps: crewai[tools]>=0.80.0,<1.0.0

3. **tutorials/03-multi-agent-systems/my_retail_advisor/pyproject.toml** (Hatch)
   - Python: >=3.10,<=3.13
   - Key deps: crewai[tools]>=0.80.0,<1.0.0

4. **tutorials/03-multi-agent-systems/acp_tutorial/pyproject.toml**
   - Python: >=3.11, <4.0
   - Key deps: acp-sdk==1.0.1

5. **tutorials/03-multi-agent-systems/acp_tutorial/beeai_agent_server/pyproject.toml**
   - Python: >=3.11
   - Key deps: acp-sdk==1.0.1, beeai-framework==0.1.29, pydantic-ai==0.2.14

6. **tutorials/03-multi-agent-systems/acp_tutorial/crewai_agent_server/pyproject.toml**
   - Python: >=3.11, <4.0
   - Key deps: acp-sdk==1.0.1, crewai[tools]>=0.95.0, agentops==0.4.19

7. **tutorials/03-multi-agent-systems/chatdev_watsonx_tutorial_/WareHouse/.../requirements.txt**
   - Key deps: flask

### Common Dependencies Identified

#### Core IBM Watsonx Ecosystem
- `ibm-watsonx-ai` (various versions, >=1.1.14, >=1.1.22)
- `langchain-ibm` (^0.3.3, unversioned)
- `ibm-watson` (>=7.0.0)
- `ibm-cos-sdk` (^2.14.0)

#### LangChain Ecosystem
- `langchain` (various versions)
- `langchain-community` (various versions, <0.3.0)
- `langchain-core`
- `langchain_experimental`
- `langchain-text-splitters`
- `langchain_chroma`
- `langchain-huggingface`
- `langchain-mistralai`
- `langchain-ollama` (>=0.0.1)
- `langgraph` (>0.2,<0.3)
- `langgraph_sdk`
- `langgraph-prebuilt`

#### Multi-Agent Frameworks
- `crewai[tools]` (>=0.80.0,<1.0.0, >=0.95.0)
- `beeai-framework` (>=0.1.36,<0.2.0, ==0.1.29)
- `beeai-framework[a2a]`
- `beeai-framework[search]`
- `beeai-framework[duckduckgo]`
- `acp-sdk` (==1.0.1)
- `pydantic-ai` (==0.2.14)
- `agentops` (==0.4.19)
- `pyautogen`
- `ag2[ollama]`

#### ML/AI Libraries
- `transformers` (various, including git+https://github.com/huggingface/transformers)
- `torch` / `torchvision` / `torchaudio`
- `sentence-transformers`
- `huggingface_hub` (>=0.26.2)
- `accelerate`
- `peft`
- `llamafactory`

#### Data Processing
- `pandas`
- `numpy` (==1.24.3, <2)
- `scikit-learn`
- `statsmodels` (^0.14.4)

#### Web & API
- `streamlit`
- `streamlit-extras`
- `Flask` (==2.3.2)
- `Flask-SocketIO` (==5.3.4)
- `Werkzeug` (==3.0.6)
- `requests` (==2.32.4)
- `python-dotenv` (^1.0.1)

#### Document Processing
- `docling` (>=2.0.0)
- `PyPDF2`
- `pdfminer.six` (>=20221105)
- `python-pptx`
- `PyMuPDF`
- `beautifulsoup4` (==4.12.2)
- `bs4`
- `markdown` (>=3.5.2, ==3.4.4)

#### Vector Stores & Search
- `chromadb`
- `faiss-cpu` (==1.7.4)
- `neo4j`

#### Utilities
- `pydantic` (>=2.10,<3.0.0)
- `python-dateutil`
- `tiktoken` (==0.8.0)
- `tenacity` (==8.2.2)
- `colorama` (==0.4.6)
- `regex` (==2023.6.3)
- `openai` (==1.47.1)
- `mistralai`
- `tavily-python`
- `google-search-results`
- `botocore` (^1.37.17)
- `image`
- `markupsafe`
- `Pillow` (==10.3.0)
- `wget`
- `matplotlib`
- `seaborn`
- `nltk`
- `ragas` (==0.2.1)
- `Wikipedia-API` (==0.6.0)
- `pyyaml` (==6.0)
- `easydict` (==1.10)
- `virtualenv` (==20.26.6)
- `importlib-metadata` (==6.8.0)
- `pytest` (^8.3.3)
- `soundfile`
- `pytubefix`
- `pytube`
- `moviepy`
- `tqdm`
- `ollama`
- `sumy`
- `lxml_html_clean`
- `json-repair`
- `getpass4`
- `fqdn`
- `greenlet`
- `isoduration`
- `jsonpointer`
- `tinycss2`
- `uri-template`
- `webcolors`
- `pyarrow`
- `fastparquet`
- `sktime`
- `lomond`
- `six`

#### Time Series & Forecasting
- `granite-tsfm[notebooks]` (from git)
- `sktime`
- `statsmodels`

#### Special Installations
- `git+https://github.com/huggingface/transformers` (ai-stylist)
- `git+https://github.com/ibm-granite/granite-tsfm.git@v0.3.1` (time-series)
- `https://github.com/huggingface/transformers/archive/main.zip` (granite-speech)

## Version Conflicts Identified

### Critical Conflicts

1. **numpy**
   - chatdev: `==1.24.3` (exact pin)
   - react-agent: `<2` (upper bound)
   - **Resolution**: Use `>=1.24.3,<2` to satisfy both

2. **langchain-community**
   - langchain-tools: `<0.3.0`
   - Other tutorials: unversioned
   - **Resolution**: Use `>=0.0.13,<0.3.0`

3. **ibm-watsonx-ai**
   - Various: `>=1.1.14`, `>=1.1.22`
   - react-agent: `>=1.1.22` with Python constraint
   - **Resolution**: Use `>=1.1.22` (highest minimum)

4. **langchain-ibm**
   - react-agent: `^0.3.3` (Poetry caret)
   - Others: unversioned
   - **Resolution**: Use `>=0.3.3`

5. **langgraph**
   - react-agent: `>0.2,<0.3`
   - Others: unversioned
   - **Resolution**: Use `>0.2,<0.3`

6. **crewai[tools]**
   - customer_service_analyzer: `>=0.80.0,<1.0.0`
   - crewai_agent_server: `>=0.95.0`
   - **Resolution**: Use `>=0.95.0,<1.0.0`

7. **beeai-framework**
   - a2a tutorials: `>=0.1.36,<0.2.0`
   - beeai_agent_server: `==0.1.29`
   - **Conflict**: Incompatible versions
   - **Resolution**: Document as tutorial-specific requirement

8. **transformers**
   - ai-stylist: `git+https://github.com/huggingface/transformers` (bleeding edge)
   - Others: standard PyPI versions
   - **Resolution**: Use standard PyPI version, document git install as optional

### Python Version Constraints

- **Minimum**: Python 3.10 (some tutorials)
- **Preferred**: Python 3.11+ (newer tutorials)
- **Maximum**: Python 3.13 (some upper bounds)
- **Recommendation**: Target Python 3.10-3.13 compatibility

## Implementation Strategy

### Phase 1: Complete Dependency Audit ✅ (In Progress)

**Status**: ~70% complete

**Completed**:
- ✅ Identified all requirements.txt files (6 files)
- ✅ Identified all pyproject.toml files (7 files)
- ✅ Searched for inline pip install commands (81 notebooks)
- ✅ Documented version conflicts

**Remaining**:
- [ ] Extract exact package versions from all 81 notebooks
- [ ] Create comprehensive dependency matrix
- [ ] Identify all optional dependencies and extras

### Phase 2: Dependency Consolidation

**Tasks**:
1. Create master dependency inventory spreadsheet
2. Group dependencies by category:
   - Core IBM Watsonx
   - LangChain ecosystem
   - Multi-agent frameworks
   - ML/AI libraries
   - Data processing
   - Web frameworks
   - Document processing
   - Utilities
3. Resolve version conflicts using compatibility matrix
4. Identify tutorial-specific dependencies that cannot be consolidated

### Phase 3: Create Consolidated Requirements

**Deliverables**:
1. **requirements.txt** (root level)
   - Core dependencies needed by most tutorials
   - Resolved version ranges
   - Organized by category with comments
   
2. **requirements-dev.txt** (optional)
   - Development and testing dependencies
   - Jupyter notebook dependencies
   
3. **requirements-optional.txt** (optional)
   - Optional dependencies for specific tutorials
   - Grouped by tutorial category

4. **Tutorial-specific requirements** (keep existing)
   - For tutorials with unique version requirements
   - Document in REQUIREMENTS_MAINTENANCE.md

### Phase 4: Testing & Validation

**Test Environments**:
1. Python 3.10 clean environment
2. Python 3.11 clean environment
3. Python 3.12 clean environment (if compatible)

**Test Process**:
```bash
# Create clean virtual environment
python3.10 -m venv test_env_310
source test_env_310/bin/activate

# Install consolidated requirements
pip install -r requirements.txt

# Run sample notebooks from each category
# Document any installation issues
```

### Phase 5: Documentation

**Documents to Create/Update**:

1. **REQUIREMENTS_MAINTENANCE.md** (new)
   - How to maintain global requirements
   - Guidelines for adding new dependencies
   - Version conflict resolution process
   - Tutorial-specific requirements policy

2. **README.md** (update)
   - Add installation section
   - Reference global requirements.txt
   - Link to REQUIREMENTS_MAINTENANCE.md

3. **Tutorial-specific READMEs** (update as needed)
   - Note when tutorial uses global requirements
   - Document any additional requirements
   - Explain version-specific needs

## Proposed Consolidated requirements.txt Structure

```txt
# =============================================================================
# Global Requirements for IBM Watsonx Tutorials
# =============================================================================
# This file contains dependencies needed by most tutorials in this repository.
# Some tutorials may have additional specific requirements documented in their
# respective directories.
#
# Python Version: 3.10-3.13
# Last Updated: 2026-02-24
# =============================================================================

# -----------------------------------------------------------------------------
# Core IBM Watsonx Ecosystem
# -----------------------------------------------------------------------------
ibm-watsonx-ai>=1.1.22
langchain-ibm>=0.3.3
ibm-watson>=7.0.0
ibm-cos-sdk>=2.14.0

# -----------------------------------------------------------------------------
# LangChain Ecosystem
# -----------------------------------------------------------------------------
langchain>=0.1.0
langchain-community>=0.0.13,<0.3.0
langchain-core>=0.1.17
langchain_experimental
langchain-text-splitters
langchain_chroma
langchain-huggingface
langchain-mistralai
langchain-ollama>=0.0.1
langgraph>0.2,<0.3
langgraph_sdk
langgraph-prebuilt

# -----------------------------------------------------------------------------
# Multi-Agent Frameworks
# -----------------------------------------------------------------------------
crewai[tools]>=0.95.0,<1.0.0
# Note: beeai-framework has version conflicts - see tutorial-specific requirements
# beeai-framework>=0.1.36,<0.2.0
acp-sdk>=1.0.1
pydantic-ai>=0.2.14
agentops>=0.4.19
pyautogen
ag2[ollama]

# -----------------------------------------------------------------------------
# ML/AI Libraries
# -----------------------------------------------------------------------------
transformers>=4.50.0
torch
torchvision
torchaudio
sentence-transformers
huggingface_hub>=0.26.2
accelerate
peft

# -----------------------------------------------------------------------------
# Data Processing
# -----------------------------------------------------------------------------
pandas
numpy>=1.24.3,<2
scikit-learn
statsmodels>=0.14.4

# -----------------------------------------------------------------------------
# Web & API Frameworks
# -----------------------------------------------------------------------------
streamlit
streamlit-extras
Flask>=2.3.2
Flask-SocketIO>=5.3.4
Werkzeug>=3.0.6
requests>=2.32.4
python-dotenv>=1.0.1

# -----------------------------------------------------------------------------
# Document Processing
# -----------------------------------------------------------------------------
docling>=2.0.0
PyPDF2
pdfminer.six>=20221105
python-pptx
PyMuPDF
beautifulsoup4>=4.12.2
bs4
markdown>=3.5.2

# -----------------------------------------------------------------------------
# Vector Stores & Search
# -----------------------------------------------------------------------------
chromadb
faiss-cpu>=1.7.4
neo4j

# -----------------------------------------------------------------------------
# Utilities
# -----------------------------------------------------------------------------
pydantic>=2.10,<3.0.0
tiktoken>=0.8.0
tenacity>=8.2.2
colorama>=0.4.6
regex>=2023.6.3
openai>=1.47.1
mistralai
tavily-python
google-search-results
botocore>=1.37.17
image
markupsafe
Pillow>=10.3.0
wget
matplotlib
seaborn
nltk
ragas==0.2.1
Wikipedia-API>=0.6.0
pyyaml>=6.0
pytest>=8.3.3
tqdm
ollama
sumy
lxml_html_clean
json-repair
getpass4

# -----------------------------------------------------------------------------
# Time Series & Forecasting
# -----------------------------------------------------------------------------
sktime

# -----------------------------------------------------------------------------
# Jupyter Notebook Support
# -----------------------------------------------------------------------------
jupyterlab
ipykernel

# =============================================================================
# End of requirements.txt
# =============================================================================
```

## Tutorial-Specific Requirements to Document

### Cannot be Consolidated (Version Conflicts)

1. **beeai-framework versions**
   - a2a tutorials: `>=0.1.36,<0.2.0`
   - beeai_agent_server: `==0.1.29`
   - **Action**: Keep in tutorial-specific requirements

2. **Git-based installations**
   - ai-stylist: `git+https://github.com/huggingface/transformers`
   - granite-tsfm: `git+https://github.com/ibm-granite/granite-tsfm.git@v0.3.1`
   - **Action**: Document as optional/tutorial-specific

3. **ChatDev exact pins**
   - Multiple exact version pins (==)
   - **Action**: Keep in tutorial-specific requirements

### Special Installation Instructions

1. **Playwright** (for web-surfer agent)
   ```bash
   pip install autogen-ext[web-surfer]
   playwright install
   ```

2. **LlamaIndex** (for RAG tutorials)
   ```bash
   pip install llama-index-embeddings-huggingface llama-index-llms-ibm
   ```

3. **Granite TSFM** (for time series)
   ```bash
   pip install "granite-tsfm[notebooks] @ git+https://github.com/ibm-granite/granite-tsfm.git@v0.3.1"
   ```

## Risk Assessment

### High Risk
- **Version conflicts**: Some tutorials may break with consolidated versions
- **Git dependencies**: May cause installation issues
- **Python version constraints**: Some packages require specific Python versions

### Medium Risk
- **Package size**: Consolidated requirements will be large (~100+ packages)
- **Installation time**: Full installation may take 10-15 minutes
- **Dependency resolution**: pip may struggle with complex dependency trees

### Low Risk
- **Documentation**: Clear documentation will mitigate most issues
- **Tutorial-specific fallback**: Tutorials can maintain their own requirements if needed

## Mitigation Strategies

1. **Phased Rollout**
   - Test with subset of tutorials first
   - Gradually expand to all tutorials
   - Keep tutorial-specific requirements as fallback

2. **Clear Documentation**
   - Document known issues
   - Provide troubleshooting guide
   - Explain when to use tutorial-specific requirements

3. **Testing Matrix**
   - Test on multiple Python versions
   - Test on different operating systems
   - Document platform-specific issues

4. **Maintenance Plan**
   - Regular dependency updates
   - Version conflict monitoring
   - Community feedback integration

## Success Criteria

1. ✅ Single requirements.txt installs dependencies for 80%+ of tutorials
2. ✅ Installation succeeds on Python 3.10, 3.11, and 3.12
3. ✅ Clear documentation for tutorial-specific requirements
4. ✅ Maintenance guidelines established
5. ✅ No breaking changes to existing tutorials

## Timeline Estimate

- **Phase 1 Completion**: 2-3 hours (extract all notebook dependencies)
- **Phase 2 (Consolidation)**: 3-4 hours (create dependency matrix, resolve conflicts)
- **Phase 3 (Create Files)**: 2-3 hours (write requirements files)
- **Phase 4 (Testing)**: 4-6 hours (test across environments)
- **Phase 5 (Documentation)**: 3-4 hours (write guides)

**Total Estimated Time**: 14-20 hours

## Next Steps

1. Complete extraction of dependencies from all 81 notebooks
2. Create comprehensive dependency matrix spreadsheet
3. Resolve remaining version conflicts
4. Draft consolidated requirements.txt
5. Begin testing in clean environments

## Questions for User

Before proceeding with implementation, please confirm:

1. **Python Version Target**: Should we target Python 3.10-3.13 compatibility?
2. **Installation Size**: Are you comfortable with a large requirements file (~100+ packages)?
3. **Tutorial-Specific Requirements**: Should we keep existing tutorial requirements as fallbacks?
4. **Git Dependencies**: Should we convert git+https:// dependencies to PyPI versions where possible?
5. **Testing Priority**: Which tutorial categories should we prioritize for testing?
6. **Breaking Changes**: Are you willing to accept potential breaking changes in some tutorials?

## Appendix: File Locations

### Requirements Files
- `tutorials/03-multi-agent-systems/a2a_tutorial/beeai-a2a-client/requirements.txt`
- `tutorials/03-multi-agent-systems/a2a_tutorial/beeai-a2a-server/requirements.txt`
- `tutorials/03-multi-agent-systems/bee-ai-multi-agent-contract-management/requirements.txt`
- `tutorials/03-multi-agent-systems/chatdev_watsonx_tutorial_/requirements.txt`
- `tutorials/13-full-stack-applications/ai-stylist/requirements.txt`
- `tutorials/02-agents-and-orchestration/sql-agent-app/requirements.txt`

### PyProject Files
- `tutorials/02-agents-and-orchestration/react-agent-it-support/pyproject.toml`
- `tutorials/03-multi-agent-systems/multiagent-collab-cs-call-center-analysis/pyproject.toml`
- `tutorials/03-multi-agent-systems/my_retail_advisor/pyproject.toml`
- `tutorials/03-multi-agent-systems/acp_tutorial/pyproject.toml`
- `tutorials/03-multi-agent-systems/acp_tutorial/beeai_agent_server/pyproject.toml`
- `tutorials/03-multi-agent-systems/acp_tutorial/crewai_agent_server/pyproject.toml`

### Notebooks with Inline Dependencies
- 81 notebooks across all tutorial categories (see search results for complete list)