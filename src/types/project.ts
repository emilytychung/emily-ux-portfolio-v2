import { StaticImageData } from 'next/image'
import { FC, SVGProps } from 'react'
import { PlatformKey } from './platforms'

export type IconComponentType = FC<SVGProps<SVGSVGElement>>

export interface SummaryItem {
  subheader: string
  description: string
  IconComponentType?: IconComponentType
  imgFile?: StaticImageData
}

export interface UserPersona {
  name: string
  title: string
  description: string
  goals: string
  painPoints: string
  behavioralInsights: string
  imgFile: StaticImageData
}

export interface CardItem {
  subheader: string
  description: string
  IconComponent: IconComponentType
}

export interface CardGridSection {
  title: string
  cards: CardItem[]
}

export interface HighlightItem {
  subheader: string
  description: string
  imgFile?: StaticImageData
}

export interface MediaItem {
  type: 'image' | 'video'
  src: StaticImageData
}

export interface HighlightSection {
  title: string
  highlights: HighlightItem[]
  media?: MediaItem
  imgFile?: StaticImageData
  videoFile?: StaticImageData
}

export interface UserSection {
  title: string
  users: UserPersona[]
}

// Process section with description
export interface DescriptionSection {
  title: string
  description: string
  imgFile?: StaticImageData
  videoFile?: StaticImageData
}

// Union type for all section types
export type ProcessSection = HighlightSection | DescriptionSection | UserSection

export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

export type FlatlayImages = Record<Breakpoint, StaticImageData>

// Type guard functions to narrow types
export function isHighlightSection(
  section: ProcessSection
): section is HighlightSection {
  return 'highlights' in section && !('users' in section)
}

export function isUserSection(section: ProcessSection): section is UserSection {
  return 'users' in section
}

export function isDescriptionSection(
  section: ProcessSection
): section is DescriptionSection {
  return 'description' in section
}

// Most minimal project information
export type SimpleProjectBase = {
  company: string
  title: string
  coverImage: StaticImageData
}

// Extended information for project cards
export type ProjectBase = SimpleProjectBase & {
  tags: PlatformKey[]
  cardDescription: string
  slug?: string
}

// Full project data structure for detailed project pages
export interface ProjectData extends ProjectBase {
  companyLogoIcon: StaticImageData
  description: string
  flatlayImages: FlatlayImages
  roles: string[]
  team: string[]
  timeline: string
  summary: SummaryItem[]
  designProcess: {
    discover: HighlightSection[]
    define: CardGridSection[]
    userPersona: UserSection
    explore: HighlightSection
    execute: Array<HighlightSection | DescriptionSection>
  }
  outcomes: CardGridSection[]
}
