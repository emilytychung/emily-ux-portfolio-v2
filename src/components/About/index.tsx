'use client'
import { useState } from 'react'
import Container from '@/components/Container'
import { SECTION_HEADERS } from '@/constants/sections'
import SectionHeader from '@/components/SectionHeader'
import Polaroid from './Polaroid'
import { POLAROID_DATA } from '@/constants/polaroids'
import './index.css'

export default function About() {
  const [selectedPolaroid, setSelectedPolaroid] = useState<number | null>(null)

  return (
    <Container
      as="section"
      id={SECTION_HEADERS.about.id}
      className="flex flex-col sm:overflow-hidden lg:overflow-visible"
    >
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.about} />

      <div
        className="relative mx-auto flex h-[1481px] w-full max-w-[1200px] items-center justify-center transition-[height] duration-500 ease-out sm:h-[1421px] md:h-[800px]"
        aria-live="polite"
      >
        <div className="polaroid-container relative h-full w-full">
          {POLAROID_DATA.map((polaroid, index) => (
            <Polaroid
              key={polaroid.title}
              imgFile={polaroid.imgFile}
              alt={polaroid.title}
              title={polaroid.title}
              isSelected={selectedPolaroid === index}
              className={`absolute transition-all duration-500 ease-out ${selectedPolaroid === index ? 'polaroid-selected z-[60]' : `z-[${polaroid.zIndex}]`} ${index % 2 === 0 ? 'polaroid-hover-right' : 'polaroid-hover-left'} polaroid-${index + 1} `}
              rotation={polaroid.rotations.mobile}
              onClick={() =>
                setSelectedPolaroid(selectedPolaroid === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
