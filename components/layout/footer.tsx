import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { siteConfig, footerQuickLinks, socialLinks } from '@/lib/data/site'

import { NewsletterForm } from '@/components/forms/newsletter-form'
import { socialIconMap } from '@/components/ui/social-icons'

export function Footer() {
  return (
    <footer className="bg-shell text-shell-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-lg text-barberry">I</span>
              <span className="font-display font-semibold text-base">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-shell-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-8 items-center justify-center rounded-full text-shell-foreground/80 transition-colors hover:text-barberry"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-shell-foreground">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-shell-foreground/70 transition-colors hover:text-barberry"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-shell-foreground">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-shell-foreground/70">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-barberry"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 transition-colors hover:text-barberry"
                >
                  Send a Message
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" />
                Juba, South Sudan
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-shell-foreground">
              Stay Connected
            </h2>
            <p className="mt-4 text-sm text-shell-foreground/70">
              Get occasional updates on IPCS projects, events and opportunities.
            </p>
            <div className="mt-4">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-sm text-shell-foreground/60">
            &copy; 2026 {siteConfig.name}. All Rights Reserved.
          </p>
          <p className="text-sm text-shell-foreground/60">
            {siteConfig.fullName}
          </p>
        </div>
      </div>
    </footer>
  )
}
