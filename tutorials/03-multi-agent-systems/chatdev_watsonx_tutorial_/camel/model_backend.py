# =========== Copyright 2023 @ CAMEL-AI.org. All Rights Reserved. ===========
# Licensed under the Apache License, Version 2.0 (the “License”);
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an “AS IS” BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# =========== Copyright 2023 @ CAMEL-AI.org. All Rights Reserved. ===========
import os
from abc import ABC, abstractmethod
from typing import Any, Dict

import openai
import tiktoken
from langchain_ibm import WatsonxLLM
from ibm_watsonx_ai.metanames import GenTextParamsMetaNames as GenParams

from camel.typing import ModelType
from chatdev.statistics import prompt_cost
from chatdev.utils import log_visualize

try:
    from openai.types.chat import ChatCompletion

    openai_new_api = True  # new openai api version
except ImportError:
    openai_new_api = False  # old openai api version


OPENAI_API_KEY = os.environ['OPENAI_API_KEY']
if 'BASE_URL' in os.environ:
    BASE_URL = os.environ['BASE_URL']
else:
    BASE_URL = None


class ModelBackend(ABC):
    r"""Base class for different model backends.
    May be OpenAI API, a local LLM, a stub for unit tests, etc."""

    @abstractmethod
    def run(self, *args, **kwargs):
        r"""Runs the query to the backend model.

        Raises:
            RuntimeError: if the return value from OpenAI API
            is not a dict that is expected.

        Returns:
            Dict[str, Any]: All backends must return a dict in OpenAI format.
        """
        pass


class OpenAIModel(ModelBackend):
    r"""OpenAI API in a unified ModelBackend interface."""

    def __init__(self, model_type: ModelType, model_config_dict: Dict) -> None:
        super().__init__()
        self.model_type = model_type
        self.model_config_dict = model_config_dict

    def run(self, *args, **kwargs):
        # Safeguard: Skip tiktoken for Watsonx models
        if self.model_type == ModelType.WATSONX:
            raise RuntimeError("OpenAIModel cannot handle Watsonx models. Use WatsonxModel instead.")

        string = "\n".join([message["content"] for message in kwargs["messages"]])
        encoding = tiktoken.encoding_for_model(self.model_type.value)
        num_prompt_tokens = len(encoding.encode(string))
        gap_between_send_receive = 15 * len(kwargs["messages"])
        num_prompt_tokens += gap_between_send_receive

        if openai_new_api:
            # Experimental, add base_url
            if BASE_URL:
                client = openai.OpenAI(
                    api_key=OPENAI_API_KEY,
                    base_url=BASE_URL,
                )
            else:
                client = openai.OpenAI(
                    api_key=OPENAI_API_KEY
                ) # Use the ChatCompletion class directly

            num_max_token_map = {
                "gpt-3.5-turbo": 4096,
                "gpt-3.5-turbo-16k": 16384,
                "gpt-3.5-turbo-0613": 4096,
                "gpt-3.5-turbo-16k-0613": 16384,
                "gpt-4": 8192,
                "gpt-4-0613": 8192,
                "gpt-4-32k": 32768,
                "gpt-4-turbo": 100000,
                "gpt-4o": 4096, #100000
                "gpt-4o-mini": 16384, #100000
            }
            num_max_token = num_max_token_map[self.model_type.value]
            num_max_completion_tokens = num_max_token - num_prompt_tokens
            self.model_config_dict['max_tokens'] = num_max_completion_tokens

            response = client.chat.completions.create(*args, **kwargs, model=self.model_type.value,
                                                      **self.model_config_dict)

            cost = prompt_cost(
                self.model_type.value,
                num_prompt_tokens=response.usage.prompt_tokens,
                num_completion_tokens=response.usage.completion_tokens
            )

            log_visualize(
                "**[OpenAI_Usage_Info Receive]**\nprompt_tokens: {}\ncompletion_tokens: {}\ntotal_tokens: {}\ncost: ${:.6f}\n".format(
                    response.usage.prompt_tokens, response.usage.completion_tokens,
                    response.usage.total_tokens, cost))
            if not isinstance(response, ChatCompletion):
                raise RuntimeError("Unexpected return from OpenAI API")
            return response
        else:
            num_max_token_map = {
                "gpt-3.5-turbo": 4096,
                "gpt-3.5-turbo-16k": 16384,
                "gpt-3.5-turbo-0613": 4096,
                "gpt-3.5-turbo-16k-0613": 16384,
                "gpt-4": 8192,
                "gpt-4-0613": 8192,
                "gpt-4-32k": 32768,
                "gpt-4-turbo": 100000,
                "gpt-4o": 4096, #100000
                "gpt-4o-mini": 16384, #100000
            }
            num_max_token = num_max_token_map[self.model_type.value]
            num_max_completion_tokens = num_max_token - num_prompt_tokens
            self.model_config_dict['max_tokens'] = num_max_completion_tokens

            response = openai.ChatCompletion.create(
                *args, **kwargs, model=self.model_type.value, **self.model_config_dict
            )

            cost = prompt_cost(
                self.model_type.value,
                num_prompt_tokens=response["usage"]["prompt_tokens"],
                num_completion_tokens=response["usage"]["completion_tokens"]
            )

            log_visualize(
                "**[OpenAI_Usage_Info Receive]**\nprompt_tokens: {}\ncompletion_tokens: {}\ntotal_tokens: {}\ncost: ${:.6f}\n".format(
                    response["usage"]["prompt_tokens"], response["usage"]["completion_tokens"],
                    response["usage"]["total_tokens"], cost))
            if not isinstance(response, Dict):
                raise RuntimeError("Unexpected return from OpenAI API")
            return response


