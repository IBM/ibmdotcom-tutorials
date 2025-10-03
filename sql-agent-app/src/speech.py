from ibm_watson import SpeechToTextV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import TextToSpeechV1
from dotenv import load_dotenv
from datetime import datetime
import logging
import os

try:
    load_dotenv(override=True)
except Exception as e:
    logging.error("dotenv import error")

# Speech-to-text credentials and authenticator
WATSONX_SPEECH_TO_TEXT_APIKEY = os.getenv("WATSONX_SPEECH_TO_TEXT_APIKEY")
WATSONX_SPEECH_TO_TEXT_URL = os.getenv("WATSONX_SPEECH_TO_TEXT_URL")
speech_to_text_authenticator = IAMAuthenticator(WATSONX_SPEECH_TO_TEXT_APIKEY)
speech_to_text = SpeechToTextV1(
    authenticator=speech_to_text_authenticator
)
speech_to_text.set_service_url(WATSONX_SPEECH_TO_TEXT_URL)

# Text-to-speech credentials and authenticator
WATSONX_TEXT_TO_SPEECH_APIKEY = os.getenv("WATSONX_TEXT_TO_SPEECH_APIKEY")
WATSONX_TEXT_TO_SPEECH_URL = os.getenv("WATSONX_TEXT_TO_SPEECH_URL")
text_to_speech_authenticator = IAMAuthenticator(WATSONX_TEXT_TO_SPEECH_APIKEY)
text_to_speech = TextToSpeechV1(
    authenticator=text_to_speech_authenticator
)
text_to_speech.set_service_url(WATSONX_TEXT_TO_SPEECH_URL)

# Speech-to-text function
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

# Text-to-speech function
def convert_text_to_speech(text): 
    filename = 'text_to_speech_result.wav'
    with open(filename, 'wb') as audio_file:
        audio_file.write(
            text_to_speech.synthesize(
                text,
                voice='en-US_MichaelV3Voice',
                accept='audio/wav'        
            ).get_result().content)
    now = datetime.now()
    timestamp_id = now.strftime("%Y%m%d%H%M%S%f")
    return filename, timestamp_id