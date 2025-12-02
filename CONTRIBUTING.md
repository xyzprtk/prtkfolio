# Contributing Guide

Thank you for your interest in contributing!  
This project is primarily a personal portfolio, but contributions that improve **performance**, **accessibility**, **UI quality**, **content structure**, or **developer experience** are welcome.

Please follow the guidelines below to ensure smooth collaboration.

---

## 📜 Table of Contents

- [Getting Started](#getting-started)
    
- [Development Setup](#development-setup)
    
- [Branching Strategy](#branching-strategy)
    
- [Commit Messages](#commit-messages)
    
- [Coding Guidelines](#coding-guidelines)
    
- [Adding Components](#adding-components)
    
- [Adding Blog Posts](#adding-blog-posts)
    
- [Adding Projects](#adding-projects)
    
- [Pull Requests](#pull-requests)
    
- [Issue Reporting](#issue-reporting)
    
- [License](#license)
    


## Getting Started

1. **Fork** the repository.
    
2. **Clone** your fork:
    

```bash
git clone https://github.com/xyzprtk/prtkfolio.git
cd prtkfolio
```

3. **Install dependencies**:
    

```bash
npm install
```

4. **Start the development server**:
    

```bash
npm run dev
```

The app will be live at:

```
http://localhost:3000
```

## 🛠 Development Setup

The project uses:

- **Next.js (App Router)**
    
- **TypeScript**
    
- **Tailwind CSS**
    
- **MDX**
    
- **ESLint** for linting
    

### Linting

```bash
npm run lint
```

### Type checking

```bash
npm run type-check
```

### Formatting

```bash
npm run format
```

## 🌿 Branching Strategy

Use feature branches for any changes:

- `main` → production-ready code
    
- `feature/<feature-name>` → new components or enhancements
    
- `fix/<bug-name>` → bug fixes or refactors
    

Examples:

```
feature/add-theme-switcher
fix/navbar-overflow
```


## 📝 Commit Messages

Follow **Conventional Commits**:

```
feat: add new TechStack section
fix: resolve navbar layout bug
refactor: clean up MDX rendering logic
docs: add contributing guidelines
style: format Tailwind classes
```

## ⚙️ Coding Guidelines

- Use **TypeScript** for all files
    
- Prefer **server components** unless the feature requires client-side interactivity
    
- Use **functional components + hooks**
    
- Keep UI components reusable
    
- Avoid unnecessary external dependencies
    
- Use **Tailwind CSS** utilities — minimize custom CSS
    
- Use `next/image` for optimized images
    
- Maintain consistent file naming (camelCase for components, kebab-case for MDX files)
    

## 🎨 Adding Components

### Where to place components

- **UI primitives:**  
    `components/ui/*`
    
- **Section / page components:**  
    `components/*`
    

### Guidelines

- One component per file
    
- Default exports preferred
    
- Keep components composable
    
- Ensure mobile responsiveness
    
- Add comments only where needed
    

## 📝 Adding Blog Posts (MDX)

Place new posts under:

```
content/blogs/
```

Use consistent frontmatter:

```md
---
title: "Post Title"
description: "Short description"
date: "2024-11-15"
cover: "/projects/example.png"
---
```

MDX supports JSX components and markdown syntax.

Routing is automatic — no extra setup required.


## 📂 Adding Project Pages (MDX)

Add files under:

```
content/projects/
```

Follow frontmatter patterns from existing project files.

If you add metadata in TypeScript instead:

```
data/projects.ts
```

Update the object to include your new project.


## 🔄 Pull Requests

Before creating a PR:

1. Sync with the latest `main`:
    

```bash
git pull origin main
```

2. Ensure code quality:
    

```bash
npm run lint
npm run type-check
```

3. Push your branch:
    

```bash
git push -u origin feature/<name>
```

### PR Requirements

- Clear title & description
    
- If UI changes → include screenshots
    
- Reference related issues
    
- Keep PR scope small


## 🐛 Issue Reporting

To report bugs or request features:

- Open an issue
    
- Provide clear description
    
- Add steps to reproduce
    
- Include screenshots if UI-related
    
- Mention browser + device if applicable
    

Example issue template:

```
### Issue
Describe what happened.

### Steps to Reproduce
1. Go to...
2. Click...
3. Observe...

### Expected Behavior
Describe what should have happened.

### Environment
Browser, OS, Device
```

## 📄 License

This project is licensed under the **MIT License**.  
By contributing, you agree your contributions will be released under this license.
