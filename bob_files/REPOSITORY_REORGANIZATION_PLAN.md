# IBM Tutorials Repository Reorganization Plan

**Date:** February 11, 2026  
**Repository:** https://github.com/IBM/ibmdotcom-tutorials  
**Purpose:** Reorganize repository structure to improve content categorization based on user learning intent

---

## Executive Summary

### Core Organizing Principle
**Learner-Centric Content Discovery by Use Case and Technology**

The proposed reorganization transforms the repository from a **technology-siloed structure** to a **learner-journey-focused architecture** that prioritizes:
- **What users want to build** (use cases)
- **What technologies they want to learn** (frameworks/tools)
- **What capabilities they need** (techniques/patterns)

### Key Benefits
1. **Improved Discoverability**: Users find tutorials based on their learning goals, not internal team structure
2. **Reduced Navigation Friction**: Clear pathways from "I want to build X" to relevant tutorials
3. **Scalable Architecture**: New tutorials fit naturally into capability-based categories
4. **Maintained Separation**: Complete isolation between MkDocs documentation (`/docs`) and tutorial source code (`/tutorials`)

### Impact Metrics
- **Current State**: 60+ tutorials scattered across 6+ top-level directories with inconsistent categorization
- **Proposed State**: Unified `/tutorials` structure with 14 primary learning pathways
- **Migration Scope**: ~40 folder moves, 0 content modifications (except structural necessities)

---

## 1. Current State Assessment

### 1.1 Existing Directory Structure

```
ibmdotcom-tutorials/
├── .github/                    # CI/CD workflows
├── docs/                       # MkDocs documentation site
│   ├── tutorials/              # Tutorial content (notebooks, markdown)
│   │   ├── generative-ai/      # GenAI tutorials (35+ files)
│   │   ├── ai-models/          # Model-specific tutorials (4 files)
│   │   ├── projects/           # Full project implementations (10+ projects)
│   │   ├── prompt-engineering/ # Prompting techniques (4 files)
│   │   └── instructional-guides/ # Guides and references
│   ├── tutorials-list.md       # Master tutorial index
│   └── projects-list.md        # Project index
├── generative-ai/              # GenAI tutorial source (DUPLICATE - 8+ projects)
├── ai-models/                  # Model tutorial source (DUPLICATE - 4 files)
├── ai-stylist/                 # Standalone project
├── sql-agent-app/              # Standalone project
├── crew-ai-projects/           # CrewAI-specific projects (2 projects)
├── ttrpgai/                    # Standalone project
├── machine-learning/           # ML tutorials (1 file)
├── notebooks/                  # Empty directory
├── site/                       # MkDocs build output
├── stylesheets/                # Custom CSS
├── templates/                  # Template files
├── assets/                     # Shared assets
└── images/                     # Shared images
```

### 1.2 Content Inventory

**Tutorial Content Types:**
- **Jupyter Notebooks**: ~60+ `.ipynb` files (primary tutorial format)
- **Markdown Tutorials**: ~15 `.md` tutorial documents
- **Full Applications**: 6 standalone apps with complete codebases
- **Supporting Assets**: CSV data, images, configuration files

**Content Distribution:**
- `docs/tutorials/generative-ai/`: 35+ notebooks
- `docs/tutorials/projects/`: 10+ project tutorials
- `docs/tutorials/ai-models/`: 4 notebooks
- `docs/tutorials/prompt-engineering/`: 4 notebooks
- Root-level projects: 6 standalone applications
- `generative-ai/` (root): 8+ duplicate/additional projects
- `crew-ai-projects/`: 2 CrewAI-specific projects

### 1.3 Critical Issues Identified

#### Issue 1: Content Duplication and Fragmentation
**Problem**: Tutorial content exists in multiple locations with unclear canonical sources
- `docs/tutorials/generative-ai/` contains notebooks
- `generative-ai/` (root) contains additional projects and duplicates
- Standalone projects (`ai-stylist/`, `sql-agent-app/`) exist at root level
- No clear pattern for where new content should be added

**Learner Impact**: Users cannot determine which version is authoritative or where to find related content

#### Issue 2: Technology-Centric vs. Learner-Centric Organization
**Problem**: Current structure organized by technology/framework rather than learning goals
- "generative-ai" is too broad (35+ tutorials with diverse use cases)
- "projects" category doesn't indicate what users will learn
- No clear pathway from "I want to build a chatbot" to relevant tutorials

**Learner Impact**: Users must browse through all GenAI tutorials to find RAG-specific content, agent-building tutorials, or multimodal examples

#### Issue 3: Inconsistent Project Structure
**Problem**: Standalone applications follow different organizational patterns
- Some at root level (`ai-stylist/`, `sql-agent-app/`)
- Some in `generative-ai/` subdirectory
- Some in `crew-ai-projects/`
- Some in `docs/tutorials/projects/`

**Learner Impact**: Users cannot predict where to find complete application examples vs. notebook tutorials

#### Issue 4: MkDocs Content Mixed with Source Code
**Problem**: `docs/tutorials/` contains actual tutorial content that should be separate from documentation
- MkDocs site (`docs/`) should only contain documentation structure
- Tutorial source code should live in dedicated tutorial directories
- Current mixing makes it unclear what's "documentation" vs. "tutorial content"

