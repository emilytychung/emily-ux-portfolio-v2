import { ReactNode } from 'react'
import cn from '@/lib/utils/cn'

type TitleHeaderProps = {
  children: ReactNode
  className?: string
  id?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  centered?: boolean
}

export default function TitleHeader({
  children,
  className,
  as: Component = 'h4',
}: TitleHeaderProps) {
  return (
    <Component
      className={cn(
        'font-hauora text-xl font-semibold leading-[150%] tracking-tight',
        'w-full text-center text-slate-900',
        'sm:text-3xl',
        'md:text-3xl',
        'lg:text-3xl',
        className
      )}
    >
      {children}
    </Component>
  )
}
