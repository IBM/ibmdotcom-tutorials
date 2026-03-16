import streamlit as st
from langchain import hub  
from langchain_core.messages import HumanMessage, AIMessage, ToolMessage
from src.watsonx import get_llm
from src.agent import ReActAgent
from src.tools import get_tools
import torch
from streamlit_extras.stylable_container import stylable_container
from src.database import create_sql_database

torch.classes.__path__ = [] 

# Change to True to include speech functionality. Requires IBM Watson Speech services to be configured in the .env file.
include_speech = True

if "messages" not in st.session_state:
    st.session_state.messages = [{"role": "assistant", "content": "Hello! I am your SQL Agent. How can I assist you today?"}]

# Page configuration
st.set_page_config(
    page_title="SQL Agent for Data Analysis", 
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="collapsed"
)
# Custom CSS for chat interface and user input section
st.markdown("""
<style>
    .main-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
        border-radius: 15px;
        margin-bottom: 2rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    .header-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
    
    .bot-icon {
        font-size: 3.5rem;
        margin-bottom: 0.5rem;
        color: #ffffff;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .title {
        color: white !important;
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
        font-family: 'Arial', sans-serif;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .subtitle {
        color: #f0f8ff;
        font-size: 1.2rem;
        margin: 0.5rem 0 0 0;
        font-weight: 300;
    }
    
    .feature-badge {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        padding: 0.4rem 1rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        margin: 0 0.3rem;
        display: inline-block;
        box-shadow: 0 2px 8px rgba(79, 172, 254, 0.3);
    }
    
    .chat-container {
        background: #f8f9fa;
        border-radius: 20px;
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        margin-bottom: 1.5rem;
        border: 1px solid #e9ecef;
    }
    
    .input-section {
        background: #ffffff;
        border-radius: 15px;
        padding: 2rem;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        margin-top: 1.5rem;
        border: 1px solid #e9ecef;
    }
    
    .stChatMessage {
        background: #ffffff;
        border-radius: 15px;
        padding: 1.2rem;
        margin: 0.8rem 0;
        border-left: 4px solid #667eea;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
    }
    
    .stChatMessage:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
    
    .stButton > button {
        background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 0.7rem 2rem;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
    }
    
    .stButton > button:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    }
    
    .stChatInput {
        border: 2px solid #667eea;
        border-radius: 12px;
        transition: all 0.3s ease;
        background: #ffffff;
    }
    
    .stChatInput:focus {
        border-color: #764ba2;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
        outline: none;
    }
    
    .status-message {
        background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
        border-left: 4px solid #2196f3;
        padding: 1rem;
        margin: 0.8rem 0;
        border-radius: 8px;
        font-weight: 500;
        box-shadow: 0 2px 8px rgba(33, 150, 243, 0.1);
    }
    
    .loading-spinner {
        text-align: center;
        padding: 1.5rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 12px;
        margin: 1rem 0;
        border: 1px solid #dee2e6;
    }
    
    /* Hide default Streamlit elements */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    .stDeployButton {display:none;}
    
    /* Responsive design */
    @media (max-width: 768px) {
        .title { font-size: 2rem; }
        .subtitle { font-size: 1rem; }
        .chat-container { padding: 1rem; }
        .input-section { padding: 1rem; }
    }
</style>
""", unsafe_allow_html=True)

# Header Section
st.markdown("""
<div class="main-header">
    <div class="header-content">
        <h1 class="title">Ask SQL Agent</h1>
        <p class="subtitle">Your intelligent database query agent</p>
    </div>
</div>
""", unsafe_allow_html=True)


if include_speech:
    from src.speech import transcribe_audio, convert_text_to_speech
    if "audio" not in st.session_state:
        st.session_state.audio= ''
    if "audio_input_key_counter" not in st.session_state:
        st.session_state.audio_input_key_counter = 0

# Create columns for better layout
col1, col2, col3 = st.columns([1, 4, 1])
           
# Chat message display
with col2:
    with stylable_container(
        key="chat_display",
        css_styles="""
        {
            background: #f8f9fa;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            margin-bottom: 1.5rem;
            border: 1px solid #e9ecef;
        }
        """,
    ):
        st.markdown("### 💬 Conversation")

        chat_window = st.empty()
        # Display the chat window with messages from the session state (from AI agent, tools, and user)
        with chat_window.container(height=500): 
            for message in st.session_state.messages:
                if message['role'] == "tool":
                    with st.chat_message("assistant", avatar="🔧"):
                        st.markdown(message['content'])
                elif message['role'] == "user":
                    with st.chat_message("user", avatar="👤"):
                        st.markdown(message['content'])
                else: 
                    with st.chat_message("assistant", avatar="🤖"):
                        st.markdown(message['content'])
            if include_speech:
                if len(st.session_state.messages) > 0 and st.session_state.messages[-1]['role'] == "assistant" and not st.session_state.messages[-1]['content'].startswith("Tool call:"):
                    if st.session_state.audio != '':
                        audio_file_name, audio_id = convert_text_to_speech(st.session_state.audio)
                        st.audio(audio_file_name, autoplay=True, width=300)
                        st.session_state.audio = ''
        # Empty container for the spinner while the agent is at work
        thinking_container = st.empty()

