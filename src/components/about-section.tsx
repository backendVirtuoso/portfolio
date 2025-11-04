"use client"

import { User, Target, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("about.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("about.whoiam.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.whoiam.desc")}</p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-accent/10">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("about.whatido.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.whatido.desc")}</p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-secondary/10">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t("about.whatlove.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.whatlove.desc")}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
