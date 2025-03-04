import Image from 'next/image'
import cn from '@/lib/utils/cn'
import { JUMBOTRON_CONTENT, LOGO_DATA } from '@/constants/jumbotron'
import Container from '@/components/Container'

export default function Jumbotron() {
  const renderTagline = () => (
    <>
      <span className="text-blue-primary">{JUMBOTRON_CONTENT.role}</span>{' '}
      <span className="text-slate-700">{JUMBOTRON_CONTENT.tagline.part1}</span>{' '}
      <span className="text-slate-500">
        {JUMBOTRON_CONTENT.tagline.connector}
      </span>{' '}
      {JUMBOTRON_CONTENT.tagline.specialties.map((specialty, index) => (
        <span key={specialty.text}>
          <span>{specialty.emoji}</span>{' '}
          <span className="text-blue-primary">{specialty.text}</span>
          <span className="text-slate-500">
            {index < JUMBOTRON_CONTENT.tagline.specialties.length - 1
              ? ', '
              : ' '}
          </span>
        </span>
      ))}
      <span className="text-slate-500">{JUMBOTRON_CONTENT.tagline.ending}</span>
    </>
  )

  return (
    <Container
      as="section"
      id="home"
      className={cn(
        'px-6 pb-16 pt-[100px]',
        'sm:px-16 sm:pb-16 sm:pt-32',
        'md:p-32'
      )}
    >
      <div
        aria-labelledby="greeting-heading"
        className={cn(
          'mx-auto flex flex-col items-center',
          'gap-4 sm:gap-6',
          'w-full',
          'max-w-[327px] sm:max-w-[640px] md:max-w-[1184px]'
        )}
      >
        <h1 id="greeting-heading" className="text-heading-small text-slate-600">
          {JUMBOTRON_CONTENT.greeting}
        </h1>

        <p className="text-heading-large text-center">{renderTagline()}</p>
      </div>

      <div
        className={cn(
          'mt-16 sm:mt-12',
          'flex flex-col items-center md:flex-row',
          'gap-4 md:gap-0'
        )}
      >
        <p className="border-base-200 text-center font-geist text-sm text-slate-500 md:border-r md:px-8 md:text-left">
          {JUMBOTRON_CONTENT.projectsLabel}
        </p>
        <div
          className={cn(
            'flex flex-wrap items-center justify-center',
            'w-64 sm:w-auto md:w-full'
          )}
        >
          {LOGO_DATA.map((logo, index) => (
            <div
              key={logo.name}
              className={cn(
                'flex items-center justify-center',
                'h-[43.75px] sm:h-14',
                'px-6 md:px-8',
                index !== LOGO_DATA.length - 1 && 'border-slate-200 sm:border-r'
              )}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-5 w-auto object-contain grayscale"
                style={{ maxWidth: 'none' }}
                placeholder="empty"
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
