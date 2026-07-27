import { Handshake, Users, Sprout } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const highlights = [
  {
    icon: Handshake,
    title: 'Accountable Governance',
    description:
      'Promoting democratic governance, accountability and stronger relationships between citizens and institutions.',
  },
  {
    icon: Users,
    title: 'Empowered Citizens',
    description:
      'Expanding civic education, human-rights awareness and access to information so people can participate meaningfully.',
  },
  {
    icon: Sprout,
    title: 'Resilient Communities',
    description:
      'Supporting peacebuilding, protection, livelihoods, food security and psychosocial well-being in conflict-affected communities.',
  },
]

export function ImpactIntro() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Are"
          title="Building accountable leadership, empowered citizens and resilient communities"
          description="IPCS is a South Sudanese national civil society organisation committed to strengthening democratic governance, protecting human rights, building peace and improving the well-being of vulnerable communities. Through inclusive partnerships and community-led programmes, IPCS promotes informed citizenship, accountable leadership and sustainable development across South Sudan."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
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
