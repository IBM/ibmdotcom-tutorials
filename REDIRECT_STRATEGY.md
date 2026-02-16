# URL Redirect Strategy for Repository Reorganization

**Purpose**: Ensure external links to tutorials remain functional after reorganization  
**Date**: 2026-02-16  
**Status**: Implementation Ready

---

## Overview

This document outlines the strategy for handling URL redirects during and after the repository reorganization to prevent broken links from external sources (ibm.com, blog posts, documentation, etc.).

---

## Risk Assessment

### Potential Impact
- **External Links**: Links from ibm.com, blog posts, social media, documentation
- **Bookmarks**: User bookmarks to specific tutorials
- **Search Engines**: Indexed URLs in search results
- **Internal References**: Cross-references between tutorials

### Affected URLs
```
Old Pattern: /generative-ai/tutorial-name.ipynb
New Pattern: /tutorials/generative-ai/category/tutorial-name.ipynb

Old Pattern: /ai-stylist/
New Pattern: /projects/ai-stylist/

Old Pattern: /docs/tutorials/projects/project-name
New Pattern: /projects/project-name
```

---

## Implementation Strategy

### 1. MkDocs Redirects Plugin

Install and configure the `mkdocs-redirects` plugin to handle URL redirects automatically.

#### Installation

```bash
# Add to requirements-dev.txt
echo "mkdocs-redirects>=1.2.0" >> requirements-dev.txt

# Install
pip install mkdocs-redirects
```

#### Configuration in mkdocs.yml

```yaml
plugins:
  - search
  - mkdocs-jupyter
  - social
  - redirects:
      redirect_maps:
        # Generative AI tutorials
        'tutorials/generative-ai/langchain-rag.ipynb': 'tutorials/generative-ai/rag/langchain-rag.ipynb'
        'tutorials/generative-ai/llamaindex_rag.ipynb': 'tutorials/generative-ai/rag/llamaindex-rag.ipynb'
        'tutorials/generative-ai/agentic-rag.ipynb': 'tutorials/generative-ai/rag/agentic-rag.ipynb'
        'tutorials/generative-ai/graphrag.ipynb': 'tutorials/generative-ai/rag/graph-rag.ipynb'
        'tutorials/generative-ai/correctiverag.ipynb': 'tutorials/generative-ai/rag/corrective-rag.ipynb'
        'tutorials/generative-ai/self_rag.ipynb': 'tutorials/generative-ai/rag/self-rag.ipynb'
        
        # Agent tutorials
        'tutorials/generative-ai/llm-agent-orchestration.ipynb': 'tutorials/generative-ai/agents/llm-agent-orchestration.ipynb'
        'tutorials/generative-ai/human-in-the-loop-agent.ipynb': 'tutorials/generative-ai/agents/human-in-the-loop-agent.ipynb'
        
        # Granite tutorials
        'tutorials/generative-ai/granite-speech-3.3-8b.ipynb': 'tutorials/generative-ai/granite/granite-speech-3.3-8b.ipynb'
        'tutorials/generative-ai/function-calling.ipynb': 'tutorials/generative-ai/granite/function-calling.ipynb'
        
        # Multimodal tutorials
        'tutorials/generative-ai/multimodal-ai.ipynb': 'tutorials/generative-ai/multimodal/multimodal-ai.ipynb'
        'tutorials/generative-ai/pixtral-multimodal-ai.ipynb': 'tutorials/generative-ai/multimodal/pixtral-multimodal-ai.ipynb'
        
        # Machine learning tutorials
        'tutorials/generative-ai/text-classification-pytorch.ipynb': 'tutorials/machine-learning/nlp/text-classification-pytorch.ipynb'
        'tutorials/generative-ai/python_text_summarization.ipynb': 'tutorials/machine-learning/nlp/text-summarization.ipynb'
        
        # Prompt engineering tutorials
        'tutorials/generative-ai/prompt-chaining-langchain.ipynb': 'tutorials/prompt-engineering/prompt-chaining-langchain.ipynb'
        'tutorials/generative-ai/prompt-tuning.ipynb': 'tutorials/prompt-engineering/prompt-tuning.ipynb'
        
        # Projects
        'ai-stylist/': 'projects/ai-stylist/'
        'sql-agent-app/': 'projects/sql-agent-app/'
        'ttrpgai/': 'projects/ttrpg-ai/'
        'tutorials/projects/ai-stylist-tutorial.ipynb': 'projects/ai-stylist/ai-stylist-tutorial.ipynb'
        
        # Root level content moved to tutorials
        'generative-ai/': 'tutorials/generative-ai/'
        'machine-learning/': 'tutorials/machine-learning/'
```

