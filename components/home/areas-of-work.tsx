'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { thematicAreas } from '@/lib/data/thematic-areas'
import { SectionHeading } from '@/components/ui/section-heading'

const areaColors: Record<string, string> = {
  'governance-civil-society-strengthening': 'bg-primary',
  'civic-education-access-information': 'bg-primary-dark',
  'human-rights-rule-of-law-access-to-justice': 'bg-secondary',
}

export function AreasOfWork() {
  const areas = thematicAreas.slice(0, 3)

  return (
    <section className="bg-background py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Focus"
          title="Our Areas of Work"
          description="The first three programme areas below anchor a wider set of interventions across governance, rights, peace, protection and resilience."
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {areas.map((area, index) => (
            <article
              key={area.slug}
              className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className={cn('h-1.5', areaColors[area.slug] || 'bg-primary')} />
              <div className="p-7">
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  AREA — {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.shortDescription}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
                <a
                  href={`/what-we-do#${area.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                >
                  Explore this area
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
