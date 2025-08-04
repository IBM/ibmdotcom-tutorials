import os
import glob
import json
import re
from datetime import datetime

def extract_title_from_notebook(notebook_data):
    """Extract title from Jupyter notebook - looks in metadata or first markdown cell"""
    
    # Try to get title from notebook metadata
    if 'metadata' in notebook_data:
        metadata = notebook_data['metadata']
        if 'title' in metadata:
            return metadata['title']
    
    # Look for title in the first markdown cell
    if 'cells' in notebook_data:
        for cell in notebook_data['cells']:
            if cell.get('cell_type') == 'markdown' and 'source' in cell:
                # Join source lines if it's a list
                source = cell['source']
                if isinstance(source, list):
                    source = ''.join(source)
                
                # Look for first H1 heading
                lines = source.split('\n')
                for line in lines:
                    line = line.strip()
                    if line.startswith('# '):
                        return line[2:].strip()
                    # Also check for title in first few lines
                    if line and not line.startswith('#') and len(line) > 10:
                        # If it's a substantial first line, use it as fallback
                        return line.strip()
    
    return None

def extract_author_from_notebook(notebook_data):
    """Extract author from Jupyter notebook - looks in metadata or first markdown cell"""
    
    # Try to get author from notebook metadata
    if 'metadata' in notebook_data:
        metadata = notebook_data['metadata']
        if 'author' in metadata:
            return metadata['author']
        if 'authors' in metadata:
            authors = metadata['authors']
            if isinstance(authors, list):
                return ', '.join(authors)
            return authors
    
    # Look for author in the first few markdown cells
    if 'cells' in notebook_data:
        for i, cell in enumerate(notebook_data['cells'][:3]):  # Check first 3 cells
            if cell.get('cell_type') == 'markdown' and 'source' in cell:
                # Join source lines if it's a list
                source = cell['source']
                if isinstance(source, list):
                    source = ''.join(source)
                
                # Look for author patterns
                lines = source.split('\n')
                for line in lines:
                    line = line.strip()
                    # Common author patterns
                    author_patterns = [
                        r'^(?:\*\*)?Authors?(?:\*\*)?\s*:\s*(.+)$',
                        r'^(?:\*\*)?By(?:\*\*)?\s*:\s*(.+)$',
                        r'^(?:\*\*)?Written by(?:\*\*)?\s*:\s*(.+)$',
                        r'^(?:\*\*)?Created by(?:\*\*)?\s*:\s*(.+)$',
                    ]
                    
                    for pattern in author_patterns:
                        match = re.match(pattern, line, re.IGNORECASE)
                        if match:
                            author = match.group(1).strip()
                            # Clean up markdown formatting
                            author = re.sub(r'\*\*([^*]+)\*\*', r'\1', author)  # Remove bold
                            author = re.sub(r'\*([^*]+)\*', r'\1', author)      # Remove italic
                            return author
    
    return None

def extract_date_from_notebook(notebook_data):
    """Extract date from Jupyter notebook - looks in metadata or first markdown cell"""
    
    # Try to get date from notebook metadata
    if 'metadata' in notebook_data:
        metadata = notebook_data['metadata']
        # Check common date fields in metadata
        date_fields = ['date', 'created', 'created_date', 'last_modified', 'updated']
        for field in date_fields:
            if field in metadata:
                date_value = metadata[field]
                if isinstance(date_value, str):
                    return parse_date_string(date_value)
    
    # Look for date in the first few markdown cells
    if 'cells' in notebook_data:
        for i, cell in enumerate(notebook_data['cells'][:3]):  # Check first 3 cells
            if cell.get('cell_type') == 'markdown' and 'source' in cell:
                # Join source lines if it's a list
                source = cell['source']
                if isinstance(source, list):
                    source = ''.join(source)
                
                # Look for date patterns
                lines = source.split('\n')
                for line in lines:
                    line = line.strip()
                    # Common date patterns
                    date_patterns = [
                        r'^(?:\*\*)?Date(?:\*\*)?\s*:\s*(.+)$',
                        r'^(?:\*\*)?Created(?:\*\*)?\s*:\s*(.+)$',
                        r'^(?:\*\*)?Last updated(?:\*\*)?\s*:\s*(.+)$',
                        r'^(?:\*\*)?Updated(?:\*\*)?\s*:\s*(.+)$',
                        r'^(?:\*\*)?Published(?:\*\*)?\s*:\s*(.+)$',
                    ]
                    
                    for pattern in date_patterns:
                        match = re.match(pattern, line, re.IGNORECASE)
                        if match:
                            date_str = match.group(1).strip()
                            # Clean up markdown formatting
                            date_str = re.sub(r'\*\*([^*]+)\*\*', r'\1', date_str)  # Remove bold
                            date_str = re.sub(r'\*([^*]+)\*', r'\1', date_str)      # Remove italic
                            parsed_date = parse_date_string(date_str)
                            if parsed_date:
                                return parsed_date
    
    return None

