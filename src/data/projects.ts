import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "React SPA 경기도 사고 유형별 위치 조회 프로젝트",
    description: "교통안전기관 연락망 CRUD 기능 구현, 사고 데이터 필터링 기능 구현, Route 처리",
    tech: ["HTML5", "CSS", "JavaScript", "React"],
    github: "https://github.com/backendVirtuoso/gsitm-react-traffic-safety",
    demo: "https://backendvirtuoso.github.io/gsitm-react-traffic-safety/",
    category: "team",
  },
  {
    title: "Jeju for suffer (실시간 모니터링)",
    description: "실시간 날씨 API 연동, 커뮤니티 페이징 처리, 회원정보 수정, 예약 생성 및 리스트 삭제 기능 개발",
    tech: ["CSS3", "HTML5", "JavaScript", "Spring Boot", "H2"],
    github: "https://github.com/GSITM-Team3/spring-environment-monitoring",
    demo: "#",
    category: "team",
  },
  {
    title: "금융 프로젝트",
    description: "상품 조회 페이지 구현, 상품 등록 페이지 개발, 금융 계산기 구글 차트 API 연동",
    tech: ["Vue.js", "JSP", "HTML5", "CSS3", "JavaScript", "Spring", "PostgreSQL"],
    github: "https://github.com/GSITM-Team3/financial-project",
    demo: "#",
    category: "team",
  },
  {
    title: "개인 포트폴리오 웹 사이트 구축",
    description: "Next.js와 Tailwind CSS를 활용한 반응형 포트폴리오 웹 사이트 개발",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/backendVirtuoso/portfolio-website",
    demo: "https://hjh-portfolio.vercel.app/",
    category: "personal",
  },
  {
    title: "K-Sketch",
    description: "Kafka + STOMP 기반 채팅 서비스, 일정 생성 및 수정 기능 개발",
    tech: ["React", "Spring Boot", "MyBatis", "MySQL", "Redis", "Kafka"],
    github: "https://github.com/dreamy-travel/K-Sketch",
    demo: "#",
    category: "team",
  },
  {
    title: "Youtube 클론 코딩",
    description: "외부 API 연동 및 스케줄링을 활용한 날씨 알림 서비스. 배치 처리로 효율적인 알림 발송.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "shadcn/ui", "PostgreSQL", "NeonDB", "Vercel", "React"],
    github: "https://github.com/backendVirtuoso/new-tube",
    demo: "https://new-tube-one-kappa.vercel.app/",
    category: "course",
  },
]

