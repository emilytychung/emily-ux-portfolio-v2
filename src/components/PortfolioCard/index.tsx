import cn from '@/lib/utils/cn'
import { type BaseCaseStudy } from '@/constants/featured'
import { getPlatformDisplay } from '@/constants/platforms'
import { textStyles } from './styles'

export type PortfolioSection = 'featured' | 'gallery'

interface PortfolioCardProps extends BaseCaseStudy {
  className?: string
  section: PortfolioSection
}

export default function PortfolioCard({
  company,
  title,
  description,
  tags,
  className,
  section,
}: PortfolioCardProps) {
  const typography = textStyles[section]

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
      <div className="flex h-full flex-col gap-8 overflow-hidden rounded-[32px] border border-slate-100 bg-gradient-to-tr from-[#f8f8f8] to-slate-50 p-5 px-6 py-8 sm:gap-16 sm:p-14 md:flex-row md:gap-20 md:py-20">
        {/* Left Column */}
        <div className="flex w-full flex-col justify-between md:w-[420px]">
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
                'whitespace-pre-line font-hauora text-[24px] font-semibold text-slate-700',
                typography.title
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                'whitespace-pre-line font-inter text-[13px] text-slate-600',
                typography.description
              )}
            >
              {description}
            </p>
          </div>
          <div
            className="mt-6 flex flex-wrap gap-3 sm:mt-8 md:mt-0"
            role="list"
            aria-label="Platforms"
          >
            {tags.map((tag) => (
              <div
                key={tag}
                role="listitem"
                className="flex items-center rounded-button border-2 border-blue-primary px-3 py-0.5"
              >
                <span
                  className={cn(
                    'font-geist text-[11px] text-blue-primary',
                    typography.tags
                  )}
                >
                  {getPlatformDisplay(tag)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Placeholder */}
        <div className="min-h-[400px] flex-1 rounded-[20px] bg-slate-100">
          {/* Image layout component will go here */}
        </div>
      </div>
    </article>
  )
}
