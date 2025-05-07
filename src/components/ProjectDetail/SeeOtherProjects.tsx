import React from 'react'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import { DETAIL_SECTION_HEADERS } from '@/constants/sections'
import SimplePortfolioCard from '@/components/PortfolioCard/SimplePortfolioCard'
import { FEATURED_BASE } from '@/constants/featured'

interface SeeOtherProjectsProps {
  currentProjectTitle: string
}

// TODO: decide what projects are in the other projects list, come back after all data stucture is set out
const TEMP_OTHER_PROJECTS = [...FEATURED_BASE]

export default function SeeOtherProjects({
  currentProjectTitle,
}: SeeOtherProjectsProps) {
  const otherProjects = TEMP_OTHER_PROJECTS.filter(
    ({ title }) => title !== currentProjectTitle
  )

  return (
    <Container>
      <SectionHeader sectionHeaderMap={DETAIL_SECTION_HEADERS.seeOther} />
      {otherProjects.map((project) => (
        <SimplePortfolioCard
          key={project.title}
          company={project.company}
          title={project.title}
          coverImage={project.coverImage}
          // tags={project?.tags ? project.tags : undefined}
        />
      ))}
    </Container>
  )
}
