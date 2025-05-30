import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import { HOME_SECTION_HEADERS } from '@/constants/sections'
import PortfolioCard from '@/components/PortfolioCard'
import { FEATURED_BASE } from '@/constants/featured'
import Link from 'next/link'
import '@/styles/featured.css'

export default function Featured() {
  return (
    <Container
      as="section"
      id={HOME_SECTION_HEADERS.featured.id}
      className="featured-background"
    >
      <SectionHeader sectionHeaderMap={HOME_SECTION_HEADERS.featured} />
      <div className="flex flex-col gap-6">
        {FEATURED_BASE.map(
          ({ company, title, cardDescription, tags, coverImage, slug }) => (
            <Link key={company} href={`/${slug}`}>
              <PortfolioCard
                company={company}
                title={title}
                cardDescription={cardDescription}
                tags={tags}
                coverImage={coverImage}
                section="featured"
              />
            </Link>
          )
        )}
      </div>
    </Container>
  )
}
