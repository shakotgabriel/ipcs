import { projects } from '@/lib/data/projects'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProjectCard } from '@/components/cards/project-card'
import { ActionLink } from '@/components/ui/action-button'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="bg-secondary py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work in Practice"
          title="Making a Difference Through Our Projects"
          description="IPCS translates its vision into action through practical projects that respond to community priorities."
          align="center"
          className="mx-auto"
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <ActionLink href="/projects" variant="primary" size="lg">
            View All Projects
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
