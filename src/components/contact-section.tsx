"use client"

import { Mail, Github, Linkedin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTranslations } from 'next-intl'

export function ContactSection() {
  const t = useTranslations()

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{t("contact.email")}</h3>
                <a
                  href="mailto:h_leopold@naver.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  h_leopold@naver.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{t("contact.phone")}</h3>
                <a href="tel:+821041756818" className="text-muted-foreground hover:text-primary transition-colors">
                  +82 10-4175-6818
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-secondary/10">
                <Github className="h-6 w-6 text-black/50" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{t("contact.github")}</h3>
                <a
                  href="https://github.com/backendVirtuoso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/backendVirtuoso
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{t("contact.linkedin")}</h3>
                <a
                  href="https://linkedin.com/in/준하-황-5b121a350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/황준하
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:h_leopold@naver.com">
              <Mail className="h-4 w-4" />
              {t("contact.send")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
