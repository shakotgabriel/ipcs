export const siteConfig = {
  name: 'IPCS South Sudan',
  fullName: 'Institute for Promotion of Civil Society',
  shortName: 'IPCS',
  email: 'ipcssouthsudan@gmail.com',
  description:
    'The Institute for Promotion of Civil Society is a South Sudanese national civil society organisation committed to strengthening democratic governance, protecting human rights, building peace and improving the well-being of vulnerable communities.',
  vision:
    'An informed citizenry and accountable leadership positively engaged in the development of the nation.',
  mission:
    'To promote access to information, effective citizen participation, accountable governance and improved well-being of the people.',
}

export type NavItem = {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Contact Us', href: '/contact' },
]

export const footerQuickLinks: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Projects', href: '/projects' },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Donate', href: '/donate' },
]

export type SocialLink = {
  label: string
  href: string
  icon: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'youtube'
}

// Placeholder links — update with official IPCS social media accounts.
export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'X (Twitter)', href: '#', icon: 'twitter' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
]
