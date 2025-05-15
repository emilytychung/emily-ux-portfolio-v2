import React from 'react'
import { HighlightSection } from '@/types/project'
import Container from '@/components/Container'
import ProcessStepHeader from '@/components/ProjectDetail/ProcessStepHeader'
import TitleHeader from '@/components/ProjectDetail/TitleHeader'
import cn from '@/lib/utils/cn'

interface OutcomesProps {
  outcomes: HighlightSection[]
}

export function IconWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const gridLines = [
    { key: 'left', className: 'left-[7px] sm:left-3 top-0 bottom-0 border-l' },
    {
      key: 'right',
      className: 'right-[7px] sm:right-3 top-0 bottom-0 border-l',
    },
    { key: 'top', className: 'top-[7px] sm:top-3 left-0 right-0 border-t' },
    {
      key: 'bottom',
      className: 'bottom-[7px] sm:bottom-3 left-0 right-0 border-t',
    },
  ]

  const baseLineStyles =
    'absolute border-[#B3B3B3] opacity-20 sm:border-[1.6px] border'

  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-xl border border-[#D0D5DD] bg-white',
        'h-10 w-10 sm:h-16 sm:w-16',
        className
      )}
      aria-hidden="true" // The icon wrapper is decorative
    >
      {gridLines.map((line) => (
        <div
          key={line.key}
          className={cn(line.className, baseLineStyles)}
          aria-hidden="true"
        />
      ))}
      <div className="z-10">{children}</div>
    </div>
  )
}

export default function Outcomes({ outcomes }: OutcomesProps) {
  return (
    <section aria-labelledby="outcomes-heading" className="py-12 sm:py-16">
      <Container className="px-4 pb-8 sm:px-8 sm:pb-12 md:px-16 md:pb-16">
        <ProcessStepHeader>OUTCOMES</ProcessStepHeader>
        {outcomes.map(({ title, highlights }) => (
          <React.Fragment key={title}>
            <TitleHeader className="my-6 mb-10">{title}</TitleHeader>
            <div
              className={cn(
                'grid gap-4',
                'grid-cols-1 sm:grid-cols-1 md:grid-cols-3',
                'mb-16'
              )}
            >
              {highlights.map(({ subheader, description, IconComponent }) => {
                return (
                  <div
                    key={subheader}
                    className={cn(
                      'flex flex-col rounded-[48px] border border-[#E3E8EF]',
                      'shadow-[0px_4px_4px_rgba(0,0,0,0.04),0px_4px_28px_rgba(17,25,38,0.05)]',
                      'bg-[#FCFCFD] p-12'
                    )}
                  >
                    <div className="flex flex-col gap-6 sm:flex-row md:flex-col">
                      {IconComponent && (
                        <IconWrapper>
                          <IconComponent className="h-5 w-5 text-[#0A84FF] sm:h-8 sm:w-8" />
                        </IconWrapper>
                      )}
                      <div className="flex flex-col gap-2">
                        <h3 className="font-hauora text-lg font-bold leading-[160%] tracking-tight text-[#111926] sm:text-xl md:text-xl">
                          {subheader}
                        </h3>
                        <p className="font-inter text-base font-normal leading-[160%] tracking-tight text-[#697586] sm:text-lg md:text-lg">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </React.Fragment>
        ))}
      </Container>
    </section>
  )
}
