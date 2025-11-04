"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

type ProjectCategory = "all" | "team" | "personal" | "course"

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  category: "team" | "personal" | "course"
}

const projects: Project[] = [
  {
    title: "E-Commerce API",
    description: "대용량 트래픽을 처리하는 RESTful API 서버. Redis 캐싱과 DB 인덱싱으로 응답 속도 70% 개선.",
    tech: ["Spring Boot", "PostgreSQL", "Redis", "Docker"],
    github: "#",
    demo: "#",
    category: "team",
  },
  {
    title: "실시간 채팅 서버",
    description: "WebSocket 기반 실시간 채팅 시스템. 동시 접속자 1만명 처리 가능한 확장 가능한 아키텍처.",
    tech: ["Node.js", "Socket.io", "MongoDB", "AWS"],
    github: "#",
    demo: "#",
    category: "team",
  },
  {
    title: "데이터 분석 파이프라인",
    description: "대용량 로그 데이터 수집 및 분석 시스템. 일 100만건 이상의 데이터 처리.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Celery"],
    github: "#",
    demo: "#",
    category: "personal",
  },
  {
    title: "블로그 플랫폼 API",
    description: "JWT 인증과 RBAC 권한 관리를 구현한 블로그 백엔드. 마크다운 에디터 지원.",
    tech: ["Express.js", "MySQL", "JWT", "AWS S3"],
    github: "#",
    demo: "#",
    category: "personal",
  },
  {
    title: "예약 시스템",
    description: "동시성 제어를 통한 예약 시스템. 낙관적 락과 비관적 락을 활용한 데이터 정합성 보장.",
    tech: ["Spring Boot", "JPA", "MySQL", "Redis"],
    github: "#",
    demo: "#",
    category: "course",
  },
  {
    title: "날씨 알림 서비스",
    description: "외부 API 연동 및 스케줄링을 활용한 날씨 알림 서비스. 배치 처리로 효율적인 알림 발송.",
    tech: ["Django", "Celery", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    category: "course",
  },
]

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
                <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent">
                  <Github className="h-4 w-4" />
                  {t("project.code")}
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent">
                  <ExternalLink className="h-4 w-4" />
                  {t("project.demo")}
                </Button>
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
