import styles from './AboutSection.module.scss'

const CREDENTIALS = [
  'Recognized 501(c)(3) Non-Profit organization',
  'Member of Preservation Texas',
  'Individual members belong to the National Trust for Historic Preservation',
  'Most board members serve on the Colorado County Historical Commission',
  'Members attended Texas Historical Commission Grant Writing Workshop',
  'Attend the annual THC Preservation Conference and Texian Independence Trail Workshop',
  'Participate in Texas Settlement Region',
  'Interface with other local preservation groups across Texas',
  'Many members have personal restoration experience',
]

const ORG_BADGES = [
  {
    label: 'Preservation Texas',
    sub: 'Active member organization',
  },
  {
    label: 'National Trust for Historic Preservation',
    sub: 'Individual member affiliates',
  },
  {
    label: 'Texas Historical Commission',
    sub: 'Grant workshop participants · Conference attendees',
  },
]

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Who We Are</p>
        <h2 className={styles.heading}>Credentials &amp; Memberships</h2>

        <div className={styles.grid}>
          {/* Left col — credentials + org badges */}
          <div>
            <ul className={styles.credentialsList}>
              {CREDENTIALS.map((item) => (
                <li key={item} className={styles.credentialsItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <ul className={styles.orgBadges}>
              {ORG_BADGES.map(({ label, sub }) => (
                <li key={label} className={styles.orgBadge}>
                  <div className={styles.orgBadgeIcon} aria-hidden="true" />
                  <div>
                    <div className={styles.orgBadgeText}>{label}</div>
                    <div className={styles.orgBadgeSub}>{sub}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right col — photo placeholder + copy */}
          <div className={styles.rightCol}>
            <div
              className={styles.imgPlaceholder}
              aria-label="Photo placeholder"
            >
              <span className={styles.imgPlaceholderLabel}>
                Photo Placeholder
              </span>
              <span className={styles.imgPlaceholderHint}>
                Could be the Calaboose, Main St., or board members at a THC
                event
              </span>
            </div>
            <p className={styles.body}>
              The Eagle Lake Preservation Alliance has been the community's
              steward of historic buildings, landmarks, and local heritage for
              decades. Our members are your neighbors — deeply invested in the
              stories that make Eagle Lake worth preserving.
            </p>
            <p className={styles.body}>
              From securing a 99-year lease on the 1904 Calaboose to fighting
              demolition orders on Main Street buildings, ELPA acts whenever
              Eagle Lake's irreplaceable history is at risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
