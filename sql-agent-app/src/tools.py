from .database import create_sql_database
from .watsonx import get_llm
from langchain_core.tools import Tool
from langchain_experimental.tools.python.tool import PythonREPLTool
from langchain_community.agent_toolkits.sql.toolkit import SQLDatabaseToolkit

# Get available tools and return them as a list
def get_tools(llm):
    db = create_sql_database()
    toolkit = SQLDatabaseToolkit(db=db, llm=llm)
    tools = toolkit.get_tools()
    python_repl = PythonREPLTool()
    tools.append(python_repl)
    return tools