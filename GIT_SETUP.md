# 🔧 Git Setup Guide for WEB Submodule

This guide helps you set up the WEB repository as a Git submodule in the main JARDINEO_ repository.

---

## 📋 Prerequisites

- You have push access to GitHub/GitLab
- Main JARDINEO_ repository is already initialized
- You're in the WEB directory

---

## 🚀 Step 1: Create Remote Repository

### On GitHub:

1. Go to https://github.com/new
2. Repository name: `jardineo-web` (or your chosen name)
3. Description: "Jardineo Web Portal - Mobile App Distribution"
4. Visibility: Private or Public (your choice)
5. **Do NOT** initialize with README (we already have one)
6. Click "Create repository"

### On GitLab:

1. Go to New Project
2. Project name: `jardineo-web`
3. Same settings as GitHub

---

## 🔧 Step 2: Initialize Git in WEB Directory

```bash
# Navigate to WEB directory
cd WEB

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "[FEAT] initial commit - Jardineo Web Portal v1.0.0"
```

---

## 🔗 Step 3: Link to Remote Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values:

```bash
# Add remote (HTTPS)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# OR add remote (SSH) - recommended
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# Verify remote
git remote -v
```

---

## 📤 Step 4: Push to Remote

```bash
# Create and switch to main branch
git branch -M main

# Push to remote
git push -u origin main
```

---

## 🔄 Step 5: Add as Submodule to Main Repository

### In Main JARDINEO_ Repository:

```bash
# Navigate to main repository root
cd /home/frcjules/Documents/Epitech/JARDINEO_

# Remove WEB directory (will be replaced by submodule)
# IMPORTANT: Make sure you pushed WEB to remote first!
rm -rf WEB

# Add WEB as a submodule
git submodule add git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git WEB

# OR with HTTPS:
git submodule add https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git WEB

# Commit the submodule addition
git add .gitmodules WEB
git commit -m "[FEAT] add WEB submodule for app distribution portal"
git push origin dev
```

---

## ✅ Step 6: Verify Submodule Setup

```bash
# Check submodule status
git submodule status

# Should show something like:
# 1234567890abcdef WEB (heads/main)

# View .gitmodules
cat .gitmodules

# Should contain:
# [submodule "WEB"]
#     path = WEB
#     url = git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

---

## 🌿 Step 7: Create Dev Branch in WEB Submodule

```bash
# Navigate to WEB
cd WEB

# Create and push dev branch
git checkout -b dev
git push -u origin dev

# Return to main branch
git checkout main

# Back to root
cd ..
```

---

## 📝 Step 8: Update Main Repository CLAUDE.md (Optional)

Add to `CLAUDE.md` in main repo:

```markdown
### WEB Submodule

- `WEB/` - Web portal for mobile app distribution
  - Technology: Next.js 15 + TypeScript + Tailwind CSS
  - Purpose: Download portal for Android APK and iOS TestFlight
  - Repository: https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
```

---

## 🔄 Daily Workflow with Submodules

### Working on WEB:

```bash
# Navigate to submodule
cd WEB

# Make sure you're on a branch (not detached HEAD)
git checkout dev

# Pull latest changes
git pull origin dev

# Make changes...

# Commit and push
git add .
git commit -m "[FEAT] your changes"
git push origin dev
```

### Updating WEB pointer in main repo:

```bash
# After merging WEB changes to main
cd /home/frcjules/Documents/Epitech/JARDINEO_

# Update submodule to latest
git submodule update --remote WEB

# Commit the pointer update
git add WEB
git commit -m "chore: update WEB submodule to latest"
git push origin dev
```

---

## 🆕 Cloning Main Repo with Submodules (For Team)

```bash
# Clone with submodules
git clone --recurse-submodules git@github.com:YOUR_ORG/JARDINEO_.git

# OR if already cloned without submodules:
git submodule update --init --recursive
```

---

## 🐛 Common Issues

### Detached HEAD in submodule:

```bash
cd WEB
git checkout main  # or dev
```

### Submodule not initialized:

```bash
git submodule update --init WEB
```

### Submodule changes not showing:

```bash
# In main repo
git add WEB
git commit -m "chore: update WEB submodule"
```

---

## 🔒 Important Notes

1. **Always work on a branch** in the submodule, never in detached HEAD
2. **Push submodule changes first**, then update pointer in main repo
3. **Communicate with team** when updating submodule pointers
4. **Use SSH keys** for easier authentication (recommended)

---

## 📚 Resources

- [Git Submodules Documentation](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Jardineo CLAUDE.md](../CLAUDE.md) - Main repo submodule guidelines

---

## ✅ Checklist

- [ ] Remote repository created
- [ ] Git initialized in WEB
- [ ] Files committed to WEB repo
- [ ] Remote added and pushed
- [ ] Submodule added to main repo
- [ ] .gitmodules updated
- [ ] Dev branch created in WEB
- [ ] Team notified of new submodule

---

**Setup complete! 🎉**
