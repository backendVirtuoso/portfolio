import { Database, Server, Code2, GitBranch, Layers, Award } from "lucide-react"
import type { TechStack } from "@/types"

export const techStack: TechStack[] = [
  {
    category: "skill.frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "skill.backend",
    icon: Server,
    items: ["Spring Boot", "Spring Framework", "Java", "Python", "FastAPI"],
  },
  {
    category: "skill.database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  {
    category: "skill.orm",
    icon: Layers,
    items: ["Spring Data JPA", "MyBatis", "Drizzle ORM"],
  },
  {
    category: "skill.tools",
    icon: GitBranch,
    items: ["Git/GitHub", "Docker", "AWS", "Vercel", "Postman"],
  },
  {
    category: "skill.certificate",
    icon: Award,
    items: ["SQLD", "정보처리기사", "컴퓨터활용능력 1급", "네트워크관리사 2급"],
  },
]

