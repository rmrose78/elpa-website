# Eagle Lake Preservation Alliance — Website Rebuild

A modern, mobile-first website for the [Eagle Lake Preservation Alliance](https://eaglelakepreservationalliance.netlify.app), a 501(c)(3) nonprofit in Eagle Lake, Texas dedicated to historic preservation and restoration.

**Live site:** https://eaglelakepreservationalliance.netlify.app

---

## About the Project

The Eagle Lake Preservation Alliance's previous website was built in Microsoft FrontPage in 2007 and had not been updated since. This project is a full ground-up rebuild — modern stack, mobile-first, and designed to honor both the organization's mission and the legacy of the original developer.

This is a donated services project built pro bono as a first freelance engagement.

---

## Features

- **Single-page scrollable layout** — Hero, Mission, About & Credentials, Accomplishments, Buildings Saved, Donate, Contact
- **Building detail modals** — each historic building card opens an accessible modal with full history, including the Craig Adams building demolished in 2007
- **Donation section** — PayPal Giving Fund integration shell (zero transaction fees for verified 501(c)(3)s)
- **Contact form** — Netlify Forms shell, routes submissions to the association's inbox
- **Custom gate seal logo** — SVG homage to the original 1907-style gate motif from the previous developer's logo
- **Custom favicon** — two-color SVG favicon matching the seal
- **Fully accessible** — Radix UI Dialog for focus-trapped modals, semantic HTML throughout, ARIA labels, keyboard navigation, skip-to-content link
- **Automated accessibility testing** — every component has jest-axe coverage, plus a real-browser Playwright + axe-core sweep across the full page (homepage, mobile nav, building modals) — 0 known violations as of the last run

---

## Stack

| Tool                           | Purpose                                        |
| ------------------------------ | ---------------------------------------------- |
| Vite 8 + React 19 + TypeScript | Core framework                                 |
| SCSS Modules                   | Component-scoped styles, camelCase class names |
| Radix UI Dialog                | Accessible building detail modals              |
| @tabler/icons-react            | Icon system                                    |
| Framer Motion                  | Animation primitives                           |
| Jest + React Testing Library + jest-axe | Component tests + accessibility checks|
| Playwright + axe-core          | Real-browser accessibility sweep               |
| Netlify                        | Hosting + form handling                        |

---

## Design

- **Color palette**: Warm parchment backgrounds, deep ink text, rust (`#8B3A1A`) as the primary CTA color, gold accents
- **Typography**: Playfair Display (headings) · Source Serif 4 (body) · DM Sans (UI)
- **Approach**: Mobile-first, single scrollable page, editorial feel — "Texas heritage magazine meets modern nonprofit"

---

## Project Structure

src/
components/
layout/ # AnnouncementBar, Nav, Footer
sections/ # HeroSection, MissionStrip, AboutSection,

# AccomplishmentsSection, PreservationSection,

# DonateSection, ContactSection

styles/ # \_variables.scss, \_mixins.scss, globals.scss
assets/ # elpa-seal-nav.svg
public/
elpa-favicon.svg

---

## Before & After

|                   | Before                   | After                                     |
| ----------------- | ------------------------ | ----------------------------------------- |
| **Built with**    | Microsoft FrontPage 2007 | Vite + React 19 + TypeScript              |
| **Last updated**  | 2007                     | 2025                                      |
| **Mobile**        | No                       | Yes — mobile-first                        |
| **Accessibility** | None                     | WCAG 2.1 AA — automated testing, 0 known violations; manual review pending |
| **Deployment**    | Manual FTP               | Auto-deploy via Netlify on push to `main` |

---

## Status

Front-end build is complete, live, and deployed. Remaining items are
client-dependent, not build-dependent:

- Final building photos (placeholders currently in place from legacy site scrape)
- Payment processor decision for the donation flow (PayPal Giving Fund
  shell is built and ready to connect, zero fees for verified 501(c)(3)s)
- Contact form email routing destination
- Domain migration from elpa.org

---

## Developer Notes

See `CLAUDE.md` for full project context, design token reference, and pending integration notes.

This project follows a structured AI-assisted development workflow: feature discovery → PRD → GitHub issues → test-driven implementation (`.claude/skills/`), the same pipeline used on this developer's other projects. Every issue gets its own branch; nothing lands on `main` without passing tests.

---

## Author

**Ryan Rose** — [ryan.rose.dev@gmail.com](mailto:ryan.rose.dev@gmail.com)

_Donated services project · Eagle Lake Preservation Alliance · Eagle Lake, Texas_
