import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { formatDate, type NewsItem } from '@/lib/data/news'

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10">
      <Link
        href={`/news-events/${item.slug}`}
        className="relative aspect-[16/10] overflow-hidden"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-charcoal">
          {item.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Calendar className="size-3.5" />
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </div>
        <h3 className="text-pretty font-display text-lg font-bold leading-snug text-foreground">
          <Link
            href={`/news-events/${item.slug}`}
            className="transition-colors hover:text-primary"
          >
            {item.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.summary}
        </p>
        <Link
          href={`/news-events/${item.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Read More
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          <span className="sr-only">: {item.title}</span>
        </Link>
      </div>
    </article>
  )
}
