#!/usr/bin/env python3
"""
Setup script for installing and configuring Ruff linting with pre-commit hooks.

This script automates the installation process for the IBM Tutorials repository.

Usage:
    python setup-linting.py
"""

import subprocess
import sys
from pathlib import Path


def print_header(message: str) -> None:
    """Print a formatted header message."""
    print("\n" + "=" * 70)
    print(f"  {message}")
    print("=" * 70 + "\n")


def print_success(message: str) -> None:
    """Print a success message."""
    print(f"✅ {message}")


def print_error(message: str) -> None:
    """Print an error message."""
    print(f"❌ {message}", file=sys.stderr)


def print_info(message: str) -> None:
    """Print an info message."""
    print(f"ℹ️  {message}")


def check_python_version() -> bool:
    """Check if Python version meets requirements (3.10+)."""
    version = sys.version_info
    if version.major == 3 and version.minor >= 10:
        print_success(
            f"Python version {version.major}.{version.minor}.{version.micro} is compatible"
        )
        return True
    print_error(f"Python 3.10+ required, but found {version.major}.{version.minor}.{version.micro}")
    return False


def check_git_repo() -> bool:
    """Check if we're in a git repository."""
    try:
        subprocess.run(
            ["git", "rev-parse", "--git-dir"], check=True, capture_output=True, text=True
        )
        print_success("Git repository detected")
        return True
    except subprocess.CalledProcessError:
        print_error("Not in a git repository. Please run this from the repository root.")
        return False


def install_package(package: str) -> bool:
    """Install a Python package using pip."""
    try:
        print_info(f"Installing {package}...")
        subprocess.run(
            [sys.executable, "-m", "pip", "install", "--upgrade", package],
            check=True,
            capture_output=True,
            text=True,
        )
        print_success(f"{package} installed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print_error(f"Failed to install {package}: {e}")
        return False


def install_pre_commit_hooks() -> bool:
    """Install pre-commit git hooks."""
    try:
        print_info("Installing pre-commit hooks...")
        result = subprocess.run(
            ["pre-commit", "install"], check=True, capture_output=True, text=True
        )
        print_success("Pre-commit hooks installed")
        print_info(result.stdout.strip())
        return True
    except subprocess.CalledProcessError as e:
        print_error(f"Failed to install pre-commit hooks: {e}")
        return False


def run_initial_check() -> None:
    """Run pre-commit on all files to show initial status."""
    print_info("Running initial linting check on all files...")
    print_info("This may take a moment and will show any issues found...")
    print()

    try:
        # Run pre-commit, but don't fail if there are issues
        result = subprocess.run(
            ["pre-commit", "run", "--all-files"], capture_output=True, text=True
        )

        # Show output regardless of exit code
        if result.stdout:
            print(result.stdout)
        if result.stderr:
            print(result.stderr, file=sys.stderr)

        if result.returncode == 0:
            print_success("All files passed linting checks!")
        else:
            print_info("Some files had issues that were auto-fixed or need attention.")
            print_info("Review the output above and commit any auto-fixed changes.")
    except FileNotFoundError:
        print_error("pre-commit command not found. Installation may have failed.")
    except Exception as e:
        print_error(f"Error running initial check: {e}")


def verify_config_files() -> bool:
    """Verify that required configuration files exist."""
    required_files = ["pyproject.toml", ".pre-commit-config.yaml", "LINTING.md"]

    all_exist = True
    for file in required_files:
        if Path(file).exists():
            print_success(f"Found {file}")
        else:
            print_error(f"Missing {file}")
            all_exist = False

    return all_exist


def main() -> int:
    """Main setup function."""
    print_header("IBM Tutorials - Linting Setup")

    # Step 1: Check Python version
    print_header("Step 1: Checking Python Version")
    if not check_python_version():
        return 1

    # Step 2: Check git repository
    print_header("Step 2: Checking Git Repository")
    if not check_git_repo():
        return 1

    # Step 3: Verify configuration files
    print_header("Step 3: Verifying Configuration Files")
    if not verify_config_files():
        print_error("Some configuration files are missing.")
        print_info("Please ensure you're running this from the repository root.")
        return 1

    # Step 4: Install pre-commit
    print_header("Step 4: Installing Pre-commit")
    if not install_package("pre-commit"):
        return 1

    # Step 5: Install Ruff (optional, as pre-commit will install it)
    print_header("Step 5: Installing Ruff")
    if not install_package("ruff"):
        print_info("Ruff installation failed, but pre-commit will install it automatically.")

    # Step 6: Install pre-commit hooks
    print_header("Step 6: Installing Pre-commit Hooks")
    if not install_pre_commit_hooks():
        return 1

    # Step 7: Run initial check
    print_header("Step 7: Running Initial Linting Check")
    run_initial_check()

    # Success message
    print_header("Setup Complete!")
    print_success("Linting with Ruff and pre-commit hooks is now configured!")
    print()
    print("📚 Next Steps:")
    print("   1. Review LINTING.md for usage instructions")
    print("   2. Commit any auto-fixed changes: git add . && git commit")
    print("   3. Pre-commit hooks will now run automatically on each commit")
    print()
    print("🔧 Manual Commands:")
    print("   • Run on all files:     pre-commit run --all-files")
    print("   • Run Ruff directly:    ruff check .")
    print("   • Format code:          ruff format .")
    print("   • Update hooks:         pre-commit autoupdate")
    print()
    print("❓ Need Help?")
    print("   • Read LINTING.md for detailed documentation")
    print("   • Visit https://docs.astral.sh/ruff/")
    print("   • Visit https://pre-commit.com/")
    print()

    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\n\n⚠️  Setup interrupted by user")
        sys.exit(130)
    except Exception as e:
        print_error(f"Unexpected error: {e}")
        sys.exit(1)

# Made with Bob
