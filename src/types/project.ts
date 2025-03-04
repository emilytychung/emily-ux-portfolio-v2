import { StaticImageData } from 'next/image'
import { FC, SVGProps } from 'react'

export type IconComponent = FC<SVGProps<SVGSVGElement>>

export interface Highlight {
  subheader: string
  description: string
  iconComponent?: IconComponent
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

export interface HighlightSection {
  title: string
  highlights: Highlight[]
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
  highlights?: Highlight[]
}

// Union type for all section types
export type ProcessSection = HighlightSection | UserSection | DescriptionSection

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

export type PlatformType = 'desktop' | 'ios' | 'android' | string

// Full project data structure
export interface ProjectData {
  company: string
  title: string
  cardDescription: string
  description: string
  tags: PlatformType[]
  coverImage: StaticImageData
  flatlayImage?: StaticImageData
  roles: string[]
  team: string[]
  timeline: string
  summary?: Highlight[]
  designProcess: {
    discover?: ProcessSection[]
    define?: ProcessSection[]
    explore?: ProcessSection | ProcessSection[]
    execute?: ProcessSection[]
    outcomes?: ProcessSection[]
  }
}