**Learner Impact**: Confusion about repository purpose and difficulty contributing new tutorials

#### Issue 5: Unclear Categorization Logic
**Problem**: Categories don't reflect user learning intent
- "ai-models" contains only 4 tutorials (underutilized category)
- "prompt-engineering" separated from GenAI despite being a GenAI technique
- "projects" doesn't indicate complexity, technology, or use case
- No distinction between beginner-friendly and advanced content

**Learner Impact**: Users cannot assess tutorial difficulty or relevance without reading full content

#### Issue 6: Empty and Underutilized Directories
**Problem**: Structural inconsistencies suggest incomplete organization
- `notebooks/` directory is empty
- `machine-learning/` contains only 1 tutorial
- `templates/` purpose unclear
- `stylesheets/` at root level (should be in docs)

**Learner Impact**: Suggests repository is not actively maintained or organized

---

## 2. Proposed Repository Structure

### 2.1 New Organization Principle

**Primary Organizing Dimensions:**
1. **Use Case / Capability** (What am I building?)
2. **Technology / Framework** (What tools am I using?)
3. **Complexity Level** (Implied by tutorial vs. full-app structure)

### 2.2 Complete Directory Tree

```
ibmdotcom-tutorials/
├── .github/                           # CI/CD workflows (unchanged)
├── .gitignore
├── README.md
├── LICENSE
├── CODE_OF_CONDUCT.md
│
├── docs/                              # MkDocs documentation ONLY
│   ├── index.md                       # Landing page
│   ├── about.md
│   ├── tutorials-index.md             # Master tutorial index (updated paths)
│   ├── getting-started/
│   │   └── setup.md
│   ├── references/
│   │   ├── coc.md
│   │   ├── contributing.md
│   │   └── license.md
│   ├── assets/                        # Documentation assets only
│   │   ├── official_logo.png
│   │   └── tutorialslogo.png
│   └── stylesheets/
│       └── style.css
│
├── tutorials/                         # ALL TUTORIAL CONTENT
│   │
│   ├── 01-rag-and-retrieval/         # RAG, vector search, retrieval
│   │   ├── README.md                  # Category overview
│   │   ├── agentic-rag.ipynb
│   │   ├── langchain-rag.ipynb
│   │   ├── llamaindex-rag.ipynb
│   │   ├── graphrag.ipynb
│   │   ├── rag-evaluation-ragas.ipynb
│   │   ├── rag-chunking-strategies.ipynb
│   │   ├── correctiverag.ipynb
│   │   ├── self-rag.ipynb
│   │   ├── deepseek-rag-reasoning-docling-watsonx.ipynb
│   │   ├── autogen-local-multi-agent-rag.ipynb
│   │   └── docling-granite-question-answering.ipynb
│   │
│   ├── 02-agents-and-orchestration/   # Agent frameworks, tool use
│   │   ├── README.md
│   │   ├── llm-agent-orchestration.ipynb
│   │   ├── human-in-the-loop-agent.ipynb
│   │   ├── building-agentic-workflow.ipynb
│   │   ├── react-agent-it-support/    # Full app
│   │   │   ├── README.md
│   │   │   ├── ai_service.py
│   │   │   └── src/
│   │   └── sql-agent-app/             # Full app
│   │       ├── README.md
│   │       ├── app.py
│   │       ├── langgraph-mistral-sql-agent.ipynb
│   │       └── src/
│   │
│   ├── 03-multi-agent-systems/        # CrewAI, BeeAI, multi-agent
│   │   ├── README.md
│   │   ├── crewai-multiagent-retail-example.md
│   │   ├── multiagent-collaboration-customer-call-analysis.md
│   │   ├── my-retail-advisor/         # CrewAI project
│   │   │   └── src/
│   │   ├── bee-ai-multi-agent-contract-management/
│   │   │   ├── tutorial.md
│   │   │   └── bee-script.py
│   │   ├── chatdev-watsonx/           # Multi-agent software dev
│   │   │   ├── chatdev_watsonx.md
│   │   │   └── camel/
│   │   ├── metagpt-tutorial/          # PRD generation
│   │   │   └── metagpt_ollama_tutorial.md
│   │   ├── acp-tutorial/              # Agent Communication Protocol
│   │   │   ├── acp_tutorial.md
│   │   │   └── beeai_agent_server/
│   │   └── a2a-tutorial/              # Agent-to-Agent communication
│   │       └── a2a-tutorial.md
│   │
│   ├── 04-prompt-engineering/         # Prompting techniques
│   │   ├── README.md
│   │   ├── prompt-tuning.ipynb
│   │   ├── role-prompting-tutorial.ipynb
│   │   ├── prompt-chaining-langchain.ipynb
│   │   ├── prompt-caching.ipynb
│   │   ├── zero-shot-classification.ipynb
│   │   ├── agentic-chunking.ipynb
│   │   └── rewoo-content-summarization.ipynb
│   │
│   ├── 05-multimodal-ai/              # Vision, speech, multi-modal
│   │   ├── README.md
│   │   ├── multimodal-ai.ipynb        # Llama 3.2 vision
│   │   ├── pixtral-multimodal-ai.ipynb
│   │   ├── ppt-ai-analyzer-granite-vision.ipynb
│   │   ├── granite-speech-3.3-8b.ipynb
│   │   └── ai-personal-trainer-llama/
│   │       ├── ai-personal-trainer-llama.ipynb
│   │       └── images/
│   │
│   ├── 06-tool-calling-and-function-calling/
│   │   ├── README.md
│   │   ├── function-calling.ipynb
│   │   ├── langchain-tools.ipynb
│   │   └── ollama-tools.ipynb
│   │
│   ├── 07-guardrails-and-safety/      # Content moderation, safety
│   │   ├── README.md
│   │   ├── llm-guardrails.ipynb       # Llama Guard
│   │   └── granite-guardian-webapp/
│   │       ├── granite-guardian-tutorial.md
│   │       └── content-moderation-chatbot.py
│   │
│   ├── 08-time-series-and-forecasting/
│   │   ├── README.md
│   │   ├── time-series-forecasting-lag-llama.ipynb
│   │   ├── time-series-forecasting-api.ipynb
│   │   ├── sktime-forecasting-energy-demand.ipynb
│   │   └── time-series-analysis-granite-tspulse/
│   │       ├── time-series-analysis-granite-time-tspulse.ipynb
│   │       └── *.csv
│   │
│   ├── 09-text-processing-and-nlp/    # Summarization, classification
│   │   ├── README.md
│   │   ├── abstractive-text-summarization.ipynb
│   │   ├── python-text-summarization.ipynb
│   │   ├── text-classification-pytorch.ipynb
│   │   └── unit-test-with-wca/
│   │       └── python_unit_test_wca.ipynb
│   │
│   ├── 10-machine-learning-foundations/
│   │   ├── README.md
│   │   ├── gradient-boosting-classifier.ipynb
│   │   └── post-training-quantization.md
│   │
│   ├── 11-model-context-protocol/     # MCP servers
│   │   ├── README.md
│   │   ├── ibmtutorialmcpserver/
│   │   │   └── mcp_server.md
│   │   └── mcp-server-integration-ibm-bob/
│   │       └── mcp-integration-ibm-bob.md
│   │
│   ├── 12-observability-and-monitoring/
│   │   ├── README.md
│   │   ├── wxo-observability-langfuse/
│   │   │   └── wxo_observability_langfuse_tutorial.md
│   │   └── wxo-agentops/
│   │       └── wxo_agentops.md
│   │
│   ├── 13-full-stack-applications/    # Complete end-to-end apps
│   │   ├── README.md
│   │   ├── ai-stylist/
│   │   │   ├── README.md
│   │   │   ├── ai-stylist-tutorial.ipynb
│   │   │   └── ai-stylist.py
│   │   ├── silly-story-time/
│   │   │   └── README.md
│   │   ├── ttrpgai/
│   │   │   └── README.md
│   │   └── granite-troubleshooting-guide-generator/
│   │       └── granite-troubleshooting-guide-generator.ipynb
│   │
│   ├── 14-lora-and-fine-tuning/       # Model training
│   │   ├── README.md
│   │   └── lora-on-watsonx/
│   │       └── lora-training.ipynb
│   │
│   └── shared-assets/                 # Shared data files
│       ├── README.md
│       ├── nyc_hourly_temp.csv
│       ├── ibmredbook.pdf
│       └── test-data/
│
├── mkdocs.yml                         # MkDocs configuration
├── hooks.py                           # MkDocs hooks
└── site/                              # MkDocs build output (gitignored)
```

