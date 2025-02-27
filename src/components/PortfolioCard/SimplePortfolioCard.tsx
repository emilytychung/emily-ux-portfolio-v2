import Image from 'next/image'
import cn from '@/lib/utils/cn'
import { type SimpleCaseStudy } from '@/constants/gallery'
import { textStyles } from './styles'

interface SimplePortfolioCardProps extends SimpleCaseStudy {
  className?: string
}

export default function SimplePortfolioCard({
  company,
  title,
  coverImage,
  className,
}: SimplePortfolioCardProps) {
  const typography = textStyles.gallery

  return (
    <article
      className={cn(
        'h-full rounded-[48px] bg-white p-2.5 sm:p-5',
        'shadow-[0px_4px_28px_0px_rgba(17,25,38,0.04),0px_4px_4px_0px_rgba(0,0,0,0.03)]',
        'border border-slate-200',
        'transition-all duration-300 ease-in hover:-translate-y-1 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_28px_0px_rgba(17,25,38,0.14)] sm:hover:-translate-y-4',
        className
      )}
      role="article"
      aria-labelledby="case-study-title"
    >
      <div className="flex flex-col overflow-hidden rounded-[32px] border border-slate-100 bg-gradient-to-tr from-[#f8f8f8] to-slate-50">
        <div className="flex w-full flex-col justify-between px-6 py-8 pb-4 sm:p-14 sm:pb-8">
          <div className="flex flex-col gap-2 sm:gap-5">
            <h3
              className={cn(
                'font-hauora text-[13px] text-slate-500',
                typography.company
              )}
              aria-label={`Case study for ${company}`}
            >
              {company}
            </h3>
            <h2
              className={cn(
                'overflow-hidden overflow-ellipsis whitespace-nowrap font-hauora text-[24px] font-semibold text-slate-700',
                typography.title
              )}
            >
              {title}
            </h2>
          </div>
        </div>

        {/* BOTTOM IMG */}
        <div className="relative rounded-[20px] pl-2 sm:pl-5">
          <Image src={coverImage} alt={`Cover image for ${company}`} />
        </div>
      </div>
    </article>
  )
}
