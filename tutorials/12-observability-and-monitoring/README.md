# Observability and Monitoring Tutorials

This directory contains tutorials on monitoring and observability for LLM applications using IBM Watsonx Orchestrate and third-party platforms.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account

## Available Tutorials

### 1. **Watsonx Orchestrate with AgentOps** (`wxo_agentops/`)
Monitor agent behavior and performance using AgentOps integration.
- **Features**: Real-time monitoring, trajectory visualization, analytics
- **Prerequisites**: Watsonx Orchestrate access
- **Time**: 45-60 minutes

### 2. **Watsonx Orchestrate with Langfuse** (`wxo_observability_langfuse/`)
Comprehensive observability using Langfuse platform.
- **Features**: Trace logging, cost tracking, quality metrics
- **Prerequisites**: Langfuse account
- **Time**: 40-50 minutes

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to a tutorial subdirectory
3. Follow the tutorial-specific README for setup

## Key Concepts

**Observability** helps you understand LLM application behavior through:
- **Logs**: Discrete events and messages
- **Metrics**: Performance measurements (latency, cost, errors)
- **Traces**: Request flows through the system

**Why it matters for LLMs:**
- Track token usage and costs
- Monitor response quality
- Debug complex agent chains
- Identify performance bottlenecks

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Orchestrate Documentation](https://www.ibm.com/docs/en/watsonx/orchestrate)
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
- [Langfuse Documentation](https://langfuse.com/docs)

## Contributing

Found an issue or want to add a new tutorial? See our [Contributing Guide](../../CONTRIBUTING.md).

## License

See the [LICENSE](../../LICENSE) file in the repository root.