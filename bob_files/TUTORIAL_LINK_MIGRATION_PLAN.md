# Tutorial Link Migration Plan
**Repository:** IBM/ibmdotcom-tutorials  
**Date:** 2026-03-04  
**Purpose:** Coordinate downstream link updates for repository reorganization

---

## Executive Summary

The repository reorganization moves tutorial files from flat structure to categorized structure:
- **Old:** `/generative-ai/*.ipynb`, `/machine-learning/*.ipynb`, etc.
- **New:** `/tutorials/##-category/*.ipynb`

This affects **external links** from IBM.com, blog posts, documentation, and bookmarks that point directly to `.ipynb` files on GitHub.

**Strategy:** Proactive coordination with stakeholders to update links BEFORE reorganization goes live.

---

## Impact Analysis

### Affected Link Types

1. **Direct GitHub File Links**
   - Pattern: `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/*.ipynb`
   - Impact: 404 errors after reorganization
   - Estimated count: 20+ unique tutorial files

2. **Internal Notebook References**
   - Pattern: Links within notebooks pointing to other tutorials
   - Impact: Broken cross-references
   - Estimated count: 23+ notebooks with internal GitHub links

3. **External Documentation**
   - IBM.com tutorial pages
   - Blog posts and articles
   - Developer documentation
   - Social media posts

---

## URL Mapping Document

### RAG and Retrieval Tutorials

| Old Path | New Path | Status |
|----------|----------|--------|
| `/generative-ai/langchain-rag.ipynb` | `/tutorials/01-rag-and-retrieval/langchain-rag.ipynb` | ⚠️ Needs Update |
| `/generative-ai/agentic-rag.ipynb` | `/tutorials/01-rag-and-retrieval/agentic-rag.ipynb` | ⚠️ Needs Update |
| `/generative-ai/rag-evaluation-ragas.ipynb` | `/tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb` | ⚠️ Needs Update |
| `/generative-ai/rag-text-chunking-strategies.ipynb` | `/tutorials/01-rag-and-retrieval/rag-chunking-strategies.ipynb` | ⚠️ Needs Update |
| `/generative-ai/llamaindex_rag.ipynb` | `/tutorials/01-rag-and-retrieval/llamaindex_rag.ipynb` | ⚠️ Needs Update |
| `/generative-ai/graphrag.ipynb` | `/tutorials/01-rag-and-retrieval/graphrag.ipynb` | ⚠️ Needs Update |
| `/generative-ai/correctiverag.ipynb` | `/tutorials/01-rag-and-retrieval/correctiverag.ipynb` | ⚠️ Needs Update |
| `/generative-ai/self_rag.ipynb` | `/tutorials/01-rag-and-retrieval/self_rag.ipynb` | ⚠️ Needs Update |

### Agent and Orchestration Tutorials

| Old Path | New Path | Status |
|----------|----------|--------|
| `/generative-ai/llm-agent-orchestration.ipynb` | `/tutorials/02-agents-and-orchestration/llm-agent-orchestration.ipynb` | ⚠️ Needs Update |
| `/generative-ai/langgraph-mistral-sql-agent.ipynb` | `/tutorials/02-agents-and-orchestration/langgraph-mistral-sql-agent.ipynb` | ⚠️ Needs Update |
| `/generative-ai/human-in-the-loop-agent.ipynb` | `/tutorials/02-agents-and-orchestration/human-in-the-loop-agent.ipynb` | ⚠️ Needs Update |

### Prompt Engineering Tutorials

| Old Path | New Path | Status |
|----------|----------|--------|
| `/generative-ai/prompt-tuning.ipynb` | `/tutorials/04-prompt-engineering/prompt-tuning.ipynb` | ⚠️ Needs Update |
| `/generative-ai/prompt-chaining-langchain.ipynb` | `/tutorials/04-prompt-engineering/prompt-chaining-langchain.ipynb` | ⚠️ Needs Update |
| `/generative-ai/zero-shot-classification.ipynb` | `/tutorials/04-prompt-engineering/zero-shot-classification.ipynb` | ⚠️ Needs Update |
| `/generative-ai/role-prompting-tutorial.ipynb` | `/tutorials/04-prompt-engineering/role-prompting-tutorial.ipynb` | ⚠️ Needs Update |

### Multimodal AI Tutorials

| Old Path | New Path | Status |
|----------|----------|--------|
| `/generative-ai/multimodal-ai.ipynb` | `/tutorials/05-multimodal-ai/multimodal-ai.ipynb` | ⚠️ Needs Update |
| `/generative-ai/pixtral-multimodal-ai.ipynb` | `/tutorials/05-multimodal-ai/pixtral-multimodal-ai.ipynb` | ⚠️ Needs Update |
| `/generative-ai/granite-speech-3.3-8b.ipynb` | `/tutorials/05-multimodal-ai/granite-speech-3.3-8b.ipynb` | ⚠️ Needs Update |

### Tool Calling and Function Calling

