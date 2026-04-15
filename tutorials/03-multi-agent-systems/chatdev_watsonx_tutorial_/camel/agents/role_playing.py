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
import copy
from typing import Any, Dict, List, Optional, Sequence, Tuple

from camel.agents import (
    ChatAgent,
    TaskPlannerAgent,
    TaskSpecifyAgent,
)
from camel.agents.chat_agent import ChatAgentResponse
from camel.messages import ChatMessage, UserChatMessage, SystemMessage
from camel.typing import ModelType, RoleType, TaskType, PhaseType
from chatdev.utils import log_arguments, log_visualize


@log_arguments
class RolePlaying:
    r"""Role playing between two agents.

    Args:
        assistant_role_name (str): The name of the role played by the
            assistant.
        user_role_name (str): The name of the role played by the user.
        critic_role_name (str): The name of the role played by the critic.
            (default: :obj:`"critic"`)
        task_prompt (str, optional): A prompt for the task to be performed.
            (default: :obj:`""`)
        with_task_specify (bool, optional): Whether to use a task specify
            agent. (default: :obj:`True`)
        with_task_planner (bool, optional): Whether to use a task planner
            agent. (default: :obj:`False`)
        with_critic_in_the_loop (bool, optional): Whether to include a critic
            in the loop. (default: :obj=`False`)
        model_type (ModelType, optional): The type of backend model to use.
            (default: :obj=`ModelType.WATSONX`)
        task_type (TaskType, optional): The type of task to perform.
            (default: :obj=`TaskType.AI_SOCIETY`)
        assistant_agent_kwargs (Dict, optional): Additional arguments to pass
            to the assistant agent. (default: :obj=`None`)
        user_agent_kwargs (Dict, optional): Additional arguments to pass to
            the user agent. (default: :obj=`None`)
        task_specify_agent_kwargs (Dict, optional): Additional arguments to
            pass to the task specify agent. (default: :obj=`None`)
        task_planner_agent_kwargs (Dict, optional): Additional arguments to
            pass to the task planner agent. (default: :obj=`None`)
        critic_kwargs (Dict, optional): Additional arguments to pass to the
            critic. (default: :obj=`None`)
        sys_msg_generator_kwargs (Dict, optional): Additional arguments to
            pass to the system message generator. (default: :obj=`None`)
        extend_sys_msg_meta_dicts (List[Dict], optional): A list of dicts to
            extend the system message meta dicts with. (default: :obj=`None`)
        extend_task_specify_meta_dict (Dict, optional): A dict to extend the
            task specify meta dict with. (default: :obj=`None`)
    """

    def __init__(
        self,
        assistant_role_name: str,
        user_role_name: str,
        assistant_role_prompt: str,
        user_role_prompt: str,
        critic_role_name: str = "critic",
        critic_role_prompt: str = "Evaluate the conversation and provide feedback.",
        task_prompt: str = "",
        task_type: TaskType = TaskType.AI_SOCIETY,
        with_task_specify: bool = True,
        with_task_planner: bool = False,
        with_critic_in_the_loop: bool = False,
        memory: Optional[Any] = None,
        model_type: ModelType = ModelType.WATSONX,
        background_prompt: str = "",
        **kwargs
    ):
        self.task_prompt = task_prompt
        self.with_task_specify = with_task_specify
        self.with_task_planner = with_task_planner
        self.with_critic_in_the_loop = with_critic_in_the_loop
        self.model_type = model_type
        self.task_type = task_type
        self.memory = memory

        # System message generation
        sys_msg_meta_dicts = [dict(chatdev_prompt=background_prompt, task=task_prompt)] * 3
        self.assistant_sys_msg = SystemMessage(
            role_name=assistant_role_name,
            role_type=RoleType.DEFAULT,
            meta_dict=sys_msg_meta_dicts[0],
            content=assistant_role_prompt.format(**sys_msg_meta_dicts[0])
        )
        self.user_sys_msg = SystemMessage(
            role_name=user_role_name,
            role_type=RoleType.DEFAULT,
            meta_dict=sys_msg_meta_dicts[1],
            content=user_role_prompt.format(**sys_msg_meta_dicts[1])
        )
        self.critic_sys_msg = SystemMessage(
            role_name=critic_role_name,
            role_type=RoleType.CRITIC,
            meta_dict=sys_msg_meta_dicts[2],
            content=critic_role_prompt.format(**sys_msg_meta_dicts[2])
        )

        # Initialize agents with dynamic model type
        self.assistant_agent = ChatAgent(
            system_message=self.assistant_sys_msg,
            memory=kwargs.get("memory"),
            model_type=self.model_type,
            model_config=kwargs.get("model_config"),
            task_prompt=self.task_prompt
        )
        self.user_agent = ChatAgent(
            system_message=self.user_sys_msg,
            memory=kwargs.get("memory"),
            model_type=self.model_type,
            model_config=kwargs.get("model_config"),
            task_prompt=self.task_prompt
        )
        self.critic = ChatAgent(
            system_message=self.critic_sys_msg,
            memory=kwargs.get("memory"),
            model_type=self.model_type,
            model_config=kwargs.get("model_config"),
            task_prompt=self.task_prompt
        ) if self.with_critic_in_the_loop else None

    def init_chat(self, phase_type: PhaseType = None, placeholders=None, phase_prompt=None):
        if placeholders is None:
            placeholders = {}
        self.assistant_agent.reset()
        self.user_agent.reset()
        if self.critic:
            self.critic.reset()

        # Include task_prompt in the initial content
        content = f"{self.task_prompt}\n" + phase_prompt.format(
            **({"assistant_role": self.assistant_agent.role_name} | placeholders)
        )
        retrieval_memory = self.assistant_agent.use_memory(content)
        if retrieval_memory is not None:
            placeholders["examples"] = retrieval_memory
        user_msg = UserChatMessage(
            role_name=self.user_sys_msg.role_name,
            role="user",
            content=content
        )
        pseudo_msg = copy.deepcopy(user_msg)
        pseudo_msg.role = "assistant"
        self.user_agent.update_messages(pseudo_msg)

        log_visualize(self.user_agent.role_name,
                      "**[Start Chat]**\n\n[" + self.assistant_agent.system_message.content + "]\n\n" + content)
        return None, user_msg

    def process_messages(self, messages: Sequence[ChatMessage]) -> ChatMessage:
        r"""Processes a list of chat messages, returning the processed message.
        If multiple messages are provided and `with_critic_in_the_loop`
        is `False`, raises a `ValueError`. If no messages are provided, also
        raises a `ValueError`.

        Args:
            messages:

        Returns:
            A single `ChatMessage` representing the processed message.
        """
        if len(messages) == 0:
            raise ValueError("No messages to process.")
        if len(messages) > 1 and not self.with_critic_in_the_loop:
            raise ValueError("Got more than one message to process. "
                             f"Num of messages: {len(messages)}.")
        elif self.with_critic_in_the_loop and self.critic is not None:
            processed_msg = self.critic.step(messages)
        else:
            processed_msg = messages[0]

        return processed_msg

    def step(self, input_message, assistant_only=False):
        try:
            # Prepend task_prompt to the input message
            input_message.content = f"{self.task_prompt}\n{input_message.content}"

            # Generate response using the assistant agent
            assistant_response = self.assistant_agent.step(input_message)
            if assistant_response.msgs is None or len(assistant_response.msgs) == 0:
                raise RuntimeError("Assistant returned no messages.")
            assistant_msg = assistant_response.msgs[0]
            self.assistant_agent.update_messages(assistant_msg)

            if assistant_only:
                return assistant_response, ChatAgentResponse([], False, {})

            # Generate response using the user agent
            user_msg_rst = assistant_msg.set_user_role_at_backend()
            user_response = self.user_agent.step(user_msg_rst)
            if user_response.msgs is None or len(user_response.msgs) == 0:
                raise RuntimeError("User returned no messages.")
            user_msg = user_response.msgs[0]
            self.user_agent.update_messages(user_msg)

            # Process messages with the critic if enabled
            if self.with_critic_in_the_loop and self.critic:
                critic_response = self.critic.step([assistant_msg, user_msg])
                if critic_response.msgs is None or len(critic_response.msgs) == 0:
                    raise RuntimeError("Critic returned no messages.")
                critic_msg = critic_response.msgs[0]
                self.critic.update_messages(critic_msg)
                return assistant_response, user_response, critic_response

            return assistant_response, user_response
        except Exception as e:
            print(f"Error in step: {e}")
            raise
