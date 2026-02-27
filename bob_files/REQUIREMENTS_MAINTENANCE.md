# Requirements Maintenance Guide

This guide explains how to maintain the multi-tiered requirements files in this repository and how to add new dependencies for tutorials.

## Requirements File Structure

```
repository-root/
├── requirements.txt                    # Base dependencies (~20 packages)
├── requirements-rag.txt               # RAG-specific (~45 packages)
├── requirements-agents.txt            # Agent orchestration (~40 packages)
├── requirements-multiagent.txt        # Multi-agent frameworks (~35 packages)
├── requirements-optional.txt          # Specialized dependencies (~50 packages)
└── requirements-dev.txt               # Development tools (~10 packages)
```

## When to Use Each File

### requirements.txt (Base)
Use for dependencies needed by **60%+ of tutorials**:
- IBM Watsonx core packages
- LangChain basics
- Common utilities (pandas, numpy, requests)
- Jupyter notebook support

### requirements-rag.txt
Use for **RAG and retrieval tutorials**:
- Vector stores (ChromaDB, FAISS, Neo4j)
- Document processing (docling, PyPDF2)
- Text processing (sentence-transformers)
- RAG evaluation (RAGAS)

### requirements-agents.txt
Use for **agent orchestration tutorials**:
- LangGraph and agent frameworks
- Tools and integrations (Tavily, Google Search)
- Web frameworks (Streamlit, Flask)
- IBM services (Watson, COS)

### requirements-multiagent.txt
Use for **multi-agent system tutorials**:
- CrewAI, AutoGen frameworks
- ACP SDK
- Agent coordination tools
- Note: BeeAI has version conflicts - see tutorial-specific requirements

### requirements-optional.txt
Use for **specialized tutorials**:
- PyTorch and ML frameworks
- Multimodal processing (image, audio, video)
- Time series libraries
- Fine-tuning tools

### requirements-dev.txt
Use for **development and testing**:
- Testing frameworks (pytest)
- Code quality tools (black, flake8)
- Documentation tools (sphinx)

## Adding New Dependencies

### Step 1: Determine the Category

Ask yourself:
1. Is this needed by most tutorials? → `requirements.txt`
2. Is this for RAG/retrieval? → `requirements-rag.txt`
3. Is this for agents? → `requirements-agents.txt`
4. Is this for multi-agent systems? → `requirements-multiagent.txt`
5. Is this specialized/optional? → `requirements-optional.txt`
6. Is this for development only? → `requirements-dev.txt`

### Step 2: Check for Conflicts

Before adding a new dependency:

```bash
# Create a test environment
python -m venv test_env
source test_env/bin/activate

# Install the category requirements
pip install -r requirements-[category].txt

# Try installing the new package
pip install new-package==version

# Check for conflicts
pip check
```

### Step 3: Add the Dependency

Add to the appropriate requirements file with:
- **Version constraint**: Use `>=` for minimum version, `<` for upper bound
- **Comment**: Explain why this package is needed
- **Section**: Place in the appropriate section

Example:
```txt
# -----------------------------------------------------------------------------
# New Section (if needed)
# -----------------------------------------------------------------------------
new-package>=1.0.0,<2.0.0  # Brief description of purpose
```

### Step 4: Test Installation

Test in a clean environment:

```bash
# Clean environment
python -m venv test_env
source test_env/bin/activate

# Install requirements
pip install -r requirements-[category].txt

# Verify installation
python -c "import new_package; print(new_package.__version__)"

# Run affected tutorials
cd tutorials/[category]
jupyter nbconvert --execute tutorial.ipynb
```

### Step 5: Update Documentation

1. Update the requirements file header with new package count
2. Update tutorial README if needed
3. Add to tutorial-specific notes if applicable
4. Update this maintenance guide if adding new patterns

## Version Conflict Resolution

### Identifying Conflicts

```bash
# Check for conflicts
pip check

# List all installed packages
pip list

# Show dependency tree
pip install pipdeptree
pipdeptree
```

### Resolution Strategies

#### Strategy 1: Find Compatible Range
```bash
# Test different versions
pip install package>=1.0.0,<2.0.0
pip check

# Adjust range until compatible
pip install package>=1.2.0,<2.0.0
pip check
```

