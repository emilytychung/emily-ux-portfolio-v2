import { CaseStudy } from './featured'

export type SimpleCaseStudy = {
  company: string
  title: string
  coverImage: string
}

export const GALLERY: CaseStudy[] = [
  {
    company: 'TD Canada Trust',
    title: 'Interac e-Transfer',
    description:
      'Send money across Canada for both personal and business cusotmers',
    tags: ['ios', 'android'],
    coverImage: '/images/gallery/td-interac/cover.png',
  },
  {
    company: 'Headquarters',
    title: 'Payroll system',
    description: 'Allowing companies to transfer and manage payroll directly',
    tags: ['desktop'],
    coverImage: '/images/gallery/headquarters/cover.png',
  },
  {
    company: 'Canvass AI',
    title: 'ML & AI Platform',
    description:
      'Allowing manufacturing companies to easily implement into their process',
    tags: ['desktop'],
    coverImage: '/images/gallery/canvass/cover.png',
  },
  {
    company: 'Mistplay',
    title: 'Design system',
    description: 'Change from light mode to dark mode with a flip of a switch',
    tags: ['android'],
    coverImage: '/images/case-studies/mistplay-design-system/cover.png',
  },
] as const

export const SIMPLE_GALLERY: SimpleCaseStudy[] = [
  {
    company: 'Ribbon',
    title: 'HR Software Tool',
    coverImage: '/images/case-studies/ribbon/cover.png',
  },
  {
    company: 'Mistplay',
    title: 'Illustrations',
    coverImage: '/images/case-studies/mistplay-illustrations/cover.png',
  },
  {
    company: 'Avantis',
    title: 'Trading Dashboard',
    coverImage: '/images/case-studies/avantis/cover.png',
  },
  {
    company: 'Uniswap',
    title: 'User Research',
    coverImage: '/images/case-studies/uniswap/cover.png',
  },
] as const
