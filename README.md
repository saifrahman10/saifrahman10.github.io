# saifrahman10.github.io

Personal portfolio built with Next.js (App Router), Tailwind CSS and Lucide icons,
exported as static HTML and hosted on GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build

```bash
npm run build     # static export written to ./out
npm run preview   # serve ./out locally
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `./out` to GitHub Pages. One-time setup in the repo settings:
**Settings > Pages > Build and deployment > Source = "GitHub Actions"**.

This is a GitHub Pages *user* site (served at the domain root), so no `basePath`
is configured in `next.config.mjs`.

## Structure

- `lib/content.ts` — all copy, links and asset paths (edit this to change text)
- `app/page.tsx` — composes the bento grids
- `components/bento/` — `BentoGrid`, `BentoCard`, `HeroCard`, `InfoCard`,
  `VisualCard`, `ProjectCard`, `SkillsCard`, `ContactCard`, `LocalTime`
- `components/layout/` — `Header`, `Footer`
- `tailwind.config.ts` — colour palette, fonts, shadows and card radius
- `app/globals.css` — base styles and the entrance/hover animations
- `public/assets/` — images; `public/*.html` — legacy project pages kept at their old URLs
