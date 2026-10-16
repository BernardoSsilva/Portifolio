export type FeaturedProject = {
  slug: string
  name: string
  eyebrow: string
  tagline: string
  description: string
  tags: string[]
  heroScreenshot: string
  gallery: { src: string; label: string }[]
  status: 'private' | 'live' | 'in-progress'
  cta?: { label: string; href: string }
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'lexnote',
    name: 'LexNote',
    eyebrow: 'Projeto pessoal',
    tagline: 'Da conversa ao dossiê jurídico em menos de 2 minutos',
    description:
      'Aplicação jurídica que transforma o atendimento com o cliente em um dossiê completo: a IA organiza fatos, prazos e pendências automaticamente, enquanto agenda, clientes e cobranças ficam centralizados em um só lugar. Conta também com um assistente jurídico com IA, que responde dúvidas sobre direito brasileiro e sobre os próprios dados do escritório.',
    tags: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe', 'Cohere', 'Tailwind CSS', 'shadcn/ui'],
    heroScreenshot: '/screenshots/lexnote/dashboard.webp',
    gallery: [
      { src: '/screenshots/lexnote/atendimentos.webp', label: 'Atendimentos' },
      { src: '/screenshots/lexnote/agenda.webp', label: 'Agenda' },
      { src: '/screenshots/lexnote/pendencias.webp', label: 'Pendências' },
      { src: '/screenshots/lexnote/assistente.webp', label: 'Assistente jurídico com IA' },
      { src: '/screenshots/lexnote/login.webp', label: 'Login' },
    ],
    status: 'private',
  },
  {
    slug: 'navla',
    name: 'NAVLA',
    eyebrow: 'Colaboração — Desenvolvedor Backend',
    tagline: 'Sua barbearia não precisa parar de atender para agendar clientes',
    description:
      'Agendamento online para barbearias: o cliente escolhe serviço, profissional e horário sozinho, com confirmação automática. O painel reúne agenda por profissional, indicadores financeiros (faturamento, ticket médio, cancelamentos), fidelização de clientes e gestão de jornada da equipe. Atuo como desenvolvedor backend: API, banco de dados, autenticação, permissões e integração com o frontend.',
    tags: ['API REST', 'Banco de Dados', 'Autenticação', 'Permissões'],
    heroScreenshot: '/screenshots/navla/hero.webp',
    gallery: [
      { src: '/screenshots/navla/dashboard.webp', label: 'Painel do dia' },
      { src: '/screenshots/navla/agenda.webp', label: 'Agenda' },
      { src: '/screenshots/navla/barbeiros.webp', label: 'Barbeiros' },
      { src: '/screenshots/navla/clientes.webp', label: 'Clientes' },
      { src: '/screenshots/navla/servicos.webp', label: 'Serviços' },
    ],
    status: 'live',
    cta: { label: 'Ver aplicação', href: 'https://navla.vercel.app/' },
  },
]