| Old Path | New Path | Status |
|----------|----------|--------|
| `/generative-ai/function-calling.ipynb` | `/tutorials/06-tool-calling-and-function-calling/function-calling.ipynb` | ⚠️ Needs Update |
| `/generative-ai/langchain-tools.ipynb` | `/tutorials/06-tool-calling-and-function-calling/langchain-tools.ipynb` | ⚠️ Needs Update |

### Guardrails and Safety

| Old Path | New Path | Status |
|----------|----------|--------|
| `/generative-ai/llm-guardrails.ipynb` | `/tutorials/07-guardrails-and-safety/llm-guardrails.ipynb` | ⚠️ Needs Update |

### Text Processing and NLP

| Old Path | New Path | Status |
|----------|----------|--------|
| `/generative-ai/text-classification-pytorch.ipynb` | `/tutorials/09-text-processing-and-nlp/text-classification-pytorch.ipynb` | ⚠️ Needs Update |
| `/generative-ai/python_text_summarization.ipynb` | `/tutorials/09-text-processing-and-nlp/python_text_summarization.ipynb` | ⚠️ Needs Update |
| `/generative-ai/abstractive-text-summarization.ipynb` | `/tutorials/09-text-processing-and-nlp/abstractive-text-summarization.ipynb` | ⚠️ Needs Update |

### Time Series and Forecasting

| Old Path | New Path | Status |
|----------|----------|--------|
| `/generative-ai/time-series-forecasting-api.ipynb` | `/tutorials/08-time-series-and-forecasting/time-series-forecasting-api.ipynb` | ⚠️ Needs Update |

---

## Internal Notebook References to Update

Based on search results, these notebooks contain GitHub links to old paths:

