import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/ui/page-header'
import { ActionLink } from '@/components/ui/action-button'
import { getNewsItem, getRelatedNews, formatDate } from '@/lib/data/news'
import { NewsCard } from '@/components/cards/news-card'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'

export function generateStaticParams() {
  const { newsItems } = require('@/lib/data/news')
  return newsItems.map((item: { slug: string }) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getNewsItem(slug)
  if (!item) return { title: 'News Not Found' }
  return {
    title: item.title,
    description: item.summary,
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getNewsItem(slug)
  if (!item) notFound()

  const relatedNews = getRelatedNews(slug, item.category)

  return (
    <>
      <PageHeader
        title={item.title}
        description={item.summary}
        breadcrumbs={[
          { label: 'News & Events', href: '/news-events' },
          { label: item.title },
        ]}
      />

      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 90vw"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <time dateTime={item.date}>{formatDate(item.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <User className="size-4" />
              <span>{item.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {item.category}
              </span>
            </div>
          </div>

          <div className="prose prose-lg mt-8 max-w-none">
            {item.content.map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              href="/news-events"
              className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary-dark"
            >
              <ArrowLeft className="size-4" />
              Back to news
            </Link>
            <button className="inline-flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-primary">
              <Share2 className="size-4" />
              Share
            </button>
          </div>
        </div>
      </article>

      {relatedNews.length > 0 && (
        <section className="bg-muted py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Related News
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedNews.map((relatedItem) => (
                <NewsCard key={relatedItem.slug} item={relatedItem} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-display text-3xl font-bold text-foreground md:text-4xl">
            Stay Updated
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Subscribe to receive updates on IPCS news, events, and project developments.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ActionLink href="/contact" variant="primary" size="lg">
              Contact Us
            </ActionLink>
            <ActionLink href="/donate" variant="outline" size="lg">
              Support Our Work
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  )
}
