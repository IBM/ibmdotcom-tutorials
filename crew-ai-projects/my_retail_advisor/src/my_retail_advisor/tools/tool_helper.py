import requests
import base64
import os
from my_retail_advisor.auth import Auth

class Helper:    
    @staticmethod
    def image2text(image_path_or_url: str) -> str:
        """This tool is useful when we want to generate textual descriptions from images."""
        
        with open(image_path_or_url, 'rb') as image_file:
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
        print(f"Processing image from file: {image_path_or_url}")

        project_id = os.getenv("WATSONX_PROJECT_ID")

        try:
            access_token = Auth.get_ibm_token()
        except Exception as e:
            print("Error:", e)
        
        url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/chat?version=2023-05-29"

        prompt = (
            "Describe this image in as much detail as possible."
            "Pay close attention to the image and use the following details in your answer: Product names, product placement, shelf issues."
        )
        
        body = {
        "messages": [{"role":"user","content":[{"type":"image_url","image_url":{"url": f"data:image/jpeg;base64,{encoded_image}"}},
                                               {"type":"text","text":prompt}]}],
        "project_id": project_id,
        "model_id": "meta-llama/llama-3-2-90b-vision-instruct",
        "decoding_method": "greedy",
        "max_tokens": 2000
        }
        
        headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + access_token
        }

        response = requests.post(
            url,
            headers=headers,
            json=body
        )
        
        if response.status_code != 200:
            raise Exception("Non-200 response: " + str(response.text))
        data = response.json()
        output = data['choices'][0]['message']['content']
        print(output)
        return "".join(output)