export type Project = {
  title: string
  description: string
  tags: string[]
  stars: number
  links: { label: string; url: string }[]
  images?: string[]
}

export const projects: Project[] = [
  {
    title: 'GestYou',
    description:
      'Sistema full stack de gestão financeira, organizando receitas e despesas com arquitetura escalável. Backend em .NET com Domain-Driven Design e testes unitários; frontend em Next.js com UI moderna.',
    tags: ['.NET', 'DDD', 'Next.js', 'TypeScript'],
    stars: 0,
    images: [
      '/screenshots/gestyou/transacoes.webp',
      '/screenshots/gestyou/pessoas.webp',
      '/screenshots/gestyou/total-por-pessoa.webp',
    ],
    links: [{ label: 'Repositório', url: 'https://github.com/BernardoSsilva/GestYou' }],
  },
  {
    title: 'Hackathon — Plataforma de Apoio a Desastres',
    description:
      'Plataforma criada em 48h para centralizar recursos de ajuda humanitária: abrigos, distribuição de alimentos e assistência médica. API em .NET com arquitetura DDD e PostgreSQL; frontend em React, Next.js e TailwindCSS.',
    tags: ['React', 'Next.js', 'TailwindCSS', '.NET', 'PostgreSQL'],
    stars: 2,
    images: [
      '/screenshots/hackathon/abigo.webp',
      '/screenshots/hackathon/home.webp',
      '/screenshots/hackathon/cadastro.webp',
    ],
    links: [
      { label: 'Frontend', url: 'https://github.com/BernardoSsilva/Hackathon-FrontEnd' },
      { label: 'Backend', url: 'https://github.com/BernardoSsilva/Hackathon-backend' },
    ],
  },
  {
    title: 'Forenser',
    description:
      'Portal para registro de boletins de ocorrência, denúncias anônimas, agendamentos e geração de retrato falado com IA, com frontend em React/TypeScript e API em C#/.NET.',
    tags: ['React', 'TypeScript', 'C#', '.NET'],
    stars: 3,
    images: [
      '/screenshots/forenser/dashboard.webp',
      '/screenshots/forenser/boletim.webp',
      '/screenshots/forenser/retrato-falado.webp',
      '/screenshots/forenser/denuncia.webp',
      '/screenshots/forenser/agendamento.webp',
      '/screenshots/forenser/login.webp',
    ],
    links: [
      { label: 'Frontend', url: 'https://github.com/BernardoSsilva/Forenser' },
      { label: 'Backend', url: 'https://github.com/BernardoSsilva/Forenser-backend' },
    ],
  },
  {
    title: 'Imobiliária',
    description:
      'Plataforma para gestão e divulgação de imóveis, com frontend em React/TypeScript e API REST em C#/.NET. Painel administrativo para cadastro de imóveis e usuários, além de site público para os clientes.',
    tags: ['React', 'TypeScript', 'C#', '.NET'],
    stars: 0,
    images: [
      '/screenshots/imobiliaria/home.webp',
      '/screenshots/imobiliaria/imoveis.webp',
      '/screenshots/imobiliaria/detalhes.webp',
      '/screenshots/imobiliaria/usuarios.webp',
      '/screenshots/imobiliaria/login.webp',
    ],
    links: [
      { label: 'Frontend', url: 'https://github.com/BernardoSsilva/Imobiliaria-Frontend' },
      { label: 'Backend', url: 'https://github.com/BernardoSsilva/imobiliaria-backend' },
    ],
  },
  {
    title: 'Help Desk',
    description:
      'Sistema de gestão de tickets de suporte, com dashboard de indicadores, histórico completo de cada chamado (status, prioridade, responsável e comentários) e gestão de usuários. API em Node.js/Express com Prisma e PostgreSQL; frontend em React com Material UI.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    stars: 0,
    images: [
      '/screenshots/helpdesk/dashboard.webp',
      '/screenshots/helpdesk/tickets.webp',
      '/screenshots/helpdesk/ticket-detail.webp',
      '/screenshots/helpdesk/meus-tickets.webp',
      '/screenshots/helpdesk/novo-ticket.webp',
      '/screenshots/helpdesk/usuarios.webp',
      '/screenshots/helpdesk/login.webp',
    ],
    links: [{ label: 'Repositório', url: 'https://github.com/BernardoSsilva/HelpDesk' }],
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
]
