import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export function MacbookScroll({
  src,
  title,
  badge,
  className,
}: {
  src: string
  title?: React.ReactNode
  badge?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative flex shrink-0 flex-col items-center justify-start py-8',
        className,
      )}
    >
      {(badge || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          {badge}
          {title ? <h2 className="mt-4 max-w-lg text-3xl font-bold sm:text-4xl">{title}</h2> : null}
        </motion.div>
      )}

      {/* Lid */}
      <Lid src={src} />

      {/* Base */}
      <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
        {/* Top bar with notch */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-white/50 to-transparent dark:from-white/10" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
      </div>
    </div>
  )
}

function Lid({ src }: { src: string }) {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{ transform: 'perspective(800px) rotateX(-25deg) translateZ(0px)', transformOrigin: 'bottom' }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{ boxShadow: '0px 2px 0px 2px #171717 inset' }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white/40 text-xs">●</span>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 1.15, scaleY: 0.6, rotateX: -24, transformPerspective: 800 }}
        whileInView={{ scaleX: 1, scaleY: 1, rotateX: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'top' }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <img
          src={src}
          alt="screenshot"
          className="absolute inset-0 size-full rounded-lg object-cover object-top"
        />
      </motion.div>
    </div>
  )
}

function Trackpad() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{ boxShadow: '0px 0px 1px 1px #00000020 inset' }}
    />
  )
}

function SpeakerGrid() {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          'radial-gradient(circle, #08080A 0.5px, transparent 0.5px)',
        backgroundSize: '3px 3px',
      }}
    />
  )
}

function Keypad() {
  const rows: string[][] = [
    ['esc', '', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', '', 'power'],
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
    ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'return'],
    ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shift'],
  ]

  return (
    <div className="mx-1 h-full rounded-md bg-[#050505] p-1">
      {rows.map((row, i) => (
        <div key={i} className="mb-[2px] flex w-full shrink-0 gap-[2px]">
          {row.map((key, j) => (
            <div
              key={j}
              className={cn(
                'flex h-5 items-center justify-center rounded-[4px] bg-[#0A090C]',
                key.length > 1 ? 'flex-1' : 'w-5',
              )}
              style={{ boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset' }}
            >
              <span className="text-[5px] text-white/70">{key}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
