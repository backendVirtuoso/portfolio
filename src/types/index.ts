import type { LucideIcon } from "lucide-react"

export type ProjectCategory = "all" | "team" | "personal" | "course"

export interface Project {
  id: string
  title: string
  description: string
  period: string
  team: string
  tech: string[]
  github: string
  demo: string
  category: "team" | "personal" | "course"
  // 프로젝트 상세 템플릿 필드
  details?: {
    // 서비스 설명
    service?: string
    // 이력서 핵심 성과 (bullet points)
    highlights?: string[]
    // 다이어그램 이미지 (ERD, Architecture)
    images?: {
      erd?: string
      architecture?: string
    }
    // 문제 원인
    problems?: Array<{
      title: string
      details: string[]
    }>
    // 해결 과정
    solutions?: Array<{
      title: string
      details: string[]
    }>
    // 결과
    results?: string[]
  }
}

export interface TechStack {
  category: string
  icon: LucideIcon
  items: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
  responsibilities: string[]
  tech: string[]
}

