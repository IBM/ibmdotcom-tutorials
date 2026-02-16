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
from dataclasses import dataclass
from typing import Any, Dict, List, Optional

from tenacity import retry
from tenacity.stop import stop_after_attempt
from tenacity.wait import wait_exponential

from camel.agents import BaseAgent
from camel.configs import ChatGPTConfig
from camel.messages import ChatMessage, MessageType, SystemMessage
from camel.model_backend import ModelBackend, ModelFactory
from camel.typing import ModelType, RoleType
from camel.utils import (
    get_model_token_limit,
    num_tokens_from_messages,
    openai_api_key_required,
)
from chatdev.utils import log_visualize
try:
    from openai.types.chat import ChatCompletion

    openai_new_api = True  # new openai api version
except ImportError:
    openai_new_api = False  # old openai api version


@dataclass(frozen=True)
class ChatAgentResponse:
    r"""Response of a ChatAgent.

    Attributes:
        msgs (List[ChatMessage]): A list of zero, one or several messages.
            If the list is empty, there is some error in message generation.
            If the list has one message, this is normal mode.
            If the list has several messages, this is the critic mode.
        terminated (bool): A boolean indicating whether the agent decided
            to terminate the chat session.
        info (Dict[str, Any]): Extra information about the chat message.
    """
    msgs: List[ChatMessage]
    terminated: bool
    info: Dict[str, Any]

    @property
    def msg(self):
        if self.terminated:
            raise RuntimeError("error in ChatAgentResponse, info:{}".format(str(self.info)))
        if len(self.msgs) > 1:
            raise RuntimeError("Property msg is only available for a single message in msgs")
        elif len(self.msgs) == 0:
            if len(self.info) > 0:
                raise RuntimeError("Empty msgs in ChatAgentResponse, info:{}".format(str(self.info)))
            else:
                # raise RuntimeError("Known issue that msgs is empty and there is no error info, to be fix")
                return None
        return self.msgs[0]