---

### 2. GitHub Pages Redirect Files

For paths not handled by MkDocs, create HTML redirect files.

#### Create Redirect Template

```bash
cat > scripts/create-redirect.sh << 'EOF'
#!/bin/bash
# Create HTML redirect file
# Usage: ./create-redirect.sh old-path new-path

OLD_PATH=$1
NEW_PATH=$2

mkdir -p "$(dirname "$OLD_PATH")"

cat > "$OLD_PATH/index.html" << HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <link rel="canonical" href="/$NEW_PATH">
    <meta http-equiv="refresh" content="0; url=/$NEW_PATH">
    <script>window.location.replace("/$NEW_PATH");</script>
</head>
<body>
    <h1>Content Moved</h1>
    <p>This content has moved to <a href="/$NEW_PATH">$NEW_PATH</a>.</p>
    <p>You will be redirected automatically in a moment...</p>
</body>
</html>
HTML

echo "✓ Created redirect: $OLD_PATH -> $NEW_PATH"
EOF

chmod +x scripts/create-redirect.sh
```

#### Generate Redirect Files

```bash
# Create redirects for major moved directories
./scripts/create-redirect.sh "generative-ai" "tutorials/generative-ai"
./scripts/create-redirect.sh "ai-stylist" "projects/ai-stylist"
./scripts/create-redirect.sh "sql-agent-app" "projects/sql-agent-app"
./scripts/create-redirect.sh "ttrpgai" "projects/ttrpg-ai"
```

---

### 3. Git Symlinks (Temporary)

Create symbolic links for backward compatibility during transition period.

```bash
# Create symlinks for major directories (temporary - 3 months)
ln -s tutorials/generative-ai generative-ai-legacy
ln -s projects/ai-stylist ai-stylist-legacy
ln -s projects/sql-agent-app sql-agent-app-legacy

# Add to .gitignore after transition period
echo "*-legacy" >> .gitignore
```

**Note**: Remove symlinks after 3-month transition period.

---

### 4. Redirect Mapping Documentation

Create comprehensive redirect mapping for reference.

```bash
cat > REDIRECT_MAPPING.md << 'EOF'
# URL Redirect Mapping

This document maps old URLs to new URLs after repository reorganization.

## Tutorials

### Generative AI - RAG
| Old Path | New Path |
|----------|----------|
| `/generative-ai/langchain-rag.ipynb` | `/tutorials/generative-ai/rag/langchain-rag.ipynb` |
| `/generative-ai/llamaindex_rag.ipynb` | `/tutorials/generative-ai/rag/llamaindex-rag.ipynb` |
| `/generative-ai/agentic-rag.ipynb` | `/tutorials/generative-ai/rag/agentic-rag.ipynb` |
| `/generative-ai/graphrag.ipynb` | `/tutorials/generative-ai/rag/graph-rag.ipynb` |
| `/generative-ai/correctiverag.ipynb` | `/tutorials/generative-ai/rag/corrective-rag.ipynb` |
| `/generative-ai/self_rag.ipynb` | `/tutorials/generative-ai/rag/self-rag.ipynb` |

### Generative AI - Agents
| Old Path | New Path |
|----------|----------|
| `/generative-ai/llm-agent-orchestration.ipynb` | `/tutorials/generative-ai/agents/llm-agent-orchestration.ipynb` |
| `/generative-ai/human-in-the-loop-agent.ipynb` | `/tutorials/generative-ai/agents/human-in-the-loop-agent.ipynb` |

### Generative AI - Granite
| Old Path | New Path |
|----------|----------|
| `/generative-ai/granite-speech-3.3-8b.ipynb` | `/tutorials/generative-ai/granite/granite-speech-3.3-8b.ipynb` |
| `/generative-ai/function-calling.ipynb` | `/tutorials/generative-ai/granite/function-calling.ipynb` |

### Machine Learning
| Old Path | New Path |
|----------|----------|
| `/generative-ai/text-classification-pytorch.ipynb` | `/tutorials/machine-learning/nlp/text-classification-pytorch.ipynb` |
| `/machine-learning/natural-language-processing/text-classification-pytorch.ipynb` | `/tutorials/machine-learning/nlp/text-classification-pytorch.ipynb` |

### Prompt Engineering
| Old Path | New Path |
|----------|----------|
| `/generative-ai/prompt-chaining-langchain.ipynb` | `/tutorials/prompt-engineering/prompt-chaining-langchain.ipynb` |
| `/generative-ai/prompt-tuning.ipynb` | `/tutorials/prompt-engineering/prompt-tuning.ipynb` |

## Projects

| Old Path | New Path |
|----------|----------|
| `/ai-stylist/` | `/projects/ai-stylist/` |
| `/sql-agent-app/` | `/projects/sql-agent-app/` |
| `/ttrpgai/` | `/projects/ttrpg-ai/` |
| `/tutorials/projects/ai-stylist-tutorial.ipynb` | `/projects/ai-stylist/ai-stylist-tutorial.ipynb` |

## Directory-Level Redirects

| Old Path | New Path |
|----------|----------|
| `/generative-ai/` | `/tutorials/generative-ai/` |
| `/machine-learning/` | `/tutorials/machine-learning/` |
| `/docs/tutorials/projects/` | `/projects/` |

EOF
```

