import type { PlaceholderVariant } from '@/components/ui/image-placeholder'

export type PlaceholderImage = {
  id: string
  label: string
  variant: PlaceholderVariant
}

export const heroImages: PlaceholderImage[] = [
  { id: 'community-meeting', label: 'Community Meeting', variant: 'primary' },
  { id: 'peacebuilding', label: 'Peacebuilding Workshop', variant: 'navy' },
  { id: 'youth-training', label: 'Youth Training', variant: 'cream' },
  { id: 'civic-education', label: 'Civic Education', variant: 'charcoal' },
  { id: 'child-protection', label: 'Child Protection', variant: 'mixed' },
  { id: 'governance', label: 'Accountable Governance', variant: 'primary' },
]

export const aboutGalleryImages: PlaceholderImage[] = [
  { id: 'about-team', label: 'IPCS Team', variant: 'primary' },
  { id: 'about-community', label: 'Community Engagement', variant: 'navy' },
  { id: 'about-training', label: 'Leadership Training', variant: 'cream' },
]
