import {
  Handshake,
  Building2,
  Sprout,
  Shield,
  Users,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ThematicArea } from '@/lib/data/thematic-areas'

const icons: Record<ThematicArea['icon'], LucideIcon> = {
  handshake: Handshake,
  building: Building2,
  sprout: Sprout,
  shield: Shield,
  users: Users,
  graduation: GraduationCap,
}

export function AreaIcon({
  name,
  className,
}: {
  name: ThematicArea['icon']
  className?: string
}) {
  const Icon = icons[name]
  return (
    <span
      className={cn(
        'flex size-12 items-center justify-center rounded-xl bg-secondary text-primary',
        className,
      )}
    >
      <Icon className="size-6" aria-hidden="true" />
    </span>
  )
}
