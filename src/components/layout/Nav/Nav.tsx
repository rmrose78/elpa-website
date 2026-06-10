import { useState } from 'react'
import styles from './Nav.module.scss'
import elpaSeal from '@/assets/elpa-seal-nav.svg'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Accomplishments', href: '#accomplishments' },
  { label: 'Buildings Saved', href: '#buildings' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.inner}>
          {/* Logo */}
          <button
            className={styles.logo}
            onClick={() => handleLinkClick('#hero')}
            aria-label="Eagle Lake Preservation Alliance — back to top"
          >
            <div className={styles.logoSeal} aria-hidden="true">
              {/* <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg> */}
              <img
                src={elpaSeal}
                width={44}
                height={44}
                alt="Eagle Lake Preservation Alliance seal"
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>
                Eagle Lake Preservation Alliance
              </span>
              <span className={styles.logoSub}>
                Eagle Lake, Texas · 501(c)(3)
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <ul className={styles.desktopLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  className={styles.navLink}
                  onClick={() => handleLinkClick(href)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side: Donate + Hamburger */}
          <div className={styles.navRight}>
            <button
              className={styles.donateBtn}
              onClick={() => handleLinkClick('#donate')}
            >
              Donate
            </button>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav — slides down, not full screen */}
      <div
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                className={styles.mobileLink}
                onClick={() => handleLinkClick(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={styles.mobileDonateBtn}
          onClick={() => handleLinkClick('#donate')}
        >
          Support ELPA — Donate
        </button>
      </div>
    </header>
  )
}
