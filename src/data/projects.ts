import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "개인 포트폴리오 웹 사이트 구축",
    description: "Next.js 15와 React 19 기반의 개인 포트폴리오 웹사이트로, Radix UI 컴포넌트와 Three.js를 활용한 3D 효과, next-intl 다국어 지원을 포함한 모던 스택으로 구성되었습니다.",
    period: "2025.11.04 - 2025.12.01",
    team: "개인 프로젝트",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/backendVirtuoso/portfolio",
    demo: "https://hjh-portfolio.vercel.app/",
    category: "personal",
    details: {
      // 01. 프로젝트 소개
      introduction: "Next.js 15와 React 19 기반의 모던 포트폴리오 웹사이트 - 3D 효과와 다국어 지원을 갖춘 개인 브랜딩 플랫폼",

      // 02. 프로젝트 개요
      overview: {
        background: "기존 Spring Boot 기반 포트폴리오의 성능 및 사용자 경험 개선 필요성 대두",
        purpose: "최신 프론트엔드 기술 스택을 활용하여 빠르고 인터랙티브한 포트폴리오 사이트 구축",
      },

      // 03. 진행한 일
      tasks: [
        {
          background: "정적 사이트의 한계로 인한 낮은 사용자 참여도",
          problem: "서버 사이드 렌더링 부재로 SEO 최적화 미흡 및 초기 로딩 속도 저하",
          core: "Next.js App Router와 React Server Components 도입",
          solution: "서버 컴포넌트를 통한 초기 렌더링 최적화 및 동적 메타데이터 생성으로 SEO 개선",
        },
        {
          background: "글로벌 채용 시장 대응을 위한 다국어 지원 필요",
          problem: "기존 i18n 라이브러리의 복잡한 설정 및 성능 오버헤드",
          core: "next-intl을 활용한 서버 컴포넌트 기반 다국어 처리",
          solution: "라우팅 레벨에서의 언어 분기 처리로 클라이언트 번들 크기 최소화 및 성능 개선",
        },
      ],

      // 04. 과정
      process: [
        {
          action: "Three.js와 React Three Fiber를 활용한 3D 배경 효과 구현",
          insight: "Canvas 렌더링 최적화를 위해 useFrame 훅의 렌더링 주기를 조절하여 60fps 유지",
        },
        {
          action: "Radix UI를 활용한 접근성 중심의 컴포넌트 설계",
          insight: "키보드 내비게이션과 스크린 리더 지원을 기본으로 제공하는 컴포넌트 라이브러리 선택의 중요성 인식",
        },
        {
          action: "Vercel을 통한 CI/CD 파이프라인 구축 및 자동 배포 설정",
          insight: "Git 기반 자동 배포로 개발 생산성 향상, Preview 배포를 통한 변경사항 사전 검증 가능",
        },
      ],

      // 05. 결과물
      results: {
        achievements: [
          "Lighthouse 성능 점수 95점 이상 달성 (Desktop 기준)",
          "국문/영문 완벽 지원으로 글로벌 접근성 확보",
          "Three.js 기반 인터랙티브 3D 배경 효과 구현",
          "완전 반응형 디자인으로 모든 디바이스 지원",
        ],
        keyPoints: [
          "서버 컴포넌트를 활용한 초기 로딩 속도 40% 개선",
          "next-intl 도입으로 다국어 번들 크기 30% 감소",
          "접근성 표준(WCAG 2.1 AA) 준수",
        ],
      },

      // 06. 성장한 점
      growth: {
        achievements: [
          "Next.js 15의 최신 기능(Server Actions, Parallel Routes) 실전 적용 경험",
          "Three.js를 활용한 3D 웹 그래픽 구현 역량 확보",
        ],
        learnings: [
          "서버 컴포넌트와 클라이언트 컴포넌트의 적절한 분리가 성능에 미치는 영향 학습",
          "국제화(i18n) 구현 시 번들 최적화 전략의 중요성 인식",
          "접근성을 고려한 UI 설계의 필요성과 Radix UI 같은 도구 활용법 습득",
          "CI/CD 파이프라인 구축을 통한 개발 워크플로우 자동화 경험",
        ],
      },

      // 07. 나의 역할
      myRole: {
        period: "2025.11.04 - 2025.12.01 (약 4주)",
        responsibilities: [
          "프로젝트 기획 및 기술 스택 선정",
          "Next.js App Router 기반 라우팅 구조 설계",
          "Three.js를 활용한 3D 배경 효과 개발",
          "next-intl을 이용한 다국어 지원 시스템 구축",
          "Radix UI 기반 재사용 가능한 컴포넌트 라이브러리 구축",
          "Vercel 배포 및 도메인 설정",
        ],
        learnings: [
          "최신 React 생태계(RSC, Server Actions)에 대한 깊은 이해",
          "성능 최적화 및 사용자 경험 개선 전략",
          "풀스택 개발 및 배포 프로세스 전반에 대한 실무 경험",
        ],
      },
    },
  },
  {
    id: "youtube-clone",
    title: "Youtube 클론 코딩",
    description: "Next.js 15와 Drizzle ORM으로 제작된 유튜브 클론으로, Mux 영상 처리, 크리에이터 스튜디오 등 실제 서비스 수준의 고급 기능을 갖춘 프로젝트입니다.",
    period: "2025.06.02 - 2025.06.28",
    team: "클론코딩 프로젝트",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "shadcn/ui", "PostgreSQL", "NeonDB", "Vercel", "React"],
    github: "https://github.com/backendVirtuoso/new-tube",
    demo: "https://new-tube-one-kappa.vercel.app/",
    category: "course",
  },
  {
    id: "k-sketch",
    title: "K-Sketch",
    description: "Spring Boot v3와 React 18 기반의 종합 여행 플랫폼으로, JWT + OAuth2 인증, WebSocket + Kafka 실시간 채팅, Tour API 연동을 통한 여행지 정보 제공 및 일정 관리 기능을 갖추고 있습니다. Redis 캐싱과 이벤트 기반 아키텍처를 적용한 풀스택 프로젝트입니다.",
    period: "2024.10.21 - 2025.03.19",
    team: "5인 팀 프로젝트",
    tech: ["React", "Spring Boot", "MyBatis", "MySQL", "Redis", "Kafka"],
    github: "https://github.com/backendVirtuoso/K-Sketch",
    demo: "#",
    category: "team",
  },
  {
    id: "old-portfolio",
    title: "(구) 개인 포트폴리오 웹 사이트 구축",
    description: "Spring Boot와 Spring Security를 활용하여 OAuth2 소셜 로그인과 이메일 발송 기능을 구현한 포트폴리오 웹사이트입니다. AWS Lightsail 및 Cloudtype으로 배포되었습니다.",
    period: "2024.07.29 - 2024.08.18",
    team: "개인 프로젝트",
    tech: ["Spring Boot", "Thymeleaf", "PostgreSQL", "cloudtype"],
    github: "https://github.com/backendVirtuoso/portfolio-website",
    demo: "#",
    category: "personal",
  },
  {
    id: "finance-project",
    title: "금융 프로젝트",
    description: "Spring Framework 5.x 기반의 금융기관 내부 업무 시스템입니다. MyBatis 동적 쿼리 기능을 구현했습니다.",
    period: "2024.07.04 - 2024.07.25",
    team: "6인 팀 프로젝트",
    tech: ["Vue.js", "JSP", "HTML5", "CSS3", "JavaScript", "Spring", "PostgreSQL"],
    github: "https://github.com/GSITM-Team3/financial-project",
    demo: "#",
    category: "team",
  },
  {
    id: "jeju-for-suffer",
    title: "Jeju for suffer (실시간 모니터링)",
    description: "Spring Boot 기반 제주도 해수욕장 종합 정보 플랫폼으로, 실시간 수질 데이터 시각화, 기상청 날씨 정보, 서핑 클래스 예약 및 결제 시스템을 제공합니다. ",
    period: "2024.06.21 - 2024.07.03",
    team: "6인 팀 프로젝트",
    tech: ["CSS3", "HTML5", "JavaScript", "Spring Boot", "H2"],
    github: "https://github.com/GSITM-Team3/spring-environment-monitoring",
    demo: "#",
    category: "team",
  },
  {
    id: "traffic-safety",
    title: "React SPA \n경기도 사고 유형별 위치 조회 프로젝트",
    description: "경기도 교통사고 다발지역 정보를 조회하고 카카오맵 API로 시각화하는 React 기반 교통안전 프로젝트입니다. react-virtualized를 활용한 렌더링 최적화와 사고유형별/지역별/연도별 검색 기능을 제공합니다",
    period: "2024.05.28 - 2024.06.04",
    team: "6인 팀 프로젝트",
    tech: ["HTML5", "CSS", "JavaScript", "React"],
    github: "https://github.com/backendVirtuoso/gsitm-react-traffic-safety",
    demo: "https://backendvirtuoso.github.io/gsitm-react-traffic-safety/",
    category: "team",
  },
]
