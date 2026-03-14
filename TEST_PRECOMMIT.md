# Testing Pre-commit Hooks

This guide shows you how to test that the pre-commit hooks are working correctly.

## 🚀 Quick Test

### Step 1: Install Pre-commit Hooks

```bash
# Install pre-commit (if not already installed)
pip install pre-commit

# Install the git hooks
pre-commit install
```

You should see:
```
pre-commit installed at .git/hooks/pre-commit
```

### Step 2: Test Without Committing

Run pre-commit on all files to see if it works:

```bash
pre-commit run --all-files
```

This will:
- ✅ Run Ruff linter on all Python files
- ✅ Run Ruff formatter
- ✅ Check for secrets
- ✅ Check YAML/TOML/JSON syntax
- ✅ Fix trailing whitespace
- ✅ Ensure files end with newline

### Step 3: Test with a Sample File

Create a test file with intentional issues:

```bash
# Create a test file with linting issues
cat > test_linting.py << 'EOF'
import os
import sys
import json

def bad_function(  ):
    x=1+2
    unused_var = "not used"
    return x

# Hardcoded secret (will be detected)
api_key = "sk-1234567890abcdef1234567890abcdef"  # pragma: allowlist secret

if __name__=="__main__":
    print( "Hello World" )
EOF
```

### Step 4: Run Pre-commit on Test File

```bash
pre-commit run --files test_linting.py
```

You should see:
- Ruff fixing import issues
- Ruff fixing formatting
- detect-secrets flagging the API key
- Issues being auto-fixed where possible

### Step 5: Test with Git Commit

```bash
# Stage the test file
git add test_linting.py

# Try to commit (hooks will run automatically)
git commit -m "Test pre-commit hooks"
```

The hooks will:
1. Run automatically before the commit
2. Fix auto-fixable issues
3. Block the commit if there are unfixable issues (like the secret)
4. Show you what needs to be fixed

### Step 6: Fix Issues and Retry

```bash
# Remove the hardcoded secret
sed -i '' '/api_key = "sk-/d' test_linting.py

# Stage the changes
git add test_linting.py

# Try committing again
git commit -m "Test pre-commit hooks"
```

Now it should succeed!

### Step 7: Clean Up

```bash
# Remove the test file
git rm test_linting.py
git commit -m "Remove test file"
```

## 🔍 Detailed Testing

### Test Individual Hooks

```bash
# Test only Ruff linter
pre-commit run ruff-lint --all-files

# Test only Ruff formatter
pre-commit run ruff-format --all-files

# Test only secret detection
pre-commit run detect-secrets --all-files

# Test only trailing whitespace
pre-commit run trailing-whitespace --all-files
```

### Test on Specific Files

```bash
# Test on a specific tutorial
pre-commit run --files tutorials/01-rag-and-retrieval/langchain-rag.ipynb

# Test on multiple files
pre-commit run --files file1.py file2.py file3.py
```

### Test with Verbose Output

```bash
# See detailed output
pre-commit run --all-files --verbose

# See what would be checked without running
pre-commit run --all-files --show-diff-on-failure
```

## ✅ Expected Results

### Successful Run
```
ruff-lint................................................................Passed
ruff-format..............................................................Passed
detect-secrets...........................................................Passed
check-added-large-files..................................................Passed
check-case-conflict......................................................Passed
check-merge-conflict.....................................................Passed
check-yaml...............................................................Passed
check-toml...............................................................Passed
check-json...............................................................Passed
end-of-file-fixer........................................................Passed
trailing-whitespace......................................................Passed
mixed-line-ending........................................................Passed
```

### Failed Run (with issues)
```
ruff-lint................................................................Failed
- hook id: ruff-lint
- exit code: 1

Found 5 errors.
[*] 3 fixable with the `--fix` option.

detect-secrets...........................................................Failed
- hook id: detect-secrets
- exit code: 1

Potential secrets detected!
```

## 🐛 Troubleshooting

### Hook Not Running

```bash
# Check if hooks are installed
ls -la .git/hooks/pre-commit

# Reinstall if needed
pre-commit uninstall
pre-commit install
```

### Update Hooks

```bash
# Update to latest versions
pre-commit autoupdate

# Clean cache and reinstall
pre-commit clean
pre-commit install --install-hooks
```

### Skip Hooks (Emergency Only)

```bash
# Skip all hooks for one commit (NOT RECOMMENDED)
git commit --no-verify -m "Emergency commit"

# Skip specific hook
SKIP=detect-secrets git commit -m "Skip secret detection"
```

### Check Configuration

```bash
# Validate pre-commit config
pre-commit validate-config

# Validate manifest
pre-commit validate-manifest
```

## 📊 Performance Testing

```bash
# Time how long hooks take
time pre-commit run --all-files

# See which hooks are slowest
pre-commit run --all-files --verbose | grep "Passed\|Failed"
```

## 🎯 What to Look For

### ✅ Good Signs
- Hooks run automatically on commit
- Auto-fixes are applied
- Clear error messages for issues
- Fast execution (< 10 seconds for most files)

### ❌ Problems
- Hooks don't run on commit
- Errors without clear messages
- Very slow execution (> 30 seconds)
- False positives on every file

## 💡 Tips

1. **Run before committing**: `pre-commit run --all-files` before making commits
2. **Fix incrementally**: Don't try to fix all issues at once
3. **Use auto-fix**: Let Ruff fix what it can automatically
4. **Update regularly**: Run `pre-commit autoupdate` monthly
5. **Read the output**: Error messages tell you exactly what to fix

## 📚 Common Commands Reference

```bash
# Install hooks
pre-commit install

# Run on all files
pre-commit run --all-files

# Run on staged files only
pre-commit run

# Run specific hook
pre-commit run <hook-id>

# Update hooks
pre-commit autoupdate

# Uninstall hooks
pre-commit uninstall

# Clean cache
pre-commit clean
```

---

**Need help?** Check `LINTING.md` for detailed documentation or open an issue!
