import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { ArrowUpRight, Maximize2, Server, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { GithubIcon } from '@/components/icons'
import { type LightboxImage, ImageLightbox } from '@/components/image-lightbox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useCardSpotlight } from '@/components/ui/card-spotlight'
import { CardBody, CardContainer, CardItem } from '@/components/ui/three-d-card'
import { type Project, projects } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

const CAROUSEL_INTERVAL = 1400

const galleryImages: LightboxImage[] = projects.flatMap((project) =>
  (project.images ?? []).map((src) => ({
    src,
    alt: `Captura de tela — ${project.title}`,
    caption: project.title,
  })),
)

const galleryStartIndex = new Map<string, number>()
{
  let cursor = 0
  for (const project of projects) {
    galleryStartIndex.set(project.title, cursor)
    cursor += project.images?.length ?? 0
  }
}

const LANE_COUNT = 3
const springConfig = { stiffness: 220, damping: 40, bounce: 0 }

/** Deslocamento vertical por "pista" (posição na coluna): cada uma anda a uma velocidade e direção
 * diferente ao rolar a seção, dando profundidade ao grid — a mesma ideia do paralaxe do Hero. */
function useParallaxLanes(progress: MotionValue<number>) {
  const lane0 = useSpring(useTransform(progress, [0, 1], [60, -60]), springConfig)
  const lane1 = useSpring(useTransform(progress, [0, 1], [-40, 40]), springConfig)
  const lane2 = useSpring(useTransform(progress, [0, 1], [45, -45]), springConfig)
  return [lane0, lane1, lane2]
}

export function Projects() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: gridRef, offset: ['start end', 'end start'] })
  const laneY = useParallaxLanes(scrollYProgress)

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Projetos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Alguns projetos do meu GitHub
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção de projetos pessoais, acadêmicos e de hackathons — do backend
            à interface, sempre aprendendo algo novo em cada um. Passe o mouse sobre os prints
            para ver mais telas.
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              laneY={laneY[index % LANE_COUNT]}
              onOpenImage={(localIndex) =>
                setLightboxIndex((galleryStartIndex.get(project.title) ?? 0) + localIndex)
              }
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" />
              Ver todos os repositórios
            </a>
          </Button>
        </div>
      </div>

      <ImageLightbox images={galleryImages} index={lightboxIndex} onIndexChange={setLightboxIndex} />
    </section>
  )
}

function ProjectCard({
  project,
  laneY,
  onOpenImage,
}: {
  project: Project
  laneY: MotionValue<number>
  onOpenImage: (localIndex: number) => void
}) {
  const images = project.images ?? []
  const [frame, setFrame] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const spotlight = useCardSpotlight()

  useEffect(() => () => stopCarousel(), [])

  function startCarousel() {
    if (images.length <= 1) return
    stopCarousel()
    intervalRef.current = setInterval(() => {
      setFrame((prev) => (prev + 1) % images.length)
    }, CAROUSEL_INTERVAL)
  }

  function stopCarousel() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setFrame(0)
  }

  return (
    <motion.div style={{ y: laneY }} className="h-full">
      <CardContainer
        containerClassName="h-full w-full items-stretch py-0"
        className="w-full"
        onMouseMove={spotlight.onMouseMove}
        onMouseEnter={spotlight.onMouseEnter}
        onMouseLeave={spotlight.onMouseLeave}
      >
        <CardBody className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
          {spotlight.spotlightOverlay}

          {images.length > 0 ? (
            <CardItem
              as="button"
              type="button"
              translateZ={60}
              onMouseEnter={startCarousel}
              onMouseLeave={stopCarousel}
              onClick={() => onOpenImage(frame)}
              className="group/image relative aspect-[16/10] w-full overflow-hidden outline-none"
              aria-label={`Ampliar captura de tela de ${project.title}`}
            >
              <img
                src={images[frame]}
                alt={`Captura de tela — ${project.title}`}
                loading="lazy"
                className="size-full object-cover object-top transition-transform duration-300 group-hover/image:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover/image:bg-black/40 group-hover/image:opacity-100">
                <Maximize2 className="size-6 text-white" />
              </div>
              {images.length > 1 ? (
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {images.map((src, i) => (
                    <span
                      key={src}
                      className={cn(
                        'size-1.5 rounded-full transition-colors',
                        i === frame ? 'bg-white' : 'bg-white/40',
                      )}
                    />
                  ))}
                </div>
              ) : null}
            </CardItem>
          ) : (
            <CardItem
              translateZ={60}
              className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-lilac-glow"
            >
              <Server className="size-12 text-primary/50" strokeWidth={1.25} />
            </CardItem>
          )}

          <div className="flex flex-1 flex-col gap-4 p-6">
            <CardItem translateZ={40} className="w-full">
              <CardHeader className="p-0">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  {project.stars > 0 ? (
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
                      <Star className="size-3.5 fill-primary text-primary" />
                      {project.stars}
                    </span>
                  ) : null}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </CardItem>

            <CardItem translateZ={30} className="w-full">
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </CardItem>

            <CardItem translateZ={50} className="mt-auto w-full">
              <CardFooter className="flex-wrap p-0">
                {project.links.map((link) => (
                  <Button key={link.url} variant="outline" size="sm" asChild>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight />
                    </a>
                  </Button>
                ))}
              </CardFooter>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  )
}
