"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useTranslations } from 'next-intl'
import { projects } from "@/data/projects"
import type { ProjectCategory } from "@/types"

export function ProjectsSection() {
  const t = useTranslations()
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all")
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set())
  const [displayCount, setDisplayCount] = useState<number>(6)

  const categories = [
    { value: "all" as const, label: t("project.filter.all") },
    { value: "team" as const, label: t("project.filter.team") },
    { value: "personal" as const, label: t("project.filter.personal") },
    { value: "course" as const, label: t("project.filter.course") },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)
  
  const displayedProjects = filteredProjects.slice(0, displayCount)
  const hasMoreProjects = filteredProjects.length > displayCount

  const toggleExpanded = (projectTitle: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectTitle)) {
        newSet.delete(projectTitle)
      } else {
        newSet.add(projectTitle)
      }
      return newSet
    })
  }

  const toggleDescription = (projectTitle: string) => {
    setExpandedDescriptions((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectTitle)) {
        newSet.delete(projectTitle)
      } else {
        newSet.add(projectTitle)
      }
      return newSet
    })
  }

  const toggleShowMore = () => {
    if (displayCount === 6) {
      setDisplayCount(filteredProjects.length)
    } else {
      setDisplayCount(6)
    }
  }

  // 카테고리 변경 시 displayCount 초기화
  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedCategory(category)
    setDisplayCount(6)
  }

  return (
    <section id="project" className="relative min-h-screen flex items-center bg-background py-24 px-4 border-t border-border/50">
      {/* Section Decorator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl w-full">
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
              onClick={() => handleCategoryChange(category.value)}
              className="min-w-[100px] px-6 transition-all duration-300 hover:scale-105"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 border-border/50 hover:border-primary/30"
            >
              {/* 카드 헤더 - 카테고리와 제목 */}
              <div className="border-b border-border/50 bg-muted/30 px-6 py-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="shrink-0 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
                    {t(`project.category.${project.category}`)}
                  </span>
                </div>
                <h3 className="font-sans text-lg font-bold text-foreground leading-tight line-clamp-2 min-h-[3rem] whitespace-pre-line">
                  {project.title}
                </h3>
              </div>

              {/* 카드 본문 */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                <p 
                  onClick={() => toggleDescription(project.title)}
                  className={`text-sm leading-relaxed text-muted-foreground cursor-pointer transition-all hover:text-foreground 
                    ${expandedDescriptions.has(project.title) ? '' : 'line-clamp-3'} 
                    ${expandedDescriptions.has(project.title) ? '' : 'min-h-[4rem]'}`}
                  title="클릭하여 펼치기/접기"
                >
                  {project.description}
                </p>

                {/* 기술 스택 */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {(expandedProjects.has(project.title) ? project.tech : project.tech.slice(0, 5)).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 transition-colors hover:bg-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && !expandedProjects.has(project.title) && (
                    <button
                      onClick={() => toggleExpanded(project.title)}
                      className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground hover:bg-muted-foreground/20 transition-colors cursor-pointer"
                    >
                      +{project.tech.length - 5}
                    </button>
                  )}
                  {expandedProjects.has(project.title) && project.tech.length > 5 && (
                    <button
                      onClick={() => toggleExpanded(project.title)}
                      className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground hover:bg-muted-foreground/20 transition-colors cursor-pointer"
                    >
                      접기
                    </button>
                  )}
                </div>
              </div>

              {/* 카드 푸터 - 액션 버튼 */}
              <div className="flex gap-2 border-t border-border/50 bg-muted/20 p-4">
                {project.demo && project.demo !== "#" ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {t("project.code")}
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t("project.demo")}
                      </a>
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    asChild
                  >
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
            <div className="mx-auto max-w-md">
              <p className="text-lg font-medium text-muted-foreground">{t("project.empty")}</p>
            </div>
          </div>
        )}

        {filteredProjects.length > 6 && (
          <div className="mt-12 flex justify-center">
            <Button
              onClick={toggleShowMore}
              variant="outline"
              size="lg"
              className="min-w-[150px] px-8 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              {displayCount === 6 ? t("project.showMore") : t("project.showLess")}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
