# Multi-Agent Systems Tutorials

This directory contains tutorials on building multi-agent systems using various frameworks including CrewAI, BeeAI, ACP, AutoGen, ChatDev, and MetaGPT with IBM Watsonx.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account

### Python Version
- **Minimum**: Python 3.10
- **Recommended**: Python 3.11
- **Maximum**: Python 3.13

### ⚠️ Important: BeeAI Framework Version Conflicts

Different BeeAI tutorials require **incompatible versions**. Install the specific version needed for your tutorial:

**For a2a tutorials** (Agent-to-Agent communication):
```bash
pip install "beeai-framework[a2a]>=0.1.36,<0.2.0"
pip install "pydantic>=2.10,<3.0.0"
```

**For beeai_agent_server**:
```bash
pip install "beeai-framework==0.1.29"
pip install "pydantic-ai==0.2.14"
```

**For bee-ai-multi-agent-contract-management**:
```bash
pip install beeai-framework
pip install "beeai-framework[duckduckgo]"
pip install langchain-core langchain-community
```

## Quick Start

1. Install dependencies (see Installation above)
2. For BeeAI tutorials, install the specific version (see above)
3. Navigate to this directory:
   ```bash
   cd tutorials/03-multi-agent-systems
   ```
4. Follow the specific tutorial instructions

## Tutorials by Framework

### CrewAI Tutorials

#### 1. **CrewAI Multiagent Retail Example** (`crewAI-multiagent-retail-example.md`)
Build a retail advisory system with multiple specialized agents.
- **Topics**: Role-based agents, task delegation, retail analysis
- **Prerequisites**: Multi-agent dependencies
- **Estimated time**: 40-50 minutes

#### 2. **Multiagent Collaboration - Customer Call Analysis** (`multiagent-collab-cs-call-center-analysis/`)
Analyze customer service calls using collaborative agents.
- **Topics**: Call analysis, sentiment analysis, agent collaboration
- **Prerequisites**: Multi-agent dependencies
- **Estimated time**: 50-60 minutes
- **Type**: Python Package (uses UV/Hatch)

#### 3. **My Retail Advisor** (`my_retail_advisor/`)
Retail advisory system with CrewAI agents.
- **Topics**: Retail insights, market analysis, agent workflows
- **Prerequisites**: Multi-agent dependencies
- **Estimated time**: 40-50 minutes
- **Type**: Python Package (uses UV/Hatch)

### BeeAI Tutorials

#### 4. **A2A Tutorial** (`a2a_tutorial/`)
Agent-to-Agent communication using BeeAI framework.
- **Topics**: Agent communication, A2A protocol, distributed agents
- **Prerequisites**: Multi-agent dependencies + beeai-framework[a2a]>=0.1.36
- **Estimated time**: 50-60 minutes
- **Type**: Client-Server Architecture

#### 5. **BeeAI Multi-Agent Contract Management** (`bee-ai-multi-agent-contract-management/`)
Contract analysis and management with BeeAI agents.
- **Topics**: Contract analysis, document processing, agent coordination
- **Prerequisites**: Multi-agent dependencies + beeai-framework
- **Estimated time**: 40-50 minutes

### ACP Tutorials

#### 6. **ACP Tutorial** (`acp_tutorial/`)
Framework-agnostic agent communication using ACP (Agent Communication Protocol).
- **Topics**: Cross-framework communication, BeeAI + CrewAI integration
- **Prerequisites**: Multi-agent dependencies + ACP SDK
- **Estimated time**: 60-70 minutes
- **Type**: Multi-component system (client + servers)

### AutoGen Tutorials

#### 7. **AutoGen Local Multi-Agent RAG** (`autogen-local-multi-agent-rag.ipynb`)
Multi-agent RAG system using Microsoft's AutoGen framework.
- **Topics**: Conversational agents, collaborative problem-solving, RAG
- **Prerequisites**: Multi-agent dependencies + requirements-rag.txt
- **Estimated time**: 50-60 minutes
- **Location**: Also in `tutorials/01-rag-and-retrieval/`

### ChatDev Tutorials

#### 8. **ChatDev Watsonx Tutorial** (`chatdev_watsonx_tutorial_/`)
Software development simulation with role-based agent team.
- **Topics**: Software development workflow, role-based agents, code generation
- **Prerequisites**: See tutorial-specific requirements.txt (exact version pins)
- **Estimated time**: 60-90 minutes
- **Type**: Complex multi-agent system
- **Note**: Uses exact version pins - see `chatdev_watsonx_tutorial_/requirements.txt`

### MetaGPT Tutorials

#### 9. **MetaGPT Tutorial** (`metagpt_tutorial/`)
Product requirement document generation using MetaGPT.
- **Topics**: PRD generation, software planning, agent collaboration
- **Prerequisites**: See tutorial-specific instructions
- **Estimated time**: 40-50 minutes

## Framework Comparison

### CrewAI
- **Best for**: Role-based workflows, task delegation
- **Strengths**: Easy to use, built-in tools, good documentation
- **Use cases**: Business processes, content creation, research

