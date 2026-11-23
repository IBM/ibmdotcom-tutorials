from crewai import LLM, Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerperDevTool

from customer_service_analyzer.tools.custom_tool import (
    EvaluationCriteriaTool,
    KeywordExtractionTool,
    PerformanceMetricsTool,
    RecommendationTool,
    SentimentAnalysisTool,
    SummaryGenerationTool,
    TextAnalysisTool,
)

search_tool = SerperDevTool()
llm = LLM(model="watsonx/ibm/granite-4-h-small", num_retries=5)


@CrewBase
class CustomerServiceAnalyzer:
    """CustomerServiceAnalyzer crew"""

    agents_config = "config/agents.yaml"
    tasks_config = "config/tasks.yaml"

    @agent
    def transcript_analyzer(self) -> Agent:
        return Agent(
            config=self.agents_config["transcript_analyzer"],
            verbose=True,
            llm=llm,
            tools=[TextAnalysisTool(), SentimentAnalysisTool(), KeywordExtractionTool()],
        )

    @agent
    def quality_assurance_specialist(self) -> Agent:
        return Agent(
            config=self.agents_config["quality_assurance_specialist"],
            verbose=True,
            llm=llm,
            tools=[EvaluationCriteriaTool(), PerformanceMetricsTool(), search_tool],
        )

    @agent
    def report_generator(self) -> Agent:
        return Agent(
            config=self.agents_config["report_generator"],
            verbose=True,
            llm=llm,
            tools=[SummaryGenerationTool(), RecommendationTool()],
        )

    @task
    def transcript_analysis(self) -> Task:
        return Task(
            config=self.tasks_config["transcript_analysis"],
            tools=[TextAnalysisTool(), SentimentAnalysisTool(), KeywordExtractionTool()],
        )

    @task
    def quality_evaluation(self) -> Task:
        return Task(
            config=self.tasks_config["quality_evaluation"],
            tools=[EvaluationCriteriaTool(), PerformanceMetricsTool(), search_tool],
        )

    @task
    def report_generation(self) -> Task:
        return Task(
            config=self.tasks_config["report_generation"],
            tools=[SummaryGenerationTool(), RecommendationTool()],
            output_file="report.md",
        )

    @crew
    def crew(self) -> Crew:
        """Creates the CustomerServiceAnalyzer crew"""
        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
        )
