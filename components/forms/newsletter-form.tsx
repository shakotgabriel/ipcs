'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ActionButton } from '@/components/ui/action-button'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const dark = variant === 'dark'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!EMAIL_REGEX.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // Integration point: connect to a newsletter service (e.g. Mailchimp,
      // Resend audiences, or a custom API route) here.
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus('success')
      setMessage('Thank you for subscribing. You will hear from us soon.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`newsletter-email-${variant}`}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') setStatus('idle')
            }}
            aria-invalid={status === 'error'}
            className={cn(
              'h-11 w-full rounded-lg border px-4 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring',
              dark
                ? 'border-shell-foreground/25 bg-shell-foreground/10 text-shell-foreground placeholder:text-shell-foreground/50'
                : 'border-border bg-background text-foreground placeholder:text-muted-foreground',
            )}
          />
        </div>
        <ActionButton
          type="submit"
          variant="gold"
          size="md"
          disabled={status === 'loading'}
          className="sm:w-auto"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Subscribing
            </>
          ) : (
            'Subscribe'
          )}
        </ActionButton>
      </div>

      {message && (
        <p
          role={status === 'error' ? 'alert' : 'status'}
          className={cn(
            'mt-2 flex items-center gap-1.5 text-sm',
            status === 'success'
              ? dark
                ? 'text-green-foreground'
                : 'text-green'
              : 'text-destructive',
            status === 'success' && dark && 'text-barberry',
          )}
        >
          {status === 'success' ? (
            <CheckCircle2 className="size-4" />
          ) : (
            <AlertCircle className="size-4" />
          )}
          {message}
        </p>
      )}
    </form>
  )
}
