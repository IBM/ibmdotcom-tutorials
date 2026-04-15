from ibm_watsonx_ai import APIClient, Credentials
import os
from dotenv import load_dotenv
import logging
from langchain_ibm import ChatWatsonx

# Load environment variables
try:
    load_dotenv(override=True)
except Exception as e:
    logging.error("dotenv import error")

# Get credentials and watsonx.ai API URL
WATSONX_APIKEY = os.getenv("WATSONX_APIKEY")
WATSONX_PROJECT_ID = os.getenv("WATSONX_PROJECT_ID")
URL = os.getenv("URL")

# Get LLM and watsonx.ai API client
def get_llm(model_id):
    credentials = Credentials(url=URL, api_key=WATSONX_APIKEY)
    client = APIClient(credentials=credentials, project_id=WATSONX_PROJECT_ID)
    llm = ChatWatsonx(model_id=model_id, watsonx_client=client)
    return llm, client
    