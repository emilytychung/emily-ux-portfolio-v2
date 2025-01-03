export const JUMBOTRON_CONTENT = {
  greeting: "Hi, I'm Emily",
  role: 'Product designer',
  tagline: {
    part1: 'crafting simplicity from complexity',
    connector: 'in',
    specialties: [
      {
        text: 'Banking',
        emoji: '🏦',
      },
      {
        text: 'Gaming',
        emoji: '👾',
      },
      {
        text: 'SaaS',
        emoji: '🧑‍💻',
      },
      {
        text: 'Web3',
        emoji: '🔐',
      },
    ],
    ending: '& more.',
  },
  projectsLabel: '50+ PROJECTS INCLUDING',
} as const

type LogoData = {
  name: string
  src: string
  alt: string
  width: number
  height: number
}

export const LOGO_DATA: LogoData[] = [
  {
    name: 'TD',
    src: '/images/logo/td.svg',
    alt: 'TD Canada Trust Logo',
    width: 145,
    height: 26,
  },
  {
    name: 'Solana',
    src: '/images/logo/solana.svg',
    alt: 'Solana Logo',
    width: 120,
    height: 30,
  },
  {
    name: 'Uniswap',
    src: '/images/logo/uniswap.svg',
    alt: 'Uniswap Logo',
    width: 115,
    height: 24,
  },
  {
    name: 'Pizza Pizza',
    src: '/images/logo/pizza-pizza.svg',
    alt: 'Pizza Pizza Logo',
    width: 118,
    height: 19,
  },
] as const