#### Strategy 2: Document as Tutorial-Specific
If no compatible version exists:
1. Keep conflicting package out of consolidated requirements
2. Document in tutorial-specific requirements.txt
3. Add note in tutorial README
4. Update REQUIREMENTS_MAINTENANCE.md

#### Strategy 3: Use Extras
For optional features:
```txt
package[extra1,extra2]>=1.0.0
```

### Known Conflicts

#### BeeAI Framework
**Conflict**: Different tutorials require incompatible versions
- a2a tutorials: `beeai-framework[a2a]>=0.1.36,<0.2.0`
- beeai_agent_server: `beeai-framework==0.1.29`

**Resolution**: Excluded from consolidated requirements
- Document in `requirements-multiagent.txt`
- Provide installation instructions in tutorial READMEs
- Keep tutorial-specific requirements.txt files

#### Transformers (Git vs PyPI)
**Conflict**: ai-stylist uses git+https:// for bleeding edge
- Most tutorials: PyPI version
- ai-stylist: `git+https://github.com/huggingface/transformers`

**Resolution**: Use PyPI in consolidated, document git install as optional

## Updating Existing Dependencies

### When to Update

Update dependencies when:
- Security vulnerabilities are discovered
- New features are needed
- Bug fixes are available
- Python version support changes

### Update Process

1. **Check current version**:
   ```bash
   pip list | grep package-name
   ```

2. **Check for updates**:
   ```bash
   pip install --upgrade package-name --dry-run
   ```

3. **Test in isolated environment**:
   ```bash
   python -m venv test_env
   source test_env/bin/activate
   pip install -r requirements-[category].txt
   pip install --upgrade package-name
   pip check
   ```

4. **Run affected tutorials**:
   ```bash
   cd tutorials/[category]
   jupyter nbconvert --execute *.ipynb
   ```

5. **Update requirements file**:
   ```txt
   # Old
   package-name>=1.0.0,<2.0.0
   
   # New
   package-name>=1.2.0,<2.0.0
   ```

6. **Document changes**:
   - Update requirements file header date
   - Add note in tutorial README if behavior changes
   - Update this guide if process changes

### Bulk Updates

For updating multiple packages:

```bash
# Generate updated requirements
pip list --outdated
pip install --upgrade -r requirements-[category].txt --dry-run

# Test thoroughly before committing
pytest tests/
```

## Python Version Support

### Current Support
- **Minimum**: Python 3.10
- **Recommended**: Python 3.11
- **Maximum**: Python 3.13

### Adding Support for New Python Version

1. **Test compatibility**:
   ```bash
   python3.14 -m venv test_env
   source test_env/bin/activate
   pip install -r requirements.txt
   pip check
   ```

2. **Update version constraints**:
   - Update requirements file headers
   - Update tutorial READMEs
   - Update main README.md

3. **Test all categories**:
   ```bash
   for req in requirements*.txt; do
       python3.14 -m venv test_${req}
       source test_${req}/bin/activate
       pip install -r ${req}
       pip check
       deactivate
   done
   ```

### Dropping Support for Old Python Version

1. **Announce deprecation** in README and requirements files
2. **Wait for transition period** (e.g., 6 months)
3. **Update minimum version** in all requirements files
4. **Remove compatibility workarounds** from code
5. **Update CI/CD** to remove old version testing

## Tutorial-Specific Requirements

### When to Create Tutorial-Specific Requirements

Create a tutorial-specific `requirements.txt` when:
1. **Version conflicts** with consolidated requirements
2. **Unique dependencies** not used elsewhere
3. **Exact version pins** required for reproducibility
4. **Git-based dependencies** for bleeding edge features

### Tutorial-Specific Requirements Template

```txt
# =============================================================================
# [Tutorial Name] - Specific Requirements
# =============================================================================
# This tutorial requires specific package versions that conflict with
# the consolidated requirements. Install these instead of the global
# requirements for this tutorial only.
#
# Installation: pip install -r requirements.txt
# =============================================================================

# Conflicting packages (with explanation)
package-name==1.0.0  # Requires exact version due to API changes

# Unique dependencies
unique-package>=2.0.0  # Only used in this tutorial

# Git-based dependencies
git+https://github.com/org/repo.git@branch  # Bleeding edge features
```

### Documenting Tutorial-Specific Requirements

