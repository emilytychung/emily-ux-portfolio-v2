// components/Container.tsx
import { type ReactNode } from 'react'
import cn from '@/lib/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: keyof HTMLElementTagNameMap
}

export default function Container({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-2 pb-8', // Base styles (mobile)
        'sm:px-8 sm:pb-16', // Tablet (481px+)
        'md:max-w-[1440px] md:px-16', // Desktop & Ultrawide (769px+)
        className
      )}
    >
      {children}
    </Component>
  )
}
