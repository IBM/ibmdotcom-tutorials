import os
import glob
import json
import re

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

def path_to_url(filepath, base_url=""):
    """Convert file path to URL"""
    # Remove docs/ prefix and .ipynb extension
    url_path = filepath.replace("docs/", "").replace("\\", "/")
    
    # Convert .ipynb to / for clean URLs
    if url_path.endswith('.ipynb'):
        url_path = url_path[:-6]  # Remove .ipynb
        if not url_path.endswith('/'):
            url_path += '/'
    
    # Construct full URL
    if base_url:
        return f"{base_url.rstrip('/')}/{url_path}".rstrip('/')
    else:
        return f"/{url_path}".rstrip('/') or '/'

def on_post_build(config):
    tutorials = []
    
    # Get base URL from config if available
    base_url = getattr(config, 'site_url', '') or ''
    
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
                
            # Generate full URL
            url = path_to_url(filepath, base_url)
            
            tutorial_entry = {
                "url": url,
                "title": title
            }
            
            # Add author if found
            if author:
                tutorial_entry["author"] = author
            
            tutorials.append(tutorial_entry)
            
        except (json.JSONDecodeError, FileNotFoundError, KeyError) as e:
            print(f"Error processing {filepath}: {e}")
            continue
    
    # Sort by title for consistency
    tutorials.sort(key=lambda x: x['title'])
    
    with open("docs_index.json", "w", encoding="utf-8") as f:
        json.dump(tutorials, f, ensure_ascii=False, indent=2)
