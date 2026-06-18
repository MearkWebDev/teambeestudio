# Team Bee Creative Studios — GitHub Pages SPA

Static React + Vite + react-router-dom build of the Team Bee Creative Studios site, configured for deployment to **https://mearkwebdev.github.io/teambeestudio/**.

## Local dev

```bash
npm install
npm run dev        # http://localhost:5173/teambeestudio/
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this folder to the `main` branch of `mearkwebdev/teambeestudio`.
2. In GitHub: **Settings → Pages → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds `dist/` and publishes.

## How routing works on GitHub Pages

- `vite.config.ts` sets `base: '/teambeestudio/'` so all asset URLs are prefixed.
- `BrowserRouter` is mounted with the same basename.
- `public/404.html` catches deep links (e.g. `/teambeestudio/about` on refresh), stores the path in `sessionStorage`, and redirects to the SPA. `index.html` reads it back and `history.replaceState`s to the original path so React Router renders the correct page.
