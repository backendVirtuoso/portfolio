"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslations, useLocale } from "next-intl"
import { Link, useRouter, usePathname } from "@/i18n/routing"
import { cn } from "@/lib/utils"

const NAV_IDS = ["about", "skill", "career", "project", "education", "contact"] as const

const iconButton =
  "inline-flex size-11 items-center justify-center rounded-md text-body transition-[color,background-color,transform] duration-150 ease-brand hover:bg-surface-2 hover:text-foreground active:translate-y-px md:size-9"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [isMenuOpen])

  const toggleLanguage = () => {
    router.replace(pathname, { locale: locale === "ko" ? "en" : "ko" })
  }

  const isDark = mounted && resolvedTheme === "dark"

  const controls = (
    <>
      <button type="button" onClick={toggleLanguage} className={cn(iconButton, "meta w-auto px-2 text-body")} aria-label={t("header.language")}>
        {t("header.languageShort")}
      </button>
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={iconButton}
        aria-label={isDark ? t("header.themeLight") : t("header.themeDark")}
      >
        {mounted ? isDark ? <Sun className="size-4" strokeWidth={1.5} /> : <Moon className="size-4" strokeWidth={1.5} /> : <span className="size-4" />}
      </button>
    </>
  )

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-150 ease-brand",
        isScrolled || isMenuOpen ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent"
      )}
    >
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Primary">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex min-h-11 items-center gap-2.5 text-[15px] font-medium tracking-tight text-foreground"
          aria-label={`${t("header.name")}, ${t("header.home")}`}
        >
          <span aria-hidden className="grid size-6 place-items-center rounded-[5px] bg-foreground font-mono text-[11px] font-medium text-background">
            JH
          </span>
          {t("header.name")}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <ul className="mr-2 flex items-center">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  className="rounded-md px-3 py-2 text-sm text-body transition-colors duration-150 ease-brand hover:text-foreground"
                >
                  {t(`nav.${id}`)}
                </Link>
              </li>
            ))}
          </ul>
          {controls}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {controls}
          <button
            type="button"
            className={iconButton}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t("header.menuClose") : t("header.menuOpen")}
          >
            {isMenuOpen ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto overscroll-contain bg-background md:hidden">
          <ul className="wrap pt-4">
            {NAV_IDS.map((id, i) => (
              <li key={id} className="enter border-b border-border" style={{ "--i": i } as CSSProperties}>
                <Link
                  href={`/#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-14 items-center text-2xl font-medium tracking-tight text-foreground"
                >
                  {t(`nav.${id}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
