import type { CSSProperties, ReactNode } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { sizeOf } from "@/data/image-sizes"

interface ProjectDetailPageProps {
  params: Promise<{ id: string; locale: string }>
}

const hasLink = (href?: string) => Boolean(href && href !== "#")

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { id, locale } = await params
  const project = projects.find((p) => p.id === id)
  const t = await getTranslations({ locale })
  if (!project) return { title: t("project.detail.notFound") }
  return {
    title: `${project.title} · ${t("meta.title")}`,
    description: project.description,
  }
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-border py-12 lg:grid-cols-12 lg:gap-10">
      <h2 className="text-xl font-medium tracking-[-0.01em] text-foreground lg:col-span-4">{title}</h2>
      <div className="min-w-0 lg:col-span-8">{children}</div>
    </section>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[1rem_1fr] text-[15px] leading-[1.75] text-body">
          <span aria-hidden className="mt-[0.8em] block h-px w-2 bg-border-strong" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Steps({ items }: { items: Array<{ title: string; details: string[] }> }) {
  return (
    <ol className="space-y-8">
      {items.map((item, i) => (
        <li key={item.title}>
          <h3 className="flex gap-3 text-base font-medium text-foreground">
            <span className="meta pt-0.5">{String(i + 1).padStart(2, "0")}</span>
            {item.title}
          </h3>
          <div className="mt-3 pl-8">
            <Bullets items={item.details} />
          </div>
        </li>
      ))}
    </ol>
  )
}

function Diagram({ src, alt, label }: { src: string; alt: string; label: string }) {
  const { width, height } = sizeOf(src)
  return (
    <figure>
      <h3 className="meta mb-3">{label}</h3>
      <div className="overflow-hidden rounded-xl border border-border bg-white p-3 md:p-5">
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1152px) 1104px, 100vw" className="h-auto w-full" />
      </div>
    </figure>
  )
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id, locale } = await params
  setRequestLocale(locale)
  const project = projects.find((p) => p.id === id)
  const t = await getTranslations("project")

  if (!project) notFound()

  const d = project.details
  const images = d?.images

  return (
    <main id="main" className="pt-16">
      <div className="wrap">
        <div className="pt-10 md:pt-14">
          <Link
            href="/#project"
            className="group inline-flex min-h-11 items-center gap-2 text-sm text-body transition-colors duration-150 ease-brand hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform duration-150 ease-brand group-hover:-translate-x-0.5" strokeWidth={1.5} />
            {t("detail.back")}
          </Link>
        </div>

        <header className="grid gap-10 pb-14 pt-8 lg:grid-cols-12 lg:gap-10 lg:pb-20">
          <div className="lg:col-span-7">
            <p className="meta enter">{t(`category.${project.category}`)}</p>
            <h1 className="enter mt-4 whitespace-pre-line text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground md:text-5xl" style={{ "--i": 1 } as CSSProperties}>
              {project.title}
            </h1>
            <p className="enter mt-6 text-lg leading-[1.7] text-body" style={{ "--i": 2 } as CSSProperties}>
              {project.description}
            </p>
            <div className="enter mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--i": 3 } as CSSProperties}>
              {hasLink(project.demo) && (
                <Button size="lg" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    {t("demo")}
                    <ArrowUpRight strokeWidth={1.5} />
                  </a>
                </Button>
              )}
              {hasLink(project.github) && (
                <Button size="lg" variant={hasLink(project.demo) ? "outline" : "default"} asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {t("code")}
                  </a>
                </Button>
              )}
            </div>
          </div>

          <dl className="self-end border-t border-border lg:col-span-5">
            {[
              { k: t("detail.period"), v: project.period },
              { k: t("detail.team"), v: project.team },
            ].map((row) => (
              <div key={row.k} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border py-4">
                <dt className="meta">{row.k}</dt>
                <dd className="text-[15px] text-foreground">{row.v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border py-4">
              <dt className="meta">{t("detail.techStack")}</dt>
              <dd className="text-[15px] leading-[1.7] text-foreground" translate="no">
                {project.tech.join(" · ")}
              </dd>
            </div>
          </dl>
        </header>

        {d?.service && (
          <Block title={t("detail.service")}>
            <p className="text-base leading-[1.8] text-body">{d.service}</p>
          </Block>
        )}

        {d?.highlights && d.highlights.length > 0 && (
          <Block title={t("detail.highlights")}>
            <Bullets items={d.highlights} />
          </Block>
        )}

        {images && (images.architecture || images.erd) && (
          <section className="space-y-10 border-t border-border py-12">
            <h2 className="text-xl font-medium tracking-[-0.01em] text-foreground">{t("detail.diagrams")}</h2>
            {images.architecture && (
              <Diagram src={images.architecture} alt={`${project.title} ${t("detail.architecture")}`} label={t("detail.architecture")} />
            )}
            {images.erd && <Diagram src={images.erd} alt={`${project.title} ${t("detail.erd")}`} label={t("detail.erd")} />}
          </section>
        )}

        {d?.problems && d.problems.length > 0 && (
          <Block title={t("detail.problems")}>
            <Steps items={d.problems} />
          </Block>
        )}

        {d?.solutions && d.solutions.length > 0 && (
          <Block title={t("detail.solutions")}>
            <Steps items={d.solutions} />
          </Block>
        )}

        {d?.results && d.results.length > 0 && (
          <Block title={t("detail.results")}>
            <Bullets items={d.results} />
          </Block>
        )}

        <div className="border-t border-border py-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/#project">
              <ArrowLeft strokeWidth={1.5} />
              {t("detail.back")}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
