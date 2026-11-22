import { useTranslations } from "next-intl"
import { profile } from "@/data/profile"

export function Footer() {
  const t = useTranslations("footer")
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="wrap flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="meta">
          © {year} {t("name")} · {t("rights")}
        </p>
        <ul className="flex items-center gap-5 text-sm">
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
          <li>
            <a href={`mailto:${profile.email}`} className="link-draw inline-flex min-h-11 items-center text-body hover:text-foreground">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
