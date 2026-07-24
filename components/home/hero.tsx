import Image from 'next/image'
import { ArrowRight, Heart } from 'lucide-react'
import { ActionLink } from '@/components/ui/action-button'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-community.png"
          alt="South Sudanese community members gathered for a peaceful community meeting under an acacia tree"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90">
            Institute for Promotion of Civil Society
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Working Together for a Just Society
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            IPCS works with communities, civil society organizations, leaders,
            partners, and other stakeholders to promote peace, development,
            accountability, inclusion, and sustainable positive change.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/about" variant="gold" size="lg">
              Learn More About Us
              <ArrowRight className="size-5" />
            </ActionLink>
            <ActionLink href="/donate" variant="outline-light" size="lg">
              <Heart className="size-5" />
              Support Our Work
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
