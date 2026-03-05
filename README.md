# eliaslofgren.com

Digital business card site built with Next.js App Router.

## Local development

```bash
nvm install
nvm use
npm install
npm run dev
```

Open `http://localhost:3000`.

This project requires Node `>=20.9.0` (tracked in `.nvmrc`).

## Deploy on Vercel

1. Import this repository in Vercel.
2. Keep framework detection as `Next.js`.
3. Leave build/output settings at defaults (`next build` and `.next`).
4. Deploy.

No custom `vercel.json` rewrites are needed for routing.
