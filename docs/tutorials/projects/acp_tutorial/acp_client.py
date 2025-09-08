# Copyright 2025 © BeeAI a Series of LF Projects, LLC
# Modified by Vanna Winland 2025
# SPDX-License-Identifier: Apache-2.0

import asyncio
import json
import sys

from acp_sdk import GenericEvent, Message, MessageCompletedEvent, MessagePartEvent
from acp_sdk.client import Client
from acp_sdk.models import MessagePart


async def run_client() -> None:
    # Step 1: Get URL and generate song lyrics from CrewAI agent (port 8000)
    async with Client(base_url="http://localhost:8000") as client_crew:
        user_message_input = Message(parts=[MessagePart(content=input("URL: "))])
        song_parts = []
        async for event in client_crew.run_stream(agent="song_writer_agent", input=[user_message_input]):
            match event:
                case MessagePartEvent(part=MessagePart(content=content)):
                    print(content)
                    song_parts.append(content)
                case GenericEvent():
                    print("\nℹ️ Agent Event:")
                    for key, value in event.generic.model_dump().items():
                        value = value.replace("\n", " ")
                        value = f"{value[:100]}..." if len(value) > 100 else value
                        print(f"{key}: {value}")
                case MessageCompletedEvent():
                    print()
                case _:
                    print(f"ℹ️ {event.type}", file=sys.stderr)
        song = "\n".join(song_parts).strip()

    # Step 2: Send lyrics to BeeAI agent for critique (port 9000)
    async with Client(base_url="http://localhost:9000") as client_beeai:
        critique_parts = []
        song_message = Message(parts=[MessagePart(content=song)])
        async for event in client_beeai.run_stream(agent="artist-repertoire-agent", input=[song_message]):
            match event:
                case MessagePartEvent(part=MessagePart(content=content)):
                    print("\nA&R Critique:\n", content)
                    critique_parts.append(content)
                case MessageCompletedEvent():
                    print()
        critique = "\n".join(critique_parts).strip()

    # Step 3: Send song and A&R critique to markdown_report_agent (port 8000)
    async with Client(base_url="http://localhost:8000") as client_crew:
        markdown_parts = []
        payload = json.dumps({
            "song": song,
            "feedback": critique
        })
        critique_message = Message(parts=[MessagePart(content=payload)])
        async for event in client_crew.run_stream(agent="markdown_report_agent", input=[critique_message]):
            match event:
                case MessagePartEvent(part=MessagePart(content=content)):
                    print("\nFormatted Markdown:\n", content)
                    markdown_parts.append(content)
                case MessageCompletedEvent():
                    print()
        markdown = "\n".join(markdown_parts).strip()

    # Step 4: Save formatted markdown
    with open("a&r_feedback.md", "w") as f:
        f.write(markdown)
    print('\nA&R feedback saved to "a&r_feedback.md".')


if __name__ == "__main__":
    asyncio.run(run_client())