### BeeAI
- **Best for**: IBM ecosystem integration, complex agent interactions
- **Strengths**: Agent-to-agent communication, enterprise features
- **Use cases**: Enterprise applications, distributed systems

### ACP (Agent Communication Protocol)
- **Best for**: Cross-framework agent coordination
- **Strengths**: Framework-agnostic, standardized communication
- **Use cases**: Hybrid systems, framework integration

### AutoGen
- **Best for**: Conversational agents, code generation
- **Strengths**: Microsoft ecosystem, strong code capabilities
- **Use cases**: Software development, collaborative problem-solving

### ChatDev
- **Best for**: Software development simulation
- **Strengths**: Complete SDLC simulation, role-based team
- **Use cases**: Automated software development, process simulation

### MetaGPT
- **Best for**: Software planning and documentation
- **Strengths**: PRD generation, structured planning
- **Use cases**: Product management, software planning

## Key Concepts

### Multi-Agent Systems
Systems where multiple AI agents:
- **Collaborate**: Work together toward common goals
- **Communicate**: Exchange information and coordinate actions
- **Specialize**: Each agent has specific roles and capabilities
- **Coordinate**: Manage dependencies and workflows

### Agent Roles
Common agent roles in multi-agent systems:
- **Manager**: Coordinates other agents, assigns tasks
- **Researcher**: Gathers and analyzes information
- **Writer**: Creates content and documentation
- **Reviewer**: Evaluates and provides feedback
- **Executor**: Performs specific actions or tasks

### Communication Patterns
- **Hierarchical**: Manager delegates to subordinate agents
- **Peer-to-Peer**: Agents communicate directly with each other
- **Broadcast**: One agent sends messages to all agents
- **Request-Response**: Agents request services from each other

## Common Use Cases

- **Content Creation**: Multiple agents for research, writing, editing
- **Software Development**: Agents for planning, coding, testing, reviewing
- **Business Analysis**: Agents for data gathering, analysis, reporting
- **Customer Service**: Agents for routing, resolution, escalation
- **Research**: Agents for literature review, analysis, synthesis

## Troubleshooting

### Issue: BeeAI version conflicts
**Solution**: Install the specific version required by your tutorial:
```bash
# For a2a tutorials
pip install "beeai-framework[a2a]>=0.1.36,<0.2.0"

# For beeai_agent_server
pip install "beeai-framework==0.1.29"
```

### Issue: CrewAI import errors
**Solution**: Ensure CrewAI is installed with tools:
```bash
pip install "crewai[tools]>=0.95.0,<1.0.0"
```

### Issue: ACP SDK not found
**Solution**: Install ACP SDK:
```bash
pip install "acp-sdk>=1.0.1"
```

### Issue: AutoGen web-surfer not working
**Solution**: Install web-surfer extension and Playwright:
```bash
pip install autogen-ext[web-surfer]
playwright install
```

### Issue: ChatDev dependencies conflict
**Solution**: Use the tutorial-specific requirements.txt:
```bash
cd chatdev_watsonx_tutorial_
pip install -r requirements.txt
```

### Issue: Agents not communicating
**Solution**: 
- Check agent configuration and roles
- Verify communication protocol setup
- Review agent task definitions
- Check for network/connection issues (for distributed agents)

### Issue: Slow multi-agent execution
**Solution**:
- Reduce number of agents
- Optimize agent prompts
- Use parallel execution where possible
- Cache repeated operations

### Issue: Version conflicts
**Solution**: Create a fresh virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements-multiagent.txt
```

## Best Practices

1. **Agent Design**: Keep agents focused on specific roles
2. **Communication**: Define clear communication protocols
3. **Error Handling**: Implement robust error handling for agent failures
4. **Testing**: Test individual agents before integration
5. **Monitoring**: Log agent interactions for debugging
6. **Scalability**: Design for horizontal scaling when needed
7. **Human Oversight**: Include human-in-the-loop for critical decisions

## Tutorial-Specific Notes

### A2A Tutorial
- Requires BeeAI framework >=0.1.36
- Uses client-server architecture
- See `a2a_tutorial/a2a-tutorial.md` for detailed instructions

### ACP Tutorial
- Demonstrates cross-framework communication
- Includes BeeAI and CrewAI agent servers
- See `acp_tutorial/acp_tutorial.md` for setup

### ChatDev Tutorial
- Complex setup with exact version requirements
- See `chatdev_watsonx_tutorial_/requirements.txt`
- Includes visualization tools

### CrewAI Projects
- Use modern Python packaging (UV/Hatch)
- See individual pyproject.toml files
- Can be run as standalone packages

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [CrewAI Documentation](https://docs.crewai.com/)
- [BeeAI Documentation](https://github.com/i-am-bee/bee-agent-framework)
- [AutoGen Documentation](https://microsoft.github.io/autogen/)
- [LangChain Multi-Agent Documentation](https://python.langchain.com/docs/use_cases/multi_agent/)

## Contributing

Found an issue or want to add a new multi-agent tutorial? See our [Contributing Guide](../../CONTRIBUTING.md) for details on how to contribute.

## License

See the [LICENSE](../../LICENSE) file in the repository root for license information.