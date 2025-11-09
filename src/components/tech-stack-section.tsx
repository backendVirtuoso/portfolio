"use client"

import { Card } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"
import { techStack } from "@/data/tech-stack"

export function TechStackSection() {
  const { t } = useI18n()

  return (
    <section id="skill" className="min-h-screen flex items-center py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl w-full">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("skill.title")}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">{t("skill.subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((stack) => {
            const Icon = stack.icon
            return (
              <Card key={stack.category} className="group p-8 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-sans text-2xl font-semibold text-foreground">{t(stack.category)}</h3>
                <ul className="space-y-3">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground transition-colors group-hover:text-foreground flex items-center"
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
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
