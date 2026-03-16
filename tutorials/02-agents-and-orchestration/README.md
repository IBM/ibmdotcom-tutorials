# Agents and Orchestration Tutorials

This directory contains tutorials on building AI agents, agent orchestration, and tool-calling using IBM Watsonx, LangChain, and LangGraph.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account

### Python Version
- **Minimum**: Python 3.10
- **Recommended**: Python 3.11
- **Maximum**: Python 3.13

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/02-agents-and-orchestration
   ```
3. For Streamlit apps (e.g., SQL agent):
   ```bash
   cd sql-agent-app
   streamlit run app.py
   ```

## Tutorials

### 1. **LLM Agent Orchestration** (`llm-agent-orchestration.ipynb`)
Introduction to building and orchestrating LLM-powered agents.
- **Topics**: Agent basics, tool calling, orchestration patterns
- **Prerequisites**: Agent dependencies
- **Estimated time**: 30-40 minutes

### 2. **Human-in-the-Loop Agent** (`human-in-the-loop-agent.ipynb`)
Build agents that can request human input during execution.
- **Topics**: Human feedback, interactive agents, approval workflows
- **Prerequisites**: Agent dependencies + LangGraph
- **Estimated time**: 30-40 minutes

### 3. **LangGraph Mistral SQL Agent** (`langgraph-mistral-sql-agent.ipynb`)
SQL query agent using LangGraph and Mistral AI.
- **Topics**: SQL generation, database interaction, LangGraph workflows
- **Prerequisites**: Agent dependencies + Mistral
- **Estimated time**: 40-50 minutes

### 4. **SQL Agent App** (`sql-agent-app/`)
Full-stack Streamlit application with voice-enabled SQL agent.
- **Topics**: Streamlit UI, voice input, SQL agent, production deployment
- **Prerequisites**: Agent dependencies + Streamlit
- **Estimated time**: 50-60 minutes
- **Type**: Streamlit Application
- **Run**: `cd sql-agent-app && streamlit run app.py`

### 5. **ReAct Agent IT Support** (`react-agent-it-support/`)
IT support agent using ReAct (Reasoning + Acting) pattern.
- **Topics**: ReAct pattern, tool use, IT support automation
- **Prerequisites**: Agent dependencies (uses Poetry)
- **Estimated time**: 40-50 minutes
- **Type**: Python Package
- **Note**: Uses Poetry for dependency management (see pyproject.toml)

### 6. **Function Calling** (`function-calling.ipynb`)
Learn how to use function calling with LLMs.
- **Topics**: Function definitions, tool schemas, function execution
- **Prerequisites**: Agent dependencies
- **Estimated time**: 30-40 minutes
- **Location**: Also in `tutorials/06-tool-calling-and-function-calling/`

### 7. **LangChain Tools** (`langchain-tools.ipynb`)
Explore LangChain's built-in tools and create custom tools.
- **Topics**: Tool creation, tool integration, custom tools
- **Prerequisites**: Agent dependencies
- **Estimated time**: 30-40 minutes
- **Location**: Also in `tutorials/06-tool-calling-and-function-calling/`

## Key Concepts

### What is an AI Agent?
An AI agent is an autonomous system that:
- **Perceives**: Understands its environment and user requests
- **Reasons**: Plans actions to achieve goals
- **Acts**: Executes actions using tools and APIs
- **Learns**: Improves from feedback and experience

### Agent Components
1. **LLM Brain**: The reasoning engine (e.g., IBM Watsonx, Mistral)
2. **Tools**: Functions the agent can call (APIs, databases, search)
3. **Memory**: Context and conversation history
4. **Orchestration**: Workflow and decision-making logic

### LangGraph
LangGraph is a framework for building stateful, multi-actor applications with LLMs:
- **Nodes**: Individual processing steps
- **Edges**: Connections between nodes
- **State**: Shared data across the graph
- **Cycles**: Support for iterative workflows

### ReAct Pattern
ReAct (Reasoning + Acting) alternates between:
1. **Thought**: Reasoning about what to do next
2. **Action**: Executing a tool or function
3. **Observation**: Analyzing the result
4. **Repeat**: Until the goal is achieved

## Common Use Cases

- **Customer Support**: Automated help desk and ticket resolution
- **Data Analysis**: SQL query generation and data exploration
- **Research Assistant**: Information gathering and synthesis
- **Task Automation**: Workflow automation and process optimization
- **Code Generation**: Automated code writing and debugging

## Running Streamlit Applications

Several tutorials include Streamlit applications for interactive demos:

### SQL Agent App
```bash
cd sql-agent-app
streamlit run app.py
```

Features:
- Natural language to SQL conversion
- Voice input support
- Interactive database queries
- Real-time results visualization

### Configuration
Create a `.env` file with your credentials:
```env
WATSONX_API_KEY=your_api_key
WATSONX_PROJECT_ID=your_project_id
```

## Troubleshooting

### Issue: Package installation fails
**Solution**: Ensure you're using Python 3.10-3.13 and have the latest pip:
```bash
python -m pip install --upgrade pip
pip install -r requirements-agents.txt
```

### Issue: LangGraph import errors
**Solution**: Verify LangGraph is installed correctly:
```bash
pip install "langgraph>0.2,<0.3"
pip install langgraph_sdk langgraph-prebuilt
```

### Issue: Streamlit app won't start
**Solution**: 
1. Check if Streamlit is installed: `pip install streamlit`
2. Verify you're in the correct directory
3. Check for port conflicts: `streamlit run app.py --server.port 8502`

### Issue: Tool calling errors
**Solution**: Ensure your LLM supports function calling:
- IBM Watsonx: Use models that support function calling
- Check tool schema format matches LLM requirements

### Issue: Agent gets stuck in loops
**Solution**: 
- Add max iterations limit
- Improve tool descriptions
- Add explicit stopping conditions
- Use human-in-the-loop for complex decisions

### Issue: Slow agent response
**Solution**:
- Reduce number of tools available to agent
- Use faster LLM models
- Implement caching for repeated queries
- Optimize tool execution

### Issue: Version conflicts
**Solution**: Create a fresh virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements-agents.txt
```

