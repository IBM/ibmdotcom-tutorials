#!/usr/bin/env python3
"""
Script to check IBM links in tutorial files for broken URLs.
Uses only Python standard library.
"""

import re
from pathlib import Path
from collections import defaultdict
from urllib.parse import urlparse
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError
import time
import ssl

def extract_urls_from_file(file_path):
    """Extract all IBM-related URLs from a file."""
    urls = set()
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            # Find all URLs containing ibm
            pattern = r'https?://[^\s\)\"\'<>]*ibm[^\s\)\"\'<>]*'
            found_urls = re.findall(pattern, content)
            for url in found_urls:
                # Clean up URLs (remove trailing punctuation)
                url = re.sub(r'[,;:\.]$', '', url)
                urls.add(url)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
    return urls

def check_url(url, timeout=10):
    """Check if a URL is accessible."""
    try:
        # Create SSL context that doesn't verify certificates (for testing)
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        req = Request(url, headers=headers)
        
        with urlopen(req, timeout=timeout, context=ctx) as response:
            status_code = response.getcode()
            final_url = response.geturl()
            
            return {
                'status_code': status_code,
                'accessible': status_code < 400,
                'final_url': final_url,
                'redirected': final_url != url
            }
    except HTTPError as e:
        return {
            'status_code': e.code,
            'accessible': False,
            'error': f'HTTP Error {e.code}'
        }
    except URLError as e:
        return {
            'status_code': None,
            'accessible': False,
            'error': f'URL Error: {str(e.reason)}'
        }
    except Exception as e:
        return {
            'status_code': None,
            'accessible': False,
            'error': str(e)
        }

def main():
    """Main function to check all IBM links."""
    print("Scanning tutorial files for IBM links...\n")
    
    # Find all tutorial files
    tutorial_dirs = ['tutorials', 'docs/tutorials']
    all_urls = defaultdict(list)
    
    for tutorial_dir in tutorial_dirs:
        tutorial_path = Path(tutorial_dir)
        if not tutorial_path.exists():
            continue
            
        for file_path in tutorial_path.rglob('*'):
            if file_path.is_file() and file_path.suffix in ['.md', '.ipynb', '.py', '.txt', '.html']:
                urls = extract_urls_from_file(file_path)
                for url in urls:
                    all_urls[url].append(str(file_path))
    
    print(f"Found {len(all_urls)} unique IBM URLs across {sum(len(v) for v in all_urls.values())} references\n")
    
    # Check each unique URL
    results = {
        'accessible': [],
        'broken': [],
        'redirected': []
    }
    
    print("Checking URLs (this may take several minutes)...\n")
    
    for i, (url, files) in enumerate(all_urls.items(), 1):
        print(f"[{i}/{len(all_urls)}] Checking: {url[:80]}...")
        
        result = check_url(url)
        
        entry = {
            'url': url,
            'files': files,
            'result': result
        }
        
        if result['accessible']:
            if result.get('redirected'):
                results['redirected'].append(entry)
            else:
                results['accessible'].append(entry)
        else:
            results['broken'].append(entry)
        
        # Be nice to servers
        time.sleep(0.5)
    
    # Generate report
    print("\n" + "="*80)
    print("LINK CHECK REPORT")
    print("="*80 + "\n")
    
    print(f"✓ Accessible URLs: {len(results['accessible'])}")
    print(f"⚠ Redirected URLs: {len(results['redirected'])}")
    print(f"✗ Broken URLs: {len(results['broken'])}")
    print()
    
    if results['broken']:
        print("\n" + "-"*80)
        print("BROKEN LINKS (Need Attention)")
        print("-"*80 + "\n")
        
        for entry in results['broken']:
            print(f"URL: {entry['url']}")
            error_info = entry['result'].get('error', 'Unknown error')
            status = entry['result'].get('status_code', 'N/A')
            print(f"Status: {status} - {error_info}")
            print(f"Found in {len(entry['files'])} file(s):")
            for file in entry['files'][:3]:  # Show first 3 files
                print(f"  - {file}")
            if len(entry['files']) > 3:
                print(f"  ... and {len(entry['files']) - 3} more")
            print()
    
    if results['redirected']:
        print("\n" + "-"*80)
        print("REDIRECTED LINKS (Consider Updating)")
        print("-"*80 + "\n")
        
        for entry in results['redirected'][:10]:  # Show first 10
            print(f"Original: {entry['url']}")
            print(f"Redirects to: {entry['result']['final_url']}")
            print(f"Found in {len(entry['files'])} file(s)")
            print()
        
        if len(results['redirected']) > 10:
            print(f"... and {len(results['redirected']) - 10} more redirected URLs\n")
    
    # Save detailed report
    report_file = 'ibm_links_report.txt'
    with open(report_file, 'w') as f:
        f.write("IBM LINKS CHECK REPORT\n")
        f.write("="*80 + "\n\n")
        f.write(f"Total unique URLs checked: {len(all_urls)}\n")
        f.write(f"Accessible: {len(results['accessible'])}\n")
        f.write(f"Redirected: {len(results['redirected'])}\n")
        f.write(f"Broken: {len(results['broken'])}\n\n")
        
        if results['broken']:
            f.write("\nBROKEN LINKS:\n" + "-"*80 + "\n\n")
            for entry in results['broken']:
                f.write(f"URL: {entry['url']}\n")
                f.write(f"Status: {entry['result'].get('status_code', 'N/A')}\n")
                f.write(f"Error: {entry['result'].get('error', 'Unknown')}\n")
                f.write(f"Files ({len(entry['files'])}):\n")
                for file in entry['files']:
                    f.write(f"  - {file}\n")
                f.write("\n")
        
        if results['redirected']:
            f.write("\nREDIRECTED LINKS:\n" + "-"*80 + "\n\n")
            for entry in results['redirected']:
                f.write(f"Original: {entry['url']}\n")
                f.write(f"Redirects to: {entry['result']['final_url']}\n")
                f.write(f"Files ({len(entry['files'])}):\n")
                for file in entry['files']:
                    f.write(f"  - {file}\n")
                f.write("\n")
    
    print(f"\nDetailed report saved to: {report_file}")
    print("\nSummary:")
    print(f"  - {len(results['accessible'])} URLs are working correctly")
    print(f"  - {len(results['redirected'])} URLs redirect (consider updating)")
    print(f"  - {len(results['broken'])} URLs are broken and need fixing")

if __name__ == '__main__':
    main()

# Made with Bob
