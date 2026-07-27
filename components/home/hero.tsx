import { ArrowRight } from 'lucide-react'
import { ActionLink } from '@/components/ui/action-button'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { heroImages } from '@/lib/data/placeholders'
import { siteConfig } from '@/lib/data/site'
import { cn } from '@/lib/utils'

const heroGridLayout = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-shell text-shell-foreground">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(83,122,219,0.35),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,248,211,0.12),_transparent_35%),linear-gradient(135deg,_#011627_0%,_#343633_55%,_#011627_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-shell-foreground/95">
            INSTITUTE FOR PROMOTION OF CIVIL SOCIETY
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Building Accountable Leadership, Empowered Citizens and Resilient Communities
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-shell-foreground/80">
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
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              'Good governance and accountability',
              'Human rights and civic participation',
              'Peacebuilding and community resilience',
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-sm leading-relaxed text-shell-foreground/85">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid min-h-[22rem] grid-cols-3 grid-rows-3 gap-3 sm:min-h-[26rem] lg:min-h-[32rem]">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                'relative overflow-hidden rounded-2xl border border-white/10 shadow-lg',
                heroGridLayout[index],
              )}
            >
              <ImagePlaceholder
                label={image.label}
                variant={image.variant}
                className="absolute inset-0 transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
