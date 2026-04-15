# Contributing to IBM Tutorials

Thank you for your interest in contributing to the IBM Tutorials repository! This guide will help you get started.

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Development Setup](#development-setup)
3. [Development Workflow](#development-workflow)
4. [Code Quality Standards](#code-quality-standards)
5. [Submitting Changes](#submitting-changes)
6. [Additional Resources](#additional-resources)

---

## Getting Started

### Prerequisites

- Python 3.8 or higher
- Git
- Basic understanding of Python and Jupyter notebooks

### First-Time Setup

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/repository-name.git
   cd repository-name
   ```

2. **Install linting tools (one-time setup):**
   ```bash
   pip install pre-commit ruff detect-secrets
   pre-commit install
   ```
   > **Note:** This is a one-time setup per repository clone. The pre-commit hook will run automatically on every commit after installation.

3. **Verify your setup (optional):**
   ```bash
   # Test that pre-commit is installed correctly
   pre-commit run --help
   ```
   > **Note:** You don't need to run checks on all files during setup. The pre-commit hooks will automatically check your changes when you commit.

4. **Create a branch for your work:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

### What Happens When You Commit

After setup, every time you run `git commit`:
- ✅ **Ruff linter** checks your code for errors and style issues
- ✅ **Ruff formatter** automatically fixes formatting (indentation, spacing, etc.)
- ✅ **File checks** ensure no large files or merge conflicts
- ✅ **Secret scanner** detects hardcoded passwords or API keys

If issues are found:
- Many are **auto-fixed** (formatting, import sorting)
- Others require **manual fixes** (you'll see clear error messages)
- Your commit is **blocked** until all issues are resolved

**No setup needed for subsequent commits** - the hook runs automatically!

---

## Development Setup

### Required Tools

All contributors must have these tools installed:

- **pre-commit** - Runs automated checks before commits
- **Ruff** - Fast Python linter and formatter
- **detect-secrets** - Scans for hardcoded credentials

### Optional Tools (Recommended)

- **VS Code with Ruff extension** - Real-time linting in your editor
- **Python virtual environment** - Isolate project dependencies

## Development Workflow

### 1. Create a Branch

```bash
# Feature branch
git checkout -b feature/add-new-tutorial

# Bug fix branch
git checkout -b fix/correct-typo

# Documentation branch
git checkout -b docs/update-readme
```

### 2. Make Your Changes

- Write clear, well-documented code
- Follow existing code style and patterns
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

#### Recommended Workflow: Using Pre-commit

The most efficient way to test your changes is using `pre-commit run`, which runs all configured hooks on your staged files. This workflow catches issues early and matches what will happen during commit.

**Step-by-step workflow:**

```bash
# 1. Stage your changes
git add path/to/your_file.py path/to/your_file.md

# 2. Run pre-commit checks on staged files
pre-commit run
```

**What happens next:**

- **First run** - Several checks may fail, but many issues are automatically fixed:
  - ✓ Formatting issues (spacing, indentation) - **auto-fixed**
  - ✓ Trailing whitespace - **auto-fixed**
  - ✓ Import sorting - **auto-fixed**
  - ⚠️ Linting errors - **may require manual fixes**
  - ⚠️ Secret detection - **requires manual review**

```bash
# 3. Stage the auto-fixed files
git add path/to/your_file.py path/to/your_file.md

# 4. Run pre-commit again
pre-commit run
```

- **Second run** - Most formatting passes, but critical issues may remain:
  - ⚠️ **Potential secrets detected** - Review and fix (see below)

**Handling secret detection:**

If `detect-secrets` flags a potential secret:

```python
# Option 1: Use environment variable (preferred)
api_key = os.getenv("API_KEY")

# Option 2: If it's a false-positive or tutorial example
api_key = "example_key_12345"  # pragma: allowlist secret
```

```bash
# 5. Stage fixes and run final check
git add path/to/your_file.py
pre-commit run
```

- **Final run** - All checks pass ✓
  - Your files are ready to commit!

#### Test Functionality

For tutorials and code examples, always verify the code actually works:

```bash
# Test Python scripts
python your_tutorial.py

# Test Jupyter notebooks
jupyter notebook your_tutorial.ipynb
```

#### Optional Checks

If you want to check specific issues before staging files, you can run individual tools:

```bash
# Check Python linting issues
ruff check path/to/your_file.py

# Auto-fix Python linting issues
ruff check --fix path/to/your_file.py

# Format Python code
ruff format path/to/your_file.py

# Run pre-commit on all files (not just staged)
pre-commit run --all-files

# Run a specific hook
pre-commit run ruff --all-files
```

> **Note:**
> - `pre-commit run` only checks **staged files** (files added with `git add`)
> - **Ruff** only checks Python files (`.py`, `.pyi`, `.ipynb`)
> - **Pre-commit hooks** check **all file types** (Python, Markdown, YAML, etc.)
> - Many issues are **auto-fixed** - just stage the changes and run again

### 4. Commit Your Changes

**Important:** This repository requires verified commit signatures. You have two options:
- **Option 1:** Use the `-S` flag with each commit
- **Option 2:** Configure Git to automatically sign all commits (recommended)

```bash
# Stage your changes
git add .

# Option 1: Commit with -S flag (hooks run automatically)
git commit -S -m "Add: New tutorial on RAG with LangChain"

# Option 2: If you've configured automatic signing (see below)
git commit -m "Add: New tutorial on RAG with LangChain"

# If hooks fail, fix issues and commit again
git add .
git commit -S -m "Add: New tutorial on RAG with LangChain"
```

#### Setting Up Commit Signing

To configure commit signing and get the verified badge on GitHub, follow GitHub's official documentation:

**📖 [GitHub's Complete Guide to Commit Signature Verification](https://docs.github.com/en/authentication/managing-commit-signature-verification)**

This guide covers:
- Generating a GPG key
- Adding your GPG key to your GitHub account
- Telling Git about your signing key
- Signing commits (with `-S` flag or automatic signing)

**Quick reference for automatic signing:**
```bash
# After setting up your GPG key, enable automatic signing
git config --global commit.gpgsign true
```

With automatic signing enabled, you won't need the `-S` flag - all commits will be signed automatically.

### 5. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/add-new-tutorial

# Create PR on GitHub
# - Use a clear, descriptive title
```

---

## Code Quality Standards

### Python Code

#### Style Guidelines
- **Line length:** 100 characters maximum
- **Imports:** Organized automatically by Ruff
- **Naming:**
  - `snake_case` for functions and variables
  - `PascalCase` for classes
  - `UPPER_CASE` for constants

#### Required Checks
All Python code must pass:
- ✅ Ruff linting (no errors)
- ✅ Ruff formatting (consistent style)
- ✅ No hardcoded secrets
- ✅ No syntax errors

#### Tutorial-Specific Guidelines

**✅ Do:**
```python
import os
from pathlib import Path

# Use environment variables for credentials
api_key = os.getenv("WATSONX_API_KEY")

# Clear variable names
user_input = "What is machine learning?"
model_response = generate_response(user_input)

# Comments for complex concepts
# This uses RAG (Retrieval Augmented Generation) to improve accuracy
context = retrieve_relevant_docs(user_input)
```

**❌ Don't:**
```python
# Hardcoded credentials (will be caught by detect-secrets)
api_key = "sk-1234567890abcdef"  # pragma: allowlist secret

# Unclear variable names
x = "What is machine learning?"
y = generate_response(x)

# No comments for complex code
c = retrieve_relevant_docs(x)
```

## Submitting Changes

### Pull Request Guidelines

#### PR Title Format
```
<type>: <description>

Examples:
- Add: New tutorial on prompt engineering
- Fix: Correct typo in RAG tutorial
- Update: Improve documentation for setup
- Refactor: Simplify agent orchestration code
```

### Before Submitting

**Checklist:**
- [ ] Code follows style guidelines
- [ ] Pre-commit hooks pass
- [ ] Tutorial/code has been tested
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] Commits are signed with verified signature
- [ ] No merge conflicts
- [ ] No hardcoded secrets

### Common Issues and Solutions

#### Issue: Pre-commit hooks fail

**Solution:**
```bash
# See what failed
git commit -m "Your message"

# Fix the issues (often auto-fixed)
git add .
git commit -m "Your message"
```

#### Issue: Secret detected

**Solution:**
```python
# Option 1: Use environment variable
api_key = os.getenv("API_KEY")

# Option 2: If it's a tutorial example
api_key = "example_key"  # pragma: allowlist secret
```

#### Issue: Linting errors

**Solution:**
```bash
# See all errors
ruff check .

# Auto-fix what's possible
ruff check --fix .

# Format code
ruff format .
```

## Additional Resources

- [Python Style Guide (PEP 8)](https://pep8.org/)
- [Ruff Documentation](https://docs.astral.sh/ruff/)
- [pre-commit Documentation](https://pre-commit.com/)
- [Git Best Practices](https://git-scm.com/book/en/v2)
- [Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/)

---

**Happy Contributing! 🚀**
