# Alice in Wonderland — Landing Page

An Astro site that generates one landing page per city, each pointing to Alice Through The Tear on the Story City app. Every city is a markdown file in
`src/content/cities/`; there is no CMS or admin UI — you edit markdown and commit.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321). The homepage redirects to the
alphabetically first city, so `src/content/cities/` must always contain at least one file.

## Adding a new city

1. Create `src/content/cities/<slug>.md`. **The filename is the URL slug**, so
   `salt-lake-city.md` is served at `/salt-lake-city` (and `/salt-lake-city/reviews`).
   Use lowercase and hyphens.
2. Fill in `cityName` in the frontmatter. Only add a city that has a route on the story in the app: the page says its route is ready.
3. Leave the body empty. Only frontmatter is read; nothing below the `---` is rendered.
4. Run `npm run dev` and check the new route.

A minimal city:

```markdown
---
cityName: Boston
---
```

## Frontmatter options

The schema lives in `src/content/config.ts`; that file is the source of truth if these ever
drift apart.

| Field | Required | Default | What it does |
| --- | --- | --- | --- |
| `cityName` | yes | — | Display name used in the page title, header, hero, and body copy. |

Every "Play in the app" and "Get the app" button opens the story's share link, set in
`src/lib/app.ts`. On Android, `src/layouts/Layout.astro` swaps it for an `intent://` link that
opens the installed app on the story and falls back to the share link.

## Reviews

Reviews are shared across all cities and live in `src/content/reviews/*.md`, rendered on
`/<slug>/reviews`. Each file needs `comment`, `rating`, and `author`, and can optionally
include a `videoUrl` (a YouTube or Shorts link promotes the review to a featured spot) and a
`socials` list of `platform` (`instagram`, `tiktok`, `youtube`, or `twitter`), `url`, and
`followers`.

## Build

```bash
npm run build
npm run preview
```
