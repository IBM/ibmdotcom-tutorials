import os
from ibm_watsonx_ai import APIClient
from ibm_watsonx_ai import Credentials
from ibm_watsonx_ai.foundation_models import ModelInference
from dotenv import load_dotenv
load_dotenv(os.getcwd()+"/.env", override=True)


def generate_outfit(image_descriptions, occasion, location, time_of_day, season):
    credentials = Credentials(
        url = os.getenv("URL"), 
        api_key = os.getenv("WATSONX_APIKEY")
    )

    client = APIClient(credentials)

    model_id = "ibm/granite-3-2-8b-instruct"
    project_id = os.getenv("WATSONX_PROJECT_ID")

    reasoning_model = ModelInference(
        model_id=model_id,
        api_client=client,
        project_id=project_id
    )

    prompt = f"""Use the description, category, and occasion of the clothes in my closet to put together an outfit for a {occasion} {time_of_day} at the {location}.
                The event takes place in the {season} season. Make sure to return only one shirt, bottoms, and shoes.
                Use the description, category, and occasion provided. Do not classify the items yourself. 
                Include the file name of each image in your output along with the file extension. Here are the items in my closet: {image_descriptions}"""

    messages = [
        {
            "role": "control",
            "content": "thinking"
        },
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": f"{prompt}"
                }
            ]
        }
    ]

    output = reasoning_model.chat(messages=messages)['choices'][0]['message']['content']
    return output