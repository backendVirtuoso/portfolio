import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "React SPA 경기도 사고 유형별 위치 조회 프로젝트",
    description: "경기도 교통사고 다발지역 정보를 조회하고 카카오맵 API로 시각화하는 React 기반 교통안전 프로젝트입니다. react-virtualized를 활용한 렌더링 최적화와 사고유형별/지역별/연도별 검색 기능을 제공합니다",
    tech: ["HTML5", "CSS", "JavaScript", "React"],
    github: "https://github.com/backendVirtuoso/gsitm-react-traffic-safety",
    demo: "https://backendvirtuoso.github.io/gsitm-react-traffic-safety/",
    category: "team",
  },
  {
    title: "Jeju for suffer (실시간 모니터링)",
    description: "Spring Boot 기반 제주도 해수욕장 종합 정보 플랫폼으로, 실시간 수질 데이터 시각화, 기상청 날씨 정보, 서핑 클래스 예약 및 결제 시스템을 제공합니다. ",
    tech: ["CSS3", "HTML5", "JavaScript", "Spring Boot", "H2"],
    github: "https://github.com/GSITM-Team3/spring-environment-monitoring",
    demo: "#",
    category: "team",
  },
  {
    title: "금융 프로젝트",
    description: "Spring Framework 5.x 기반의 금융기관 내부 업무 시스템입니다. MyBatis 동적 쿼리 기능을 구현했습니다.",
    tech: ["Vue.js", "JSP", "HTML5", "CSS3", "JavaScript", "Spring", "PostgreSQL"],
    github: "https://github.com/GSITM-Team3/financial-project",
    demo: "#",
    category: "team",
  },
  {
    title: "(구) 개인 포트폴리오 웹 사이트 구축",
    description: "Spring Boot와 Spring Security를 활용하여 OAuth2 소셜 로그인과 이메일 발송 기능을 구현한 포트폴리오 웹사이트입니다. AWS Lightsail 및 Cloudtype으로 배포되었습니다.",
    tech: ["Spring Boot", "Thymeleaf", "PostgreSQL", "cloudtype"],
    github: "https://github.com/backendVirtuoso/portfolio-website",
    demo: "#",
    category: "personal",
  },
  {
    title: "개인 포트폴리오 웹 사이트 구축",
    description: "Next.js 15와 React 19 기반의 개인 포트폴리오 웹사이트로, Radix UI 컴포넌트와 Three.js를 활용한 3D 효과, next-intl 다국어 지원을 포함한 모던 스택으로 구성되었습니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/backendVirtuoso/portfolio",
    demo: "https://hjh-portfolio.vercel.app/",
    category: "personal",
  },
  {
    title: "K-Sketch",
    description: "Spring Boot v3와 React 18 기반의 종합 여행 플랫폼으로, JWT + OAuth2 인증, WebSocket + Kafka 실시간 채팅, Tour API 연동을 통한 여행지 정보 제공 및 일정 관리 기능을 갖추고 있습니다. Redis 캐싱과 이벤트 기반 아키텍처를 적용한 풀스택 프로젝트입니다.",
    tech: ["React", "Spring Boot", "MyBatis", "MySQL", "Redis", "Kafka"],
    github: "https://github.com/backendVirtuoso/K-Sketch",
    demo: "#",
    category: "team",
  },
  {
    title: "Youtube 클론 코딩",
    description: "Next.js 15와 Drizzle ORM으로 제작된 유튜브 클론으로, Mux 영상 처리, 크리에이터 스튜디오 등 실제 서비스 수준의 고급 기능을 갖춘 프로젝트입니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "shadcn/ui", "PostgreSQL", "NeonDB", "Vercel", "React"],
    github: "https://github.com/backendVirtuoso/new-tube",
    demo: "https://new-tube-one-kappa.vercel.app/",
    category: "course",
  },
]

