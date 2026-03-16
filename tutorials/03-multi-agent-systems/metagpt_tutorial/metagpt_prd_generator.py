import re
from metagpt.actions import Action
import os
from metagpt.roles import Role
from metagpt.schema import Message
import asyncio
from metagpt.context import Context
from metagpt.logs import logger 
import typer
from metagpt.team import Team
from metagpt.actions.add_requirement import UserRequirement

app = typer.Typer()
logger.add("agent_run.log", rotation="10 MB")

def clean_response(rsp):
    # Remove <think>...</think> blocks
    rsp = re.sub(r"<think>.*?</think>", "", rsp, flags=re.DOTALL)
    # Extract markdown code block if present
    pattern = r"```(?:markdown)?(.*?)```"
    match = re.search(pattern, rsp, re.DOTALL)
    text = match.group(1) if match else rsp
    return text.strip()

class WritePRD(Action):
    PROMPT_TEMPLATE: str = """
Write a comprehensive product requirements document (PRD) for {instruction} and provide the output in markdown format. 
**Important:**
- Do NOT include any code, programming language, or technical implementation details.
- Only write markdown for a PRD document (sections like Introduction, Goals, User Stories, Requirements, etc.).
- Do NOT include code blocks, scripts, or pseudocode.
- Limit your response to a maximum of 1,500-3,000 words and no more than 7 unique sections.
- Ensure that no sections are repeated.
- Ensure that each section is ordered and formatted correctly with appropriate headings and subheadings.

Return ```your markdown text here with NO other texts, your text:
"""

    name: str = "WritePRD"

    async def run(self, instruction: str):
        prompt = self.PROMPT_TEMPLATE.format(instruction=instruction)
        rsp = await self._aask(prompt)
        prd_text = self.parse_text(rsp)
        return prd_text

    @staticmethod
    def parse_text(rsp):
        return clean_response(rsp)
    
class SavePRD(Action):
    name: str = "SavePRD"

    async def run(self, content: str, filename: str = "PRD.md"):
        filepath = os.path.join(os.getcwd(), filename)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return f"PRD saved to {filepath}"
    
class ConductResearch(Action):
    PROMPT_TEMPLATE: str = """
   Context: {context}
   You are a research assistant working with the Project Manager to ensure that
   the PRD includes information from a detailed research report for the given PRD.
   Use the {instruction} to generate a detailed research report on relevant details
   that should be included in the PRD and provide the output in markdown format.
   Include relevant data, statistics, and references to support the PRD.
   **Important**:
    1.  Return only the markdown text.
    2. Do not include any other text or explanations.
    3. Limit your response to the content that is relevant to the PRD and a maximum of 500-1,500 words.
   Return ```your markdown text here``` with NO other texts, your text:
    """

    name: str = "ConductResearch"

    async def run(self, instruction: str, context: str = ""):  
        prompt = self.PROMPT_TEMPLATE.format(instruction=instruction, context=context)
        rsp = await self._aask(prompt)
        research_content = self.parse_text(rsp)
        return research_content     
    
    @staticmethod
    def parse_text(rsp):
        return clean_response(rsp)
    
class PerformReview(Action):
    PROMPT_TEMPLATE: str = """
    You are a product reviewer. The following is a Product Requirements Document
    (PRD) generated for a project.

    Please review the PRD below and provide critical, actionable feedback to improve
    its clarity, completeness, and effectiveness. Highlight any missing sections,
    unclear requirements, or potential risks. Ensure that no sections are repeated.

**Important**:
1.  Return only the markdown text.
2. Do not include any other text or explanations.
3. Limit your response to the content that is relevant to the PRD.
4. Limit your response to a maximum of 500-1,000 words.

    Return your feedback in markdown format only.

    PRD to review:
    {context}
    """

    name: str = "PerformReview"
    async def run(self, context: str):
        prompt = self.PROMPT_TEMPLATE.format(context=context)
        rsp = await self._aask(prompt)
        review_content = self.parse_text(rsp)
        return review_content
       
    @staticmethod
    def parse_text(rsp):
        return clean_response(rsp)
    
class RevisePRD(Action):
    PROMPT_TEMPLATE: str = """
Revise the Product Requirements Document (PRD) based on the following review feedback.
Revise the PRD to address all reviewer suggestions, clarifying vague terms, adding
measurable goals, expanding on integrations, including user stories, functional requirements, and adding 
any missing sections as suggested.
**Important**:
1. Return only the markdown text.
2. Do not include any other text or explanations.
3. Include a section at the end titled "Document revision notes" that summarizes the key revisions.
4. Limit your response to a maximum of 1,500-4,000 words and no more than unique 12 sections.
5. Ensure that no sections are repeated.
6. Ensure that each section is ordered and formatted correctly with appropriate headings and subheadings.

PRD:
{prd}

Review Feedback:
{review}

Return ```your markdown text here``` with NO other texts, your text:
"""

    name: str = "RevisePRD"

    async def run(self, prd: str, review: str):
        prompt = self.PROMPT_TEMPLATE.format(prd=prd, review=review)
        rsp = await self._aask(prompt)
        revised_prd = self.parse_text(rsp)
        return revised_prd

    @staticmethod
    def parse_text(rsp):
        return clean_response(rsp)

