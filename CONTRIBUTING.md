# Contributing to IBM Tutorials

Thank you for contributing to the IBM Tutorials repository! This guide covers everything you need to know.

---

## Quick Start

### Prerequisites

- Python 3.10 or higher
- Git
- GitHub account

### First-Time Setup

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ibmdotcom-tutorials.git
   cd ibmdotcom-tutorials
   ```

2. **Install development tools:**
   ```bash
   pip install pre-commit ruff detect-secrets
   pre-commit install
   ```

3. **Set up commit signing** (required):

   Follow [GitHub's guide to commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification)

   Quick setup for automatic signing:
   ```bash
   git config --global commit.gpgsign true
   ```

---

## Contributing a Tutorial

### Step 1: Create a Branch

```bash
git checkout -b feature/your-tutorial-name
```

### Step 2: Create Tutorial Directory

Create your tutorial under the appropriate category:

```bash
mkdir -p tutorials/CATEGORY/your-tutorial-name
cd tutorials/CATEGORY/your-tutorial-name
```

**Example structure:**
```
tutorials/01-rag-and-retrieval/my-rag-tutorial/
├── tutorial.ipynb          # Your tutorial
├── requirements.txt        # Python dependencies (if needed)
├── README.md              # Setup instructions
└── .env.example           # Environment variables template (if needed)
```

### Step 3: Configure Dependabot (If You Have Dependencies)

**⚠️ If your tutorial has `requirements.txt`, `pyproject.toml`, or `package.json`, do this step!**

Edit `.github/dependabot.yml` and add your tutorial:

**For Python tutorials:**
```yaml
# Add this block to the updates: section
- package-ecosystem: "pip"
  directory: "/tutorials/CATEGORY/your-tutorial-name"
  schedule:
    interval: "weekly"
    day: "monday"
  open-pull-requests-limit: 3
  labels:
    - "dependencies"
    - "python"
    - "tutorial"
```

**For JavaScript tutorials:**
```yaml
- package-ecosystem: "npm"
  directory: "/tutorials/CATEGORY/your-tutorial-name"
  schedule:
    interval: "weekly"
    day: "monday"
  open-pull-requests-limit: 5
  labels:
    - "dependencies"
    - "javascript"
    - "tutorial"
```

**Real example:**
```yaml
- package-ecosystem: "pip"
  directory: "/tutorials/01-rag-and-retrieval/my-rag-tutorial"
  schedule:
    interval: "weekly"
    day: "monday"
  open-pull-requests-limit: 3
  labels:
    - "dependencies"
    - "python"
    - "tutorial"
```

**Why this matters:** Without this, your tutorial won't get automatic security updates and dependencies will become outdated.

**When to skip this:** If your tutorial only uses Python's standard library or has no dependencies, skip this step.

### Step 4: Test Your Tutorial

```bash
# Install dependencies (if you have them)
pip install -r requirements.txt

# Run your tutorial
python tutorial.py
# OR
jupyter notebook tutorial.ipynb

# Verify everything works
```

### Step 5: Update Documentation

**Add to main README.md:**

Find your category section and add your tutorial:

```markdown
### [01 - RAG and Retrieval](tutorials/01-rag-and-retrieval/)

**Featured Tutorials:**
- [Your Tutorial Name](tutorials/01-rag-and-retrieval/your-tutorial/) - Brief description
```

### Step 5: Commit and Push

```bash
# Stage your changes
git add .

# Commit (pre-commit hooks will run automatically)
git commit -m "Add: New tutorial on [topic]"

# If hooks fail, fix issues and commit again
git add .
git commit -m "Add: New tutorial on [topic]"

# Push to your fork
git push origin feature/your-tutorial-name
```

### Step 7: Create Pull Request

1. Go to GitHub and create a PR
2. Use a clear title: `Add: New tutorial on [topic]`
3. Describe what your tutorial teaches
4. Wait for review

---

## Pre-commit Hooks

When you commit, these checks run automatically:

- ✅ **Ruff** - Lints and formats Python code
- ✅ **File checks** - Prevents large files, merge conflicts
- ✅ **Secret detection** - Catches hardcoded credentials

**If hooks fail:**
- Many issues are auto-fixed (formatting, spacing)
- Fix remaining issues and commit again
- No secrets allowed (use environment variables)

---

## Code Standards

### Python

- Line length: 100 characters max
- Use `snake_case` for functions/variables
- Use `PascalCase` for classes
- No hardcoded credentials

**Good:**
```python
import os

api_key = os.getenv("WATSONX_API_KEY")
user_input = "What is machine learning?"
```

**Bad:**
```python
api_key = "sk-1234567890"  # pragma: allowlist secret  Never hardcode credentials
x = "What is machine learning?"  # Use descriptive names
```

### Jupyter Notebooks

- Include clear markdown explanations
- Show expected outputs
- Use environment variables for credentials

---

## Checklist Before Submitting

- [ ] Created tutorial directory
- [ ] **Added to `.github/dependabot.yml`** (if has `requirements.txt`, `pyproject.toml`, or `package.json`)
- [ ] Tested tutorial works
- [ ] Updated main README.md
- [ ] Created tutorial README.md
- [ ] Pre-commit hooks pass
- [ ] No hardcoded credentials
- [ ] Commits are signed

---

## Common Issues

### Issue: Pre-commit hooks fail

**Solution:**
```bash
# See what failed
git commit -m "Your message"

# Many issues are auto-fixed, just stage and commit again
git add .
git commit -m "Your message"
```

### Issue: Secret detected

**Solution:**
```python
# Use environment variables
import os
api_key = os.getenv("API_KEY")

# For tutorial examples, add this comment:
api_key = "example_key"  # pragma: allowlist secret
```

### Issue: Forgot to add to dependabot.yml

**Solution:**
```bash
# Edit .github/dependabot.yml
# Add your tutorial directory
# Commit the change
git add .github/dependabot.yml
git commit -m "Add tutorial to Dependabot config"
```

---

## Getting Help

- **Questions?** Open a [GitHub Discussion](https://github.com/IBM/ibmdotcom-tutorials/discussions)
- **Issues?** Report in [GitHub Issues](https://github.com/IBM/ibmdotcom-tutorials/issues)
- **Unsure about Dependabot?** Check if your tutorial has `requirements.txt`, `pyproject.toml`, or `package.json` - if yes, add to `dependabot.yml`

---

## Additional Resources

- [Python Style Guide (PEP 8)](https://pep8.org/)
- [GitHub Commit Signing](https://docs.github.com/en/authentication/managing-commit-signature-verification)
- [Ruff Documentation](https://docs.astral.sh/ruff/)

---

**Happy Contributing! 🚀**

Maintained by: IBM.com Technical Content Team
