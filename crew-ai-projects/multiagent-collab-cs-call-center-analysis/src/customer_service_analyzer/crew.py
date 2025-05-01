from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from customer_service_analyzer.tools.custom_tool import (
    TextAnalysisTool, SentimentAnalysisTool, KeywordExtractionTool,
    EvaluationCriteriaTool, PerformanceMetricsTool, SummaryGenerationTool, RecommendationTool
)
from crewai_tools import SerperDevTool

search_tool = SerperDevTool()

@CrewBase
class CustomerServiceAnalyzer():
    """CustomerServiceAnalyzer crew"""

    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    @agent
    def transcript_analyzer(self) -> Agent:
        return Agent(
            config=self.agents_config['transcript_analyzer'],
            verbose=True,
            tools=[TextAnalysisTool(), SentimentAnalysisTool(), KeywordExtractionTool()],
        )

    @agent
    def quality_assurance_specialist(self) -> Agent:
        return Agent(
            config=self.agents_config['quality_assurance_specialist'],
            verbose=True,
            tools=[EvaluationCriteriaTool(), PerformanceMetricsTool(), search_tool],
        )

    @agent
    def report_generator(self) -> Agent:
        return Agent(
            config=self.agents_config['report_generator'],
            verbose=True,
            tools=[SummaryGenerationTool(), RecommendationTool()],
        )

    @task
    def transcript_analysis(self) -> Task:
        return Task(
            config=self.tasks_config['transcript_analysis'],
            tools=[TextAnalysisTool(), SentimentAnalysisTool(), KeywordExtractionTool()],
        )

    @task
    def quality_evaluation(self) -> Task:
        return Task(
            config=self.tasks_config['quality_evaluation'],
            tools=[EvaluationCriteriaTool(), PerformanceMetricsTool()],
        )

    @task
    def report_generation(self) -> Task:
        return Task(
            config=self.tasks_config['report_generation'],
            tools=[SummaryGenerationTool(), RecommendationTool()],
            output_file='report.md'
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