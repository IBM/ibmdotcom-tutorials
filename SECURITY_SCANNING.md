# Security and Secret Detection

This repository includes automated security scanning to detect hardcoded secrets, API keys, passwords, and other sensitive information before they are committed.

## 🔒 What Gets Detected

### Ruff Security Rules (S - flake8-bandit)

Ruff's security rules detect common security issues including:

- **S102** - Use of `exec()` (code injection risk)
- **S103** - Bad file permissions
- **S108** - Hardcoded temporary file/directory
- **S110** - Try-except-pass (hiding errors)
- **S112** - Try-except-continue (hiding errors)
- **S113** - Request without timeout
- **S301-S324** - Unsafe deserialization, pickle usage
- **S501-S508** - Weak cryptography
- **S601-S612** - Shell injection risks
- **S701** - Jinja2 autoescape disabled

### detect-secrets Tool

The `detect-secrets` pre-commit hook scans for:

- **AWS Access Keys** - AWS_ACCESS_KEY_ID patterns
- **Azure Storage Keys** - Azure connection strings
- **GitHub Tokens** - GitHub personal access tokens
- **IBM Cloud IAM Keys** - IBM Cloud API keys
- **IBM COS HMAC** - IBM Cloud Object Storage credentials
- **JWT Tokens** - JSON Web Tokens
- **Private Keys** - RSA, SSH, PGP private keys
- **API Keys** - Generic API key patterns
- **Passwords** - Hardcoded password strings
- **Slack Tokens** - Slack bot and webhook tokens
- **Stripe Keys** - Stripe API keys
- **SendGrid Keys** - SendGrid API keys
- **Twilio Keys** - Twilio account credentials
- **Discord Bot Tokens** - Discord bot tokens
- **High Entropy Strings** - Base64 and hex strings that look like secrets

## 🚨 Examples of What Will Be Flagged

### ❌ Bad - Hardcoded Secrets

```python
# Will be detected by both Ruff and detect-secrets
api_key = "sk-1234567890abcdef1234567890abcdef"  # pragma: allowlist secret
aws_access_key = "AKIAIOSFODNN7EXAMPLE"  # pragma: allowlist secret
password = "MySecretPassword123!"  # pragma: allowlist secret

# Will be detected by Ruff S105
def connect_db(password="hardcoded_password"):  # pragma: allowlist secret
    pass

# Will be detected by detect-secrets
github_token = "ghp_1234567890abcdefghijklmnopqrstuvwxyz"  # pragma: allowlist secret
```

### ✅ Good - Using Environment Variables

```python
import os
from pathlib import Path

# Load from environment variables
api_key = os.environ.get("API_KEY")
aws_access_key = os.getenv("AWS_ACCESS_KEY_ID")

# Load from .env file (not committed)
from dotenv import load_dotenv
load_dotenv()
password = os.environ["DB_PASSWORD"]

# Load from config file (not committed)
import json
config = json.loads(Path(".env.json").read_text())
github_token = config["github_token"]
```

### ✅ Good - Example/Placeholder Values

```python
# For tutorials and examples, use obvious placeholders
api_key = "YOUR_API_KEY_HERE"  # pragma: allowlist secret
api_key = "<your-api-key>"  # pragma: allowlist secret
api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  # pragma: allowlist secret

# Or use environment variable references
api_key = "${API_KEY}"  # pragma: allowlist secret
api_key = "{{API_KEY}}"
```

## 🛠️ Configuration

### Ruff Security Rules

Configured in `pyproject.toml`:

```toml
[tool.ruff.lint]
select = [
    "S",  # flake8-bandit (security)
]

# Some rules are ignored for tutorial code
ignore = [
    "S101",  # Use of assert (common in tutorials)
    "S104",  # Binding to all interfaces (dev servers)
    "S105",  # Hardcoded password (example passwords)
    "S106",  # Hardcoded password in function arg
    "S107",  # Hardcoded password in default arg
]

# Per-file ignores for example/demo files
[tool.ruff.lint.per-file-ignores]
"tutorials/**/*example*.py" = ["S105", "S106", "S107"]
"tutorials/**/*demo*.py" = ["S105", "S106", "S107"]
```

