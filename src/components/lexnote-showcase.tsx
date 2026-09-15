import { Lock, Maximize2, MessageCircle, Sparkles } from 'lucide-react'
import { useState } from 'react'

import { type LightboxImage, ImageLightbox } from '@/components/image-lightbox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import { lexnote } from '@/data/lexnote'
import { getWhatsappLink } from '@/data/site'

const galleryImages: LightboxImage[] = [
  { src: lexnote.heroScreenshot, alt: `${lexnote.name} — Clientes`, caption: 'Clientes' },
  ...lexnote.gallery.map((shot) => ({
    src: shot.src,
    alt: `${lexnote.name} — ${shot.label}`,
    caption: shot.label,
  })),
]

export function LexNoteShowcase() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="lexnote" className="section-padding overflow-hidden">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            Projeto em destaque
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {lexnote.name}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{lexnote.tagline}</p>
          <p className="mt-4 text-muted-foreground">{lexnote.description}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {lexnote.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Badge variant="outline" className="gap-1.5 py-1.5">
              <Lock className="size-3.5" />
              Repositório privado
            </Badge>
            <Button size="sm" asChild>
              <a
                href={getWhatsappLink(
                  'Olá, Bernardo! Vi o LexNote no seu portfólio e adoraria conhecer mais.',
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
                Pedir uma demonstração
              </a>
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <MacbookScroll src={lexnote.heroScreenshot} />
        </div>

        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="group/image relative mx-auto mt-10 block max-w-lg overflow-hidden rounded-2xl border border-border/60 shadow-xl shadow-primary/10 outline-none md:hidden"
          aria-label={`Ampliar captura de tela — ${lexnote.name} Clientes`}
        >
          <img
            src={lexnote.heroScreenshot}
            alt={`${lexnote.name} — Clientes`}
            className="w-full object-cover object-top"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover/image:bg-black/40 group-hover/image:opacity-100">
            <Maximize2 className="size-6 text-white" />
          </div>
        </button>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lexnote.gallery.map((shot, i) => (
            <figure
              key={shot.src}
              className="group overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i + 1)}
                className="group/image relative block aspect-video w-full overflow-hidden outline-none"
                aria-label={`Ampliar captura de tela — LexNote ${shot.label}`}
              >
                <img
                  src={shot.src}
                  alt={`LexNote — ${shot.label}`}
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
      </div>

      <ImageLightbox images={galleryImages} index={lightboxIndex} onIndexChange={setLightboxIndex} />
    </section>
  )
}
