import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'

export function Topbar() {
  return (
    <div className="bg-background text-foreground text-xs border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-3.5" />
            <span className="hidden sm:inline">{siteConfig.email}</span>
          </a>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="size-3.5" />
            <span className="hidden sm:inline">Juba, South Sudan</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Donate
          </Link>
          <span className="text-muted-foreground/40">·</span>
          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
