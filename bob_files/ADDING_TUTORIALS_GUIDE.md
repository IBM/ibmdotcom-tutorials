# How to Add a New Tutorial or Category to the IBM Tutorials Repository

This guide explains the manual steps required to add new tutorial content — whether it's a Jupyter notebook, markdown tutorial, or full project — to this repository. Follow these steps whether you're adding content to an existing category or creating a brand-new category folder.

---

## Repository Structure Overview

```
ibmdotcom-tutorials/
├── tutorials/                          # Source tutorials (numbered categories)
│   ├── 01-rag-and-retrieval/
│   ├── 02-agents-and-orchestration/
│   ├── ...
│   └── 15-docling/                     # Example: new category
│       ├── README.md                   # Category overview
│       ├── your-tutorial.ipynb         # Jupyter notebook tutorial
│       └── your-project/               # Or a full project directory
│
├── docs/
│   └── tutorials/
│       └── generative-ai/              # MkDocs-served copies
│           ├── your-tutorial.ipynb     # Notebooks copied here
│           └── your-tutorial.md        # Markdown tutorials copied here
│
├── docs/tutorials-list.md              # Master tutorial index (docs site)
└── README.md                           # Root repository README
```

There are **two parallel locations** for tutorial content:
- `tutorials/<category>/` — the canonical source, organized by numbered category
- `docs/tutorials/generative-ai/` (or other `docs/tutorials/` subdirectories) — copies used by the MkDocs documentation site

Both locations must be updated when adding new content.

### Using Shared Assets

For assets (data files, images, PDFs, etc.), follow these guidelines:

**Asset Organization Rules:**

1. **Single asset file for your tutorial?**
   - Place it in `tutorials/shared-assets/` directory
   - Example: One CSV file, one PDF, one image

2. **Multiple related assets for your tutorial?**
   - Create a dedicated project folder within your category
   - Example: `tutorials/05-multimodal-ai/ai-personal-trainer-llama/images/`
   - Keeps related files organized and maintains a clean repository structure

3. **Assets shared across multiple tutorials?**
   - Use `tutorials/shared-assets/` directory
   - Only for files genuinely used by 2+ tutorials

```
tutorials/shared-assets/
├── data/                    # Shared datasets
├── images/                  # Shared images
├── presentations/           # Shared presentation files
├── test-data/              # Test datasets
├── nyc_hourly_temp.csv     # Example: single shared CSV file
└── ibmredbook.pdf          # Example: single shared PDF
```

**Examples:**

✅ **Good:** Single asset → `tutorials/shared-assets/my-dataset.csv`

✅ **Good:** Multiple assets → `tutorials/05-multimodal-ai/my-project/images/image1.jpg`, `image2.jpg`, etc.

✅ **Good:** Truly shared → `tutorials/shared-assets/common-dataset.csv` (used by 3+ tutorials)

❌ **Avoid:** Multiple unrelated files cluttering `shared-assets/`

**Referencing shared assets in your tutorial:**

From a notebook in any category, use relative paths:

```python
# From tutorials/01-rag-and-retrieval/your-tutorial.ipynb
import pandas as pd

# Load shared CSV data
df = pd.read_csv('../shared-assets/nyc_hourly_temp.csv')

# Load shared PDF
pdf_path = '../shared-assets/ibmredbook.pdf'

# Load image from shared-assets
image_path = '../shared-assets/images/diagram.png'
```

From a notebook in `docs/tutorials/generative-ai/` (MkDocs copy):

```python
# From docs/tutorials/generative-ai/your-tutorial.ipynb
import pandas as pd

# Load shared CSV data (adjust path for docs location)
df = pd.read_csv('../../../tutorials/shared-assets/nyc_hourly_temp.csv')
```

> **Best Practice:** Keep tutorial-specific assets (images, data files used only by that tutorial) within the tutorial's own directory or project folder. Only use `shared-assets/` for resources genuinely shared across multiple tutorials.

---

## Scenario A: Adding Tutorial Content to an Existing Category

### Step 1: Place your tutorial content in the category folder

Copy your tutorial files (`.ipynb`, `.md`, or project directory) into the appropriate numbered category folder:

