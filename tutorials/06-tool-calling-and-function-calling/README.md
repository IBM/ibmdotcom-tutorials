# Tool Calling and Function Calling Tutorials

This directory contains tutorials on extending LLM capabilities through tool calling and function calling, enabling LLMs to interact with external APIs, databases, and services.

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
   cd tutorials/06-tool-calling-and-function-calling
   ```
3. Open notebooks in your IDE (VS Code, PyCharm, etc.) or launch Jupyter:
   ```bash
   jupyter lab  # or jupyter notebook
   ```
4. Open and run your first tutorial

## Available Tutorials

### 1. **Function Calling** (`function-calling.ipynb`)
Learn the fundamentals of function calling with LLMs.
- **Topics**: Function definitions, schemas, execution, error handling
- **Time**: 30-40 minutes

### 2. **LangChain Tools** (`langchain-tools.ipynb`)
Explore LangChain's built-in tools and create custom tools.
- **Topics**: Tool creation, tool integration, custom tools, tool chains
- **Time**: 35-45 minutes

### 3. **Ollama Tools** (`ollama_tools.ipynb`)
Use tools with locally-running Ollama models.
- **Topics**: Local LLM tool calling, Ollama integration, offline tools
- **Prerequisites**: Ollama installed and running locally
- **Time**: 30-40 minutes

## Key Concepts

### What is Tool Calling?
Tool calling (also called function calling) allows LLMs to:
- Invoke external functions based on user requests
- Access real-time data from APIs and databases
- Perform actions like sending emails, creating files
- Extend capabilities beyond text generation

### Function Calling Flow
1. **Define Functions**: Specify available functions with schemas
2. **User Query**: User asks a question requiring external data
3. **LLM Decision**: LLM decides which function(s) to call
4. **Function Execution**: Your code executes the function
5. **Result Integration**: LLM uses results to generate response

## Common Use Cases

- **Data Retrieval**: Fetch information from databases or APIs
- **Calculations**: Perform complex computations
- **Web Search**: Search the internet for current information
- **File Operations**: Read, write, or manipulate files
- **API Integration**: Interact with external services
- **Database Queries**: Execute SQL or NoSQL queries

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [LangChain Tools Documentation](https://python.langchain.com/docs/modules/agents/tools/)
- [OpenAI Function Calling Guide](https://platform.openai.com/docs/guides/function-calling)

## Contributing

Found an issue or want to add a new tool calling tutorial? See our [Contributing Guide](../../CONTRIBUTING.md).

## License

See the [LICENSE](../../LICENSE) file in the repository root.