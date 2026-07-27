import styles from './SkipLink.module.scss'

export default function SkipLink() {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Skip to main content
    </a>
  )
}
