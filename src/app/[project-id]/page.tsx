import ProtectedRoute from '@/components/ProtectedRoute'
// import { getProjects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
// import PlatformTag from '@/components/PlatformTag'

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <ProtectedRoute>
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* <h1 className="text-heading-large mb-12 text-center">Projects</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            // Create slug from title
            const slug = project.title
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '')

            return (
              <Link
                href={`/projects/${slug}`}
                key={index}
                className="block rounded-xl border border-slate-100 bg-white p-6 transition-all duration-200 hover:shadow-md"
              >
                <span className="mb-2 block text-sm text-slate-500">
                  {project.company}
                </span>
                <h2 className="text-heading-small mb-4">{project.title}</h2>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <PlatformTag
                      key={tag}
                      platform={tag}
                      className="px-3 py-0.5 text-xs"
                    />
                  ))}
                </div>

                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <p className="text-body mt-4 text-slate-600">
                  {project.cardDescription}
                </p>
              </Link>
            )
          })}
        </div> */}
      </main>
    </ProtectedRoute>
  )
}