### 2.3 Category Rationale

Each category represents a **distinct learning pathway** based on user intent:

| Category | User Question | Tutorial Count | Complexity |
|----------|--------------|----------------|------------|
| **01-rag-and-retrieval** | "How do I build a system that answers questions from my documents?" | 11 | Beginner-Advanced |
| **02-agents-and-orchestration** | "How do I build an AI agent that can use tools and make decisions?" | 5 | Intermediate-Advanced |
| **03-multi-agent-systems** | "How do I coordinate multiple AI agents to solve complex problems?" | 7 | Advanced |
| **04-prompt-engineering** | "How do I get better results from my LLM?" | 7 | Beginner-Intermediate |
| **05-multimodal-ai** | "How do I work with images, speech, and text together?" | 5 | Intermediate |
| **06-tool-calling-and-function-calling** | "How do I let my LLM call external functions and APIs?" | 3 | Intermediate |
| **07-guardrails-and-safety** | "How do I make my AI application safe and compliant?" | 2 | Intermediate |
| **08-time-series-and-forecasting** | "How do I predict future values from historical data?" | 4 | Intermediate-Advanced |
| **09-text-processing-and-nlp** | "How do I analyze, classify, or summarize text?" | 4 | Beginner-Intermediate |
| **10-machine-learning-foundations** | "What are the ML fundamentals I need?" | 2 | Beginner |
| **11-model-context-protocol** | "How do I build MCP servers for AI integrations?" | 2 | Advanced |
| **12-observability-and-monitoring** | "How do I monitor and debug my AI agents?" | 2 | Intermediate-Advanced |
| **13-full-stack-applications** | "Show me complete, production-ready applications" | 4 | Advanced |
| **14-lora-and-fine-tuning** | "How do I customize models for my specific use case?" | 1 | Advanced |

