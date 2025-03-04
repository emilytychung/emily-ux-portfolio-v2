import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Container from '@/components/Container'

interface CoverPhotoProps {
  coverImage: StaticImageData
  alt: string
}

export default function CoverPhoto({ coverImage, alt }: CoverPhotoProps) {
  return (
    <Container className="px-4 sm:px-8 sm:pb-16 md:px-16 md:pb-20">
      <div className="w-full rounded-3xl border border-slate-200 bg-white p-2.5 shadow-md sm:rounded-[48px] sm:p-5">
        <div className="flex w-full items-center justify-center rounded-2xl border border-slate-100 bg-gradient-to-br from-[#F9F9F9] to-[#F9FAFB] pt-[20px] sm:rounded-[32px] sm:pt-10 md:pt-14">
          <Image src={coverImage} alt={alt} priority />
        </div>
      </div>
    </Container>
  )
}
