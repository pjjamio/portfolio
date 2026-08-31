# Portfolio — Paul John Jamio

Minimalist portfolio built with **Next.js (App Router)** and **Tailwind CSS**.

## Pages
- `/` — hero, summary, featured work, experience
- `/projects` — full showcase with live screenshots (thum.io), descriptions, stacks, links
- `/about` — full resume: experience, education, skills
- `/contact` — Netlify Forms contact form

## Develop
```bash
npm install
npm run dev
```

## Resume file
Add your PDF at `public/resume.pdf` (see `public/resume-README.txt`).

## Deploy (Netlify)
1. Push to `https://github.com/pjjamio/portfolio.git`
2. In Netlify: **Add new site → Import from Git**, pick the repo.
3. Build settings are read from `netlify.toml` (`@netlify/plugin-nextjs`). No manual config needed.
4. Contact form submissions appear under **Forms** in the Netlify dashboard.

## Screenshots
Project previews are generated live by `https://image.thum.io/get/...` in `src/data/projects.ts`.
Swap `shot()` for local images in `/public` if you prefer static screenshots.
