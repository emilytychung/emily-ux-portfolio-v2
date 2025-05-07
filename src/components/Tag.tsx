import { PlatformKey } from '@/types/platforms'
import cn from '@/lib/utils/cn'

type TagSize = 'xs' | 's' | 'base'

interface TagProps {
  platform: PlatformKey
  size?: TagSize
  className?: string
}

export default function Tag({ platform, size = 'base', className }: TagProps) {
  const sizeVariants: Record<TagSize, string> = {
    xs: cn(
      // Mobile
      'px-[9px] py-[1.5px] border-[1.2px] rounded-[57.3945px] text-[11.25px] leading-[21px]',
      // Tablet
      'sm:px-4 sm:py-0.5 sm:border-2 sm:rounded-button sm:text-[18px] sm:leading-9',
      // Desktop
      'md:px-[12.8px] md:py-[1.6px] md:border-[1.6px] md:rounded-[76.526px] md:text-[14.4px] md:leading-[29px]'
    ),
    s: cn(
      // Mobile
      'px-[9px] py-[1.5px] border-[1.2px] rounded-[57.3945px] text-[11.25px] leading-[21px]',
      // Tablet & Desktop (identical)
      'sm:px-3 sm:py-0.5 sm:border-[1.6px] sm:rounded-[76.526px] sm:text-[15px] sm:leading-7'
    ),
    base: cn(
      // Mobile
      'px-3 py-0.5 border-[1.6px] rounded-[76.526px] text-[15px] leading-7',
      // Tablet
      'sm:px-3 sm:py-0.5 sm:border-[1.6px] sm:rounded-[76.526px] sm:text-[15px] sm:leading-7',
      // Desktop
      'md:px-[15px] md:py-[2.5px] md:border-2 md:rounded-button md:text-[18.75px] md:leading-[35px]'
    ),
  }

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center border-blue-primary',
        sizeVariants[size],
        className
      )}
    >
      <span className="font-geist font-medium uppercase tracking-wide text-blue-primary">
        {platform}
      </span>
    </div>
  )
}
