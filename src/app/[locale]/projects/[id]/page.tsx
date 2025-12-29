import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Briefcase } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

interface ProjectDetailPageProps {
  params: Promise<{
    id: string
    locale: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id, locale } = await params
  const project = projects.find((p) => p.id === id)
  const t = await getTranslations()

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <Link href={`/${locale}/#project`}>
          <Button variant="ghost" className="mb-8 gap-2 hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" />
            {t("project.detail.back")}
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="mb-3">
                <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary uppercase tracking-wide">
                  {t(`project.category.${project.category}`)}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 whitespace-pre-line">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">{t("project.detail.period")}:</span>
              <span>{project.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="font-medium">{t("project.detail.team")}:</span>
              <span>{project.team}</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              {t("project.detail.techStack")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <Button variant="default" size="lg" className="gap-2" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                {t("project.code")}
              </a>
            </Button>
            {project.demo && project.demo !== "#" && (
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  {t("project.demo")}
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Details Template */}
        {project.details && (
          <div className="space-y-8">
            {/* 01. 프로젝트 소개 */}
            {project.details.introduction && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">01.</span>
                  {t("project.detail.introduction")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.introduction}
                </p>
              </Card>
            )}

            {/* 02. 프로젝트 개요 */}
            {project.details.overview && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">02.</span>
                  {t("project.detail.overview")}
                </h2>
                <div className="space-y-4">
                  {project.details.overview.background && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.background")}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.details.overview.background}
                      </p>
                    </div>
                  )}
                  {project.details.overview.purpose && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.purpose")}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.details.overview.purpose}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* 03. 진행한 일 */}
            {project.details.tasks && project.details.tasks.length > 0 && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">03.</span>
                  {t("project.detail.tasks")}
                </h2>
                <div className="space-y-6">
                  {project.details.tasks.map((task, index) => (
                    <div key={index} className="space-y-3 pb-6 last:pb-0 border-b last:border-b-0 border-border/50">
                      {task.background && (
                        <div>
                          <span className="inline-block text-xs font-semibold text-primary mb-1">
                            {t("project.detail.taskBackground")}
                          </span>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {task.background}
                          </p>
                        </div>
                      )}
                      {task.problem && (
                        <div>
                          <span className="inline-block text-xs font-semibold text-destructive mb-1">
                            {t("project.detail.taskProblem")}
                          </span>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {task.problem}
                          </p>
                        </div>
                      )}
                      {task.core && (
                        <div>
                          <span className="inline-block text-xs font-semibold text-primary mb-1">
                            {t("project.detail.taskCore")}
                          </span>
                          <p className="text-sm text-foreground font-medium leading-relaxed">
                            {task.core}
                          </p>
                        </div>
                      )}
                      {task.solution && (
                        <div>
                          <span className="inline-block text-xs font-semibold text-emerald-500 mb-1">
                            {t("project.detail.taskSolution")}
                          </span>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {task.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 04. 과정 */}
            {project.details.process && project.details.process.length > 0 && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">04.</span>
                  {t("project.detail.process")}
                </h2>
                <div className="space-y-4">
                  {project.details.process.map((item, index) => (
                    <div key={index} className="space-y-2 pb-4 last:pb-0 border-b last:border-b-0 border-border/50">
                      <div>
                        <span className="inline-block text-xs font-semibold text-primary mb-1">
                          {t("project.detail.action")}
                        </span>
                        <p className="text-sm text-foreground font-medium leading-relaxed">
                          {item.action}
                        </p>
                      </div>
                      {item.insight && (
                        <div>
                          <span className="inline-block text-xs font-semibold text-amber-500 mb-1">
                            {t("project.detail.insight")}
                          </span>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.insight}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 05. 결과물 */}
            {project.details.results && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">05.</span>
                  {t("project.detail.results")}
                </h2>
                <div className="space-y-4">
                  {project.details.results.achievements && project.details.results.achievements.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.achievements")}
                      </h3>
                      <ul className="space-y-2">
                        {project.details.results.achievements.map((achievement, index) => (
                          <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="flex-1 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.details.results.keyPoints && project.details.results.keyPoints.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.keyPoints")}
                      </h3>
                      <ul className="space-y-2">
                        {project.details.results.keyPoints.map((point, index) => (
                          <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="flex-1 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* 06. 성장한 점 */}
            {project.details.growth && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">06.</span>
                  {t("project.detail.growth")}
                </h2>
                <div className="space-y-4">
                  {project.details.growth.achievements && project.details.growth.achievements.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.achievements")}
                      </h3>
                      <ul className="space-y-2">
                        {project.details.growth.achievements.map((achievement, index) => (
                          <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="flex-1 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.details.growth.learnings && project.details.growth.learnings.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.learnings")}
                      </h3>
                      <ul className="space-y-2">
                        {project.details.growth.learnings.map((learning, index) => (
                          <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="flex-1 leading-relaxed">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* 07. 나의 역할 */}
            {project.details.myRole && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">07.</span>
                  {t("project.detail.myRole")}
                </h2>
                <div className="space-y-4">
                  {project.details.myRole.period && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.period")}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.details.myRole.period}
                      </p>
                    </div>
                  )}
                  {project.details.myRole.responsibilities && project.details.myRole.responsibilities.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.responsibilities")}
                      </h3>
                      <ul className="space-y-2">
                        {project.details.myRole.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="flex-1 leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.details.myRole.learnings && project.details.myRole.learnings.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {t("project.detail.learnings")}
                      </h3>
                      <ul className="space-y-2">
                        {project.details.myRole.learnings.map((learning, index) => (
                          <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="flex-1 leading-relaxed">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Back Button (Bottom) */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <Link href={`/${locale}/#project`}>
            <Button variant="outline" size="lg" className="gap-2 hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" />
              {t("project.detail.back")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
