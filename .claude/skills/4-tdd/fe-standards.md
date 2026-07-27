# Frontend Standards — elpa-website

Read this before writing any component. This is the canonical location
for these conventions, relocated here from CLAUDE.md so it only loads
when a task actually touches component code.

## Stack
- React 19 + TypeScript + Vite 8
- SCSS Modules — co-located `.module.scss` per component, camelCase
  class names
- No Tailwind — removed due to `@apply` incompatibility with Tailwind v4
  + SCSS (settled decision, not a default)
- Radix UI Dialog — building detail modals
- `@tabler/icons-react` — all icons, outline style only, never emoji
- Framer Motion — available but minimal use
- Jest + React Testing Library — jest-axe wired in
  (`toHaveNoViolations()`), plus eslint-plugin-jsx-a11y at lint time, a
  WCAG contrast-ratio checker (`src/utils/contrast-ratio.ts`), and a
  real-browser a11y sweep (`.claude/skills/a11y-sweep/SKILL.md`)

## Folder Structure
Each component gets its own folder, not a flat file next to a
`.module.scss` — this differs from some sibling projects, confirmed
against the actual tree here:

```
src/
  components/
    layout/
      Nav/
        Nav.tsx
        Nav.module.scss
      Footer/
        Footer.tsx
        Footer.module.scss
    sections/
      HeroSection/
        HeroSection.tsx
        HeroSection.module.scss
      ... (MissionStrip, AboutSection, AccomplishmentsSection,
           PreservationSection, DonateSection, ContactSection)
    ui/            # reserved for shared/primitive components, empty so far
  hooks/           # empty so far
  styles/          # globals.scss, _variables.scss, _mixins.scss
  types/           # index.ts — single shared types file so far
  utils/           # index.ts — single shared utils file so far
  assets/
```

## Component Conventions
- `export default function ComponentName()` — no anonymous exports
- One component per file
- Props interface typed explicitly above the component, when a component
  takes props (many current sections don't)
- Always provide `mkdir -p` and `touch` commands before writing a new
  component's files
- Scroll target `id` attributes get added to every section, even ones
  not yet built
- No inline styles, ever
- Tabler icons always over emoji

```tsx
interface CardProps {
  label: string
  value: string
}

export default function Card({ label, value }: CardProps) {
  ...
}
```

## SCSS Modules
- One `.module.scss` per component, lives in the component's folder
- camelCase class names — no BEM, modules handle scoping
- Every module starts with:

```scss
@use '@/styles/_variables.scss' as *;
@use '@/styles/_mixins.scss' as *;
```

- `globals.scss` does NOT have `@use` — it is the root stylesheet
- Autofill override required on all form `input` elements — see
  `ContactSection` and `DonateSection` for the existing pattern

## Mobile-First
Always min-width, never max-width. Breakpoint mixins (defined in
`_mixins.scss`, hardcoded numbers, not variable references, a compile-time
limitation with `additionalData`):

```scss
.element {
  padding: 1.25rem;      // mobile base
  @include small {       // 520px+
    padding: 2rem;
  }
  @include desktop {     // 768px+
    padding: 2.5rem;
  }
  @include large {       // 860px+
    padding: 3rem;
  }
}
```

Reusable layout mixins already defined: `section-padding`, `wrap`,
`flex-center`, `visually-hidden`.

## Design Tokens
Defined in `src/styles/_variables.scss` (full reference now lives in
`docs/reference/design-direction.md`):

```scss
$ink: #1e1c18;
$parchment: #f5f0e8;
$rust: #8b3a1a;   // sole primary CTA color — donate button, eyebrows, icons
$gold: #b07d2e;
$gold-light: #c9973a;
$olive: #4a5240;
$footer-bg: #0f0e0b;

$font-heading: 'Playfair Display', serif;
$font-body: 'DM Sans', sans-serif;
$font-serif: 'Source Serif 4', serif;
```

## TypeScript
- Use `interface` for objects that might be extended
- Use `type` for unions and aliases
- Never use `any` — use `unknown` or proper typing
- Type event handlers explicitly:

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
const handleSubmit = (e: React.FormEvent) => {}
```

## External Service Calls
- If a component talks to a third-party service (donation processor,
  form backend), keep the call scoped to that component if it's the
  only consumer — never inline the same integration in more than one
  place. If a second component needs it, extract it to `src/utils/`
  first
- Never hardcode secrets — read from `import.meta.env.VITE_*`
- Current integrations: PayPal Giving Fund (donation, shell only, `//
  TODO` pending client decision), Netlify Forms (contact form)

## Framer Motion
Used minimally in this project. If added to a component, define variants
outside the component body and always respect reduced motion — check
for an existing `useReducedMotion`-style hook before adding a new one.

## Assets
- `src/assets/elpa-seal-nav.svg` — nav logo seal (gate motif, rust ring,
  no text)
- `public/elpa-favicon.svg` — two-color favicon (rust bg, white gate)
- Import SVGs as React components:

```tsx
import ElpaSeal from '@/assets/elpa-seal-nav.svg?react'
```
