"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t("footer.name")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t("footer.quicklinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#skill" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.skill")}
                </a>
              </li>
              <li>
                <a href="#project" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.project")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t("footer.connect")}</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <a href="https://github.com/backendVirtuoso" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <a href="https://linkedin.com/in/준하-황-5b121a350/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <a href="mailto:h_leopold@naver.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {t("footer.name")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
