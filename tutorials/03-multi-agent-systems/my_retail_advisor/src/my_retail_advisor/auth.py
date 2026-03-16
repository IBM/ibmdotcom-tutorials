import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Auth:
    """
    A helper class to manage IBM Cloud IAM token authentication.
    """
    _access_token = None
    
    @staticmethod
    def get_ibm_token():
        """
        Fetches a new IBM Cloud IAM token using the API key from the .env file.
        
        Returns:
            str: The access token if the request is successful.
        
        Raises:
            Exception: If the token request fails or the API key is missing.
        """
        # Retrieve the API key from the environment
        api_key = os.getenv("WATSONX_APIKEY")

        # IAM endpoint and request data
        iam_endpoint = "https://iam.cloud.ibm.com/identity/token"
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        }
        data = {
            "apikey": api_key,
            "grant_type": "urn:ibm:params:oauth:grant-type:apikey"
        }

        # Make the POST request to fetch the token
        response = requests.post(iam_endpoint, headers=headers, data=data)

        if response.status_code == 200:
            token_response = response.json()
            Auth._access_token = token_response['access_token']
            return Auth._access_token
        else:
            raise Exception(f"Failed to fetch IBM token: {response.status_code} - {response.text}")
