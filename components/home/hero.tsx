import Image from 'next/image'
import { ArrowRight, Heart } from 'lucide-react'
import { ActionLink } from '@/components/ui/action-button'

const heroImages = [
  {
    src: '/images/hero-1.jpg',
    alt: 'Community dialogue session in South Sudan',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Training workshop for local leaders',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Youth empowerment program',
  },
  {
    src: '/images/hero-4.jpg',
    alt: 'Peacebuilding initiative',
  },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-10">
        <div className="grid h-full grid-cols-2 grid-rows-2">
          {heroImages.map((img, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0 bg-linear-to-r from-primary via-primary/85 to-primary/60"
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
            <ActionLink href="/about" variant="primary" size="lg">
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
