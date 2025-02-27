import { PlatformKey } from './platforms'
import tdGlobalTransfers from '@images/case-studies/td-global-transfers/cover.png'
import solana from '@images/case-studies/solana/cover.png'
import mistplayReferFriends from '@images/case-studies/mistplay-refer-friends/cover.png'
import { StaticImageData } from 'next/image'

export type CaseStudy = {
  company: string
  title: string
  description: string
  tags: PlatformKey[]
  coverImage: StaticImageData
}

export const FEATURED: CaseStudy[] = [
  {
    company: 'TD Canada Trust',
    title: 'Global Transfers Case Study',
    description: 'Marketplace to shop rates and send money',
    tags: ['desktop', 'ios', 'android'],
    coverImage: tdGlobalTransfers,
  },
  {
    company: 'Solana',
    title: 'Name Service Case Study',
    description: 'E-commerce platform to register domains on Solana',
    tags: ['desktop'],
    coverImage: solana,
  },
  {
    company: 'Mistplay',
    title: 'Refer Friends Case Study',
    description: 'Boosting engagement on an advertising gaming app',
    tags: ['android'],
    coverImage: mistplayReferFriends,
  },
] as const

export type CaseStudyData = (typeof FEATURED)[number]
