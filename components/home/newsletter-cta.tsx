import { Mail } from 'lucide-react'
import { NewsletterForm } from '@/components/forms/newsletter-form'

export function NewsletterCta() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-3xl border border-border bg-secondary p-8 text-center sm:p-12">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-green/10 text-green">
            <Mail className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            Stay Connected With Our Work
          </h2>
          <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Subscribe to receive updates about IPCS projects, events, community
            initiatives, and opportunities to support peace and development.
          </p>
          <div className="mt-6 w-full max-w-md">
            <NewsletterForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  )
}
