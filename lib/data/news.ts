export const newsCategories = [
  'News',
  'Events',
  'Announcements',
  'Project Updates',
] as const

export type NewsCategory = (typeof newsCategories)[number]

export type NewsItem = {
  slug: string
  title: string
  category: NewsCategory
  date: string // ISO date
  author: string
  image: string
  summary: string
  content: string[]
}

export const newsItems: NewsItem[] = [
  {
    slug: 'peacebuilding-training-community-leaders',
    title: 'Community and Church Leaders Complete Peacebuilding Training',
    category: 'News',
    date: '2026-06-18',
    author: 'IPCS South Sudan',
    image: '/images/news-dialogue.png',
    summary:
      'Local and church leaders came together to strengthen their skills in peacebuilding, reconciliation, and conflict transformation.',
    content: [
      'IPCS recently concluded a training for community and church leaders focused on peacebuilding, reconciliation, and conflict transformation. The training brought together chiefs, faith leaders, and community representatives committed to promoting peace and social cohesion.',
      'Participants explored practical approaches to preventing and managing conflict, protecting vulnerable community members, and fostering dialogue across divides. The sessions built on IPCS\u2019 ongoing work with leaders on child rights, gender-based violence, and reconciliation.',
      'The leaders committed to applying what they learned in their communities and to continuing to work with IPCS and other stakeholders to build lasting peace.',
    ],
  },
  {
    slug: 'child-protection-awareness-campaign',
    title: 'Strengthening Child Protection Through Community Awareness',
    category: 'Project Updates',
    date: '2026-05-27',
    author: 'IPCS South Sudan',
    image: '/images/project-child-protection.png',
    summary:
      'IPCS continues to raise awareness of child rights and support case management and family tracing and reunification.',
    content: [
      'As part of its Child Protection work, IPCS has continued to raise community awareness of child rights and to strengthen community-based protection systems. The initiative supports the identification and case management of vulnerable children.',
      'A key element of the work is family tracing and reunification, which helps reconnect separated children with their families and caregivers. IPCS works closely with community protection actors and local leaders to safeguard children.',
      'The organization remains committed to creating safer environments for children and to strengthening the systems that protect them.',
    ],
  },
  {
    slug: 'civil-society-capacity-workshop',
    title: 'Civil Society Organizations Strengthen Their Systems',
    category: 'Events',
    date: '2026-04-15',
    author: 'IPCS South Sudan',
    image: '/images/project-cso-capacity.png',
    summary:
      'A capacity strengthening workshop supported CSOs, CBOs, and national NGOs to improve governance and service delivery.',
    content: [
      'IPCS hosted a capacity strengthening workshop for civil society organizations, community-based organizations, and national NGOs. The workshop focused on governance, organizational systems, and effective service delivery.',
      'Participants worked through practical sessions on management, accountability, and the systems needed to serve communities effectively and sustainably. The workshop reflects IPCS\u2019 commitment to a strong and capable civil society.',
      'Organizations left with clear steps to strengthen their institutions and better serve the communities they work with.',
    ],
  },
  {
    slug: 'women-livelihood-skills',
    title: 'Women Gain Skills for Sustainable Livelihoods',
    category: 'Project Updates',
    date: '2026-03-08',
    author: 'IPCS South Sudan',
    image: '/images/news-women.png',
    summary:
      'IPCS supported women with training in cultivation practices and livelihood skills to strengthen household resilience.',
    content: [
      'IPCS supported women in the community with training on appropriate cultivation practices and other livelihood skills. The training is part of the organization\u2019s work to strengthen sustainable livelihoods and household well-being.',
      'Participants learned practical approaches to improving production and building economic resilience. The initiative supports economic empowerment and contributes to sustainable community development.',
      'IPCS continues to work with community groups to promote livelihoods that are sustainable and locally owned.',
    ],
  },
  {
    slug: 'citizen-participation-forum',
    title: 'Citizens Engage in Dialogue on Accountable Governance',
    category: 'Events',
    date: '2026-02-20',
    author: 'IPCS South Sudan',
    image: '/images/area-participation.png',
    summary:
      'A community forum brought citizens and leaders together to discuss participation, access to information, and accountability.',
    content: [
      'IPCS facilitated a community forum bringing citizens and leaders together to discuss citizen participation, access to information, and accountable governance. The forum created space for constructive dialogue between community members and decision-makers.',
      'Participants discussed how citizens can engage more effectively in decisions that affect their lives and how leaders can be more transparent and responsive. The forum reflects IPCS\u2019 vision of an informed citizenry and accountable leadership.',
      'IPCS will continue to support platforms that strengthen the relationship between citizens and those who govern.',
    ],
  },
  {
    slug: 'organizational-development-milestone',
    title: 'IPCS Marks Five Years of Community Engagement',
    category: 'Announcements',
    date: '2026-01-10',
    author: 'IPCS South Sudan',
    image: '/images/about-team.png',
    summary:
      'IPCS reflects on five years of work with communities, civil society, and partners across its core thematic areas.',
    content: [
      'IPCS marks five years of engagement with communities, civil society organizations, leaders, and partners. Over this period, the organization has worked across peacebuilding, organizational development, livelihoods, and child protection.',
      'The organization has supported training for church and local leaders, strengthened civil society organizations, and promoted citizen participation and accountability. This milestone is an opportunity to reflect and to look ahead.',
      'IPCS remains committed to fair, just, equal, inclusive, and sustainable positive change in partnership with the communities it serves.',
    ],
  },
]

export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug)
}

export function getSortedNews() {
  return [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getRelatedNews(slug: string, category: NewsCategory) {
  return getSortedNews()
    .filter((item) => item.slug !== slug)
    .sort((a, b) => (b.category === category ? 1 : 0) - (a.category === category ? 1 : 0))
    .slice(0, 3)
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
