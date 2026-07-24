import { ArrowRight } from 'lucide-react'
import { getSortedNews } from '@/lib/data/news'
import { SectionHeading } from '@/components/ui/section-heading'
import { NewsCard } from '@/components/cards/news-card'
import { ActionLink } from '@/components/ui/action-button'

export function LatestNews() {
  const latest = getSortedNews().slice(0, 3)

  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="News & Events"
            title="Latest Updates From Our Work"
            description="Stay informed about our projects, events, community initiatives, and announcements."
          />
          <ActionLink
            href="/news-events"
            variant="outline"
            size="md"
            className="shrink-0"
          >
            View All News & Events
            <ArrowRight className="size-4" />
          </ActionLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
