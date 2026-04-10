# Dero Savage Portfolio

A tailored portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  about.tsx
  background-grid.tsx
  contact-form.tsx
  hero.tsx
  journey.tsx
  panel.tsx
  projects.tsx
  reveal.tsx
  section-heading.tsx
  skills.tsx
  vision.tsx
data/
  site.ts
```

## Customize Content

Edit `data/site.ts` to update:

- profile details
- links
- skills
- projects
- journey timeline
- vision copy
- contact email

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to GitHub Pages

This project is configured for static export and GitHub Pages deployment through GitHub Actions.

1. Push the project to a GitHub repository.
2. In the repository settings, open `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to the `main` branch to trigger deployment.

## Notes

- The contact form opens the user's mail client via `mailto:`.
- Replace placeholder GitHub, LinkedIn, demo URLs, and email address in `data/site.ts`.
