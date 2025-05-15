import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import cn from '@/lib/utils/cn'
import Container from '@/components/Container'
import { HighlightItem } from '@/types/project'

interface ProjectHighlightColumnProps {
  sectionTitle: string
  title: string
  highlights?: HighlightItem[]
  description?: string
  media?: {
    type: 'image' | 'video'
    src: StaticImageData
    alt?: string
  }
  className?: string
}

export default function ProjectHighlightColumn({
  sectionTitle,
  title,
  highlights,
  description,
  media,
  className,
}: ProjectHighlightColumnProps) {
  // Generate unique IDs for ARIA relationships
  const sectionId = React.useId()
  const titleId = React.useId()

  return (
    <Container
      as="div"
      aria-labelledby={titleId}
      className={cn(
        'flex flex-col md:flex-row md:items-center',
        'md:gap-16 md:px-20 md:py-32',
        'sm:gap-16 sm:px-16 sm:py-16',
        'gap-16 px-4 py-16',
        className
      )}
    >
      {/* Left content column */}
      <div
        className={cn(
          'md:w-[521px] md:flex-grow',
          'sm:w-full',
          'flex w-full flex-col gap-6'
        )}
      >
        <span className="text-design-process-header" id={sectionId}>
          {sectionTitle}
        </span>
        <h2 className="text-title-header" id={titleId}>
          {title}
        </h2>
        {description && <p className="text-description">{description}</p>}
        {highlights && (
          <div
            className="flex flex-col gap-8 md:gap-6"
            role="list"
            aria-labelledby={titleId}
          >
            {highlights.map((highlight) => (
              <div
                key={highlight.subheader}
                className="flex flex-col gap-1"
                role="listitem"
              >
                <h3 className="text-subheader">{highlight.subheader}</h3>
                <p className="text-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right media column */}
      {media && (
        <div
          className={cn(
            'relative',
            'md:h-[508px] md:w-[687px]',
            'sm:h-[473.25px]',
            'h-[253.63px] w-full',
            'bg-white'
          )}
        >
          {/* Image/Video container with frame */}
          <div
            className={cn(
              'absolute inset-0 overflow-hidden',
              // Desktop border styles
              'md:rounded-[20.25px] md:border-[6px]',
              'md:shadow-[0px_0px_0px_0.843666px_rgba(168,168,168,0.25),0px_3.37466px_23.6226px_rgba(50,62,73,0.09)]',
              // Tablet border styles
              'sm:rounded-[18.86px] sm:border-[5.59px]',
              'sm:shadow-[0px_0px_0px_0.786px_rgba(168,168,168,0.25),0px_3.14px_22px_rgba(50,62,73,0.09)]',
              // Mobile border styles
              'rounded-[10.11px] border-[3px]',
              'shadow-[0px_0px_0px_0.42px_rgba(168,168,168,0.25),0px_1.68px_11.79px_rgba(50,62,73,0.09)]',
              'border-solid border-white'
            )}
          >
            {media.type === 'image' && (
              <div className="relative h-full w-full">
                <Image
                  src={media.src}
                  alt={media.alt || `Image illustrating ${title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={cn(
                    'md:rounded-[14px]',
                    'sm:rounded-[12px]',
                    'rounded-[7px]'
                  )}
                />
              </div>
            )}
            {media.type === 'video' && (
              <div className="flex h-full w-full items-center justify-center bg-[#F3F3F8]">
                <span
                  className={cn(
                    'font-inter font-bold text-black',
                    'md:text-xl md:leading-[140%]',
                    'sm:text-lg',
                    'text-[10px]'
                  )}
                  aria-label="Video content available"
                >
                  Video
                </span>
              </div>
            )}
          </div>

          {/* Outer border frame */}
          <div
            className={cn(
              'pointer-events-none absolute inset-0',
              'md:rounded-[20px] md:border',
              'sm:rounded-[18.63px] sm:border-[0.93px]',
              'rounded-[9.99px] border-[0.5px]',
              'border-solid border-[#EEF2F6]'
            )}
            aria-hidden="true"
          />
        </div>
      )}
    </Container>
  )
}
