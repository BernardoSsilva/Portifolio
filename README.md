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
  WhatsApp**. Antes de publicar, troque `whatsappNumber` pelo número real no
  formato internacional, só dígitos (ex: `5548999999999`).
- `src/data/projects.ts` — cards de projetos exibidos na seção "Projetos".
- `src/data/skills.ts` — grupos de habilidades exibidos na seção "Sobre".
- `src/data/lexnote.ts` — texto e capturas de tela da seção de destaque do LexNote.

Capturas de tela ficam em `public/screenshots/` (formato `.webp`, otimizadas).

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) com tema em variáveis CSS (lilás)
- Componentes no padrão [shadcn/ui](https://ui.shadcn.com) (`src/components/ui`)
- Componentes inspirados na [Aceternity UI](https://ui.aceternity.com), com
  [Framer Motion](https://www.framer.com/motion/): `container-text-flip` (texto
  giratório no hero) e `macbook-scroll` (MacBook animado ao rolar a página,
  estilo fey.com, usado na seção de destaque do LexNote)
- Ícones [lucide-react](https://lucide.dev)

## Seção de destaque: LexNote

A seção `LexNoteShowcase` (`src/components/lexnote-showcase.tsx`) mostra
capturas de tela reais do [LexNote](https://github.com/BernardoSsilva/LexNote)
dentro de um `MacbookScroll` (desktop) com fallback estático em telas
pequenas, além de uma galeria com outras telas do produto. Como o repositório
é privado, o card não linka para o GitHub — em vez disso oferece um botão de
WhatsApp para pedir uma demonstração.

## Contato via WhatsApp e e-mail

Os botões de contato abrem:

- **WhatsApp**: `https://wa.me/<numero>?text=<mensagem>` (`getWhatsappLink` em `src/data/site.ts`)
- **E-mail**: link `mailto:` com assunto/corpo pré-preenchidos (`getMailtoLink` em `src/data/site.ts`)

O formulário na seção de contato apenas monta a mensagem e abre um desses
links — nenhum dado é enviado a um servidor.
