# Portfólio — Bernardo Silva

Landing page pessoal em React + TypeScript + Vite, com componentes no padrão
[shadcn/ui](https://ui.shadcn.com), Tailwind CSS, modo claro/escuro e destaque
em lilás. Os projetos exibidos são reais, extraídos do GitHub
([@BernardoSsilva](https://github.com/BernardoSsilva)).

## Rodando localmente

```bash
npm install
npm run dev
```

Outros scripts:

- `npm run build` — build de produção (`tsc -b && vite build`)
- `npm run preview` — pré-visualiza o build de produção
- `npm run lint` — roda o Oxlint

## Customização

Toda a informação de contato e conteúdo dinâmico fica em `src/data/`:

- `src/data/site.ts` — nome, cargo, e-mail, link do GitHub e **número de
  WhatsApp** (`whatsappNumber`, formato internacional só dígitos: DDI + DDD +
  número).
- `src/data/projects.ts` — cards de projetos exibidos na seção "Projetos". Cada
  projeto pode ter um array `images` (múltiplas capturas de tela) usado no
  carrossel automático ao passar o mouse sobre o card.
- `src/data/skills.ts` — grupos de habilidades exibidos na seção "Sobre".
- `src/data/featured-projects.ts` — texto e capturas de tela do slider de
  projetos em destaque (LexNote, NAVLA e Nesso).

Capturas de tela ficam em `public/screenshots/` (formato `.webp`, otimizadas,
proporção 16:10 para não cortar o conteúdo nos cards).

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) com tema em variáveis CSS (lilás)
- Componentes no padrão [shadcn/ui](https://ui.shadcn.com) (`src/components/ui`)
- Componentes inspirados na [Aceternity UI](https://ui.aceternity.com), com
  [Framer Motion](https://www.framer.com/motion/):
  - `container-text-flip` — texto giratório no hero
  - `macbook-scroll` — MacBook cuja abertura acompanha o scroll (`useScroll` +
    `useTransform`), estilo fey.com, usado no slider de projetos em destaque
  - `infinite-moving-cards` — marquee horizontal infinito com as habilidades,
    na seção "Sobre" (pausa ao passar o mouse)
  - `card-spotlight` — brilho radial que segue o cursor sobre os cards de
    projeto (hook `useCardSpotlight`)
  - `three-d-card` — efeito "3D Card" nos cards de projeto: o card inteiro
    inclina em perspectiva conforme o cursor se move (`CardContainer`),
    com a imagem e o conteúdo em camadas de profundidade (`CardBody`/`CardItem`)
  - `hero-parallax` — fundo do Hero com camadas de capturas de tela reais
    em paralaxe (`useScroll` + `useTransform`/`useSpring`), que se afastam
    e desaparecem conforme o usuário rola a página
- `Dialog` (Radix UI) como base do `ImageLightbox`, usado para ampliar
  qualquer captura de tela do site com navegação entre imagens
- Ícones [lucide-react](https://lucide.dev)

## Slider de projetos em destaque

A seção `FeaturedProjects` (`src/components/featured-projects.tsx`) mostra um
slider com três projetos dentro de um `MacbookScroll`, com abas e setas para
alternar entre eles:

- **LexNote** — projeto pessoal, repositório privado (botão de WhatsApp para
  pedir demonstração).
- **NAVLA** — colaboração em equipe onde atuo como desenvolvedor backend
  (link para a aplicação em produção).
- **Nesso** — colaboração em equipe (3 desenvolvedores) ainda em
  desenvolvimento como full stack.

As capturas de tela do NAVLA e do Nesso foram recriadas em HTML/CSS a partir
de imagens de referência enviadas pelo autor (o ambiente de execução não
permite salvar imagens coladas diretamente no chat como arquivo) — ficam em
`public/screenshots/navla/` e `public/screenshots/nesso/`. O mesmo vale para
as capturas do projeto Imobiliária (`public/screenshots/imobiliaria/`),
recriadas a partir de prints do frontend reestruturado.

## Contato via WhatsApp e e-mail

Os botões de contato abrem:

- **WhatsApp**: `https://wa.me/<numero>?text=<mensagem>` (`getWhatsappLink` em `src/data/site.ts`)
- **E-mail**: link `mailto:` com assunto/corpo pré-preenchidos (`getMailtoLink` em `src/data/site.ts`)

O formulário na seção de contato apenas monta a mensagem e abre um desses
links — nenhum dado é enviado a um servidor.
