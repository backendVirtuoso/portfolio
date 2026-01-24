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
    // 01. 프로젝트 소개 | 서비스 이름 or 프로젝트 특징 + 소개 한 줄
    introduction?: string
    // 02. 프로젝트 개요 | 배경과 목적
    overview?: {
      background?: string
      purpose?: string
    }
    // 03. 진행한 일 | 배경-문제-(핵심)-해결
    tasks?: Array<{
      background?: string
      problem?: string
      solution?: string
      core?: string
    }>
    // 04. 과정 | 나의 직접적인 액션 + 인사이트
    process?: Array<{
      action: string
      insight?: string
    }>
    // 05. 결과물 | 최종으로 진행한 내용 + 포인트
    results?: {
      achievements?: string[]
      keyPoints?: string[]
    }
    // 06. 성장한 점 | 성과가 있는 경우 : 성과 vs. 없는 경우 : 배운점
    growth?: {
      achievements?: string[]
      learnings?: string[]
    }
    // 07. 나의 역할 | 인사 시 기입할 수 있는 부분(~기간 + 배운점 + 디진)
    myRole?: {
      period?: string
      responsibilities?: string[]
      learnings?: string[]
    }
    // 08. 프로젝트 이미지 | ERD, Architecture 다이어그램
    images?: {
      erd?: string
      architecture?: string
    }
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

