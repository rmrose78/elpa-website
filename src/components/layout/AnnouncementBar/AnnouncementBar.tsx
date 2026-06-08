import styles from './AnnouncementBar.module.scss'

export default function AnnouncementBar() {
  const handleDonateClick = () => {
    const target = document.querySelector('#donate')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.bar} role="banner">
      <p className={styles.text}>
        Help us preserve Eagle Lake's history —{' '}
        <button className={styles.link} onClick={handleDonateClick}>
          Donate Today →
        </button>
      </p>
    </div>
  )
}
