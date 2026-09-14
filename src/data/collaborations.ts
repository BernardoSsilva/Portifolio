export type Collaboration = {
  name: string
  role: string
  status: 'Em produção' | 'Em desenvolvimento'
  description: string
  tags: string[]
  image?: string
  link?: string
}

export const collaborations: Collaboration[] = [
  {
    name: 'NAVLA',
    role: 'Desenvolvedor Backend',
    status: 'Em produção',
    description:
      'Atuo como desenvolvedor backend: toda a camada de API, modelagem de banco de dados, permissões, rotas, autenticação e integração com o frontend, desenvolvido em equipe com outro colaborador.',
    tags: ['API REST', 'Banco de Dados', 'Autenticação', 'Permissões'],
    link: 'https://navla.vercel.app/',
  },
  {
    name: 'Nesso',
    role: 'Desenvolvedor Full Stack',
    status: 'Em desenvolvimento',
    description:
      'Projeto em equipe com outros 2 desenvolvedores, ainda em construção. Atuo nos módulos de registro de usuários, clientes, relacionamento, permissões e audit logs, entre outras frentes em desenvolvimento.',
    tags: ['Full Stack', 'Permissões', 'Audit Log'],
  },
]
