import { useEffect, useRef, useState } from 'react'

/** Toca o vídeo só enquanto ele está visível na tela — evita rodar (e gastar bateria/dados)
 * fora da viewport, e é mais confiável que depender só do atributo `autoPlay` nativo. */
export function useAutoplayInView<T extends HTMLVideoElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.2,
    })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (isVisible) void video.play()
    else video.pause()
  }, [isVisible])

  return ref
}
