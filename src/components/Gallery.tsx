import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import { SECTION_HEADERS } from '@/constants/sections'
import PortfolioCard from '@/components/PortfolioCard'
import SimplePortfolioCard from '@/components/PortfolioCard/SimplePortfolioCard'
import { GALLERY, SIMPLE_GALLERY } from '@/constants/gallery'

export default function Gallery() {
  return (
    <Container as="section">
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.gallery} />
      <div className="flex flex-col gap-4 sm:gap-6">
        {GALLERY.map(({ company, title, description, tags }) => (
          <PortfolioCard
            key={company}
            company={company}
            title={title}
            description={description}
            tags={tags}
            section="gallery"
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 pt-4 sm:pt-6 md:grid md:grid-cols-2 md:gap-6">
        {SIMPLE_GALLERY.map(({ company, title, imgUrl }) => (
          <SimplePortfolioCard
            key={company}
            company={company}
            title={title}
            imgUrl={imgUrl}
          />
        ))}
      </div>
    </Container>
  )
}