```
tutorials/01-rag-and-retrieval/your-tutorial.ipynb
# or
tutorials/03-multi-agent-systems/your-project/
```

Choose the category that best fits your tutorial's topic:

| Folder | Topic |
|--------|-------|
| `01-rag-and-retrieval/` | RAG, vector search, document Q&A |
| `02-agents-and-orchestration/` | LLM agents, LangGraph, orchestration |
| `03-multi-agent-systems/` | CrewAI, BeeAI, AutoGen, multi-agent |
| `04-prompt-engineering/` | Prompting techniques, prompt tuning |
| `05-multimodal-ai/` | Vision, speech, multimodal models |
| `06-tool-calling-and-function-calling/` | Tool use, function calling |
| `07-guardrails-and-safety/` | Safety, content filtering, guardrails |
| `08-time-series-and-forecasting/` | Time series, forecasting |
| `09-text-processing-and-nlp/` | NLP, summarization, classification |
| `10-machine-learning-foundations/` | Core ML concepts |
| `11-model-context-protocol/` | MCP servers, IBM Bob |
| `12-observability-and-monitoring/` | Tracing, monitoring, AgentOps |
| `13-full-stack-applications/` | End-to-end AI apps |
| `14-lora-and-fine-tuning/` | LoRA, fine-tuning, model customization |
| `15-docling/` | Document parsing and conversion with Docling |

### Step 2: Copy the content to the docs folder

The MkDocs documentation site serves content from `docs/tutorials/`. Place a copy in the appropriate subdirectory:

```
docs/tutorials/generative-ai/your-tutorial.ipynb
# or
docs/tutorials/projects/your-tutorial.md
```

> **Note:** The filename should match exactly between both locations. For projects with multiple files, you may copy the entire directory or create a single markdown file that links to the source.

### Step 3: Update the category README

Open the `README.md` in the category folder (e.g., `tutorials/01-rag-and-retrieval/README.md`) and add an entry for your new tutorial under the `## Tutorials` section. Follow the existing format:

```markdown
### N. **Your Tutorial Title** (`your-tutorial.ipynb` or `your-project/`)
Brief one-line description of what the tutorial covers.
- **Topics**: Topic 1, Topic 2, Topic 3
- **Prerequisites**: Which requirements file to install
- **Estimated time**: X–Y minutes
```

### Step 4: Update `docs/tutorials-list.md`

Open [`docs/tutorials-list.md`](../docs/tutorials-list.md) and add a link to your content under the appropriate subsection. The path should point to the `docs/tutorials/` copy:

```markdown
### RAG

- [Your Tutorial Title](./tutorials/generative-ai/your-tutorial.ipynb)
# or for markdown/projects
- [Your Project Title](./tutorials/projects/your-project.md)
```

### Step 5: Update the root `README.md`

Open [`README.md`](../README.md) and add your tutorial to the relevant category's **Featured Tutorials** list under `## 📚 Tutorial Categories`:

```markdown
### [01 - RAG and Retrieval](tutorials/01-rag-and-retrieval/)
...

**Featured Tutorials:**
- [Your Tutorial Title](tutorials/01-rag-and-retrieval/your-tutorial.ipynb) - Brief description
```

---

## Scenario B: Creating a Brand-New Category

Use this when your tutorial topic doesn't fit any existing category.

### Step 1: Choose the next available category number

Check the `tutorials/` directory for the highest existing number and increment by 1. As of this writing, the highest is `15-docling`, so the next would be `16-your-category`.

### Step 2: Create the category folder and place your content

```bash
mkdir tutorials/16-your-category
cp your-tutorial.ipynb tutorials/16-your-category/your-tutorial.ipynb
# or for a project directory
cp -r your-project/ tutorials/16-your-category/your-project/
```

### Step 3: Copy the content to the docs folder

```bash
cp your-tutorial.ipynb docs/tutorials/generative-ai/your-tutorial.ipynb
# or for markdown
cp your-tutorial.md docs/tutorials/projects/your-tutorial.md
```

### Step 4: Create a `README.md` for the new category

Create `tutorials/16-your-category/README.md`. Use the following template (see existing READMEs like [`tutorials/15-docling/README.md`](../tutorials/15-docling/README.md) for reference):

