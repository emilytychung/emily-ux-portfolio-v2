import Image from 'next/image'
import cn from '@/lib/utils/cn'
import { textStyles } from './styles'
import { SimpleProjectBase } from '@/types/project'
import { PlatformKey } from '@/types/platforms'
import Tag from '@/components/Tag'

interface SimplePortfolioCardProps extends SimpleProjectBase {
  className?: string
  tags?: PlatformKey[]
  size?: 'base' | 's'
}

// Size-specific styles
const cardStyles = {
  base: {
    container: 'rounded-[48px] p-2.5 sm:p-5',
    shadow:
      'shadow-[0px_4px_28px_0px_rgba(17,25,38,0.04),0px_4px_4px_0px_rgba(0,0,0,0.03)]',
    hover:
      'transform-gpu transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_28px_0px_rgba(17,25,38,0.14)] sm:hover:-translate-y-2',
    innerContainer: 'rounded-[32px]',
    contentPadding: 'px-6 py-8 pb-4 sm:p-14 sm:pb-8',
    imagePadding: 'pl-2 sm:pl-5',
    imageRounding: 'rounded-[20px]',
  },
  s: {
    container: 'rounded-[25px] p-[10.5px] md:rounded-[32px] md:p-3.5 lg:p-4',
    shadow:
      'shadow-[0px_2px_14px_0px_rgba(17,25,38,0.04),0px_2px_2px_0px_rgba(0,0,0,0.03)] md:shadow-[0px_3px_20px_0px_rgba(17,25,38,0.04),0px_3px_3px_0px_rgba(0,0,0,0.03)]',
    hover:
      'transform-gpu transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0px_2px_2px_0px_rgba(0,0,0,0.01),0px_2px_14px_0px_rgba(17,25,38,0.14)] md:hover:-translate-y-1 lg:hover:-translate-y-1.5',
    innerContainer: 'rounded-[17px] md:rounded-[22px]',
    contentPadding:
      'px-[30px] py-[30px] pb-[20px] md:px-[35px] md:py-[35px] md:pb-[25px]',
    imagePadding: 'pl-1 md:pl-2',
    imageRounding: 'rounded-[12px] md:rounded-[15px]',
  },
}

export default function SimplePortfolioCard({
  company,
  title,
  coverImage,
  className,
  tags,
  size = 'base',
}: SimplePortfolioCardProps) {
  const typography = textStyles.gallery

  const selectedSize = cardStyles[size]

  return (
    <article
      className={cn(
        'h-full bg-white',
        selectedSize.container,
        selectedSize.shadow,
        selectedSize.hover,
        'border border-slate-200',
        className
      )}
      role="article"
      aria-labelledby={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div
        className={cn(
          'flex flex-col overflow-hidden border border-slate-100 bg-gradient-to-tr from-[#f8f8f8] to-slate-50',
          selectedSize.innerContainer
        )}
      >
        <div
          className={cn(
            'flex w-full flex-col justify-between',
            selectedSize.contentPadding
          )}
        >
          <div
            className={cn(
              'flex flex-col',
              size === 'base' ? 'gap-2 sm:gap-5' : 'gap-[10px] md:gap-3'
            )}
          >
            <h3
              className={cn(
                'font-hauora text-slate-500',
                size === 'base' ? 'text-[13px]' : 'text-[12px] md:text-[13px]',
                typography.company
              )}
              aria-label={`Case study for ${company}`}
            >
              {company}
            </h3>
            <h2
              className={cn(
                'overflow-hidden overflow-ellipsis whitespace-nowrap font-hauora font-semibold text-slate-700',
                size === 'base'
                  ? 'text-[24px]'
                  : 'text-[18px] md:text-[20px] lg:text-[22px]',
                typography.title
              )}
              id={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {title}
            </h2>
            {!!tags && (
              <div
                role="list"
                aria-label="Platforms"
                className="flex gap-[7px] md:gap-[9px]"
              >
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    platform={tag}
                    size={size === 'base' ? typography.tagSize : 's'}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM IMG */}
        <div
          className={cn(
            'relative',
            selectedSize.imagePadding,
            selectedSize.imageRounding
          )}
        >
          <Image
            src={coverImage}
            alt={`Cover image for ${company}`}
            className="h-auto w-full"
          />
        </div>
      </div>
    </article>
  )
}
