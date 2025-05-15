'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Breakpoint, FlatlayImages } from '@/types/project'

interface FlatlayPhotoProps {
  title: string
  flatlayImages: FlatlayImages
}

export default function FlatlayPhoto({
  title,
  flatlayImages,
}: FlatlayPhotoProps) {
  const [viewportSize, setViewportSize] = useState<Breakpoint>('desktop')

  useEffect(() => {
    const updateViewportSize = () => {
      if (window.innerWidth >= 900) {
        setViewportSize('desktop')
      } else if (window.innerWidth >= 481) {
        setViewportSize('tablet')
      } else {
        setViewportSize('mobile')
      }
    }

    // Set initial size
    updateViewportSize()

    window.addEventListener('resize', updateViewportSize)
    return () => {
      window.removeEventListener('resize', updateViewportSize)
    }
  }, [])

  const imageToShow =
    viewportSize === 'mobile' && flatlayImages.mobile
      ? flatlayImages.mobile
      : viewportSize === 'tablet' && flatlayImages.tablet
        ? flatlayImages.tablet
        : flatlayImages.desktop

  return (
    <section className="relative mt-8 h-[920px] sm:mt-4 md:mt-0">
      <Image
        src={imageToShow}
        alt={`${title} project flatlay design`}
        fill
        className="object-cover"
      />
    </section>
  )
}
