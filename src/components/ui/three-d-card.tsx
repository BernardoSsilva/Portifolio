import {
  createContext,
  useContext,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react'

import { cn } from '@/lib/utils'

const MouseEnterContext = createContext<[boolean, (value: boolean) => void] | undefined>(
  undefined,
)

export function CardContainer({
  children,
  className,
  containerClassName,
  onMouseMove,
  onMouseEnter: onMouseEnterProp,
  onMouseLeave: onMouseLeaveProp,
}: {
  children: ReactNode
  className?: string
  containerClassName?: string
  onMouseMove?: (event: ReactMouseEvent<HTMLDivElement>) => void
  onMouseEnter?: (event: ReactMouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (event: ReactMouseEvent<HTMLDivElement>) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  function handleMouseMove(event: ReactMouseEvent<HTMLDivElement>) {
    onMouseMove?.(event)
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (event.clientX - left - width / 2) / 25
    const y = (event.clientY - top - height / 2) / 25
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }

  function handleMouseEnter(event: ReactMouseEvent<HTMLDivElement>) {
    onMouseEnterProp?.(event)
    setIsMouseEntered(true)
  }

  function handleMouseLeave(event: ReactMouseEvent<HTMLDivElement>) {
    onMouseLeaveProp?.(event)
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={cn('flex items-center justify-center', containerClassName)} style={{ perspective: '1000px' }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn('relative transition-transform duration-200 ease-out', className)}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('[transform-style:preserve-3d]', className)}>{children}</div>
  )
}

export function CardItem({
  as: Component = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  [key: string]: unknown
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [, setIsMouseEntered] = useCardContext()

  return (
    <Component
      ref={ref}
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
      className={cn('w-fit transition duration-200 ease-out', className)}
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

function useCardContext() {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardContainer')
  }
  return context
}
