"use client"

import { Card } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"
import { Database, Server, Code2, GitBranch } from "lucide-react"

const techStack = [
  {
    category: "skill.language",
    icon: Code2,
    items: ["Java", "Python", "TypeScript", "SQL"],
  },
  {
    category: "skill.framework",
    icon: Server,
    items: ["Spring Boot", "Node.js", "Express", "FastAPI"],
  },
  {
    category: "skill.database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "skill.tools",
    icon: GitBranch,
    items: ["Git", "Docker", "AWS", "Jenkins"],
  },
]

export function TechStackSection() {
  const { t } = useI18n()

  return (
    <section id="skill" className="min-h-screen flex items-center py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("skill.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("skill.subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((stack) => {
            const Icon = stack.icon
            return (
              <Card key={stack.category} className="group p-6 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-sans text-xl font-semibold text-foreground">{t(stack.category)}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
