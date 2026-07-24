export const projectCategories = [
  'Child Protection',
  'Peacebuilding',
  'Organizational Development',
  'Civil Society Strengthening',
  'Livelihood Development',
  'Capacity Building',
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type ProjectStatus = 'Ongoing' | 'Completed' | 'Upcoming'

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  status: ProjectStatus
  location: string
  targetGroup: string
  image: string
  shortDescription: string
  overview: string
  problem: string
  objectives: string[]
  activities: string[]
  beneficiaries: string[]
  partners: string[]
  results: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'child-protection',
    title: 'Child Protection',
    category: 'Child Protection',
    status: 'Ongoing',
    location: 'South Sudan',
    targetGroup: 'Children at risk, families, and caregivers',
    image: '/images/project-child-protection.png',
    shortDescription:
      'Protecting the rights and well-being of children through awareness, case management, and family tracing and reunification.',
    overview:
      'The Child Protection project works with communities, families, and partners to keep children safe, prevent abuse and neglect, and support separated and vulnerable children through case management and family tracing and reunification.',
    problem:
      'Conflict, displacement, and hardship have left many children in South Sudan separated from their families, exposed to abuse, or without adequate protection and support.',
    objectives: [
      'Raise community awareness of child rights and protection',
      'Strengthen community-based child protection systems',
      'Provide case management for vulnerable children',
      'Support family tracing and reunification for separated children',
    ],
    activities: [
      'Community awareness sessions on child rights and safeguarding',
      'Identification and case management of vulnerable children',
      'Family tracing and reunification processes',
      'Training of community protection actors and local leaders',
    ],
    beneficiaries: [
      'Separated and vulnerable children',
      'Parents and caregivers',
      'Community child protection committees',
      'Local leaders and service providers',
    ],
    partners: [
      'Community-based organizations',
      'Local authorities',
      'Development partners',
    ],
    results: [
      'Increased community awareness of child rights',
      'Vulnerable children supported through case management',
      'Separated children traced and reunified with families',
    ],
    featured: true,
  },
  {
    slug: 'capacity-strengthening-cso',
    title: 'Capacity Strengthening of Civil Society Organizations',
    category: 'Civil Society Strengthening',
    status: 'Ongoing',
    location: 'South Sudan',
    targetGroup: 'CSOs, CBOs, and national NGOs',
    image: '/images/project-cso-capacity.png',
    shortDescription:
      'Strengthening the systems, skills, and governance of civil society organizations so they can serve communities effectively.',
    overview:
      'This project strengthens the institutional capacity of civil society organizations, community-based organizations, and national NGOs, helping them build sound systems, good governance, and the skills needed to deliver quality services.',
    problem:
      'Many local organizations have the commitment to serve their communities but lack the systems, governance structures, and technical skills needed to operate effectively and sustainably.',
    objectives: [
      'Strengthen governance and management systems',
      'Build technical and organizational skills',
      'Improve service delivery to communities',
      'Support long-term organizational sustainability',
    ],
    activities: [
      'Organizational capacity assessments',
      'Training on governance, systems, and management',
      'Mentorship and coaching for organizations',
      'Support in developing policies and procedures',
    ],
    beneficiaries: [
      'National NGOs (NNGOs)',
      'Civil society organizations (CSOs)',
      'Community-based organizations (CBOs)',
      'The communities these organizations serve',
    ],
    partners: [
      'National NGOs',
      'Community-based organizations',
      'Development partners',
    ],
    results: [
      'Organizations with stronger governance and systems',
      'Improved technical and management skills',
      'Better and more accountable service delivery',
    ],
    featured: true,
  },
  {
    slug: 'capacity-building-moge',
    title: 'Capacity Building | MOGE',
    category: 'Capacity Building',
    status: 'Ongoing',
    location: 'South Sudan',
    targetGroup: 'Institutional and community stakeholders',
    image: '/images/project-capacity-moge.png',
    shortDescription:
      'Building the capacity of institutional and community stakeholders to plan, coordinate, and deliver effectively.',
    overview:
      'The Capacity Building (MOGE) project focuses on strengthening the knowledge, skills, and coordination of institutional and community stakeholders so they can plan and deliver services more effectively.',
    problem:
      'Institutions and community stakeholders often need additional knowledge, skills, and coordination support to plan, manage, and deliver services that respond to community needs.',
    objectives: [
      'Strengthen the skills of institutional stakeholders',
      'Improve planning and coordination',
      'Enhance effective and accountable service delivery',
      'Promote collaboration between stakeholders',
    ],
    activities: [
      'Capacity building training and workshops',
      'Support for planning and coordination processes',
      'Facilitation of stakeholder collaboration',
      'Follow-up mentorship and technical support',
    ],
    beneficiaries: [
      'Institutional stakeholders',
      'Community representatives',
      'Local service providers',
    ],
    partners: ['Institutional partners', 'Community stakeholders'],
    results: [
      'Improved skills among institutional stakeholders',
      'Stronger planning and coordination',
      'More effective and accountable service delivery',
    ],
    featured: true,
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

// Maps a thematic-area slug to the project categories most relevant to it.
const areaToCategories: Record<string, ProjectCategory[]> = {
  'conflict-peacebuilding': ['Peacebuilding'],
  'organizational-development': [
    'Organizational Development',
    'Civil Society Strengthening',
  ],
  'livelihood-economic-development': ['Livelihood Development'],
  'child-protection': ['Child Protection'],
  'citizen-participation-accountability': ['Civil Society Strengthening'],
  'community-capacity-building': ['Capacity Building'],
}

export function getProjectsByArea(areaSlug: string) {
  const categories = areaToCategories[areaSlug] ?? []
  const matches = projects.filter((p) => categories.includes(p.category))
  // Fall back to featured projects so every area shows relevant work.
  if (matches.length > 0) return matches
  return projects.filter((p) => p.featured)
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured)
}

export function getRelatedProjects(slug: string, category: ProjectCategory) {
  const related = projects.filter(
    (project) => project.slug !== slug && project.category === category,
  )
  if (related.length >= 2) return related.slice(0, 2)
  const others = projects.filter(
    (project) => project.slug !== slug && !related.includes(project),
  )
  return [...related, ...others].slice(0, 2)
}
