from ibm_watsonx_ai import APIClient, Credentials
from ibm_watsonx_ai.deployments import RuntimeContext

from ai_service import deployable_ai_service
from utils import load_config
from examples._interactive_chat import InteractiveChat

stream = False
config = load_config()
dep_config = config["deployment"]

client = APIClient(credentials=Credentials(url=dep_config["watsonx_url"], api_key=dep_config["watsonx_apikey"]))

custom = {
    "space_id": dep_config["space_id"],
    "url": client.credentials.url,
    **dep_config["custom"]
}

context = RuntimeContext(api_client=client)
ai_service_resp_func = deployable_ai_service(context=context, **custom)[stream]

def ai_service_invoke(payload):
    context.request_payload_json = payload
    return ai_service_resp_func(context)

chat = InteractiveChat(ai_service_invoke, stream=stream)
chat.run()
