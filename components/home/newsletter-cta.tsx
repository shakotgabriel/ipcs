import { Mail } from 'lucide-react'
import { NewsletterForm } from '@/components/forms/newsletter-form'

export function NewsletterCta() {
  return (
    <section className="bg-transparent py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center shadow-sm sm:p-8">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Mail className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-balance font-display text-2xl font-bold text-foreground sm:text-3xl">
            Stay Connected With Our Work
          </h2>
          <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Subscribe to receive updates about IPCS projects, events, community
            initiatives, and opportunities to support peace and development.
          </p>
          <div className="mt-5 w-full max-w-md">
            <NewsletterForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  )
}
