import type { CSSProperties } from "react"
import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PipelineVisual } from "@/components/pipeline-visual"
import { profile } from "@/data/profile"

const step = (i: number) => ({ "--i": i }) as CSSProperties

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center pt-16" data-enter>
      <div className="wrap grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-6">
          <p className="meta enter" style={step(0)}>
            {t("eyebrow")}
          </p>

          <h1
            id="hero-title"
            className="enter mt-5 text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[56px]"
            style={step(1)}
          >
            <span className="block">{t("name")}</span>
            <span className="mt-1 block font-medium text-body">{t("role")}</span>
          </h1>

          <p className="enter mt-6 max-w-[36rem] text-lg leading-[1.7] text-body" style={step(2)}>
            {t("description")}
          </p>

          <div className="enter mt-9 flex flex-col gap-3 sm:flex-row" style={step(3)}>
            <Button size="lg" asChild>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                {t("resume")}
                <ArrowUpRight strokeWidth={1.5} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${profile.email}`}>{t("contact")}</a>
            </Button>
          </div>

          <ul className="enter mt-8 flex items-center gap-5 text-sm" style={step(4)}>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex min-h-11 items-center text-body hover:text-foreground">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex min-h-11 items-center text-body hover:text-foreground">
                LinkedIn
              </a>
            </li>
            <li className="meta">{profile.email}</li>
          </ul>
        </div>

        <div className="enter lg:col-span-6 lg:pl-6" style={step(3)}>
          <PipelineVisual />
        </div>
      </div>
    </section>
  )
}
