import { useTranslations, useLocale } from "next-intl"
import { Section } from "@/components/section"
import { educationData, bootcampData, certificationsData } from "@/data/education"

type Row = { key: string; title: string; sub: string; date: string; body?: string }

function Group({ label, rows }: { label: string; rows: Row[] }) {
  return (
    <div className="grid gap-3 border-t border-border py-7 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <h3 className="meta pt-1">{label}</h3>
      <ul className="space-y-6">
        {rows.map((row) => (
          <li key={row.key}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <span className="text-base font-medium text-foreground">{row.title}</span>
              <span className="meta shrink-0">{row.date}</span>
            </div>
            <p className="mt-1 text-sm text-body">{row.sub}</p>
            {row.body && <p className="mt-3 whitespace-pre-line text-[15px] leading-[1.75] text-body">{row.body}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function EducationSection() {
  const t = useTranslations("education")
  const locale = useLocale() as "ko" | "en"

  const academic = educationData[locale].map((e) => ({ key: e.degree, title: e.school, sub: e.degree, date: e.period }))
  const training = bootcampData[locale].map((e) => ({
    key: e.school,
    title: e.school,
    sub: e.degree,
    date: e.period,
    body: e.description,
  }))
  const certs = certificationsData[locale].map((c) => ({ key: c.name, title: c.name, sub: c.issuer, date: c.date }))

  return (
    <Section id="education" title={t("title")} subtitle={t("subtitle")}>
      <div className="border-b border-border">
        <Group label={t("academic.title")} rows={academic} />
        <Group label={t("training.title")} rows={training} />
        <Group label={t("cert.title")} rows={certs} />
      </div>
    </Section>
  )
}
