# Setup Instructions for watsonx Orchestrate Integration

This directory contains configuration files for integrating the arXiv MCP server with watsonx Orchestrate.

## Files

- `toolkit-config.yaml` - Configuration for the arXiv toolkit
- `research-assistant-agent.yaml` - Configuration for the research assistant agent
- `import-to-orchestrate.sh` - Shell script to import configurations (see below)

## Prerequisites

1. watsonx Orchestrate service must be running (typically on `localhost:4321`)
2. watsonx Orchestrate ADK MCP server must be configured in your MCP settings
3. arXiv MCP server must be built (`npm run build` in the parent directory)

## Manual Import via MCP Tools

### Step 1: Import the Toolkit

Use the `import_toolkit` tool from watsonx-orchestrate-adk:

```bash
use_mcp_tool
server_name: watsonx-orchestrate-adk
tool_name: import_toolkit
arguments:
{
  "path": "/your/path/to/mcp-server-integration-ibm-bob/arxiv-server/watsonx-configs/toolkit-config.yaml",
  "app_id": null
}
```

### Step 2: Import the Agent

Use the `import_agent` tool from watsonx-orchestrate-adk:

```bash
use_mcp_tool
server_name: watsonx-orchestrate-adk
tool_name: import_agent
arguments:
{
  "path": "/your/path/to/mcp-server-integration-ibm-bob/arxiv-server/watsonx-configs/research-assistant-agent.yaml",
  "app_id": null
}
```

## Verification

After importing, verify the setup:

### 1. List Toolkits

```bash
use_mcp_tool
server_name: watsonx-orchestrate-adk
tool_name: list_toolkits
```

You should see `arxiv-toolkit` in the list.

### 2. List Agents

```bash
use_mcp_tool
server_name: watsonx-orchestrate-adk
tool_name: list_agents
arguments:
{
  "kind": "native"
}
```

You should see `research-assistant` in the list.

## Testing the Agent

Once imported, you can test the agent with queries like:

- "Find recent papers on quantum computing"
- "Search for papers about graph neural networks"
- "What are the latest developments in transformer architectures?"
- "Show me papers by Geoffrey Hinton"

## Troubleshooting

### Toolkit Import Fails

**Error:** "Package root not found"
- **Solution:** Verify the path in `toolkit-config.yaml` points to the correct arxiv-server directory
- **Solution:** Ensure `npm run build` has been run in the arxiv-server directory

### Agent Import Fails

**Error:** "Tool 'search_arxiv' not found"
- **Solution:** Import the toolkit first before importing the agent
- **Solution:** Verify the toolkit was imported successfully using `list_toolkits`

### Agent Doesn't Respond

**Error:** Agent created but doesn't use the tool
- **Solution:** Check that the toolkit is not disabled
- **Solution:** Verify the tool name matches exactly: `search_arxiv`

### Connection Refused

**Error:** "Connection refused on localhost:4321"
- **Solution:** Start the watsonx Orchestrate service
- **Solution:** Check if the service is running on a different port

## Updating Configurations

If you need to update the configurations:

1. Edit the YAML files in this directory
2. Re-import using the same commands above
3. The existing toolkit/agent will be updated (not duplicated)

## Removing the Integration

To remove the integration:

### Remove Agent

```bash
use_mcp_tool
server_name: watsonx-orchestrate-adk
tool_name: remove_agent
arguments:
{
  "name": "research-assistant",
  "kind": "native"
}
```

### Remove Toolkit

```bash
use_mcp_tool
server_name: watsonx-orchestrate-adk
tool_name: remove_toolkit
arguments:
{
  "name": "arxiv-toolkit"
}
```

## Alternative: Python Script

If you prefer to use Python with the watsonx Orchestrate SDK directly:

```python
from ibm_watsonx_orchestrate import WatsonxOrchestrate

# Initialize client
wxo = WatsonxOrchestrate()

# Import toolkit
toolkit = wxo.import_toolkit(
    file_path="./toolkit-config.yaml"
)
print(f"Toolkit imported: {toolkit.name}")

# Import agent
agent = wxo.import_agent(
    file_path="./research-assistant-agent.yaml"
)
print(f"Agent imported: {agent.name}")
```

## Support

For issues or questions:
- Check the main [README.md](../README.md) for arXiv server documentation
- See [WATSONX_ORCHESTRATE_INTEGRATION.md](../WATSONX_ORCHESTRATE_INTEGRATION.md) for detailed integration guide
- Refer to watsonx Orchestrate documentation