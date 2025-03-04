import { PlatformKey } from '@/types/platforms'
import cn from '@/lib/utils/cn'

interface TagProps {
  platform: PlatformKey
  className?: string
}

export default function Tag({ platform, className }: TagProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-button border-[1.6px] border-blue-primary sm:border-2',
        'px-3 py-0.5 font-medium sm:px-[15px] sm:py-[2.5px]',
        className
      )}
    >
      <span className="font-geist text-[15px] uppercase leading-7 tracking-wide text-blue-primary sm:text-[18.75px] sm:leading-[35px]">
        {platform}
      </span>
    </div>
  )
}
