import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ProtectedRoute from '@/components/ProtectedRoute'
import SEO_METADATA from '@/constants/seo-metadata'
import PROJECT_PARAM_DATA_MAP from '@/constants/project-details'

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

  return (
    <ProtectedRoute>
      <main></main>
    </ProtectedRoute>
  )
}
