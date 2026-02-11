import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Briefcase, Database, Server, AlertTriangle, Lightbulb, CheckCircle2, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
            {project.github && project.github !== "#" && (
              <Button variant="default" size="lg" className="gap-2" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  {t("project.code")}
                </a>
              </Button>
            )}
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

        {/* Project Details */}
        {project.details && (
          <div className="space-y-8">
            {/* 서비스 설명 */}
            {project.details.service && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  {t("project.detail.service")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.service}
                </p>
              </Card>
            )}

            {/* 핵심 성과 */}
            {project.details.highlights && project.details.highlights.length > 0 && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {t("project.detail.highlights")}
                </h2>
                <ul className="space-y-3">
                  {project.details.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span className="flex-1 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* 다이어그램 섹션 */}
            {project.details.images && (project.details.images.erd || project.details.images.architecture) && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="text-primary">*</span>
                  {t("project.detail.diagrams")}
                </h2>
                <div className="space-y-8">
                  {/* ERD */}
                  {project.details.images.erd && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        {t("project.detail.erd")}
                      </h3>
                      <div className="relative w-full overflow-hidden rounded-lg border border-border/50 bg-muted/30">
                        <Image
                          src={project.details.images.erd}
                          alt={`${project.title} ERD`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  )}
                  {/* Architecture */}
                  {project.details.images.architecture && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Server className="h-4 w-4 text-primary" />
                        {t("project.detail.architecture")}
                      </h3>
                      <div className="relative w-full overflow-hidden rounded-lg border border-border/50 bg-muted/30">
                        <Image
                          src={project.details.images.architecture}
                          alt={`${project.title} Architecture`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* 문제 원인 */}
            {project.details.problems && project.details.problems.length > 0 && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  {t("project.detail.problems")}
                </h2>
                <div className="space-y-6">
                  {project.details.problems.map((problem, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        {index + 1}. {problem.title}
                      </h3>
                      <ul className="space-y-1.5 pl-5">
                        {problem.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-muted-foreground/60 mt-1 shrink-0">•</span>
                            <span className="flex-1 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 해결 과정 */}
            {project.details.solutions && project.details.solutions.length > 0 && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  {t("project.detail.solutions")}
                </h2>
                <div className="space-y-6">
                  {project.details.solutions.map((solution, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        {index + 1}. {solution.title}
                      </h3>
                      <ul className="space-y-1.5 pl-5">
                        {solution.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-muted-foreground/60 mt-1 shrink-0">•</span>
                            <span className="flex-1 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* 결과 */}
            {project.details.results && project.details.results.length > 0 && (
              <Card className="p-6 border-primary/20">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {t("project.detail.results")}
                </h2>
                <ol className="space-y-3">
                  {project.details.results.map((result, index) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-emerald-500 font-semibold shrink-0">{index + 1}.</span>
                      <span className="flex-1 leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ol>
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
