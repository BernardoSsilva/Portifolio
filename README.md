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

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) com tema em variáveis CSS (lilás)
- Componentes no padrão [shadcn/ui](https://ui.shadcn.com) (`src/components/ui`)
- Ícones [lucide-react](https://lucide.dev)

## Contato via WhatsApp e e-mail

Os botões de contato abrem:

- **WhatsApp**: `https://wa.me/<numero>?text=<mensagem>` (`getWhatsappLink` em `src/data/site.ts`)
- **E-mail**: link `mailto:` com assunto/corpo pré-preenchidos (`getMailtoLink` em `src/data/site.ts`)

O formulário na seção de contato apenas monta a mensagem e abre um desses
links — nenhum dado é enviado a um servidor.
