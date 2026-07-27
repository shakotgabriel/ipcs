import { siteConfig } from '@/lib/data/site'
import { ActionLink } from '@/components/ui/action-button'

export function VisionMission() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Direction
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold sm:text-4xl">
            Vision and mission
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              01 — VISION
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {siteConfig.vision}
            </p>
          </div>

          <div className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
            <span className="text-sm font-medium uppercase tracking-wider text-gold">
              02 — MISSION
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/80">
              {siteConfig.mission}
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <ActionLink href="/about" variant="ghost" size="lg">
            Discover the full IPCS story
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
