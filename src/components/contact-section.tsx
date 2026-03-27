"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTranslations } from 'next-intl'

export function ContactSection() {
  const t = useTranslations()

  const contacts = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "h_leopold@naver.com",
      href: "mailto:h_leopold@naver.com",
      external: false,
      colorClass: "bg-primary/10 text-primary",
    },
    {
      icon: Github,
      label: t("contact.github"),
      value: "github.com/backendVirtuoso",
      href: "https://github.com/backendVirtuoso",
      external: true,
      colorClass: "bg-muted text-foreground/70",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "linkedin.com/in/황준하",
      href: "https://www.linkedin.com/in/황준하/",
      external: true,
      colorClass: "bg-primary/10 text-primary",
    },
  ]

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-24 px-4 bg-muted/30 border-t border-border/50">
      {/* Section Decorator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <Card
                key={contact.label}
                className="flex flex-col items-center text-center p-6 border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                onClick={() => contact.external ? window.open(contact.href, "_blank", "noopener,noreferrer") : window.location.href = contact.href}
              >
                <div className={`p-4 rounded-full ${contact.colorClass}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5">{contact.label}</h3>
                <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
              </Card>
            )
          })}
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
