# LLM Integration

## Model classes and Config 📂camel

**model_backend.py** –

The file model_backend.py makes it easy to work with different AI models
(like OpenAI, Watsonx, or STUB (a fake one for testing)) using the same setup.

It does two main things:

- Creates an arbitrary base class (ABC) called `ModelBackend`: This class serves as a blueprint for what integrating model backends should follow (OpenAI, Watsonx, or dummy models (STUB)). Its subclasses must implement the abstract run() method to run a consistent interface for ineracting with different models. *Also*, the run() method is expected ro return a dictionary in OpenAI's response format **regardless** of the underlying model backend.

- Creates another ABC called `ModelFactory`: This is a **factory class** (a class that decides what class to use and then creates an instance of it for you) that picks the right model and initializes the relevant backend. 


A factory class decides which class to use and then creates an instance of it for you.

- creates a class called WatsonxModel that inherits from the `ModelBackend` abc class. 

**CHANGE**

## Initialization __init__()

    ```python
 def **init**(self, model_type: ModelType, model_config_dict: Dict) -> None:
        super().**init**()
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
                GenParams.MAX_NEW_TOKENS: model_config_dict.get("max_new_tokens"
                500),
                GenParams.MIN_NEW_TOKENS: model_config_dict.get("min_new_tokens"
                1),
                GenParams.REPETITION_PENALTY: model_config_dict.get("repetition_penalty", 1.1),
                GenParams.TEMPERATURE: model_config_dict.get("temperature", 0.3),
                GenParams.TOP_K: model_config_dict.get("top_k", 50),
                GenParams.TOP_P: model_config_dict.get("top_p", 0),
            },
        )
    ```


Here's what it does, step by step:
Takes in two things:

model_type: Tells which Watsonx model to use.

model_config_dict: A list of settings, like how long responses should be or how random they should sound.

Checks for important info:

It looks for 3 environment variables: your Watsonx Project ID, API key, and URL.

If any of those are missing, it gives an error and stops.

Sets up a client (connection) to Watsonx:

Uses a tool called WatsonxLLM to talk to Watsonx.

Passes in the model ID, your credentials, and settings like:

How many tokens to generate

How random the responses should be

How much repetition to allow


typing.py – this file defines the ModelType class which represents all the different types of models that the system can use. The file defines several enumerations (Enum classes) that categorize the various constants in the project.
utils.py – this file contains a collection of utility functions and decorators to support various operations in the project.
    Details:

1. Token and counting limits for openai models
2. API Key management

web_spider.py –

Agentic Configuration

📂camel
chat_agent.py – the file defines the ChatAgent class which is responsible for managing conversations with CAMEL Chat agents. This includes logic for interacting with a LLM, conversation history, and handling memory and token limits.
critic_agent.py – this filedefines the CriticAgent class, (extends the ChatAgent class); The critic agent is designed to assist in evaluating and selecting an option from a set of proposals. It provides functionality for presenting options, parsing responses, and handling retries if the critic fails to make a valid choice.
role_playing.py – this file defines the RolePlaying class, which facilitates role-playing interactions between two agents and an optional “critic in the loop.” This file, role_playing.py, defines the `RolePlaying` class, which facilitates role-playing interactions between two agents (an assistant and a user) and optionally includes a critic in the loop. It is designed to simulate structured conversations where agents take on specific roles and interact based on predefined prompts and tasks.

Misc Configuration
configs.py – defines the ChatGPTConfig class
generators.py – defines several classes that generate system messages This file, generators.py, defines several classes that generate system messages, role names, and task prompts for various scenarios in the CAMEL framework. These generators are used to create structured inputs for agents, enabling them to perform tasks, simulate role-playing, or interact in predefined contexts.
human.py – defines the Human class, representing a human user interacting with the system. This file, human.py, defines the `Human` class, which represents a human user interacting with the system. It provides functionality for displaying options to the user, collecting their input, and processing their choices. This class is designed to simulate a human's role in a conversation or decision-making process within the CAMEL framework.
