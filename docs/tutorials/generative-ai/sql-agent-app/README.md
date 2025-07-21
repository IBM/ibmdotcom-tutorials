# SQL agent with LangGraph and Mistral Medium 3 by using watsonx.ai

## Powered by [IBM watsonx.ai](https://www.ibm.com/granite)

This AI agent can execute and generate Python and SQL queries for your custom SQLite database.

### Setup 
You'll need a WATSONX_APIKEY and a WATSONX_PROJECT_KEY in order to inference the model. You can set these in the `.env` file. Use the `.env.example` file as a reference for how yours should look.

To follow along with the tutorial in Jupyter Notebook format, open `langgraph-mistral-sql-agent.ipynb`.

Alternatively, to run the app, follow these basic instructions.

First, change your directory and activate a virtual environment:

```sh
$ cd sql-agent-app
```

```python
virtualenv venv --python python3.12
source venv/bin/activate
```

Next, install the necessary libraries:

```python
pip install -r requirements.txt
```

Finally, you can now run the Streamlit app:

```python
streamlit run app.py
```
