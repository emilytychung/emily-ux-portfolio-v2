import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import { HOME_SECTION_HEADERS } from '@/constants/sections'
import PortfolioCard from '@/components/PortfolioCard'
import SimplePortfolioCard from '@/components/PortfolioCard/SimplePortfolioCard'
import { GALLERY, SIMPLE_GALLERY } from '@/constants/gallery'

export default function Gallery() {
  return (
    <Container as="section">
      <SectionHeader sectionHeaderMap={HOME_SECTION_HEADERS.gallery} />
      <div className="flex flex-col gap-4 sm:gap-6">
        {GALLERY.map(
          ({ company, title, cardDescription, tags, coverImage }) => (
            <PortfolioCard
              key={company}
              company={company}
              title={title}
              cardDescription={cardDescription}
              tags={tags}
              coverImage={coverImage}
              section="gallery"
            />
          )
        )}
      </div>
      <div className="flex flex-col gap-4 pt-4 sm:pt-6 md:grid md:grid-cols-2 md:gap-6">
        {SIMPLE_GALLERY.map(({ company, title, coverImage }) => (
          <SimplePortfolioCard
            key={company}
            company={company}
            title={title}
            coverImage={coverImage}
          />
        ))}
      </div>
    </Container>
  )
}
