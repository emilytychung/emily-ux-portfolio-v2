import Image, { StaticImageData } from 'next/image'
import { PlatformKey } from '@/types/platforms'
import Tag from '@/components/Tag'
import cn from '@/lib/utils/cn'
import Container from '@/components/Container'

interface JumbotronProps {
  company: string
  title: string
  description: string
  tags: PlatformKey[]
  roles: string[]
  team: string[]
  timeline: string
  companyLogoIcon: StaticImageData
  className?: string
}
interface KeyHighlightsProps {
  header: string
  content: string | string[]
}

const ROLE_HEADER = 'ROLE & RESPONSIBILITIES'
const TEAM_HEADER = 'TEAM'
const TIMELINE_HEADER = 'TIMELINE'

const KeyHighlights = ({ header, content }: KeyHighlightsProps) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-label-md mb-0 text-blue-primary">{header}</h2>
    <div className="font-inter text-[16px] leading-[160%] text-slate-900 sm:text-base">
      {header === TIMELINE_HEADER
        ? content
        : (content as string[]).map((item, index) => <p key={index}>{item}</p>)}
    </div>
  </div>
)

export default function Jumbotron({
  company,
  title,
  description,
  tags,
  roles,
  team,
  timeline,
  companyLogoIcon,
  className,
}: JumbotronProps) {
  const keyHighlights: Array<KeyHighlightsProps> = [
    { header: ROLE_HEADER, content: roles },
    { header: TEAM_HEADER, content: team },
    { header: TIMELINE_HEADER, content: timeline },
  ]

  return (
    <Container
      as="section"
      className={cn(
        'flex flex-col items-center px-4 pb-0 pt-32',
        'sm:px-16 md:px-32 lg:px-32',
        className
      )}
    >
      <div className="flex flex-col items-center gap-10">
        <Image src={companyLogoIcon} alt={`${company} Logo`} priority />

        {/* Title, description, and tags */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-heading-large text-center text-slate-700">
            {title}
          </h1>
          <p className="whitespace-pre-line text-center font-inter text-[16px] leading-[140%] text-slate-600 sm:text-[22px] md:text-[28px]">
            {description}
          </p>

          {/* Platform Tags */}
          <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => (
              <Tag key={tag} platform={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="mb-8 mt-20 w-screen border-t border-slate-200 sm:mb-16 sm:mt-20 md:mb-[60px] md:w-full"></div>

      {/* Info sections container */}
      <div className="flex w-full flex-col flex-wrap justify-between gap-8 pb-10 sm:flex-row sm:pb-4">
        {keyHighlights.map(({ header, content }) => (
          <KeyHighlights key={header} header={header} content={content} />
        ))}
      </div>
    </Container>
  )
}
