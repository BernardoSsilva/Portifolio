import { useState } from 'react'

export function useCardSpotlight() {
  const [style, setStyle] = useState<React.CSSProperties>({ opacity: 0 })

  function onMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    setStyle((prev) => ({
      ...prev,
      background: `radial-gradient(400px circle at ${x}px ${y}px, hsl(var(--primary) / 0.15), transparent 70%)`,
    }))
  }

  function onMouseEnter() {
    setStyle((prev) => ({ ...prev, opacity: 1 }))
  }

  function onMouseLeave() {
    setStyle((prev) => ({ ...prev, opacity: 0 }))
  }

  const spotlightOverlay = (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
      style={style}
    />
  )

  return { onMouseMove, onMouseEnter, onMouseLeave, spotlightOverlay }
}
