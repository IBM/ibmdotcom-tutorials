# Simple MCP server that exposes a single tool to search IBM tutorials.
# How to run:
# 1) Install dependencies: pip install fastmcp requests
# 2) Start the server using an MCP client with the command: fastmcp run <YOUR PATH>/server.py
 
from fastmcp import FastMCP
import requests

# Source of the tutorials index 
DOCS_INDEX_URL = "https://raw.githubusercontent.com/IBM/ibmdotcom-tutorials/refs/heads/main/docs_index.json"

mcp = FastMCP("IBM Tutorials")
    
@mcp.tool
def search_ibmtutorials(query: str) -> str:
    """
    Search for tutorials on GitHub by downloading a JSON file from a GitHub repo and searching the payload for any relevant results and the respective details
    
    Args:
        query: The search term to look for in tutorial titles and URLs
    
    Returns:
        A formatted list of relevant tutorial results
    """
    try:
        # Download the JSON file from the GitHub repo
        response = requests.get(DOCS_INDEX_URL, timeout=10)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        # Parse the JSON data
        tutorials = response.json()
        
        # Search for relevant tutorials (case-insensitive)
        query_lower = query.lower()
        relevant_tutorials = []
        
        for tutorial in tutorials:
            # Search in title and URL
            title = tutorial.get('title', '').lower()
            url_path = tutorial.get('url', '').lower()
            
            if query_lower in title or query_lower in url_path:
                relevant_tutorials.append(tutorial)
        
        # Format and return results
        if not relevant_tutorials:
            return f"No IBM tutorials found matching '{query}'"
        
        # Format the results
        result_lines = [f"Found {len(relevant_tutorials)} tutorial(s) matching '{query}':\n"]
        
        for i, tutorial in enumerate(relevant_tutorials, 1):
            title = tutorial.get('title', 'No title')
            tutorial_url = tutorial.get('url', 'No URL')
            date = tutorial.get('date', 'No date')
            author = tutorial.get('author', '')
            
            result_lines.append(f"{i}. **{title}**")
            result_lines.append(f"   URL: {tutorial_url}")
            result_lines.append(f"   Date: {date}")
            if author:
                result_lines.append(f"   Author: {author}")
            result_lines.append("")  # Empty line for spacing
        
        return "\n".join(result_lines)
        
    except requests.exceptions.RequestException as e:
        return f"Error fetching tutorials from GitHub: {str(e)}"
    except ValueError as e:
        return f"Error parsing JSON data: {str(e)}"
    except Exception as e:
        return f"Error searching IBM tutorials: {str(e)}"

if __name__ == "__main__":
    mcp.run()