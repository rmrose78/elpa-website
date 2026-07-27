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
- "manual a11y check" / "human accessibility check" → read
  `.claude/skills/manual-a11y-verification/SKILL.md`. Checklist of
  issues no automated tool or AI code review can verify (skip links,
  tab order, screen-reader quality, zoom, motion, etc.) — manual/opt-in
  only, same rule as visual-check

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
  (issue #1). The sweep's initial run found 312 color-contrast + 6
  landmark violations on the live site — all fixed (issue #3, 0
  violations as of 2026-07-27). Every component now has RTL + jest-axe
  test coverage (issue #4) — `npm test` and `npm run test:a11y` are both
  100% green
- README's "WCAG 2.1 AA" claim is worded as automated-testing-backed with
  manual review pending, not a flat compliance claim — 0 known violations
  from tooling is real evidence, but not the same as verified conformance
  (real screen-reader/AT testing, content clarity, etc. — the exact gaps
  `.claude/skills/manual-a11y-verification/SKILL.md` catalogs — haven't
  been run yet). Resolved 2026-07-27; update this note if that wording
  changes again
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
- Manual a11y checklist (what no tool can verify) →
  `.claude/skills/manual-a11y-verification/SKILL.md`
