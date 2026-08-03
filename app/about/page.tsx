import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeading } from '@/components/ui/section-heading'
import { ActionLink } from '@/components/ui/action-button'
import { siteConfig } from '@/lib/data/site'
import {
  serviceValues,
  strategicObjectives,
  philosophyPoints,
  presenceOffices,
  whoWeServe,
  workMethods,
  contributionItems,
  impactAchievements,
  organizationalStrengths,
  operatingChallenges,
  partnershipExperience,
} from '@/lib/data/content'
import { thematicAreas } from '@/lib/data/thematic-areas'
import { Eye, Target, Check, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about IPCS South Sudan — the Institute for Promotion of Civil Society. Our vision, mission, values, and approach to peace and development.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Institute for Promotion of Civil Society"
        description="IPCS is a South Sudanese national civil society organisation committed to strengthening democratic governance, protecting human rights, building peace and improving the well-being of vulnerable communities."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Building informed citizenship and accountable leadership"
                align="left"
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  The Institute for Promotion of Civil Society, known as IPCS,
                  was established in 1999 during the civil war in Sudan in
                  response to the urgent need to strengthen the capacity of
                  civil society organisations, local government institutions,
                  women's groups, youth groups and traditional leadership
                  structures.
                </p>
                <p>
                  The organisation was founded on the conviction that lasting
                  peace and sustainable development depend on informed citizens,
                  accountable institutions and strong relationships between
                  communities and their leaders.
                </p>
                <p>
                  Over the years, IPCS has expanded its work beyond institutional
                  capacity development to include civic education, human
                  rights, peacebuilding, protection, livelihoods, agriculture,
                  health, psychosocial support and disaster preparedness.
                </p>
                <p>
                  IPCS combines governance and humanitarian programming because
                  communities affected by conflict require both immediate
                  support and stronger institutions capable of protecting their
                  rights and responding to their long-term development needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-primary/15 to-secondary/15 blur-2xl opacity-50" />
              <div className="relative grid gap-4 rounded-3xl border border-border bg-card/85 p-6 shadow-lg backdrop-blur sm:p-7">
                <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 to-primary/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    📍 Our Presence
                  </p>
                  <div className="mt-4 space-y-3">
                    {presenceOffices.map((office) => (
                      <div key={office.id} className="flex gap-3 group">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-primary transition-transform group-hover:scale-110" />
                        <div>
                          <h3 className="font-display text-base font-semibold text-foreground">
                            {office.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {office.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/50 hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="relative text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                      Founded
                    </p>
                    <p className="relative mt-1.5 font-display text-3xl font-bold text-primary">
                      1999
                    </p>
                    <p className="relative mt-1 text-xs text-muted-foreground">25+ years of impact</p>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/50 hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="relative text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                      Headquarters
                    </p>
                    <p className="relative mt-1.5 font-display text-lg font-bold text-foreground">
                      Juba, South Sudan
                    </p>
                    <p className="relative mt-1 text-xs text-muted-foreground">National reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Eye className="size-6" />
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">
                {siteConfig.vision}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                <Target className="size-6" />
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">
                {siteConfig.mission}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Our Philosophy
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {philosophyPoints.map((point) => (
                <p
                  key={point}
                  className="rounded-xl bg-muted p-3.5 text-sm leading-relaxed text-muted-foreground"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Core Values"
            title="The principle of SERVICE guides our work"
            description="Each value reflects the standard IPCS sets for itself in communities, partnerships and programme delivery."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceValues.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Strategic Objectives"
            title="What IPCS works to achieve"
            description="These objectives shape the way IPCS connects governance, human rights, peacebuilding and community development."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {strategicObjectives.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-card p-5"
              >
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-4" />
                </div>
                <div>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Philosophy in Practice"
            title="How IPCS thinks about change"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {philosophyPoints.map((point, index) => (
              <div key={point} className="rounded-2xl border border-border bg-card p-5">
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                  0{index + 1}
                </span>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programme Areas"
            title="IPCS works across interconnected thematic areas"
            description="These areas reflect the organisation’s governance and humanitarian portfolio."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thematicAreas.map((area) => (
              <article
                key={area.slug}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span aria-hidden="true" className="text-lg font-bold">
                    {area.title.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {area.shortDescription}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <SectionHeading
                eyebrow="Who We Serve"
                title="Communities and institutions at the centre of our work"
                description="IPCS works with a broad set of actors whose leadership and participation shape social change."
                align="left"
              />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {whoWeServe.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 text-sm text-foreground"
                  >
                    <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="How We Work"
                title="Community-centred methods"
                description="IPCS uses participatory, inclusive and community-centred approaches to design, deliver and evaluate its work."
                align="left"
              />
              <ul className="mt-6 space-y-3">
                {workMethods.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 text-sm text-foreground"
                  >
                    <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-dark">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Contribution"
            title="What IPCS has helped communities achieve"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contributionItems.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Impact"
            title="Selected achievements"
            description="These examples reflect IPCS work with partners, communities and institutions over time."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {impactAchievements.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4.5"
              >
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-4" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <SectionHeading
                eyebrow="Organisational Strengths"
                title="What IPCS brings to partnerships"
                align="left"
              />
              <ul className="mt-6 space-y-3">
                {organizationalStrengths.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="Operating Environment"
                title="The context in which IPCS works"
                description="IPCS operates in a complex environment shaped by conflict, displacement, insecurity, inflation and limited infrastructure."
                align="left"
              />
              <ul className="mt-6 space-y-3">
                {operatingChallenges.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-dark">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Partnership Experience"
            title="Institutions IPCS has worked with"
            description="This experience has strengthened the organisation’s capacity in programme implementation, institutional development, compliance, grant management and community engagement."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipExperience.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card p-4">
                <p className="text-sm font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-12 text-white md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-display text-2xl font-bold md:text-3xl">
            Partner with IPCS to advance accountable governance and resilient communities
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-white/80">
            IPCS welcomes partnerships with United Nations agencies,
            international and national NGOs, bilateral and multilateral donors,
            government ministries and local authorities, research and academic
            institutions, faith-based organisations, civil society networks,
            private-sector actors, foundations and philanthropic institutions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ActionLink href="/what-we-do" variant="gold" size="lg">
              Explore What We Do
            </ActionLink>
            <ActionLink href="/contact" variant="outline-light" size="lg">
              Get in Touch
            </ActionLink>
          </div>
          <p className="mt-6 text-sm text-white/75">
            Contact us at{' '}
            <Link href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
              {siteConfig.email}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
