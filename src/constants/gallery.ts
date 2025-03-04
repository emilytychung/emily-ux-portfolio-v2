import tdInterac from '@images/projects/td-interac/cover.png'
import headquarters from '@images/projects/headquarters/cover.png'
import canvass from '@images/projects/canvass/cover.png'
import mistplayDesignSystem from '@images/projects/mistplay-design-system/cover.png'
import mistplayIllustrations from '@images/projects/mistplay-illustrations/cover.png'
import ribbon from '@images/projects/ribbon/cover.png'
import avantis from '@images/projects/avantis/cover.png'
import uniswap from '@images/projects/uniswap/cover.png'
import { ProjectBase, SimpleProjectBase } from '@/types/project'

export const GALLERY: ProjectBase[] = [
  {
    company: 'TD Canada Trust',
    title: 'Interac e-Transfer',
    cardDescription:
      'Send money across Canada for both personal and business cusotmers',
    tags: ['ios', 'android'],
    coverImage: tdInterac,
  },
  {
    company: 'Headquarters',
    title: 'Payroll system',
    cardDescription:
      'Allowing companies to transfer and manage payroll directly',
    tags: ['desktop'],
    coverImage: headquarters,
  },
  {
    company: 'Canvass AI',
    title: 'ML & AI Platform',
    cardDescription:
      'Allowing manufacturing companies to easily implement into their process',
    tags: ['desktop'],
    coverImage: canvass,
  },
  {
    company: 'Mistplay',
    title: 'Design system',
    cardDescription:
      'Change from light mode to dark mode with a flip of a switch',
    tags: ['android'],
    coverImage: mistplayDesignSystem,
  },
] as const

export const SIMPLE_GALLERY: SimpleProjectBase[] = [
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
