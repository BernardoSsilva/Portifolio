import { Mail, MessageCircle } from 'lucide-react'

import { GithubIcon } from '@/components/icons'
import { getMailtoLink, getWhatsappLink, siteConfig } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <MessageCircle className="size-5" />
          </a>
          <a
            href={getMailtoLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="E-mail"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
