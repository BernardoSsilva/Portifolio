import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const IMAGES = [
  '/screenshots/lexnote/clientes.webp',
  '/screenshots/gestyou/transacoes.webp',
  '/screenshots/hackathon/home.webp',
  '/screenshots/navla/hero.webp',
  '/screenshots/lexnote/agenda.webp',
  '/screenshots/forenser/dashboard.webp',
  '/screenshots/gestyou/pessoas.webp',
  '/screenshots/nesso/hero.webp',
  '/screenshots/lexnote/atendimentos.webp',
  '/screenshots/hackathon/abigo.webp',
  '/screenshots/navla/dashboard.webp',
  '/screenshots/gestyou/total-por-pessoa.webp',
]

const ROW_1 = IMAGES.slice(0, 4)
const ROW_2 = IMAGES.slice(4, 8)
const ROW_3 = IMAGES.slice(8, 12)

export function HeroParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 220, damping: 40, bounce: 0 }

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.4], [18, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.22, 0.08]), springConfig)
  const rowOpacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig)

  const translateXLeft = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), springConfig)
  const translateXRight = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig)

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        style={{
          rotateX,
          translateY,
          opacity,
          transformStyle: 'preserve-3d',
        }}
        className="relative -mt-10"
      >
        <motion.div style={{ x: translateXLeft, opacity: rowOpacity }} className="mb-6 flex gap-6">
          {[...ROW_1, ...ROW_1].map((src, i) => (
            <ParallaxThumb key={`row1-${i}`} src={src} />
          ))}
        </motion.div>
        <motion.div style={{ x: translateXRight, opacity: rowOpacity }} className="mb-6 flex gap-6">
          {[...ROW_2, ...ROW_2].map((src, i) => (
            <ParallaxThumb key={`row2-${i}`} src={src} />
          ))}
        </motion.div>
        <motion.div style={{ x: translateXLeft, opacity: rowOpacity }} className="flex gap-6">
          {[...ROW_3, ...ROW_3].map((src, i) => (
            <ParallaxThumb key={`row3-${i}`} src={src} />
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
    </div>
  )
}

function ParallaxThumb({ src }: { src: string }) {
  return (
    <div className="aspect-[16/10] w-64 shrink-0 overflow-hidden rounded-xl border border-border/40 shadow-xl sm:w-80">
      <img src={src} alt="" loading="lazy" className="size-full object-cover object-top" />
    </div>
  )
}
