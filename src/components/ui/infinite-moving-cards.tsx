import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'normal',
  className,
}: {
  items: string[]
  direction?: 'left' | 'right'
  speed?: 'slow' | 'normal' | 'fast'
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicate = item.cloneNode(true)
      scrollerRef.current?.appendChild(duplicate)
    })

    containerRef.current.style.setProperty(
      '--animation-direction',
      direction === 'left' ? 'forwards' : 'reverse',
    )
    const duration = speed === 'fast' ? '20s' : speed === 'slow' ? '80s' : '40s'
    containerRef.current.style.setProperty('--animation-duration', duration)

    setStart(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative z-0 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2',
          start && 'animate-scroll-x group-hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex shrink-0 items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium whitespace-nowrap shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
