import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import { SECTION_HEADERS } from '@/constants/sections'
import PortfolioCard from '@/components/PortfolioCard'
import { FEATURED_BASE } from '@/constants/featured'

export default function Featured() {
  return (
    <Container as="section" id={SECTION_HEADERS.featured.id}>
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.featured} />
      <div className="flex flex-col gap-6">
        {FEATURED_BASE.map(
          ({ company, title, cardDescription, tags, coverImage }) => (
            <PortfolioCard
              key={company}
              company={company}
              title={title}
              cardDescription={cardDescription}
              tags={tags}
              coverImage={coverImage}
              section="featured"
            />
          )
        )}
      </div>
    </Container>
  )
}
