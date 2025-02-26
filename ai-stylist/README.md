# Generate your outfit using AI ✨

## Powered by [IBM® Granite™](https://www.ibm.com/granite)

This AI stylist uses various Granite models to describe and categorize your clothing to produce an outfit for your specified occasion.

### Setup 
You'll need a WATSONX_APIKEY and a WATSONX_PROJECT_KEY in order to inference the model. You can set these in the `.env` file. Use the `.env.example` file as a reference for how yours should look.

To follow along with the tutorial in Jupyter Notebook format, open `ai-stylist-tutorial.ipynb`.

Alternatively, to run the app, follow these basic instructions.

First, change your directory and activate a virtual environment:

```sh
$ cd ai-stylist
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
streamlit run ai-stylist.py
```

### Help 
If you get an error while trying to upload images, try running it like this instead:

```sh
streamlit run ai-stylist.py --server.enableXsrfProtection false
```
