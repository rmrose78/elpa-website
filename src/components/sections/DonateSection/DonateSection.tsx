import { useState } from 'react'
import {
  IconBuilding,
  IconMapPin,
  IconStar,
  IconReceiptTax,
} from '@tabler/icons-react'
import styles from './DonateSection.module.scss'

const IMPACT_ITEMS = [
  {
    icon: <IconBuilding size={18} />,
    text: 'Fund restoration work on the 1904 Calaboose and other historic properties ELPA holds.',
    strong: 'Fund restoration work',
  },
  {
    icon: <IconMapPin size={18} />,
    text: 'Expand the Landmark Plaque Program — 14 properties recognized, more waiting.',
    strong: 'Expand the Landmark Plaque Program',
  },
  {
    icon: <IconStar size={18} />,
    text: 'Support community events like the Victorian Christmas Celebration and educational workshops.',
    strong: 'Support community events',
  },
]

const AMOUNTS = ['10', '25', '50', '100', '250', '']

export default function DonateSection() {
  const [selectedAmt, setSelectedAmt] = useState('25')
  const [customAmt, setCustomAmt] = useState('25')

  const handleAmountClick = (amt: string) => {
    setSelectedAmt(amt)
    if (amt !== '') setCustomAmt(amt)
  }

  const handleDonateClick = () => {
    // TODO: Wire up PayPal Giving Fund once Eve confirms account details
    console.log('Donate clicked — amount:', customAmt)
  }

  return (
    <section className={styles.section} id="donate">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Left col — impact */}
          <div className={styles.left}>
            <p className={styles.eyebrow}>Support ELPA</p>
            <h2 className={styles.heading}>Help Us Save the Next One</h2>
            <p className={styles.body}>
              Every dollar donated to ELPA goes directly toward preservation
              work — protecting historic buildings, funding research, and
              keeping Eagle Lake's story alive for future generations.
            </p>

            <ul className={styles.impactList}>
              {IMPACT_ITEMS.map(({ icon, strong, text }) => (
                <li key={strong} className={styles.impactItem}>
                  <div className={styles.impactIcon} aria-hidden="true">
                    {icon}
                  </div>
                  <p className={styles.impactText}>
                    <strong>{strong}</strong> {text.replace(strong, '')}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.taxNote}>
              <IconReceiptTax
                size={15}
                className={styles.taxNoteIcon}
                aria-hidden="true"
              />
              <span>
                ELPA is a recognized 501(c)(3) nonprofit. Donations are
                tax-deductible to the extent allowed by law. You will receive a
                receipt by email for your records.
              </span>
            </div>
          </div>

          {/* Right col — donation card */}
          <div className={styles.card}>
            <h3 className={styles.cardHeading}>Make a Donation</h3>
            <p className={styles.cardSub}>
              Support historic preservation in Eagle Lake, Texas
            </p>

            {/* Amount grid */}
            <div
              className={styles.amountGrid}
              role="group"
              aria-label="Select donation amount"
            >
              {AMOUNTS.map((amt) => (
                <button
                  key={amt === '' ? 'other' : amt}
                  className={`${styles.amountBtn} ${
                    selectedAmt === amt ? styles.amountBtnActive : ''
                  }`}
                  onClick={() => handleAmountClick(amt)}
                  aria-pressed={selectedAmt === amt}
                >
                  {amt === '' ? 'Other' : `$${amt}`}
                </button>
              ))}
            </div>

            {/* Custom amount input */}
            <div className={styles.inputWrap}>
              <span className={styles.inputPrefix} aria-hidden="true">
                $
              </span>
              <input
                className={styles.input}
                type="number"
                min="1"
                value={customAmt}
                onChange={(e) => {
                  setCustomAmt(e.target.value)
                  setSelectedAmt('')
                }}
                aria-label="Enter donation amount"
              />
            </div>

            {/* Optional fields */}
            <input
              className={styles.field}
              type="text"
              placeholder="Your name (optional)"
              aria-label="Your name"
            />
            <input
              className={styles.field}
              type="email"
              placeholder="Email for receipt (optional)"
              aria-label="Email address"
            />

            <button className={styles.submitBtn} onClick={handleDonateClick}>
              Complete Donation →
            </button>

            <p className={styles.fine}>
              Secure donation via PayPal Giving Fund · No account required ·
              501(c)(3) tax-deductible
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
