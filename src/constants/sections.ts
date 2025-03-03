export interface SectionHeaderMap {
  labelText: string
  headingText: string
  id?: string
}

export type SectionKey = 'featured' | 'gallery' | 'testimonials' | 'about'

export const SECTION_HEADERS: Record<SectionKey, SectionHeaderMap> = {
  featured: {
    labelText: 'Featured case studies',
    headingText: 'From concept to design',
    id: 'work',
  },
  gallery: {
    labelText: 'Gallery',
    headingText: 'Other featured work',
  },
  testimonials: {
    labelText: 'Kind words',
    headingText: 'From clients & co-workers',
  },
  about: {
    labelText: 'Outside of work',
    headingText: 'Polaroids from my personal life',
    id: 'about',
  },
} as const