**Numbering Convention**: Prefixes (01-, 02-, etc.) provide:
- Logical ordering from foundational to advanced concepts
- Stable sorting in file explorers
- Clear progression for learners following a structured path

---

## 3. Migration Plan

### 3.1 Migration Phases

**Phase 1: Preparation (Week 1)**
- Create new `/tutorials` directory structure
- Add README.md files to each category explaining scope and learning objectives
- Update `.gitignore` if needed
- Create migration tracking spreadsheet

**Phase 2: Content Migration (Week 2-3)**
- Move tutorial content from `docs/tutorials/` to `/tutorials/`
- Move root-level projects to appropriate categories
- Move `generative-ai/` content to appropriate categories
- Move `crew-ai-projects/` to `03-multi-agent-systems/`
- Move `ai-models/` content to appropriate categories

**Phase 3: Documentation Updates (Week 4)**
- Update `docs/tutorials-index.md` with new paths
- Update `docs/projects-list.md` with new paths
- Update `mkdocs.yml` navigation structure
- Update all internal links in markdown files
- Update README.md with new structure

**Phase 4: CI/CD and Tooling (Week 5)**
- Update GitHub Actions workflows if they reference specific paths
- Update `hooks.py` if it processes tutorial paths
- Update `docs_index.json` generation
- Test MkDocs build with new structure

**Phase 5: Validation and Cleanup (Week 6)**
- Verify all links work
- Test all notebooks can still access data files
- Remove empty directories
- Archive old structure in a branch for reference
- Update CONTRIBUTING.md with new structure guidelines

### 3.2 Detailed File Mappings

#### From `docs/tutorials/generative-ai/` to New Structure

**RAG and Retrieval (01):**
```
docs/tutorials/generative-ai/agentic-rag.ipynb
  → tutorials/01-rag-and-retrieval/agentic-rag.ipynb

docs/tutorials/generative-ai/langchain-rag.ipynb
  → tutorials/01-rag-and-retrieval/langchain-rag.ipynb

docs/tutorials/generative-ai/llamaindex_rag.ipynb
  → tutorials/01-rag-and-retrieval/llamaindex-rag.ipynb

docs/tutorials/generative-ai/graphrag.ipynb
  → tutorials/01-rag-and-retrieval/graphrag.ipynb

docs/tutorials/generative-ai/rag-evaluation-ragas.ipynb
  → tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb

docs/tutorials/generative-ai/rag-chunking-strategies.ipynb
  → tutorials/01-rag-and-retrieval/rag-chunking-strategies.ipynb

docs/tutorials/generative-ai/correctiverag.ipynb
  → tutorials/01-rag-and-retrieval/correctiverag.ipynb

docs/tutorials/generative-ai/self_rag.ipynb
  → tutorials/01-rag-and-retrieval/self-rag.ipynb

docs/tutorials/generative-ai/deepseek_rag_reasoning_docling_watsonx.ipynb
  → tutorials/01-rag-and-retrieval/deepseek-rag-reasoning-docling-watsonx.ipynb

docs/tutorials/generative-ai/autogen-local-multi-agent-rag.ipynb
  → tutorials/01-rag-and-retrieval/autogen-local-multi-agent-rag.ipynb

docs/tutorials/generative-ai/docling_granite_question_answering.ipynb
  → tutorials/01-rag-and-retrieval/docling-granite-question-answering.ipynb
```

**Agents and Orchestration (02):**
```
docs/tutorials/generative-ai/llm-agent-orchestration.ipynb
  → tutorials/02-agents-and-orchestration/llm-agent-orchestration.ipynb

docs/tutorials/generative-ai/human-in-the-loop-agent.ipynb
  → tutorials/02-agents-and-orchestration/human-in-the-loop-agent.ipynb

docs/tutorials/generative-ai/building-agentic-workflow.ipynb
  → tutorials/02-agents-and-orchestration/building-agentic-workflow.ipynb
```

**Prompt Engineering (04):**
```
docs/tutorials/generative-ai/Agentic-chunking.ipynb
  → tutorials/04-prompt-engineering/agentic-chunking.ipynb

docs/tutorials/generative-ai/ReWOO - Content Summarization.ipynb
  → tutorials/04-prompt-engineering/rewoo-content-summarization.ipynb

docs/tutorials/generative-ai/zero-shot-classification.ipynb
  → tutorials/04-prompt-engineering/zero-shot-classification.ipynb
```

**Multimodal AI (05):**
```
docs/tutorials/generative-ai/multimodal-ai.ipynb
  → tutorials/05-multimodal-ai/multimodal-ai.ipynb

docs/tutorials/generative-ai/pixtral-multimodal-ai.ipynb
  → tutorials/05-multimodal-ai/pixtral-multimodal-ai.ipynb

docs/tutorials/generative-ai/ppt-ai-analyzer-granite-vision.ipynb
  → tutorials/05-multimodal-ai/ppt-ai-analyzer-granite-vision.ipynb

docs/tutorials/generative-ai/granite-speech-3.3-8b.ipynb
  → tutorials/05-multimodal-ai/granite-speech-3.3-8b.ipynb
```

