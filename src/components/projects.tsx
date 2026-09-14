import { ArrowUpRight, Star } from 'lucide-react'

import { GithubIcon } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/projects'
import { siteConfig } from '@/data/site'

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Projetos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Alguns projetos do meu GitHub
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção de projetos pessoais, acadêmicos e de hackathons — do backend
            à interface, sempre aprendendo algo novo em cada um.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="justify-between hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  {project.stars > 0 ? (
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
                      <Star className="size-3.5 fill-primary text-primary" />
                      {project.stars}
                    </span>
                  ) : null}
                </div>
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

              <CardFooter className="flex-wrap">
                {project.links.map((link) => (
                  <Button key={link.url} variant="outline" size="sm" asChild>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight />
                    </a>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" />
              Ver todos os repositórios
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
