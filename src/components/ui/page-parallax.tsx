import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

/**
 * Fundo com paralaxe de verdade atrás de toda a página — inspirado em cenários de jogo em
 * camadas (tipo Mario Kart Wii) e nas formas geométricas flutuantes de sites como o angular.dev:
 * texturas distantes que rolam bem devagar, e formas sólidas mais próximas que rolam mais rápido
 * e giram sozinhas. Cada forma tem uma posição fixa no "espaço da página" (percentual da altura
 * total do documento) e uma fração da velocidade do scroll — não um clamp nem uma onda, é
 * deslocamento de verdade, então sempre há formas entrando e saindo da tela conforme você rola,
 * em qualquer ponto da página, por mais longa que ela seja.
 */

type ShapeKind = 'square' | 'ring' | 'circle' | 'triangle'

type Shape = {
  kind: ShapeKind
  topPercent: number
  side: 'left' | 'right'
  offset: string
  size: number
  rotate: number
  speed: number
  spinDuration: number
  spinReverse?: boolean
  className: string
}

const SHAPES: Shape[] = [
  { kind: 'square', topPercent: 2, side: 'left', offset: '4%', size: 56, rotate: 12, speed: 0.5, spinDuration: 22, className: 'bg-primary/25' },
  { kind: 'ring', topPercent: 9, side: 'right', offset: '8%', size: 90, rotate: 0, speed: 0.2, spinDuration: 34, className: 'border-primary/35' },
  { kind: 'triangle', topPercent: 17, side: 'left', offset: '14%', size: 46, rotate: -18, speed: 0.4, spinDuration: 26, spinReverse: true, className: 'bg-lilac-400/30' },
  { kind: 'circle', topPercent: 24, side: 'right', offset: '3%', size: 34, rotate: 0, speed: 0.55, spinDuration: 0, className: 'bg-primary/30' },
  { kind: 'square', topPercent: 32, side: 'right', offset: '18%', size: 68, rotate: 20, speed: 0.22, spinDuration: 28, className: 'bg-lilac-500/20' },
  { kind: 'ring', topPercent: 40, side: 'left', offset: '6%', size: 60, rotate: 0, speed: 0.48, spinDuration: 20, spinReverse: true, className: 'border-lilac-400/35' },
  { kind: 'triangle', topPercent: 48, side: 'right', offset: '10%', size: 54, rotate: 95, speed: 0.3, spinDuration: 32, className: 'bg-primary/25' },
  { kind: 'circle', topPercent: 56, side: 'left', offset: '20%', size: 42, rotate: 0, speed: 0.18, spinDuration: 0, className: 'bg-lilac-400/25' },
  { kind: 'square', topPercent: 64, side: 'left', offset: '9%', size: 50, rotate: -15, speed: 0.52, spinDuration: 24, className: 'bg-primary/25' },
  { kind: 'ring', topPercent: 72, side: 'right', offset: '15%', size: 76, rotate: 0, speed: 0.25, spinDuration: 30, className: 'border-primary/30' },
  { kind: 'triangle', topPercent: 80, side: 'left', offset: '3%', size: 40, rotate: 40, speed: 0.46, spinDuration: 18, spinReverse: true, className: 'bg-lilac-500/30' },
  { kind: 'circle', topPercent: 88, side: 'right', offset: '22%', size: 56, rotate: 0, speed: 0.2, spinDuration: 0, className: 'bg-primary/20' },
  { kind: 'square', topPercent: 95, side: 'left', offset: '16%', size: 60, rotate: 8, speed: 0.5, spinDuration: 26, className: 'bg-lilac-400/25' },
]

const dotsTile = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><circle cx="2" cy="2" r="1.6" fill="currentColor"/></svg>',
)
const outlineTile = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect x="56" y="16" width="34" height="34" rx="9" transform="rotate(45 73 33)" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="22" cy="118" r="16" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
)

const springConfig = { stiffness: 140, damping: 26, mass: 0.5 }

function useDocumentHeight() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const update = () => setHeight(document.documentElement.scrollHeight)
    update()

    const observer = new ResizeObserver(update)
    observer.observe(document.body)
    window.addEventListener('resize', update)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return height
}

export function PageParallaxBackground() {
  const { scrollY } = useScroll()
  const documentHeight = useDocumentHeight()

  const dotsY = useTransform(scrollY, (v) => `${-v * 0.05}px`)
  const outlineY = useTransform(scrollY, (v) => `${-v * 0.12}px`)

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <motion.div
        style={{
          backgroundImage: `url("data:image/svg+xml,${dotsTile}")`,
          backgroundSize: '40px 40px',
          backgroundPositionY: dotsY,
        }}
        className="absolute inset-0 text-primary opacity-[0.12]"
      />
      <motion.div
        style={{
          backgroundImage: `url("data:image/svg+xml,${outlineTile}")`,
          backgroundSize: '160px 160px',
          backgroundPositionY: outlineY,
        }}
        className="absolute inset-0 text-primary opacity-[0.15]"
      />

      {documentHeight > 0
        ? SHAPES.map((shape, i) => (
            <ParallaxShape key={i} shape={shape} scrollY={scrollY} documentHeight={documentHeight} />
          ))
        : null}
    </div>
  )
}

function ParallaxShape({
  shape,
  scrollY,
  documentHeight,
}: {
  shape: Shape
  scrollY: MotionValue<number>
  documentHeight: number
}) {
  const baseTop = (shape.topPercent / 100) * documentHeight
  const y = useSpring(
    useTransform(scrollY, (v) => baseTop - v * shape.speed),
    springConfig,
  )

  const sideStyle = shape.side === 'left' ? { left: shape.offset } : { right: shape.offset }

  const innerStyle: React.CSSProperties = {
    ...(shape.spinDuration > 0
      ? { animationDuration: `${shape.spinDuration}s`, animationDirection: shape.spinReverse ? 'reverse' : 'normal' }
      : {}),
    ...(shape.kind === 'triangle' ? { clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' } : {}),
  }

  return (
    <motion.div
      style={{ ...sideStyle, y, width: shape.size, height: shape.size, rotate: shape.rotate }}
      className="absolute"
    >
      <div
        style={innerStyle}
        className={cn(
          'size-full',
          shape.spinDuration > 0 && 'animate-spin',
          shape.kind === 'square' && cn('rounded-2xl', shape.className),
          shape.kind === 'ring' && cn('rounded-full border-[3px]', shape.className),
          shape.kind === 'circle' && cn('rounded-full', shape.className),
          shape.kind === 'triangle' && shape.className,
        )}
      />
    </motion.div>
  )
}
