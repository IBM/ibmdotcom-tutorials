# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

**Note:** This repository contains educational tutorials. Each tutorial may use different versions of dependencies. We recommend always using the latest version of tutorial code.

## Reporting a Vulnerability

We take the security of our tutorials and code examples seriously. If you discover a security vulnerability, please follow these steps:

### 1. **Do Not** Open a Public Issue

Please do not report security vulnerabilities through public GitHub issues.

### 2. Report Privately

Use GitHub's private vulnerability reporting feature or send a detailed report to the repository maintainers.

Include:
- Description of the vulnerability
- Steps to reproduce
- Affected tutorial(s) or file(s)
- Potential impact
- Suggested fix (if available)

### 3. Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 5 business days
- **Fix Timeline:** Varies by severity
  - Critical: 7 days
  - High: 14 days
  - Medium: 30 days
  - Low: 90 days

### 4. Disclosure Policy

- We will acknowledge your report within 48 hours
- We will provide regular updates on our progress
- We will notify you when the vulnerability is fixed
- We will credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices for Tutorial Users

When using these tutorials:

### 1. Keep Dependencies Updated

- Regularly update Python packages: `pip install --upgrade -r requirements.txt`
- Update Node.js packages: `npm update`
- Check for security advisories before installing dependencies

### 2. Use Virtual Environments

- **Python:** Use `venv` or `conda` environments
  ```bash
  python -m venv .venv
  source .venv/bin/activate  # On Windows: .venv\Scripts\activate
  ```
- **Node.js:** Use project-specific `node_modules`

### 3. Protect Credentials

- Never commit API keys or credentials
- Use `.env` files (already in `.gitignore`)
- Follow tutorial-specific security guidance
- Use environment variables for sensitive data

### 4. Review Dependencies

- Check for known vulnerabilities before installation
- Use security scanning tools:
  ```bash
  # Python
  pip install pip-audit
  pip-audit -r requirements.txt

  # Node.js
  npm audit
  ```

### 5. Production Deployments

- These are educational tutorials, not production-ready code
- Perform security review before production use
- Add appropriate authentication, authorization, and input validation
- Implement rate limiting and error handling
- Use HTTPS for all communications
- Follow the principle of least privilege

## Security Features in This Repository

### Active Security Measures

- **Secret Scanning:** Configured via `.secrets.baseline` using detect-secrets
- **Dependabot:** Automated dependency updates (configured in `.github/dependabot.yml`)
- **DCO:** Developer Certificate of Origin for contributions
- **GitHub Actions:** Automated security scanning workflows

### Dependency Management

This repository uses Dependabot to automatically:
- Monitor dependencies for security vulnerabilities
- Create pull requests for security updates
- Update dependencies weekly (every Monday)
- Group related updates to reduce PR noise

### Code Scanning

When enabled, this repository uses:
- **CodeQL:** Static analysis for security vulnerabilities
- **Dependency Review:** Scans pull requests for vulnerable dependencies
- **Secret Scanning:** Detects accidentally committed secrets

## Common Security Issues in Tutorials

### API Keys and Credentials

**Problem:** Hardcoded API keys in code  
**Solution:** Use environment variables and `.env` files

```python
# Bad
api_key = "sk-1234567890abcdef" # pragma: allowlist secret

# Good
import os
api_key = os.getenv("API_KEY")
```

### Dependency Vulnerabilities

**Problem:** Using outdated packages with known vulnerabilities  
**Solution:** Regularly update dependencies and use security scanning

```bash
# Check for vulnerabilities
pip-audit -r requirements.txt

# Update packages
pip install --upgrade -r requirements.txt
```

### Input Validation

**Problem:** Not validating user input  
**Solution:** Always validate and sanitize input

```python
# Add input validation
from pydantic import BaseModel, validator

class UserInput(BaseModel):
    query: str

    @validator('query')
    def validate_query(cls, v):
        if len(v) > 1000:
            raise ValueError('Query too long')
        return v
```

## Security Checklist for Contributors

When contributing tutorials, ensure:

- [ ] No hardcoded credentials or API keys
- [ ] Dependencies use version ranges (not exact pins unless necessary)
- [ ] `.env.example` provided for required environment variables
- [ ] Input validation implemented where applicable
- [ ] Error handling doesn't expose sensitive information
- [ ] Dependencies scanned for vulnerabilities
- [ ] README includes security considerations
- [ ] Code follows secure coding practices

## Resources

### Security Tools

- [pip-audit](https://github.com/pypa/pip-audit) - Python dependency auditing
- [Safety](https://github.com/pyupio/safety) - Python dependency security checker
- [Bandit](https://github.com/PyCQA/bandit) - Python security linter
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Node.js security auditing
- [detect-secrets](https://github.com/Yelp/detect-secrets) - Secret scanning

### Best Practices

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Dependency Check](https://owasp.org/www-project-dependency-check/)
- [Python Security Best Practices](https://python.readthedocs.io/en/stable/library/security_warnings.html)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)

### IBM Security Resources

- [IBM Security](https://www.ibm.com/security)
- [IBM watsonx.ai Security](https://www.ibm.com/watsonx/security)
- [IBM Cloud Security](https://www.ibm.com/cloud/security)

## Contact

For security concerns:
- Use GitHub's private vulnerability reporting
- Open a GitHub Discussion for general security questions
- Check existing issues and discussions before reporting

## Acknowledgments

We appreciate the security research community's efforts in keeping our tutorials secure. Contributors who responsibly disclose vulnerabilities will be acknowledged in our security advisories.

---

**Last Updated:** May 2026  
**Version:** 1.0
