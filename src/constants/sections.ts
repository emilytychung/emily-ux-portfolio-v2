export interface SectionHeaderMap {
  labelText: string
  headingText: string
  id?: string
}

export type SectionKey = 'caseStudies' | 'gallery' | 'testimonials' | 'personal'

export const SECTION_HEADERS: Record<SectionKey, SectionHeaderMap> = {
  caseStudies: {
    labelText: 'featured case studies',
    headingText: 'From concept to design',
    id: 'work',
  },
  gallery: {
    labelText: 'gallery',
    headingText: 'Other featured work',
  },
  testimonials: {
    labelText: 'KIND WORDS',
    headingText: 'From clients & co-workers',
  },
  personal: {
    labelText: 'outside of work',
    headingText: 'Polaroids from my personal life',
    id: 'about',
  },
} as const

// Alternative array structure if you need ordered sections
export const SECTION_ORDER: Array<{
  id: SectionKey
  header: SectionHeaderMap
}> = [
  {
    id: 'caseStudies',
    header: SECTION_HEADERS.caseStudies,
  },
  {
    id: 'gallery',
    header: SECTION_HEADERS.gallery,
  },
  {
    id: 'testimonials',
    header: SECTION_HEADERS.testimonials,
  },
  {
    id: 'personal',
    header: SECTION_HEADERS.personal,
  },
] as const
