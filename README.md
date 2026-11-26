# MI9 International React Frontend

A frontend-only React/Vite redesign for MI9 International.

## Run locally

1. Install Node.js 18 or newer.
2. Extract this ZIP.
3. Open a terminal in the extracted folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL shown by Vite.

## Production build

Run `npm run build`. The optimized site is generated in `dist/`. Test it with `npm run preview`.

## Routes

- `/`
- `/about`
- `/products`
- `/products/indian-tamarind`
- `/products/indian-spices`
- `/products/fresh-fruits`
- `/products/fresh-vegetables`
- `/products/food-grains`
- `/products/dry-fruits`
- `/gallery`
- `/contact`

## Important deployment note

React Router uses browser-history routes. Configure the host to return `index.html` for unknown paths. Netlify and Vercel normally provide a standard SPA rewrite option.

## Images

The prototype uses remote optimized agricultural images so it runs immediately after dependency installation. Before public launch, replace the URLs in `src/App.jsx` with original MI9-owned assets, organized under `public/images/`. This avoids external-image dependency and ensures brand/source fidelity.

Suggested folders:

- `public/images/logo/`
- `public/images/hero/`
- `public/images/products/`
- `public/images/gallery/`
- `public/images/certificates/`
- `public/images/about/`

## Contact form

The form is intentionally frontend-only. It validates required fields and displays a success state, but does not transmit or retain information.

## Content/configuration

Company details, products, statistics, certificates and image references are data-driven near the top of `src/App.jsx`.
