from ibm_watsonx_ai.foundation_models.moderations import Guardian
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.memory import MemorySaver
from langchain_core.messages import AnyMessage, SystemMessage, ToolMessage, AIMessage
from typing_extensions import TypedDict
from typing import Annotated

class AgentState(TypedDict):
    messages: Annotated[list[AnyMessage], add_messages]

class ReActAgent:
    def __init__(self, llm, tools, client, system_message=""):
        memory = MemorySaver()
        graph = StateGraph(AgentState)
        graph.add_node("guardian", self.guardian_moderation)
        graph.add_node("llm", self.call_llm)
        graph.add_node("tools", self.call_tools)
        graph.add_node("block_message", self.block_message)
        graph.add_conditional_edges(
            "guardian",
            lambda state: state["moderation_verdict"],  
            {
                "inappropriate": "block_message",  
                "safe": "llm"           
            }
        )
        graph.add_edge("block_message", END)
        graph.add_conditional_edges(
            "llm",
            self.should_call_tools,
            ["tools", END]
        )
        graph.add_edge("tools", "llm")
        graph.add_edge(START, "guardian")
        self.system_message = system_message
        self.client = client
        self.graph = graph.compile(checkpointer=memory)
        self.tools = {t.name: t for t in tools}
        self.llm = llm.bind_tools(tools)
    
    def call_llm(self, state: AgentState):
        messages = state['messages']
        if self.system_message:
            messages = [SystemMessage(content=self.system_message)] + messages
        message = self.llm.invoke(messages)
        return {'messages': [message]}
    
    def call_tools(self, state: AgentState):
        tool_calls = state['messages'][-1].tool_calls
        results = []
        for t in tool_calls:
            result = self.tools[t['name']].invoke(t['args'])
            results.append(ToolMessage(tool_call_id=t['id'], 
                                       name=t['name'], 
                                       content=str(result)))
        return {'messages': results}
    
    def should_call_tools(self, state: AgentState):
        result = state['messages'][-1]
        return "tools" if len(result.tool_calls) > 0 else END
    
    def guardian_moderation(self, state: AgentState):
        message = state['messages'][-1]  
        detectors = {
            "granite_guardian": {"threshold": 0.4},
            "hap": {"threshold": 0.4},
            "pii": {},
        }
        guardian = Guardian(
            api_client=self.client,  
            detectors=detectors 
        )
        response = guardian.detect(
            text=message.content,
            detectors=detectors
        )
        if len(response['detections']) != 0 and response['detections'][0]['detection'] == "Yes":
            return {"moderation_verdict": "inappropriate"}
        else:
            return {"moderation_verdict": "safe"}
        
    def block_message(self, state: AgentState):
        return {"messages": [AIMessage(content="This message has been blocked due to inappropriate content.")]}
    
   