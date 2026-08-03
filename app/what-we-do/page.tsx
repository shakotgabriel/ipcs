import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeading } from '@/components/ui/section-heading'
import { ActionLink } from '@/components/ui/action-button'
import { AreaIcon } from '@/components/ui/area-icon'
import { thematicAreas } from '@/lib/data/thematic-areas'
import { areaImages } from '@/lib/data/placeholders'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'Our thematic areas include governance strengthening, civic education, human rights, peacebuilding, protection, livelihoods, agriculture, health and reintegration.',
}


export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        title="Our Thematic Areas of Work"
        description="IPCS works across interconnected programmes that promote peace, protection, participation, sustainable development and resilience in South Sudan."
        breadcrumbs={[{ label: 'What We Do' }]}
      />

      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Areas of Work"
            title="Interconnected pathways to lasting change"
            description="Each area strengthens the others — from peace and protection to participation, livelihoods, and stronger institutions."
            className="text-center"
          />

          <div className="mt-16 space-y-24 md:space-y-32">
            {thematicAreas.map((area, index) => {
              const images = areaImages[area.slug] || ['/field.jpeg', '/field2.jpeg', '/field3.jpeg']
              return (
                <div
                  key={area.slug}
                  className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/15 to-secondary/15 blur-2xl opacity-40" />
                    <div className="relative grid gap-4">
                      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-lg">
                        <Image
                          src={images[0]}
                          alt={area.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-square overflow-hidden rounded-xl border border-border shadow-md">
                          <Image
                            src={images[1]}
                            alt={`${area.title} — Activity 1`}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-xl border border-border shadow-md">
                          <Image
                            src={images[2]}
                            alt={`${area.title} — Activity 2`}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      <AreaIcon name={area.icon} className="size-5" />
                      <span>Thematic Area {index + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                      {area.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {area.overview}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {area.keyActivities.slice(0, 3).map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-3 text-base text-foreground group"
                        >
                          <span
                            className="mt-1.5 size-2 shrink-0 rounded-full bg-primary group-hover:scale-125 transition-transform"
                            aria-hidden="true"
                          />
                          {activity}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/what-we-do/${area.slug}`}
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark group"
                    >
                      <span>Learn more about {area.title}</span>
                      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-display text-3xl font-bold text-foreground md:text-4xl">
            See our work in action
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Explore the projects where these areas come together to create real
            impact in communities across South Sudan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ActionLink href="/projects" size="lg">
              View Our Projects
            </ActionLink>
            <ActionLink href="/donate" variant="outline" size="lg">
              Support Our Work
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  )
}
