## Copilot guide for this repo (Astro + Tailwind)

Purpose: Make small, content-first changes that match existing patterns. Avoid client frameworks; prefer Astro/HTML and tiny inline scripts.

- Stack and entry points

  - Astro 4 + Tailwind. Routes live in `src/pages/*.astro`; all use `src/layouts/Layout.astro` for SEO, OpenGraph/Twitter, Person schema, fonts, and `<ViewTransitions />`.
  - Path alias: `@/* -> src/*` (see `tsconfig.json`). Example: `import Hero from '@/components/Hero.astro'`.
  - Assets in `public/**` (e.g., `/elonlegan.webp`, `/projects/*.webp`). Use absolute paths and `webp`.

- Dev workflow

  - `npm run dev` (or `pnpm dev`) to start; `npm run build` runs `astro check` then builds; `npm run preview` serves the build.
  - Site base URL is set in `astro.config.mjs` as `https://elonlegan.github.io`. Keep in sync with deployment.

- Page/layout patterns

  - Always pass `title` and `description` to `Layout.astro`. Optional `noindex` for non-public pages (e.g., `pages/components.astro`).
  - Global styles live in `Layout.astro`. The site is forced dark: `<html class="dark">`. Do not reintroduce theme switching unless requested.
  - Tooltips use Microtip CSS linked in `Layout.astro`; no JS needed.

- Sections and navigation

  - Compose the home page (`pages/index.astro`) by wrapping each section in `SectionContainer.astro` (adds container widths and `scroll-m-20`).
  - Use `TitleSection.astro` with an icon from `components/icons/**` for section headers.
  - `Header.astro` highlights the current section via `IntersectionObserver`. Critical: each section’s `id` must match the header link’s `aria-label` (e.g., `id='projects'`).

- Components and interactivity

  - Components live under `src/components/**`; icons are `.astro` SVGs under `components/icons/**`.
  - Keep scripts inline (`<script is:inline>`) and minimal. Prefer `astro:page-load`/`astro:after-swap` hooks for behavior tied to navigation/transitions.

- Projects data

  - Update cards in `components/Projects.astro`. Shape: `{ title, description, image, link, github, tags }`.
  - `tags` come from the local `TAGS` map: `{ name, class, icon }`. Example usage: `<tag.icon class='size-4' />` and apply `tag.class` to the badge.

- Styling

  - Tailwind configured with `darkMode: 'class'` and content globs in `tailwind.config.mjs`. Keep class names consistent with existing style (e.g., `size-*`, `text-gray-*`).

- Deployment

  - GitHub Pages via `deploy.yml`: builds with `withastro/action@v3`, deploys with `actions/deploy-pages@v4` on pushes to `master`.

- Do / Don’t
  - Do reuse `SectionContainer`, `TitleSection`, `LinkButton`, `Badge`.
  - Do keep changes static and framework-agnostic.
  - Don’t add global CSS outside `Layout.astro` or component styles. Don’t change `astro.config.mjs.site` unless the domain changes.

Questions or gaps? If something feels off (e.g., theme behavior, deployment path), point it out and we’ll refine this guide.
