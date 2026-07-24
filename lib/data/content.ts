// Placeholder partners — replace labels/logos with verified partner information.
export type Partner = {
  name: string
  type: string
}

export const partners: Partner[] = [
  { name: 'Community Partner', type: 'Community' },
  { name: 'Civil Society Partner', type: 'Civil Society' },
  { name: 'Government Institution', type: 'Government' },
  { name: 'Faith-Based Partner', type: 'Faith Community' },
  { name: 'Development Partner', type: 'Development' },
  { name: 'Local Leadership', type: 'Community Leaders' },
]

export type ImpactStat = {
  value: string
  label: string
}

// Editable placeholder metrics — replace with verified statistics.
export const impactStats: ImpactStat[] = [
  { value: '5+', label: 'Years of Community Engagement' },
  { value: '6', label: 'Core Thematic Areas' },
  { value: 'Multiple', label: 'Communities Reached' },
  { value: 'Growing', label: 'Stronger Civil Society Organizations' },
]

export const orgValues = [
  {
    title: 'Inclusion',
    description:
      'We ensure that everyone, especially the marginalized, has a place and a voice in our work.',
  },
  {
    title: 'Equality',
    description:
      'We treat all people with fairness and work towards equal opportunities for all.',
  },
  {
    title: 'Accountability',
    description:
      'We are answerable to the communities we serve and to our partners.',
  },
  {
    title: 'Integrity',
    description:
      'We act honestly, transparently, and ethically in everything we do.',
  },
  {
    title: 'Participation',
    description:
      'We believe change is strongest when people actively shape decisions that affect them.',
  },
  {
    title: 'Peace',
    description:
      'We are committed to reconciliation, social cohesion, and lasting peace.',
  },
  {
    title: 'Justice',
    description:
      'We stand for fairness, rights, and a just society for all people.',
  },
  {
    title: 'Sustainability',
    description:
      'We pursue change that lasts and that communities can sustain themselves.',
  },
]

export const approachItems = [
  {
    title: 'Partnerships',
    description:
      'Working with communities, government, civil society, and development partners for shared impact.',
  },
  {
    title: 'Community Engagement',
    description:
      'Listening to communities and involving them in shaping and leading their own development.',
  },
  {
    title: 'Capacity Building',
    description:
      'Strengthening the skills, systems, and knowledge of organizations and community groups.',
  },
  {
    title: 'Advocacy',
    description:
      'Promoting rights, participation, and accountable, responsive leadership.',
  },
  {
    title: 'Information Sharing',
    description:
      'Promoting access to information so citizens can make informed decisions.',
  },
  {
    title: 'Peacebuilding',
    description:
      'Supporting reconciliation, social cohesion, and locally led peace processes.',
  },
  {
    title: 'Institutional Strengthening',
    description:
      'Helping organizations build sound governance and sustainable systems.',
  },
  {
    title: 'Livelihood Development',
    description:
      'Supporting sustainable livelihoods and improved household well-being.',
  },
]

// Editable timeline — IPCS can add verified milestones here.
export type Milestone = {
  year: string
  title: string
  description: string
}

export const milestones: Milestone[] = [
  {
    year: 'Foundation',
    title: 'IPCS Established',
    description:
      'IPCS is founded to promote informed citizenship, participation, accountable governance, and community well-being.',
  },
  {
    year: 'Early Years',
    title: 'Peacebuilding with Community Leaders',
    description:
      'IPCS begins training church and local leaders, including chiefs, on child rights, gender-based violence, peacebuilding, and reconciliation.',
  },
  {
    year: 'Growth',
    title: 'Strengthening Civil Society',
    description:
      'IPCS expands its work in organizational development and institutional strengthening of NNGOs, CSOs, and CBOs.',
  },
  {
    year: 'Today',
    title: 'Sustainable Community Development',
    description:
      'IPCS works across peacebuilding, organizational development, livelihoods, child protection, and citizen participation.',
  },
]