class ProjectManager(Role):
    name: str = "Pam"
    profile: str = "Project Manager"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.write_action = WritePRD()
        self.save_action = SavePRD()
        self.revise_action = RevisePRD()
        self._watch([UserRequirement, ConductResearch, PerformReview])
        self.set_actions([self.write_action, self.save_action, self.revise_action])

    async def _act(self) -> Message:
        logger.info(f"{self.profile}: Starting PRD generation process.")
        memories = self.get_memories()
        # If this is the first round, generate and save the draft PRD
        if not any(m.role == "Researcher" or m.role == "Reviewer" for m in memories):
            msg = self.get_memories(k=1)[0]
            prd_content = await self.write_action.run(msg.content)
            draft_save_result = await self.save_action.run(prd_content, filename="DraftPRD.md")
            return Message(
                content=draft_save_result,
                role=self.profile,
                cause_by=type(self.write_action)
            )
        # If this is the second round, combine revised PRD and research, then save
        else:
            research_msgs = [m for m in memories if m.role == "Researcher"]
            review_msgs = [m for m in memories if m.role == "Reviewer"]
            research_content = research_msgs[-1].content if research_msgs else "No research found."
            review_content = review_msgs[-1].content if review_msgs else "No review found."
            # Load the draft PRD from file or memory
            with open("DraftPRD.md", "r", encoding="utf-8") as f:
                prd_content = f.read()
            # Only revise if review feedback exists and is not empty
            if review_msgs and review_content.strip() and review_content.strip() != "No PRD draft found.":
                revised_prd = await self.revise_action.run(prd_content, review_content)
            else:
                logger.info(f"{self.profile}: No review feedback found, skipping revision this round.")
                revised_prd = prd_content.strip()
            final_content = (
                f"{revised_prd}\n\n"
                f"---\n\n"
                f"## Research\n{research_content}\n"
            )
            await self.save_action.run(final_content, filename="PRD.md")
            return Message(
                content=final_content,  # Only the markdown document
                role=self.profile,
                cause_by=type(self.write_action)
            )
    
# Reviewer: Ensure review is based on the actual PRD draft
class Reviewer(Role):
    name: str = "Rico"
    profile: str = "Reviewer"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.review_action = PerformReview() 
        self.set_actions([self.review_action])    
        self._watch([WritePRD])

    async def _act(self) -> Message:
        # Load the actual PRD draft from disk
        try:
            with open("DraftPRD.md", "r", encoding="utf-8") as f:
                prd_content = f.read()
        except FileNotFoundError:
            prd_content = "No PRD draft found."
        logger.info(f"{self.profile}: Reviewing PRD...")
        review_content = await self.review_action.run(prd_content)
        return Message(content=review_content, role=self.profile, cause_by=type(self.review_action))

# Researcher: Ensure research is based on the actual PRD draft
class Researcher(Role):
    name: str = "Rita"
    profile: str = "Researcher"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.research_action = ConductResearch()
        self.set_actions([self.research_action])
        self._watch([UserRequirement, WritePRD])

    async def _act(self) -> Message:
        # Load the actual PRD draft from disk
        try:
            with open("DraftPRD.md", "r", encoding="utf-8") as f:
                prd_content = f.read()
        except FileNotFoundError:
            prd_content = "No PRD draft found."
        logger.info(f"{self.profile}: Researching for PRD...")
        research_content = await self.research_action.run(
            "Provide supporting research for the following PRD.", context=prd_content
        )
        return Message(content=research_content, role=self.profile, cause_by=type(self.research_action))

@app.command()
def main(
    idea: str = typer.Argument(..., help="A PRD for a banking application for wealth management"),
    investment: float = typer.Option(3.0, "--investment", "-i", help="Dollar amount to invest in the project."),
    n_round: int = typer.Option(2, "--n-round", "-n", help="Number of rounds to run the simulation."),
):
    logger.info(idea)
    async def runner():
        team = Team(use_mgx=False)
        team.hire([
            ProjectManager(),
            Researcher(),
            Reviewer(),
        ])
        team.idea = idea
        team.invest(investment=investment)
        team.run_project(idea)
        await team.run(n_round=n_round)
    asyncio.run(runner())

if __name__ == "__main__":
    app()