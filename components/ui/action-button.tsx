import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const actionButtonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        gold: 'bg-primary text-primary-foreground hover:bg-primary-dark font-semibold',
        green: 'bg-green text-green-foreground hover:bg-green/90',
        outline:
          'border border-border bg-background text-foreground hover:bg-muted',
        'outline-light':
          'border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10',
        ghost: 'text-foreground hover:bg-muted',
        link: 'text-primary underline-offset-4 hover:underline px-0',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type BaseProps = VariantProps<typeof actionButtonVariants> & {
  className?: string
  children: React.ReactNode
}

type LinkButtonProps = BaseProps & {
  href: string
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>

type NativeButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

export function ActionLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(actionButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  )
}

export function ActionButton({
  variant,
  size,
  className,
  children,
  type = 'button',
  ...props
}: NativeButtonProps) {
  return (
    <button
      type={type}
      className={cn(actionButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
