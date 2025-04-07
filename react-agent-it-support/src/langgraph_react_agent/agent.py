from typing import Callable
from ibm_watsonx_ai import APIClient
from langchain_ibm import ChatWatsonx
from langgraph.graph.graph import CompiledGraph
from langgraph.prebuilt import create_react_agent
from langgraph.checkpoint.memory import MemorySaver

from langgraph_react_agent import TOOLS

def get_graph_closure(client: APIClient, model_id: str) -> Callable:
    """Graph generator closure."""

    # Initialise ChatWatsonx
    chat = ChatWatsonx(model_id=model_id, watsonx_client=client)

    # Define system prompt
    default_system_prompt = "You are a helpful AI assistant, please respond to the user's query to the best of your ability! Execute a tool call whenever you see fit."

    # Initialise memory saver
    memory = MemorySaver()

    def get_graph(system_prompt=default_system_prompt) -> CompiledGraph:
        """Get compiled graph with overwritten system prompt, if provided"""
        graph = create_react_agent(
            chat, tools=TOOLS, checkpointer=memory, state_modifier=system_prompt
        )
        return graph

    return get_graph
