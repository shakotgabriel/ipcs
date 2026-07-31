import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeading } from '@/components/ui/section-heading'
import { ActionLink } from '@/components/ui/action-button'
import { ProjectCard } from '@/components/cards/project-card'
import { projects, projectCategories } from '@/lib/data/projects'
import { Target, Heart, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore IPCS South Sudan projects in child protection, peacebuilding, civil society strengthening, and livelihood development.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        description="Discover how IPCS is making a difference across South Sudan through our diverse portfolio of projects."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Projects Across South Sudan"
            description="From child protection to capacity building, our projects address critical needs and strengthen communities."
            className="text-center"
          />

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              All Projects
            </Link>
            {projectCategories.map((category) => (
              <Link
                key={category}
                href={`/projects?category=${category.toLowerCase().replace(/ /g, '-')}`}
                className="group inline-flex items-center gap-2 rounded-full border-2 border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted hover:shadow-md"
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Target className="size-8" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                Focused Impact
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Each project targets specific community needs with measurable objectives and clear outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Heart className="size-8" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                Community-Led
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We work closely with local communities, leaders, and partners to ensure sustainable, locally-owned solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Globe className="size-8" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                National Reach
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our projects span multiple states, bringing support and capacity building to communities across South Sudan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-navy py-20 md:py-28 text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Support Our Work
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90 text-lg">
            Your support helps us continue our vital work in peacebuilding, child protection, and community development across South Sudan.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ActionLink href="/donate" variant="gold" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              Donate Now
            </ActionLink>
            <ActionLink href="/contact" variant="outline-light" size="lg">
              Partner With Us
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  )
}
