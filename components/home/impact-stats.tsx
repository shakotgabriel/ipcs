import { impactStats } from '@/lib/data/content'

export function ImpactStats() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Reach
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold sm:text-4xl">
            Our Impact So Far
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Figures below are indicative placeholders to be replaced with IPCS&apos;s verified monitoring &amp; evaluation data.
          </p>
        </div>

        <dl className="mt-12 max-w-3xl mx-auto space-y-4">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 border-b border-border pb-4 last:border-0"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex flex-1 items-center justify-between gap-4">
                <span className="text-sm font-medium text-foreground">
                  {stat.label}
                </span>
                <span className="flex-1 border-b border-dashed border-border mx-4" />
                <span className="font-display text-xl font-bold text-primary">
                  {stat.value}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
