import { Handshake, Users, Sprout } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const highlights = [
  {
    icon: Handshake,
    title: 'Peace & Conflict Transformation',
    description:
      'Supporting reconciliation, social cohesion, and locally led peace processes.',
  },
  {
    icon: Users,
    title: 'Stronger Civil Society',
    description:
      'Strengthening organizations so they can serve communities effectively.',
  },
  {
    icon: Sprout,
    title: 'Sustainable Community Development',
    description:
      'Promoting livelihoods and well-being that communities can sustain.',
  },
]

export function ImpactIntro() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Are"
          title="Building a More Just, Peaceful and Inclusive Society"
          description="The Institute for Promotion of Civil Society (IPCS) is committed to strengthening communities, supporting civil society, promoting accountable leadership, and contributing to sustainable peace and development. Through partnerships, training, advocacy, and community-based initiatives, IPCS works with people and institutions to create meaningful and lasting positive change."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-green/10 text-green">
                <item.icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
