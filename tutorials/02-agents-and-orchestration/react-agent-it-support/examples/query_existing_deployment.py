import ibm_watsonx_ai

from utils import load_config
from examples._interactive_chat import InteractiveChat

deployment_id = "PLACEHOLDER FOR YOUR DEPLOYMENT ID"
stream = True
config = load_config("deployment")

client = ibm_watsonx_ai.APIClient(
    credentials=ibm_watsonx_ai.Credentials(url=config["watsonx_url"], api_key=config["watsonx_apikey"]),
    space_id=config["space_id"])

# Executing deployed AI service
if stream:
    ai_service_invoke = lambda payload: client.deployments.run_ai_service_stream(deployment_id, payload)
else:
    ai_service_invoke = lambda payload: client.deployments.run_ai_service(deployment_id, payload)

chat = InteractiveChat(ai_service_invoke, stream=stream)
chat.run()
