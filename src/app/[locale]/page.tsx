import { setRequestLocale } from "next-intl/server"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { CareerSection } from "@/components/career-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main id="main">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <CareerSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
