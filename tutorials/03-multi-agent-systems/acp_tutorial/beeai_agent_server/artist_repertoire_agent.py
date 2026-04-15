import textwrap
import os
from dotenv import load_dotenv
import json

from acp_sdk import Metadata, Annotations
from acp_sdk.models.platform import PlatformUIAnnotation, PlatformUIType, AgentToolInfo
from acp_sdk.models import Message, MessagePart
from acp_sdk.server import RunYield, RunYieldResume, Server, Context
from collections.abc import AsyncGenerator
from pydantic import BaseModel, Field
from typing import List, Optional

# OpenAI/OpenRouter LLM adapter
from beeai_framework.adapters.openai import OpenAIChatModel
from beeai_framework.backend import UserMessage, SystemMessage

load_dotenv()
if 'OPENAI_API_KEY' not in os.environ and 'OPENROUTER_KEY' in os.environ:
        os.environ['OPENAI_API_KEY'] = os.environ['OPENROUTER_KEY']

server = Server()

class SongEvaluationOutput(BaseModel):
    """Structured payload returned by the LLM for a song evaluation."""
    hit_potential_score: int = Field(
        description="Hit Potential Score (1-10): How likely is this to succeed commercially?"
    )
    target_audience: str = Field(
        description="Who would stream/buy this song?"
    )
    strengths: str = Field(
        description="What works well (hooks, lyrics, production)?"
    )
    concerns: str = Field(
        description="What might limit its success?"
    )
    market_comparison: str = Field(
        description="What successful artists/songs does this remind you of?"
    )
    recommendation: str = Field(
        description='Recommendation: "Sign", "Pass", or "Needs work?"'
    )

@server.agent(
    name="artist-repertoire-agent",
    description="An A&R agent that evaluates songs for commercial potential and artistic merit.",
    metadata=Metadata(
        version="1.0.0",
        framework="BeeAI",
        programming_language="Python",
        license="Apache 2.0",
        annotations=Annotations(
            beeai_ui=PlatformUIAnnotation(
                ui_type=PlatformUIType.HANDSOFF,
                display_name="Artist & Repertoire Agent",
                user_greeting="Paste your song lyrics or description for A&R evaluation.",
                tools=[AgentToolInfo(name="WebSearch", description="Search the web for up-to-date information")]
            )
        ),
        author={
            "name": "Vanna Winland",
            "email": "vanna.winland@ibm.com"
        },
        env=[
            {
                "name": "OPENROUTER_KEY",
                "description": "Your OpenRouter API key",
                "required": True
            },
            {
                "name": "OPENROUTER_BASE_URL",
                "description": "Base URL for OpenRouter API (https://openrouter.ai/api/v1)",
                "required": True
            },
            {
                "name": "MODEL_NAME",
                "description": "Model name for OpenRouter (e.g., meta-llama/llama-4-scout:free)",
                "required": True
            }
        ],
        recommended_models=[
            "meta-llama/llama-4-scout:free",
            "openrouter/gpt-3.5-turbo",
            "openrouter/gpt-4-turbo"
        ],
        capabilities=[
            {"name": "Song Evaluation", "description": "Assess commercial and artistic potential of songs"},
            {"name": "Market Comparison", "description": "Compare songs to current hits and artists"},
            {"name": "A&R Recommendation", "description": "Provide sign/pass/needs work recommendations"}
        ],
        tags=["music", "A&R", "song-evaluation", "entertainment", "nlp"],
        documentation="""
### Artist & Repertoire Agent

Acts as an A&R Representative for a major record label, evaluating songs for hit potential and artistic merit.

#### Features
- Hit potential scoring (1-10)
- Target audience identification
- Strengths and concerns analysis
- Market comparison to current successful artists/songs
- Concise, industry-focused recommendations

#### Input Formats
- Song lyrics (text)
- Song metadata (optional)

#### Output
- JSON with hit score, audience, strengths, concerns, market comparison, and recommendation
"""
    )
)
async def artist_repertoire_agent(input: list[Message]) -> AsyncGenerator[RunYield, RunYieldResume]:
    """Evaluates a song for commercial potential and artistic merit and saves the output."""
    user_prompt = input[-1].parts[0].content if input and input[-1].parts else ""
    model_name = os.getenv("MODEL_NAME", "meta-llama/llama-4-scout:free")
    llm = OpenAIChatModel(model_name)

    system_msg = textwrap.dedent("""
        You are an A&R Representative for a major record label. Your job is to evaluate songs for commercial potential and artistic merit.

        Analyze the provided song and return:
        1. Hit Potential Score (1-10): How likely is this to succeed commercially?
        2. Target Audience: Who would stream/buy this song?
        3. Strengths: What works well (hooks, lyrics, production)?
        4. Concerns: What might limit its success?
        5. Market Comparison: What successful artists/songs does this remind you of?
        6. Recommendation: Sign, pass, or needs work?

        Keep feedback concise and industry-focused. Think like someone who discovers the next big hit.
    """)

    response = await llm.create_structure(
        schema=SongEvaluationOutput,
        messages=[SystemMessage(system_msg), UserMessage(user_prompt)],
    )
    output = str(response.object)
    # Save the thoughtful response to a Markdown file
    with open("json_response.md", "w") as f:
        f.write(f"## Song Evaluation\n\n```json\n{output}\n```\n")
    yield output

def run():
    server.run(port=9000)

if __name__ == "__main__":
    run()