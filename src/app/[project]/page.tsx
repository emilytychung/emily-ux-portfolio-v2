import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ProtectedRoute from '@/components/ProtectedRoute'
import SEO_METADATA from '@/constants/seo-metadata'
import PROJECT_PARAM_DATA_MAP from '@/constants/project-details'
import Summary from '@/components/ProjectDetail/Summary'
import Jumbotron from '@/components/ProjectDetail/Jumbotron'

export async function generateMetadata({
  params,
}: {
  params: { project: string }
}): Promise<Metadata> {
  const projectData = PROJECT_PARAM_DATA_MAP[params.project]

  return {
    title: `${SEO_METADATA.title} | ${projectData.company} | ${projectData.title}`,
    description: `${SEO_METADATA.description}. This is my project on ${projectData.cardDescription}. ${projectData.description}`,
  }
}

export function generateStaticParams() {
  return Object.keys(PROJECT_PARAM_DATA_MAP).map((project) => ({ project }))
}

export default function ProjectPage({
  params,
}: {
  params: { project: string }
}) {
  const projectData = PROJECT_PARAM_DATA_MAP[params.project]

  if (!projectData) {
    notFound()
  }

  const {
    company,
    title,
    description,
    tags,
    roles,
    team,
    timeline,
    companyLogoIcon,
  } = projectData

  return (
    <ProtectedRoute>
      <main>
        <Jumbotron
          company={company}
          title={title}
          description={description}
          tags={tags}
          roles={roles}
          team={team}
          timeline={timeline}
          companyLogoIcon={companyLogoIcon}
        />
        <Summary title={title} description={description} tags={tags} />
      </main>
    </ProtectedRoute>
  )
}
