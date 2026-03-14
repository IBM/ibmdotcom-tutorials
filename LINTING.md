# Code Linting and Formatting Guide

This repository uses [Ruff](https://docs.astral.sh/ruff/) for fast Python linting and formatting, integrated with [pre-commit](https://pre-commit.com/) hooks to ensure code quality and consistency across all tutorials.

## 🚀 Quick Start

### 1. Install Pre-commit

```bash
pip install pre-commit
```

### 2. Install Git Hooks

From the repository root, run:

```bash
pre-commit install
```

This will install the pre-commit hooks that automatically run before each commit.

### 3. You're Done!

Now, every time you commit code, the linting and formatting checks will run automatically. If issues are found, they'll be auto-fixed when possible, and you'll need to stage the changes and commit again.

## 🔧 Manual Usage

### Run on All Files

To manually run linting on all files in the repository:

```bash
pre-commit run --all-files
```

### Run on Specific Files

To run on specific files:

```bash
pre-commit run --files path/to/file1.py path/to/file2.py
```

### Run Ruff Directly

You can also run Ruff directly without pre-commit:

```bash
# Install Ruff
pip install ruff

# Check for issues
ruff check .

# Check and auto-fix issues
ruff check --fix .

# Format code
ruff format .
```

## 📋 What Gets Checked

### Ruff Linting Rules

The following rule sets are enabled (configured in `pyproject.toml`):

- **E** (pycodestyle errors) - PEP 8 style violations
- **F** (Pyflakes) - Logical errors and undefined names
- **I** (isort) - Import sorting and organization
- **N** (pep8-naming) - Naming conventions
- **UP** (pyupgrade) - Modern Python syntax upgrades
- **B** (flake8-bugbear) - Common bug patterns
- **C4** (flake8-comprehensions) - List/dict comprehension improvements
- **SIM** (flake8-simplify) - Code simplification suggestions
- **RET** (flake8-return) - Return statement improvements
- **PTH** (flake8-use-pathlib) - Pathlib usage recommendations

### Additional Pre-commit Checks

- **Large files** - Prevents committing files larger than 500KB
- **YAML/TOML/JSON syntax** - Validates configuration files
- **Trailing whitespace** - Removes unnecessary whitespace
- **End-of-file fixer** - Ensures files end with a newline
- **Mixed line endings** - Standardizes to LF (Unix-style)
- **Merge conflicts** - Detects unresolved merge conflict markers

### Jupyter Notebooks

Jupyter notebooks (`.ipynb` files) are also linted using `nbqa`, with some relaxed rules:
- Import errors (E402, F401, F403) are ignored
- Print statements (T201) are allowed
- Line length (E501) is more lenient

## ⚙️ Configuration

### Main Configuration Files

- **`pyproject.toml`** - Ruff configuration (rules, line length, exclusions)
- **`.pre-commit-config.yaml`** - Pre-commit hooks configuration
- **`.gitignore`** - Excludes cache files (`.ruff_cache/`, etc.)

### Customizing Rules

#### Per-File Ignores

To ignore specific rules for certain files, edit `pyproject.toml`:

```toml
[tool.ruff.lint.per-file-ignores]
"path/to/file.py" = ["E501", "F401"]  # Ignore line length and unused imports
```

#### Inline Ignores

To ignore a rule for a specific line:

```python
# Ignore a single rule
result = some_long_function_call()  # noqa: E501

# Ignore multiple rules
import unused_module  # noqa: F401, E402
```

#### Disable for a Block

```python
# ruff: noqa: E501
# This entire block ignores line length
very_long_line_that_would_normally_fail = "but it won't because we disabled E501"
another_long_line = "also fine"
```

## 🐛 Troubleshooting

### Pre-commit Hook Fails

If the pre-commit hook fails:

1. **Review the errors** - Ruff will show what needs to be fixed
2. **Auto-fix when possible** - Many issues are fixed automatically
3. **Stage the changes** - `git add .` to stage auto-fixed files
4. **Commit again** - Try committing again

### Skip Hooks (Not Recommended)

In rare cases, you can skip hooks:

```bash
git commit --no-verify -m "Your message"
```

⚠️ **Warning**: Only use this for emergencies. It's better to fix the issues or adjust the configuration.

### Update Pre-commit Hooks

To update to the latest versions of the hooks:

```bash
pre-commit autoupdate
```

### Clear Cache

If you encounter issues, try clearing the cache:

```bash
# Clear pre-commit cache
pre-commit clean

# Clear Ruff cache
rm -rf .ruff_cache
```

## 📚 Common Fixes

### Import Sorting

Ruff automatically sorts imports into groups:

```python
# Standard library
import os
import sys

# Third-party
import numpy as np
import pandas as pd

# First-party (your code)
from my_module import my_function
```

### Line Length

Lines longer than 100 characters will be flagged. Break them up:

```python
# Before
result = some_function(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10)

# After
result = some_function(
    arg1, arg2, arg3, arg4, arg5,
    arg6, arg7, arg8, arg9, arg10
)
```

### Unused Imports

Remove or comment out unused imports:

```python
# Before
import pandas as pd  # Not used anywhere

# After - either remove it or use it
```

### Modern Python Syntax

Ruff suggests modern Python patterns:

```python
# Before (old style)
with open("file.txt", "r") as f:
    content = f.read()

# After (modern style with pathlib)
from pathlib import Path
content = Path("file.txt").read_text()
```

## 🎯 Best Practices

1. **Run pre-commit before pushing** - Catch issues early
2. **Fix issues incrementally** - Don't let linting errors accumulate
3. **Understand the rules** - Learn why rules exist, don't just ignore them
4. **Use auto-fix** - Let Ruff fix what it can automatically
5. **Keep configuration updated** - Regularly update pre-commit hooks

## 📖 Additional Resources

- [Ruff Documentation](https://docs.astral.sh/ruff/)
- [Pre-commit Documentation](https://pre-commit.com/)
- [PEP 8 Style Guide](https://pep8.org/)
- [Python Packaging Guide](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/)

## 🤝 Contributing

When contributing to this repository:

1. Install pre-commit hooks (see Quick Start above)
2. Ensure your code passes all checks before submitting a PR
3. If you need to adjust linting rules, discuss in an issue first
4. Document any custom ignores with comments explaining why

## 💡 Tips for Tutorial Authors

Since this is a tutorial repository, we've configured Ruff to be educational-friendly:

- **Print statements are allowed** in tutorial code
- **Line length is reasonable** (100 chars) for readability
- **Some strict rules are relaxed** to allow teaching different approaches
- **Jupyter notebooks have special handling** with more lenient rules

Focus on writing clear, educational code. The linter helps catch bugs and maintain consistency, but it won't force overly strict style rules that might hinder learning.

---

**Questions?** Open an issue or discussion on GitHub!
