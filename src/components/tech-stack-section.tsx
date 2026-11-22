import { useTranslations } from "next-intl"
import { Section } from "@/components/section"
import { techStack } from "@/data/tech-stack"

export function TechStackSection() {
  const t = useTranslations()

  return (
    <Section id="skill" title={t("skill.title")} subtitle={t("skill.subtitle")}>
      <dl className="divide-y divide-border border-y border-border">
        {techStack.map((stack) => (
          <div key={stack.category} className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="meta pt-1">{t(stack.category)}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[17px] text-foreground">
                {stack.items.map((item) => (
                  <li key={item} translate="no">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
