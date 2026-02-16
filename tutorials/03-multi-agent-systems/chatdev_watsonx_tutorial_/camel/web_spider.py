import requests
from bs4 import BeautifulSoup
import openai
import wikipediaapi
import os
from langchain_ibm import WatsonxLLM
from ibm_watsonx_ai.metanames import GenTextParamsMetaNames as GenParams

# Set the OpenAI API key and base URL globally
openai.api_key = os.environ.get('OPENAI_API_KEY')
BASE_URL = os.environ.get('BASE_URL')
if BASE_URL:
    openai.api_base = BASE_URL

# Watsonx API setup
WATSONX_API_KEY = os.environ.get('WATSONX_APIKEY')
WATSONX_URL = os.environ.get('WATSONX_URL')
WATSONX_PROJECT_ID = os.environ.get('WATSONX_PROJECT_ID')

if not WATSONX_API_KEY or not WATSONX_URL or not WATSONX_PROJECT_ID:
    raise RuntimeError("Watsonx environment variables are not properly set.")

watsonx_client = WatsonxLLM(
    model_id="ibm/granite-3-8b-instruct",  # Replace with the appropriate Watsonx model ID
    url=WATSONX_URL,
    apikey=WATSONX_API_KEY,
    project_id=WATSONX_PROJECT_ID,
    params={
        GenParams.TEMPERATURE: 0.2,
        GenParams.TOP_P: 1.0,
        GenParams.MAX_NEW_TOKENS: 500
    },
)


def get_baidu_baike_content(keyword):
    # design api by the baidubaike
    url = f'https://baike.baidu.com/item/{keyword}'
    # post request
    response = requests.get(url)
    # Beautiful Soup part for the html content
    soup = BeautifulSoup(response.content, 'html.parser')
    # find the main content in the page
    # main_content = soup.find('div', class_='lemma-summary')
    main_content = soup.contents[-1].contents[0].contents[4].attrs['content']
    return main_content


def get_wiki_content(keyword):
    wiki_wiki = wikipediaapi.Wikipedia('MyProjectName (merlin@example.com)', 'en')
    search_topic = keyword
    page_py = wiki_wiki.page(search_topic)
    if page_py.exists():
        print("Page - Title:", page_py.title)
        print("Page - Summary:", page_py.summary)
    else:
        print("Page not found.")
    return page_py.summary


def modal_trans(task_dsp, use_openai=False):
    try:
        task_in = (
            "'" + task_dsp +
            "' Just give me the most important keyword about this sentence without explaining it and your answer should be only one keyword."
        )

        if use_openai:
            # OpenAI API call for extracting the keyword
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": task_in}],
                temperature=0.2,
                max_tokens=50
            )
            response_text = response['choices'][0]['message']['content'].strip()
        else:
            # Watsonx API call for extracting the keyword
            response = watsonx_client.invoke(task_in)
            response_text = response.strip()  # Watsonx returns plain text

        # Fetch content from Wikipedia
        spider_content = get_wiki_content(response_text)

        # Summarize the content
        task_in = (
            "'" + spider_content +
            "', Summarize this paragraph and return the key information."
        )

        if use_openai:
            # OpenAI API call for summarizing the content
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": task_in}],
                temperature=0.2,
                max_tokens=150
            )
            result = response['choices'][0]['message']['content'].strip()
        else:
            # Watsonx API call for summarizing the content
            response = watsonx_client.invoke(task_in)
            result = response.strip()  # Watsonx returns plain text

        print("web spider content:", result)
    except Exception as e:
        result = ''
        print("Error occurred:", str(e))
    return result