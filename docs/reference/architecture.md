# Architecture — elpa-website

Relocated verbatim from CLAUDE.md during the AI-workflow reorganization
(this file didn't exist before; the content is unchanged from what
CLAUDE.md previously had under "Page Structure" and "Key Design
Decisions").

## Page Structure

Single scrollable page, top to bottom:

| Component                | ID                 | Notes                                               |
| ------------------------ | ------------------ | ---------------------------------------------------- |
| `AnnouncementBar`        | —                  | Rust bar, "Donate Today →" CTA                       |
| `Nav`                    | —                  | White sticky, logo seal left, donate button right    |
| `HeroSection`            | `#hero`            | Dark full-bleed, texture overlay, stats bar          |
| `MissionStrip`           | —                  | Parchment-dark quote strip with contact meta         |
| `AboutSection`           | `#about`           | Two-col: credentials + org badges \| photo + copy    |
| `AccomplishmentsSection` | `#accomplishments` | 3-col card grid on parchment                         |
| `PreservationSection`    | `#buildings`       | Dark ink bg, building cards, Radix Dialog modal      |
| `DonateSection`          | `#donate`          | Two-col: impact list \| donation card                |
| `ContactSection`         | `#contact`         | Two-col: contact details \| form with success state  |
| `Footer`                 | —                  | Dark, 3-col: brand \| navigate \| organization        |

## Key Design Decisions

- Preservation section background: `$ink` (near-black) — contrasts with
  surrounding parchment sections
- Building card status badges: gold tint for "Saved" (`$gold-light`),
  muted `#D4845A` for "Demolished" — not generic green/red
- Craig Adams building: intentionally kept as "demolished" — part of
  ELPA's honest story
- Facebook events: removed entirely from the design
- Donation processor: PayPal Giving Fund — zero transaction fees for
  verified 501(c)(3)s
- Contact form backend: Netlify Forms (free up to 100 submissions/month)
