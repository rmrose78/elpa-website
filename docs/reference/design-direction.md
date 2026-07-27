# Design Direction — elpa-website

Relocated verbatim from CLAUDE.md during the AI-workflow reorganization
(this file didn't exist before; the content is unchanged from what
CLAUDE.md previously had under "Design Tokens").

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
