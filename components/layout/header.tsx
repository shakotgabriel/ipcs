'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mainNav } from '@/lib/data/site'
import { ActionLink } from '@/components/ui/action-button'
import { Topbar } from './topbar'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const previousPathname = useRef(pathname)

  // Close the mobile menu on route change.
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setOpen(false)
      previousPathname.current = pathname
    }
  }, [pathname])

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <Topbar />
      <header className="sticky top-8 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="IPCS South Sudan home">
            <Image
              src="/ipcslogo.png"
              alt="IPCS South Sudan logo"
              width={68}
              height={48}
              className="h-12 w-12 rounded-lg object-contain"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-extrabold tracking-tight text-primary">
                IPCS
              </span>
              <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                South Sudan
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ActionLink href="/donate" variant="gold" size="sm">
              <Heart className="size-4" />
              Support Our Work
            </ActionLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="mx-auto max-w-7xl space-y-1 border-t border-border px-4 py-4 sm:px-6">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'block rounded-md px-3 py-3 text-base font-medium transition-colors',
                    isActive(item.href)
                      ? 'bg-secondary text-primary'
                      : 'text-foreground/80 hover:bg-muted hover:text-primary',
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <ActionLink
                href="/donate"
                variant="gold"
                size="md"
                className="mt-2 w-full"
              >
                <Heart className="size-4" />
                Support Our Work
              </ActionLink>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
