import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/ui/page-header'
import { ActionLink } from '@/components/ui/action-button'
import { getProject, getRelatedProjects } from '@/lib/data/projects'
import { ProjectCard } from '@/components/cards/project-card'
import { Check, MapPin, Users, Calendar, ArrowLeft, TrendingUp } from 'lucide-react'

export function generateStaticParams() {
  const { projects } = require('@/lib/data/projects')
  return projects.map((project: { slug: string }) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.shortDescription,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const relatedProjects = getRelatedProjects(slug, project.category)

  return (
    <>
      <PageHeader
        title={project.title}
        description={project.shortDescription}
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                    <MapPin className="size-4" />
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-foreground">
                    <span className="font-medium">{project.status}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-foreground">
                    <span className="font-medium">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Overview</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{project.overview}</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">The Challenge</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{project.problem}</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Our Objectives</h2>
                  <ul className="mt-4 space-y-3">
                    {project.objectives.map((objective, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                      >
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3.5" />
                        </span>
                        <span className="text-sm leading-relaxed text-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Key Activities</h2>
                  <ul className="mt-4 space-y-3">
                    {project.activities.map((activity, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                      >
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Results & Impact</h2>
                  <ul className="mt-4 space-y-3">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                      >
                        <TrendingUp className="mt-0.5 size-5 shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="size-5" />
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Target Group
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.targetGroup}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Partners
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.partners.map((partner, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Beneficiaries
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.beneficiaries.map((beneficiary, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {beneficiary}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <h2 className="font-display text-lg font-semibold">
                  Support This Work
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                  Your support helps us continue this vital work in communities across South Sudan.
                </p>
                <div className="mt-4">
                  <ActionLink href="/donate" variant="gold" className="w-full">
                    Donate Now
                  </ActionLink>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-muted py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Related Projects
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-dark"
          >
            <ArrowLeft className="size-4" />
            Back to all projects
          </Link>
        </div>
      </section>
    </>
  )
}
