import { ArrowRight } from 'lucide-react'
import { ActionLink } from '@/components/ui/action-button'
import { siteConfig } from '@/lib/data/site'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.28),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(135deg,_#133d2c_0%,_#0f2f23_55%,_#0a2119_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90">
            INSTITUTE FOR PROMOTION OF CIVIL SOCIETY
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building Accountable Leadership, Empowered Citizens and Resilient Communities
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/82">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/about" variant="gold" size="lg">
              Learn More About IPCS
              <ArrowRight className="size-5" />
            </ActionLink>
            <ActionLink href="/what-we-do" variant="outline-light" size="lg">
              Explore Our Work
            </ActionLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Good governance and accountability',
              'Human rights and civic participation',
              'Peacebuilding and community resilience',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-4 backdrop-blur"
              >
                <p className="text-sm leading-relaxed text-primary-foreground/88">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="grid w-full gap-4 rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/8 p-5 backdrop-blur sm:p-6">
            <div className="rounded-2xl bg-background/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Our Vision
              </p>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-primary-foreground/90">
                {siteConfig.vision}
              </p>
            </div>
            <div className="rounded-2xl bg-background/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Our Mission
              </p>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-primary-foreground/90">
                {siteConfig.mission}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-background/10 p-5">
                <p className="text-sm uppercase tracking-wider text-primary-foreground/65">
                  Founded
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-gold">
                  1999
                </p>
              </div>
              <div className="rounded-2xl bg-background/10 p-5">
                <p className="text-sm uppercase tracking-wider text-primary-foreground/65">
                  Based in
                </p>
                <p className="mt-2 font-display text-xl font-bold text-gold">
                  Juba, South Sudan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
