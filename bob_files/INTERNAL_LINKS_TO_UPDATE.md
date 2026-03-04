# Internal Repository Links Requiring Updates
**Repository:** IBM/ibmdotcom-tutorials  
**Date:** 2026-03-04  
**Purpose:** Complete list of files with outdated internal references

---

## Summary

**21 files** in the `/tutorials` directory contain outdated internal references that need updating.

---

## Category 1: Self-Referential GitHub Links (12 files)

These files contain GitHub URLs pointing to their own old locations.

### RAG & Retrieval (4 files)

1. **`tutorials/01-rag-and-retrieval/langchain-rag.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/langchain-rag.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/01-rag-and-retrieval/langchain-rag.ipynb`

2. **`tutorials/01-rag-and-retrieval/agentic-rag.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/agentic-rag.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/01-rag-and-retrieval/agentic-rag.ipynb`

3. **`tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/rag-evaluation-ragas.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb`

4. **`tutorials/01-rag-and-retrieval/rag-chunking-strategies.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/rag-text-chunking-strategies.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/01-rag-and-retrieval/rag-chunking-strategies.ipynb`

### Prompt Engineering (2 files)

5. **`tutorials/04-prompt-engineering/prompt-tuning.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/prompt-tuning.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/04-prompt-engineering/prompt-tuning.ipynb`

6. **`tutorials/04-prompt-engineering/prompt-chaining-langchain.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/prompt-chaining-langchain.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/04-prompt-engineering/prompt-chaining-langchain.ipynb`

### Multimodal AI (2 files)

7. **`tutorials/05-multimodal-ai/multimodal-ai.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/multimodal-ai.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/05-multimodal-ai/multimodal-ai.ipynb`

8. **`tutorials/05-multimodal-ai/pixtral-multimodal-ai.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/pixtral-multimodal-ai.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/05-multimodal-ai/pixtral-multimodal-ai.ipynb`

### Tool Calling (2 files)

9. **`tutorials/06-tool-calling-and-function-calling/function-calling.ipynb`**
   - **Find:** `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/function-calling.ipynb`
   - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/06-tool-calling-and-function-calling/function-calling.ipynb`

10. **`tutorials/06-tool-calling-and-function-calling/langchain-tools.ipynb`**
    - **Find:** `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/langchain-tools.ipynb`
    - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/06-tool-calling-and-function-calling/langchain-tools.ipynb`

### Guardrails (1 file)

