# Cody Cooper

Personal website at [codycooper.io](https://codycooper.io). Built with Next.js App Router, React, TypeScript, Tailwind CSS, and Content Collections. Deployed on Vercel.

## Local development

Use Node 24 (the exact version is in `.nvmrc`) and npm.

```sh
nvm install
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

The site runs at `http://localhost:3000`. Reading articles and pages needs no credentials. Newsletter signup needs a server-side MailerLite token. Giscus comments are optional; copy the public repository/category settings from [giscus.app](https://giscus.app) into `.env.local`. Public settings must be present at build time.

Commit `package-lock.json` when dependencies change. Use `npm install` to update dependencies and `npm ci` to reproduce the committed install. Vercel uses the lockfile without a custom install command.

## Publishing content

Add an MDX file to `content/posts/`:

```mdx
---
title: "Your article title"
date: "2026-09-26"
description: "A short summary."
---

Write the article here.
```

The filename becomes the URL: `content/posts/example.mdx` is `/posts/example`. Nested folders are supported. Dates must be real calendar dates in `YYYY-MM-DD` format, quoted as strings. Articles appear newest first; dates are displayed in UTC so they do not shift with the build machine's timezone. Adding a file publishes it; there is no draft or scheduled-publication field.

Standalone pages live in `content/pages/`, with `title` and optional `description` frontmatter. For example, `content/pages/about.mdx` is `/about`. Avoid paths already owned by `app/`, such as `newsletter` and `no`.

Put images in `public/images/` and reference them as `/images/...`. Markdown images work directly. The shared `<Image>` MDX component accepts Next.js Image props, including required dimensions. Content Collections generates article/page data during development, type generation, and production builds. Do not edit `.content-collections/`.

Open a pull request and check CI and the Vercel preview before merging. Existing article URLs should remain stable.

## Project layout

| Path | Purpose |
| --- | --- |
| `app/` | Routes, API handlers, metadata, and global styles |
| `app/posts/[...slug]/` | Article rendering, footer, and syntax highlighting |
| `components/` | Shared UI and client integrations |
| `content/pages/`, `content/posts/` | Editable MDX content |
| `content-collections.ts` | Frontmatter validation and MDX compilation |
| `lib/content.ts` | Content access and article ordering |
| `lib/site.ts` | Canonical site URL |
| `public/images/` | Article screenshots and book covers |
| `scripts/` | Production smoke checks |
| `.github/workflows/` | Pull request and branch checks |

The root `app/opengraph-image.tsx` supplies the fallback social image. Individual routes explicitly select `/api/og` or a book cover. Both are active Next.js routes.

## Checks

```sh
npm run check
npm run test:smoke
```

`check` runs lint, generates route/content types, checks TypeScript, and builds production output. `test:smoke` starts that production build on a temporary local port and verifies pages, internal links/assets, metadata, 404s, and newsletter behavior without sending subscriptions. Run the build first.

TypeScript stays on 6.x because the current lint parser needs its JavaScript API. ESLint 10 uses the official `@eslint/compat` wrapper for Next's older React/import plugins; remove the wrapper once those plugins support ESLint 10 directly. npm may still warn about those plugins' older peer ranges.

`npm audit` reports upstream advisories through `@content-collections/mdx` → `mdx-bundler` → `remark-mdx-frontmatter`/`toml` and `uuid`. There is currently no automatic fix in that dependency chain. MDX is compiled from trusted repository files; never compile visitor-submitted MDX. Recheck these advisories when updating Content Collections. Do not apply forced major-version overrides without testing the compiler.
