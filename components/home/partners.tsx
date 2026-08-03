import Image from 'next/image'
import { SectionHeading } from '@/components/ui/section-heading'
import { partners } from '@/lib/data/content'

export function Partners() {
  return (
    <section className="bg-transparent py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Collaboration"
          title="Working Together for Greater Impact"
          description="IPCS believes that sustainable peace and development require collaboration. We work with communities, civil society organizations, government institutions, local leaders, churches, development partners, and other stakeholders to create meaningful and sustainable change."
          align="center"
          className="mx-auto"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex min-w-[11rem] flex-1 basis-40 items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={320}
                height={160}
                className="h-auto w-full max-w-[11rem] object-contain opacity-95 transition-transform duration-300 group-hover:scale-[1.03] group-hover:opacity-100 sm:max-w-[12rem] lg:max-w-[13rem]"
              />
              <span className="sr-only">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
