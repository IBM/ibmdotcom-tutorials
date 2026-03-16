from flask import Flask, render_template, request, jsonify
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline
import getpass, os, base64, json
from ibm_watsonx_ai import Credentials, APIClient
from ibm_watsonx_ai.foundation_models import ModelInference
from ibm_watsonx_ai.foundation_models.moderations import Guardian
import re



WATSONX_APIKEY = getpass.getpass("Please enter your watsonx.ai Runtime API key (hit enter): ")
WATSONX_PROJECT_ID = getpass.getpass("Please enter your project ID (hit enter): ")
#Space ID for testing detectors
WATSONX_SPACE_ID = getpass.getpass("Please enter your space ID (hit enter): ")
URL = "https://us-south.ml.cloud.ibm.com"


app = Flask(__name__)


credentials = Credentials(
    url=URL,
    api_key=WATSONX_APIKEY
)

#For testing detectors
space_id=WATSONX_SPACE_ID
api_client=APIClient(credentials, space_id=WATSONX_SPACE_ID)

detectors = {
  "hap": {},
  "granite_guardian":{"risk_name": "harm", "threshold": 0.6},
  "topic_relevance": {"threshold": 0.5},
  "pii": {},
}

guardian = Guardian(
  api_client=api_client,  # required
  detectors=detectors  # required
)

device = "cpu" 

class WatsonxPipeline:
    def __init__(self, model_id, credentials, project_id, params):
        self.model_inference = ModelInference(
            model_id=model_id,
            credentials=credentials,
            project_id=project_id,
            params=params
        )

    def __call__(self, input_text, **kwargs):
        
        prediction = self.model_inference.generate_text(input_text)
        return prediction



qa_pipe = WatsonxPipeline(
    model_id="ibm/granite-3-8b-instruct",
    credentials=credentials,
    project_id=WATSONX_PROJECT_ID,
    params={
        "temperature": 0.8,
        "max_new_tokens": 512,
    }
)

print("Granite model loaded")


guardian_model_id = "ibm-granite/granite-guardian-3.2-3b-a800m"
guardian_model = AutoModelForCausalLM.from_pretrained(
    guardian_model_id,
    torch_dtype=torch.float16  
)

guardian_model = guardian_model.to(device)
guardian_tokenizer = AutoTokenizer.from_pretrained(guardian_model_id)



def parse_guardian_output(output, input_len):
    full_res = guardian_tokenizer.decode(output.sequences[:, input_len+1:][0], skip_special_tokens=True).strip()
    confidence = full_res.removeprefix('<confidence>').removesuffix('</confidence>').strip()
    label_token = guardian_tokenizer.decode(output.sequences[:, input_len:input_len+1][0], skip_special_tokens=True).strip()
    if label_token.lower() == "yes":
        label = "Yes"
    elif label_token.lower() == "no":
        label = "No"
    else:
        label = "Failed"
    return label, confidence



@app.route('/')
def index():
    return render_template('chat.html', detector_response="") 

@app.route('/ask', methods=['POST'])
def ask():
    user_prompt = request.form['user_prompt']
    conversation_history = request.form.get('conversation_history', '')

    output = qa_pipe(user_prompt)
    if isinstance(output, dict):
        assistant_response = output.get('generated_text', '')
    else:
        assistant_response = output

    assistant_response = assistant_response.strip()

    detector_response = guardian.detect(text=assistant_response, detectors=detectors)

    moderation_chat_turn = f"""
    <start_of_turn>
    User Message: {user_prompt}
    Assistant Message: {assistant_response}
    <end_of_turn>

    Is the assistant message harmful based on the risk definition? Your answer must be either 'Yes' or 'No'.
    """


    input_ids = guardian_tokenizer(moderation_chat_turn, return_tensors="pt").input_ids.to(guardian_model.device)
    guardian_model.eval()
    with torch.no_grad():
        output = guardian_model.generate(
            input_ids,
            do_sample=False,
            max_new_tokens=16,
            return_dict_in_generate=True,
            output_scores=True,
        )
    moderation_text = guardian_tokenizer.decode(output.sequences[0][input_ids.shape[1]:], skip_special_tokens=True).strip()
      

    try:
        if "yes" in moderation_text.lower():
            return jsonify({"status": "harmful", "details": moderation_text, "detector_response": detector_response})
        elif "no" in moderation_text.lower():
            return jsonify({"status": "safe", "response": assistant_response, "detector_response": detector_response})
        else:
            return jsonify({"status": "unclear", "details": moderation_text, "detector_response": detector_response})
    
    except Exception as e:
        return jsonify({
            "status": "error",
            "response": f"An error occurred: {str(e)}"
        })


if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)