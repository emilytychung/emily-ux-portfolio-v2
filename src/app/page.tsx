import Jumbotron from '@/components/Jumbotron'
import SectionHeader from '@/components/SectionHeader'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import { SECTION_HEADERS } from '@/constants/sections'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Featured />
      <Gallery />
      <Testimonials />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.personal} />
      <Footer />
    </>
  )
}
