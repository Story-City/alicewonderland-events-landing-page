# Alice in Wonderland — Events Landing Page

An Astro site that generates one landing page per city. Every city is a markdown file in
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
2. Fill in the frontmatter (see the options below). `cityName`, `eventDate`,
   `groupTicketPrice`, `soloTicketPrice`, and `ticketSaleLink` are required — the build
   fails with a schema error if any are missing.
3. Leave the body empty. Only frontmatter is read; nothing below the `---` is rendered.
4. Run `npm run dev` and check the new route.

A minimal city:

```markdown
---
cityName: Chicago
eventDate: 2026-08-01
groupTicketPrice: $17.99
soloTicketPrice: $8.99
ticketSaleLink: https://www.paypal.com/ncp/payment/KYT7Y5PWHF5RS
---
```

The easiest approach is to copy an existing file, such as `src/content/cities/chicago.md`,
and change the values.

## Frontmatter options

The schema lives in `src/content/config.ts`; that file is the source of truth if these ever
drift apart.

| Field | Required | Default | What it does |
| --- | --- | --- | --- |
| `cityName` | yes | — | Display name used in the page title, header, hero, and body copy. Falls back to "Event" if blank. |
| `eventDate` | yes | — | Event day, written as `YYYY-MM-DD`. Formatted as a long date ("August 1, 2026") in the header, CTA, and FAQ, and drives the countdown to the event. |
| `groupTicketPrice` | yes | — | Price shown on the right-hand ticket card, e.g. `$17.99`. Include the currency symbol; it is printed verbatim. |
| `soloTicketPrice` | yes | — | Price shown on the left-hand ticket card and in the buy-tickets banner further down the page. |
| `ticketSaleLink` | yes | — | Checkout URL for every "Buy Tickets" button. External links open in a new tab; if omitted the buttons fall back to the `#tickets` anchor. |
| `locationTime` | no | `12PM to 7PM` | The window guests can start in. Appears in the description, body copy, and FAQ. |
| `locationStart` | no | — | Human-readable start location, e.g. `near Lincoln Park`. Set together with `locationLink`. |
| `locationLink` | no | — | Map URL for `locationStart`. When **both** are set, the FAQ shows a linked start location; when either is missing it shows "start location revealed by email 1 week before" instead. |
| `hasPhotographer` | no | `true` | When `true`, the FAQ lists the on-site photographer step (4–6pm at the start location). Set to `false` for cities without one. |
| `earlyBird` | no | `false` | Switches the page into early-bird mode: the ticket cards are relabeled "Early Bird Pass" / "Regular Pass", the countdown becomes a "tickets left" scarcity bar, and extra early-bird copy appears in the body and FAQ. |
| `earlyBirdEnds` | no | — | `YYYY-MM-DD` deadline quoted in the FAQ ("Early bird ticket pricing ends …"). Only meaningful alongside `earlyBird: true`. |
| `showSupportBanner` | no | `false` | Shows the "Need Support For Your Upcoming Event?" banner with a link to the FAQ below the ticket cards. Useful once an event is live and guests need help. |

A city using all of the options:

```markdown
---
cityName: Saskatoon
eventDate: 2026-08-22
locationStart: near Kiwanis Memorial Park
locationLink: https://maps.app.goo.gl/example
locationTime: 12PM to 7PM
groupTicketPrice: $17.99
soloTicketPrice: $8.99
ticketSaleLink: https://www.paypal.com/ncp/payment/CKR58QJFDM86Q
hasPhotographer: false
earlyBird: true
earlyBirdEnds: 2026-07-31
showSupportBanner: false
---
```

### Notes and gotchas

- Dates must be unquoted `YYYY-MM-DD`. They are parsed as UTC, so the displayed date is
  always the one you typed.
- Prices are plain strings, not numbers. `$8.99` is fine; `8.99` renders without a symbol.
- Booleans are `true` / `false` without quotes.
- Removing a city file removes its route. If you delete the alphabetically first city, the
  homepage redirect just points at the next one.

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
