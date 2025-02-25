import { PlatformKey } from './platforms'

export type CaseStudy = {
  company: string
  title: string
  description: string
  tags: PlatformKey[]
  coverImage: string
}

export const FEATURED: CaseStudy[] = [
  {
    company: 'TD Canada Trust',
    title: 'Global Transfers Case Study',
    description: 'Marketplace to shop rates and send money',
    tags: ['desktop', 'ios', 'android'],
    coverImage: '/images/case-studies/td-global-transfers/cover.png',
  },
  {
    company: 'Solana',
    title: 'Name Service Case Study',
    description: 'E-commerce platform to register domains on Solana',
    tags: ['desktop'],
    coverImage: '/images/case-studies/solana/cover.png',
  },
  {
    company: 'Mistplay',
    title: 'Refer Friends Case Study',
    description: 'Boosting engagement on an advertising gaming app',
    tags: ['android'],
    coverImage: '/images/case-studies/mistplay-refer-friends/cover.png',
  },
] as const

export type CaseStudyData = (typeof FEATURED)[number]
