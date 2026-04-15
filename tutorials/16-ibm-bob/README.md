# IBM Bob Tutorials

This directory contains tutorials on using IBM Bob, an AI-powered coding assistant that helps developers with various tasks including documentation, code generation, and MCP server integration.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM Bob (VS Code extension or CLI)
- Basic understanding of AI assistants

## Quick Start

1. Install IBM Bob extension in VS Code or use the CLI
2. Navigate to this directory:
   ```bash
   cd tutorials/16-ibm-bob
   ```
3. Follow the tutorial-specific instructions in each subdirectory

## Tutorials

### 1. **AI Documentation with IBM Bob** (`ai-docs-ibm-bob/`)
Learn how to use IBM Bob to automatically generate and maintain project documentation.
- **Topics**: Documentation generation, custom modes, task automation
- **Prerequisites**: IBM Bob installed
- **Estimated time**: 30-45 minutes
- **Files**: 
  - `ai-documentation-with-ibm-bob.md` - Main tutorial
  - `assets/` - Screenshots and images

### 2. **MCP Server Integration with IBM Bob** (`mcp-server-integration-ibm-bob/`)
Build and integrate Model Context Protocol (MCP) servers with IBM Bob for enhanced capabilities.
- **Topics**: MCP server development, arXiv integration, watsonx Orchestrate integration
- **Prerequisites**: Node.js, TypeScript, IBM Bob
- **Estimated time**: 60-90 minutes
- **Files**: 
  - `mcp-integration-ibm-bob.md` - Main tutorial
  - `arxiv-server/` - Complete MCP server implementation
  - `images/` - Tutorial screenshots

  ### 3. **LLM Code Review with IBM Bob** (`llm-code-review-with-ibm-bob/`)
  Learn how to use IBM Bob to perform automated code reviews and generate actionable feedback for pull requests.
  - **Topics**: LLM-driven code review, automated suggestions, integrating with CI/CD
  - **Prerequisites**: IBM Bob installed, familiarity with Git and pull requests
  - **Estimated time**: 30-60 minutes
  - **Files**:
    - `llm-code-review-with-ibm-bob.md` - Main tutorial
    - `examples/` - Sample repositories and config files

## What is IBM Bob?

IBM Bob is an AI-powered coding assistant that helps developers:
- **Generate Documentation**: Automatically create and maintain project docs
- **Write Code**: Generate code snippets and complete implementations
- **Integrate Tools**: Connect with MCP servers and external services
- **Automate Tasks**: Create custom modes for repetitive workflows
- **Collaborate**: Work alongside developers as an AI pair programmer

## Key Features

### Custom Modes
Create specialized AI assistants for specific tasks:
- Documentation architect
- Code reviewer
- Test generator
- API designer

### MCP Integration
Connect IBM Bob to external data sources and tools:
- Research databases (arXiv, PubMed)
- Internal APIs and services
- Custom business logic
- watsonx Orchestrate agents

### Task Automation
Automate repetitive development tasks:
- Documentation updates
- Code refactoring
- Test generation
- API documentation

## Common Use Cases

### Documentation
- Generate README files
- Create API documentation
- Write technical guides
- Maintain changelog

### Development
- Code generation
- Refactoring assistance
- Bug fixing
- Code review

### Integration
- MCP server development
- API integration
- Tool connectivity
- Workflow automation

## Best Practices

1. **Clear Instructions**: Provide specific, detailed prompts to IBM Bob
2. **Iterative Refinement**: Review and refine Bob's outputs
3. **Custom Modes**: Create specialized modes for recurring tasks
4. **Version Control**: Track changes made with Bob's assistance
5. **Human Review**: Always review AI-generated code and documentation

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Bob Documentation](https://www.ibm.com/products/watsonx-code-assistant)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [watsonx Orchestrate](https://www.ibm.com/products/watsonx-orchestrate)

## Contributing

Found an issue or want to add a new IBM Bob tutorial? See our [Contributing Guide](../../CONTRIBUTING.md).

## License

See the [LICENSE](../../LICENSE) file in the repository root.