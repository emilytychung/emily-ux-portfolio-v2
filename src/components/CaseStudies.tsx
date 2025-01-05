import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import { SECTION_HEADERS } from '@/constants/sections'
import PortfolioCard from './PortfolioCard'
import { CASE_STUDIES } from '@/constants/case-studies'

export default function CaseStudies() {
  return (
    <Container as="section">
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.caseStudies} />
      <div className="flex flex-col gap-6">
        {CASE_STUDIES.map(({ company, title, description, tags }) => (
          <PortfolioCard
            key={company}
            company={company}
            title={title}
            description={description}
            tags={tags}
          />
        ))}
      </div>
    </Container>
  )
}
