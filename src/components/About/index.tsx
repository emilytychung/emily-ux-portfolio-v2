'use client'
import { useEffect, useState, useCallback } from 'react'
import Container from '@/components/Container'
import { SECTION_HEADERS } from '@/constants/sections'
import SectionHeader from '@/components/SectionHeader'
import Polaroid from './Polaroid'
import { POLAROID_DATA } from '@/constants/polaroids'

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'ultrawide'

export default function About() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile')
  const [selectedPolaroid, setSelectedPolaroid] = useState<number | null>(null)

  // Detect breakpoint with more reliable implementation
  useEffect(() => {
    function getBreakpoint(): Breakpoint {
      const width = window.innerWidth
      if (width >= 1440) return 'ultrawide'
      if (width >= 900) return 'desktop'
      if (width >= 481) return 'tablet'
      return 'mobile'
    }

    // Set initial breakpoint
    setBreakpoint(getBreakpoint())

    // Simple resize handler without debounce
    function handleResize() {
      const newBreakpoint = getBreakpoint()
      if (newBreakpoint !== breakpoint) {
        console.log(`Breakpoint changed: ${breakpoint} -> ${newBreakpoint}`)
        setBreakpoint(newBreakpoint)
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint]) // Include breakpoint in dependencies

  const handlePolaroidClick = useCallback(
    (index: number) => {
      setSelectedPolaroid(selectedPolaroid === index ? null : index)
    },
    [selectedPolaroid]
  )

  // Calculate appropriate height based on breakpoint
  const sectionHeight =
    breakpoint === 'mobile'
      ? 'h-[1481px]'
      : breakpoint === 'tablet'
        ? 'h-[1421px]'
        : 'h-[708px]'

  return (
    <Container as="section" id={SECTION_HEADERS.personal.id}>
      <SectionHeader sectionHeaderMap={SECTION_HEADERS.personal} />

      {/* Debug info (remove in production) */}
      <div className="mb-4 text-sm text-slate-500">
        Current breakpoint: {breakpoint}
      </div>

      <div
        className={`relative w-full ${sectionHeight} transition-[height] duration-500 ease-out`}
        aria-live="polite"
      >
        {POLAROID_DATA.map(
          ({ imgFile, title, rotations, position, zIndex }, index) => (
            <Polaroid
              key={`${title}-${breakpoint}`} // Force re-render on breakpoint change
              imgFile={imgFile}
              alt={title}
              title={title}
              rotation={selectedPolaroid === index ? 0 : rotations[breakpoint]}
              style={{
                position: 'absolute',
                top: position[breakpoint].top,
                left: position[breakpoint].left,
                transition:
                  'transform 0.5s ease-out, top 0.5s ease-out, left 0.5s ease-out',
                zIndex: selectedPolaroid === index ? 50 : zIndex,
              }}
              onClick={() => handlePolaroidClick(index)}
            />
          )
        )}
      </div>
    </Container>
  )
}
