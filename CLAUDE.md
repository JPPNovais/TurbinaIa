# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build
npm run lint         # Run ESLint
npm run generate-article          # Generate article via Gemini AI (auto-selects topic)
npm run generate-article "Tema"   # Generate article about a specific topic
node scripts/update-models.js     # Update AI models data in src/data/ai-models.ts
```

`generate-article` requires `GEMINI_API_KEY` in a `.env` file at the project root.

## Architecture

This is a **content-driven blog portal** about Artificial Intelligence, deployed at `turbinaia.com.br`. It uses Next.js App Router with React Server Components by default. Client interactivity is added with `"use client"` components alongside the Server Component pages.

### Content Pipeline

Articles are Markdown files stored in `content/articles/`. The filename (without `.md`) becomes the URL slug. `src/lib/articles.ts` is the single entry point for reading article data — it parses YAML frontmatter with `gray-matter` and converts Markdown to HTML with `marked`.

Article frontmatter schema:
```yaml
---
title: "..."
description: "..."       # Max 160 chars for SEO
category: tutoriais|noticias|ferramentas
tags:
  - tag1
author: Redação Turbina IA
isFeatured: false
date: "YYYY-MM-DD"
coverImage: "https://images.unsplash.com/..."
---
```

The home page always displays the most recently published article (`allArticles[0]`) as the hero. `isFeatured: true` adds the article to the sidebar featured pool but does not control the hero.

### Static Data

- `src/data/ai-models.ts` — Full dataset for the AI model comparator (`/comparador`). Updated via `update-models.js`.
- `src/data/prompts.ts` — Prompt library displayed at `/prompts`.

### Routing Overview

| Route | Type | Notes |
|---|---|---|
| `/` | Server Component | Hero + article grid + category filter |
| `/blog/[slug]` | SSG | Static generation at build time from `content/articles/` |
| `/comparador` | Client Component | AI model comparison table |
| `/calculadora` | Client Component | Cost calculator |
| `/prompts` | Client Component | Prompt library with filters |
| `/api/newsletter` | Route Handler | Stores subscribers in `data/subscribers.json` |

### Next.js 16 Breaking Changes in This Codebase

In Next.js 16 (App Router), `params` and `searchParams` in page components are **Promises** and must be awaited:

```ts
// Dynamic route page
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}

// Page with search params
export default async function Page({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
}
```

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | For scripts only | Google Gemini API key for article generation |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Optional | Google AdSense publisher ID (`ca-pub-...`) |

### Image Handling

Only `images.unsplash.com` is allowed as an external image host (`next.config.ts`). The `generate-article.js` script maintains a curated pool of Unsplash images per category and enforces uniqueness across existing articles to avoid duplicate cover images.

### Path Alias

`@/*` maps to `src/*` — use `@/components/...`, `@/lib/...`, etc. throughout.
