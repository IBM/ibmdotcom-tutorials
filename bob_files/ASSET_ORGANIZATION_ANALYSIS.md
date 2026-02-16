# Asset Organization Analysis & Recommendations

**Date:** February 16, 2026  
**Purpose:** Analyze current asset structure and provide recommendations for better organization

---

## Current State Analysis

### Existing Asset Directories

```
Repository Root:
├── assets/              # Mixed-purpose assets (tutorial diagrams, presentations)
│   ├── aosh.txt        # Tutorial data file
│   ├── Application Integration client presentation.PPTX
│   ├── building-agentic-workflow-langgraph.png
│   ├── llm-agent-orchestration-1.png
│   ├── llm-agent-orchestration-2.png
│   ├── LLM-agent-orchestration.png
│   └── readme.md
├── images/              # Repository branding/logos
│   ├── license.png
│   ├── license.svg
│   └── tutorialslogo.png
├── stylesheets/         # Custom CSS (should be in docs/)
│   └── style.css
└── docs/
    ├── assets/          # MkDocs documentation assets
    │   ├── official_logo.png
    │   └── tutorialslogo.png
    └── stylesheets/     # MkDocs custom CSS
        └── style.css
```

### Asset Usage Analysis

**1. Tutorial References Found:**
- `llm-agent-orchestration.ipynb` references `/assets/` with **hardcoded absolute paths**
- Most tutorials use **relative paths** to local `images/` folders within their own directories
- Some tutorials reference **external URLs** (IBM assets CDN)
- MCP tutorial uses relative `images/` paths correctly

**2. Critical Issues Identified:**

#### Issue A: Hardcoded Absolute Paths
```python
# In llm-agent-orchestration.ipynb
display(Image(filename='/Users/vrundagadesha/Documents/GitHub/ibmdotcom-tutorials/assets/LLM-agent-orchestration.png', embed=True))
```
**Impact:** ❌ Will break for all users except original author

#### Issue B: Duplicate Stylesheets
- `/stylesheets/style.css` (root)
- `/docs/stylesheets/style.css` (MkDocs)
**Impact:** ⚠️ Confusion about which is canonical

#### Issue C: Mixed Asset Purposes
- `/assets/` contains both tutorial-specific images AND general presentations
- No clear separation between tutorial content and repository metadata

#### Issue D: Inconsistent Image Storage
- Some tutorials have local `images/` folders (✅ Good)
- Some reference root `/assets/` (⚠️ Problematic)
- Some use external URLs (✅ Fine for external resources)

---

## Recommended Structure

### Option 1: Centralized Tutorial Assets (Recommended)

```
Repository Root:
├── docs/                           # MkDocs documentation ONLY
│   ├── assets/                     # Documentation assets (logos, icons)
│   │   ├── official_logo.png
│   │   └── tutorialslogo.png
│   └── stylesheets/                # MkDocs custom CSS
│       └── style.css
│
├── tutorials/                      # Tutorial content
│   ├── shared-assets/              # Shared tutorial resources
│   │   ├── images/                 # Shared diagrams/images
│   │   │   ├── llm-agent-orchestration.png
│   │   │   ├── llm-agent-orchestration-1.png
│   │   │   ├── llm-agent-orchestration-2.png
│   │   │   └── building-agentic-workflow-langgraph.png
│   │   ├── data/                   # Shared data files
│   │   │   ├── nyc_hourly_temp.csv
│   │   │   ├── aosh.txt
│   │   │   └── ibmredbook.pdf
│   │   └── presentations/          # Reference materials
│   │       └── Application Integration client presentation.PPTX
│   │
│   └── 02-agents-and-orchestration/
│       ├── llm-agent-orchestration.ipynb
│       └── images/                 # Tutorial-specific images (if any)
│
└── .github/                        # Repository metadata
    └── assets/                     # GitHub-specific assets (badges, etc.)
        ├── license.png
        └── license.svg
```

