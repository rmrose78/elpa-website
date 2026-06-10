import { useState } from 'react'
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconLock,
  IconCheck,
} from '@tabler/icons-react'
import styles from './ContactSection.module.scss'

const SUBJECTS = [
  'General question',
  'Membership inquiry',
  'Report a building at risk',
  'Landmark Plaque Program',
  'Donation question',
  'Volunteer / get involved',
  'Media inquiry',
  'Other',
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    // TODO: Wire up Netlify Forms once Eve confirms email address
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in your name, email, and message before sending.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Get in Touch</p>
        <h2 className={styles.heading}>Contact ELPA</h2>

        <div className={styles.grid}>
          {/* Left col — contact details */}
          <div className={styles.left}>
            <p className={styles.body}>
              Questions about a historic property, interested in membership, or
              want to get involved? Reach out — ELPA is run by Eagle Lake
              residents who are happy to talk.
            </p>

            <ul className={styles.detailList}>
              <li className={styles.detailItem}>
                <div className={styles.detailIcon} aria-hidden="true">
                  <IconMail size={18} />
                </div>
                <div>
                  <div className={styles.detailLabel}>Email</div>
                  <div
                    className={`${styles.detailValue} ${styles.detailValuePending}`}
                  >
                    [ Confirm email address with client ]
                  </div>
                </div>
              </li>

              <li className={styles.detailItem}>
                <div className={styles.detailIcon} aria-hidden="true">
                  <IconMapPin size={18} />
                </div>
                <div>
                  <div className={styles.detailLabel}>Mailing Address</div>
                  <div className={styles.detailValue}>
                    P.O. Box 331, Eagle Lake TX 77434
                  </div>
                </div>
              </li>

              <li className={styles.detailItem}>
                <div className={styles.detailIcon} aria-hidden="true">
                  <IconPhone size={18} />
                </div>
                <div>
                  <div className={styles.detailLabel}>Phone</div>
                  <div className={styles.detailValue}>(979) 234-6848</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right col — form */}
          <div className={styles.right}>
            {!submitted ? (
              <>
                <h3 className={styles.formTitle}>Send a Message</h3>

                <input
                  className={styles.field}
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-label="Your name"
                />
                <input
                  className={styles.field}
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Your email address"
                />

                <div className={styles.selectWrap}>
                  <select
                    className={styles.select}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    aria-label="Subject"
                  >
                    <option value="" disabled>
                      Subject — what is this about?
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className={styles.selectChevron} aria-hidden="true">
                    ▾
                  </span>
                </div>

                <textarea
                  className={`${styles.field} ${styles.textarea}`}
                  placeholder="Your message..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-label="Your message"
                />

                <button className={styles.submitBtn} onClick={handleSubmit}>
                  Send Message
                </button>

                <div className={styles.privacy}>
                  <IconLock size={13} aria-hidden="true" />
                  <span>
                    Messages go directly to ELPA's inbox — we never share your
                    information.
                  </span>
                </div>
              </>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon} aria-hidden="true">
                  <IconCheck size={26} />
                </div>
                <h3 className={styles.successTitle}>Message sent!</h3>
                <p className={styles.successBody}>
                  Thank you for reaching out. ELPA will be in touch soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
