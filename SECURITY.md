# Security Policy

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Report vulnerabilities privately via [GitHub's private vulnerability reporting](https://github.com/IBM/ibmdotcom-tutorials/security/advisories/new) or by emailing the maintainers directly.

We will acknowledge your report within 48 hours and aim to ship a fix within 7 days for critical issues.

## Supported Versions

Security fixes are applied to the `main` branch only. Older tutorial snapshots are not backported.

## Automated Security Tooling

This repository uses the following automated security measures:

| Tool | Schedule / Triggers | What it does |
|------|--------------------|-------------|
| **Dependabot** | Weekly (Mondays 09:00 UTC) | Scans and opens PRs to update vulnerable dependencies across all package manifests |
| **Dependency Review** | PRs targeting `main` | Blocks any PR that introduces moderate or higher severity vulnerabilities |
| **CodeQL** | Push/PR to `main`, weekly schedule | Static analysis for Python and JavaScript |
| **pip-audit + Bandit** | Push/PR to `main`, weekly schedule | Scans Python dependencies for vulnerabilities and analyzes code |
| **detect-secrets** | Push/PR to `main` | Blocks commits containing unbaselined secrets or credentials |

## For Tutorial Users

These tutorials install third-party packages. Before running any tutorial in a production or sensitive environment:

- Use a dedicated virtual environment (`python -m venv .venv`)
- Pin dependency versions to known-good values
- Review the tutorial's `requirements.txt` or `pyproject.toml` against current CVE databases
- Never commit real API keys or credentials — use environment variables or `.env` files (which are gitignored)