**Advantages:**
- ✅ Clear separation: docs assets vs. tutorial assets vs. repo metadata
- ✅ Shared tutorial assets in one location (`tutorials/shared-assets/images/`)
- ✅ Tutorial-specific images stay with their tutorials
- ✅ Relative paths work consistently
- ✅ Easy to reference: `../shared-assets/images/diagram.png`

### Option 2: Keep Root Assets (Alternative)

```
Repository Root:
├── assets/                         # Shared tutorial assets
│   ├── images/                     # Tutorial diagrams
│   ├── data/                       # Tutorial data files
│   └── presentations/              # Reference materials
│
├── docs/                           # MkDocs documentation
│   ├── assets/                     # Documentation-only assets
│   └── stylesheets/
│
└── tutorials/                      # Tutorial content
    └── 02-agents-and-orchestration/
        └── images/                 # Tutorial-specific images
```

**Advantages:**
- ✅ Shorter paths from tutorials: `../../assets/images/`
- ✅ Keeps shared assets at root level
- ⚠️ Less clear separation between tutorial and repo assets

---

## Migration Plan

### Phase 1: Reorganize Root Assets (Recommended: Option 1)

**Step 1: Move tutorial-related assets**
```bash
# Create structure
mkdir -p tutorials/shared-assets/{images,data,presentations}

# Move tutorial images
mv assets/llm-agent-orchestration*.png tutorials/shared-assets/images/
mv assets/building-agentic-workflow-langgraph.png tutorials/shared-assets/images/

# Move tutorial data
mv assets/aosh.txt tutorials/shared-assets/data/

# Move presentations
mv assets/"Application Integration client presentation.PPTX" tutorials/shared-assets/presentations/
```

**Step 2: Move repository branding to GitHub assets**
```bash
mkdir -p .github/assets
mv images/license.* .github/assets/
```

**Step 3: Consolidate stylesheets**
```bash
# Keep only docs stylesheet
rm stylesheets/style.css
rmdir stylesheets
# docs/stylesheets/style.css remains
```

**Step 4: Clean up**
```bash
# Remove empty directories
rmdir assets images
```

### Phase 2: Fix Tutorial References

**Files Requiring Updates:**

1. **`tutorials/02-agents-and-orchestration/llm-agent-orchestration.ipynb`**
   
   **Current (BROKEN):**
   ```python
   display(Image(filename='/Users/vrundagadesha/Documents/GitHub/ibmdotcom-tutorials/assets/LLM-agent-orchestration.png', embed=True))
   ```
   
   **Fixed:**
   ```python
   display(Image(filename='../shared-assets/images/llm-agent-orchestration.png', embed=True))
   ```
   
   **Or better (works in Jupyter and rendered docs):**
   ```python
   from IPython.display import Image
   import os
   
   # Get path relative to notebook
   img_path = os.path.join('..', 'shared-assets', 'images', 'llm-agent-orchestration.png')
   display(Image(filename=img_path))
   ```

2. **Update data file references**
   
   Any tutorial referencing `./assets/aosh.txt` should update to:
   ```python
   file_path = "../shared-assets/data/aosh.txt"
   ```

### Phase 3: Update Documentation

**Files to Update:**

1. **`README.md`** - Update any asset references
2. **`docs/index.md`** - Update logo paths if needed
3. **`mkdocs.yml`** - Verify asset paths in theme configuration

---

## Impact Assessment

### Will This Break Links?

**In Tutorials:** ⚠️ **YES** - But only 1-2 notebooks affected
- `llm-agent-orchestration.ipynb` has hardcoded paths (already broken for most users)
- Easy to fix with relative paths

**In Documentation:** ✅ **NO** - If done correctly
- MkDocs assets stay in `docs/assets/`
- Documentation references won't change

**In GitHub:** ✅ **NO**
- README badges and images can reference `.github/assets/`
- Or keep in root `images/` if preferred

### Risk Mitigation

