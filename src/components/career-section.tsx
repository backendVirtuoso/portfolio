import { useTranslations, useLocale } from "next-intl"
import { Section } from "@/components/section"
import { experiencesData } from "@/data/education"

export function CareerSection() {
  const t = useTranslations("career")
  const locale = useLocale() as "ko" | "en"
  const experiences = experiencesData[locale]

  return (
    <Section id="career" title={t("title")} subtitle={t("subtitle")}>
      <ol className="border-t border-border">
        {experiences.map((exp) => (
          <li key={exp.company + exp.period} className="border-b border-border py-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-xl font-medium tracking-[-0.01em] text-foreground">{exp.company}</h3>
              <span className="meta shrink-0">{exp.period}</span>
            </div>
            <p className="mt-1 text-sm text-body">{exp.position}</p>
            <p className="mt-5 text-base leading-[1.75] text-body">{exp.description}</p>

            <h4 className="meta mt-7">{t("responsibilities")}</h4>
            <ul className="mt-3 space-y-3">
              {exp.responsibilities.map((resp) => {
                const [lead, ...rest] = resp.split(/:\s/)
                return (
                  <li key={resp} className="grid grid-cols-[1rem_1fr] text-[15px] leading-[1.7] text-body">
                    <span aria-hidden className="mt-[0.7em] block h-px w-2 bg-border-strong" />
                    <span>
                      {rest.length > 0 ? (
                        <>
                          <span className="font-medium text-foreground">{lead}</span>
                          {" — "}
                          {rest.join(": ")}
                        </>
                      ) : (
                        resp
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>

            <p className="meta mt-7" translate="no">
              {exp.tech.join(" · ")}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