### High Priority (Direct Tutorial Links)
1. [`tutorials/01-rag-and-retrieval/langchain-rag.ipynb`](tutorials/01-rag-and-retrieval/langchain-rag.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/langchain-rag.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/01-rag-and-retrieval/langchain-rag.ipynb`

2. [`tutorials/01-rag-and-retrieval/agentic-rag.ipynb`](tutorials/01-rag-and-retrieval/agentic-rag.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/agentic-rag.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/01-rag-and-retrieval/agentic-rag.ipynb`

3. [`tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb`](tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/rag-evaluation-ragas.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/01-rag-and-retrieval/rag-evaluation-ragas.ipynb`

4. [`tutorials/01-rag-and-retrieval/rag-chunking-strategies.ipynb`](tutorials/01-rag-and-retrieval/rag-chunking-strategies.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/rag-text-chunking-strategies.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/01-rag-and-retrieval/rag-chunking-strategies.ipynb`

5. [`tutorials/04-prompt-engineering/prompt-tuning.ipynb`](tutorials/04-prompt-engineering/prompt-tuning.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/prompt-tuning.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/04-prompt-engineering/prompt-tuning.ipynb`

6. [`tutorials/04-prompt-engineering/prompt-chaining-langchain.ipynb`](tutorials/04-prompt-engineering/prompt-chaining-langchain.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/prompt-chaining-langchain.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/04-prompt-engineering/prompt-chaining-langchain.ipynb`

7. [`tutorials/05-multimodal-ai/multimodal-ai.ipynb`](tutorials/05-multimodal-ai/multimodal-ai.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/multimodal-ai.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/05-multimodal-ai/multimodal-ai.ipynb`

8. [`tutorials/05-multimodal-ai/pixtral-multimodal-ai.ipynb`](tutorials/05-multimodal-ai/pixtral-multimodal-ai.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/pixtral-multimodal-ai.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/05-multimodal-ai/pixtral-multimodal-ai.ipynb`

9. [`tutorials/06-tool-calling-and-function-calling/function-calling.ipynb`](tutorials/06-tool-calling-and-function-calling/function-calling.ipynb)
   - Contains: `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/function-calling.ipynb`
   - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/06-tool-calling-and-function-calling/function-calling.ipynb`

10. [`tutorials/06-tool-calling-and-function-calling/langchain-tools.ipynb`](tutorials/06-tool-calling-and-function-calling/langchain-tools.ipynb)
    - Contains: `github.com/IBM/ibmdotcom-tutorials/tree/main/generative-ai/langchain-tools.ipynb`
    - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/06-tool-calling-and-function-calling/langchain-tools.ipynb`

11. [`tutorials/07-guardrails-and-safety/llm-guardrails.ipynb`](tutorials/07-guardrails-and-safety/llm-guardrails.ipynb)
    - Contains: `github.com/IBM/ibmdotcom-tutorials/blob/main/generative-ai/llm-guardrails.ipynb`
    - Update to: `github.com/IBM/ibmdotcom-tutorials/blob/main/tutorials/07-guardrails-and-safety/llm-guardrails.ipynb`

### Note on `/docs` Directory
The `/docs` directory contains duplicate notebooks that also need updating, but these are part of the MkDocs build and should be handled separately.

---

## Stakeholder Communication Plan

### IBM.com Team Coordination

**Email Template:**

```
Subject: ACTION REQUIRED: GitHub Tutorial Repository Reorganization - Link Updates Needed

Dear IBM.com Content Team,

We are reorganizing the ibmdotcom-tutorials GitHub repository to improve content 
discoverability and maintainability. This will affect any IBM.com pages that link 
directly to tutorial notebooks (.ipynb files) on GitHub.

TIMELINE:
- Link Mapping Available: [DATE]
- Requested Update Completion: [DATE + 2 weeks]
- Repository Reorganization: [DATE + 3 weeks]

IMPACT:
All tutorial files are moving from flat structure to categorized structure:
- OLD: /generative-ai/*.ipynb
- NEW: /tutorials/##-category/*.ipynb

REQUIRED ACTION:
1. Review attached URL mapping document
2. Identify all IBM.com pages linking to affected tutorials
3. Update links to new paths
4. Confirm completion by [DEADLINE]

ATTACHED:
- Complete URL mapping (old → new paths)
- List of most commonly linked tutorials
- Contact information for questions

We will maintain the old structure until [DATE + 3 weeks] to allow time for updates.

Questions? Contact: [REPOSITORY MAINTAINER EMAIL]

Thank you for your cooperation!
```

### Blog Post Authors

**Communication Template:**

```
Subject: GitHub Tutorial Links Update Required

Hi [AUTHOR],

Your blog post "[TITLE]" links to tutorials in our GitHub repository. We're 
reorganizing the repository structure, which will affect these links:

AFFECTED LINKS IN YOUR POST:
- [OLD URL 1] → [NEW URL 1]
- [OLD URL 2] → [NEW URL 2]

DEADLINE: Please update by [DATE]

The old links will stop working after [DATE + 3 weeks].

Need help? Reply to this email.

Thanks!
```

---

## Implementation Timeline

### Phase 1: Preparation (Week 1)
- [x] Create URL mapping document
- [ ] Identify all internal notebook references
- [ ] Compile list of known external references
- [ ] Prepare stakeholder communication templates

### Phase 2: Stakeholder Notification (Week 2)
- [ ] Send notification to IBM.com team
- [ ] Contact blog post authors
- [ ] Post announcement in GitHub Discussions
- [ ] Update repository README with migration notice

### Phase 3: Coordination Period (Weeks 3-4)
- [ ] Track stakeholder update progress
- [ ] Provide support for link updates
- [ ] Send reminder notifications
- [ ] Verify critical links are updated

### Phase 4: Internal Updates (Week 5)
- [ ] Update internal notebook GitHub references
- [ ] Test all updated links
- [ ] Create PR with link updates

### Phase 5: Repository Reorganization (Week 6)
- [ ] Execute repository reorganization
- [ ] Verify all new paths work correctly
- [ ] Monitor for 404 errors
- [ ] Respond to any issues

### Phase 6: Post-Migration (Week 7+)
- [ ] Monitor for broken link reports
- [ ] Update any missed references
- [ ] Document lessons learned
- [ ] Archive old structure documentation

---

## Validation Checklist

### Pre-Migration Validation
- [ ] All stakeholders notified (IBM.com, blog authors, etc.)
- [ ] URL mapping document reviewed and approved
- [ ] Critical external links confirmed updated
- [ ] Internal notebook references updated
- [ ] Test environment validated with new structure

### Post-Migration Validation
- [ ] All new tutorial paths accessible
- [ ] Internal cross-references working
- [ ] No 404 errors on new paths
- [ ] Search functionality updated
- [ ] Documentation reflects new structure

### Monitoring (First 30 Days)
- [ ] Daily check for 404 errors
- [ ] Weekly stakeholder check-ins
- [ ] User feedback monitoring
- [ ] Analytics review for broken links

---

## Risk Mitigation

### Risk 1: Stakeholders Don't Update in Time
**Mitigation:**
- Start coordination 3+ weeks before migration
- Send multiple reminder notifications
- Provide direct support for updates
- Consider delaying migration if critical links not updated

### Risk 2: Unknown External References
**Mitigation:**
- Search for repository links using Google/Bing
- Check social media mentions
- Review GitHub traffic analytics
- Create comprehensive 404 page with search

### Risk 3: Internal References Missed
**Mitigation:**
- Automated search for all GitHub URLs in notebooks
- Manual review of high-traffic tutorials
- Test suite for cross-references
- Post-migration monitoring

---

## Success Metrics

- ✅ Zero 404 errors on IBM.com pages
- ✅ All internal notebook references updated
- ✅ 90%+ of known external links updated before migration
- ✅ No user complaints about broken links in first week
- ✅ All stakeholders acknowledge receipt of notification

---

## Contact Information

**Repository Maintainers:**
- [NAME] - [EMAIL]
- [NAME] - [EMAIL]

**IBM.com Content Team:**
- [CONTACT NAME] - [EMAIL]

**Questions/Issues:**
- GitHub Discussions: [LINK]
- Email: [SUPPORT EMAIL]

---

**Document Version:** 1.0  
**Last Updated:** 2026-03-04  
**Status:** ✅ Ready for Stakeholder Review
