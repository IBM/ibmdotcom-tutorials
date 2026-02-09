# Integrating arXiv MCP Server with watsonx Orchestrate

This guide explains how to integrate the arXiv MCP server as a toolkit in watsonx Orchestrate and create an agent that uses it.

## Prerequisites

- watsonx Orchestrate service running (typically on `localhost:4321`)
- arXiv MCP server built and configured (see [README.md](README.md))
- watsonx Orchestrate ADK MCP server configured in your MCP settings

## Step 1: Add arXiv as a Toolkit

Use the watsonx Orchestrate ADK to add the arXiv MCP server as a toolkit:

```javascript
{
  "kind": "mcp",
  "name": "arxiv-toolkit",
  "description": "Toolkit for searching arXiv research papers. Provides access to paper metadata, abstracts, and publication information.",
  "package_root": "/path/to/arxiv-server",
  "language": "node",
  "command": "node /path/to/arxiv-server/build/index.js",
  "tools": ["*"]
}
```

### Using the MCP Tool

If you have the watsonx-orchestrate-adk MCP server configured, you can add the toolkit using:

```bash
use_mcp_tool with server_name: watsonx-orchestrate-adk
tool_name: add_toolkit
arguments: {
  "options": {
    "kind": "mcp",
    "name": "arxiv-toolkit",
    "description": "Toolkit for searching arXiv research papers",
    "package_root": "/path/to/arxiv-server",
    "language": "node",
    "command": "node /path/to/arxiv-server/build/index.js",
    "tools": ["*"]
  }
}
```

## Step 2: Create a Research Assistant Agent

Once the toolkit is added, create an agent that uses it:

```javascript
{
  "name": "research-assistant",
  "description": "AI research assistant that helps find and summarize academic papers from arXiv",
  "kind": "native",
  "instructions": `You are a helpful research assistant that helps users find academic papers on arXiv.

When users ask about research topics:
1. Use the search_arxiv tool to find relevant papers
2. Summarize the key findings from the abstracts
3. Provide paper titles, authors, and URLs for further reading
4. Suggest related search terms if needed

Always cite the arXiv ID and provide the direct URL to papers.
Focus on the most recent and relevant papers unless the user specifies otherwise.`,
  "tools": ["search_arxiv"]
}
```

### Using the MCP Tool

```bash
use_mcp_tool with server_name: watsonx-orchestrate-adk
tool_name: create_or_update_agent
arguments: {
  "options": {
    "name": "research-assistant",
    "description": "AI research assistant for finding academic papers on arXiv",
    "kind": "native",
    "instructions": "You are a helpful research assistant...",
    "tools": ["search_arxiv"]
  }
}
```

## Step 3: Test the Agent

Once created, you can interact with the agent through watsonx Orchestrate:

**Example queries:**
- "Find recent papers on quantum computing"
- "What are the latest developments in graph neural networks?"
- "Search for papers about LLM agent architectures from 2025"
- "Show me papers by Geoffrey Hinton on deep learning"

## Agent Configuration Options

### Basic Configuration

```yaml
name: research-assistant
description: AI research assistant for arXiv papers
kind: native
tools:
  - search_arxiv
```

### Advanced Configuration with Instructions

```yaml
name: research-assistant
description: AI research assistant for arXiv papers
kind: native
instructions: |
  You are an expert research assistant specializing in academic literature search.
  
  Your capabilities:
  - Search arXiv for papers on any scientific topic
  - Summarize research findings from abstracts
  - Identify key authors and research trends
  - Suggest related papers and topics
  
  When responding:
  - Always provide arXiv IDs and URLs
  - Summarize abstracts in plain language
  - Highlight key contributions and findings
  - Suggest follow-up searches when relevant
  
  Search parameters you can use:
  - max_results: 1-50 papers (default: 10)
  - sort_by: relevance, submittedDate, lastUpdatedDate
  - sort_order: ascending, descending
  
  Advanced search syntax:
  - ti:title - Search in title
  - au:author - Search by author
  - abs:abstract - Search in abstract
  - cat:category - Filter by category (e.g., cs.AI, quant-ph)
  - Use AND, OR, ANDNOT for boolean queries

tools:
  - search_arxiv

config:
  hidden: false
  enable_cot: true
```

