# CLAUDE.md — Eagle Lake Preservation Alliance Website

Instructions for AI assistants working on this project. Read before
writing any code.

---

## Skill Shortcuts
- "write tests for <file>" → read `.claude/skills/4-tdd/fe-standards.md`
  and `.claude/skills/4-tdd/a11y-checklist.md`, then write Jest + RTL
  tests for that component
- "run visual check" / "run playwright" → read
  `.claude/skills/visual-check/SKILL.md`. Never run this without being
  asked — it's a heavier token cost than everything else in this repo's
  workflow
- "run a11y sweep" / "run accessibility sweep" → read
  `.claude/skills/a11y-sweep/SKILL.md`. Manual/opt-in only, same rule as
  visual-check — never run without being asked

## Commands
- Start dev server: `npm run dev`
- Run tests: `npm test`
- Run tests (watch): `npm run test:watch`
- Real-browser a11y sweep: `npm run test:a11y`
- Lighthouse a11y check: `npm run lighthouse:a11y` (dev server must
  already be running)
- Lint: `npm run lint`
- Build: `npm run build`
- Format: `npm run format`
- All of the above in one pass: `npm run precommit`

## Critical Rules
- Never commit `.env` or `.env.local`
- No Tailwind — removed due to `@apply` incompatibility with Tailwind v4
  + SCSS. SCSS Modules is the settled approach; see
  `docs/reference/design-direction.md`
- Frontend conventions (component structure, SCSS modules, TypeScript
  rules, folder layout) are canonical in
  `.claude/skills/4-tdd/fe-standards.md` — read that before writing any
  component, don't duplicate it here
- All AI-assisted feature work goes through the pipeline: `/1-grill-me` →
  `/2-to-prd` → `/3-to-issues` → `/4-tdd`. Every issue gets its own GitHub
  issue and its own branch (`<issue-number>-<slug>`) before any code is
  written — never implement directly on `main`. `/4-tdd` never commits or
  opens a PR automatically; both stay explicit, developer-initiated steps
- jest-axe, eslint-plugin-jsx-a11y, a hand-rolled WCAG contrast-ratio
  checker, and a real-browser Playwright+axe-core sweep are all wired up
  (issue #1, 2026-07-27). The real-browser sweep already found genuine
  color-contrast and duplicate-banner-landmark issues on the live site —
  see issue tracker for the follow-up mass-fix issue that addresses them
- README's "WCAG 2.1 AA compliance" claim is now partially test-backed by
  the tooling above, but whether to reword or badge it is still an open,
  deliberately deferred decision — not resolved yet
- Run tests before every commit

---

## Project Overview

A nonprofit brochure site for the **Eagle Lake Preservation Alliance
(ELPA)**, a 501(c)(3) in Eagle Lake, Texas focused on historic
preservation. Built pro bono by Ryan Rose as a first freelance project.

**Live:** https://eaglelakepreservationalliance.netlify.app

## Current Status

Front-end build is complete and deployed (Netlify, auto-deploy on push
to `main`). Remaining work is client-dependent, not build-dependent:

- [ ] PayPal Giving Fund integration — shell only, `// TODO` in place
- [ ] Contact form email routing — need Eve's preferred email address
- [ ] Hero and building photos — placeholder dashed borders in place
- [ ] Domain — `elpa.org` recovery via GoDaddy or fresh domain
      registration

## Client Notes

- **Project type**: donated services, pro bono
- **ELPA**: 501(c)(3) · P.O. Box 331, Eagle Lake TX 77434 · (979) 234-6848
- Original site built in 2007 in Microsoft FrontPage by JK Stacy
  (deceased)
- The gate seal logo is an homage to JK Stacy's original ELPA logo

---

## Docs

- Design direction (palette, typography) →
  `docs/reference/design-direction.md`
- Page structure and key design decisions →
  `docs/reference/architecture.md`
- Frontend conventions, SCSS architecture, folder structure →
  `.claude/skills/4-tdd/fe-standards.md`
- Accessibility checklist → `.claude/skills/4-tdd/a11y-checklist.md`
- Real-browser accessibility sweep → `.claude/skills/a11y-sweep/SKILL.md`
