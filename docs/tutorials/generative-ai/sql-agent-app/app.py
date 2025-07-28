import streamlit as st
from langchain import hub  
from langchain_core.messages import HumanMessage, AIMessage, ToolMessage
from src.watsonx import get_llm
from src.agent import ReActAgent
from src.tools import get_tools
from src.database import create_sql_database
from src.speech import transcribe_audio
import torch
from streamlit_extras.stylable_container import stylable_container
from streamlit_chat_widget import chat_input_widget

torch.classes.__path__ = [] 

st.markdown("### 🤖 SQL Agent ")

if "messages" not in st.session_state:
    st.session_state.messages = []

# container to provide a chat-like UI
with stylable_container(
        key="chat_input",
        css_styles="""
            {
                position: fixed;
                bottom: 50px;
            }
            """,
    ):
        audio = st.audio_input("", key="audio_input")
        prompt = st.chat_input("Say something", key="prompt")
        clear_button = st.button('Start new chat')


llm, client = get_llm(model_id="mistralai/mistral-medium-2505",)
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

def invoke_agent(user_query: str):
    try:
        result = agent.graph.invoke({"messages": [HumanMessage(content=user_query)]}, {"configurable": {"thread_id": st.session_state['thread_id']}})
        print(result)
        for message in result["messages"]:
            if isinstance(message, AIMessage):
                if message.tool_calls:
                    for tool_call in message.tool_calls:
                        st.session_state.messages.append({"role": "assistant", "content":f"Calling tool {tool_call['name']} with the following arguments: {tool_call['args']}"})
                else:
                    st.session_state.messages.append({"role": "assistant", "content": message.content})
            elif isinstance(message, ToolMessage) and message.content != "":
                st.session_state.messages.append({"role": "tool", "content": "Tool output: " + '\n' + message.content})
    except Exception as e:
        st.error(f"LangGraph invocation failed: {e}", icon="🚨")


if prompt: #if user typed their input
    st.session_state.messages.append({"role": "user", "content": st.session_state.get("prompt")})
    invoke_agent(st.session_state.get("prompt"))
    
if audio: #if user recorded audio input
    transcript = transcribe_audio(st.session_state.get("audio_input")) 
    if transcript is None:
        st.error("No speech detected in the audio file. Please try again or type your input directly.")
    else:
        st.session_state.messages.append({"role": "user", "content": transcript})
        invoke_agent(transcript)

with st.container(height=500): 
    for message in st.session_state.messages:
        if message['role'] == "tool":
            with st.chat_message("tool", avatar="⚙️"):
                st.markdown(message['content'])
        else: 
            with st.chat_message(message["role"]):
                st.markdown(message['content'])

def clear_memory(): 
    st.session_state['thread_id'] += 1
    st.session_state.messages = []
    st.info('Memory is cleared.', icon="ℹ️")

if clear_button:
    clear_memory()
    print(f"New thread_id: {st.session_state['thread_id']}")
