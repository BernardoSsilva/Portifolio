export type Project = {
  title: string
  description: string
  tags: string[]
  stars: number
  links: { label: string; url: string }[]
  image?: string
}

export const projects: Project[] = [
  {
    title: 'GestYou',
    description:
      'Sistema full stack de gestão financeira, organizando receitas e despesas com arquitetura escalável. Backend em .NET com Domain-Driven Design e testes unitários; frontend em Next.js com UI moderna.',
    tags: ['.NET', 'DDD', 'Next.js', 'TypeScript'],
    stars: 0,
    image: '/screenshots/gestyou/transacoes.webp',
    links: [{ label: 'Repositório', url: 'https://github.com/BernardoSsilva/GestYou' }],
  },
  {
    title: 'Hackathon — Plataforma de Apoio a Desastres',
    description:
      'Plataforma criada em 48h para centralizar recursos de ajuda humanitária: abrigos, distribuição de alimentos e assistência médica. API em .NET com arquitetura DDD e PostgreSQL; frontend em React, Next.js e TailwindCSS.',
    tags: ['React', 'Next.js', 'TailwindCSS', '.NET', 'PostgreSQL'],
    stars: 2,
    image: '/screenshots/hackathon/abigo.webp',
    links: [
      { label: 'Frontend', url: 'https://github.com/BernardoSsilva/Hackathon-FrontEnd' },
      { label: 'Backend', url: 'https://github.com/BernardoSsilva/Hackathon-backend' },
    ],
  },
  {
    title: 'Forenser',
    description:
      'Aplicação para gestão de processos e laudos periciais, com frontend em React/TypeScript e API em C#/.NET.',
    tags: ['React', 'TypeScript', 'C#', '.NET'],
    stars: 3,
    links: [
      { label: 'Frontend', url: 'https://github.com/BernardoSsilva/Forenser' },
      { label: 'Backend', url: 'https://github.com/BernardoSsilva/Forenser-backend' },
    ],
  },
  {
    title: 'Imobiliária',
    description:
      'Plataforma para gestão e divulgação de imóveis, com frontend em React/TypeScript e API REST em C#/.NET.',
    tags: ['React', 'TypeScript', 'C#', '.NET'],
    stars: 0,
    links: [
      { label: 'Frontend', url: 'https://github.com/BernardoSsilva/Imobiliaria-Frontend' },
      { label: 'Backend', url: 'https://github.com/BernardoSsilva/imobiliaria-backend' },
    ],
  },
  {
    title: 'StoryTrails API',
    description:
      'API REST para o app Story Trails, com uma implementação em .NET e outra em Python/Django, explorando diferentes stacks para o mesmo domínio.',
    tags: ['Python', 'Django', '.NET', 'REST API'],
    stars: 0,
    links: [
      { label: 'API .NET', url: 'https://github.com/BernardoSsilva/StoryTrails_backEnd' },
      { label: 'API Python', url: 'https://github.com/BernardoSsilva/StoryTrailsPython' },
    ],
  },
  {
    title: 'Pill Reminder API',
    description:
      'API desenvolvida em C#/.NET com Entity Framework Core para apoiar um app de lembretes de medicação em React Native, projeto de conclusão de curso.',
    tags: ['C#', '.NET', 'Entity Framework', 'API REST'],
    stars: 1,
    links: [{ label: 'Repositório', url: 'https://github.com/BernardoSsilva/PillReminderBackend' }],
  },
]
