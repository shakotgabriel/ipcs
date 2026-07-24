'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { thematicAreas } from '@/lib/data/thematic-areas'
import { SectionHeading } from '@/components/ui/section-heading'
import { AreaIcon } from '@/components/ui/area-icon'

const buttonLabels: Record<string, string> = {
  'conflict-peacebuilding': 'Explore Peacebuilding Work',
  'organizational-development': 'Explore Organizational Development',
  'livelihood-economic-development': 'Explore Livelihood Programs',
}

export function AreasOfWork() {
  const areas = thematicAreas.slice(0, 3)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Areas of Work"
          description="IPCS focuses its work across a set of connected areas that together strengthen communities and support sustainable positive change."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {areas.map((area) => {
            const isOpen = expanded === area.slug
            return (
              <article
                key={area.slug}
                className="flex flex-col rounded-xl border border-border bg-card p-7"
              >
                <AreaIcon name={area.icon} />
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.shortDescription}
                </p>

                <div
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen
                      ? 'mt-3 grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-1 flex-col justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : area.slug)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center gap-1 self-start text-sm font-medium text-green transition-colors hover:text-green/80"
                  >
                    {isOpen ? 'Show less' : 'Read more'}
                    <ChevronDown
                      className={cn(
                        'size-4 transition-transform',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <a
                    href={`/what-we-do#${area.slug}`}
                    className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-colors hover:text-gold"
                  >
                    {buttonLabels[area.slug]}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
