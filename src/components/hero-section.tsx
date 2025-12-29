"use client"

import { ThreeScene } from "./three-scene"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-8xl text-center">
          <div className="mb-8 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {t("hero.badge")}
          </div>

          <h1 className="mb-10 text-balance font-sans text-5xl font-bold tracking-tight text-foreground md:text-7xl leading-tight md:leading-tight">
            {t("hero.greeting")}
            <br />
            <span className="text-primary">
              {t("hero.name")}
            </span>
            {t("hero.title")}
          </h1>

          <p className="mb-10 text-pretty text-lg leading-loose text-muted-foreground md:text-xl md:leading-loose whitespace-pre-line">
            {t("hero.description")}
          </p>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:h_leopold@naver.com">
                <Mail className="h-4 w-4" />
                {t("hero.contact")}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                {t("hero.resume")}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://github.com/backendVirtuoso" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://linkedin.com/in/준하-황-5b121a350/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="mailto:h_leopold@naver.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - Down Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-muted-foreground/50"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