**Tool Calling (06):**
```
docs/tutorials/generative-ai/function-calling.ipynb
  → tutorials/06-tool-calling-and-function-calling/function-calling.ipynb

docs/tutorials/generative-ai/langchain-tools.ipynb
  → tutorials/06-tool-calling-and-function-calling/langchain-tools.ipynb

docs/tutorials/generative-ai/ollama_tools.ipynb
  → tutorials/06-tool-calling-and-function-calling/ollama-tools.ipynb
```

**Guardrails (07):**
```
docs/tutorials/generative-ai/llm-guardrails.ipynb
  → tutorials/07-guardrails-and-safety/llm-guardrails.ipynb
```

**Time Series (08):**
```
docs/tutorials/generative-ai/time-series-forecasting-lag-llama.ipynb
  → tutorials/08-time-series-and-forecasting/time-series-forecasting-lag-llama.ipynb

docs/tutorials/generative-ai/time-series-forecasting-api.ipynb
  → tutorials/08-time-series-and-forecasting/time-series-forecasting-api.ipynb
```

**Text Processing (09):**
```
docs/tutorials/generative-ai/abstractive-text-summarization.ipynb
  → tutorials/09-text-processing-and-nlp/abstractive-text-summarization.ipynb

docs/tutorials/generative-ai/python_text_summarization.ipynb
  → tutorials/09-text-processing-and-nlp/python-text-summarization.ipynb

docs/tutorials/generative-ai/text-classification-pytorch.ipynb
  → tutorials/09-text-processing-and-nlp/text-classification-pytorch.ipynb

docs/tutorials/generative-ai/unit-test-with-wca/
  → tutorials/09-text-processing-and-nlp/unit-test-with-wca/
```

**MCP (11):**
```
docs/tutorials/generative-ai/ibmtutorialmcpserver/
  → tutorials/11-model-context-protocol/ibmtutorialmcpserver/

docs/tutorials/generative-ai/mcp-server-integration-ibm-bob/
  → tutorials/11-model-context-protocol/mcp-server-integration-ibm-bob/
```

**Full Stack Apps (13):**
```
docs/tutorials/generative-ai/granite-troubleshooting-guide-generator/
  → tutorials/13-full-stack-applications/granite-troubleshooting-guide-generator/
```

**LoRA and Fine-tuning (14):**
```
docs/tutorials/generative-ai/lora_on_watsonx/
  → tutorials/14-lora-and-fine-tuning/lora-on-watsonx/
```

#### From `docs/tutorials/projects/` to New Structure

**Multi-Agent Systems (03):**
```
docs/tutorials/projects/crewAI-multiagent-retail-example.md
  → tutorials/03-multi-agent-systems/crewai-multiagent-retail-example.md

docs/tutorials/projects/multiagent-collaboration-customer-call-analysis.md
  → tutorials/03-multi-agent-systems/multiagent-collaboration-customer-call-analysis.md

docs/tutorials/projects/chatdev_watsonx_tutorial_/
  → tutorials/03-multi-agent-systems/chatdev-watsonx/

docs/tutorials/projects/metagpt_tutorial/
  → tutorials/03-multi-agent-systems/metagpt-tutorial/

docs/tutorials/projects/acp_tutorial/
  → tutorials/03-multi-agent-systems/acp-tutorial/

docs/tutorials/projects/a2a_tutorial/
  → tutorials/03-multi-agent-systems/a2a-tutorial/
```

**Agents and Orchestration (02):**
```
docs/tutorials/projects/react-agent-tutorial.md
  → tutorials/02-agents-and-orchestration/react-agent-tutorial.md
```

**Multimodal AI (05):**
```
docs/tutorials/projects/ai-personal-trainer-llama/
  → tutorials/05-multimodal-ai/ai-personal-trainer-llama/
```

**Full Stack Apps (13):**
```
docs/tutorials/projects/ai-stylist-tutorial.ipynb
  → tutorials/13-full-stack-applications/ai-stylist/ai-stylist-tutorial.ipynb
```

**Observability (12):**
```
docs/tutorials/projects/wxo_observability_langfuse/
  → tutorials/12-observability-and-monitoring/wxo-observability-langfuse/
```

#### From `docs/tutorials/ai-models/` to New Structure

```
docs/tutorials/ai-models/sktime_forecasting_energy_demand.ipynb
  → tutorials/08-time-series-and-forecasting/sktime-forecasting-energy-demand.ipynb

docs/tutorials/ai-models/time-series-forecasting-api.ipynb
  → tutorials/08-time-series-and-forecasting/time-series-forecasting-api.ipynb

docs/tutorials/ai-models/gradient_boosting_classifier.ipynb
  → tutorials/10-machine-learning-foundations/gradient-boosting-classifier.ipynb

docs/tutorials/ai-models/granite-guardian/granite-guardian-webapp/
  → tutorials/07-guardrails-and-safety/granite-guardian-webapp/

docs/tutorials/ai-models/tspulse/
  → tutorials/08-time-series-and-forecasting/time-series-analysis-granite-tspulse/
```

