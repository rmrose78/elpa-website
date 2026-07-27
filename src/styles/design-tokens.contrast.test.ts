import { contrastRatio, WCAG_AA_NORMAL_TEXT } from '@/utils/contrast-ratio'

// Mirrors src/styles/_variables.scss. SCSS variables can't be imported
// directly into a Jest/Node test, so these hex values are kept in sync by
// hand — if you change a color in _variables.scss that's covered below,
// update it here too. rgba() tokens (ink-mid, ink-faint, rust-mid,
// rust-pale) can't feed this hex-only function and aren't covered.
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
  ])('%s meets WCAG AA normal text (4.5:1)', (_label, fg, bg) => {
    const ratio = contrastRatio(fg, bg)

    expect(ratio).toBeGreaterThanOrEqual(WCAG_AA_NORMAL_TEXT)
  })
})