**Low Risk Changes:**
1. Moving tutorial assets to `tutorials/shared-assets/` - only affects 1-2 notebooks
2. Consolidating stylesheets - only affects MkDocs build
3. Moving repo metadata to `.github/assets/` - only affects README

**Medium Risk Changes:**
1. Updating hardcoded paths in notebooks - requires testing each notebook

**Recommended Approach:**
1. ✅ Move assets first (Phase 1)
2. ✅ Fix known broken references (Phase 2)
3. ✅ Test affected notebooks
4. ✅ Update documentation (Phase 3)

---

## Recommended Action Plan

### Immediate Actions (Low Risk)

```bash
# 1. Create new structure
mkdir -p tutorials/shared-assets/{images,data,presentations}
mkdir -p .github/assets

# 2. Copy (not move) assets first for safety
cp assets/llm-agent-orchestration*.png tutorials/shared-assets/images/
cp assets/building-agentic-workflow-langgraph.png tutorials/shared-assets/images/
cp assets/aosh.txt tutorials/shared-assets/data/
cp images/license.* .github/assets/

# 3. Test that tutorials still work with new paths
# (Update notebook paths and test)

# 4. Once confirmed working, remove old assets
# rm -rf assets/ images/ stylesheets/
```

### Path Update Strategy

**For Notebooks:**
Use relative paths from notebook location:
```python
# From tutorials/02-agents-and-orchestration/notebook.ipynb
# To tutorials/shared-assets/images/diagram.png
path = "../shared-assets/images/diagram.png"
```

**For Markdown:**
```markdown
<!-- From tutorials/03-multi-agent-systems/tutorial.md -->
<!-- To tutorials/shared-assets/images/diagram.png -->
![Diagram](../shared-assets/images/diagram.png)
```

---

## Final Recommendation

### ✅ Recommended Structure

```
Repository Root:
├── .github/assets/          # Repository metadata (badges, license images)
├── docs/                    # MkDocs documentation
│   ├── assets/              # Documentation assets only
│   └── stylesheets/         # MkDocs CSS only
└── tutorials/               # All tutorial content
    ├── shared-assets/       # Shared tutorial resources
    │   ├── images/          # Shared diagrams
    │   ├── data/            # Shared data files
    │   └── presentations/   # Reference materials
    └── [categories]/        # Tutorial categories
        └── images/          # Tutorial-specific images
```

### Why This Works

1. **Clear Separation**: Docs, tutorials, and repo metadata are distinct
2. **Consistent Paths**: All tutorials use `../shared-assets/` pattern
3. **Scalable**: Easy to add new shared assets
4. **Maintainable**: Clear ownership of each asset type
5. **Minimal Breakage**: Only 1-2 notebooks need path updates

### Implementation Priority

1. **High Priority**: Fix hardcoded absolute paths (already broken)
2. **Medium Priority**: Reorganize assets into logical structure
3. **Low Priority**: Move repo metadata to `.github/assets/`

---

## Questions & Answers

**Q: Will moving assets break existing tutorials?**  
A: Only if they use absolute paths (1-2 notebooks). Relative paths will need updating but are easy to fix.

**Q: Should we keep assets at root level?**  
A: No. Better to have them under `tutorials/shared-assets/` for clear separation and consistent relative paths.

**Q: What about the stylesheets directory?**  
A: Remove root `stylesheets/`. Keep only `docs/stylesheets/` for MkDocs.

**Q: What about images used in README?**  
A: Move to `.github/assets/` or keep a minimal `images/` at root for README badges/logos.

---

## Next Steps

1. Review this analysis
2. Decide on Option 1 (recommended) or Option 2
3. Execute Phase 1 (asset reorganization)
4. Execute Phase 2 (fix tutorial references)
5. Execute Phase 3 (update documentation)
6. Test and validate

**Estimated Effort:** 2-3 hours  
**Risk Level:** Low (only 1-2 notebooks affected)  
**Benefit:** High (cleaner structure, consistent paths)