import {
  IconMapPin,
  IconBuilding,
  IconTrees,
  IconSignRight,
  IconBook,
  IconStar,
  IconHomeHeart,
  IconCoin,
  IconUsers,
} from '@tabler/icons-react'
import styles from './AccomplishmentsSection.module.scss'

interface AccomplishmentCard {
  icon: React.ReactNode
  title: string
  body: string
}

const CARDS: AccomplishmentCard[] = [
  {
    icon: <IconMapPin size={20} />,
    title: 'Historic Landmark Plaque Program',
    body: '14 properties placed on the Eagle Lake Historic Register to date, with plaques recognizing their significance.',
  },
  {
    icon: <IconBuilding size={20} />,
    title: '1904 Calaboose Restoration',
    body: 'Secured a 99-year lease from the City of Eagle Lake for the historic 1904 Calaboose, now undergoing long-term restoration.',
  },
  {
    icon: <IconTrees size={20} />,
    title: 'Historic Tree Ordinance',
    body: "Assisted in developing a local tree ordinance to protect the historic trees that define Eagle Lake's streetscapes.",
  },
  {
    icon: <IconSignRight size={20} />,
    title: 'Historical Markers',
    body: 'Purchased 6 "Historical Markers in City" signs from the Texas Historical Commission. Sponsored a THC workshop on how to obtain Texas Historical Markers.',
  },
  {
    icon: <IconBook size={20} />,
    title: 'Research & Education',
    body: 'Operates a Historic Research Assistance Program. Publishes the Local Historic Landmarks Register. Celebrates National Preservation Week annually.',
  },
  {
    icon: <IconStar size={20} />,
    title: 'Victorian Christmas Celebration',
    body: 'Hosts the annual Victorian Christmas Celebration, a beloved Eagle Lake community tradition keeping local heritage alive.',
  },
  {
    icon: <IconHomeHeart size={20} />,
    title: 'Three Historic Buildings Donated',
    body: 'Received three donated historic buildings on W. Main St. — the 1907 Herman Furniture Co., the 1912 Brosig Bldg, and a historic wood front commercial building at 310 W. Main.',
  },
  {
    icon: <IconCoin size={20} />,
    title: 'Kitty Kell Memorial Fund',
    body: "Recipient of the Kitty Kell Memorial Fund, supporting ELPA's ongoing preservation and restoration efforts.",
  },
  {
    icon: <IconUsers size={20} />,
    title: 'Community Engagement',
    body: 'Educational workshops, participation in the Texas Settlement Region, and active collaboration with preservation groups across Texas.',
  },
]

export default function AccomplishmentsSection() {
  return (
    <section className={styles.section} id="accomplishments">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>What We've Done</p>
            <h2 className={styles.heading}>Accomplishments</h2>
          </div>
        </div>

        <ul className={styles.grid}>
          {CARDS.map(({ icon, title, body }) => (
            <li key={title} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
