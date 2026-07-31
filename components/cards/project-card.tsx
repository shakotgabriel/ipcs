import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import type { Project } from '@/lib/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-3 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-primary">
            {project.status}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" />
            {project.location}
          </span>
        </div>
        <h3 className="text-pretty font-display text-lg font-bold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          View Project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          <span className="sr-only">: {project.title}</span>
        </Link>
      </div>
    </article>
  )
}
