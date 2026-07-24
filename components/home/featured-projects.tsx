import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/data/projects'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProjectCard } from '@/components/cards/project-card'
import { ActionLink } from '@/components/ui/action-button'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Projects"
            title="Making a Difference Through Our Projects"
            description="IPCS translates its vision into action through practical projects that respond to community priorities."
          />
          <ActionLink
            href="/projects"
            variant="outline"
            size="md"
            className="shrink-0"
          >
            View All Projects
            <ArrowRight className="size-4" />
          </ActionLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
