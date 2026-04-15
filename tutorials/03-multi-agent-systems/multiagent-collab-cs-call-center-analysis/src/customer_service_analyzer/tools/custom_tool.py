from crewai.tools import BaseTool
from customer_service_analyzer.tools.tool_helper import Helper

class TextAnalysisTool(BaseTool):
    name: str = "Text Analysis Tool"
    description: str = "Analyzes the text of the transcripts to extract key information and insights."

    def _run(self, transcript: str = None) -> str:
        # Read the content of the transcript.txt file
        transcript_path = './data/transcript.txt'
        with open(transcript_path, 'r') as file:
            transcript_content = file.read()
        
        # Analyze the transcript content
        insights = Helper.analyze_text(transcript_content)
        return insights

class SentimentAnalysisTool(BaseTool):
    name: str = "Sentiment Analysis Tool"
    description: str = "Determines the sentiment of the interactions in the transcripts."

    def _run(self, transcript: str) -> str:
        # Simulating sentiment analysis
        sentiment = Helper.analyze_sentiment(transcript)
        return sentiment

class KeywordExtractionTool(BaseTool):
    name: str = "Keyword Extraction Tool"
    description: str = "Identifies key themes and topics in the transcripts."

    def _run(self, transcript: str) -> str:
        # Simulating keyword extraction
        keywords = Helper.extract_keywords(transcript)
        return keywords

class EvaluationCriteriaTool(BaseTool):
    name: str = "Evaluation Criteria Tool"
    description: str = "Applies predefined criteria and industry standards to assess the quality of customer service interactions."

    def _run(self, transcript: str) -> str:
        # Simulating quality evaluation
        evaluation = Helper.evaluate_quality(transcript)
        return evaluation

class PerformanceMetricsTool(BaseTool):
    name: str = "Performance Metrics Tool"
    description: str = "Measures and evaluates agent performance based on various metrics."

    def _run(self, transcript: str) -> str:
        # Simulating performance metrics calculation
        metrics = Helper.calculate_metrics(transcript)
        return metrics

class SummaryGenerationTool(BaseTool):
    name: str = "Summary Generation Tool"
    description: str = "Compiles summaries of the findings from the transcript and quality assurance analysis."

    def _run(self, insights: str) -> str:
        # Simulating summary generation
        summary = Helper.generate_summary(insights)
        return summary

class RecommendationTool(BaseTool):
    name: str = "Recommendation Tool"
    description: str = "Generates actionable recommendations based on the analysis of the transcripts and quality assurance analysis."

    def _run(self, insights: str) -> str:
        # Simulating recommendation generation
        recommendations = Helper.generate_recommendations(insights)
        return recommendations