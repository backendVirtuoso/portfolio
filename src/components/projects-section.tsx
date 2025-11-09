"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { projects } from "@/data/projects"
import type { ProjectCategory } from "@/types"

export function ProjectsSection() {
  const { t } = useI18n()
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all")

  const categories = [
    { value: "all" as const, label: t("project.filter.all") },
    { value: "team" as const, label: t("project.filter.team") },
    { value: "personal" as const, label: t("project.filter.personal") },
    { value: "course" as const, label: t("project.filter.course") },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="project" className="min-h-screen flex items-center bg-muted/30 py-24 px-4">
      <div className="mx-auto max-w-6xl w-full">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("project.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("project.subtitle")}</p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className="min-w-[80px] transition-all"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex-1 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-sans text-xl font-semibold text-foreground">{project.title}</h3>
                  <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                    {t(`project.category.${project.category}`)}
                  </span>
                </div>
                <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 border-t border-border p-4">
                {project.demo && project.demo !== "#" ? (
                  <>
                    <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {t("project.code")}
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t("project.demo")}
                      </a>
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      {t("project.code")}
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">{t("project.empty")}</p>
          </div>
        )}
      </div>
    </section>
  )
}