audio_input_key = f"audio_input_key_{st.session_state.audio_input_key_counter}"

# User input section
with col2:
    with stylable_container(
        key="input_container",
        css_styles="""
        {
            background: #ffffff;
            border-radius: 15px;
            padding: 2rem;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            border: 1px solid #e9ecef;
            margin-bottom: 1.5rem;
        }
        """,
    ):
        st.markdown("### ⌨️ Ask Your Question")
        prompt = st.chat_input("Type your SQL query or question...", key="prompt")
        if include_speech:
            audio = st.audio_input("Record your input", key=audio_input_key)
        
        # Clear the chat memory if the button is clicked
        col_btn1, col_btn2 = st.columns([1, 1])
        with col_btn1:
            clear_button = st.button('🔄 Start New Chat', type="secondary", width=200, help="Clear conversation history")
        with col_btn2:
            st.markdown("")

# Clear the chat memory function
def clear_memory(): 
    """Clear chat memory"""
    st.session_state.messages.clear()
    st.session_state.messages = [{"role": "assistant", "content": "Hello! I am your SQL Agent. How can I assist you today?"}]
    if include_speech:
        st.session_state.processed_audio_id = None
        st.session_state.audio_cleared = True
    st.rerun()

# Clear the chat memory if the button is clicked (MUST be before audio processing)
if clear_button:
    clear_memory()
              
# Invoke the agent
def invoke_agent(user_query: str):
    """Process user query with AI agent and update status in the provided container"""
    try:
        # Show spinner while the agent is at work
        with thinking_container:
            with st.spinner("💬 AI agent is thinking..."):
                result = agent.graph.invoke({"messages": [HumanMessage(content=user_query)]}, {"configurable": {"thread_id": st.session_state['thread_id']}})
 
        # Process only new messages (skip the user's original message)
        new_messages = result["messages"][1:]  # Skip the original user message
        
        for message in new_messages:
            if isinstance(message, AIMessage):
                # Handle tool calls
                if message.tool_calls:
                    for tool_call in message.tool_calls:
                        st.session_state.messages.append({"role": "assistant", "content":f"🔧 Tool call: {tool_call['name']}. Arguments: {tool_call['args']}"})
                
                # Handle AI response content
                if message.content and message.content.strip():
                    # Check for malformed tool calls in content
                    if "sql_db_query{" in message.content or "python_repl{" in message.content:
                        st.session_state.messages.append({"role": "assistant", "content": f"⚠️ Received malformed tool call: {message.content}. Please try rephrasing your question."})
                    else:
                        # This is a proper AI response
                        st.session_state.messages.append({"role": "assistant", "content": message.content.strip()})
            
            elif isinstance(message, ToolMessage) and message.content != "":
                st.session_state.messages.append({"role": "tool", "content": "Tool output: " + '\n' + message.content})
        # Final state debug output
        print("=" * 30)
        print(f"📊 FINAL SESSION STATE:")
        print(f"   Messages count: {len(st.session_state.messages)}")
        if st.session_state.messages:
            print(f"   Last message: {st.session_state.messages[-1]}")
        else:
            print("   Last message: None")
        print("=" * 30)
        
    except Exception as e:
        print("=" * 50)
        print(f"🚨 ERROR in invoke_agent: {e}")
        print("=" * 50)
        import traceback
        traceback.print_exc()


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

# Create a thread ID for the session state if one is not already set
if 'thread_id' not in st.session_state:
    st.session_state['thread_id'] = 1

# Process inputs with visible loading indicators
if prompt:
    user_input = st.session_state.get("prompt")
    st.session_state.messages.append({"role": "user", "content": user_input})
    invoke_agent(user_input)
    # Force rerun to show updated conversation
    st.rerun()

if include_speech and audio: #if user recorded audio input
    transcript = transcribe_audio(audio) 
    if transcript is None:
        st.error("No speech detected in the audio file. Please try again or type your input directly.")
    else:
        st.session_state.messages.append({"role": "user", "content": transcript})
        invoke_agent(transcript)
        st.session_state.audio = st.session_state.messages[-1]['content']
        del st.session_state[audio_input_key]
        st.session_state.audio_input_key_counter += 1
        # Force rerun to show updated conversation
        st.rerun()

# Footer with additional info
with col2:
    st.markdown("""
    <div style="text-align: center; padding: 1.5rem; color: #6c757d; font-size: 0.9rem; border-top: 1px solid #e9ecef; margin-top: 2rem; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 10px;">
        <strong>SQL Agent</strong> | Powered by IBM watsonx.ai 🚀<br>
        Ask about database queries, data analysis, and more!
    </div>
    """, unsafe_allow_html=True)