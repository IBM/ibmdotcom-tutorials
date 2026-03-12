# Prompt Engineering Tutorials

This directory contains tutorials on prompt engineering techniques, optimization strategies, and best practices for effective LLM communication.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13 (Python 3.11 recommended)
- IBM watsonx.ai account

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/04-prompt-engineering
   ```
3. Open and run your first tutorial: `role-prompting-tutorial.ipynb`

## Tutorials

### 1. **Role Prompting Tutorial** (`role-prompting-tutorial.ipynb`)
Learn how to use role-based prompting for better LLM responses.
- **Topics**: Role assignment, persona creation, context setting
- **Prerequisites**: Base dependencies
- **Estimated time**: 20-30 minutes

### 2. **Zero-Shot Classification** (`zero-shot-classification.ipynb`)
Classify text without training data using prompt engineering.
- **Topics**: Zero-shot learning, classification prompts, label design
- **Prerequisites**: Base dependencies
- **Estimated time**: 25-35 minutes

### 3. **Prompt Chaining with LangChain** (`prompt-chaining-langchain.ipynb`)
Chain multiple prompts together for complex tasks.
- **Topics**: Sequential prompts, context passing, workflow design
- **Prerequisites**: Base dependencies
- **Estimated time**: 30-40 minutes

### 4. **Prompt Tuning** (`prompt-tuning.ipynb`)
Optimize prompts for specific tasks and models.
- **Topics**: Prompt optimization, parameter tuning, evaluation
- **Prerequisites**: Base dependencies
- **Estimated time**: 35-45 minutes

### 5. **Agentic Chunking** (`Agentic-chunking.ipynb`)
Advanced text chunking strategies using agentic approaches.
- **Topics**: Intelligent chunking, context preservation, RAG optimization
- **Prerequisites**: RAG dependencies (requirements-rag.txt)
- **Estimated time**: 40-50 minutes

### 6. **Prompt Caching** (`Prompt_Caching.ipynb`)
Improve performance and reduce costs with prompt caching.
- **Topics**: Cache strategies, performance optimization, cost reduction
- **Prerequisites**: RAG dependencies (requirements-rag.txt)
- **Estimated time**: 30-40 minutes

### 7. **ReWOO Content Summarization** (`rewoo-content-summarization.ipynb`)
Reasoning WithOut Observation for efficient content summarization.
- **Topics**: ReWOO pattern, summarization, efficiency optimization
- **Prerequisites**: Base dependencies + transformers
- **Estimated time**: 35-45 minutes

## Key Concepts

### What is Prompt Engineering?
The art and science of crafting effective instructions for LLMs to:
- Get desired outputs
- Improve response quality
- Reduce errors and hallucinations
- Optimize for specific tasks

### Core Techniques

**1. Role Prompting**
Assign a specific role or persona to the LLM:
```
You are an expert Python developer with 10 years of experience...
```

**2. Few-Shot Learning**
Provide examples in the prompt:
```
Example 1: Input -> Output
Example 2: Input -> Output
Now: Your input
```

**3. Chain-of-Thought**
Ask the LLM to show its reasoning:
```
Let's think step by step:
1. First, we need to...
2. Then, we should...
```

**4. Zero-Shot**
No examples, just clear instructions:
```
Classify the following text as positive, negative, or neutral:
```

**5. Prompt Chaining**
Break complex tasks into sequential prompts:
```
Prompt 1: Extract key information
Prompt 2: Analyze the information
Prompt 3: Generate recommendations
```

## Best Practices

### 1. Be Specific and Clear
❌ Bad: "Tell me about Python"
✅ Good: "Explain Python list comprehensions with 3 examples"

### 2. Provide Context
❌ Bad: "Fix this code"
✅ Good: "Fix this Python code that should sort a list of dictionaries by age"

### 3. Use Delimiters
```
Analyze the following text:
"""
[Your text here]
"""
```

### 4. Specify Output Format
```
Provide your answer in JSON format:
{
  "summary": "...",
  "key_points": ["...", "..."]
}
```

### 5. Iterate and Refine
- Start simple
- Test with examples
- Refine based on results
- Document what works

## Common Use Cases

- **Content Generation**: Articles, summaries, creative writing
- **Classification**: Sentiment analysis, topic categorization
- **Extraction**: Key information, entities, relationships
- **Transformation**: Translation, reformatting, style transfer
- **Analysis**: Sentiment, intent, complexity assessment

## Troubleshooting

### Issue: Inconsistent outputs
**Solution**: 
- Add more specific instructions
- Use temperature=0 for deterministic outputs
- Provide examples (few-shot learning)

### Issue: LLM doesn't follow format
**Solution**:
- Use explicit format instructions
- Provide format examples
- Use structured output parsing

### Issue: Responses too long/short
**Solution**:
- Specify length constraints
- Use word/character limits
- Request specific number of points/items

### Issue: Hallucinations or incorrect information
**Solution**:
- Ask for sources/citations
- Use retrieval-augmented generation (RAG)
- Request step-by-step reasoning
- Verify critical information

## Advanced Techniques

### Prompt Templates
Create reusable prompt templates:
```python
from langchain import PromptTemplate

template = PromptTemplate(
    input_variables=["topic", "style"],
    template="Write a {style} article about {topic}"
)
```

### Dynamic Prompts
Adjust prompts based on context:
```python
if user_level == "beginner":
    prompt = "Explain in simple terms..."
else:
    prompt = "Provide a technical explanation..."
```

### Prompt Optimization
Systematically test and improve prompts:
1. Define success metrics
2. Create test cases
3. Iterate on prompt variations
4. Measure and compare results

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [LangChain Prompt Engineering](https://python.langchain.com/docs/modules/model_io/prompts/)
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

## Contributing

Found an issue or want to add a new prompt engineering tutorial? See our [Contributing Guide](../../CONTRIBUTING.md) for details.

## License

See the [LICENSE](../../LICENSE) file in the repository root for license information.