import type { LucideIcon } from "lucide-react"

export type ProjectCategory = "all" | "team" | "personal" | "course"

export interface Project {
  title: string
  description: string
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

