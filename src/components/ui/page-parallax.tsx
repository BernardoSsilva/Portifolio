import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'

import { cn } from '@/lib/utils'

/** Camadas de brilho fixas atrás de toda a página: cada uma oscila numa onda própria (amplitude,
 * comprimento de onda e fase diferentes) conforme o scroll, dando sensação de profundidade contínua
 * por trás de todas as seções — não só do Hero. A oscilação é limitada (em vez de um deslocamento
 * linear sem limite), então a camada continua visível em qualquer ponto da página, por mais longa
 * que ela seja. */
const ORBS = [
  { className: 'bg-primary/20', size: 420, style: { top: '-8%', left: '-10%' }, amplitude: 70, wavelength: 2600, phase: 0 },
  { className: 'bg-lilac-400/15', size: 480, style: { top: '14%', right: '-12%' }, amplitude: 90, wavelength: 1800, phase: 1.4 },
  { className: 'bg-lilac-500/12', size: 360, style: { top: '42%', left: '8%' }, amplitude: 60, wavelength: 3200, phase: 2.6 },
  { className: 'bg-primary/15', size: 440, style: { top: '66%', right: '-6%' }, amplitude: 80, wavelength: 2100, phase: 0.7 },
  { className: 'bg-lilac-400/12', size: 400, style: { top: '90%', left: '35%' }, amplitude: 65, wavelength: 2800, phase: 3.3 },
]

const springConfig = { stiffness: 120, damping: 30, mass: 0.6 }

export function PageParallaxBackground() {
  const { scrollY } = useScroll()

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {ORBS.map((orb, i) => (
        <Orb key={i} scrollY={scrollY} {...orb} />
      ))}
    </div>
  )
}

function Orb({
  className,
  size,
  style,
  amplitude,
  wavelength,
  phase,
  scrollY,
}: {
  className: string
  size: number
  style: React.CSSProperties
  amplitude: number
  wavelength: number
  phase: number
  scrollY: MotionValue<number>
}) {
  const y = useSpring(
    useTransform(scrollY, (v) => Math.sin(v / wavelength + phase) * amplitude),
    springConfig,
  )

  return (
    <motion.div
      style={{ ...style, y, width: size, height: size }}
      className={cn('absolute rounded-full blur-3xl', className)}
    />
  )
}
