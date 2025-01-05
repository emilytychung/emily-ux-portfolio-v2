import { PlatformKey } from './platforms'

// Base case study properties
export type BaseCaseStudy = {
  company: string
  title: string
  description: string
  tags: PlatformKey[]
}

// Specific layout types
interface DesktopOnlyLayout {
  layout: 'desktop-only'
  desktopImage: string
  mobileImage: string
}

interface DesktopMobileLayout {
  layout: 'desktop-mobile'
  desktopImage: string
  mobileImage: string
}

interface MobileTrioLayout {
  layout: 'mobile-trio'
  desktopImage?: never
  mobileImage: [string, string, string]
}

export type CaseStudy = BaseCaseStudy &
  (DesktopOnlyLayout | DesktopMobileLayout | MobileTrioLayout)

export const CASE_STUDIES: CaseStudy[] = [
  {
    company: 'TD Canada Trust',
    title: 'Global Transfers Case Study',
    description: 'Marketplace to shop rates and send money',
    tags: ['desktop', 'ios', 'android'],
    layout: 'desktop-mobile',
    desktopImage: '/images/case-studies/td/desktop.png',
    mobileImage: '/images/case-studies/td/mobile.png',
  },
  {
    company: 'Solana',
    title: 'Name Service Case Study',
    description: 'E-commerce platform to register domains on Solana',
    tags: ['desktop'],
    layout: 'desktop-mobile',
    desktopImage: '/images/case-studies/solana/desktop.png',
    mobileImage: '/images/case-studies/solana/mobile.png',
  },
  {
    company: 'Mistplay',
    title: 'Refer Friends Case Study',
    description: 'Boosting engagement on an advertising gaming app',
    tags: ['android'],
    layout: 'mobile-trio',
    mobileImage: [
      '/images/case-studies/mistplay/mobile-1.png',
      '/images/case-studies/mistplay/mobile-2.png',
      '/images/case-studies/mistplay/mobile-3.png',
    ],
  },
] as const

export type CaseStudyData = (typeof CASE_STUDIES)[number]
