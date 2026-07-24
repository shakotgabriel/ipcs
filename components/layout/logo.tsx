import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5', className)}
      aria-label="IPCS South Sudan home"
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold font-display text-lg font-bold text-gold-foreground"
        aria-hidden="true"
      >
        I
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'font-display text-lg font-extrabold tracking-tight',
            variant === 'light' ? 'text-primary-foreground' : 'text-primary',
          )}
        >
          IPCS
        </span>
        <span
          className={cn(
            'text-[11px] font-medium tracking-wide',
            variant === 'light'
              ? 'text-primary-foreground/70'
              : 'text-muted-foreground',
          )}
        >
          South Sudan
        </span>
      </span>
    </Link>
  )
}
