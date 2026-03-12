# Guardrails and Safety Tutorials

This directory contains tutorials on implementing safety measures, content moderation, and guardrails for responsible AI deployment.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/07-guardrails-and-safety
   ```
3. Open and run your first tutorial

## Tutorials

### 1. **LLM Guardrails** (`llm-guardrails.ipynb`)
Introduction to implementing guardrails for LLM applications.
- **Topics**: Input/output filtering, content moderation, safety checks
- **Prerequisites**: Basic LLM knowledge
- **Estimated time**: 30-40 minutes

### 2. **AI Agent Security** (`ai-agent-security/`)
Comprehensive guide to securing AI agents and multi-agent systems.
- **Topics**: Authentication, RBAC, secure tool execution, data protection, GDPR compliance
- **Framework**: IBM BeeAI
- **Prerequisites**: Agent development knowledge
- **Estimated time**: 60-90 minutes
- **Files**:
  - `ai-agent-security-tutorial.ipynb` - Main tutorial notebook
  - `secure_tool_wrapper.py` - Secure tool wrapper implementation
  - `requirements.txt` - Dependencies

### 3. **Granite Guardian Web App** (`granite-guardian-webapp/`)
Full-stack application demonstrating content moderation with IBM Granite Guardian.
- **Topics**: Real-time content filtering, web application security
- **Prerequisites**: Web development basics
- **Type**: Streamlit Application

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