import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeading } from '@/components/ui/section-heading'
import { ActionLink } from '@/components/ui/action-button'
import { AreaIcon } from '@/components/ui/area-icon'
import { thematicAreas } from '@/lib/data/thematic-areas'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'Our thematic areas: conflict and peacebuilding, organizational development, livelihoods, child protection, citizen participation, and community capacity building.',
}

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        title="Our Thematic Areas of Work"
        description="IPCS works across six interconnected areas to promote peace, protection, participation, and sustainable development in South Sudan."
        breadcrumbs={[{ label: 'What We Do' }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Areas of Work"
            title="Interconnected pathways to lasting change"
            description="Each area strengthens the others — from peace and protection to participation, livelihoods, and stronger institutions."
          />

          <div className="mt-14 space-y-16 md:space-y-24">
            {thematicAreas.map((area, index) => (
              <div
                key={area.slug}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={`grid gap-4 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src={area.image || '/placeholder.svg'}
                      alt={area.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-square overflow-hidden rounded-2xl">
                      <Image
                        src={`/images/what-we-do-${area.slug}-1.jpg`}
                        alt={`${area.title} activity 1`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-2xl">
                      <Image
                        src={`/images/what-we-do-${area.slug}-2.jpg`}
                        alt={`${area.title} activity 2`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <AreaIcon name={area.icon} className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {area.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {area.overview}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {area.keyActivities.slice(0, 3).map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue"
                          aria-hidden="true"
                        />
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/what-we-do/${area.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-blue"
                  >
                    Learn more about {area.title}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20">
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
