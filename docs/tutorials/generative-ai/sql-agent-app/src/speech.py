from ibm_watson import SpeechToTextV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from dotenv import load_dotenv
import logging
import os

try:
    load_dotenv(override=True)
except Exception as e:
    logging.error("dotenv import error")

WATSONX_SPEECH_APIKEY = os.getenv("WATSONX_SPEECH_APIKEY")
WATSONX_SPEECH_URL = os.getenv("WATSONX_SPEECH_URL")

authenticator = IAMAuthenticator(WATSONX_SPEECH_APIKEY)

speech_to_text = SpeechToTextV1(
    authenticator=authenticator
)

speech_to_text.set_service_url(WATSONX_SPEECH_URL)

def transcribe_audio(audio_file): 
    result = speech_to_text.recognize(
        audio=audio_file,
        content_type='audio/wav',
        model='en-US_BroadbandModel',
    ).get_result()

    print(result)
    if result['results'] == []:
        return None
    else:
        return result['results'][0]['alternatives'][0]['transcript']
