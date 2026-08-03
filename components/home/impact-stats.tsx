import { impactStats } from '@/lib/data/content'

export function ImpactStats() {
  return (
    <section className="bg-transparent py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Reach
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            Our Impact So Far
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Selected milestones from IPCS&apos;s programme history and documented achievements.
          </p>
        </div>

        <dl className="mx-auto mt-8 max-w-3xl space-y-2.5">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 border-b border-border pb-3 last:border-0"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex flex-1 items-center justify-between gap-4">
                <span className="text-sm font-medium text-foreground">
                  {stat.label}
                </span>
                <span className="mx-4 flex-1 border-b border-dashed border-border" />
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
