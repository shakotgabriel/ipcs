export type Partner = {
  name: string
  type: string
}

export const partners: Partner[] = [
  { name: 'European Commission', type: 'Donor' },
  { name: 'Oxfam Novib', type: 'Development Partner' },
  { name: 'International HIV/AIDS Alliance', type: 'Development Partner' },
  { name: 'UNICEF', type: 'UN Agency' },
  { name: 'World Bank', type: 'Multilateral Partner' },
  { name: 'PACT Sudan', type: 'Development Partner' },
]

export type ImpactStat = {
  value: string
  label: string
}

export const impactStats: ImpactStat[] = [
  { value: '1999', label: 'Established' },
  { value: '10+', label: 'States and Administrative Areas Served' },
  { value: '30', label: 'Civil Society Organisations Strengthened' },
  { value: '120', label: 'Teachers and Parents Trained Annually' },
]

export const serviceValues = [
  {
    title: 'Supporting Civil Society Advancement',
    description:
      'We strengthen organisations, networks and community structures so that they can serve people effectively and sustainably.',
  },
  {
    title: 'Empowerment',
    description:
      'We equip individuals and communities with knowledge, confidence, skills and opportunities to shape their own development.',
  },
  {
    title: 'Respect for Human Rights',
    description:
      'We uphold the dignity, equality and fundamental rights of every person.',
  },
  {
    title: 'Vision for Sustainable Democracy',
    description:
      'We promote inclusive governance systems in which citizens participate and institutions remain accountable.',
  },
  {
    title: 'Integrity',
    description:
      'We act honestly, responsibly and transparently in the management of programmes, partnerships and resources.',
  },
  {
    title: 'Cooperation and Teamwork',
    description:
      'We believe sustainable change is achieved through collaboration, mutual respect and shared responsibility.',
  },
  {
    title: 'Endurance',
    description:
      'We remain committed to communities even in difficult, insecure and rapidly changing environments.',
  },
]

export const strategicObjectives = [
  'Promote the values, institutions and practices of democratic governance.',
  'Strengthen relationships among citizens, communities, civil society organisations, government institutions and traditional leaders.',
  'Create platforms for dialogue, participation and collective action for the public good.',
  'Promote disciplined, transparent and accountable service delivery within civil society and local government institutions.',
  'Strengthen organisational systems, policies and capacities for effective programme implementation.',
  'Improve the resilience, safety and well-being of vulnerable and conflict-affected communities.',
]

export const philosophyPoints = [
  'Investment in good leadership, responsible citizenship and accountable institutions is an investment in the future of the nation.',
  'Citizens must have access to information, understand their rights and responsibilities and participate meaningfully in decisions that affect their lives.',
  'Leaders and public institutions must be transparent, responsive and accountable to the people they serve.',
]

export const presenceOffices = [
  {
    id: 'national-office-juba',
    title: 'National Office',
    description: 'Hai Tarawa, Juba, within the African Inland Church compound.',
  },
  {
    id: 'coordination-office-yei',
    title: 'Coordination Office',
    description: 'Yei, Central Equatoria State.',
  },
  {
    id: 'coordination-office-torit',
    title: 'Coordination Office',
    description: 'Torit, Eastern Equatoria State.',
  },
]

export const whoWeServe = [
  'Civil society organisations',
  'Community-based organisations',
  'Local government institutions',
  'Elected representatives',
  'Women’s groups',
  'Youth groups',
  'Traditional leaders',
  'Religious leaders',
  'Teachers and education officials',
  'Children and parents',
  'Refugees and returnees',
  'Internally displaced people',
  'Law-enforcement agencies',
  'People with disabilities',
  'Farmers and livelihood groups',
  'Business and community associations',
]

export const workMethods = [
  'Training workshops',
  'Community dialogues',
  'Mediation and reconciliation meetings',
  'Radio talk shows',
  'Public-awareness campaigns',
  'Focus-group discussions',
  'Theatre, drama, music and puppetry',
  'Counselling and interviews',
  'Psychosocial support',
  'Case management',
  'Family and household visits',
  'Information, education and communication materials',
  'Needs assessments',
  'Baseline studies',
  'Community consultations',
  'Monitoring, evaluation and learning',
]

export const contributionItems = [
  'Helping communities identify and prioritise their needs',
  'Advocating for support to address community concerns',
  'Strengthening local leadership and civil society institutions',
  'Expanding access to civic and human-rights information',
  'Supporting community participation in governance',
  'Facilitating peacebuilding and conflict-transformation processes',
  'Supporting livelihoods for women and young people',
  'Providing psychosocial support and trauma-healing services',
  'Promoting access to justice for marginalised groups',
  'Supporting child protection and gender-based violence prevention',
  'Promoting agricultural production and food security',
  'Raising awareness of environmental protection and climate change',
  'Supporting communities affected by displacement and return',
]

export const impactAchievements = [
  'Training 15 national education officials in accountable governance',
  'Strengthening the organisational capacity of 30 civil society organisations',
  'Training 52 education officials from 13 states in Juba and Wau',
  'Training approximately 120 teachers and parents annually on child rights and human rights',
  'Strengthening local leaders’ knowledge of governance and accountability',
  'Building the programme-management and grant-management capacity of civil society organisations',
  'Training 45 traditional chiefs, youth representatives and women leaders on child protection, gender-based violence and mine-risk education',
  'Supporting six schools annually with protection and rights awareness',
  'Establishing and strengthening social clubs using drama, music, dance and peace sports',
  'Successfully implementing, reporting and accounting for projects funded by national and international partners',
]

export const organizationalStrengths = [
  'An active and defined Board of Directors',
  'Experienced management and technical personnel',
  'A nationally rooted identity and long-standing community relationships',
  'An organisational constitution and governance framework',
  'Institutional policies and procedures',
  'A strategic plan',
  'Established office facilities',
  'Experience managing donor-supported programmes',
  'Organisational assets and operational systems',
  'Experience working in fragile and conflict-affected settings',
  'A multidisciplinary team of national and international personnel',
]

export const operatingChallenges = [
  'Political instability and insecurity',
  'Restricted access to some programme areas',
  'Short-term and unpredictable project funding',
  'High staff turnover',
  'Competition for experienced personnel',
  'Dependence on donor funding',
  'Insufficient administrative and core-cost support',
  'High community expectations',
  'Rising costs caused by inflation',
  'The limited sustainability of volunteer-based staffing',
  'Demanding donor eligibility and compliance conditions',
]

export const partnershipExperience = [
  'European Commission',
  'Oxfam Novib',
  'International HIV/AIDS Alliance',
  'UNICEF',
  'World Bank',
  'PACT Sudan',
  'Interchurch Organisation for Development Cooperation',
  'Norwegian People’s Aid',
  'Diakonia',
  'ZOA Refugee Care',
  'Mensen met een Missie',
  'Lattanzio KIBS',
  'International Rescue Committee',
  'United Nations Development Programme',
  'MS Sudan',
]

export type Milestone = {
  year: string
  title: string
  description: string
}

export const milestones: Milestone[] = [
  {
    year: '1999',
    title: 'IPCS Established',
    description:
      'IPCS is established during the civil war in Sudan to respond to the need for stronger civil society capacity and accountable community leadership.',
  },
  {
    year: '2000s',
    title: 'Expanding Community-Led Programming',
    description:
      'The organisation broadens its work into civic education, human rights, peacebuilding, protection, livelihoods and humanitarian support.',
  },
  {
    year: 'Today',
    title: 'Working Across South Sudan',
    description:
      'IPCS continues to serve communities through direct implementation, local partnerships and strategic collaboration across the country.',
  },
]
