export type PlaceholderImage = {
  id: string
  label: string
  src: string
}

export const heroImages: PlaceholderImage[] = [
  { id: 'community-meeting', label: 'Community Meeting', src: '/field.jpeg' },
  { id: 'peacebuilding', label: 'Peacebuilding Workshop', src: '/IPCS police training.jpg.jpeg' },
  { id: 'youth-training', label: 'Youth Training', src: '/field2.jpeg' },
  { id: 'civic-education', label: 'Civic Education', src: '/field3.jpeg' },
  { id: 'child-protection', label: 'Child Protection', src: '/field4.jpeg' },
  { id: 'governance', label: 'Accountable Governance', src: '/IPCS police trainng in Yei.jpg.jpeg' },
]

export const aboutGalleryImages: PlaceholderImage[] = [
  { id: 'about-team', label: 'IPCS Team', src: '/board.jpeg' },
  { id: 'about-community', label: 'Community Engagement', src: '/field7.jpeg' },
  { id: 'about-training', label: 'Leadership Training', src: '/ipcsoffice.jpeg' },
]

export const areaImages: Record<string, string[]> = {
  'governance': ['/IPCS police training.jpg.jpeg', '/field2.jpeg', '/field3.jpeg'],
  'civic-education': ['/field.jpeg', '/field4.jpeg', '/field7.jpeg'],
  'human-rights': ['/IPCS police trainng in Yei.jpg.jpeg', '/field2.jpeg', '/field3.jpeg'],
  'peacebuilding': ['/field.jpeg', '/field4.jpeg', '/field7.jpeg'],
  'protection': ['/IPCS police training.jpg.jpeg', '/field2.jpeg', '/field3.jpeg'],
  'livelihoods': ['/field.jpeg', '/field4.jpeg', '/field7.jpeg'],
}

export const projectImages: string[] = [
  '/project1.jpeg',
  '/projectyei.jpeg',
  '/field.jpeg',
  '/field2.jpeg',
]

export const newsImages: string[] = [
  '/field.jpeg',
  '/field2.jpeg',
  '/field3.jpeg',
  '/field4.jpeg',
]
