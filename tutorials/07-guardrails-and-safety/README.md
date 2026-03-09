# Guardrails and Safety Tutorials

This directory contains tutorials on implementing safety measures, content moderation, and guardrails for responsible AI deployment.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account
- Jupyter Notebook or JupyterLab

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/07-guardrails-and-safety
   ```
3. Open notebooks in your IDE (VS Code, PyCharm, etc.) or launch Jupyter:
   ```bash
   jupyter lab  # or jupyter notebook
   ```
4. Open and run your first tutorial

## What are Guardrails?

Safety mechanisms that:
- **Validate inputs** before processing
- **Filter outputs** before delivery
- **Detect harmful content** (toxicity, bias, PII)
- **Enforce policies** (content guidelines, compliance)
- **Monitor behavior** (anomaly detection, drift)

## Types of Guardrails

### Input Guardrails
- Prompt injection detection
- PII detection and redaction
- Content filtering
- Input validation

### Output Guardrails
- Toxicity filtering
- Factuality checking
- Hallucination detection
- Bias detection
- PII redaction

### Behavioral Guardrails
- Rate limiting
- Cost controls
- Topic restrictions
- Conversation monitoring

## Common Use Cases

### Enterprise
- Compliance (GDPR, HIPAA)
- Brand safety
- Data privacy
- Content moderation

### Customer-Facing
- Child safety
- Harassment prevention
- Misinformation control
- User protection

### Internal Tools
- Access control
- Audit logging
- Quality assurance
- Risk management

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx AI Governance](https://www.ibm.com/docs/en/watsonx/saas?topic=governance)
- [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [LangChain Safety Best Practices](https://python.langchain.com/docs/guides/safety/)

## Contributing

Found an issue or want to add a new guardrails tutorial? See our [Contributing Guide](../../CONTRIBUTING.md).

## License

See the [LICENSE](../../LICENSE) file in the repository root.