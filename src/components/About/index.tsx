import Container from '@/components/Container'
import { SECTION_HEADERS } from '@/constants/sections'
import SectionHeader from '@/components/SectionHeader'
import bubbles from '@images/about/bubbles.png'
import travelling from '@images/about/travelling.png'
import cooking from '@images/about/cooking.png'
import cafe from '@images/about/cafe.png'
import hiking from '@images/about/hiking.png'

import Polaroid from './Polaroid'

const POLAROID_IMAGES = [
  {
    img: bubbles,
    title: 'Bubbles (RIP)',
  },
  {
    img: travelling,
    title: 'Travelling',
  },
  {
    img: cooking,
    title: 'Cooking w/ friends',
  },
  {
    img: cafe,
    title: 'Cafe hopping',
  },
  {
    img: hiking,
    title: 'Hiking in Peru',
  },
]

export default function About() {
  return (
    <Container as="section" id={SECTION_HEADERS.personal.id}>
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.personal} />
      <div className="flex flex-col gap-4">
        {POLAROID_IMAGES.map(({ img, title }) => (
          <Polaroid key={title} imgFile={img} alt={title} title={title} />
        ))}
      </div>
    </Container>
  )
}
