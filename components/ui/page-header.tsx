import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Breadcrumb = {
  label: string
  href?: string
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  className,
}: {
  title: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  className?: string
}) {
  return (
    <section
      className={cn(
        'border-b border-border bg-primary text-primary-foreground',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-primary-foreground/60">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-gold"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-primary-foreground/90">
                      {crumb.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight className="size-4" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
