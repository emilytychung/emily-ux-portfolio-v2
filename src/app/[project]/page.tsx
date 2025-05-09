import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ProtectedRoute from '@/components/ProtectedRoute'
import SEO_METADATA from '@/constants/seo-metadata'
import PROJECT_PARAM_DATA_MAP from '@/constants/project-details'
import Jumbotron from '@/components/ProjectDetail/Jumbotron'
import CoverPhoto from '@/components/ProjectDetail/CoverPhoto'
import Summary from '@/components/ProjectDetail/Summary'
import Footer from '@/components/Footer'
import FlatlayPhoto from '@/components/ProjectDetail/FlatlayPhoto'
import SeeOtherProjects from '@/components/ProjectDetail/SeeOtherProjects'

interface ProjectPageProps {
  params: Promise<{ project: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project } = await params
  const projectData = PROJECT_PARAM_DATA_MAP[project]

  return {
    title: `${SEO_METADATA.title} | ${projectData.company} | ${projectData.title}`,
    description: `${SEO_METADATA.description}. This is my project on ${projectData.cardDescription}. ${projectData.description}`,
  }
}

export function generateStaticParams() {
  return Object.keys(PROJECT_PARAM_DATA_MAP).map((project) => ({ project }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project } = await params
  const projectData = PROJECT_PARAM_DATA_MAP[project]

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
    coverImage,
    summary,
    flatlayImages,
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
        <CoverPhoto coverImage={coverImage} alt={description} />
        <Summary summary={summary} />
        <FlatlayPhoto title={title} flatlayImages={flatlayImages} />
        <SeeOtherProjects currentProjectTitle={title} />
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
