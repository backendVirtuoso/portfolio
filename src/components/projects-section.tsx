"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Section } from "@/components/section"
import { projects } from "@/data/projects"
import type { Project, ProjectCategory } from "@/types"
import { cn } from "@/lib/utils"

const INITIAL_COUNT = 5
const CATEGORIES: ProjectCategory[] = ["all", "team", "personal", "course"]
const hasLink = (href?: string) => Boolean(href && href !== "#")

function TechLine({ tech, max }: { tech: string[]; max: number }) {
  const t = useTranslations("project")
  const shown = tech.slice(0, max)
  const rest = tech.length - shown.length
  return (
    <p className="meta" translate="no">
      {shown.join(" · ")}
      {rest > 0 && <span> · {t("moreTech", { count: rest })}</span>}
    </p>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  const t = useTranslations("project")
  return (
    <div className="relative z-10 flex items-center gap-5 text-sm">
      {hasLink(project.github) && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex min-h-11 items-center text-body hover:text-foreground">
          {t("code")}
        </a>
      )}
      {hasLink(project.demo) && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex min-h-11 items-center text-body hover:text-foreground">
          {t("demo")}
        </a>
      )}
    </div>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  const t = useTranslations("project")
  const image = project.details?.images?.architecture
  return (
    <article className="card-link relative grid overflow-hidden rounded-xl border border-border bg-background lg:grid-cols-12">
      <div className="flex flex-col p-6 md:p-8 lg:col-span-5">
        <p className="meta">
          {t(`category.${project.category}`)} · {project.period}
        </p>
        <h3 className="mt-4 whitespace-pre-line text-2xl font-medium leading-tight tracking-[-0.02em] text-foreground md:text-[28px]">
          <Link href={`/projects/${project.id}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 text-[15px] leading-[1.75] text-body">{project.description}</p>
        <div className="mt-6">
          <TechLine tech={project.tech} max={8} />
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <ProjectLinks project={project} />
          <span className="inline-flex items-center gap-1 text-sm text-link">
            {t("detail.viewDetail")}
            <ArrowUpRight className="size-4" strokeWidth={1.5} />
          </span>
        </div>
      </div>
      {image && (
        <div className="relative border-t border-border bg-white lg:col-span-7 lg:border-l lg:border-t-0">
          <div className="relative aspect-[16/10] h-full w-full overflow-hidden">
            <Image
              src={image}
              alt={`${project.title} ${t("detail.architecture")}`}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="zoom object-contain p-4 md:p-6"
            />
          </div>
        </div>
      )}
    </article>
  )
}

function ProjectRow({ project }: { project: Project }) {
  const t = useTranslations("project")
  return (
    <li className="group relative grid gap-3 border-b border-border py-7 transition-colors duration-150 ease-brand sm:grid-cols-[10rem_1fr_auto] sm:gap-6">
      <p className="meta pt-1">
        {t(`category.${project.category}`)}
        <br className="hidden sm:block" />
        <span className="sm:hidden"> · </span>
        {project.period.split(" - ")[0]}
      </p>
      <div className="min-w-0">
        <h3 className="whitespace-pre-line text-lg font-medium leading-snug tracking-[-0.01em] text-foreground">
          <Link href={`/projects/${project.id}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[15px] leading-[1.7] text-body">{project.description}</p>
        <div className="mt-3">
          <TechLine tech={project.tech} max={5} />
        </div>
        <div className="mt-1">
          <ProjectLinks project={project} />
        </div>
      </div>
      <ArrowUpRight
        aria-hidden
        className="hidden size-5 text-muted-foreground transition-[transform,color] duration-150 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block"
        strokeWidth={1.5}
      />
    </li>
  )
}

export function ProjectsSection() {
  const t = useTranslations("project")
  const [category, setCategory] = useState<ProjectCategory>("all")
  const [showAll, setShowAll] = useState(false)

  const filtered = category === "all" ? projects : projects.filter((p) => p.category === category)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)
  const [featured, ...rest] = visible
  const featuredHasImage = Boolean(featured?.details?.images?.architecture)

  return (
    <Section id="project" title={t("title")} subtitle={t("subtitle", { count: projects.length })} layout="stack">
      <div role="group" aria-label={t("filterLabel")} className="mb-8 inline-flex rounded-md border border-border bg-muted p-1">
        {CATEGORIES.map((value) => {
          const active = category === value
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setCategory(value)
                setShowAll(false)
              }}
              className={cn(
                "min-h-11 rounded-[5px] px-4 text-sm md:min-h-9 transition-[color,background-color,box-shadow] duration-150 ease-brand",
                active ? "bg-background text-foreground shadow-[0_0_0_1px_var(--border)]" : "text-body hover:text-foreground"
              )}
            >
              {t(`filter.${value}`)}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="border-y border-border py-16 text-body">{t("empty")}</p>
      ) : (
        <>
          {featured && featuredHasImage ? <FeaturedProject project={featured} /> : null}
          <ul className={cn("border-t border-border", featuredHasImage && "mt-10")}>
            {(featuredHasImage ? rest : visible).map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </ul>
        </>
      )}

      {filtered.length > INITIAL_COUNT && (
        <div className="mt-10">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="inline-flex h-11 items-center rounded-md border border-border-strong px-5 text-[15px] font-medium text-foreground transition-[background-color,transform] duration-150 ease-brand hover:bg-surface-2 active:translate-y-px"
          >
            {showAll ? t("showLess") : t("showMore")}
          </button>
        </div>
      )}
    </Section>
  )
}
