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
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/field4.jpeg" // Put your image inside /public
          alt="IPCS Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-20 bg-black/25" />

      {/* Blue right half */}
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-transparent" />

      {/* Smooth blend between image and blue */}
      <div className="absolute inset-y-0 right-1/2 -z-10 w-40 bg-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 " />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-200 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-200" />
            </span>

            INSTITUTE FOR PROMOTION OF CIVIL SOCIETY
          </div>

          <h1 className="mt-8 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            Building{' '}
            <span className="text-sky-200">
              Accountable Leadership
            </span>
            , Empowered Citizens and Resilient Communities
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ActionLink
              href="/about"
              variant="gold"
              size="lg"
              className="shadow-xl shadow-black/20"
            >
              Learn More About IPCS
              <ArrowRight className="size-5" />
            </ActionLink>

            <ActionLink
              href="/what-we-do"
              variant="outline"
              size="lg"
              className="border-white bg-white/10 text-white backdrop-blur hover:bg-white hover:text-primary"
            >
              Explore Our Work
            </ActionLink>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: '🏛️',
                text: 'Good governance and accountability',
              },
              {
                icon: '🤝',
                text: 'Human rights and civic participation',
              },
              {
                icon: '🕊️',
                text: 'Peacebuilding and community resilience',
              },
            ].map((item) => (
              <div
                key={item.text}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <span className="mb-3 block text-3xl">{item.icon}</span>

                <p className="text-sm font-medium leading-relaxed text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Gallery */}
        <div className="flex items-center justify-center">
          <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
            <div className="grid min-h-[24rem] grid-cols-3 grid-rows-3 gap-3 sm:min-h-[30rem] lg:min-h-[34rem]">
              {heroImages.map((image, index) => (
                <div
                  key={image.id}
                  className={cn(
                    'relative overflow-hidden rounded-2xl border border-white/20 shadow-xl',
                    heroGridLayout[index],
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width:768px) 33vw, (max-width:1024px) 25vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}