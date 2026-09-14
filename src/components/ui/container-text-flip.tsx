import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export function ContainerTextFlip({
  words,
  interval = 2500,
  className,
  textClassName,
  animationDuration = 700,
}: {
  words: string[]
  interval?: number
  className?: string
  textClassName?: string
  animationDuration?: number
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [width, setWidth] = useState(100)
  const textRef = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.scrollWidth + 32)
    }
  }, [currentWordIndex])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(intervalId)
  }, [words, interval])

  return (
    <motion.span
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-secondary to-secondary/60 px-4 py-1.5 text-center shadow-[inset_0_-1px_0_hsl(var(--border)),0_2px_6px_rgba(0,0,0,0.08)]',
        className,
      )}
      key={words[currentWordIndex]}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          ref={textRef}
          key={currentWordIndex}
          className="inline-block whitespace-nowrap"
        >
          {words[currentWordIndex].split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: index * 0.02 }}
              className={cn('inline-block text-primary', textClassName)}
            >
              {letter === ' ' ? ' ' : letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  )
}
