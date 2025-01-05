import { CaseStudy } from './featured'

export type SimpleCaseStudy = {
  company: string
  title: string
  imgUrl: string
}

export const GALLERY: CaseStudy[] = [
  {
    company: 'TD Canada Trust',
    title: 'Interac e-Transfer',
    description:
      'Send money across Canada for both personal and business cusotmers',
    tags: ['ios', 'android'],
    layout: 'mobile-trio',
    mobileImage: [
      '/images/gallery/td/mobile.png',
      '/images/gallery/td/mobile.png',
      '/images/gallery/td/mobile.png',
    ],
  },
  {
    company: 'Headquarters',
    title: 'Payroll system',
    description: 'Allowing companies to transfer and manage payroll directly',
    tags: ['desktop'],
    layout: 'desktop-only',
    desktopImage: '/images/gallery/headquarters/desktop.png',
  },
  {
    company: 'Canvass AI',
    title: 'ML & AI Platform',
    description:
      'Allowing manufacturing companies to easily implement into their process',
    tags: ['desktop'],
    layout: 'desktop-only',
    desktopImage: '/images/gallery/canvass/desktop.png',
  },
  {
    company: 'Mistplay',
    title: 'Design system',
    description: 'Change from light mode to dark mode with a flip of a switch',
    tags: ['android'],
    layout: 'mobile-trio',
    mobileImage: [
      '/images/case-studies/mistplay/mobile-1.png',
      '/images/case-studies/mistplay/mobile-2.png',
      '/images/case-studies/mistplay/mobile-3.png',
    ],
  },
] as const

export const SIMPLE_GALLERY: SimpleCaseStudy[] = [
  {
    company: 'Ribbon',
    title: 'HR Software Tool',
    imgUrl: '',
  },
  {
    company: 'Mistplay',
    title: 'Illustrations',
    imgUrl: '',
  },
  {
    company: 'Avantis',
    title: 'Trading Dashboard',
    imgUrl: '',
  },
  {
    company: 'Uniswap',
    title: 'User Research',
    imgUrl: '',
  },
] as const
