import { siteConfig } from '@/lib/data/site'
import { ActionLink } from '@/components/ui/action-button'

export function VisionMission() {
  return (
    <section className="bg-transparent py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Direction
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            Vision and mission
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              01 — VISION
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {siteConfig.vision}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              02 — MISSION
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {siteConfig.mission}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <ActionLink href="/about" variant="ghost" size="lg">
            Discover the full IPCS story
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
