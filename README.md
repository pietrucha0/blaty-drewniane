# BlatyDrewniane.eu

Website for a workshop making solid wood countertops and custom furniture: tables, consoles, shelving, kitchen islands and built-ins. One-page site in Polish.

## Stack

Next.js 15 (App Router, TypeScript), Tailwind CSS 4, Framer Motion, lucide-react.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configuration

Copy `.env.example` to `.env.local` and set `QUOTE_WEBHOOK_URL` so the quote form (`/api/wycena`) can deliver submissions. Without it, visitors are offered an e-mail fallback.

## Content

All copy and data live in `src/lib/content.ts`. Items marked `TODO` still need confirming: workshop address, WhatsApp number, social profiles.

Photos:

- `public/images/real/` contains the workshop's own photos from meblekw.pl.
- `public/images/stock/` contains Unsplash placeholders, labelled "Zdjęcie poglądowe" on the page. Replace them with photos of your own projects.

## Scripts

- `scripts/prepare-images.mjs` converts source photos to WebP.
- `scripts/fetch-stock.mjs` downloads the Unsplash placeholders.