---

### 5. External Communication Plan

#### A. IBM.com Team Coordination

**Action Items**:
1. Identify all ibm.com pages linking to tutorials
2. Provide redirect mapping to ibm.com team
3. Request URL updates in ibm.com content
4. Set timeline for updates (within 2 weeks of reorganization)

**Communication Template**:
```
Subject: GitHub Tutorial Repository Reorganization - URL Updates Required

Dear IBM.com Team,

We are reorganizing the ibmdotcom-tutorials GitHub repository to improve 
structure and maintainability. This will affect URLs referenced on ibm.com.

Timeline:
- Reorganization: [Date]
- Redirects Active: [Date]
- Requested URL Updates: Within 2 weeks

Redirect Mapping: See attached REDIRECT_MAPPING.md

Redirects will be maintained for 6 months, but we recommend updating 
URLs as soon as possible.

Contact: [Name/Email]
```

#### B. User Communication

**Announcement Locations**:
- GitHub repository README
- GitHub Discussions
- Repository release notes
- Documentation homepage

**Announcement Template**:
```markdown
# 📢 Repository Reorganization Notice

**Date**: [Date]

We've reorganized the repository structure to improve navigation and 
maintainability. 

## What Changed
- Tutorials moved to `/tutorials/` directory with better categorization
- Projects consolidated in `/projects/` directory
- Consistent naming conventions throughout

## Impact on You
- **Existing bookmarks**: Automatic redirects are in place
- **External links**: Will redirect automatically for 6 months
- **New content**: Follow new structure in documentation

## More Information
- [Reorganization Plan](REORGANIZATION_PLAN.md)
- [Redirect Mapping](REDIRECT_MAPPING.md)
- [Questions?](https://github.com/IBM/ibmdotcom-tutorials/discussions)
```

---

### 6. Monitoring and Validation

#### A. Redirect Testing Script

```bash
cat > scripts/test-redirects.sh << 'EOF'
#!/bin/bash
# Test that redirects work correctly

echo "Testing redirects..."

# Test function
test_redirect() {
    local old_url=$1
    local expected_new_url=$2
    
    # Use curl to follow redirects
    actual_url=$(curl -Ls -o /dev/null -w %{url_effective} "$old_url")
    
    if [[ "$actual_url" == *"$expected_new_url"* ]]; then
        echo "✓ $old_url -> $expected_new_url"
        return 0
    else
        echo "✗ $old_url -> Expected: $expected_new_url, Got: $actual_url"
        return 1
    fi
}

# Test major redirects
BASE_URL="https://ibm.github.io/ibmdotcom-tutorials"

test_redirect "$BASE_URL/generative-ai/" "$BASE_URL/tutorials/generative-ai/"
test_redirect "$BASE_URL/ai-stylist/" "$BASE_URL/projects/ai-stylist/"
test_redirect "$BASE_URL/sql-agent-app/" "$BASE_URL/projects/sql-agent-app/"

echo "Redirect testing complete"
EOF

chmod +x scripts/test-redirects.sh
```

#### B. Analytics Monitoring

**Metrics to Track**:
- 404 errors on old URLs
- Redirect success rate
- User feedback on broken links
- Search engine indexing updates

**Tools**:
- GitHub Pages analytics (if available)
- Google Search Console
- Custom 404 page with reporting

#### C. Custom 404 Page

