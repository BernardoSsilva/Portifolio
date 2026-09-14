import { MessageCircle } from 'lucide-react'

import { getWhatsappLink } from '@/data/site'

export function WhatsappFab() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-6" />
    </a>
  )
}