11. **`tutorials/07-guardrails-and-safety/llm-guardrails.ipynb`**
    - **Find:** `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/llm-guardrails.ipynb`
    - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/07-guardrails-and-safety/llm-guardrails.ipynb`

### Machine Learning (1 file)

12. **`tutorials/10-machine-learning-foundations/post-training-quantization.md`**
    - **Find:** `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/post-training-quantization.md`
    - **Replace:** `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/10-machine-learning-foundations/post-training-quantization.md`

---

## Category 2: Directory References in Text (4 files)

These files reference old directory structures in their instructional text.

### Text Processing/NLP (2 files)

13. **`tutorials/09-text-processing-and-nlp/abstractive-text-summarization.ipynb`** (Line 94)
    - **Find:** `[generative AI directory](https://github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai)`
    - **Replace:** `[text processing directory](https://github.com/IBM/ibmdotcom-tutorials/tree/main/tutorials/09-text-processing-and-nlp)`

14. **`tutorials/09-text-processing-and-nlp/python_text_summarization.ipynb`** (Line 55)
    - **Find:** `[generative AI directory](https://github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai)`
    - **Replace:** `[text processing directory](https://github.com/IBM/ibmdotcom-tutorials/tree/main/tutorials/09-text-processing-and-nlp)`

### Multi-Agent Systems (1 file)

15. **`tutorials/07-guardrails-and-safety/granite-guardian-webapp/Granite-Guardian-Tutorial.md`** (Line 112)
    - **Find:** `git clone https://github.com/IBM/ibmdotcom-tutorials/tree/main/docs/tutorials/ai-models/granite-guardian/granite-guardian-webapp`
    - **Replace:** `git clone https://github.com/IBM/ibmdotcom-tutorials/tree/main/tutorials/07-guardrails-and-safety/granite-guardian-webapp`

### Docling (1 file)

16. **`tutorials/15-docling/unstructured-data-conversion.ipynb`** (Line 99)
    - **Find:** "This tutorial can be found inside the docs/tutorials/docling directory."
    - **Replace:** "This tutorial can be found inside the tutorials/15-docling directory."

---

## Category 3: Command Path Instructions (5 files)

These files contain `cd` commands with outdated directory paths.

### Text Processing/NLP (1 file)

17. **`tutorials/09-text-processing-and-nlp/text-classification-pytorch.ipynb`** (Line 110)
    - **Find:** `cd docs/tutorials/machine-learning`
    - **Replace:** `cd tutorials/09-text-processing-and-nlp`

### Docling (1 file)

18. **`tutorials/15-docling/unstructured-data-conversion.ipynb`** (Line 76)
    - **Find:** `cd docs/tutorials/docling`
    - **Replace:** `cd tutorials/15-docling`

### Multi-Agent Systems (2 files)

19. **`tutorials/03-multi-agent-systems/a2a_tutorial/a2a-tutorial.md`** (Line 212)
    - **Find:** `cd docs/tutorials/projects/a2a_tutorial`
    - **Replace:** `cd tutorials/03-multi-agent-systems/a2a_tutorial`

20. **`tutorials/03-multi-agent-systems/acp_tutorial/acp_tutorial.md`** (Line 341)
    - **Find:** `cd docs/tutorials/projects/acp_tutorial`
    - **Replace:** `cd tutorials/03-multi-agent-systems/acp_tutorial`

### Guardrails (1 file - duplicate from Category 2)

21. **`tutorials/07-guardrails-and-safety/granite-guardian-webapp/Granite-Guardian-Tutorial.md`** (Line 112)
    - Already listed in Category 2 above

---

## Summary by Category

| Category | File Count | Description |
|----------|-----------|-------------|
| Self-Referential GitHub Links | 12 | Tutorial notebooks linking to their own old GitHub URLs |
| Directory References | 4 | Text mentioning old directory structures |
| Command Paths | 5 | `cd` or `git clone` commands with old paths |
| **TOTAL** | **21** | **Unique files requiring updates** |

---

## Implementation Notes

### Recommended Approach

1. **Create a single PR** with all 21 file updates
2. **Test all links** after updates to ensure they work
3. **Update after IBM.com coordination** to avoid confusion

### Search & Replace Strategy

Use these regex patterns for bulk updates:

```bash
# Pattern 1: Self-referential links
Find: github\.com/IBM/ibmdotcom-tutorials/(blob|tree)/main/generative-ai/
Replace: github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/[appropriate-category]/

# Pattern 2: Directory references
Find: docs/tutorials/(machine-learning|docling|projects|ai-models)
Replace: tutorials/[appropriate-category]

# Pattern 3: cd commands
Find: cd docs/tutorials/
Replace: cd tutorials/
```

### Validation Checklist

After updates:
- [ ] All GitHub links return 200 (not 404)
- [ ] All `cd` commands reference existing directories
- [ ] All directory references are accurate
- [ ] No broken cross-references between tutorials
- [ ] Documentation builds successfully

---

## Related Documents

- **IBM.com Team:** [`IBM_TEAM_URL_UPDATES.md`](IBM_TEAM_URL_UPDATES.md) - 25 tutorials for external coordination
- **Full Migration Plan:** [`TUTORIAL_LINK_MIGRATION_PLAN.md`](TUTORIAL_LINK_MIGRATION_PLAN.md)
- **Stub File Strategy:** [`GITHUB_STUB_FILE_REDIRECT_STRATEGY.md`](GITHUB_STUB_FILE_REDIRECT_STRATEGY.md)

---

**Document Version:** 1.0  
**Last Updated:** 2026-03-04  
**Status:** ✅ Ready for Implementation