#### From `docs/tutorials/prompt-engineering/` to New Structure

```
docs/tutorials/prompt-engineering/prompt-tuning.ipynb
  → tutorials/04-prompt-engineering/prompt-tuning.ipynb

docs/tutorials/prompt-engineering/role-prompting-tutorial.ipynb
  → tutorials/04-prompt-engineering/role-prompting-tutorial.ipynb

docs/tutorials/prompt-engineering/prompt-chaining-langchain.ipynb
  → tutorials/04-prompt-engineering/prompt-chaining-langchain.ipynb

docs/tutorials/prompt-engineering/Prompt_Caching.ipynb
  → tutorials/04-prompt-engineering/prompt-caching.ipynb
```

#### From Root-Level Projects to New Structure

```
ai-stylist/
  → tutorials/13-full-stack-applications/ai-stylist/

ttrpgai/
  → tutorials/13-full-stack-applications/ttrpgai/

sql-agent-app/
  → tutorials/02-agents-and-orchestration/sql-agent-app/

crew-ai-projects/my_retail_advisor/
  → tutorials/03-multi-agent-systems/my-retail-advisor/

crew-ai-projects/multiagent-collab-cs-call-center-analysis/
  → tutorials/03-multi-agent-systems/multiagent-collab-cs-call-center-analysis/
```

#### From `generative-ai/` (Root) to New Structure

```
generative-ai/bee-ai-multi-agent-contract-management/
  → tutorials/03-multi-agent-systems/bee-ai-multi-agent-contract-management/

generative-ai/wxo_agentops/
  → tutorials/12-observability-and-monitoring/wxo-agentops/

generative-ai/wxo_observability_langfuse/
  → tutorials/12-observability-and-monitoring/wxo-observability-langfuse/

generative-ai/react-agent-it-support/
  → tutorials/02-agents-and-orchestration/react-agent-it-support/

generative-ai/silly_story_time/
  → tutorials/13-full-stack-applications/silly-story-time/

generative-ai/ai-personal-trainer-llama/
  → tutorials/05-multimodal-ai/ai-personal-trainer-llama/

generative-ai/unit-test-with-wca/
  → tutorials/09-text-processing-and-nlp/unit-test-with-wca/

generative-ai/nyc_hourly_temp.csv
  → tutorials/shared-assets/nyc_hourly_temp.csv

generative-ai/ibmredbook.pdf
  → tutorials/shared-assets/ibmredbook.pdf

generative-ai/files/
  → tutorials/shared-assets/test-data/files/
```

### 3.3 Risk Mitigation

**High-Risk Areas:**

1. **Broken Links in Published Tutorials**
   - **Risk**: External links to tutorials on ibm.com may break
   - **Mitigation**: 
     - Create redirect rules in MkDocs using `redirects` plugin
     - Maintain old paths as symlinks temporarily
     - Coordinate with ibm.com team on URL updates
     - Add redirect mapping in `mkdocs.yml`

2. **Notebook Execution Failures**
   - **Risk**: Relative paths to data files break notebook execution
   - **Mitigation**:
     - Test each notebook after migration
     - Use consistent `../shared-assets/` pattern
     - Add validation script to CI/CD
     - Document path changes in migration notes

3. **CI/CD Pipeline Failures**
   - **Risk**: GitHub Actions may reference old paths
   - **Mitigation**:
     - Audit all workflow files before migration
     - Update path references
     - Test workflows in a branch before merging
     - Use environment variables for paths where possible

4. **MkDocs Build Failures**
   - **Risk**: MkDocs may not find tutorial files
   - **Mitigation**:
     - Update `mkdocs.yml` navigation structure
     - Test local build before pushing
     - Use MkDocs `--strict` mode to catch errors
     - Verify all file references in hooks.py

5. **Contributor Confusion**
   - **Risk**: Contributors may add content to old locations
   - **Mitigation**:
     - Update CONTRIBUTING.md with new structure
     - Add README.md files explaining structure
     - Archive old directories with redirect notes
     - Add PR template checklist for new tutorials

### 3.4 Implementation Commands

**Phase 2 Migration Script (Partial Example):**

