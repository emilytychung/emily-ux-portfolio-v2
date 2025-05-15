import { ReactNode } from 'react'
import cn from '@/lib/utils/cn'

type ProcessStepHeaderProps = {
  children: ReactNode
  className?: string
  id?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function ProcessStepHeader({
  children,
  className,
  as: Component = 'h3',
}: ProcessStepHeaderProps) {
  return (
    <Component
      className={cn(
        'font-geist text-sm font-medium leading-[16px] tracking-wide',
        'h-auto w-auto text-center uppercase text-blue-primary',
        'sm:text-base sm:leading-[23px]',
        className
      )}
    >
      {children}
    </Component>
  )
}
