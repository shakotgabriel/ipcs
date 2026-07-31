import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeading } from '@/components/ui/section-heading'
import { ActionLink } from '@/components/ui/action-button'
import { NewsCard } from '@/components/cards/news-card'
import { getSortedNews, newsCategories } from '@/lib/data/news'
import { Calendar, TrendingUp, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Events',
  description:
    'Stay updated with IPCS South Sudan news, events, announcements, and project updates.',
}

export default function NewsEventsPage() {
  const newsItems = getSortedNews()

  return (
    <>
      <PageHeader
        title="News & Events"
        description="Stay informed about IPCS activities, achievements, and upcoming events across South Sudan."
        breadcrumbs={[{ label: 'News & Events' }]}
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Updates"
            title="News, Events & Announcements"
            description="Explore our latest stories, training sessions, community engagements, and organizational milestones."
            className="text-center"
          />

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/news-events"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              <Sparkles className="size-4" />
              All Stories
            </Link>
            {newsCategories.map((category) => (
              <Link
                key={category}
                href={`/news-events?category=${category.toLowerCase()}`}
                className="group inline-flex items-center gap-2 rounded-full border-2 border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted hover:shadow-md"
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <div
                key={item.slug}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-navy py-20 md:py-28 text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <TrendingUp className="size-4" />
            <span>Partner with IPCS</span>
          </div>
          <h2 className="mt-8 text-balance font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Want to make a difference in South Sudan?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90 text-lg">
            We welcome partnerships with organizations that share our commitment to peace, governance, and community development. Together, we can create lasting positive change.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ActionLink href="/contact" variant="gold" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              <Calendar className="size-5" />
              Schedule a Meeting
            </ActionLink>
            <ActionLink href="/donate" variant="outline-light" size="lg">
              Support Our Work
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  )
}
