import cn from '@/lib/utils/cn'
import { SectionHeaderMap } from '@/constants/sections'

export interface SectionHeaderProps {
  className?: string
  sectionHeaderMap: SectionHeaderMap
}
export default function SectionHeader({
  className,
  sectionHeaderMap,
}: SectionHeaderProps) {
  const { labelText, headingText } = sectionHeaderMap
  return (
    <div
      className={cn(
        // Mobile (375px)
        'flex w-full flex-col items-center py-8',
        // Tablet (768px)
        'sm:py-16',
        // Desktop & Ultrawide (1440px)
        'md:w-full',
        className
      )}
    >
      <span
        className={cn(
          // Mobile
          'w-full text-center font-geist text-xs uppercase tracking-wide text-blue-primary',
          // Tablet & up
          'sm:text-base sm:leading-9',
          // Desktop & ultrawide
          'md:w-full'
        )}
      >
        {labelText}
      </span>
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
