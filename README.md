
# 🌐 Personal Developer Portfolio — Next.js 16 + Tailwind CSS v4.0

A **fully responsive**, **SEO-optimized**, and **performance-focused** developer portfolio built with **Next.js 16 (App Router)** and **Tailwind CSS**.  
Includes a modular component system, MDX-powered blog and project pages, dynamic metadata, smooth animations, API integrations, and a clean, modern UI.

## Features

-  **Next.js App Router** with server-side rendering & dynamic routing
    
-  **Tailwind CSS** for utility-first, responsive styling
    
-  **MDX-powered blog & project pages** with automatic parsing
    
-  **SEO optimized** (OpenGraph images, sitemap, robots, metadata)
    
-  **Fully responsive** layout for all devices
    
-  **Smooth animations** & interactive UI components
    
-  **Dark/Light Theme Switching**
    
-  **GitHub Contributions** visualizer
    
-  **Reusable component architecture** (Hero, Tech Stack, Cards, Grids, etc.)
    
-  **Resume download**, custom sections & static content
    
-  **Content-layer architecture** using `content/` + MDX
    

## 🧱 Tech Stack

- **Framework:** Next.js 14 (App Router)
    
- **Styling:** Tailwind CSS
    
- **Content:** MDX
    
- **Icons/Graphics:** Custom SVGs from [techicons.dev](https://techicons.dev)
    
- **Deployment:** Vercel
    
- **Utilities:** TypeScript, ESLint, Prettier
    

## 📁 Project Structure

```
.
├── app
│   ├── blog
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [slug]
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── opengraph-image.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── work
│       ├── layout.tsx
│       ├── page.tsx
│       └── [slug]
│           └── page.tsx
│
├── components
│   ├── BannerImage.tsx
│   ├── BannerOverlay.tsx
│   ├── BlogCard.tsx
│   ├── ContactForm.tsx
│   ├── ExperienceContent.tsx
│   ├── Footer.tsx
│   ├── GithubContributions.tsx
│   ├── HeroSection.tsx
│   ├── logoText.tsx
│   ├── NavBar.tsx
│   ├── ProfileCard.tsx
│   ├── ProjectCard.tsx
│   ├── ReachMeOut.tsx
│   ├── ScrollToTop.tsx
│   ├── SectionBorder.tsx
│   ├── TechStack.tsx
│   ├── theme-switcher.tsx
│   └── ui/
│       ├── button.tsx
│       ├── container-text-flip.tsx
│       ├── grid-pattern-background.tsx
│       ├── resizable-navbar.tsx
│       ├── scroll-progress.tsx
│       ├── shimmer-button.tsx
│       └── tooltip.tsx
│
├── components.json
│
├── content
│   ├── blogs/*.mdx
│   └── projects/*.mdx
│
├── data
│   └── projects.ts
│
├── lib
│   ├── blog.ts
│   ├── mdx.ts
│   └── utils.ts
│
├── public
│   ├── profile.png
│   ├── profile-light.png
│   ├── resume.pdf
│   ├── projects/*.png
│   └── tech/*.svg
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file in the root:

```bash
touch .env.local
```

Add any required environment values (optional components):

```
# NEXT_PUBLIC_SITE_URL= https://your-domain.com
```

> If you use Vercel to deploy, add this under "Environment Variables"


## 🏃‍♂️ Running the Development Server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:3000
```

## 🚀 Production Build

```bash
npm run build
npm start
```

Or deploy directly to **Vercel**:

```bash
vercel deploy
```


## 📝 Writing Blog & Project Content (MDX)

Add posts under:

```
content/blogs/*.mdx
content/projects/*.mdx
```

Example front-matter:

```mdx
---
title: "Linux as a Daily Driver"
description: "Notes on using Linux day to day"
date: "2024-11-15"
cover: "/projects/linux.png"
---

Your MDX content here...
```

MDX supports:

- Code blocks
    
- Custom components
    
- Syntax highlighting
    
- Markdown + JSX
    


## 🧩 Adding New Projects

Edit:

```
data/projects.ts
```

Or add MDX pages inside:

```
content/projects/
```

Each project includes:

- Title
    
- Description
    
- Tags
    
- Links
    
- Cover image
    

## 🧪 Linting & Formatting

```bash
npm run lint
```


## 📦 Deployment

The portfolio is fully optimized for:

- Vercel
    
- Netlify
    
- GitHub Pages (Next export)
    

Best experience: **Vercel**.


## 🤝 Contributing

This is a personal portfolio, but feel free to fork the repo or use the structure for your own portfolio.This is primarily a personal project,but contributions that improve performance, accessibility, documentation, UI, or overall developer experience are always welcome. For any contributions, refer to [CONTRIBUTING.md](https://github.com/xyzprtk/prtkfolio/blob/main/CONTRIBUTING.md) for instructions.


## 📜 License

MIT License.
<!-- Project & license -->
![MIT License](https://img.shields.io/badge/License-MIT-brightgreen?style=flat)

## Built Using

<!-- Primary stack -->
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-FF69B4?style=flat)

