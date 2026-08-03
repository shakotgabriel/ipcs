import { Handshake, Users, Sprout } from 'lucide-react'
import Image from 'next/image'

import { SectionHeading } from '@/components/ui/section-heading'

const highlights = [
  {
    icon: Handshake,
    title: 'Accountable Governance',
    description:
      'Promoting democratic governance, accountability and stronger relationships between citizens and institutions.',
  },
  {
    icon: Users,
    title: 'Empowered Citizens',
    description:
      'Expanding civic education, human-rights awareness and access to information so people can participate meaningfully.',
  },
  {
    icon: Sprout,
    title: 'Resilient Communities',
    description:
      'Supporting peacebuilding, protection, livelihoods, food security and psychosocial well-being in conflict-affected communities.',
  },
]

export function ImpactIntro() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/southsudan.webp"
          alt="Communities working together"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-20 " />

      {/* Blue Brand Overlay */}
      <div className="absolute inset-0 -z-10 bg-primary/40 mix-blend-multiply" />

      {/* Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/80 via-primary/40 to-slate-950/90" />

      {/* Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading
          eyebrow="Who We Are"
          title="Building Accountable Leadership, Empowered Citizens and Resilient Communities"
          description="IPCS is a South Sudanese national civil society organisation committed to strengthening democratic governance, protecting human rights, building peace and improving the well-being of vulnerable communities. Through inclusive partnerships and community-led programmes, IPCS promotes informed citizenship, accountable leadership and sustainable development across South Sudan."
          align="center"
          className="
            mx-auto
            [&_span]:text-sky-200
            [&_h2]:text-white
            [&_p]:text-gray-100
          "
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="
                group rounded-3xl 
                border border-white/20 
                bg-black/40 
                p-6 
                text-center 
                backdrop-blur-xl
                transition-all 
                duration-300
                hover:-translate-y-2
                hover:bg-black/60
                hover:shadow-2xl
              "
            >
              <div
                className="
                  mx-auto flex h-14 w-14 
                  items-center justify-center 
                  rounded-2xl 
                  bg-primary/40 
                  text-white
                  transition
                  group-hover:scale-110
                "
              >
                <item.icon className="h-8 w-8" />
              </div>

                <h3 className="mt-5 font-display text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-6 text-gray-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}