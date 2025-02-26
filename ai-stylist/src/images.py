import os, base64, torch, regex as re
from ibm_watsonx_ai import Credentials
from ibm_watsonx_ai.foundation_models import ModelInference
from dotenv import load_dotenv
torch.classes.__path__ = []
load_dotenv(os.getcwd()+"/.env", override=True)


def base64_load_images(images):
    loaded_images = []
    for img in images:
        loaded_images.append(base64.b64encode(img.read()).decode('utf-8')) 
    return loaded_images

def augment_api_request_body(user_query, image):
    messages = [
        {
            "role": "user",
            "content": [{
                "type": "text",
                "text": user_query
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/jpeg;base64,{image}",
                }
            }]
        }
    ]
    return messages

def describe_images(images):
    #call the vision model to categorize and describe each clothing item
    closet = []
    model = ModelInference(
        model_id = "ibm/granite-vision-3-2-2b",
        credentials = Credentials(
            url = os.getenv("URL"), 
            api_key = os.getenv("WATSONX_APIKEY")
        ),
        project_id = os.getenv("WATSONX_PROJECT_ID"),
        params = {
            "max_tokens": 400,
            "temperature": 0
        }
    )


    user_query = """Provide a description, category, and occasion for the clothing item or shoes in this image.  

                    Classify the category as shirt, pants, or shoes.
                    Classify the occasion as casual or formal.
                    
                    Ensure the output is valid JSON. Do not create new categories or occasions. Only use the allowed classifications.
                    
                    Your response should be in this schema: 
                    {
                        "description": "<description>",
                        "category": "<category>",
                        "occasion": "<occasion>"
                    }
                    """
    
    for i in range(len(images)):
        image = images[i]
        message = augment_api_request_body(user_query, image)
        response = model.chat(messages=message)
        result = response['choices'][0]['message']['content']
        print(result)
        closet.append(result)

    return closet 