```html
<!-- docs/404.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Page Not Found - IBM Tutorials</title>
    <style>
        body {
            font-family: 'IBM Plex Sans', sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .search-box {
            margin: 20px 0;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>Page Not Found</h1>
    <p>The page you're looking for might have moved during our recent reorganization.</p>
    
    <h2>Try These Options:</h2>
    <ul>
        <li><a href="/">Return to Homepage</a></li>
        <li><a href="/tutorials-list/">Browse All Tutorials</a></li>
        <li><a href="/projects-list/">Browse All Projects</a></li>
        <li>Use the search box below</li>
    </ul>
    
    <div class="search-box">
        <input type="text" id="search" placeholder="Search tutorials...">
    </div>
    
    <h2>Recent Changes</h2>
    <p>We recently reorganized the repository. See the <a href="/REDIRECT_MAPPING/">redirect mapping</a> for URL changes.</p>
    
    <h2>Need Help?</h2>
    <p><a href="https://github.com/IBM/ibmdotcom-tutorials/discussions">Ask in GitHub Discussions</a></p>
    
    <script>
        // Log 404 for monitoring (if analytics available)
        if (window.gtag) {
            gtag('event', 'page_not_found', {
                'page_path': window.location.pathname
            });
        }
    </script>
</body>
</html>
```

---

### 7. Transition Timeline

| Phase | Duration | Actions |
|-------|----------|---------|
| **Pre-Launch** | Week before | - Set up redirects<br>- Test all redirects<br>- Notify IBM.com team |
| **Launch** | Day 1 | - Deploy reorganization<br>- Activate redirects<br>- Post announcements |
| **Week 1** | Days 1-7 | - Monitor 404 errors<br>- Fix any broken redirects<br>- Respond to user feedback |
| **Month 1** | Days 1-30 | - Track redirect usage<br>- Update external references<br>- Gather feedback |
| **Months 2-3** | Days 31-90 | - Continue monitoring<br>- Coordinate ibm.com updates<br>- Update search engines |
| **Month 6** | Day 180 | - Review redirect necessity<br>- Plan for permanent redirects<br>- Remove temporary symlinks |

---

### 8. Permanent vs Temporary Redirects

#### Permanent Redirects (Keep Indefinitely)
- Major directory moves (`/generative-ai/` → `/tutorials/generative-ai/`)
- Project relocations (`/ai-stylist/` → `/projects/ai-stylist/`)
- Frequently referenced tutorials

#### Temporary Redirects (6 months)
- Individual file renames
- Minor reorganizations
- Experimental content moves

#### Configuration

```yaml
# In mkdocs.yml
plugins:
  - redirects:
      redirect_maps:
        # Permanent redirects (HTTP 301)
        'generative-ai/': 'tutorials/generative-ai/'
        'ai-stylist/': 'projects/ai-stylist/'
        
        # Temporary redirects (HTTP 302) - review after 6 months
        'tutorials/generative-ai/old-name.ipynb': 'tutorials/generative-ai/new-name.ipynb'
```

---

## Implementation Checklist

### Pre-Implementation
- [ ] Install `mkdocs-redirects` plugin
- [ ] Create redirect mapping in `mkdocs.yml`
- [ ] Generate HTML redirect files for non-MkDocs paths
- [ ] Create `REDIRECT_MAPPING.md` documentation
- [ ] Set up redirect testing script
- [ ] Create custom 404 page
- [ ] Prepare communication templates

### During Implementation
- [ ] Deploy redirects with reorganization
- [ ] Test all major redirect paths
- [ ] Post user announcements
- [ ] Notify IBM.com team
- [ ] Monitor for 404 errors

### Post-Implementation
- [ ] Track redirect usage for 1 week
- [ ] Fix any broken redirects immediately
- [ ] Coordinate with IBM.com for URL updates
- [ ] Update search engine listings
- [ ] Review and adjust after 1 month
- [ ] Plan for permanent redirect maintenance

---

## Success Metrics

- ✅ Zero 404 errors on previously working URLs
- ✅ All external links redirect successfully
- ✅ IBM.com URLs updated within 2 weeks
- ✅ Search engine results updated within 1 month
- ✅ No user complaints about broken links
- ✅ Redirect analytics show successful transitions

---

## Rollback Plan

If redirects cause issues:

1. **Immediate**: Revert `mkdocs.yml` redirect configuration
2. **Short-term**: Restore symlinks to old locations
3. **Long-term**: Maintain dual structure temporarily

---

## Contact

**Questions about redirects?**
- Technical: [GitHub Issues](https://github.com/IBM/ibmdotcom-tutorials/issues)
- Process: Repository maintainers
- IBM.com coordination: [Contact info]

---

**Document Version**: 1.0  
**Last Updated**: 2026-02-16  
**Status**: ✅ Ready for Implementation