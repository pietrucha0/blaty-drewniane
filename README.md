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

The quote form sends submissions through [Web3Forms](https://web3forms.com):

1. Create an access key at web3forms.com, using the e-mail address that should receive quote requests.
2. Set it as `NEXT_PUBLIC_WEB3FORMS_KEY`: in `.env.local` for local development, and on Vercel under Project → Settings → Environment Variables.
3. Redeploy. The variable is built into the page at build time.

Without a key, the form falls back to `/api/wycena`, which forwards submissions to `QUOTE_WEBHOOK_URL` if that is set. If neither is set, visitors are offered a pre-filled e-mail and the phone number instead.

## Content

All copy and data live in `src/lib/content.ts`. Items marked `TODO` still need confirming: workshop address, WhatsApp number, social profiles.

Photos:

- `public/images/real/` contains the workshop's own photos from meblekw.pl.
- `public/images/stock/` contains Unsplash placeholders, labelled "Zdjęcie poglądowe" on the page. Replace them with photos of your own projects.

## Scripts

- `scripts/prepare-images.mjs` converts source photos to WebP.
- `scripts/fetch-stock.mjs` downloads the Unsplash placeholders.
