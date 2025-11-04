"use client"

import { Mail, Github, Linkedin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"

export function ContactSection() {
  const { t } = useI18n()

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
                  href="mailto:developer@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  developer@example.com
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
                <a href="tel:+821012345678" className="text-muted-foreground hover:text-primary transition-colors">
                  +82 10-1234-5678
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-secondary/10">
                <Github className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{t("contact.github")}</h3>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/yourusername
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
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            <Mail className="h-4 w-4" />
            {t("contact.send")}
          </Button>
        </div>
      </div>
    </section>
  )
}
