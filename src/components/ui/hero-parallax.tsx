import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

const IMAGES = [
  '/screenshots/lexnote/dashboard.webp',
  '/screenshots/gestyou/transacoes.webp',
  '/screenshots/hackathon/home.webp',
  '/screenshots/navla/hero.webp',
  '/screenshots/lexnote/agenda.webp',
  '/screenshots/forenser/dashboard.webp',
  '/screenshots/gestyou/pessoas.webp',
  '/screenshots/imobiliaria/home.webp',
  '/screenshots/lexnote/atendimentos.webp',
  '/screenshots/hackathon/abigo.webp',
  '/screenshots/navla/clientes.webp',
  '/screenshots/gestyou/total-por-pessoa.webp',
  '/screenshots/helpdesk/dashboard.webp',
  '/screenshots/forenser/boletim.webp',
  '/screenshots/imobiliaria/imoveis.webp',
  '/screenshots/navla/servicos.webp',
]

const ROWS = [IMAGES.slice(0, 4), IMAGES.slice(4, 8), IMAGES.slice(8, 12), IMAGES.slice(12, 16)]

/** Cada camada tem seu próprio alcance de deslocamento, profundidade (z) e opacidade-base — quanto mais
 * "atrás" a camada, mais devagar ela anda e mais sutil ela fica, reforçando a sensação de paralaxe real. */
const LAYERS = [
  { direction: 1, distance: 560, z: 80, baseOpacity: 0.26 },
  { direction: -1, distance: 360, z: 20, baseOpacity: 0.2 },
  { direction: 1, distance: 260, z: -40, baseOpacity: 0.16 },
  { direction: -1, distance: 150, z: -100, baseOpacity: 0.1 },
]

export function HeroParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 220, damping: 40, bounce: 0 }

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.4], [18, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig)
  const fade = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig)

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        style={{ rotateX, translateY, transformStyle: 'preserve-3d' }}
        className="relative -mt-10"
      >
        {ROWS.map((row, i) => (
          <ParallaxRow key={i} images={row} layer={LAYERS[i]} progress={scrollYProgress} fade={fade} />
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
    </div>
  )
}

function ParallaxRow({
  images,
  layer,
  progress,
  fade,
}: {
  images: string[]
  layer: (typeof LAYERS)[number]
  progress: MotionValue<number>
  fade: MotionValue<number>
}) {
  const springConfig = { stiffness: 220, damping: 40, bounce: 0 }
  const x = useSpring(useTransform(progress, [0, 1], [0, layer.direction * layer.distance]), springConfig)
  const scale = useSpring(useTransform(progress, [0, 1], [1, 1 - (900 - layer.z) / 9000]), springConfig)
  const opacity = useTransform(fade, (v) => v * layer.baseOpacity)

  return (
    <motion.div
      style={{ x, scale, opacity, z: layer.z, transformStyle: 'preserve-3d' }}
      className="mb-6 flex gap-6 last:mb-0"
    >
      {[...images, ...images].map((src, i) => (
        <ParallaxThumb key={i} src={src} />
      ))}
    </motion.div>
  )
}

function ParallaxThumb({ src }: { src: string }) {
  return (
    <div className="aspect-[16/10] w-64 shrink-0 overflow-hidden rounded-xl border border-border/40 shadow-xl sm:w-80">
      <img src={src} alt="" loading="lazy" className="size-full object-cover object-top" />
    </div>
  )
}
