# Personal Portfolio (React + TypeScript + Tailwind)

A fully responsive personal portfolio built with React, TypeScript, Tailwind CSS, and React Router.
Visual identity is inspired by entity-relationship / database schema diagrams.

## 1. Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 2. Customize your content — IMPORTANT

Everything on the site (name, designation, bio, skills, education, experience, projects,
social links, email/phone) is driven from a single file:

```
src/data/portfolio.ts
```

Open it and replace every placeholder value with your own information.

## 3. Add your photo and resume

Put these two files in the `public/` folder:

- `public/profile.jpg` — your photo (referenced as `profile.photo` in `portfolio.ts`)
- `public/resume.pdf` — your resume (referenced as `profile.resumeUrl`)

If `profile.photo` fails to load, the hero section automatically falls back to a
generated initials avatar, so the page never looks broken while you're still preparing photos.

## 4. Project images

Each project in `src/data/portfolio.ts` currently points to a placeholder Unsplash image.
Replace `image` with your own screenshot (e.g. `/projects/awsbe.png` placed in `public/projects/`).

## 5. Build

```bash
npm run build
npm run preview
```

## 6. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, "Add New Project", import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy — Vercel will give you a live URL.

`vercel.json` is already included so that direct links to project detail pages
(e.g. `/projects/awsbe-website-rebuild`) work correctly on refresh.
