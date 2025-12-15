"use client"

import { Briefcase } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslations, useLocale } from 'next-intl'
import { experiencesData } from "@/data/education"

export function CareerSection() {
  const t = useTranslations()
  const locale = useLocale() as 'ko' | 'en'
  
  const experiences = experiencesData[locale]

  return (
    <section id="career" className="relative min-h-screen flex items-center py-24 px-4 bg-background border-t border-border/50">
      {/* Section Decorator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("career.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("career.subtitle")}</p>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground">{exp.company}</h4>
                  <p className="text-primary font-medium">{exp.position}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="mb-4">
                <h5 className="font-semibold text-foreground mb-2">{t("career.responsibilities")}</h5>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm">{resp}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
