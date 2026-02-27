# Model Context Protocol (MCP) Tutorials

This directory contains tutorials on the Model Context Protocol (MCP), an open protocol for seamless integration between LLM applications and external data sources.

## Installation

From the **repository root**, run:

```bash
pip install -r requirements-agents.txt
```

**Prerequisites:** Python 3.10-3.13

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/11-model-context-protocol
   ```
3. Open notebooks in your IDE (VS Code, PyCharm, etc.) or launch Jupyter:
   ```bash
   jupyter lab  # or jupyter notebook
   ```
4. Open and run your first tutorial

## What is MCP?

The Model Context Protocol is an **open standard** that enables:
- **Standardized communication** between LLMs and external systems
- **Context sharing** across different tools and data sources
- **Tool integration** with a unified interface
- **Data source connectivity** through a common protocol

### Key Benefits

1. **Interoperability**: Connect any LLM to any data source
2. **Standardization**: Common protocol reduces integration complexity
3. **Flexibility**: Easy to add new tools and data sources
4. **Security**: Controlled access to external resources
5. **Scalability**: Efficient context management

## MCP Architecture

```
┌─────────────────┐
│   LLM Client    │  (Your application)
└────────┬────────┘
         │ MCP Protocol
┌────────▼────────┐
│   MCP Server    │  (Integration layer)
└────────┬────────┘
    ┌────┴────┐
┌───▼──┐  ┌──▼───┐
│ Tool │  │ Data │
│      │  │Source│
└──────┘  └──────┘
```

## Core Concepts

- **Resources**: External data sources (files, databases, APIs)
- **Tools**: Functions that can be invoked
- **Prompts**: Pre-defined prompt templates
- **Context**: Shared information between client and server

## Common Use Cases

- **Database Integration**: Query databases through standardized interface
- **File System Access**: Read and process files
- **API Integration**: Call external APIs
- **Document Processing**: Extract and analyze document content

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [MCP Specification](https://modelcontextprotocol.io/)
- [MCP GitHub Repository](https://github.com/modelcontextprotocol)

## Contributing

Found an issue or want to add a new MCP tutorial? See our [Contributing Guide](../../CONTRIBUTING.md).

## License

See the [LICENSE](../../LICENSE) file in the repository root.