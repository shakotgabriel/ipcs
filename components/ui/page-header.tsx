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
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_#ffffff_0%,_#ffffff_50%,_#537adb_50%,_#537adb_100%),radial-gradient(circle_at_top_left,_rgba(1,22,39,0.1),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,248,211,0.2),_transparent_35%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 relative z-10">
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
        <h1 className="max-w-3xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
