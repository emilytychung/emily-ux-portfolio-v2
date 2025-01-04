import Jumbotron from '@/components/Jumbotron'
import SectionHeader from '@/components/SectionHeader'
import Testimonials from '@/components/Testimonials'
import { SECTION_HEADERS } from '@/constants/sections'

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.caseStudies} />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.gallery} />
      <Testimonials />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.personal} />
    </div>
  )
}
