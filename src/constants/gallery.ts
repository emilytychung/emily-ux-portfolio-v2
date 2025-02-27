import { StaticImageData } from 'next/image'
import { CaseStudy } from './featured'
import tdInterac from '@images/case-studies/td-interac/cover.png'
import headquarters from '@images/case-studies/headquarters/cover.png'
import canvass from '@images/case-studies/canvass/cover.png'
import mistplayDesignSystem from '@images/case-studies/mistplay-design-system/cover.png'
import mistplayIllustrations from '@images/case-studies/mistplay-illustrations/cover.png'
import ribbon from '@images/case-studies/ribbon/cover.png'
import avantis from '@images/case-studies/avantis/cover.png'
import uniswap from '@images/case-studies/uniswap/cover.png'

export type SimpleCaseStudy = {
  company: string
  title: string
  coverImage: StaticImageData
}

export const GALLERY: CaseStudy[] = [
  {
    company: 'TD Canada Trust',
    title: 'Interac e-Transfer',
    description:
      'Send money across Canada for both personal and business cusotmers',
    tags: ['ios', 'android'],
    coverImage: tdInterac,
  },
  {
    company: 'Headquarters',
    title: 'Payroll system',
    description: 'Allowing companies to transfer and manage payroll directly',
    tags: ['desktop'],
    coverImage: headquarters,
  },
  {
    company: 'Canvass AI',
    title: 'ML & AI Platform',
    description:
      'Allowing manufacturing companies to easily implement into their process',
    tags: ['desktop'],
    coverImage: canvass,
  },
  {
    company: 'Mistplay',
    title: 'Design system',
    description: 'Change from light mode to dark mode with a flip of a switch',
    tags: ['android'],
    coverImage: mistplayDesignSystem,
  },
] as const

export const SIMPLE_GALLERY: SimpleCaseStudy[] = [
  {
    company: 'Ribbon',
    title: 'HR Software Tool',
    coverImage: ribbon,
  },
  {
    company: 'Mistplay',
    title: 'Illustrations',
    coverImage: mistplayIllustrations,
  },
  {
    company: 'Avantis',
    title: 'Trading Dashboard',
    coverImage: avantis,
  },
  {
    company: 'Uniswap',
    title: 'User Research',
    coverImage: uniswap,
  },
] as const
