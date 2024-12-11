# Use crewAI to build multimodal multiagent systems for retail shelf optimization with watsonx.ai

**Authors:** Yohan Bensoussan, Anna Gutowska

Imagine transforming your retail store’s performance with just a smartphone and the power of [artificial intelligence (AI)](https://www.ibm.com/topics/artificial-intelligence). This isn’t a far-off future scenario—it’s a reality that small and mid-size retail stores can implement today! In this tutorial, we’ll explore an exciting real-world use case where store owners and managers can use AI to optimize their shelf arrangements, boost sales and enhance the customer experience. We will leverage both the IBM [Granite 3.0](https://www.ibm.com/granite) model in this project as well as Meta's Llama 3.2 vision model.

<img src="https://assets.ibm.com/is/image/ibm/multimodal-agent-architecture?$original$&fmt=png-alpha"
     alt="crewAI and watsonx architecture"
     style="display: block; margin: auto; width: 800px; height: 500px;" />

     
## The impacts of generative AI on retail

With the advent of agent-based generative AI, small and mid-size retail stores now have access to expert-level analysis and recommendations that were once the domain of large corporations with dedicated data science teams. This democratization of AI technology can be groundbreaking for your local grocery store, boutique shop or regional chain.

Here’s what makes this approach so revolutionary:
* Simplicity: All you need to start is a simple picture of your store aisle.
* Expertise on demand: The AI agents act as your personal team of retail experts, analyzing your space and current market trends.
* Actionable insights: You’ll receive a detailed, practical plan for rearranging your shelves to maximize sales and customer satisfaction.
* Cost-effective: This approach eliminates the need for expensive consultants or complex software systems.
* Adaptability: As market trends change, you can quickly re-analyze and adjust your store layout to stay ahead of the curve.

Let’s dive into the technical details and see how this AI-powered retail optimization works, step by step. By the end of this tutorial, you’ll have a clear understanding of how to implement this system in your own store, potentially revolutionizing your retail space with the power of AI.


## The story behind the solution

Sarah is a local grocery store owner who was struggling to compete with larger chains. Despite her best efforts, she noticed that certain products weren't selling as well as they should, while others were constantly out of stock. One day, while reorganizing her fresh produce aisle for the third time that month, she wondered if there was a better way.
That's where our AI-powered solution comes in. Using just her smartphone and our intelligent system, Sarah was able to transform her store's performance. Let's dive into how to build such a system.

<img src="https://assets.ibm.com/is/image/ibm/dsc_28081?$original$"
     alt="A Busy Supermarket With Customers Shopping"
     style="display: block; margin: auto; width: 500px; height: 300px;" />

## What is crewAI?
We can use crewAI, an [open-source](https://www.ibm.com/topics/open-source) agent framework that orchestrates [agent](https://www.ibm.com/think/topics/ai-agents) interactions in crews. The term "crew" refers to [multiagent systems](https://www.ibm.com/think/topics/multiagent-system). Our crew is a team of agents role-playing retail experts that are available 24 x 7, each with their own specialty. Tasks can either be directly assigned to an agent or handled through crewAI’s hierarchical process that assesses specific roles and availability.
For crewAI beginners, check out the [crewAI explainer](https://www.ibm.com/think/topics/crew-ai) along with the official [docs](https://docs.crewai.com/introduction). On the official [crewAI GitHub](https://github.com/crewAIInc/crewAI-examples) repository, you can also find examples of crews performing stock analysis, data analysis, [RAG](https://www.ibm.com/think/topics/retrieval-augmented-generation), LangGraph integration and much more.

## Meet the AI retail team

Let's have a look at the team of agentic retail experts we will use in this tutorial.

```yaml
store_manager:
  role: Store Manager
  goal: >
    Analyze the shelves in the physical store and provide a detailed report
    to the market analyst to develop a detailed action plan with the insights.
  backstory: >
    As the Space Planner, you are responsible for examining the store's shelves,
    assessing product placement and optimizing space utilization.
    You have access to advanced tools for shelf visualization, which help you
    collect accurate data on the current arrangement of products.
    You are capable to translate market analysis into a plan for the store
    or specific shelf or department.

market_analyst:
  role: Market Trend Analyst
  goal: >
    Provide recommendations to rearrange the product arrangement based on market trends.
  backstory: >
    As the Market Analyst, you possess in-depth knowledge of market trends and consumer behavior.
    Your experience and keen sense of retail enable you to propose effective recommendations
    for specific shelves. You analyze reports provided by the Space Planner to suggest
    improvements that enhance sales and customer experience.
```

## Task workflow

Here's how our worker team automates the complex task of shelf improvement.

```yaml
analyze_shelf:
  description: >
    Use the Vision Tool to collect visual data and caption the current product arrangement.
    Conduct a thorough analysis of shelf {shelf} in the store.
    Prepare a detailed report highlighting the current layout, products,
    product placement and any observed issues.
    Ensure the report is detailed at the level of product names.
  expected_output: >
    A comprehensive report on shelf {shelf}, including visual data,
    analysis of product placement, space utilization and any recommendations for improvement.
  agent: store_manager

provide_recommendations:
  description: >
    Review the report on shelf {shelf} provided by the Store Manager.
    Utilize your knowledge of the retail market and internet to assess current trends
    relevant to the products in this shelf ({shelf}).
    Develop expert recommendations to optimize sales and customer satisfaction.
    Ensure the recommendations are detailed and includes details like product names.
  expected_output: >
    A set of actionable recommendations for rearranging the {shelf} shelf,
    aligned with current market trends and consumer preferences.
  agent: market_analyst

create_action_plan:
  description: >
    List the recommendations from the Market Analyst,
    then develop a detailed action plan for Store manager and Store buyer
    to implement the changes.
    Ensure the plan is practical and outlines the steps needed to rearrange
    the products effectively.
    Be smart and well explained.
    Give the explanation of your recommendations and the goal to achieve.
  expected_output: >
    A detailed list of recommendation and action plan for rearranging and
    improving the {shelf} shelf according to market trends,
    including market analyst recommendations and translation into
    practical tasks for the Store manager and the Buyer.
  agent: store_manager
```

## Steps

You can find this project on [Github](https://github.com/IBM/ibmdotcom-tutorials/blob/main/crew-ai-projects).

### Step 1. Set up your environment

We first need to set up our environment. You can find these steps in the Markdown file on [GitHub](https://github.com/IBM/ibmdotcom-tutorials/blob/main/crew-ai-projects/crewAI-multiagent-retail-example.md) or by following along here. 

1. Ensure you have Python >=3.10 <=3.13 installed on your system. You can check your Python version using the `python3 --version` command.

2. Set up a [virtual environment](https://docs.python.org/3/library/venv.html) to avoid Python package dependency conflicts.
```bash
python3 -m venv myenv
source ./myenv/bin/activate
```
3. Clone the repository found here: `https://github.com/IBM/ibmdotcom-tutorials.git`. For detailed steps on how to clone a repository, refer to the [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). 

The project structure of the `crew-ai-projects` directory should resemble the following:

```
src/my_retail_advisor/

├── config/
│   ├── agents.yaml    # Agent configurations
│   └── tasks.yaml     # Task definitions
├── tool/
│   ├── custom_tool.py # Custom crewAI tool implementations
│   └── tool_helper.py # Vision helper functions
├── crew.py           # Crew orchestration
└── main.py          # Application entry point
```

### Step 2. Obtain watsonx API credentials

1. Log in to [watsonx.ai](https://dataplatform.cloud.ibm.com/registration/stepone?context=wx&apps=all) using your IBM Cloud account.

2. Create a [watsonx.ai project](https://www.ibm.com/docs/en/watsonx/saas?topic=projects-creating-project#create-a-project).
   Take note of your **project ID** in project > Manage > General > Project ID. You'll need this ID for this tutorial.

3. Create a [watsonx.ai Runtime](https://cloud.ibm.com/catalog/services/watsonxai-runtime) service instance (choose the Lite plan, which is a free instance).

4. Generate a watsonx [API Key](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/ml-authentication.html). 

5. Associate the watsonx.ai Runtime service to the project you created in [watsonx.ai](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/assoc-services.html?context=cpdaas). 


### Step 3. Obtain Serper API credentials
Generate and take note of your free [Serper API](https://serper.dev/) key. Serper is a Google Search API that we will be using in this project. 

### Step 4. Install crewAI and set up your credentials 

We need to install the crewAI framework for this tutorial and set out watsonx.ai credentials that we generated in step 2. 

To install crewAI, run the following command in your terminal. 
```bash
%pip install 'crewai[tools]'
```

In a seperate `.env` file at the same directory level as the `.env_sample` file, set your credentials as strings like so: 

```env
WATSONX_APIKEY=your_watson_api_key_here
WATSONX_PROJECT_ID=your_watsonx_project_id_here
WATSONX_URL=your_endpoint (e.g. "https://us-south.ml.cloud.ibm.com")
SERPER_API_KEY=your_serper_api_key_here
```

### Step 5. Customize the crew (optional)

crewAI can be configured to use any open source large language model (LLM). LLMs can be connected through Ollama and several other APIs such as IBM watsonx™ and OpenAI. Users can also leverage pre-built tools available through the crewAI Toolkit as well as LangChain Tools. 

For this tutorial, our custom visual search tool is powered by the `llama-3-2-90b-vision-instruct` model using watsonx.ai. Here is a look at the custom vision tool in the `tool` directory.

```python 
# tool/custom_tool.py
from crewai.tools import BaseTool
from my_retail_advisor.tools.tool_helper import Helper

class VisionTool(BaseTool):
    name: str = "Vision Tool"
    description: str = "Analyzes a default picture to collect visual data."

    def _run(self) -> str:
        # Relative path to the shelf.jpg image from the working crew-ai/my_retail_advisor directory
        image_path = 'images/shelf.jpg'

        # Simulating image-to-text conversion
        products_in_image = Helper.image2text(image_path)
        return products_in_image
```

There are many ways you can customize your crew:
- Modify `src/my_retail_advisor/config/agents.yaml` to define your agents.
- Modify `src/my_retail_advisor/config/tasks.yaml` to define your tasks.
- Modify `src/my_retail_advisor/crew.py` to add your own logic, tools and specific args.
- Modify `src/my_retail_advisor/main.py` to add custom inputs for your agents and tasks.
- Modify `src/my_retail_advisor/tool/custom_tool.py` to add custom tools for your agents and tasks.
- Modify `src/my_retail_advisor/tool/tool_helper.py` to change the custom vision tool based on llama vision model.
- Replace `images/shelf.jpg` with an image of your own.

### Step 6. Run the system
Ensure you are in the proper working directory of this project. You can change directories by running the following command in your terminal.
```bash
cd crew-ai-projects/my_retail_advisor
```

To kickoff your crew of AI agents and begin task execution, run this command from the root folder of your project. **Note, the crew may run for several minutes before returning a final result.**
```bash
crewai run
```
This command initializes the my-retail-advisor Crew, assembling the agents and assigning them tasks as defined in your configuration. This example, unmodified, will run the create a `report.md` file with the output. crewAI can return JSON, Pydantic models and raw strings as output. Here is an example of the output produced by the crew.

### **Example output**:

**_Action Plan for Rearranging and Improving the Vegetable Shelf_**

**_Objective:_**  
*To create a visually appealing and organized produce section that showcases the most popular vegetables, increases sales, and enhances customer satisfaction.*

**_Recommendations from the Market Analyst:_**

1. *Create a focal point with a colorful and eye-catching display of the most popular vegetables.*
2. *Use a variety of colors, textures, and heights to create visual interest.*
3. *Group similar vegetables together.*
4. *Consider using baskets, bins, or other containers to add a natural and earthy feel.*
5. *Use lighting to highlight specific products or promotions.*
...  

**_Action Plan for Store Manager and Store Buyer:_**

**_Step 1: Focal Point Display_**  
*Store Manager: Designate a focal point area on the shelf for the most popular vegetables (tomatoes, potatoes, onions, lettuce, carrots, peppers, cucumbers, and celery).*
*Store Buyer: Ensure a sufficient stock of these vegetables to maintain a full and appealing display.*
*Team: Arrange the vegetables in a visually appealing way, using a variety of colors, textures, and heights.*

...  

**_Step 2: Themed Displays and Additional Features_**  
*Store Manager: Plan and implement themed displays (e.g., summer BBQ or holiday-themed) to engage customers and promote related products.*
*Store Buyer: Ensure a sufficient stock of themed display materials and related products.*
*Team: Use vegetable racks or stands to add extra display space and create a visually appealing display.*

...

## Conclusion

As seen in the sample output, the multiagent system is able to execute the sequential process of processing input, tool calling and formulating findings.

Remember Sarah's fresh produce aisle problem? Here's how the system helped her:

1. Visual analysis: Sarah took a photo of her vegetable aisle with her smartphone. The store manager agent analyzed the image and noticed that the shelves are densely packed and in need of maintance.
2. Market research: The market analyst agent used the current market trends for vegetable sales and customer preferences to create actionable recommendations for rearranging the vegetables shelf.
3. Action plan: Based on these insights, Sarah received a detailed plan including instructions to:
    - Create a colorful and eye-catching display
    - Use baskets or bins to add a natural feel to the display.
    - Add a themed display, such as a summer BBQ or holiday-themed display, to engage customers in related products.
    - Create space between the different types of vegetables to declutter.
    - Improve the lighting. 

In summary, the `my-retail-advisor` Crew is composed of multiple AI agents, each with unique roles, goals and tools. These agents collaborate on a series of tasks, defined in `config/tasks.yaml`, leveraging their collective skills to achieve complex objectives. The `config/agents.yaml` file outlines the capabilities and configurations of each agent in your crew.

With AI-powered tools like this, small and medium-sized retailers can streamline their decision-making process. Just like Sarah, you can transform your store's performance with technology that's accessible, affordable and effective. This architecture also unlocks other AI opportunities across various domains, such as product design and enhanced customer experience. Its flexibility makes it valuable beyond retail, empowering businesses to innovate and excel in industry-specific tasks.