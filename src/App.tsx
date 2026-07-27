import Nav from '@/components/layout/Nav/Nav'
import HeroSection from '@/components/sections/HeroSection/HeroSection'
import AnnouncementBar from '@/components/layout/AnnouncementBar/AnnouncementBar'
import SkipLink from '@/components/layout/SkipLink/SkipLink'
import MissionStrip from '@/components/sections/MissionStrip/MissionStrip'
import AboutSection from '@/components/sections/AboutSection/AboutSection'
import AccomplishmentsSection from '@/components/sections/AccomplishmentsSection/AccomplishmentsSection'
import PreservationSection from '@/components/sections/PreservationSection/PreservationSection'
import DonateSection from '@/components/sections/DonateSection/DonateSection'
import ContactSection from '@/components/sections/ContactSection/ContactSection'
import Footer from '@/components/layout/Footer/Footer'

export default function App() {
  return (
    <>
      <SkipLink />
      <AnnouncementBar />
      <Nav />
      <main id="main-content">
        <HeroSection />
        <MissionStrip />
        <AboutSection />
        <AccomplishmentsSection />
        <PreservationSection />
        <DonateSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
