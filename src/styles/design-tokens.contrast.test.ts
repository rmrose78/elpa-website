import { contrastRatio, WCAG_AA_NORMAL_TEXT } from '@/utils/contrast-ratio'

// Mirrors src/styles/_variables.scss. SCSS variables can't be imported
// directly into a Jest/Node test, so these hex values are kept in sync by
// hand — if you change a color in _variables.scss that's covered below,
// update it here too. rgba() tokens (ink-mid, ink-faint, rust-mid,
// rust-pale) can't feed this hex-only function directly — the
// `composited` block below pre-computes their real rendered color against
// each background they're actually used on (alpha blended by hand, same
// formula as contrastRatio's relative-luminance math), so those pairings
// can be covered too instead of skipped.
const tokens = {
  ink: '#1e1c18',
  parchment: '#f5f0e8',
  parchmentDark: '#ede6d6',
  white: '#ffffff',
  rust: '#8b3a1a',
  gold: '#b07d2e',
  goldLight: '#c9973a',
  olive: '#4a5240',
  footerBg: '#0f0e0b',
}

// Composited colors: rgba(fg, alpha) flattened onto a specific background.
// Recompute by hand if the underlying rgba token or background changes.
const composited = {
  // $ink-mid: rgba(30, 28, 24, 0.7)
  inkMidOnWhite: '#62605d',
  inkMidOnParchment: '#5f5c56',
  inkMidOnParchmentDark: '#5c5951',
  // $ink-faint: rgba(30, 28, 24, 0.64)
  inkFaintOnWhite: '#6f6e6b',
  inkFaintOnParchmentDark: '#69655c',
  // Footer.module.scss, rgba($white, X) on $footer-bg
  footerCopy: '#828280', // .copy, alpha 0.48
  footerBrandSub: '#878785', // .brandSub, alpha 0.5
  footerBrandDesc: '#939391', // .brandDesc, alpha 0.55
  footerLink: '#9f9f9d', // .link, alpha 0.6
  // PreservationSection.module.scss card background: rgba($white, 0.04)
  // flattened onto $ink
  cardBg: '#272521',
  // ...and text colors flattened onto that same cardBg
  cardAddress: '#a4a3a2', // rgba($white, 0.58)
  cardNote: '#939290', // rgba($white, 0.5)
  cardHint: '#b68937', // rgba($gold-light, 0.88)
}

// Each pairing below is a real foreground/background combination found by
// grepping every component's .module.scss for actual color/background
// usage against that component's section background — not guessed from
// the palette in isolation.
describe('design token contrast ratios', () => {
  it.each([
    ['ink body text on parchment (AccomplishmentsSection, DonateSection)', tokens.ink, tokens.parchment],
    ['ink body text on white (AboutSection, ContactSection, Nav)', tokens.ink, tokens.white],
    ['ink body text on parchment-dark (MissionStrip, AboutSection credentials)', tokens.ink, tokens.parchmentDark],
    ['rust eyebrow/link text on white (Nav, AboutSection)', tokens.rust, tokens.white],
    ['rust eyebrow text on parchment (AccomplishmentsSection, DonateSection)', tokens.rust, tokens.parchment],
    ['white button label on rust (AnnouncementBar, Nav donate, DonateSection donate)', tokens.white, tokens.rust],
    ['white body text on footer-bg (Footer)', tokens.white, tokens.footerBg],
    ['gold-light accent link on footer-bg (Footer)', tokens.goldLight, tokens.footerBg],
    ['gold-light eyebrow on ink (PreservationSection)', tokens.goldLight, tokens.ink],
    ['white heading/body text on ink (PreservationSection)', tokens.white, tokens.ink],
    ['ink-mid on white (Nav, AboutSection, ContactSection, DonateSection)', composited.inkMidOnWhite, tokens.white],
    ['ink-mid on parchment (AccomplishmentsSection, DonateSection)', composited.inkMidOnParchment, tokens.parchment],
    ['ink-mid on parchment-dark (MissionStrip, AboutSection, DonateSection)', composited.inkMidOnParchmentDark, tokens.parchmentDark],
    ['ink-faint on white (AboutSection)', composited.inkFaintOnWhite, tokens.white],
    ['ink-faint on parchment-dark (AboutSection)', composited.inkFaintOnParchmentDark, tokens.parchmentDark],
    ['Footer .copy on footer-bg', composited.footerCopy, tokens.footerBg],
    ['Footer .brandSub on footer-bg', composited.footerBrandSub, tokens.footerBg],
    ['Footer .brandDesc on footer-bg', composited.footerBrandDesc, tokens.footerBg],
    ['Footer .link on footer-bg', composited.footerLink, tokens.footerBg],
    ['PreservationSection .cardAddress on card background', composited.cardAddress, composited.cardBg],
    ['PreservationSection .cardNote on card background', composited.cardNote, composited.cardBg],
    ['PreservationSection .cardHint on card background', composited.cardHint, composited.cardBg],
  ])('%s meets WCAG AA normal text (4.5:1)', (_label, fg, bg) => {
    const ratio = contrastRatio(fg, bg)

    expect(ratio).toBeGreaterThanOrEqual(WCAG_AA_NORMAL_TEXT)
  })
})
