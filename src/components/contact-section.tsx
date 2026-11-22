import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { profile } from "@/data/profile"

export function ContactSection() {
  const t = useTranslations("contact")

  const rows = [
    { label: t("github"), value: profile.githubLabel, href: profile.github },
    { label: t("linkedin"), value: profile.linkedinLabel, href: profile.linkedin },
    { label: t("resume"), value: t("resumeValue"), href: profile.resume },
  ]

  return (
    <Section id="contact" title={t("title")} subtitle={t("subtitle")} layout="stack">
      <a
        href={`mailto:${profile.email}`}
        className="link-draw inline-block break-all pb-1 text-[clamp(2rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-foreground"
        aria-label={`${t("email")}: ${profile.email}`}
      >
        {profile.email}
      </a>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" asChild>
          <a href={`mailto:${profile.email}`}>{t("send")}</a>
        </Button>
      </div>

      <ul className="mt-14 border-t border-border">
        {rows.map((row) => (
          <li key={row.label} className="border-b border-border">
            <a
              href={row.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid min-h-16 grid-cols-[8rem_1fr_auto] items-center gap-4 py-4 transition-colors duration-150 ease-brand hover:bg-muted sm:grid-cols-[10rem_1fr_auto] sm:gap-6"
            >
              <span className="meta">{row.label}</span>
              <span className="min-w-0 truncate text-base text-foreground">{row.value}</span>
              <ArrowUpRight
                aria-hidden
                className="mr-2 size-5 text-muted-foreground transition-[transform,color] duration-150 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                strokeWidth={1.5}
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
