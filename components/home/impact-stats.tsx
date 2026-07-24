import { impactStats } from '@/lib/data/content'

export function ImpactStats() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">
            Our Impact So Far
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/75">
            A snapshot of IPCS&apos; engagement with communities and civil
            society across South Sudan.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-extrabold text-gold">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-primary-foreground/75">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-center text-xs text-primary-foreground/50">
          Figures are editable placeholders and can be replaced with verified
          statistics.
        </p>
      </div>
    </section>
  )
}
