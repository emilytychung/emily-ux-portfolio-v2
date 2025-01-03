import { Jumbotron } from '@/components/Jumbotron'
import { SectionHeader } from '@/components/SectionHeader'
import { SECTION_HEADERS } from '@/constants/sections'

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.caseStudies} />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.gallery} />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.testimonials} />
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.personal} />
    </div>
  )
}
