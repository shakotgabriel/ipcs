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
    slug: 'governance-civil-society-strengthening',
    title: 'Governance and Civil Society Strengthening',
    icon: 'building',
    shortDescription:
      'IPCS strengthens the institutional and technical capacity of civil society organisations, community-based organisations, local government authorities and traditional leadership structures.',
    description:
      'Our support includes organisational capacity assessments, governance and leadership training, programme and grant-management training, development of institutional systems and accountability mechanisms, and strengthening relationships between citizens and public institutions.',
    image: '/ipcslogo.png',
    overview:
      'IPCS helps institutions become more responsible, effective and responsive to the people they serve.',
    keyActivities: [
      'Organisational capacity assessments',
      'Governance and leadership training',
      'Programme and grant-management training',
      'Development of institutional systems, policies and procedures',
    ],
    targetGroups: [
      'Civil society organisations',
      'Community-based organisations',
      'Local government institutions',
      'Traditional leadership structures',
    ],
    expectedImpact:
      'More accountable institutions, stronger organisational systems and better relationships between citizens and the institutions that serve them.',
  },
  {
    slug: 'civic-education-access-information',
    title: 'Civic Education and Access to Information',
    icon: 'graduation',
    shortDescription:
      'Access to accurate information enables citizens to understand their rights, responsibilities and opportunities for participation.',
    description:
      'IPCS promotes access to information through civic education, basic learning programmes, community sensitisation, formal and informal education initiatives, radio discussions, public information programmes, community meetings, focus-group discussions and creative arts.',
    image: '/ipcslogo.png',
    overview:
      'These activities enable citizens to participate more confidently in democratic processes and community decision-making.',
    keyActivities: [
      'Civic education',
      'Basic learning programmes',
      'Radio discussions and public information programmes',
      'Creative arts, drama, puppetry and public events',
    ],
    targetGroups: [
      'Citizens and community members',
      'Youth and women',
      'Teachers and education officials',
      'Community groups and associations',
    ],
    expectedImpact:
      'Citizens who are better informed, more engaged and more confident in shaping decisions that affect their lives.',
  },
  {
    slug: 'human-rights-rule-of-law-access-to-justice',
    title: 'Human Rights, Rule of Law and Access to Justice',
    icon: 'users',
    shortDescription:
      'IPCS promotes awareness, protection and fulfilment of constitutional and human rights.',
    description:
      'Our interventions include human-rights education, gender equality and social inclusion, community legal awareness, referral and access-to-justice support, engagement with law-enforcement institutions and advocacy for marginalised and vulnerable people.',
    image: '/ipcslogo.png',
    overview:
      'Particular attention is given to women, children, people with disabilities, refugees, returnees and other groups facing exclusion or discrimination.',
    keyActivities: [
      'Human-rights education',
      'Community legal awareness',
      'Referral and access-to-justice support',
      'Strengthening community mechanisms for peaceful dispute resolution',
    ],
    targetGroups: [
      'Women and girls',
      'Children',
      'People with disabilities',
      'Refugees and returnees',
    ],
    expectedImpact:
      'Greater awareness of rights, stronger referral pathways and more equitable access to justice for vulnerable people.',
  },
  {
    slug: 'peacebuilding-conflict-transformation',
    title: 'Peacebuilding and Conflict Transformation',
    icon: 'handshake',
    shortDescription:
      'IPCS supports communities to prevent violence, resolve disputes and rebuild relationships damaged by conflict.',
    description:
      'Our peacebuilding work includes community dialogue, mediation and reconciliation, conflict analysis, peace education, engagement with traditional and religious leaders, youth and women’s participation in peace processes, and peace sports and cultural activities.',
    image: '/ipcslogo.png',
    overview:
      'We believe that sustainable peace must be locally owned and built through inclusive dialogue.',
    keyActivities: [
      'Community dialogue',
      'Mediation and reconciliation',
      'Peace education',
      'Peace sports, drama, music and cultural activities',
    ],
    targetGroups: [
      'Communities affected by conflict',
      'Traditional and religious leaders',
      'Youth and women',
      'Local peace actors',
    ],
    expectedImpact:
      'Reduced tensions, stronger social cohesion and locally owned mechanisms for managing conflict peacefully.',
  },
  {
    slug: 'protection',
    title: 'Protection',
    icon: 'shield',
    shortDescription:
      'IPCS works to improve the safety and dignity of vulnerable children, women, families and communities.',
    description:
      'Our protection interventions include child protection, gender-based violence prevention and response, psychosocial support, case management, family visits and referrals, explosive ordnance risk education, shelter support and community protection awareness.',
    image: '/ipcslogo.png',
    overview:
      'We integrate protection principles throughout our programmes and encourage communities to identify and respond to risks affecting vulnerable people.',
    keyActivities: [
      'Child protection',
      'Gender-based violence prevention and response',
      'Psychosocial support and case management',
      'Community protection awareness and referrals',
    ],
    targetGroups: [
      'Children and families',
      'Women and girls',
      'Vulnerable and conflict-affected communities',
      'School and community protection structures',
    ],
    expectedImpact:
      'Safer communities and stronger local protection systems for people at risk.',
  },
  {
    slug: 'livelihoods-economic-development',
    title: 'Livelihoods and Economic Development',
    icon: 'sprout',
    shortDescription:
      'Economic vulnerability increases exposure to exploitation, displacement and conflict.',
    description:
      'IPCS supports women, young people, returnees and vulnerable households through vocational and life-skills development, small-business and entrepreneurship support, income-generating activities, community savings and economic groups, livelihood recovery assistance and market-oriented training.',
    image: '/ipcslogo.png',
    overview:
      'Our aim is to strengthen self-reliance and reduce long-term dependency on humanitarian assistance.',
    keyActivities: [
      'Vocational and life-skills development',
      'Small-business and entrepreneurship support',
      'Community savings and economic groups',
      'Livelihood recovery assistance',
    ],
    targetGroups: [
      'Women',
      'Young people',
      'Returnees and vulnerable households',
      'Community savings groups',
    ],
    expectedImpact:
      'Greater self-reliance and improved household resilience for vulnerable families.',
  },
  {
    slug: 'agriculture-food-security-climate-resilience',
    title: 'Agriculture, Food Security and Climate Resilience',
    icon: 'sprout',
    shortDescription:
      'IPCS promotes sustainable agriculture, environmental protection and household food security.',
    description:
      'Our activities include agricultural training, support to smallholder farmers, food-production initiatives, climate-change awareness, environmental conservation, natural-resource management, community resilience and disaster preparedness, and sustainable livelihood practices.',
    image: '/ipcslogo.png',
    overview:
      'These interventions help communities adapt to environmental shocks while protecting the natural resources on which their livelihoods depend.',
    keyActivities: [
      'Agricultural training and support to smallholder farmers',
      'Food-production initiatives',
      'Climate-change awareness and environmental conservation',
      'Natural-resource management and disaster preparedness',
    ],
    targetGroups: [
      'Smallholder farmers',
      'Rural households',
      'Women and youth groups',
      'Community resilience groups',
    ],
    expectedImpact:
      'Improved food security, stronger climate resilience and more sustainable use of natural resources.',
  },
  {
    slug: 'health-mental-health-psychosocial-support',
    title: 'Health, Mental Health and Psychosocial Support',
    icon: 'users',
    shortDescription:
      'IPCS recognises the close relationship between health, dignity, protection and social stability.',
    description:
      'Our health-related interventions include maternal-health awareness, HIV and AIDS education, mental-health and psychosocial support, trauma healing, community counselling, referral for specialised care, health awareness and prevention, and support to vulnerable families affected by conflict and displacement.',
    image: '/ipcslogo.png',
    overview:
      'We work to reduce stigma and strengthen community-based support systems.',
    keyActivities: [
      'Maternal-health awareness',
      'HIV and AIDS education',
      'Mental-health and psychosocial support',
      'Trauma healing and community counselling',
    ],
    targetGroups: [
      'Conflict-affected families',
      'Women and children',
      'People experiencing trauma',
      'Communities needing health awareness support',
    ],
    expectedImpact:
      'Reduced stigma, stronger community support systems and better access to health-related information and referrals.',
  },
  {
    slug: 'return-reintegration',
    title: 'Return and Reintegration',
    icon: 'graduation',
    shortDescription:
      'IPCS supports refugees, returnees and displaced populations to rebuild their lives and reintegrate safely into communities.',
    description:
      'Our work includes community reception and reintegration support, peaceful coexistence between returnees and host communities, livelihood restoration, protection referrals, civic information, psychosocial support and community dialogue and reconciliation.',
    image: '/ipcslogo.png',
    overview:
      'We promote reintegration approaches that are dignified, inclusive and sensitive to local conflict dynamics.',
    keyActivities: [
      'Community reception and reintegration support',
      'Peaceful coexistence between returnees and host communities',
      'Livelihood restoration',
      'Protection referrals and civic information',
    ],
    targetGroups: [
      'Refugees',
      'Returnees',
      'Internally displaced people',
      'Host communities',
    ],
    expectedImpact:
      'Safer reintegration, stronger social cohesion and a more dignified path back into community life.',
  },
]

export function getThematicArea(slug: string) {
  return thematicAreas.find((area) => area.slug === slug)
}