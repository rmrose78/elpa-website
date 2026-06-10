# CLAUDE.md — Eagle Lake Preservation Alliance Website

Instructions for AI assistants working on this project. Read before writing any code.

---

## Project Overview

A nonprofit brochure site for the **Eagle Lake Preservation Alliance (ELPA)**, a 501(c)(3) in Eagle Lake, Texas focused on historic preservation. Built pro bono by Ryan Rose as a first freelance project. Deployed at:

**https://eaglelakepreservationalliance.netlify.app**

The HTML mockup at `elpa-mockup_03062026.html` is the authoritative design spec. When in doubt, refer to it.

---

## Stack

- Vite 8 + React 19 + TypeScript
- SCSS Modules — co-located `.module.scss` per component, camelCase class names
- No Tailwind — removed due to `@apply` incompatibility with Tailwind v4 + SCSS
- Radix UI Dialog — building detail modals
- `@tabler/icons-react` — all icons, outline style only, never emoji
- Framer Motion — available but minimal use
- Netlify — auto-deploys on push to `main`

---

## Design Tokens

Defined in `src/styles/_variables.scss`:

```scss
$ink: #1e1c18;
$ink-mid: rgba(30, 28, 24, 0.6);
$ink-faint: rgba(30, 28, 24, 0.35);
$parchment: #f5f0e8;
$parchment-dark: #ede6d6;
$white: #ffffff;
$rust: #8b3a1a; // primary CTA — donate button, eyebrows, icons
$rust-mid: rgba(139, 58, 26, 0.12);
$rust-pale: rgba(139, 58, 26, 0.06);
$gold: #b07d2e;
$gold-light: #c9973a; // hero stats, preservation section eyebrow
$olive: #4a5240;
$footer-bg: #0f0e0b;
$border: rgba(30, 28, 24, 0.1);
$border-med: rgba(30, 28, 24, 0.16);

$font-heading: 'Playfair Display', serif;
$font-body: 'DM Sans', sans-serif;
$font-serif: 'Source Serif 4', serif;
```

`$rust` is the sole primary CTA color — no separate terracotta token.

---

## Page Structure

Single scrollable page, top to bottom:

| Component                | ID                 | Notes                                               |
| ------------------------ | ------------------ | --------------------------------------------------- |
| `AnnouncementBar`        | —                  | Rust bar, "Donate Today →" CTA                      |
| `Nav`                    | —                  | White sticky, logo seal left, donate button right   |
| `HeroSection`            | `#hero`            | Dark full-bleed, texture overlay, stats bar         |
| `MissionStrip`           | —                  | Parchment-dark quote strip with contact meta        |
| `AboutSection`           | `#about`           | Two-col: credentials + org badges \| photo + copy   |
| `AccomplishmentsSection` | `#accomplishments` | 3-col card grid on parchment                        |
| `PreservationSection`    | `#buildings`       | Dark ink bg, building cards, Radix Dialog modal     |
| `DonateSection`          | `#donate`          | Two-col: impact list \| donation card               |
| `ContactSection`         | `#contact`         | Two-col: contact details \| form with success state |
| `Footer`                 | —                  | Dark, 3-col: brand \| navigate \| organization      |

---

## Key Design Decisions

- Preservation section background: `$ink` (near-black) — contrasts with surrounding parchment sections
- Building card status badges: gold tint for "Saved" (`$gold-light`), muted `#D4845A` for "Demolished" — not generic green/red
- Craig Adams building: intentionally kept as "demolished" — part of ELPA's honest story
- Facebook events: removed entirely from the design
- Donation processor: PayPal Giving Fund — zero transaction fees for verified 501(c)(3)s
- Contact form backend: Netlify Forms (free up to 100 submissions/month)

---

## Pending (awaiting client response)

- [ ] PayPal Giving Fund integration — shell only, `// TODO` in place
- [ ] Contact form email routing — need Eve's preferred email address
- [ ] Hero and building photos — placeholder dashed borders in place
- [ ] Domain — `elpa.org` recovery via GoDaddy or fresh domain registration

---

## SCSS Critical Rules

1. Every `.module.scss` starts with:

```scss
@use '@/styles/_variables.scss' as *;
@use '@/styles/_mixins.scss' as *;
```

2. `globals.scss` does NOT have `@use` — it is the root stylesheet
3. Mixin breakpoints are **hardcoded numbers** — NOT variable references (compile-time limitation with `additionalData`)
4. Autofill override required on all form `input` elements — see `ContactSection` and `DonateSection`

---

## Component Conventions

- Always provide `mkdir -p` and `touch` commands before component code
- Scroll target `id` attributes added to every section, even those not yet built
- `export default function ComponentName` — no anonymous exports
- No inline styles ever
- Tabler icons always over emoji

---

## Assets

- `src/assets/elpa-seal-nav.svg` — nav logo seal (gate motif, rust ring, no text)
- `public/elpa-favicon.svg` — two-color favicon (rust bg, white gate)
- Import SVGs as React components:

```tsx
import ElpaSeal from '@/assets/elpa-seal-nav.svg?react'
```

---

## Client Notes

- **Project type**: donated services, pro bono
- **ELPA**: 501(c)(3) · P.O. Box 331, Eagle Lake TX 77434 · (979) 234-6848
- Original site built in 2007 in Microsoft FrontPage by JK Stacy (deceased)
- The gate seal logo is an homage to JK Stacy's original ELPA logo
