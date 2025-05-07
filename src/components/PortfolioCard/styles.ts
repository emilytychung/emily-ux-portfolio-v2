import { PortfolioSection } from '.'

export const textStyles: Record<
  PortfolioSection,
  {
    company: string
    title: string
    description: string
    tagSize: 'xs' | 's'
  }
> = {
  featured: {
    company: 'sm:text-[24px]',
    title: 'sm:text-[42px]',
    description: 'sm:text-[24px]',
    tagSize: 's',
  },
  gallery: {
    company: 'sm:text-[20px]',
    title: 'sm:text-[32px]',
    description: 'sm:text-[20px]',
    tagSize: 'xs',
  },
}
