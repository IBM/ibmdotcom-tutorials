# Copyright 2025 © BeeAI a Series of LF Projects, LLC
# Modified by Vanna Winland 2025
# SPDX-License-Identifier: Apache-2.0



from collections.abc import Iterator
from typing import Any

from acp_sdk import Message, MessagePart
from acp_sdk.server import Context, Server
from crewai import LLM, Agent, Crew, Task
from crewai.agents.parser import AgentAction, AgentFinish
from pydantic import AnyUrl
from dotenv import load_dotenv
import agentops
import os
 
load_dotenv()
agentops.init(api_key=os.getenv("AGENTOPS_API_KEY"))


# ===========================
# CHOOSE YOUR LLM PROVIDER BELOW
# ===========================

# ----- IBM Watsonx.ai SETUP -----
# To use IBM Watsonx.ai, UNCOMMENT this block and ensure your .env file is configured.
# llm = LLM(
#     model=os.getenv("WATSONX_MODEL"),
#     base_url=os.getenv("WATSONX_URL"),
#     api_key=os.getenv("WATSONX_APIKEY"),
#     provider="watsonx"
# )

# ----- Ollama LOCAL MODEL SETUP -----
# To use Ollama, UNCOMMENT this block and ensure your .env file is configured.
# llm = LLM(
#     model=os.getenv("OLLAMA_MODEL"),
#     base_url=os.getenv("OLLAMA_BASE_URL"),
#     provider="ollama"
# )


server = Server()


@server.agent()
def song_writer_agent(input: list[Message], context: Context) -> Iterator:
    """Agent that writes a song about a website. Accepts a message with URL"""

    try:
        url = str(AnyUrl(str(input[-1])))
    except ValueError:
        yield MessagePart(content="This is not a URL, please provide valid website.")
        return

    website_scraper = Agent(
        llm=llm,
        role="Website Researcher",
        goal="Find useful content for songwriting from this text: Music is the art of arranging sounds.",
        backstory="Expert researcher who finds inspiring stories and themes online.",
        verbose=True,
        # tools=[ScrapeWebsiteTool()],  # REMOVE the tool for now
    )

    song_writer = Agent(
        llm=llm,
        role="Songwriter",
        goal="Create songs from research material.",
        backstory="Talented songwriter who transforms information into emotional, memorable songs.",
        verbose=True,
    )

    scrape_task = Task(
        description="Research this URL for songwriting material: {url}",
        expected_output="Collection of themes, stories, and facts for songwriting inspiration.",
        agent=website_scraper,
    )

    write_song_task = Task(
        description="Write a song based on research.",
        expected_output="Complete song with lyrics and style based on research.",
        agent=song_writer,
    )

    crew = Crew(
        agents=[website_scraper, song_writer],
        tasks=[scrape_task, write_song_task],
        verbose=True,
        step_callback=lambda event, *args, **kwargs: step_callback(event, context, *args, **kwargs),
    )
    result = crew.kickoff(inputs={"url": url})
    yield MessagePart(content=result.raw)

@server.agent()
def markdown_report_agent(input: list[Message], context: Context) -> Iterator:
    """Agent that formats the original song and A&R feedback JSON into a markdown report."""

    import json
    try:
        payload = input[-1].parts[0].content
        data = json.loads(payload) if isinstance(payload, str) else payload
        song = data.get("song", "")
        feedback = data.get("feedback", {})
        if isinstance(feedback, str):
            feedback = eval(feedback)
    except Exception as e:
        yield MessagePart(content=f"Error parsing input: {e}")
        return

    md = [
        "## Generated Song",
        "",
        "```",
        song,
        "```",
        "",
        "## A&R Feedback",
        "",
        f"- **Hit Potential Score:** {feedback.get('hit_potential_score', '')}",
        f"- **Target Audience:** {feedback.get('target_audience', '')}",
        f"- **Strengths:** {feedback.get('strengths', '')}",
        f"- **Concerns:** {feedback.get('concerns', '')}",
        f"- **Market Comparison:** {feedback.get('market_comparison', '')}",
        f"- **Recommendation:** {feedback.get('recommendation', '')}",
    ]
    markdown_report = "\n".join(md)
    yield MessagePart(content=markdown_report)

def step_callback(event: Any, context: Context, *args, **kwargs) -> None:
    match event:
        case AgentAction():
            context.yield_sync(
                {
                    "thought": event.thought,
                    "tool": event.tool,
                }
            )
        case AgentFinish():
            context.yield_sync(
                {
                    "final_result": getattr(event, "result", str(event)),
                }
            )


if __name__ == "__main__":
    server.run()
