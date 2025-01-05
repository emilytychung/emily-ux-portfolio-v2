import Jumbotron from '@/components/Jumbotron'
import SectionHeader from '@/components/SectionHeader'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import { SECTION_HEADERS } from '@/constants/sections'
import CaseStudies from '@/components/CaseStudies'

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <CaseStudies />
      <Gallery />
      <Testimonials />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.personal} />
    </div>
  )
}
