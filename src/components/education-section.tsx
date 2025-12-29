"use client"

import { GraduationCap, BookOpen, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslations, useLocale } from 'next-intl'
import { educationData, bootcampData, certificationsData } from "@/data/education"

export function EducationSection() {
  const t = useTranslations()
  const locale = useLocale() as 'ko' | 'en'

  const education = educationData[locale]
  const bootcamp = bootcampData[locale]
  const certifications = certificationsData[locale]

  return (
    <section id="education" className="relative min-h-screen flex items-center py-24 px-4 bg-background border-t border-border/50">
      {/* Section Decorator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("education.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("education.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Academic Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("education.academic.title")}</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-bold text-foreground mb-1">{edu.school}</h4>
                    <p className="text-primary font-medium mb-2">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    {edu.description && <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bootcamp/Training */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("education.training.title")}</h3>
            </div>
            <div className="space-y-4">
              {bootcamp.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-bold text-foreground mb-1">{edu.school}</h4>
                    <p className="text-primary font-medium mb-2">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{edu.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("education.cert.title")}</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-bold text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-sm text-primary font-medium">{cert.date}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
