import numpy as np
import csv
import os, types
import pandas as pd
import ibm_boto3
from langchain_core.tools import tool
from datetime import datetime
from botocore.client import Config
from utils import load_config

stream = False
config = load_config()
dep_config = config["deployment"]

COS_ENDPOINT = ""       #find in your COS bucket configuration
COS_INSTANCE_CRN = ""   #find in your COS bucket configuration
BUCKET_NAME = ""        #find in your COS bucket configuration
CSV_FILE_NAME = "filename.csv" #you can use the provided tickets.csv sample file 

cos = ibm_boto3.client(
    "s3",
    ibm_api_key_id=dep_config["watsonx_apikey"],
    ibm_service_instance_id=COS_INSTANCE_CRN,
    config=Config(signature_version="oauth"),
    endpoint_url=COS_ENDPOINT,
)

@tool 
def find_tickets() -> list:
    """Returns a list of of all tickets."""
    try:
        response = cos.get_object(Bucket=BUCKET_NAME, Key=CSV_FILE_NAME)
        csv_data = pd.read_csv(response['Body']) 
        print("Ticket file loaded successfully:")
        return csv_data
    except Exception as e:
        print(f"Error loading file from COS: {e}")
        return None

@tool
def get_todays_date():
    """Returns today's date in MM-DD-YYYY format."""
    date = datetime.now().strftime("%m-%d-%Y")
    return date

@tool 
def create_ticket(issue: str, urgency:str):
    """Creates a tickets for a customer issue. Request a detailed explanation of the customer issue and urgency level before creating a ticket.
    
    Args:
        issue (str): A description of the issue.
        urgency (str): A category value for the level of urgency. Can be "low", "medium", or "high".
    
    Returns:
        The new ticket.
    """
    try:
        # retrieve the existing item to reload the contents
        response = cos.get_object(Bucket=BUCKET_NAME, Key=CSV_FILE_NAME)
        existing_body_df = pd.read_csv(response['Body'])
        new_ticket = {"issue": issue, "date_added":datetime.now().strftime("%m-%d-%Y"), "urgency":urgency, "status":"open"}
        # Add a new row (i.e. ticket) using loc[]
        existing_body_df.loc[len(existing_body_df)] = new_ticket

        cos.put_object(Bucket=BUCKET_NAME, Key=CSV_FILE_NAME, Body=existing_body_df.to_json())
        return "New ticket successfully created!"
    except Exception as e:
        print("Unable to create new ticket. Please try again.")