### detect-secrets Configuration

Configured in `.pre-commit-config.yaml` and `.secrets.baseline`:

- **Baseline file**: `.secrets.baseline` tracks known false positives
- **Excluded files**: Lock files, package-lock.json, Jupyter notebooks
- **Plugins**: 20+ secret detection plugins enabled

## 🔍 How to Use

### Automatic Scanning

Secrets are automatically scanned on every commit via pre-commit hooks.

### Manual Scanning

```bash
# Scan all files with Ruff
ruff check --select S .

# Scan all files with detect-secrets
detect-secrets scan

# Scan specific file
detect-secrets scan path/to/file.py

# Update baseline (after reviewing false positives)
detect-secrets scan --baseline .secrets.baseline
```

### If a Secret is Detected

1. **Remove the secret** from your code
2. **Use environment variables** or config files instead
3. **Add to .gitignore** if using config files
4. **Update .secrets.baseline** if it's a false positive

```bash
# If it's a false positive, add to baseline
detect-secrets scan --baseline .secrets.baseline

# Then commit the updated baseline
git add .secrets.baseline
git commit -m "Update secrets baseline"
```

## 🚫 Handling False Positives

### Inline Ignores for Ruff

```python
# Ignore specific security rule
api_key = "example_key_for_docs"  # noqa: S105  # pragma: allowlist secret

# Ignore all security rules for a line
password = "demo_password"  # noqa: S  # pragma: allowlist secret
```

### Inline Ignores for detect-secrets

```python
# Add pragma comment on the same line as the secret
api_key = "sk-1234567890abcdef1234567890abcdef"  # pragma: allowlist secret

# Or use the baseline file
# Run: detect-secrets scan --baseline .secrets.baseline
```

## 📋 Best Practices

### For Tutorial Authors

1. **Never commit real secrets** - Always use placeholders
2. **Use .env.example** - Provide template files with placeholders
3. **Document credential setup** - Explain how to get and set credentials
4. **Use obvious placeholders** - Make it clear they need to be replaced

Example `.env.example`:

```bash
# IBM watsonx.ai credentials
WATSONX_API_KEY=your_api_key_here
WATSONX_PROJECT_ID=your_project_id_here

# OpenAI credentials (if needed)
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### For Contributors

1. **Check before committing** - Review what you're committing
2. **Use environment variables** - Never hardcode credentials
3. **Keep .env files local** - They should be in .gitignore
4. **Report real secrets** - If you find real secrets, report immediately

### If You Accidentally Commit a Secret

1. **Rotate the secret immediately** - Generate a new key/token
2. **Remove from git history** - Use `git filter-branch` or BFG Repo-Cleaner
3. **Update .gitignore** - Ensure it won't happen again
4. **Notify maintainers** - Report the incident

```bash
# Remove file from git history (example)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch path/to/file" \
  --prune-empty --tag-name-filter cat -- --all
```

## 🔐 Credential Management

### Recommended Tools

- **python-dotenv** - Load environment variables from .env files
- **IBM Cloud Secrets Manager** - Centralized secret management
- **HashiCorp Vault** - Enterprise secret management
- **AWS Secrets Manager** - AWS secret management
- **Azure Key Vault** - Azure secret management

### Example with python-dotenv

```python
from dotenv import load_dotenv
import os

# Load .env file (not committed to git)
load_dotenv()

# Access credentials
api_key = os.getenv("WATSONX_API_KEY")
project_id = os.getenv("WATSONX_PROJECT_ID")

if not api_key or not project_id:
    raise ValueError("Missing required credentials in .env file")
```

## 📚 Additional Resources

- [Ruff Security Rules](https://docs.astral.sh/ruff/rules/#flake8-bandit-s)
- [detect-secrets Documentation](https://github.com/Yelp/detect-secrets)
- [OWASP Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)

## ⚠️ Important Notes

- **Tutorial code** has relaxed rules for example passwords/keys
- **Real credentials** should NEVER be committed, even in tutorials
- **False positives** can be added to `.secrets.baseline`
- **Security scanning** is not a replacement for secure coding practices

---

**Remember**: When in doubt, use environment variables! 🔐
