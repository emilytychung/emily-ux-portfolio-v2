import Container from '@/components/Container'
import Card from '@/components/Testimonials/Card'
import SectionHeader from '@/components/SectionHeader'
import { HOME_SECTION_HEADERS } from '@/constants/sections'
import { TESTIMONIALS } from '@/constants/testimonials'
import '@/styles/testimonials.css'

export default function Testimonials() {
  return (
    <Container as="section" className="testimonials-background">
      <SectionHeader sectionHeaderMap={HOME_SECTION_HEADERS.testimonials} />
      <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
        {TESTIMONIALS.map(({ imageUrl, name, title, testimonial }) => (
          <Card
            key={name}
            imageUrl={imageUrl}
            name={name}
            title={title}
            testimonial={testimonial}
          />
        ))}
      </div>
    </Container>
  )
}
