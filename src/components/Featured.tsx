import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import { SECTION_HEADERS } from '@/constants/sections'
import PortfolioCard from './PortfolioCard'
import { FEATURED } from '@/constants/featured'

export default function Featured() {
  return (
    <Container as="section">
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.caseStudies} />
      <div className="flex flex-col gap-6">
        {FEATURED.map(({ company, title, description, tags, coverImage }) => (
          <PortfolioCard
            key={company}
            company={company}
            title={title}
            description={description}
            tags={tags}
            coverImage={coverImage}
            section="featured"
          />
        ))}
      </div>
    </Container>
  )
}
