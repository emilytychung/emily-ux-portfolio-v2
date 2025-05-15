import React from 'react'
import cn from '@/lib/utils/cn'
import { HighlightItem } from '@/types/project'
import Container from '@/components/Container'
import ProcessStepHeader from '@/components/ProjectDetail/ProcessStepHeader'
import TitleHeader from '@/components/ProjectDetail/TitleHeader'
import IconWrapper from './IconWrapper'
import FormattedDescription from './FormattedDescription'

interface GridSection {
  title: string
  highlights: HighlightItem[]
}

interface IconCardGridProps {
  sectionTitle: 'DEFINE' | 'OUTCOMES'
  sections: GridSection[]
  className?: string
}

export default function IconCardGrid({
  sectionTitle,
  sections,
  className,
}: IconCardGridProps) {
  return (
    <Container as="section" className="px-4 pb-8 sm:px-8 sm:pb-12 md:p-16">
      <ProcessStepHeader>{sectionTitle}</ProcessStepHeader>
      <div className="grid gap-16 sm:gap-[96px]">
        {sections.map(({ title, highlights }) => (
          <div key={title}>
            <TitleHeader className="mb-8 md:mb-16">{title}</TitleHeader>
            <div
              className={cn(
                'grid gap-4',
                'grid-cols-1 sm:grid-cols-1 md:grid-cols-3'
                // 'mb-16 md:mb-[96px]'
              )}
            >
              {highlights.map(({ subheader, description, IconComponent }) => (
                <div
                  key={subheader}
                  className={cn(
                    'flex flex-col rounded-[48px] border border-[#E3E8EF]',
                    'shadow-[0px_4px_4px_rgba(0,0,0,0.04),0px_4px_28px_rgba(17,25,38,0.05)]',
                    'bg-[#FCFCFD] p-12'
                  )}
                >
                  <div className="flex flex-col gap-8 sm:flex-row md:flex-col">
                    {IconComponent && (
                      <IconWrapper>
                        <IconComponent className="h-5 w-5 sm:h-8 sm:w-8" />
                      </IconWrapper>
                    )}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-hauora text-lg font-bold !leading-[160%] tracking-tight text-[#111926] sm:text-lg md:text-lg">
                        {subheader}
                      </h3>
                      <FormattedDescription description={description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
