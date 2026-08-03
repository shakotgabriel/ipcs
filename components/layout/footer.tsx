import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { siteConfig, footerQuickLinks, socialLinks } from '@/lib/data/site'

import { NewsletterForm } from '@/components/forms/newsletter-form'
import { socialIconMap } from '@/components/ui/social-icons'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-semibold text-white">I</span>
              <span className="font-display text-base font-semibold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
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
                    className="flex size-8 items-center justify-center rounded-full text-white/75 transition-colors hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
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
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Stay Connected
            </h2>
            <p className="mt-4 text-sm text-white/80">
              Get occasional updates on IPCS projects, events and opportunities.
            </p>
            <div className="mt-4">
              <NewsletterForm variant="dark" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-5 sm:flex-row">
          <p className="text-sm text-white/70">
            &copy; 2026 {siteConfig.name}. All Rights Reserved.
          </p>
          <p className="text-sm text-white/70">
            {siteConfig.fullName}
          </p>
        </div>
      </div>
    </footer>
  )
}
