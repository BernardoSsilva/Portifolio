import { ArrowUpRight, ChevronLeft, ChevronRight, Lock, Maximize2, MessageCircle, Rocket, Sparkles, Wrench } from 'lucide-react'
import { useState } from 'react'

import { type LightboxImage, ImageLightbox } from '@/components/image-lightbox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import { featuredProjects } from '@/data/featured-projects'
import { getWhatsappLink } from '@/data/site'
import { cn } from '@/lib/utils'

const statusMeta = {
  private: { icon: Lock, label: 'Repositório privado' },
  live: { icon: Rocket, label: 'Em produção' },
  'in-progress': { icon: Wrench, label: 'Em desenvolvimento' },
} as const

export function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const active = featuredProjects[activeIndex]
  const StatusIcon = statusMeta[active.status].icon

  const images: LightboxImage[] = [
    { src: active.heroScreenshot, alt: `${active.name} — tela principal`, caption: active.name },
    ...active.gallery.map((shot) => ({
      src: shot.src,
      alt: `${active.name} — ${shot.label}`,
      caption: shot.label,
    })),
  ]

  function selectProject(index: number) {
    setActiveIndex(index)
    setLightboxIndex(null)
  }

  return (
    <section id="featured" className="section-padding overflow-hidden">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            Projetos em destaque
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Do meu portfólio a colaborações em equipe
          </h2>
          <p className="mt-3 text-muted-foreground">
            Um projeto pessoal e duas colaborações com outros desenvolvedores — arraste para o
            lado e confira cada um.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => selectProject(activeIndex === 0 ? featuredProjects.length - 1 : activeIndex - 1)}
            aria-label="Projeto anterior"
            className="hidden shrink-0 rounded-full border border-border bg-card p-2 text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground sm:flex"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {featuredProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => selectProject(index)}
                className={cn(
                  'rounded-full border px-5 py-2 text-sm font-semibold transition-colors',
                  index === activeIndex
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                )}
              >
                {project.name}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => selectProject(activeIndex === featuredProjects.length - 1 ? 0 : activeIndex + 1)}
            aria-label="Próximo projeto"
            className="hidden shrink-0 rounded-full border border-border bg-card p-2 text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground sm:flex"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">{active.eyebrow}</span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{active.name}</h3>
          <p className="mt-2 text-lg text-muted-foreground">{active.tagline}</p>
          <p className="mt-4 text-muted-foreground">{active.description}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {active.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Badge variant="outline" className="gap-1.5 py-1.5">
              <StatusIcon className="size-3.5" />
              {statusMeta[active.status].label}
            </Badge>

            {active.cta ? (
              <Button size="sm" asChild>
                <a href={active.cta.href} target="_blank" rel="noreferrer">
                  {active.cta.label}
                  <ArrowUpRight />
                </a>
              </Button>
            ) : active.status === 'private' ? (
              <Button size="sm" asChild>
                <a
                  href={getWhatsappLink(
                    `Olá, Bernardo! Vi o ${active.name} no seu portfólio e adoraria conhecer mais.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle />
                  Pedir uma demonstração
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        <div className="hidden md:block">
          <MacbookScroll src={active.heroScreenshot} />
        </div>

        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="group/image relative mx-auto mt-10 block max-w-lg overflow-hidden rounded-2xl border border-border/60 shadow-xl shadow-primary/10 outline-none md:hidden"
          aria-label={`Ampliar captura de tela — ${active.name}`}
        >
          <img
            src={active.heroScreenshot}
            alt={`${active.name} — tela principal`}
            className="aspect-[16/10] w-full object-cover object-top"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover/image:bg-black/40 group-hover/image:opacity-100">
            <Maximize2 className="size-6 text-white" />
          </div>
        </button>

        {active.gallery.length > 0 ? (
          <div
            className={cn(
              'mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2',
              active.gallery.length >= 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
            )}
          >
            {active.gallery.map((shot, i) => (
              <figure
                key={shot.src}
                className="group overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i + 1)}
                  className="group/image relative block aspect-[16/10] w-full overflow-hidden outline-none"
                  aria-label={`Ampliar captura de tela — ${active.name} ${shot.label}`}
                >
                  <img
                    src={shot.src}
                    alt={`${active.name} — ${shot.label}`}
                    loading="lazy"
                    className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover/image:bg-black/40 group-hover/image:opacity-100">
                    <Maximize2 className="size-5 text-white" />
                  </div>
                </button>
                <figcaption className="px-3 py-2 text-xs font-medium text-muted-foreground">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>

      <ImageLightbox images={images} index={lightboxIndex} onIndexChange={setLightboxIndex} />
    </section>
  )
}
