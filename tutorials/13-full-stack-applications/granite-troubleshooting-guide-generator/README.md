# Interactive AI Troubleshooting Guide for IBM FileNet

This tutorial is a powerful, interactive command-line tool that uses a locally-run Large Language Model (IBM Granite) to generate detailed troubleshooting guides for IBM FileNet errors on demand.

It's designed for developers, system administrators, and support engineers who need quick, context-aware solutions to complex FileNet issues without relying on cloud services or API keys.

## Features

* **Interactive Interface:** Runs directly in a Jupyter Notebook, prompting the user for an error code and delivering a guide in real-time.
* **Powered by a Local LLM:** Uses the IBM Granite model served locally via [Ollama](https://ollama.com), ensuring your data stays private and the tool works completely offline.
* **On-Demand Generation:** Get a complete, formatted troubleshooting guide for any error code present in the data source.
* **Intelligent Suggestions:** If an exact error code isn't found, the tool suggests similar codes that might be what the user was looking for.
* **Easily Customizable:** Simply update the `filenet-errors.csv` file with your own error codes to adapt the tool to your specific needs.

## Tech Stack

* **AI Model:** IBM Granite 4.0 Small (`ibm/granite4:latest`)
* **Model Server:** [Ollama](https://ollama.com)
* **Backend:** Python 3.7+
* **Environment:** Jupyter Notebook
* **Data Handling:** Pandas

## Getting Started Guide

Follow these steps to get the project up and running on your local machine.

### 1. Prerequisites

Make sure you have the following software installed on your computer:

* **Ollama:** Download and install from the official website: [ollama.com](https://ollama.com). After installation, ensure the Ollama application is running.
* **Python:** Version 3.7 or higher.
* **Jupyter:** You can install it with `pip install notebook`.

### 2. Setup and Installation

**Step A: Clone the Repository**
Open your terminal and clone this project to your local machine:

`git clone https://github.com/IBM/ibmdotcom-tutorials.git](https://github.com/IBM/ibmdotcom-tutorials.git)`

Navigate to the folder containing this notebook

`cd Artificial Intelligence/Generative_AI/granite-troubleshooting-guide-generator`


## Pull the Granite 4 Model 

`ollama pull ibm/granite4:latest`



## Launch Jupyter Notebook

Now, start the Jupyter Notebook server from your terminal:

`jupyter notebook`

## Usage Instructions**

1.  **Open the Notebook:** In the Jupyter interface in your browser, click on the `granite-troubleshooting-guide-generator.ipynb` file to open it.
2.  **Run the Cells:** Run each cell in the notebook from top to bottom by selecting a cell and pressing **Shift + Enter**.
3.  **Interact with the Tool:** Once you run the final cell, the interactive troubleshooter will start. An input box will appear.
    * Enter an error code (e.g., `FNRAC1003E`) and press Enter to generate a guide.
    * The tool will remain active, allowing you to look up more codes.
    * To stop the tool, type `exit` or `quit` and press Enter.

## Project Structure and Customization

├── 📄 filenet-errors.csv                  # The data source for the error codes and explanations. <br/>
├── 📓 local-llm-troubleshooting-generator.ipynb # The main Jupyter Notebook with all the code. <br/>
├── 🤖 Modelfile                           # The "recipe" for Ollama to create our custom model. <br/>
└── 📖 README.md                           # You are here! <br/>

## How to Customize

To use your own set of error codes, simply edit the **`filenet-errors.csv`** file. Make sure your file contains the following columns, as the notebook relies on them:
* `ErrorCode`
* `ErrorName`
* `ErrorMessage`
