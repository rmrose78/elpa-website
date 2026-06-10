import styles from './MissionStrip.module.scss'

export default function MissionStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <blockquote className={styles.quote}>
          "Dedicated to all things related to{' '}
          <span className={styles.highlight}>
            historic preservation and restoration
          </span>{' '}
          in Eagle Lake, Texas."
        </blockquote>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.meta}>
          <p>
            <strong>P.O. Box 331</strong>, Eagle Lake TX 77434
          </p>
          <p>(979) 234-6848</p>
          <p>501(c)(3) · Member of Preservation Texas</p>
        </div>
      </div>
    </div>
  )
}
