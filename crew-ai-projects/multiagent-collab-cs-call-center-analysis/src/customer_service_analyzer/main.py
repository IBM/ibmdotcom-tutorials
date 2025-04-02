#!/usr/bin/env python
import sys
import warnings

from customer_service_analyzer.crew import CustomerServiceAnalyzer

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

# This main file is intended to be a way for you to run your
# crew locally, so refrain from adding unnecessary logic into this file.
# Replace with inputs you want to test with, it will automatically
# interpolate any tasks and agents information

def run():
    """
    Run the crew.
    """
    # Read the content of the transcripts.txt file
    transcript_path = './data/transcript.txt'
    with open(transcript_path, 'r') as file:
        transcript_content = file.read()

    inputs = {
        'transcript': transcript_content,
    }
    cs_crew = CustomerServiceAnalyzer().crew()
    cs_crew.kickoff(inputs=inputs)

    print(cs_crew.usage_metrics)

if __name__ == "__main__":
    run()