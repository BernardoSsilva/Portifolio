import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { GithubIcon } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site'

const NAV_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-lg">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="text-base font-bold tracking-tight">
          Bernardo<span className="text-primary">.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" />
            </a>
          </Button>
          <ThemeToggle />
          <Button asChild>
            <a href="#contact">Vamos conversar</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
