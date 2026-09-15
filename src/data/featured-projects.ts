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
      'Aplicação jurídica que transforma o atendimento com o cliente em um dossiê completo: a IA organiza fatos, prazos e pendências automaticamente, enquanto agenda, clientes e cobranças ficam centralizados em um só lugar.',
    tags: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'shadcn/ui'],
    heroScreenshot: '/screenshots/lexnote/clientes.webp',
    gallery: [
      { src: '/screenshots/lexnote/atendimentos.webp', label: 'Atendimentos' },
      { src: '/screenshots/lexnote/agenda.webp', label: 'Agenda' },
      { src: '/screenshots/lexnote/pendencias.webp', label: 'Documentos & Pendências' },
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
      'Agendamento online para barbearias, com confirmação automática e gestão completa da agenda. Atuo como desenvolvedor backend: toda a camada de API, banco de dados, permissões, rotas, autenticação e integração com o frontend.',
    tags: ['API REST', 'Banco de Dados', 'Autenticação', 'Permissões'],
    heroScreenshot: '/screenshots/navla/hero.webp',
    gallery: [{ src: '/screenshots/navla/dashboard.webp', label: 'Painel do dia' }],
    status: 'live',
    cta: { label: 'Ver aplicação', href: 'https://navla.vercel.app/' },
  },
  {
    slug: 'nesso',
    name: 'Nesso',
    eyebrow: 'Colaboração — Full Stack (equipe de 3)',
    tagline: 'Gestão jurídica de prazos, horas e faturamento',
    description:
      'Projeto em equipe com outros 2 desenvolvedores, ainda em construção. Atuo nos módulos de registro de usuários, clientes, relacionamento, permissões e audit logs, entre outras frentes em desenvolvimento.',
    tags: ['Full Stack', 'Permissões', 'Audit Log'],
    heroScreenshot: '/screenshots/nesso/hero.webp',
    gallery: [],
    status: 'in-progress',
  },
]
