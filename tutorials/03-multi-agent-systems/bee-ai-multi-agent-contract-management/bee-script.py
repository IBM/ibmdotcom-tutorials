import asyncio
import sys
import traceback
import pandas as pd
import os 

from beeai_framework.backend import ChatModel
from beeai_framework.errors import FrameworkError
from beeai_framework.tools.search.duckduckgo import DuckDuckGoSearchTool
from beeai_framework.workflows.agent import AgentWorkflow, AgentWorkflowInput
from langchain_core.tools import StructuredTool
from beeai_framework.adapters.langchain import LangChainTool
from typing import Any

async def main() -> None:

    llm = ChatModel.from_name("ollama:granite3.3:8b")

    workflow = AgentWorkflow(name="Procurement Agent")

    client_company = input("Please enter the client company: ")
    contractor_company = input("Please enter the contractor company name: ")

    client_budget_file = input(f"Enter the file name of the budget report for {client_company} (in the same directory level): ")
    while os.path.splitext(client_budget_file)[1].lower() != ".csv":
        client_budget_file = input(f"Budget report must be in .csv format, please try again: ")

    contract_file = input(f"Enter the file name of the contract between {client_company} and {contractor_company} (in the same directory level): ")
    while os.path.splitext(contract_file)[1].lower() != ".txt":
        contract_file = input(f"Contract must be in .txt format, please try again: ")

    service_industry = input(f"Enter the industry of the service described in this contract (e.g., finance, construction, etc.): ")

    current_directory = os.getcwd()

    def get_budget_data():
        try:
            budget = pd.read_csv(os.path.join(current_directory, client_budget_file))
        except FileNotFoundError:
            return client_budget_file + " not found. Please check correct file name."
        except Exception as e:
            return f"An error occurred: {e}"
        return budget

    get_budget = StructuredTool.from_function(
            func=get_budget_data,
            name="GetBudgetData",
            description=f"Returns the budget data for {client_company}.",
            return_direct=True,
        )

    budget_tool = LangChainTool[Any](get_budget)

    def get_contract_data():
        try:
            with open(os.path.join(current_directory, contract_file), 'r') as file:
                content = file.read()
        except FileNotFoundError:
            return contract_file + " not found. Please check correct file name."    
        except Exception as e:
            return f"An error occurred: {e}"
        return content

    get_contract = StructuredTool.from_function(
            func=get_contract_data,
            name="GetContractData",
            description=f"Returns the contract details.",
            return_direct=True,
        )

    contract_tool = LangChainTool[Any](get_contract)

    workflow.add_agent(
        name="Budget Advisor",
        role="A diligent budget advisor",
        instructions="You specialize in reading internal budget data in CSV format.",
        tools=[budget_tool],
        llm=llm,
    )

    workflow.add_agent(
        name="Contract Synthesizer",
        role="A diligent contract synthesizer",
        instructions=f"You specialize in reading contracts.",
        tools=[contract_tool],
        llm=llm,
    )

    workflow.add_agent(
        name="Web Search",
        role="A web searcher.",
        instructions=f"You can search the web for market trends, specifically in the {service_industry} industry.",
        tools=[DuckDuckGoSearchTool()],
        llm=llm,
    )

    workflow.add_agent(
        name="Procurement Advisor",
        role="A procurement advisor",
        instructions=f"You write professional emails to {contractor_company} with convincing negotiations that factor in market trends and internal budget constraints. You represent {client_company}.",
        llm=llm,
    )

    response = await workflow.run(
        inputs=[
            AgentWorkflowInput(
                prompt=f"Extract and summarize the key obligations, deliverables, and payment terms from the contract between {client_company} and {contractor_company}.",
            ),
            AgentWorkflowInput(
                prompt=f"Analyze the internal budget data for {client_company}.",
            ),
            AgentWorkflowInput(
                prompt=f"Write a formal email to {contractor_company}. In the email, negotiate the contract terms in favor of {client_company}, factoring in market trends and internal budget constraints.",
            ),
        ]
    ).on(
        "success",
        lambda data, event: print(
            f"-> Step '{data.step}' has been completed with the following outcome.\n\n{data.state.final_answer}"
        ),
    )

    print("Final email: ")
    print(response.state.final_answer)


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except FrameworkError as e:
        traceback.print_exc()
        sys.exit(e.explain())
