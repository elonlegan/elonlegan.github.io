# Copilot Instructions for this Repo

Purpose: Help AI agents work effectively in this Astro + Tailwind personal site. Keep changes minimal, consistent with existing patterns, and focused on content and UX.

## Architecture
- Framework: Astro 4 with Tailwind. No client framework by default; prefer Astro/HTML with small inline scripts when necessary.
- Entry & Layout: `src/pages/*.astro` are routes. All pages use `src/layouts/Layout.astro` which sets SEO meta, OpenGraph/Twitter tags, person schema, fonts, theme colors, and `<ViewTransitions />`.
- Sections: Home (`src/pages/index.astro`) composes sections via components inside `SectionContainer.astro` (adds container widths, `scroll-m-20`, optional `id`).
- Components: Presentational `.astro` files under `src/components/**`. Icons are `.astro` SVG components under `src/components/icons/**`.
- Styling: Tailwind (`darkMode: 'class'`) with some component-scoped CSS and small global styles in `Layout.astro`.
- Images/assets: Served from `public/**` (e.g. `/elonlegan.webp`, `/projects/*.webp`).

## Tooling & Commands
- Path alias: `@/* -> src/*` (see `tsconfig.json`). Import components like `import Layout from '@/layouts/Layout.astro'`.
- Integrations: Tailwind, Sitemap, Robots (`astro-robots-txt`). Site base URL in `astro.config.mjs`.
- Scripts:
  - `pnpm dev` or `npm run dev`: start dev server.
  - `npm run build`: typecheck (`astro check`) then static build.
  - `npm run preview`: preview production build.
- No test framework present. Keep changes simple and verify by running locally.

## Deployment
- GitHub Pages: Workflow in `deploy.yml` builds with `withastro/action@v3` and deploys via `actions/deploy-pages@v4` on pushes to `master`.
- Base URL: `astro.config.mjs` sets `site` to `https://elonlegan.github.io`. Keep this in sync with the deployment domain.

## Conventions & Patterns
- Props: Components declare `Astro.props` and minimal TypeScript interfaces inline. Keep prop names short and explicit.
- Content-first: Prefer static content in `.astro` files. Only add interactivity when necessary using `<script is:inline>` and basic DOM APIs.
- Theming: Dark mode toggled by `ThemeToggle.astro`, which writes `localStorage.theme` and toggles the `dark` class on `<html>`. Respect this mechanism; do not introduce alternative theme logic.
- Navigation state: `Header.astro` highlights current section using an `IntersectionObserver` on `<section id="...">`. If you add sections, ensure their `id` matches the header link `aria-label`.
- Sections: Wrap new content in `SectionContainer.astro` and provide `id` to enable scroll spy and anchor links.
- SEO: Always supply `title` and `description` props to `Layout.astro`. Use `noindex` only for non-public pages like `components.astro`.
- Assets: Optimize images as `webp` in `public/**`. Reference via absolute paths (`/image.webp`).
- Language: Site content is in English; keep tone professional and concise.

## Adding/Editing Content
- New section on home: Create a component under `src/components/`, then include it in `src/pages/index.astro` inside a `SectionContainer` with a titled header (`TitleSection.astro` + icon from `icons/**`). Add a matching nav link in `Header.astro` if needed.
- New page/route: Add `src/pages/<slug>.astro` and wrap content with `Layout.astro` providing `title` and `description`. Add `noindex` if it’s a dev-only catalog.
- Projects list: Update `PROJECTS` in `src/components/Projects.astro`. Each entry uses `{ title, description, image, link, github, tags }` where `tags` come from the local `TAGS` map with `name`, `class`, and `icon` component.
- Accessibility: Maintain `alt` text for images, `aria-label` for nav items, and keyboard handling mirroring existing components (see `ThemeToggle.astro`).

## Do/Don’t
- Do: Reuse existing components (`Badge`, `LinkButton`, `TitleSection`, `SectionContainer`). Keep Tailwind classes consistent with current style.
- Do: Keep inline scripts small, framework-agnostic, and scoped. Use `astro:page-load` and `astro:after-swap` hooks when integrating with view transitions.
- Don’t: Introduce heavy client-side frameworks or state managers. Avoid global CSS except within `Layout.astro` or component styles.
- Don’t: Change theme storage key or class logic. Don’t modify `astro.config.mjs.site` unless deploying to a different domain.

## Notable Files
- `src/layouts/Layout.astro`: SEO, schema.org Person, global styles, transitions.
- `src/pages/index.astro`: Home composition of sections.
- `src/components/ThemeToggle.astro`: Theme persistence and menu behavior.
- `src/components/Header.astro`: Navigation + scroll spy.
- `src/components/Projects.astro`: Project cards data and rendering.
- `tailwind.config.mjs`: Content globs and dark mode configuration.

## Examples
- Import with alias: `import Hero from '@/components/Hero.astro'`.
- New section skeleton:
  ```astro
  <SectionContainer id='new-section'>
    <TitleSection as='h2'>
      <SomeIcon class='size-7' />
      New Section
    </TitleSection>
    <NewSection />
  </SectionContainer>
  ```

If anything here seems off or incomplete (e.g., additional scripts, deployment flow), tell me what to adjust and I’ll update this guide.