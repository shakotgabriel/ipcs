import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type PlaceholderVariant = 'primary' | 'sky' | 'navy' | 'charcoal' | 'mixed'

const variantStyles: Record<PlaceholderVariant, string> = {
  primary: 'bg-gradient-to-br from-primary to-primary-dark text-primary-foreground',
  sky: 'bg-gradient-to-br from-secondary to-primary-dark text-primary-dark',
  navy: 'bg-gradient-to-br from-primary-dark to-primary text-primary-foreground',
  charcoal: 'bg-gradient-to-br from-primary-dark to-foreground text-white',
  mixed: 'bg-gradient-to-br from-primary via-secondary to-primary-dark text-primary-foreground',
}

export function ImagePlaceholder({
  label,
  variant = 'primary',
  className,
  iconClassName,
  showIcon = true,
}: {
  label?: string
  variant?: PlaceholderVariant
  className?: string
  iconClassName?: string
  showIcon?: boolean
}) {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center p-4 text-center',
        variantStyles[variant],
        className,
      )}
      role="img"
      aria-label={label ? `${label} image placeholder` : 'Image placeholder'}
    >
      {showIcon && (
        <ImageIcon
          className={cn('size-8 opacity-70 sm:size-10', iconClassName)}
          aria-hidden="true"
        />
      )}
      {label && (
        <span className="mt-2 max-w-[12rem] text-[10px] font-semibold uppercase leading-tight tracking-wider opacity-90 sm:text-xs">
          {label}
        </span>
      )}
    </div>
  )
}
