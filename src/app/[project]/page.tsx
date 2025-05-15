import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ProtectedRoute from '@/components/ProtectedRoute'
import SEO_METADATA from '@/constants/seo-metadata'
import PROJECT_PARAM_DATA_MAP from '@/constants/project-details'
import Jumbotron from '@/components/ProjectDetail/Jumbotron'
import CoverPhoto from '@/components/ProjectDetail/CoverPhoto'
import Summary from '@/components/ProjectDetail/Summary'
import ProjectHighlightColumn from '@/components/ProjectDetail/ProjectHighlightColumn'
import FlatlayPhoto from '@/components/ProjectDetail/FlatlayPhoto'
import IconCardGrid from '@/components/ProjectDetail/IconCardGrid'
import SeeOtherProjects from '@/components/ProjectDetail/SeeOtherProjects'
import Footer from '@/components/Footer'

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
    designProcess,
    outcomes,
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
        <ProjectHighlightColumn
          sectionTitle="EXPORE"
          title={designProcess.explore.title}
          highlights={designProcess.explore.highlights}
          media={{
            type: 'image',
            src: designProcess.explore.videoFile,
            alt: designProcess.explore.title,
          }}
        />
        <IconCardGrid sectionTitle="DEFINE" sections={designProcess.define} />
        <IconCardGrid sectionTitle="OUTCOMES" sections={outcomes} />
        <FlatlayPhoto title={title} flatlayImages={flatlayImages} />
        <SeeOtherProjects currentProjectTitle={title} />
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
