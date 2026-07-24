import Link from 'next/link'
import { Mail } from 'lucide-react'
import { siteConfig, footerQuickLinks, socialLinks } from '@/lib/data/site'
import { Logo } from './logo'
import { NewsletterForm } from '@/components/forms/newsletter-form'
import { socialIconMap } from '@/components/ui/social-icons'

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>South Sudan</li>
            </ul>

            <h2 className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Follow Us
            </h2>
            <ul className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon]
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Newsletter
            </h2>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Subscribe to receive updates about our projects, events, and
              community initiatives.
            </p>
            <div className="mt-4">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row">
          <p className="text-sm text-primary-foreground/60">
            &copy; 2026 {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/60">
            <Link href="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
            <Link href="/donate" className="transition-colors hover:text-gold">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
