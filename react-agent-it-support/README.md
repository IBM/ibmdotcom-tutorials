# A Base LangGraph LLM app template with function calling capabilities  

Table of contents:  
* [Introduction](#introduction)  
* [Directory structure and file descriptions](#directory-structure-and-file-descriptions)  
* [Prerequisites](#prerequisites)  
* [Cloning and setting up the template](#cloning-and-setting-up-the-template)  
* [Modifying and configuring the template](#modifying-and-configuring-the-template)  
* [Running unit tests for the template](#running-unit-tests-for-the-template)  
* [Running the application locally](#running-the-application-locally)  
* [Deploying on Cloud](#deploying-on-ibm-cloud)  
* [Inferencing the deployment](#inferencing-the-deployment)  


## Introduction  

This repository provides a basic template for LLM apps built using LangGraph framework. It also makes it easy to deploy them as an AI service as part of IBM watsonx.ai for IBM Cloud[^1].  
An AI service is a deployable unit of code that captures the logic of your generative AI use case. For and in-depth description of the topic please refer to the [IBM watsonx.ai documentation](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/ai-services-templates.html?context=wx&audience=wdp).  

[^1]: _IBM watsonx.ai for IBM Cloud_ is a full and proper name of the component we're using in this template and only a part of the whole suite of products offered in the SaaS model within IBM Cloud environment. Throughout this README, for the sake of simplicity, we'll be calling it just an **IBM Cloud**.  

The template builds a simple application with external tool for addressing Web Search Agent use case.  

## Directory structure and file descriptions  

The high level structure of the repository is as follows:  

 react-agent-it-support  
 ┣ src  
 ┃ ┣ langgraph_react_agent  
 ┣ schema  
 ┣ ai_service.py  
 ┣ config.toml  
 ┣ pyproject.toml

- `langgraph-react-agent` folder: Contains auxiliary files used by the deployed function. They provide various framework specific definitions and extensions. This folder is packaged and sent to IBM Cloud during deployment as a [package extension](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/ml-create-custom-software-spec.html?context=wx&audience=wdp#custom-wml).  
- `schema` folder: Contains request and response schemas for the `/ai_service` endpoint queries.  
- `ai_service.py` file: Contains the function to be deployed as an AI service defining the application's logic  
- `config.toml.example` file: A configuration file with placeholders that stores the deployment metadata. After downloading the template repository, copy the contents of the `config.toml.example` file to the `config.toml` file and fill in the required fields. `config.toml` file can also be used to tweak the model for your use case. For this tutorial, the watsonx_apikey, watsonx_url, space_id, model_id and thread_id are needed. 

## Prerequisites  

- [Poetry](https://python-poetry.org/) package manager,  
- [Pipx](https://github.com/pypa/pipx) due to Poetry's recommended [installation procedure](https://python-poetry.org/docs/#installation)  


## Cloning and setting up the template locally 

To easily get started with deploying agents on watsonx.ai, clone this [GitHub repository](https://github.com/IBM/ibmdotcom-tutorials) and access the IT support ReAct agent project. You can run the following command in your terminal to do so.

```sh
git clone git@github.com:IBM/ibmdotcom-tutorials.git
cd react-agent-langgraph-it-support/base/langgraph-react-agent/
```  

Next, install poetry if you do not already have it installed.

```sh
pipx install --python 3.11 poetry
```

Then, activate your virtual environment.

```sh
source $(poetry -q env use 3.11 && poetry env info --path)/bin/activate
```

Running the following command will install the repository dependencies in your separate virtual environment.

```sh
poetry install
```

Adding a working directory to PYTHONPATH is necessary for the next steps. In your terminal execute:  
```sh
export PYTHONPATH=$(pwd):${PYTHONPATH}
```

## Modifying and configuring the template  

[config.toml](config.toml) file should be filled in before either deploying the template on IBM Cloud or executing it locally.  
Possible config parameters are given in the provided file and explained using comments (when necessary).  


The template can also be extended to provide additional key-value data to the application. Create a special asset from within your deployment space called _Parameter Sets_. Use the _watsonx.ai_ library to instantiate it and later reference it from the code.  
For detailed description and API please refer to the [IBM watsonx.ai Parameter Set's docs](https://ibm.github.io/watsonx-ai-python-sdk/core_api.html#parameter-sets)  


Sensitive data should not be passed unencrypted, e.g. in the configuration file. The recommended way to handle them is to make use of the [IBM Cloud® Secrets Manager](https://cloud.ibm.com/apidocs/secrets-manager/secrets-manager-v2). The approach to integrating the Secrets Manager's API with the app is for the user to decide on.  


The [agent.py](src/langgraph/agent.py) file builds app the graph consisting of nodes and edges. The former define the logic for agents while the latter control the logic flow in the whole graph.  
For detailed info on how to modify the graph object please refer to [LangGraph's official docs](https://langchain-ai.github.io/langgraph/tutorials/multi_agent/multi-agent-collaboration/#create-graph)  


The [ai_service.py](ai_service.py) file encompasses the core logic of the app alongside the way of authenticating the user to the IBM Cloud.  
For a detailed breakdown of the ai-service's implementation please refer the [IBM Cloud docs](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/ai-services-create.html?context=wx)  


[tools.py](src/langgraph_react_agent_base/tools.py) file stores the definition for tools enhancing the chat model's capabilities.  
In order to add new tool create a new function, wrap it with the `@tool` decorator and add to the `TOOLS` list in the `extensions` module's [__init__.py](src/langgraph_react_agent_base/__init__.py)

For more sophisticated use cases (like async tools), please refer to the [langchain docs](https://python.langchain.com/docs/how_to/custom_tools/#creating-tools-from-runnables).  


## Running the application locally  

It is possible to run (or even debug) the ai-service locally, however it still requires creating the connection to the IBM Cloud.  

### Step 1: Fill in the `config` file  

Enter the necessary credentials in the `config.toml` file.  

### Step 2: Run the script for local AI service execution  

```sh
python examples/execute_ai_service_locally.py
```  

### Step 3: Ask the model  

Choose from some pre-defined questions or ask the model your own.


## Deploying on IBM Cloud  

Follow these steps to deploy the model on IBM Cloud.  

### Step 1: Fill in the `config` file  

Enter the necessary credentials in the `config.toml` file.  

### Step 2: Run the deployment script  

```sh
python scripts/deploy.py
```  

Successfully completed script will print on stdout the `deployment_id` which is necessary to locally test the deployment. For further info please refer [to the next section](#querying-the-deployment)  

## Querying the deployment  

Follow these steps to inference your deployment. The [query_existing_deployment.py](examples/query_existing_deployment.py) file shows how to test the existing deployment using `watsonx.ai` library.  

### Step 1: Initialize the deployment ID  

Initialize the `deployment_id` variable in the [query_existing_deployment.py](examples/query_existing_deployment.py) file.  
The _deployment_id_ of your deployment can be obtained from [the previous section](#deploying-on-ibm-cloud) by running [scripts/deploy.sh](scripts/deploy.py)  

### Step 2: Run the script for querying the deployment  

```sh
python examples/query_existing_deployment.py
```   
