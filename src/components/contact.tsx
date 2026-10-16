import { Mail, MapPin } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getMailtoLink, siteConfig } from '@/data/site'

export function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const emailBody = name ? `Meu nome é ${name}.\n\n${message}` : message

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    window.open(getMailtoLink('Contato via portfólio', emailBody), '_blank', 'noreferrer')
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Vamos construir algo juntos?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estou aberto a novas oportunidades, projetos freelance e boas conversas
            sobre tecnologia. Me manda um e-mail.
          </p>
        </div>

        <Card className="mx-auto mt-14 max-w-sm items-start gap-4 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Mail className="size-5" />
          </div>
          <div>
            <h3 className="font-semibold">E-mail</h3>
            <p className="mt-1 break-all text-sm text-muted-foreground">{siteConfig.email}</p>
          </div>
          <Button asChild className="w-full">
            <a href={getMailtoLink()} target="_blank" rel="noreferrer">
              Enviar e-mail
            </a>
          </Button>
        </Card>

        <Card className="mx-auto mt-8 max-w-3xl gap-6 sm:p-8">
          <div>
            <h3 className="text-lg font-semibold">Ou envie uma mensagem rápida</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha abaixo — seu cliente de e-mail abre com tudo pronto.
            </p>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Seu nome"
                  className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="location" className="text-sm font-medium">
                  Local
                </label>
                <div className="flex h-11 items-center gap-2 rounded-xl border border-dashed border-input px-4 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {siteConfig.location}
                </div>
              </div>
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Conte um pouco sobre o projeto ou oportunidade..."
                rows={4}
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto sm:self-start">
              <Mail />
              Enviar via e-mail
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
