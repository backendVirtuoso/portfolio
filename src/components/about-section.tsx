import { useTranslations } from "next-intl"
import { Section } from "@/components/section"

const ITEMS = ["whoiam", "whatido", "whatlove"] as const

export function AboutSection() {
  const t = useTranslations("about")

  return (
    <Section id="about" title={t("title")} subtitle={t("subtitle")}>
      <dl className="divide-y divide-border border-y border-border">
        {ITEMS.map((key, i) => (
          <div key={key} className="grid gap-2 py-7 sm:grid-cols-[3rem_10rem_1fr] sm:gap-6">
            <dt className="contents">
              <span aria-hidden className="meta pt-0.5">0{i + 1}</span>
              <span className="text-base font-medium text-foreground">{t(`${key}.title`)}</span>
            </dt>
            <dd className="text-base leading-[1.75] text-body">{t(`${key}.desc`)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
