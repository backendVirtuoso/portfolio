import type { LucideIcon } from "lucide-react"

export type ProjectCategory = "all" | "team" | "personal" | "course"

export interface Project {
  title: string
  description: string
  period: string
  team: string
  tech: string[]
  github: string
  demo: string
  category: "team" | "personal" | "course"
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