```bash
#!/bin/bash
# Migration script for Phase 2 - RAG and Retrieval category

# Create new structure
mkdir -p tutorials/01-rag-and-retrieval

# RAG and Retrieval (01)
git mv docs/tutorials/generative-ai/agentic-rag.ipynb tutorials/01-rag-and-retrieval/
git mv docs/tutorials/generative-ai/langchain-rag.ipynb tutorials/01-rag-and-retrieval/
git mv docs/tutorials/generative-ai/llamaindex_rag.ipynb tutorials/01-rag-and-retrieval/llamaindex-rag.ipynb
git mv docs/tutorials/generative-ai/graphrag.ipynb tutorials/01-rag-and-retrieval/
git mv docs/tutorials/generative-ai/rag-evaluation-ragas.ipynb tutorials/01-rag-and-retrieval/
git mv docs/tutorials/generative-ai/rag-chunking-strategies.ipynb tutorials/01-rag-and-retrieval/
git mv docs/tutorials/generative-ai/correctiverag.ipynb tutorials/01-rag-and-retrieval/
git mv docs/tutorials/generative-ai/self_rag.ipynb tutorials/01-rag-and-retrieval/self-rag.ipynb
git mv docs/tutorials/generative-ai/deepseek_rag_reasoning_docling_watsonx.ipynb tutorials/01-rag-and-retrieval/deepseek-rag-reasoning-docling-watsonx.ipynb
git mv docs/tutorials/generative-ai/autogen-local-multi-agent-rag.ipynb tutorials/01-rag-and-retrieval/
git mv docs/tutorials/generative-ai/docling_granite_question_answering.ipynb tutorials/01-rag-and-retrieval/docling-granite-question-answering.ipynb

echo "RAG and Retrieval migration complete"
```

---

## 4. Documentation Updates Required

### 4.1 Updated README.md Structure

```markdown
# Welcome to IBM Tutorials 🐝

Welcome to the centralized repository for all technical explainers, tutorials, and demos developed by the [ibm.com](https://www.ibm.com/think) technical writing team.

## 🎯 What's Inside

This repository contains **60+ hands-on tutorials** organized by learning pathway:

### 🔍 [RAG & Retrieval](./tutorials/01-rag-and-retrieval/)
Build systems that answer questions from your documents using vector search and retrieval techniques.

### 🤖 [Agents & Orchestration](./tutorials/02-agents-and-orchestration/)
Create AI agents that can use tools, make decisions, and orchestrate complex workflows.

### 👥 [Multi-Agent Systems](./tutorials/03-multi-agent-systems/)
Coordinate multiple AI agents to solve complex problems collaboratively.

### 💬 [Prompt Engineering](./tutorials/04-prompt-engineering/)
Master techniques for getting better results from large language models.

### 🎨 [Multimodal AI](./tutorials/05-multimodal-ai/)
Work with vision, speech, and text models for rich AI experiences.

### 🔧 [Tool Calling & Function Calling](./tutorials/06-tool-calling-and-function-calling/)
Enable your LLMs to call external functions and APIs.

### 🛡️ [Guardrails & Safety](./tutorials/07-guardrails-and-safety/)
Implement content moderation and safety measures in AI applications.

### 📈 [Time Series & Forecasting](./tutorials/08-time-series-and-forecasting/)
Predict future values from historical data using AI models.

### 📝 [Text Processing & NLP](./tutorials/09-text-processing-and-nlp/)
Analyze, classify, and summarize text with natural language processing.

### 🧠 [Machine Learning Foundations](./tutorials/10-machine-learning-foundations/)
Learn fundamental ML concepts and techniques.

### 🔌 [Model Context Protocol](./tutorials/11-model-context-protocol/)
Build MCP servers for AI integrations.

### 📊 [Observability & Monitoring](./tutorials/12-observability-and-monitoring/)
Monitor and debug your AI agents and applications.

### 🚀 [Full Stack Applications](./tutorials/13-full-stack-applications/)
Explore complete, production-ready AI applications.

### 🎓 [LoRA & Fine-Tuning](./tutorials/14-lora-and-fine-tuning/)
Customize models for your specific use cases.

## 🚀 Getting Started

Visit our [documentation site](https://ibm.github.io/ibmdotcom-tutorials/) or explore tutorials directly in this repository.

### Prerequisites
- Python 3.11+ and pip
- For JavaScript/TypeScript projects: Node.js 23.10.0+ and npm
- IBM Cloud account for watsonx.ai tutorials
- See individual tutorial READMEs for specific requirements

## 📚 Repository Structure

```
ibmdotcom-tutorials/
├── docs/              # MkDocs documentation site
├── tutorials/         # All tutorial content organized by learning pathway
│   ├── 01-rag-and-retrieval/
│   ├── 02-agents-and-orchestration/
│   ├── 03-multi-agent-systems/
│   └── ... (14 categories total)
└── site/              # Generated documentation site
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/references/contributing.md) for details on:
- Adding new tutorials
- Reporting issues
- Suggesting improvements

## 📖 Documentation

