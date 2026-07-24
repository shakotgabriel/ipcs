import { SectionHeading } from '@/components/ui/section-heading'
import { partners } from '@/lib/data/content'

export function Partners() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Partners"
          title="Working Together for Greater Impact"
          description="IPCS believes that sustainable peace and development require collaboration. We work with communities, civil society organizations, government institutions, local leaders, churches, development partners, and other stakeholders to create meaningful and sustainable change."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-card p-6 text-center"
            >
              <span
                className="flex size-12 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-primary"
                aria-hidden="true"
              >
                {partner.name.charAt(0)}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {partner.type}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Partner names and logos are placeholders and can be updated with
          verified partner information.
        </p>
      </div>
    </section>
  )
}
