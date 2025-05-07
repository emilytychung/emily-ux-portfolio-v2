import { HomeSectionKey, DetailSectionKey } from '@/types/sections'

export interface SectionHeaderMap {
  labelText?: string
  headingText: string
  id?: string
}

export const HOME_SECTION_HEADERS: Record<HomeSectionKey, SectionHeaderMap> = {
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

export const DETAIL_SECTION_HEADERS: Record<
  DetailSectionKey,
  SectionHeaderMap
> = {
  seeOther: {
    headingText: 'See other projects',
    id: 'seeOther',
  },
} as const
