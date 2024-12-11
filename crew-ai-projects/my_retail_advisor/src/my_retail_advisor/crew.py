from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from my_retail_advisor.tools.custom_tool import VisionTool

from crewai_tools import SerperDevTool

search_tool = SerperDevTool()


@CrewBase
class MyRetailAdvisor():
	"""MyRetailAdvisor crew"""

	agents_config = 'config/agents.yaml'
	tasks_config = 'config/tasks.yaml'

	@agent
	def store_manager(self) -> Agent:
		return Agent(
			config=self.agents_config['store_manager'],
			allow_delegation=False,
			verbose=True
		)

	@agent
	def market_analyst(self) -> Agent:
		return Agent(
			config=self.agents_config['market_analyst'],
			verbose=True,
			tools=[search_tool],
		)

	@task
	def analyze_shelf(self) -> Task:
		return Task(
			config=self.tasks_config['analyze_shelf'],
			tools=[VisionTool()],
		)

	@task
	def provide_recommendations(self) -> Task:
		return Task(
			config=self.tasks_config['provide_recommendations'],
		)
	
	@task
	def create_action_plan(self) -> Task:
		return Task(
			config=self.tasks_config['create_action_plan'],
			llm = "watsonx/ibm/granite-3-8b-instruct",
			output_file='report.md'
		)

	@crew
	def crew(self) -> Crew:
		"""Creates the MyRetailAdvisor crew"""
		return Crew(
			agents=self.agents, # Automatically created by the @agent decorator
			tasks=self.tasks, # Automatically created by the @task decorator
			process=Process.sequential,
			verbose=True,
		)
