import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeading } from '@/components/ui/section-heading'
import { ActionLink } from '@/components/ui/action-button'
import { siteConfig } from '@/lib/data/site'
import { orgValues, milestones, approachItems } from '@/lib/data/content'
import { Target, Eye, Check } from 'lucide-react'

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
        description="IPCS contributes to humanity by supporting initiatives with partners and actors committed to peace and development in South Sudan."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Who we are */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Building an informed citizenry and accountable leadership"
                align="left"
              />
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  The Institute for Promotion of Civil Society (IPCS) is a South
                  Sudanese organization working to strengthen communities, civil
                  society, and the relationship between citizens and those who
                  govern.
                </p>
                <p>
                  For over five years, IPCS has worked alongside communities,
                  church and local leaders, chiefs, civil society organizations,
                  and development partners to promote peace, protection,
                  participation, and sustainable development.
                </p>
                <p>
                  We believe lasting change is led by communities themselves.
                  Our role is to strengthen the knowledge, skills, systems, and
                  relationships that make that change possible.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-team.png"
                  alt="IPCS team members standing together in a South Sudanese community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about-1.jpg"
                    alt="Community meeting in South Sudan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about-2.jpg"
                    alt="Training session participants"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Eye className="size-6" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {siteConfig.vision}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex size-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Target className="size-6" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {siteConfig.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles that guide our work"
            description="Everything we do is grounded in a shared commitment to people, fairness, and lasting change."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {orgValues.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we create lasting impact"
            description="We combine partnership, participation, and capacity building to help communities lead their own development."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / timeline */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Growing with the communities we serve"
          />
          <ol className="mt-12 space-y-8 border-l-2 border-border pl-8">
            {milestones.map((m) => (
              <li key={m.title} className="relative">
                <span
                  className="absolute left-[-41px] flex size-5 items-center justify-center rounded-full border-4 border-background bg-primary"
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
                  {m.year}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-display text-3xl font-bold md:text-4xl">
            Partner with us for a peaceful, thriving South Sudan
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            Whether you are a community, an organization, or a development
            partner, there is a place for you in our work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ActionLink href="/what-we-do" variant="gold" size="lg">
              Explore What We Do
            </ActionLink>
            <ActionLink href="/contact" variant="outline-light" size="lg">
              Get in Touch
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  )
}
