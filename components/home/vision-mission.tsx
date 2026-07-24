import { Eye, Target, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import { ActionLink } from '@/components/ui/action-button'

export function VisionMission() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary-foreground/10 text-gold">
              <Eye className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/80">
              {siteConfig.vision}
            </p>
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-card p-8 sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-xl bg-green/10 text-green">
              <Target className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {siteConfig.mission}
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <ActionLink href="/about" variant="primary" size="lg">
            Discover More About IPCS
            <ArrowRight className="size-5" />
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
