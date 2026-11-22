import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"
import { Link } from "@/i18n/routing"

function Node({ title, meta, mono = false }: { title: string; meta: string; mono?: boolean }) {
  return (
    <div className="min-w-0 rounded-lg border border-border bg-background px-3.5 py-3">
      <div className={mono ? "truncate font-mono text-[13px] text-foreground" : "truncate text-sm font-medium text-foreground"}>{title}</div>
      <div className="meta mt-0.5 text-xs">{meta}</div>
    </div>
  )
}

function Connector() {
  return (
    <div aria-hidden className="flex h-6 justify-start pl-6">
      <div className="relative w-px bg-border-strong">
        <span className="absolute -bottom-px left-1/2 size-1.5 -translate-x-1/2 rotate-45 border-b border-r border-border-strong" />
      </div>
    </div>
  )
}

/** Code-built diagram of the Todak-Todak email pipeline. Values come from src/data/projects.ts. */
export function PipelineVisual() {
  const t = useTranslations("hero.visual")

  return (
    <figure
      aria-label={t("title")}
      className="overflow-hidden rounded-xl border border-border bg-muted shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)] dark:shadow-none"
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
          </span>
          <span className="meta ml-2 truncate text-xs">{t("file")}</span>
        </div>
        <span className="meta hidden text-xs sm:inline">Spring Boot 4 · Java 21</span>
      </div>

      <div className="p-4 sm:p-5">
        <Node title={t("scheduler")} meta={t("schedulerMeta")} />
        <Connector />
        <Node title={t("batch")} meta={t("batchMeta")} />
        <Connector />

        <div className="rounded-lg border border-border bg-background px-3.5 py-3">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-sm font-medium text-foreground">{t("kafka")}</span>
            <span className="meta text-xs">{t("kafkaMeta")}</span>
          </div>
          <ol className="mt-2.5 grid grid-cols-6 gap-1.5" aria-label={t("kafkaMeta")}>
            {Array.from({ length: 6 }, (_, i) => (
              <li
                key={i}
                className="rounded-[4px] border border-border bg-muted py-1 text-center font-mono text-[11px] tabular-nums text-muted-foreground"
              >
                p{i}
              </li>
            ))}
          </ol>
        </div>
        <Connector />

        <div className="sm:hidden">
          <Node title="consumer-1..3" meta={t("consumerMeta")} mono />
        </div>
        <div className="hidden grid-cols-3 gap-2 sm:grid">
          {[1, 2, 3].map((n) => (
            <Node key={n} title={`consumer-${n}`} meta={t("consumerMeta")} mono />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-dashed border-border-strong pt-4">
          <Node title={t("mysql")} meta={t("mysqlMeta")} />
          <Node title={t("redis")} meta={t("redisMeta")} />
        </div>
      </div>

      <figcaption className="sr-only">{t("title")}</figcaption>
      <Link
        href="/projects/todak-todak"
        className="group flex min-h-11 items-center justify-between border-t border-border px-4 py-3 text-sm text-body transition-colors duration-150 ease-brand hover:bg-surface-2 hover:text-foreground"
      >
        <span>{t("title")}</span>
        <span className="inline-flex items-center gap-1 text-link">
          {t("open")}
          <ArrowUpRight className="size-4 transition-transform duration-150 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
        </span>
      </Link>
    </figure>
  )
}
