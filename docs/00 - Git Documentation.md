# Git Blue Puffin project Management

## 1. Main Branches

### `main`
- Always contains **stable and tested** code.
- Represents the **official version** of the project.
- Every update to `main` must come from a **merge request** (MR) from `developp`.

### `developp`
- Main branch for **active development**.
- New features and bug fixes are merged here before being validated for `main`.
- Can receive feature branches (`feature/*`), bug fix branches (`hotfix/*`), and integration branches (`release/*`).

### `prod`
- Contains the **production-ready code**.
- Any production deployment is done via a **merge request** from `main` to `prod`.
- This branch should never be modified directly.

---

## 2. Naming Convention for Secondary Branches

### Development Branches
- `feature/<name>`: A new feature under development.
  - Example: `feature/authentication`
- `fix/<name>`: A bug fix.
  - Example: `fix/login-correction`
- `refactor/<name>`: Code improvement without functional changes.
  - Example: `refactor/code-cleanup`
- `hotfix/<name>`: An urgent fix to apply in production.
  - Example: `hotfix/api-error-500`
- `release/<version>`: A branch dedicated to preparing a new stable version.
  - Example: `release/2.1.0`

---

## 3. Development Process

### Creating a New Working Branch
```bash
# From developp
git checkout developp
git pull origin developp
git checkout -b feature/new-feature
```

### Adding and Committing Changes
```bash
git add .
git commit -m "feat: Implement new feature"
```

### Updating with the developp Branch
```bash
git checkout developp
git pull origin developp
git checkout feature/new-feature
git rebase developp
```

### Merging a Feature Branch into developp
```bash
git checkout developp
git merge --no-ff feature/new-feature
git push origin developp
git branch -d feature/new-feature
```

---

## 4. Commit Message Naming Convention

Each commit must follow this format:
```
<type>: <short description>

<detailed description if necessary>
```

### Commit Types
- `feat:` Adding a new feature
- `fix:` Bug fix
- `refactor:` Code refactoring with no functional impact
- `perf:` Performance improvement
- `test:` Adding or modifying tests
- `docs:` Documentation update
- `chore:` Minor changes (dependencies update, configuration...)

**Examples:**
```bash
git commit -m "feat: Add user login"
git commit -m "fix: Fix form validation bug"
git commit -m "docs: Add section on Git management"
```