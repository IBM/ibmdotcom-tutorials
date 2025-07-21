import streamlit as st
from langchain import hub  
from langchain_core.messages import HumanMessage, AIMessage, ToolMessage
import pandas as pd
from src.watsonx import get_llm
from src.agent import ReActAgent
from src.tools import get_tools
from src.database import create_sql_database

st.title("SQL Agent")
st.write("This app allows you to interact with an SQL database using a generative AI agent.")
st.caption("Powered by watsonx.ai.")
st.divider()

llm, client = get_llm(model_id="mistralai/mistral-medium-2505")
tools=get_tools(llm)
db = create_sql_database()

chatprompttemplate = hub.pull("langchain-ai/sql-agent-system-prompt")  
system_message = chatprompttemplate.format(dialect="SQLite", top_k=5)  

agent = ReActAgent(
    llm=llm,
    tools=tools,
    client=client,
    system_message=system_message
)

if 'thread_id' not in st.session_state:
    st.session_state['thread_id'] = 1

st.text_input(label="User query", placeholder="E.g. How many cars were sold in 2022?", disabled=False, key="query")

def clear_memory(): 
    st.session_state['thread_id'] += 1
    st.info('Memory is cleared.', icon="ℹ️", width="stretch")

def invoke_agent():
    try:
        result = agent.graph.invoke({"messages": [HumanMessage(content=st.session_state['query'])]}, {"configurable": {"thread_id": st.session_state['thread_id']}})
        print(result)
        for message in result["messages"]:
            if isinstance(message, AIMessage):
                st.markdown("**AI Response:**")
                if message.tool_calls:
                    for tool_call in message.tool_calls:
                        st.markdown(f"*Tool Name:* {tool_call['name']}")
                        if tool_call['args']:
                            st.markdown(f"*Arguments:* {tool_call['args']}")
            elif isinstance(message, ToolMessage):
                st.markdown("**Tool Response:**")
            elif isinstance(message, HumanMessage):
                st.markdown("**User Message:**")
            if message.content:
                st.code(message.content)
        st.badge("Success", icon=":material/check:", color="green")
    except Exception as e:
        st.error(f"LangGraph invocation failed: {e}", icon="🚨")

# col1, col2, col3, col4 = st.columns([1,1,1,1])

# with col1:
if st.button('Invoke'):
    invoke_agent()
# with col4:
if st.button('Start new chat'):
    clear_memory()
    print(f"New thread_id: {st.session_state['thread_id']}")
