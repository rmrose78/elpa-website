import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import styles from './PreservationSection.module.scss'

type BuildingStatus = 'saved' | 'lost'

interface MetaPill {
  text: string
}

interface Building {
  id: string
  title: string
  address: string
  note: string
  status: BuildingStatus
  desc: string
  meta: MetaPill[]
}

const BUILDINGS: Building[] = [
  {
    id: 'wooden-front',
    title: 'Wooden Front Commercial Building',
    address: '310 E. Main St.',
    note: 'Saved from demolition. Later donated to ELPA.',
    status: 'saved',
    desc: "This historic wooden-front commercial building on Main Street was threatened with demolition before ELPA stepped in to secure its future. The building was subsequently donated to ELPA, becoming part of the organization's growing portfolio of preserved Main Street properties.",
    meta: [
      { text: 'Saved from demolition' },
      { text: 'Donated to ELPA' },
      { text: 'E. Main St. corridor' },
    ],
  },
  {
    id: 'causey-house',
    title: '1912 W. F. Causey House',
    address: '200 W. Post Office St.',
    note: 'Saved from being moved out of town.',
    status: 'saved',
    desc: 'Built in 1912, the Causey House was at risk of being permanently removed from Eagle Lake when ELPA intervened. The organization successfully prevented its relocation, keeping this piece of early 20th-century residential architecture rooted in the community where it belongs.',
    meta: [
      { text: 'Saved from relocation' },
      { text: 'Built 1912' },
      { text: 'Historic residence' },
    ],
  },
  {
    id: 'steinwiess',
    title: 'Steinwiess House',
    address: '511 N. McCarty St.',
    note: 'Saved from being moved out of town.',
    status: 'saved',
    desc: "The Steinwiess House faced an uncertain future when plans emerged to move it out of Eagle Lake. ELPA successfully intervened to keep the historic residence in place, preserving its contribution to the neighborhood's architectural character.",
    meta: [
      { text: 'Saved from relocation' },
      { text: 'Historic residence' },
      { text: 'N. McCarty St.' },
    ],
  },
  {
    id: 'mcclanahan',
    title: '1898 McClanahan–Johnson House',
    address: '406 E. Prairie St.',
    note: 'Saved from being moved out of town.',
    status: 'saved',
    desc: "One of Eagle Lake's oldest surviving residences, the McClanahan–Johnson House dates to 1898. When plans to relocate it outside of Eagle Lake threatened its place in the community, ELPA worked to ensure it remained on E. Prairie St., where it has stood for over a century.",
    meta: [
      { text: 'Saved from relocation' },
      { text: 'Built 1898' },
      { text: "One of Eagle Lake's oldest homes" },
    ],
  },
  {
    id: 'herman',
    title: '1907 Herman Furniture Co. Building',
    address: '101 W. Main St.',
    note: 'Saved from demolition. Later donated to ELPA.',
    status: 'saved',
    desc: "Built in 1907, the Herman Furniture Co. Building is a cornerstone of Eagle Lake's historic Main Street commercial district. ELPA saved it from demolition and the building was later donated to the organization, which now stewards it as part of its long-term restoration mission.",
    meta: [
      { text: 'Saved from demolition' },
      { text: 'Donated to ELPA' },
      { text: 'Built 1907' },
    ],
  },
  {
    id: 'brosig',
    title: '1912 Brosig Building',
    address: '103 W. Main St.',
    note: 'Saved from demolition. Later donated to ELPA.',
    status: 'saved',
    desc: "The 1912 Brosig Building sits at the heart of Eagle Lake's historic Main Street. Rescued from demolition and later donated to ELPA, it stands today as one of three historic W. Main St. properties the organization has taken into its care for long-term preservation.",
    meta: [
      { text: 'Saved from demolition' },
      { text: 'Donated to ELPA' },
      { text: 'Built 1912' },
    ],
  },
  {
    id: 'craig-adams',
    title: 'Craig Adams Commercial Building',
    address: 'E. Main St.',
    note: 'Fought for — demolished Sept. 2007 by new owners.',
    status: 'lost',
    desc: 'ELPA fought to protect this Main Street commercial building from demolition. The organization succeeded in temporarily saving it — but after the property changed hands, the new owners demolished it in September 2007. Its loss remains a reminder of why ongoing preservation advocacy matters.',
    meta: [{ text: 'Demolished September 2007' }, { text: 'E. Main St.' }],
  },
]

export default function PreservationSection() {
  const [selected, setSelected] = useState<Building | null>(null)

  return (
    <section className={styles.section} id="buildings">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Preservation Record</p>
        <h2 className={styles.heading}>Buildings Saved</h2>
        <p className={styles.body}>
          These are the structures ELPA stepped in to protect — from demolition
          threats to attempts to move them out of Eagle Lake entirely.
        </p>

        <ul className={styles.grid}>
          {BUILDINGS.map((building) => (
            <li key={building.id}>
              <button
                className={styles.card}
                onClick={() => setSelected(building)}
                aria-label={`View details for ${building.title}`}
              >
                {/* Card image area */}
                <div className={styles.cardImg}>
                  <span
                    className={`${styles.statusBadge} ${
                      building.status === 'saved'
                        ? styles.statusSaved
                        : styles.statusLost
                    }`}
                  >
                    {building.status === 'saved' ? 'Saved' : 'Demolished'}
                  </span>
                  <div
                    className={styles.cardImgPlaceholder}
                    aria-hidden="true"
                  />
                </div>

                {/* Card body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>{building.title}</div>
                  <div className={styles.cardAddress}>{building.address}</div>
                  <div className={styles.cardNote}>{building.note}</div>
                  <div className={styles.cardHint} aria-hidden="true">
                    View details →
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Radix Dialog Modal */}
      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className={styles.modalOverlay} />
          <Dialog.Content className={styles.modal} aria-describedby={undefined}>
            <VisuallyHidden>
              <Dialog.Title>
                {selected?.title ?? 'Building detail'}
              </Dialog.Title>
            </VisuallyHidden>

            {selected && (
              <>
                {/* Modal image area */}
                <div
                  className={`${styles.modalImg} ${
                    selected.status === 'lost'
                      ? styles.modalImgLost
                      : styles.modalImgSaved
                  }`}
                >
                  <span className={styles.modalImgLabel} aria-hidden="true">
                    Photo placeholder — replace with actual photo
                  </span>
                  <Dialog.Close
                    className={styles.modalClose}
                    aria-label="Close"
                  >
                    ✕
                  </Dialog.Close>
                </div>

                {/* Modal body */}
                <div className={styles.modalBody}>
                  <p className={styles.modalAddress}>{selected.address}</p>
                  <h2 className={styles.modalTitle}>{selected.title}</h2>

                  {selected.status === 'lost' && (
                    <div className={styles.lostBanner}>
                      <span
                        className={styles.lostBannerIcon}
                        aria-hidden="true"
                      >
                        ⚠
                      </span>
                      <span>
                        ELPA fought to save this building. Despite their
                        efforts, it was demolished in September 2007 by new
                        owners following the property sale — a loss that
                        underscores why preservation work matters.
                      </span>
                    </div>
                  )}

                  <p className={styles.modalDesc}>{selected.desc}</p>

                  <ul className={styles.metaPills}>
                    {selected.meta.map(({ text }) => (
                      <li key={text} className={styles.metaPill}>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
