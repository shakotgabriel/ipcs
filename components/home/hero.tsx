import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { ActionLink } from '@/components/ui/action-button'
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
    <section className="relative isolate overflow-hidden bg-background text-foreground">
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_#ffffff_0%,_#ffffff_52%,_#537adb_52%,_#537adb_100%),radial-gradient(ellipse_at_top_left_0_0,_rgba(83,122,219,0.12),_transparent_50%),radial-gradient(ellipse_at_bottom_right_0_0,_rgba(255,248,211,0.25),_transparent_45%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23537adb' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border-2 border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold tracking-wide text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            INSTITUTE FOR PROMOTION OF CIVIL SOCIETY
          </div>
          <h1 className="mt-8 text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Building <span className="text-primary">Accountable Leadership</span>, Empowered Citizens and Resilient Communities
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ActionLink href="/about" variant="gold" size="lg" className="shadow-lg shadow-primary/25">
              Learn More About IPCS
              <ArrowRight className="size-5" />
            </ActionLink>
            <ActionLink href="/what-we-do" variant="outline" size="lg">
              Explore Our Work
            </ActionLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: '🏛️', text: 'Good governance and accountability' },
              { icon: '🤝', text: 'Human rights and civic participation' },
              { icon: '🕊️', text: 'Peacebuilding and community resilience' },
            ].map((item) => (
              <div
                key={item.text}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative text-2xl mb-2 block">{item.icon}</span>
                <p className="relative text-sm font-medium leading-relaxed text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid min-h-[22rem] grid-cols-3 grid-rows-3 gap-3 sm:min-h-[26rem] lg:min-h-[32rem]">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                'relative overflow-hidden rounded-2xl border border-border shadow-lg',
                heroGridLayout[index],
              )}
            >
              <Image
                src={image.src}
                alt={image.label}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
