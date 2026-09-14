import { ArrowUpRight, ImageOff, Users } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { collaborations } from '@/data/collaborations'
import { cn } from '@/lib/utils'

export function Collaborations() {
  return (
    <section id="collaborations" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Colaborações
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Participação em projetos de terceiros
          </h2>
          <p className="mt-4 text-muted-foreground">
            Além dos projetos próprios, também colaboro em equipe com outros desenvolvedores
            em produtos de terceiros.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
          {collaborations.map((project) => (
            <Card
              key={project.name}
              className={cn(
                'justify-between overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10',
                project.image && 'gap-0 p-0',
              )}
            >
              {project.image ? (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Captura de tela — ${project.name}`}
                    loading="lazy"
                    className="size-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center gap-2 bg-muted/60 text-muted-foreground">
                  <ImageOff className="size-6" />
                  <span className="text-xs font-medium">Prints em breve</span>
                </div>
              )}

              <div className={cn('flex flex-1 flex-col gap-4', project.image && 'p-6')}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle>{project.name}</CardTitle>
                    <Badge variant={project.status === 'Em produção' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    <Users className="size-3.5" />
                    {project.role}
                  </span>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {project.link ? (
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Ver aplicação
                        <ArrowUpRight />
                      </a>
                    </Button>
                  </CardFooter>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
