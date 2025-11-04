"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ko" | "en"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = {
  ko: {
    // Header
    "nav.about": "About",
    "nav.skill": "Skill",
    "nav.project": "Project",
    "nav.contact": "Contact",
    "header.name": "김개발",

    // Hero Section
    "hero.badge": "신입 백엔드 개발자",
    "hero.greeting": "안녕하세요,",
    "hero.name": "김개발",
    "hero.title": "입니다",
    "hero.description":
      "확장 가능한 서버 아키텍처와 효율적인 데이터베이스 설계를 통해\n안정적이고 성능 좋은 백엔드 시스템을 구축합니다.",
    "hero.contact": "연락하기",
    "hero.resume": "이력서 보기",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "저를 소개합니다",
    "about.whoiam.title": "Who I Am",
    "about.whoiam.desc":
      "문제 해결을 즐기는 신입 백엔드 개발자입니다. 효율적인 코드와 확장 가능한 아키텍처 설계에 관심이 많습니다.",
    "about.whatido.title": "What I Do",
    "about.whatido.desc":
      "RESTful API 설계, 데이터베이스 최적화, 서버 아키텍처 구축을 통해 안정적인 백엔드 시스템을 개발합니다.",
    "about.whatlove.title": "What I Love",
    "about.whatlove.desc":
      "새로운 기술을 배우고 적용하는 것을 좋아하며, 팀과 협업하여 더 나은 서비스를 만드는 것에 열정이 있습니다.",

    // Tech Stack Section
    "skill.title": "기술 스택",
    "skill.subtitle": "다양한 기술을 활용하여 최적의 솔루션을 제공합니다",
    "skill.language": "언어",
    "skill.framework": "프레임워크",
    "skill.database": "데이터베이스",
    "skill.tools": "도구",

    // Projects Section
    "project.title": "프로젝트",
    "project.subtitle": "실무에 적용 가능한 프로젝트 경험",
    "project.filter.all": "전체",
    "project.filter.team": "팀",
    "project.filter.personal": "개인",
    "project.filter.course": "강의",
    "project.category.team": "팀",
    "project.category.personal": "개인",
    "project.category.course": "강의",
    "project.code": "코드",
    "project.demo": "데모",
    "project.empty": "해당 카테고리의 프로젝트가 없습니다.",

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "함께 일하고 싶으시다면 언제든 연락주세요",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.send": "이메일 보내기",

    // Footer
    "footer.name": "김개발",
    "footer.description":
      "확장 가능한 서버 아키텍처와 효율적인 데이터베이스 설계를 통해 안정적이고 성능 좋은 백엔드 시스템을 구축합니다.",
    "footer.quicklinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.rights": "All rights reserved.",
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.skill": "Skill",
    "nav.project": "Project",
    "nav.contact": "Contact",
    "header.name": "Kim Dev",

    // Hero Section
    "hero.badge": "Junior Backend Developer",
    "hero.greeting": "Hello,",
    "hero.name": "I'm Kim",
    "hero.title": "",
    "hero.description":
      "I design and implement stable and high-performance backend systems\nthrough scalable server architecture and efficient database design.",
    "hero.contact": "Contact Me",
    "hero.resume": "View Resume",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Let me introduce myself",
    "about.whoiam.title": "Who I Am",
    "about.whoiam.desc":
      "I'm a junior backend developer who enjoys problem-solving. I'm interested in efficient code and scalable architecture design.",
    "about.whatido.title": "What I Do",
    "about.whatido.desc":
      "I develop stable backend systems through RESTful API design, database optimization, and server architecture construction.",
    "about.whatlove.title": "What I Love",
    "about.whatlove.desc":
      "I love learning and applying new technologies, and I'm passionate about creating better services through team collaboration.",

    // Tech Stack Section
    "skill.title": "Tech Stack",
    "skill.subtitle": "Providing optimal solutions using various technologies",
    "skill.language": "Language",
    "skill.framework": "Framework",
    "skill.database": "Database",
    "skill.tools": "Tools",

    // Projects Section
    "project.title": "Projects",
    "project.subtitle": "Practical project experience",
    "project.filter.all": "All",
    "project.filter.team": "Team",
    "project.filter.personal": "Personal",
    "project.filter.course": "Course",
    "project.category.team": "Team",
    "project.category.personal": "Personal",
    "project.category.course": "Course",
    "project.code": "Code",
    "project.demo": "Demo",
    "project.empty": "No projects in this category.",

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Feel free to reach out if you'd like to work together",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.send": "Send Email",

    // Footer
    "footer.name": "Kim Dev",
    "footer.description":
      "Building stable and high-performance backend systems through scalable server architecture and efficient database design.",
    "footer.quicklinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.rights": "All rights reserved.",
  },
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ko" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ko] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
