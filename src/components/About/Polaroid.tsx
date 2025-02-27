import { type CSSProperties } from 'react'
import Image from 'next/image'
import { type StaticImageData } from 'next/image'
import cn from '@/lib/utils/cn'

export interface PolaroidProps {
  className?: string
  imgFile: StaticImageData
  alt: string
  title: string
  rotation?: number
  zIndex?: number
  style?: CSSProperties
  onClick?: () => void
}

export default function Polaroid({
  className,
  imgFile,
  alt,
  title,
  rotation = 0,
  zIndex = 10,
  style,
  onClick,
}: PolaroidProps) {
  return (
    <div
      className={cn(
        // Base styles
        'flex flex-col items-start gap-4 rounded-xl border border-black/5 bg-slate-50 p-4 pb-6',
        'relative w-full max-w-[344px]',
        'shadow-[0_1.5px_6px_rgba(0,0,0,0.05),0_8px_21px_rgba(0,0,0,0.04),inset_0_-3px_3px_rgba(0,0,0,0.06)]',
        // Responsive adjustments
        'sm:max-w-[468px] sm:gap-6 sm:rounded-2xl sm:p-6 sm:pb-8',
        'sm:shadow-[0_2px_8px_rgba(0,0,0,0.05),0_12px_28px_rgba(0,0,0,0.04),inset_0_-4px_4px_rgba(0,0,0,0.06)]',
        // Animations and interactions
        'will-change-transform',
        'transition-all duration-300 ease-out',
        'hover:z-50 hover:translate-y-[-15px]',
        'focus:z-50 focus:translate-y-[-15px] focus:outline-none focus:ring-2 focus:ring-blue-primary/50',
        // Interactive cursor if onClick provided
        onClick && 'cursor-pointer',
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex,
        ...style,
      }}
      tabIndex={0}
      role="figure"
      aria-label={`Photo of ${title}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <div className="relative aspect-[309/182] w-full overflow-hidden rounded-md shadow-[inset_0_0.75px_5px_rgba(0,0,0,0.15)] sm:aspect-[420/248] sm:rounded-lg sm:shadow-[inset_0_1px_7px_rgba(0,0,0,0.15)]">
        <Image
          src={imgFile}
          alt={alt}
          fill
          sizes="(max-width: 480px) 309px, (max-width: 899px) 420px, 420px"
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          priority
        />
      </div>
      <h3 className="font-hanziPen flex w-full flex-1 items-center justify-center text-center text-[20px] leading-[150%] tracking-tight text-slate-700 sm:text-[27px]">
        {title}
      </h3>
    </div>
  )
}
