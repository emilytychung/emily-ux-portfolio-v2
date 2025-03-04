import Image from 'next/image'
import Container from '@/components/Container'
import { SummaryItem } from '@/types/project'

interface SummaryProps {
  summary?: SummaryItem[]
}

export default function Summary({ summary = [] }: SummaryProps) {
  if (!summary.length) return null

  return (
    <Container as="section" className="flex flex-col p-0 sm:p-0 md:p-0">
      {summary.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-12 px-4 py-8 sm:p-16 md:flex-row md:gap-[84px] md:px-[84px] md:py-20 ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="md:max-w-[501px] md:flex-1">
            <h3 className="text-heading-sm mb-2 text-slate-900">
              {item.subheader}
            </h3>
            <p className="font-inter text-sm leading-[160%] tracking-tight text-slate-500 sm:text-lg">
              {item.description}
            </p>
          </div>
          {item.imgFile && (
            <Image
              src={item.imgFile}
              alt={item.subheader || ''}
              priority={index === 0}
            />
          )}
        </div>
      ))}
    </Container>
  )
}
