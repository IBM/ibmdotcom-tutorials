# Model Context Protocol (MCP) Tutorials

This directory contains tutorials on the Model Context Protocol (MCP), an open protocol for seamless integration between LLM applications and external data sources.

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
   cd tutorials/11-model-context-protocol
   ```
3. Open notebooks in your IDE (VS Code, PyCharm, etc.) or launch Jupyter:
   ```bash
   jupyter lab  # or jupyter notebook
   ```
4. Open and run your first tutorial

## Tutorials

### IBM Tutorial MCP Server (`ibmtutorialmcpserver/`)
A custom MCP server implementation for IBM tutorials.
- **Topics**: MCP server development, custom integrations
- **Prerequisites**: Node.js, TypeScript
- **Estimated time**: 45-60 minutes

> **Note**: The MCP Server Integration with IBM Bob tutorial has been moved to the [IBM Bob category](../16-ibm-bob/mcp-server-integration-ibm-bob/) for better organization alongside other IBM Bob tutorials.

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