In tutorial README:
```markdown
## Installation

⚠️ **Note**: This tutorial has specific requirements that differ from
the consolidated requirements.

From this tutorial directory, run:
```bash
pip install -r requirements.txt
```

**Why specific requirements?**
- [Explain reason for version conflict or unique dependency]
```

## Testing Requirements

### Manual Testing Checklist

For each requirements file:
- [ ] Create clean virtual environment
- [ ] Install requirements file
- [ ] Run `pip check` for conflicts
- [ ] Test 2-3 representative tutorials
- [ ] Verify all imports work
- [ ] Check installation time
- [ ] Verify disk space usage

### Automated Testing

Create test script:
```python
# test_requirements.py
import subprocess
import sys

def test_requirements_file(req_file):
    """Test a requirements file installation."""
    # Create venv
    subprocess.run([sys.executable, "-m", "venv", "test_env"])
    
    # Install requirements
    result = subprocess.run([
        "test_env/bin/pip", "install", "-r", req_file
    ], capture_output=True)
    
    # Check for conflicts
    check = subprocess.run([
        "test_env/bin/pip", "check"
    ], capture_output=True)
    
    assert check.returncode == 0, f"Conflicts in {req_file}"
    
    # Cleanup
    subprocess.run(["rm", "-rf", "test_env"])

# Run tests
for req in ["requirements.txt", "requirements-rag.txt", ...]:
    test_requirements_file(req)
```

## Common Issues and Solutions

### Issue: Dependency Resolver Takes Too Long

**Solution**:
```bash
# Use legacy resolver
pip install -r requirements.txt --use-deprecated=legacy-resolver

# Or upgrade pip
pip install --upgrade pip
```

### Issue: Package Not Found

**Solution**:
```bash
# Check package name spelling
pip search package-name

# Check if package exists on PyPI
curl https://pypi.org/pypi/package-name/json

# Try alternative package index
pip install -r requirements.txt --index-url https://pypi.org/simple
```

### Issue: SSL Certificate Errors

**Solution**:
```bash
# Update certificates
pip install --upgrade certifi

# Or use trusted host (not recommended for production)
pip install -r requirements.txt --trusted-host pypi.org
```

### Issue: Out of Disk Space

**Solution**:
```bash
# Clean pip cache
pip cache purge

# Install without cache
pip install -r requirements.txt --no-cache-dir

# Remove unused packages
pip uninstall -y $(pip list --format=freeze | grep -v "^-e")
```

## Best Practices

1. **Version Pinning**:
   - Use `>=` for minimum version
   - Use `<` for upper bound to prevent breaking changes
   - Use `==` only for tutorial-specific requirements

2. **Comments**:
   - Explain why each package is needed
   - Document known issues or conflicts
   - Link to relevant documentation

3. **Organization**:
   - Group related packages in sections
   - Keep sections alphabetically sorted
   - Use clear section headers

4. **Testing**:
   - Test in clean environments
   - Test on multiple Python versions
   - Test on different operating systems

5. **Documentation**:
   - Update README files when adding dependencies
   - Document breaking changes
   - Provide migration guides for major updates

## Maintenance Schedule

### Weekly
- [ ] Check for security vulnerabilities
- [ ] Review new issues related to dependencies

### Monthly
- [ ] Check for package updates
- [ ] Test with latest package versions
- [ ] Update documentation if needed

### Quarterly
- [ ] Major dependency updates
- [ ] Python version compatibility review
- [ ] Requirements file reorganization if needed

### Annually
- [ ] Drop support for EOL Python versions
- [ ] Major refactoring of requirements structure
- [ ] Comprehensive testing across all tutorials

## Getting Help

### Resources
- [pip Documentation](https://pip.pypa.io/)
- [Python Packaging Guide](https://packaging.python.org/)
- [Semantic Versioning](https://semver.org/)

### Reporting Issues
If you encounter issues with requirements:
1. Check this guide for solutions
2. Search existing issues on GitHub
3. Create a new issue with:
   - Requirements file affected
   - Error message
   - Python version
   - Operating system
   - Steps to reproduce

## Contributing

When contributing new tutorials:
1. Use existing requirements files when possible
2. Only create tutorial-specific requirements if necessary
3. Document any new dependencies
4. Test installation in clean environment
5. Update relevant README files

See [CONTRIBUTING.md](CONTRIBUTING.md) for full contribution guidelines.