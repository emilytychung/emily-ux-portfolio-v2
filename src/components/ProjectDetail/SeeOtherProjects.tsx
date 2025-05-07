import React from 'react'
import Link from 'next/link'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import { DETAIL_SECTION_HEADERS } from '@/constants/sections'
import SimplePortfolioCard from '@/components/PortfolioCard/SimplePortfolioCard'
import { FEATURED_BASE } from '@/constants/featured'
import { GALLERY } from '@/constants/gallery'

interface SeeOtherProjectsProps {
  currentProjectTitle: string
}

// TODO: decide what projects are in the other projects list, come back after all data structure is set out
const TEMP_OTHER_PROJECTS = [...FEATURED_BASE, ...GALLERY]

export default function SeeOtherProjects({
  currentProjectTitle,
}: SeeOtherProjectsProps) {
  const otherProjects = TEMP_OTHER_PROJECTS.filter(
    ({ title }) => title !== currentProjectTitle
  )

  return (
    <Container className="pb-16 pt-8 sm:pb-24 sm:pt-16">
      <SectionHeader sectionHeaderMap={DETAIL_SECTION_HEADERS.seeOther} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {otherProjects.map((project) => (
          // TODO: change out link for slug when all project details confirmed
          <Link
            key={project.title}
            href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="block h-full"
          >
            <SimplePortfolioCard
              company={project.company}
              title={project.title}
              coverImage={project.coverImage}
              tags={project?.tags ? project.tags : undefined}
            />
          </Link>
        ))}
      </div>
    </Container>
  )
}
