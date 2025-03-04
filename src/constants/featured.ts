import { ProjectBase } from '@/types/project'
import TD_GLOBAL_TRANSFERS from '@/constants/project-details/td-global-transfers'
import solana from '@images/projects/solana/cover.png'
import mistplayReferFriends from '@images/projects/mistplay-refer-friends/cover.png'

export const FEATURED_BASE: ProjectBase[] = [
  {
    company: TD_GLOBAL_TRANSFERS.company,
    title: TD_GLOBAL_TRANSFERS.title,
    description: TD_GLOBAL_TRANSFERS.cardDescription,
    tags: TD_GLOBAL_TRANSFERS.tags,
    coverImage: TD_GLOBAL_TRANSFERS.coverImage,
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
