# eliaslofgren.com

Personal portfolio / digital business card for Elias Löfgren.

## Stack

- **Framework**: Next.js (App Router, `app/` directory)
- **Styling**: Plain CSS in `app/globals.css` — no Tailwind, no CSS modules
- **Language**: JavaScript (no TypeScript)
- **Node**: 20.19.0 (see `.nvmrc`) — run `nvm use` before `npm run build`
- **Deployment**: Pushed to GitHub (`elias-lofgren/eliaslofgren.com`), auto-deployed on push to `main`

## Key files

- `app/page.js` — single-page site, all content and sections
- `app/globals.css` — all styles; uses CSS custom properties (design tokens)
- `app/layout.js` — root layout, metadata, font imports
- `app/not-found.js` — 404 page
- `public/elias.png` — hero photo

## Design tokens (in `globals.css`)

```css
--bg: #f8f6f2
--surface: #fcfbf8
--ink: #1d2a2c
--muted: #536466
--line: #d8d9d2
--accent: #b46a3b
--radius: 20px
--shadow: 0 18px 44px -28px rgba(22, 30, 32, 0.35)
--shell-width: min(980px, calc(100% - 2.6rem))
```

## Page sections (top to bottom)

1. Sticky nav (appears on scroll past 80px)
2. Hero — two-column layout: text left, photo right
3. About — two-column: text left, info cards right
4. Competencies — 3-column grid
5. Experience — timeline
6. Contact — dark section with email CTA

## CSS conventions

- All layout classes map 1:1 to elements in `page.js`
- Responsive breakpoints: 860px (tablet), 560px (mobile)
- Scroll-reveal via `[data-reveal]` / `.revealed` with IntersectionObserver
- Parallax hero background via `useEffect` + `window.scroll`
- `prefers-reduced-motion` handled at bottom of CSS

## Workflow

```bash
nvm use          # switch to Node 20
npm run dev      # local dev server
npm run build    # production build (verify before pushing)
git push         # triggers deployment
```

## Content source

CV: `~/Library/Mobile Documents/com~apple~CloudDocs/Elias_Löfgren_CV_2026.pdf`
