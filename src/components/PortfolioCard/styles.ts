import { PortfolioSection } from '.'

export const textStyles: Record<
  PortfolioSection,
  {
    company: string
    title: string
    description: string
    tags: string
  }
> = {
  featured: {
    company: 'sm:text-[24px]',
    title: 'sm:text-[42px]',
    description: 'sm:text-[24px]',
    tags: 'sm:text-[15px]',
  },
  gallery: {
    company: 'sm:text-[20px]',
    title: 'sm:text-[32px]',
    description: 'sm:text-[20px]',
    tags: 'sm:text-[14px]',
  },
}