## Example Agent Interactions

### Example 1: Simple Search

**User:** "Find papers on transformer architectures"

**Agent Response:**
```
I found several relevant papers on transformer architectures. Here are the top results:

1. **"Attention Is All You Need"**
   - Authors: Vaswani et al.
   - Published: 2017-06-12
   - arXiv: 1706.03762
   - Summary: Introduces the Transformer architecture based entirely on attention mechanisms...
   - [View paper](https://arxiv.org/abs/1706.03762)

2. **"BERT: Pre-training of Deep Bidirectional Transformers"**
   - Authors: Devlin et al.
   - Published: 2018-10-11
   - arXiv: 1810.04805
   - Summary: Proposes BERT, a bidirectional transformer model...
   - [View paper](https://arxiv.org/abs/1810.04805)

Would you like me to search for more specific aspects of transformers?
```

### Example 2: Advanced Search

**User:** "Find recent papers by Yann LeCun on computer vision"

**Agent Response:**
```
Searching arXiv for papers by Yann LeCun in computer vision...

I found 15 papers. Here are the most recent:

1. **"Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture"**
   - Authors: Assran, LeCun, et al.
   - Published: 2023-01-15
   - Categories: cs.CV, cs.LG
   - [View paper](https://arxiv.org/abs/2301.08243)

[Additional papers...]

These papers focus on self-supervised learning and representation learning in computer vision.
```

## Toolkit Management

### List Available Toolkits

```bash
use_mcp_tool with server_name: watsonx-orchestrate-adk
tool_name: list_toolkits
```

### Remove the Toolkit

```bash
use_mcp_tool with server_name: watsonx-orchestrate-adk
tool_name: remove_toolkit
arguments: {
  "name": "arxiv-toolkit"
}
```

### Export Toolkit Configuration

```bash
use_mcp_tool with server_name: watsonx-orchestrate-adk
tool_name: export_toolkit
arguments: {
  "name": "arxiv-toolkit",
  "output_file_path": "./arxiv-toolkit-config.zip"
}
```

## Agent Management

### List Agents

```bash
use_mcp_tool with server_name: watsonx-orchestrate-adk
tool_name: list_agents
arguments: {
  "kind": "native"
}
```

### Update Agent

```bash
use_mcp_tool with server_name: watsonx-orchestrate-adk
tool_name: create_or_update_agent
arguments: {
  "options": {
    "name": "research-assistant",
    "description": "Updated description",
    "instructions": "Updated instructions...",
    "tools": ["search_arxiv"]
  }
}
```

### Remove Agent

```bash
use_mcp_tool with server_name: watsonx-orchestrate-adk
tool_name: remove_agent
arguments: {
  "name": "research-assistant",
  "kind": "native"
}
```

## Troubleshooting

### Toolkit Not Found

If the toolkit doesn't appear after adding:
1. Verify the arXiv server path is correct
2. Ensure the build directory exists: `npm run build`
3. Check watsonx Orchestrate logs for errors

### Agent Can't Access Tools

If the agent can't use the search_arxiv tool:
1. Verify the toolkit is properly added: `list_toolkits`
2. Check that tools array includes "search_arxiv"
3. Ensure the MCP server is running correctly

### Connection Refused

If you get "Connection refused" errors:
1. Verify watsonx Orchestrate service is running
2. Check the service is on the correct port (default: 4321)
3. Ensure no firewall is blocking the connection

## Best Practices

1. **Specific Instructions**: Provide clear instructions about how to use the search tool
2. **Result Limits**: Set reasonable max_results (10-20) for better performance
3. **Error Handling**: Include instructions for handling no results or API errors
4. **Citation Format**: Standardize how papers are cited in responses
5. **Follow-up Queries**: Enable the agent to suggest related searches

## Additional Resources

- [arXiv API Documentation](https://info.arxiv.org/help/api/index.html)
- [watsonx Orchestrate Documentation](https://www.ibm.com/docs/en/watsonx/watson-orchestrate)
- [MCP Protocol Specification](https://modelcontextprotocol.io/)