import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  /** split: heading in the left 4 columns, content in the right 8. stack: heading above content. */
  layout?: "split" | "stack"
  className?: string
}

export function Section({ id, title, subtitle, children, layout = "split", className }: SectionProps) {
  const heading = (
    <div className={layout === "split" ? "lg:col-span-4" : "mb-12 max-w-2xl"}>
      <h2 id={`${id}-title`} className="text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-foreground md:text-[40px]">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-body md:text-lg">{subtitle}</p>}
    </div>
  )

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("border-t border-border", className)}
    >
      <div className="wrap py-20 md:py-28">
        {layout === "split" ? (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            {heading}
            <div className="min-w-0 lg:col-span-8">{children}</div>
          </div>
        ) : (
          <>
            {heading}
            {children}
          </>
        )}
      </div>
    </section>
  )
}
