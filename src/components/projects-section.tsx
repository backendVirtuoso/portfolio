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
    title: "React SPA 경기도 사고 유형별 위치 조회 프로젝트",
    description: "교통안전기관 연락망 CRUD 기능 구현, 사고 데이터 필터링 기능 구현, Route 처리",
    tech: ["HTML5", "CSS", "JavaScript", "React"],
    github: "https://github.com/backendVirtuoso/gsitm-react-traffic-safety",
    demo: "https://backendvirtuoso.github.io/gsitm-react-traffic-safety/",
    category: "team",
  },
  {
    title: "Jeju for suffer (실시간 모니터링)",
    description: "실시간 날씨 API 연동, 커뮤니티 페이징 처리, 회원정보 수정, 예약 생성 및 리스트 삭제 기능 개발",
    tech: ["CSS3", "HTML5", "JavaScript", "Spring Boot", "H2"],
    github: "https://github.com/GSITM-Team3/spring-environment-monitoring",
    demo: "#",
    category: "team",
  },
  {
    title: "금융 프로젝트",
    description: "상품 조회 페이지 구현, 상품 등록 페이지 개발, 금융 계산기 구글 차트 API 연동",
    tech: ["Vue.js", "JSP", "HTML5", "CSS3", "JavaScript", "Spring", "PostgreSQL"],
    github: "https://github.com/GSITM-Team3/financial-project",
    demo: "#",
    category: "team",
  },
  {
    title: "개인 포트폴리오 웹 사이트 구축",
    description: "Next.js와 Tailwind CSS를 활용한 반응형 포트폴리오 웹 사이트 개발",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/backendVirtuoso/portfolio-website",
    demo: "https://hjh-portfolio.vercel.app/",
    category: "personal",
  },
  {
    title: "K-Sketch",
    description: "Kafka + STOMP 기반 채팅 서비스, 일정 생성 및 수정 기능 개발",
    tech: ["React", "Spring Boot", "MyBatis", "MySQL", "Redis", "Kafka"],
    github: "https://github.com/dreamy-travel/K-Sketch",
    demo: "#",
    category: "team",
  },
  {
    title: "Youtube 클론 코딩",
    description: "외부 API 연동 및 스케줄링을 활용한 날씨 알림 서비스. 배치 처리로 효율적인 알림 발송.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "shadcn/ui", "PostgreSQL", "NeonDB", "Vercel", "React"],
    github: "https://github.com/backendVirtuoso/new-tube",
    demo: "https://new-tube-one-kappa.vercel.app/",
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
