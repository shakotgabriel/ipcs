import { SectionHeading } from '@/components/ui/section-heading'
import { partners } from '@/lib/data/content'

export function Partners() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Collaboration"
          title="Working Together for Greater Impact"
          description="IPCS believes that sustainable peace and development require collaboration. We work with communities, civil society organizations, government institutions, local leaders, churches, development partners, and other stakeholders to create meaningful and sustainable change."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center rounded-lg border border-border bg-card px-6 py-4 text-center min-w-[180px] shadow-sm transition-all hover:border-fountain-blue/40 hover:bg-secondary"
            >
              <span className="text-sm font-medium text-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Partner logos shown are placeholders pending confirmation from each partner organization.
        </p>
      </div>
    </section>
  )
}