- [Full Tutorial Index](https://ibm.github.io/ibmdotcom-tutorials/tutorials-index/)
- [Getting Started Guide](./docs/getting-started/setup.md)
- [Code of Conduct](./docs/references/coc.md)

## 💬 Community

Have questions? Join our [GitHub Discussions](https://github.com/IBM/ibmdotcom-tutorials/discussions)

## 📄 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.
```

### 4.2 Category README Template

Each category needs a README.md following this template:

```markdown
# [Category Name]

## Overview
[Brief description of what learners will accomplish in this category]

## What You'll Learn
- [Key skill 1]
- [Key skill 2]
- [Key skill 3]

## Prerequisites
- [Required knowledge]
- [Required tools/accounts]
- [Recommended prior tutorials]

## Tutorials

### Beginner-Friendly
| Tutorial | Description | Technologies |
|----------|-------------|--------------|
| [Tutorial Name](./file.ipynb) | Brief description | LangChain, watsonx |

### Intermediate
| Tutorial | Description | Technologies |
|----------|-------------|--------------|
| [Tutorial Name](./file.ipynb) | Brief description | LangGraph, Granite |

### Advanced
| Tutorial | Description | Technologies |
|----------|-------------|--------------|
| [Tutorial Name](./file.ipynb) | Brief description | CrewAI, BeeAI |

## Recommended Learning Path

1. **Start Here**: [Tutorial A](./tutorial-a.ipynb) - Foundation concepts
2. **Then Try**: [Tutorial B](./tutorial-b.ipynb) - Intermediate techniques
3. **Advanced**: [Tutorial C](./tutorial-c.ipynb) - Production patterns

## Related Categories

- [Category X](../category-x/) - For learning about Y
- [Category Z](../category-z/) - For learning about W

## Common Use Cases

- **Use Case 1**: Description and relevant tutorials
- **Use Case 2**: Description and relevant tutorials
- **Use Case 3**: Description and relevant tutorials

## Additional Resources

- [IBM watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [Granite Models](https://www.ibm.com/granite)
- [Related IBM.com Articles](https://www.ibm.com/think)
```

### 4.3 Updated mkdocs.yml Navigation

```yaml
nav: 
  - Welcome:
      - Home: index.md
      - About: about.md
      - Getting Started:
          - Setup: getting-started/setup.md
      - Tutorial Index: tutorials-index.md

  - Learning Pathways:
      - RAG & Retrieval: tutorials/01-rag-and-retrieval/README.md
      - Agents & Orchestration: tutorials/02-agents-and-orchestration/README.md
      - Multi-Agent Systems: tutorials/03-multi-agent-systems/README.md
      - Prompt Engineering: tutorials/04-prompt-engineering/README.md
      - Multimodal AI: tutorials/05-multimodal-ai/README.md
      - Tool Calling: tutorials/06-tool-calling-and-function-calling/README.md
      - Guardrails & Safety: tutorials/07-guardrails-and-safety/README.md
      - Time Series: tutorials/08-time-series-and-forecasting/README.md
      - Text Processing: tutorials/09-text-processing-and-nlp/README.md
      - ML Foundations: tutorials/10-machine-learning-foundations/README.md
      - Model Context Protocol: tutorials/11-model-context-protocol/README.md
      - Observability: tutorials/12-observability-and-monitoring/README.md
      - Full Stack Apps: tutorials/13-full-stack-applications/README.md
      - Fine-Tuning: tutorials/14-lora-and-fine-tuning/README.md

  - References:
      - Code of Conduct: references/coc.md
      - Contributing: references/contributing.md
      - License: references/license.md

plugins:
  - mkdocs-jupyter
  - search
  - social
  - redirects:
      redirect_maps:
        'tutorials/generative-ai/agentic-rag.ipynb': 'tutorials/01-rag-and-retrieval/agentic-rag.ipynb'
        'tutorials/generative-ai/langchain-rag.ipynb': 'tutorials/01-rag-and-retrieval/langchain-rag.ipynb'
        # ... (add all redirects)
```

---

## 5. Success Criteria

### 5.1 Measurable Outcomes

**Navigation Efficiency:**
- Users can find relevant tutorials in ≤3 clicks from landing page
- Category names clearly indicate content without needing to browse

**Structural Consistency:**
- All tutorials follow same organizational pattern
- No duplicate content across multiple locations
- Clear separation between docs and tutorial source

**Scalability:**
- New tutorials have obvious category placement
- Categories can accommodate 10-20 tutorials each
- Structure supports future growth without reorganization

**Maintainability:**
- Contributors understand where to add new content
- CI/CD pipelines work without modification
- Documentation builds successfully

### 5.2 Validation Checklist

- [ ] All tutorials accessible from new paths
- [ ] MkDocs builds without errors
- [ ] All internal links functional
- [ ] All notebooks execute successfully
- [ ] CI/CD pipelines pass
- [ ] README files complete for all categories
- [ ] Migration documentation complete
- [ ] Old paths redirect to new locations
- [ ] CONTRIBUTING.md updated
- [ ] No broken external links

---

## 6. Conclusion

This reorganization transforms the IBM Tutorials repository from a technology-centric structure to a learner-centric architecture. By organizing content around user learning intent rather than internal team structure, we create:

1. **Intuitive Navigation**: Users find tutorials based on what they want to build
2. **Clear Learning Pathways**: Progression from beginner to advanced is explicit
3. **Scalable Architecture**: New content fits naturally into existing categories
4. **Maintained Separation**: Complete isolation between documentation and tutorial source

The proposed structure serves both current users seeking specific tutorials and future contributors adding new content, while maintaining the repository's role as a companion to published tutorials rather than primary documentation.

### Next Steps

1. Review and approve this reorganization plan
2. Create implementation branch
3. Execute Phase 1 (Preparation)
4. Begin Phase 2 (Content Migration) with pilot category
5. Validate pilot before full migration
6. Complete remaining phases
7. Archive old structure for reference
8. Announce changes to community

---

**Document Version:** 1.0  
**Last Updated:** February 11, 2026  
**Status:** Proposed - Awaiting Approval
