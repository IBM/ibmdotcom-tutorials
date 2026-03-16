def deployable_ai_service(context, **custom):
    from langgraph_react_agent.agent import get_graph_closure
    from ibm_watsonx_ai import APIClient, Credentials
    from langchain_core.messages import (
        BaseMessage,
        HumanMessage,
        AIMessage,
        SystemMessage,
    )

    model_id = custom.get("model_id")
    client = APIClient(
        credentials=Credentials(url=custom.get("url"), token=context.generate_token()),
        space_id=custom.get("space_id"),
    )

    graph = get_graph_closure(client, model_id)

    def get_formatted_message(resp: BaseMessage) -> dict | None:
        role = resp.type

        if resp.content:
            if role == "AIMessageChunk":
                return {"role": "assistant", "delta": resp.content}
            elif role == "ai":
                return {"role": "assistant", "content": resp.content}
            elif role == "tool":
                return {
                    "role": role,
                    "id": resp.id,
                    "tool_call_id": resp.tool_call_id,
                    "name": resp.name,
                    "content": resp.content,
                }
        elif role == "ai":  # this implies resp.additional_kwargs
            if additional_kw := resp.additional_kwargs:
                tool_call = additional_kw["tool_calls"][0]
                return {
                    "role": "assistant",
                    "tool_calls": [
                        {
                            "id": tool_call["id"],
                            "type": "function",
                            "function": {
                                "name": tool_call["function"]["name"],
                                "arguments": tool_call["function"]["arguments"],
                            },
                        }
                    ],
                }

    def convert_dict_to_message(_dict: dict) -> BaseMessage:
        """Convert user message in dict to langchain_core.messages.BaseMessage"""

        if _dict["role"] == "assistant":
            return AIMessage(content=_dict["content"])
        elif _dict["role"] == "system":
            return SystemMessage(content=_dict["content"])
        else:
            data = _dict.get("data")
            user_message = _dict["content"]
            # If data is provided, enhance the question string with the data
            if data:
                exog_data = data.get("exog", [])
                endog_data = data.get("endog", [])

                # Append the data information to the question string
                user_message += f" Explanatory variables (independent): {exog_data}. Dependent variable (response): {endog_data}."
            return HumanMessage(content=user_message)

    def generate(context) -> dict:
        """
        The `generate` function handles the REST call to the inference endpoint
        POST /ml/v4/deployments/{id_or_name}/ai_service

        The generate function should return a dict
        The following optional keys are supported currently
        - data

        A JSON body sent to the above endpoint should follow the format:
        {
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant that uses tools to answer questions in detail.",
                },
                {
                    "role": "user",
                    "content": "Hello!",
                    "data"[OPTIONAL]: {
                        "exog": <explanatory variables (independent variables)>,
                        "endog": <dependent variable (response variable)>
                    }
                },
            ]
        }
        Please note that the `system message` MUST be placed first in the list of messages!
        """

        client.set_token(context.get_token())

        payload = context.get_json()
        raw_messages = payload.get("messages", [])
        messages = [convert_dict_to_message(_dict) for _dict in raw_messages]

        if messages and messages[0].type == "system":
            agent = graph(messages[0])
            del messages[0]
        else:
            agent = graph()

        config = {
            "configurable": {"thread_id": custom.get("thread_id")}
        }  # Checkpointer configuration

        prev_checkpoint_n = len(list(agent.checkpointer.list(config)))
        # Invoke agent
        generated_response = agent.invoke({"messages": messages}, config)
        new_mess_n = len(list(agent.checkpointer.list(config))) - prev_checkpoint_n - 1

        choices = []
        execute_response = {
            "headers": {"Content-Type": "application/json"},
            "body": {"choices": choices},
        }

        for resp in generated_response["messages"][-new_mess_n:]:
            if (message := get_formatted_message(resp)) is not None:
                choices.append({"index": 0, "message": message})

        return execute_response

    def generate_stream(context) -> dict:
        """
        The `generate_stream` function handles the REST call to the Server-Sent Events (SSE) inference endpoint
        POST /ml/v4/deployments/{id_or_name}/ai_service_stream

        The generate function should return a dict
        The following optional keys are supported currently
        - data

        A JSON body sent to the above endpoint should follow the format:
        {
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant that uses tools to answer questions in detail.",
                },
                {
                    "role": "user",
                    "content": "Hello!",
                    "data"[OPTIONAL]: {
                        "exog": <explanatory variables (independent variables)>,
                        "endog": <dependent variable (response variable)>
                    }
                },
            ]
        }
        Please note that the `system message` MUST be placed first in the list of messages!
        """
        client.set_token(context.get_token())

        payload = context.get_json()
        raw_messages = payload.get("messages", [])
        messages = [convert_dict_to_message(_dict) for _dict in raw_messages]

        if messages and messages[0].type == "system":
            agent = graph(messages[0])
            del messages[0]
        else:
            agent = graph()

        # Checkpointer configuration
        config = {"configurable": {"thread_id": custom.get("thread_id")}}
        response_stream = agent.stream(
            {"messages": messages}, config, stream_mode=["updates", "messages"]
        )

        for chunk_type, data in response_stream:
            if chunk_type == "messages":
                msg_obj = data[0]
                if msg_obj.type == "tool":
                    continue
            elif chunk_type == "updates":
                if agent := data.get("agent"):
                    msg_obj = agent["messages"][0]
                    if msg_obj.response_metadata.get("finish_reason") == "stop":
                        continue
                elif tool := data.get("tools"):
                    msg_obj = tool["messages"][0]
                else:
                    continue
            else:
                continue

            if (message := get_formatted_message(msg_obj)) is not None:
                chunk_response = {"choices": [{"index": 0, "message": message}]}
                yield chunk_response

    return generate, generate_stream
