import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getWhatsappLink, siteConfig } from '@/data/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="bg-lilac-glow pointer-events-none absolute inset-x-0 top-0 h-[640px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-32 hidden size-72 animate-float rounded-full bg-primary/20 blur-3xl md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 hidden size-64 animate-float rounded-full bg-primary/10 blur-3xl md:block [animation-delay:1.5s]"
      />

      <div className="container relative grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
            <Sparkles className="size-4 text-primary" />
            Disponível para novas oportunidades
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Olá, eu sou{' '}
            <span className="text-gradient-lilac">{siteConfig.name}</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            {siteConfig.role}. {siteConfig.tagline} Gosto de transformar problemas
            reais em produtos bem arquitetados, do banco de dados à interface.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                Ver projetos
                <ArrowRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={getWhatsappLink()} target="_blank" rel="noreferrer">
                <MessageCircle />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto animate-fade-up [animation-delay:150ms] [animation-fill-mode:both]">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl" />
          <div className="relative flex aspect-square w-64 items-center justify-center overflow-hidden rounded-[2.5rem] border border-border/60 bg-card shadow-2xl shadow-primary/20 sm:w-80">
            <span className="text-gradient-lilac text-6xl font-extrabold">
              {siteConfig.name
                .split(' ')
                .map((part) => part[0])
                .join('')}
            </span>
            <img
              src={siteConfig.avatarUrl}
              alt={siteConfig.name}
              className="absolute inset-0 size-full object-cover"
              loading="eager"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