```markdown
# <Category Name> Tutorials

Brief description of what this category covers.

## Installation

From the **repository root**, install the required dependencies:

\```bash
pip install -r requirements-rag.txt   # or whichever requirements file applies
\```

**Prerequisites:** Python 3.10–3.13

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   \```bash
   cd tutorials/16-your-category
   \```
3. Open notebooks in your IDE or launch Jupyter:
   \```bash
   jupyter lab
   \```

## Tutorials

### 1. **Your Tutorial Title** (`your-tutorial.ipynb` or `your-project/`)
Description of what the tutorial covers.
- **Author**: Your Name
- **Topics**: Topic 1, Topic 2
- **Prerequisites**: requirements-rag.txt (or other)
- **Estimated time**: 30–40 minutes

## Key Concepts

...

## Additional Resources

- [Main Repository README](../../README.md)
- [Relevant external link](https://example.com)

## Contributing

Found an issue or want to add a new tutorial? See our [Contributing Guide](../../docs/references/contributing.md).

## License

See the [LICENSE](../../LICENSE) file in the repository root.
```

### Step 5: Update `docs/tutorials-list.md`

Add a new subsection under the appropriate top-level heading in [`docs/tutorials-list.md`](../docs/tutorials-list.md):

```markdown
### Your Category Name

- [Your Tutorial Title](./tutorials/generative-ai/your-tutorial.ipynb)
```

### Step 6: Update the root `README.md`

Add the new category to the `## 📚 Tutorial Categories` section in [`README.md`](../README.md), following the existing pattern:

```markdown
### [16 - Your Category Name](tutorials/16-your-category/)
One-sentence description of the category.

**Featured Tutorials:**
- [Your Tutorial Title](tutorials/16-your-category/your-tutorial.ipynb) - Brief description
```

Also update the repository structure diagram in `README.md` if desired.

---

## Checklist Summary

Use this checklist when adding a new tutorial:

### Adding to an existing category
- [ ] Place tutorial content in `tutorials/<category>/`
- [ ] Copy content to appropriate `docs/tutorials/` subdirectory
- [ ] Add entry to `tutorials/<category>/README.md`
- [ ] Add link to `docs/tutorials-list.md`
- [ ] Add to featured tutorials in root `README.md`

### Creating a new category
- [ ] Create `tutorials/<NN>-<category-name>/` folder
- [ ] Place tutorial content in the new folder
- [ ] Copy content to appropriate `docs/tutorials/` subdirectory
- [ ] Create `tutorials/<NN>-<category-name>/README.md`
- [ ] Add new subsection to `docs/tutorials-list.md`
- [ ] Add new category entry to root `README.md`

---

## Tips

- **Filenames**: Use lowercase with hyphens or underscores (e.g., `my-tutorial.ipynb`, `my-project/`). Avoid spaces.
- **Requirements**: Check which `requirements-*.txt` file covers your tutorial's dependencies. If new packages are needed, add them to the appropriate requirements file.
- **MkDocs preview**: Run `mkdocs serve` from the repository root to preview the docs site locally at `http://127.0.0.1:8000`.
- **Author attribution**: Include `**Author**: Your Name` in the first markdown cell of notebooks or at the top of markdown files.
- **IBM Think links**: When referencing IBM concepts, link to `https://www.ibm.com/think/topics/<topic>` where available.
- **Project structure**: For multi-file projects, include a `README.md` in the project directory explaining setup and usage.
---

## Using Bob (IBM Bob AI Assistant) to Add Tutorials

Instead of following the manual steps above, you can delegate the entire process to **IBM Bob** — the AI coding assistant built into this repository's VS Code workspace. Bob understands the repository structure and can handle all file creation, copying, and updates in one conversation.

### What Bob can do for you

- Fetch tutorial content from a GitHub PR commit URL or accept files you provide locally
- Create the category folder and place content in the right locations
- Handle asset organization (single files to `shared-assets/`, multiple files to project folders)
- Write the category `README.md` from scratch
- Update `docs/tutorials-list.md` and the root `README.md` automatically
- Preview the result in the running MkDocs dev server

### How to prompt Bob

Open IBM Bob in VS Code (via the IBM Bob extension) and use one of the prompts below depending on your scenario.

