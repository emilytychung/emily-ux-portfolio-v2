// src/components/ui/Polaroid.tsx
import Image from 'next/image'
import { type StaticImageData } from 'next/image'
import cn from '@/lib/utils/cn'

export interface PolaroidProps {
  className?: string
  imgFile: StaticImageData
  alt: string
  title: string
}

export default function Polaroid({
  className,
  imgFile,
  alt,
  title,
}: PolaroidProps) {
  return (
    <div
      className={cn(
        // Base styles
        'flex flex-col items-start gap-6 p-6 pb-8',
        'relative w-full max-w-[468px]',
        'rounded-2xl border border-black/5 bg-slate-50',
        'shadow-[0_2px_8px_rgba(0,0,0,0.05),0_12px_28px_rgba(0,0,0,0.04),inset_0_-4px_4px_rgba(0,0,0,0.06)]',
        className
      )}
    >
      <div className="relative aspect-[420/248] w-full overflow-hidden rounded-lg shadow-[inset_0_1px_7px_rgba(0,0,0,0.15)]">
        <Image
          src={imgFile}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <h3 className="flex w-full flex-1 items-center justify-center text-center font-hauora text-xl leading-[150%] tracking-tight text-slate-700">
        {title}
      </h3>
    </div>
  )
}
