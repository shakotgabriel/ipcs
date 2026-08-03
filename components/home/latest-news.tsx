import { getSortedNews } from '@/lib/data/news'
import { SectionHeading } from '@/components/ui/section-heading'
import { NewsCard } from '@/components/cards/news-card'
import { ActionLink } from '@/components/ui/action-button'

export function LatestNews() {
  const latest = getSortedNews().slice(0, 3)

  return (
    <section className="bg-background py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Latest Updates"
            title="News & Events"
            description=""
          />
          <ActionLink
            href="/news-events"
            variant="ghost"
            size="sm"
            className="shrink-0"
          >
            View All News & Events
          </ActionLink>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