---

#### Scenario 1: Adding your local tutorial files to the repo

**Most common workflow** — You've already created your tutorial files and want Bob to organize them into the repository structure.

**Simple prompt:**
```
I have a tutorial project at [path/to/your-project/] that I want to add to the tutorials repo.
Please create a new category called "[category name]" and organize everything properly.
```

**Detailed prompt (recommended):**
```
I have a new tutorial about [topic] that I want to add to the tutorials repo.

Location: [path/to/your-tutorial.ipynb] or [path/to/your-project/]
Category: Create a new category called "[category name]" / Add to existing "[01-rag-and-retrieval]" category
Author: [Your Name]
Description: [Brief description of what the tutorial covers]

Assets: [I have one CSV file / I have multiple images in an images/ folder / No additional assets]
```

**What Bob will do:**
1. Copy/move your files to the appropriate `tutorials/<category>/` location
2. Organize assets according to the rules (single file → `shared-assets/`, multiple → project folder)
3. Copy content to `docs/tutorials/generative-ai/` for MkDocs
4. Create or update the category `README.md`
5. Update `docs/tutorials-list.md` and root `README.md`

**Example:**
```
I have a new tutorial about multimodal AI at ~/Desktop/my-vision-tutorial.ipynb.
Please add it to the tutorials repo under the "05-multimodal-ai" category.
Author: Jane Smith
Description: Using Granite Vision models for image analysis
Assets: I have 5 sample images in an images/ folder
```

---

#### Scenario 2: Adding tutorial from a GitHub PR

If you want to pull content directly from a GitHub Pull Request:

```
Can you add the tutorial from this GitHub PR to the tutorials repo?
<paste the GitHub PR URL here>

Please create a new category called "[category name]" / add to "[existing-category]".
```

**Example:**
```
Can you please help me add a category for "docling" under the /tutorials repo?
I want to add this tutorial from this GitHub PR:
https://github.com/IBM/ibmdotcom-tutorials/pull/123
```

Bob will fetch the content from the PR and handle all the organization automatically.

---

### Tips for working with Bob

- **Be specific about the category name** — Bob will pick the next available number automatically, but you can specify one if you prefer.
- **Provide context** — Tell Bob the tutorial's title, author, and main topics so the README and tutorials-list entries are accurate.
- **Mention assets upfront** — If your tutorial needs data files, images, or other assets, tell Bob about them in your initial prompt so they can be organized properly (single files → `shared-assets/`, multiple files → project folder).
- **Review before merging** — Bob will show you a plan before making changes. Review it and approve or request adjustments.
- **Bob uses Plan mode first** — Bob will outline all the files it intends to create or modify before switching to Code mode to implement. You can stop and redirect at the planning stage.
- **MkDocs live preview** — If `mkdocs serve` is running, Bob's changes will be reflected in the browser at `http://127.0.0.1:8000` within seconds of completion.

---

### Verifying Bob's Work

After Bob completes the tutorial addition, verify that all required files were created/updated:

**Verification checklist:**
- [ ] Tutorial file exists in `tutorials/<category>/`
- [ ] Tutorial file copied to `docs/tutorials/generative-ai/`
- [ ] Assets organized correctly (shared-assets or project folder, if applicable)
- [ ] Category `README.md` updated with tutorial entry
- [ ] `docs/tutorials-list.md` includes tutorial link
- [ ] Root `README.md` includes tutorial in category listing

If any file is missing or incorrect, ask Bob to fix it or make the correction manually following the steps in the earlier sections of this guide.

---

### Bob vs. Manual: Quick Comparison

| Task | Manual | With Bob |
|------|--------|----------|
| Place content in `tutorials/` | Copy files manually | Bob fetches and places them |
| Copy to `docs/tutorials/` | Copy files manually | Bob handles it automatically |
| Organize assets | Decide placement manually | Bob follows asset organization rules automatically |
| Write category `README.md` | Write from scratch using template | Bob generates it based on content |
| Update `docs/tutorials-list.md` | Edit file manually | Bob adds the correct subsection and link |
| Update root `README.md` | Edit file manually | Bob adds the category entry |
| Time required | 15–30 minutes | 2–5 minutes |