class ChatAgent(BaseAgent):
    r"""Class for managing conversations of CAMEL Chat Agents.

    Args:
        system_message (SystemMessage): The system message for the chat agent.
        with_memory(bool): The memory setting of the chat agent.
        model_type (ModelType, optional): The LLM model to use for generating
            responses. (default :obj:`ModelType.WATSONX`)
        model_config (Any, optional): Configuration options for the LLM model.
            (default: :obj:`None`)
        message_window_size (int, optional): The maximum number of previous
            messages to include in the context window. If `None`, no windowing
            is performed. (default: :obj:`None`)
        task_prompt (str, optional): The task prompt for the chat agent.
            (default: :obj:`None`)
    """

    def __init__(
            self,
            system_message: SystemMessage,
            memory=None,
            model_type: Optional[ModelType] = None,
            model_config: Optional[Any] = None,
            message_window_size: Optional[int] = None,
            task_prompt: Optional[str] = None  
    ) -> None:
        self.system_message: SystemMessage = system_message
        self.role_name: str = system_message.role_name
        self.role_type: RoleType = system_message.role_type
        self.model: ModelType = model_type or ModelType.WATSONX
        self.model_config: ChatGPTConfig = model_config or ChatGPTConfig()
        self.model_token_limit: int = get_model_token_limit(self.model)
        self.message_window_size: Optional[int] = message_window_size
        self.model_backend: ModelBackend = ModelFactory.create(self.model, self.model_config.__dict__)
        self.terminated: bool = False
        self.info: bool = False
        self.memory = memory
        self.task_prompt = task_prompt
        self.init_messages()

        if memory is not None and self.role_name in ["Code Reviewer", "Programmer", "Software Test Engineer"]:
            self.memory = memory.memory_data.get("All")
        else:
            self.memory = None

    def reset(self) -> List[MessageType]:
        r"""Resets the :obj:`ChatAgent` to its initial state and returns the
        stored messages.

        Returns:
            List[MessageType]: The stored messages.
        """
        self.terminated = False
        self.init_messages()
        return self.stored_messages

    def get_info(
            self,
            id: Optional[str],
            usage: Optional[Dict[str, int]],
            termination_reasons: List[str],
            num_tokens: int,
    ) -> Dict[str, Any]:
        r"""Returns a dictionary containing information about the chat session.

        Args:
            id (str, optional): The ID of the chat session.
            usage (Dict[str, int], optional): Information about the usage of
                the LLM model.
            termination_reasons (List[str]): The reasons for the termination of
                the chat session.
            num_tokens (int): The number of tokens used in the chat session.

        Returns:
            Dict[str, Any]: The chat session information.
        """
        return {
            "id": id,
            "usage": usage,
            "termination_reasons": termination_reasons,
            "num_tokens": num_tokens,
        }

    def init_messages(self) -> None:
        r"""Initializes the stored messages list with the initial system
        message.
        """
        self.stored_messages: List[MessageType] = [self.system_message]

    def update_messages(self, message: ChatMessage) -> List[MessageType]:
        r"""Updates the stored messages list with a new message.

        Args:
            message (ChatMessage): The new message to add to the stored
                messages.

        Returns:
            List[ChatMessage]: The updated stored messages.
        """
        self.stored_messages.append(message)
        return self.stored_messages

    def use_memory(self, input_message) -> List[MessageType]:
        if self.memory is None:
            return None
        else:
            if self.role_name == "Programmer":
                result = self.memory.memory_retrieval(input_message, "code")
                if result is not None:
                    target_memory, distances, mids, task_list, task_dir_list = result
                    if target_memory is not None and len(target_memory) != 0:
                        target_memory = "".join(target_memory)
                        log_visualize(self.role_name,
                                      "thinking back and found some related code: \n--------------------------\n"
                                      + target_memory)
                else:
                    target_memory = None
                    log_visualize(self.role_name,
                                  "thinking back but find nothing useful")

            else:
                result = self.memory.memory_retrieval(input_message, "text")
                if result is not None:
                    target_memory, distances, mids, task_list, task_dir_list = result
                    if target_memory is not None and len(target_memory) != 0:
                        target_memory = ";".join(target_memory)
                        log_visualize(self.role_name,
                                      "thinking back and found some related text: \n--------------------------\n"
                                      + target_memory)
                else:
                    target_memory = None
                    log_visualize(self.role_name,
                                  "thinking back but find nothing useful")

        return target_memory

    @retry(wait=wait_exponential(min=5, max=60), stop=stop_after_attempt(5))
    @openai_api_key_required
    def step(self, input_message: ChatMessage):
        r"""Performs a single step in the chat session by generating a response
        to the input message.

        Args:
            input_message (ChatMessage): The input message to the agent.

        Returns:
            ChatAgentResponse: A struct
                containing the output messages, a boolean indicating whether
                the chat session has terminated, and information about the chat
                session.
        """
        # Prepare the input messages
        messages = [input_message.to_dict()]

        # Validate the model type
        if not isinstance(self.model, ModelType):
            raise TypeError(f"Expected model to be of type ModelType, got {type(self.model)}")

        # Ensure num_tokens_from_messages receives the correct input
        try:
            num_tokens = num_tokens_from_messages(messages, self.model)
        except Exception as e:
            print(f"Error calculating token count: {e}")
            raise RuntimeError("Invalid input format for num_tokens_from_messages") from e

        if num_tokens < self.model_token_limit:
            # Call the appropriate model backend
            response = self.model_backend.run(messages=messages)

            # Parse the response
            if not isinstance(response, dict) or "choices" not in response:
                raise RuntimeError(f"Unexpected response structure: {response}")
            msgs = [
                ChatMessage(
                    role_name=self.role_name,
                    role_type=self.role_type,
                    meta_dict=dict(),
                    **choice["message"]
                )
                for choice in response["choices"]
            ]
            info = self.get_info(
                response["id"],
                response.get("usage", {}),
                [str(choice.get("finish_reason", "unknown")) for choice in response["choices"]],
                num_tokens,
            )

            return ChatAgentResponse(msgs=msgs, terminated=False, info=info)
        else:
            # Handle the case where the input exceeds the model's token limit
            raise RuntimeError("Input exceeds model token limit")

    def __repr__(self) -> str:
        r"""Returns a string representation of the :obj:`ChatAgent`.

        Returns:
            str: The string representation of the :obj:`ChatAgent`.
        """
        return f"ChatAgent({self.role_name}, {self.role_type}, {self.model})"
