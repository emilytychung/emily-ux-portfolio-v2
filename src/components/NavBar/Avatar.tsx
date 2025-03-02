import Link from 'next/link'
import Image from 'next/image'
import cn from '@/lib/utils/cn'
import avatar from '@images/avatar.svg'

interface AvatarProps {
  isDesktop?: boolean
}

export default function Avatar({ isDesktop = false }: AvatarProps) {
  return (
    <Link
      href="#home"
      className="flex items-center gap-3"
      aria-label="Go to homepage"
    >
      <div
        className={cn(
          'relative h-[48px] w-[48px]',
          isDesktop && 'h-[56px] w-[56px]'
        )}
      >
        <Image src={avatar} alt="Emily's avatar" />
      </div>
      {isDesktop && (
        <span className="text-lg font-semibold text-slate-700">Emily</span>
      )}
    </Link>
  )
}
