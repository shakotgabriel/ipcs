export type ThematicArea = {
  slug: string
  title: string
  icon:
    | 'handshake'
    | 'building'
    | 'sprout'
    | 'shield'
    | 'users'
    | 'graduation'
  shortDescription: string
  description: string
  image: string
  overview: string
  keyActivities: string[]
  targetGroups: string[]
  expectedImpact: string
}

export const thematicAreas: ThematicArea[] = [
  {
    slug: 'conflict-peacebuilding',
    title: 'Conflict & Peacebuilding',
    icon: 'handshake',
    shortDescription:
      'IPCS works with communities, church leaders, local leaders, chiefs, and other stakeholders to promote peace, reconciliation, social cohesion, and the protection of vulnerable people.',
    description:
      'Over the past five years, IPCS has supported training for church leaders and local leaders, including chiefs, on child rights, gender-based violence, peacebuilding, reconciliation, and conflict transformation processes.',
    image: '/images/area-peacebuilding.png',
    overview:
      'IPCS supports communities to prevent, manage, and transform conflict through inclusive dialogue, reconciliation, and locally led peace processes. We strengthen the ability of traditional, religious, and community leaders to promote social cohesion and protect those most at risk.',
    keyActivities: [
      'Training church and local leaders on peacebuilding and conflict transformation',
      'Facilitating community dialogue and reconciliation processes',
      'Awareness raising on child rights and gender-based violence',
      'Supporting the protection of vulnerable community members',
    ],
    targetGroups: [
      'Church and faith leaders',
      'Chiefs and traditional authorities',
      'Community members and youth',
      'Women and vulnerable groups',
    ],
    expectedImpact:
      'Reduced community tensions, stronger social cohesion, and locally owned mechanisms for resolving disputes peacefully.',
  },
  {
    slug: 'organizational-development',
    title: 'Organizational Development',
    icon: 'building',
    shortDescription:
      'IPCS strengthens the capacity of civil society organizations, community-based organizations, and national NGOs to improve their systems, skills, and ability to serve communities effectively.',
    description:
      'IPCS has supported training and capacity strengthening in areas including case management, family tracing and reunification, organizational development, and institutional strengthening of NNGOs, CSOs, and CBOs.',
    image: '/images/area-organizational.png',
    overview:
      'IPCS helps civil society organizations build strong systems, sound governance, and the practical skills they need to deliver quality services and remain accountable to the communities they serve.',
    keyActivities: [
      'Institutional strengthening of NNGOs, CSOs, and CBOs',
      'Training on case management and family tracing and reunification',
      'Support for governance, systems, and organizational development',
      'Mentorship and coaching for emerging organizations',
    ],
    targetGroups: [
      'National NGOs (NNGOs)',
      'Civil society organizations (CSOs)',
      'Community-based organizations (CBOs)',
      'Emerging community groups',
    ],
    expectedImpact:
      'Stronger, better-governed organizations that can deliver quality services and sustain their work over time.',
  },
  {
    slug: 'livelihood-economic-development',
    title: 'Livelihood & Economic Development',
    icon: 'sprout',
    shortDescription:
      'IPCS supports communities with knowledge and skills that contribute to sustainable livelihoods, economic resilience, and improved household well-being.',
    description:
      'Activities include training on appropriate cultivation practices, honey production, and other livelihood-related skills that support economic empowerment and sustainable community development.',
    image: '/images/area-livelihood.png',
    overview:
      'IPCS equips households and community groups with practical skills and knowledge to strengthen their livelihoods, build economic resilience, and improve well-being in a sustainable way.',
    keyActivities: [
      'Training on appropriate cultivation practices',
      'Support for honey production and value addition',
      'Skills development for sustainable livelihoods',
      'Promotion of economic empowerment for households',
    ],
    targetGroups: [
      'Smallholder farmers',
      'Women and youth groups',
      'Households seeking economic resilience',
      'Community cooperatives',
    ],
    expectedImpact:
      'Improved household incomes, greater economic resilience, and more sustainable community livelihoods.',
  },
  {
    slug: 'child-protection',
    title: 'Child Protection',
    icon: 'shield',
    shortDescription:
      'IPCS promotes the rights, safety, and well-being of children through awareness, case management, and family tracing and reunification.',
    description:
      'IPCS works with communities and partners to protect children, prevent abuse and neglect, and support case management and family tracing and reunification for separated and vulnerable children.',
    image: '/images/project-child-protection.png',
    overview:
      'IPCS works to keep children safe by raising awareness of child rights, strengthening protection systems, and supporting case management and family tracing and reunification for separated and vulnerable children.',
    keyActivities: [
      'Awareness raising on child rights and protection',
      'Case management for vulnerable children',
      'Family tracing and reunification support',
      'Training community actors on safeguarding',
    ],
    targetGroups: [
      'Children at risk and separated children',
      'Parents and caregivers',
      'Community protection actors',
      'Local leaders and service providers',
    ],
    expectedImpact:
      'Safer environments for children, reunited families, and stronger community-based child protection systems.',
  },
  {
    slug: 'citizen-participation-accountability',
    title: 'Citizen Participation & Accountability',
    icon: 'users',
    shortDescription:
      'IPCS promotes access to information, active citizen participation, and accountable, responsive governance.',
    description:
      'IPCS supports citizens to access information, engage constructively with decision-makers, and hold leaders accountable, while encouraging leadership that is transparent and responsive to community needs.',
    image: '/images/area-participation.png',
    overview:
      'IPCS strengthens the relationship between citizens and those who govern by promoting access to information, effective participation, and accountable, transparent leadership.',
    keyActivities: [
      'Civic education and awareness on rights and responsibilities',
      'Facilitating citizen engagement with decision-makers',
      'Promoting access to information and transparency',
      'Supporting accountability and feedback mechanisms',
    ],
    targetGroups: [
      'Citizens and community members',
      'Youth and women',
      'Community leaders and duty bearers',
      'Local institutions',
    ],
    expectedImpact:
      'More informed citizens, greater participation in decision-making, and more accountable and responsive leadership.',
  },
  {
    slug: 'community-capacity-building',
    title: 'Community Capacity Building',
    icon: 'graduation',
    shortDescription:
      'IPCS builds the knowledge and skills of communities and groups so they can lead their own development.',
    description:
      'Through training, mentorship, and practical support, IPCS strengthens the capacity of community groups to plan, organize, and implement initiatives that respond to their own priorities.',
    image: '/images/news-training.png',
    overview:
      'IPCS invests in the skills, knowledge, and confidence of community members and groups so they can identify their own priorities and lead sustainable development in their communities.',
    keyActivities: [
      'Skills and knowledge training for community groups',
      'Mentorship and coaching for local leaders',
      'Support for community planning and organization',
      'Facilitation of community-led initiatives',
    ],
    targetGroups: [
      'Community groups and associations',
      'Local leaders and volunteers',
      'Women and youth networks',
      'Community-based organizations',
    ],
    expectedImpact:
      'Empowered communities that can plan, lead, and sustain their own development initiatives.',
  },
]

export function getThematicArea(slug: string) {
  return thematicAreas.find((area) => area.slug === slug)
}
