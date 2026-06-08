import styles from './HeroSection.module.scss'

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '14', label: 'Historic Landmarks Registered' },
  { value: '99 yr', label: 'Calaboose Lease Secured' },
  { value: '9+', label: 'Historic Buildings Saved' },
  { value: '3', label: 'Historic Buildings Donated to ELPA' },
]

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="hero">
      {/* Background image placeholder */}
      <div className={styles.imgPlaceholder} aria-hidden="true">
        <span className={styles.imgPlaceholderLabel}>
          Photo placeholder — 1904 Calaboose or Main St.
        </span>
      </div>

      {/* Overlays */}
      <div className={styles.texture} aria-hidden="true" />
      <div className={styles.gradient} aria-hidden="true" />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.badge} aria-label="Organization status">
            Recognized 501(c)(3) Nonprofit · Eagle Lake, TX
          </div>

          <h1 className={styles.heading}>
            Preserving the <em>Soul</em> of Eagle Lake
          </h1>

          <p className={styles.sub}>
            Dedicated to all things related to historic preservation and
            restoration in Eagle Lake, Texas — one building, one landmark, one
            story at a time.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={() => handleScroll('#donate')}
            >
              Support Our Work
            </button>
            <button
              className={styles.btnGhost}
              onClick={() => handleScroll('#preservation')}
            >
              See What We've Saved
            </button>
          </div>

          {/* Stats */}
          <div className={styles.statsBar} aria-label="Key statistics">
            <ul className={styles.statsList}>
              {STATS.map(({ value, label }) => (
                <li key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
