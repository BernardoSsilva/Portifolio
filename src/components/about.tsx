import { Code2, MapPin, Sparkle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { skillGroups } from '@/data/skills'
import { siteConfig } from '@/data/site'

const allSkills = skillGroups.flatMap((group) => group.skills)

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre mim
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Curioso por código, apaixonado por resolver problemas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sou {siteConfig.role.toLowerCase()}, com
            experiência construindo aplicações full stack — de APIs em .NET, Python e NestJs a
            interfaces em React e Next.js. Já participei de hackathons, projetos
            acadêmicos e desafios técnicos, sempre buscando código limpo e arquitetura
            bem pensada.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" />
              {siteConfig.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="size-4 text-primary" />
              Full Stack Development
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <Card key={group.title} className="hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center gap-2">
                <Sparkle className="size-4 text-primary" />
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <InfiniteMovingCards items={allSkills} speed="slow" />
      </div>
    </section>
  )
}
