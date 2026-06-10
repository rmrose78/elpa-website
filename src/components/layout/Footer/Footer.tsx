import styles from './Footer.module.scss'

const NAV_LINKS = [
  { label: 'About & Credentials', href: '#about' },
  { label: 'Accomplishments', href: '#accomplishments' },
  { label: 'Buildings Saved', href: '#buildings' },
  { label: 'Contact', href: '#contact' },
]

const ORG_LINKS = [
  {
    label: 'Preservation Texas',
    href: 'https://www.preservationtexas.org',
  },
  {
    label: 'National Trust for Historic Preservation',
    href: 'https://savingplaces.org',
  },
  {
    label: 'Texas Historical Commission',
    href: 'https://www.thc.texas.gov',
  },
  { label: 'Donate to ELPA', href: '#donate' },
]

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener noreferrer')
      return
    }
    if (href === '#') return
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand col */}
          <div className={styles.brand}>
            <div className={styles.brandName}>
              Eagle Lake Preservation Alliance
            </div>
            <div className={styles.brandSub}>
              Eagle Lake, Texas · 501(c)(3) Nonprofit
            </div>
            <p className={styles.brandDesc}>
              Dedicated to historic preservation and restoration in Eagle Lake,
              Colorado County, Texas.
            </p>
          </div>

          {/* Navigate col */}
          <div>
            <div className={styles.colTitle}>Navigate</div>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    className={styles.link}
                    onClick={() => handleLinkClick(href)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization col */}
          <div>
            <div className={styles.colTitle}>Organization</div>
            <ul className={styles.linkList}>
              {ORG_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    className={styles.link}
                    onClick={() => handleLinkClick(href)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Eagle Lake Preservation Alliance, Inc.
            · Eagle Lake, TX 77434
          </p>
          <p className={styles.copy}>P.O. Box 331 · (979) 234-6848</p>
        </div>
      </div>
    </footer>
  )
}