def parse_date_string(date_str):
    """Parse various date string formats and return ISO format"""
    if not date_str:
        return None
    
    # Common date formats to try
    date_formats = [
        '%Y-%m-%d',           # 2024-01-15
        '%m/%d/%Y',           # 01/15/2024
        '%d/%m/%Y',           # 15/01/2024
        '%Y-%m-%d %H:%M:%S',  # 2024-01-15 10:30:00
        '%B %d, %Y',          # January 15, 2024
        '%b %d, %Y',          # Jan 15, 2024
        '%d %B %Y',           # 15 January 2024
        '%d %b %Y',           # 15 Jan 2024
    ]
    
    for fmt in date_formats:
        try:
            parsed = datetime.strptime(date_str.strip(), fmt)
            return parsed.strftime('%Y-%m-%d')  # Return in consistent ISO format
        except ValueError:
            continue
    
    return None

def get_file_creation_date(filepath):
    """Get file creation/modification date as fallback"""
    try:
        # Use modification time as a fallback
        mtime = os.path.getmtime(filepath)
        return datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')
    except:
        return None

def path_to_url(filepath, base_url=""):
    """Convert file path to URL"""
    # Remove docs/ prefix and .ipynb extension
    url_path = filepath.replace("docs/", "").replace("\\", "/")
    
    # Convert .ipynb to / for clean URLs
    if url_path.endswith('.ipynb'):
        url_path = url_path[:-6]  # Remove .ipynba
        if not url_path.endswith('/'):
            url_path += '/'
    
    # Construct full URL
    if base_url:
        return f"{base_url.rstrip('/')}/{url_path}".rstrip('/')
    else:
        return f"/{url_path}".rstrip('/') or '/'

def on_post_build(config):
    tutorials = []
    
    # Always use GitHub as the base URL
    base_url = 'https://ibm.github.io/ibmdotcom-tutorials'
    
    # Only look for .ipynb files in generative-ai directories
    for filepath in glob.glob("docs/tutorials/generative-ai/**/*.ipynb", recursive=True):
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                notebook_data = json.load(f)
            
            # Extract title from notebook
            title = extract_title_from_notebook(notebook_data)
            
            # Skip if no title found
            if not title:
                continue
            
            # Extract author from notebook
            author = extract_author_from_notebook(notebook_data)
            
            # Extract date from notebook
            date = extract_date_from_notebook(notebook_data)
            # Use file modification date as fallback if no date found in notebook
            if not date:
                date = get_file_creation_date(filepath)
                
            # Generate full URL
            url = path_to_url(filepath, base_url)
            
            tutorial_entry = {
                "url": url,
                "title": title
            }
            
            # Add author if found
            if author:
                tutorial_entry["author"] = author
            
            # Add date if found
            if date:
                tutorial_entry["date"] = date
            
            tutorials.append(tutorial_entry)
            
        except (json.JSONDecodeError, FileNotFoundError, KeyError) as e:
            print(f"Error processing {filepath}: {e}")
            continue
    
    # Sort by date (newest first), then by title if no date
    # Entries without dates will appear at the end
    tutorials.sort(key=lambda x: (x.get('date', '0000-00-00'), x['title']), reverse=True)
    
    # Alternative sorting options (replace the line above with one of these):
    
    # Option 1: Oldest first, then by title
    # tutorials.sort(key=lambda x: (x.get('date', '9999-99-99'), x['title']))
    
    # Option 2: Alphabetical by title only (original behavior)
    # tutorials.sort(key=lambda x: x['title'])
    
    # Option 3: By author, then date, then title
    # tutorials.sort(key=lambda x: (x.get('author', 'ZZZ'), x.get('date', '0000-00-00'), x['title']))
    
    # Option 4: Newest first, but undated entries at the beginning
    # tutorials.sort(key=lambda x: (x.get('date', '9999-99-99'), x['title']), reverse=True)
    
    with open("docs_index.json", "w", encoding="utf-8") as f:
        json.dump(tutorials, f, ensure_ascii=False, indent=2)
