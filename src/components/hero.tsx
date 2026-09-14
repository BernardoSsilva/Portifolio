import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

import { ContainerTextFlip } from '@/components/ui/container-text-flip'
import { Button } from '@/components/ui/button'
import { getWhatsappLink, siteConfig } from '@/data/site'

const FLIP_WORDS = ['aplicações web', 'APIs robustas', 'dashboards', 'dossiês com IA', 'produtos full stack']

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

      <div className="container relative flex flex-col items-center py-20 text-center">
        <div className="animate-fade-up flex max-w-3xl flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
            <Sparkles className="size-4 text-primary" />
            Disponível para novas oportunidades
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Olá, eu sou{' '}
            <span className="text-gradient-lilac">{siteConfig.name}</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xl font-medium text-muted-foreground sm:text-2xl">
            <span>Eu construo</span>
            <ContainerTextFlip words={FLIP_WORDS} />
          </div>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {siteConfig.role}. Gosto de transformar problemas reais em produtos bem
            arquitetados, do banco de dados à interface.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  )
}
