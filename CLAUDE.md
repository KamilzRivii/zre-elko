# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack, default bundler in Next.js 16)
npm run build    # Production build (does NOT run linter — Next.js 16 breaking change)
npm run start    # Start production server
npm run lint     # Run ESLint manually
```

No test framework is configured yet.

## Architecture

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui (radix-nova style)

**Key conventions:**
- Import alias `@/*` maps to `./src/` — all source code lives under `src/`
- All routes use App Router file-system conventions inside `src/app/`
- UI primitives: `src/components/ui/` (shadcn/ui — Button, Card, Input, Textarea)
- Shared class-merging utility: `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge)
- `components.json` configures shadcn/ui: style `radix-nova`, RSC enabled, icon library `lucide`

**Tailwind CSS 4 syntax** — uses `@import "tailwindcss"` and `@theme inline { … }` in `src/styles/globals.css`, not the v3 `@tailwind` directives. Design tokens are CSS custom properties (OKLCH colors, dark mode via `.dark` class).

**Adding shadcn/ui components:**
```bash
npx shadcn@latest add <component>
```

**Directory structure:**
```
src/
  app/                          # Routes (App Router)
  components/
    layout/                     # Header, Footer
    sections/                   # Page sections (home/, oferta/, realizacje/, kontakt/)
    ui/                         # shadcn/ui primitives
  content/                      # Static data/copy as TS files (home.ts, oferta.ts, realizacje.ts, company.ts)
  lib/
    hooks/                      # Shared React hooks (e.g. useContactForm)
    mail/                       # Email sending utilities (sendContactEmail.ts)
    validations/                # Zod schemas (contact.schema.ts)
    seo.ts                      # buildMetadata() and buildLocalBusinessJsonLd() helpers
    utils.ts                    # cn() utility
  types/                        # Shared TypeScript interfaces (OfertaItem, RealizacjaItem, …)
  styles/
    globals.css                 # Tailwind + design tokens
```

**Patterns:**
- Page content (copy, labels, links) lives in `src/content/`, not in components
- Form validation uses React Hook Form + Zod; schemas in `src/lib/validations/`
- Shared form logic in hooks (`src/lib/hooks/`)
- SEO: call `buildMetadata()` in every route's `export const metadata`; add JSON-LD via `<script type="application/ld+json">` in page components
- `src/content/company.ts` is the single source of truth for NAP data (name, address, phone) used across Header, Footer, ContactSection, and JSON-LD
