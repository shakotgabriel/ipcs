import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/ui/page-header'
import { ActionLink } from '@/components/ui/action-button'
import { AreaIcon } from '@/components/ui/area-icon'
import {
  thematicAreas,
  getThematicArea,
} from '@/lib/data/thematic-areas'
import { getProjectsByArea } from '@/lib/data/projects'
import { ProjectCard } from '@/components/cards/project-card'
import { Check, Users, TrendingUp, ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  return thematicAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = getThematicArea(slug)
  if (!area) return { title: 'Area Not Found' }
  return {
    title: area.title,
    description: area.shortDescription,
  }
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = getThematicArea(slug)
  if (!area) notFound()

  const relatedProjects = getProjectsByArea(area.slug).slice(0, 3)

  return (
    <>
      <PageHeader
        title={area.title}
        description={area.shortDescription}
        breadcrumbs={[
          { label: 'What We Do', href: '/what-we-do' },
          { label: area.title },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={area.image || '/placeholder.svg'}
                  alt={area.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              <div className="mt-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <AreaIcon name={area.icon} className="size-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                  Overview
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {area.overview}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>

              <div className="mt-10">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Key Activities
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {area.keyActivities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="size-5" />
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Who We Work With
                  </h2>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {area.targetGroups.map((group) => (
                    <li
                      key={group}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-strong"
                        aria-hidden="true"
                      />
                      {group}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-5 text-gold" />
                  <h2 className="font-display text-lg font-semibold">
                    Expected Impact
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                  {area.expectedImpact}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Want to support this work?
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

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-muted py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Related Projects
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-gold-strong"
          >
            <ArrowLeft className="size-4" />
            Back to all areas
          </Link>
        </div>
      </section>
    </>
  )
}
