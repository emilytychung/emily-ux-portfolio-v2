import cn from '@/lib/utils/cn'
import Image from 'next/image'

export interface TestimonialProps {
  imageUrl: string
  name: string
  title: string
  testimonial: string
}

export default function Testimonial({
  imageUrl,
  name,
  title,
  testimonial,
}: TestimonialProps) {
  return (
    <article
      className={cn(
        // Base styles (mobile)
        'flex w-full flex-col items-start justify-center gap-4 self-stretch p-6',
        'rounded-[32px] border border-[#E3E8EF] bg-[#FCFCFD]',
        'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_4px_28px_0px_rgba(17,25,38,0.05)]',
        // Tablet
        'sm:gap-6 sm:rounded-[48px] sm:p-12',
        // Desktop & Ultrawide
        'md:max-w-[648px]'
      )}
    >
      <div
        className={cn(
          'relative',
          'sm:w-p80 h-[56px] w-[56px] sm:h-[80px] sm:w-[80px]',
          'overflow-hidden rounded-full',
          'border border-[#E3E8EF] border-opacity-[0.56] sm:border-opacity-80',
          'shadow-[1.12px_2.24px_6.16px_0px_rgba(0,0,0,0.12)]',
          'sm:shadow-[1.6px_3.2px_8.8px_0px_rgba(0,0,0,0.12)]'
        )}
      >
        <Image
          src={imageUrl}
          alt={`Portrait of ${name}`}
          fill
          sizes="(max-width: 768px) 56px, 80px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h3
          className={cn(
            'font-inter font-semibold',
            'text-sm leading-[130%] text-[#202939]',
            'sm:text-lg'
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            'font-inter font-medium',
            'text-sm leading-[130%] text-[#697586]',
            'sm:text-lg'
          )}
        >
          {title}
        </p>
      </div>
      <p
        className={cn(
          'font-inter font-normal',
          'text-sm leading-[140%] text-[#202939]',
          'sm:text-lg'
        )}
      >
        {testimonial}
      </p>
    </article>
  )
}
