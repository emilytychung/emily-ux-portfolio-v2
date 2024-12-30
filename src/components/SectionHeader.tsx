import { type FC } from 'react'
import cn from '@/lib/utils/cn'

export interface SectionHeaderProps {
  className?: string
  labelText: string
  headingText: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  className,
  labelText,
  headingText,
}) => {
  return (
    <div
      className={cn(
        // Mobile (375px)
        'flex w-full flex-col items-center px-4 py-8',
        // Tablet (768px)
        'sm:py-16',
        // Desktop & Ultrawide (1440px)
        'md:w-full',
        className
      )}
    >
      {/* Label text */}
      <span
        className={cn(
          // Mobile
          'w-full text-center font-geist text-sm uppercase tracking-wide text-blue-primary',
          // Tablet & up
          'sm:text-base sm:leading-9',
          // Desktop & ultrawide
          'md:w-full'
        )}
      >
        {labelText}
      </span>
      {/* Heading */}
      <h2
        className={cn(
          // Mobile
          'mt-0 w-full text-center font-hauora text-xl font-semibold leading-[150%] tracking-tight text-slate-700',
          // Tablet & up
          'sm:text-4xl',
          // Desktop & ultrawide
          'md:w-full'
        )}
      >
        {headingText}
      </h2>
    </div>
  )
}
