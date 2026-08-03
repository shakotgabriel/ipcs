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
        'relative isolate overflow-hidden border-b border-border text-foreground',
        className,
      )}
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_#ffffff_0%,_#ffffff_56%,_#4f80ff_56%,_#153a8a_100%),radial-gradient(circle_at_top_left,_rgba(10,31,68,0.1),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(79,128,255,0.14),_transparent_35%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 -z-10 h-56 w-56 rounded-full bg-secondary/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-primary"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">
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
        <h1 className="max-w-3xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