class WatsonxModel(ModelBackend):
    """
    Watsonx API in a unified ModelBackend interface using WatsonxLLM from langchain_ibm.
    """

    def __init__(self, model_type: ModelType, model_config_dict: Dict) -> None:
        super().__init__()
        self.model_type = model_type
        self.model_config_dict = model_config_dict
        self.project_id = os.getenv("WATSONX_PROJECT_ID")
        self.base_url = os.getenv("WATSONX_URL")
        self.api_key = os.getenv("WATSONX_APIKEY")

        if not self.project_id or not self.base_url or not self.api_key:
            raise RuntimeError("Watsonx environment variables are not properly set.")

        # Initialize the WatsonxLLM client
        self.client = WatsonxLLM(
            model_id=self.model_type.value,
            url=self.base_url,
            apikey=self.api_key,
            project_id=self.project_id,
            params={
                GenParams.MAX_NEW_TOKENS: model_config_dict.get("max_new_tokens", 500),
                GenParams.MIN_NEW_TOKENS: model_config_dict.get("min_new_tokens", 1),
                GenParams.REPETITION_PENALTY: model_config_dict.get("repetition_penalty", 1.1),
                GenParams.TEMPERATURE: model_config_dict.get("temperature", 0.3),
                GenParams.TOP_K: model_config_dict.get("top_k", 100),
                GenParams.TOP_P: model_config_dict.get("top_p", 0),
            },
        )

    def run(self, *args, **kwargs) -> Dict[str, Any]:
        """
        Executes a query to the Watsonx model.

        Args:
            *args: Additional arguments.
            **kwargs: Keyword arguments, including 'messages' for the prompt.

        Returns:
            Dict[str, Any]: The response from the Watsonx API in OpenAI format.

        Raises:
            RuntimeError: If the API request fails.
        """
        # Construct the prompt
        prompt = f"{self.model_config_dict.get('task_prompt', '')}\n" + "\n".join(
            [message["content"] for message in kwargs["messages"]]
        )

        # Debugging logs
        print(f"Watsonx API Request Prompt: {prompt}")

        # Make the API request
        try:
            response = self.client.invoke(prompt)  # Use `invoke` instead of `__call__`
        except Exception as e:
            raise RuntimeError(f"Watsonx API error: {str(e)}")

        # Parse the response
        return {
            "id": "watsonx_response",
            "choices": [
                {
                    "finish_reason": "stop",
                    "message": {"content": response, "role": "assistant"},
                }
            ],
        }


class StubModel(ModelBackend):
    """A dummy model used for unit tests."""

    def __init__(self, *args, **kwargs) -> None:
        super().__init__()

    def run(self, *args, **kwargs) -> Dict[str, Any]:
        ARBITRARY_STRING = "Lorem Ipsum"

        return dict(
            id="stub_model_id",
            usage=dict(),
            choices=[
                dict(finish_reason="stop",
                     message=dict(content=ARBITRARY_STRING, role="assistant"))
            ],
        )


class ModelFactory:
    """
    Factory of backend models.

    Raises:
        ValueError: in case the provided model type is unknown.
    """

    @staticmethod
    def create(model_type: ModelType, model_config_dict: Dict) -> ModelBackend:
        # Set Watsonx as the default model type
        default_model_type = ModelType.GPT_3_5_TURBO

        if model_type is None:
            model_type = default_model_type

        if model_type in {
            ModelType.GPT_3_5_TURBO,
            ModelType.GPT_3_5_TURBO_NEW,
            ModelType.GPT_4,
            ModelType.GPT_4_32k,
            ModelType.GPT_4_TURBO,
            ModelType.GPT_4_TURBO_V,
            ModelType.GPT_4O,
            ModelType.GPT_4O_MINI,
        }:
            model_class = OpenAIModel
        elif model_type == ModelType.STUB:
            model_class = StubModel
        elif model_type == ModelType.WATSONX:  # Add Watsonx support
            model_class = WatsonxModel
        else:
            raise ValueError("Unknown model type")

        return model_class(model_type, model_config_dict)