## Best Practices

1. **Tool Design**: Keep tools focused and well-documented
2. **Error Handling**: Implement robust error handling in tools
3. **Prompt Engineering**: Clear instructions improve agent performance
4. **Testing**: Test agents with diverse inputs and edge cases
5. **Monitoring**: Log agent decisions and tool calls for debugging
6. **Human Oversight**: Use human-in-the-loop for critical decisions
7. **Rate Limiting**: Implement rate limits to prevent runaway agents

## Agent Design Patterns

### Simple Agent
Single LLM call with tool access:
```python
agent = create_agent(llm, tools)
result = agent.invoke({"input": "user query"})
```

### ReAct Agent
Iterative reasoning and acting:
```python
agent = create_react_agent(llm, tools)
result = agent.invoke({"input": "complex task"})
```

### Human-in-the-Loop
Agent requests human approval:
```python
agent = create_agent_with_human_approval(llm, tools)
result = agent.invoke({"input": "sensitive operation"})
```

### Multi-Step Workflow
LangGraph for complex workflows:
```python
workflow = StateGraph(AgentState)
workflow.add_node("research", research_node)
workflow.add_node("analyze", analyze_node)
workflow.add_edge("research", "analyze")
```

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [LangChain Agents Documentation](https://python.langchain.com/docs/modules/agents/)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [Streamlit Documentation](https://docs.streamlit.io/)

## Contributing

Found an issue or want to add a new agent tutorial? See our [Contributing Guide](../../CONTRIBUTING.md) for details on how to contribute.

## License

See the [LICENSE](../../LICENSE) file in the repository root for license information.