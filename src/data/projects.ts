import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "개인 포트폴리오 웹 사이트 구축",
    description: "Next.js 15와 React 19 기반의 개인 포트폴리오 웹사이트로, Radix UI 컴포넌트와 Three.js를 활용한 3D 효과, next-intl 다국어 지원을 포함한 모던 스택으로 구성되었습니다.",
    period: "2025.11.04 - 2025.12.01",
    team: "개인 프로젝트",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React", "Three.js", "shadcn/ui", "next-intl"],
    github: "https://github.com/backendVirtuoso/portfolio",
    demo: "https://hjh-portfolio.vercel.app/",
    category: "personal",
    details: {
      // 01. 프로젝트 소개
      introduction: "Next.js 15와 최신 웹 기술 스택으로 제작한 현대적이고 인터랙티브한 포트폴리오 웹사이트 - 다국어 지원, 3D 인터랙션, 다크모드를 갖춘 반응형 웹 애플리케이션",

      // 02. 프로젝트 개요
      overview: {
        background: "기존 Spring Boot + Thymeleaf 기반 포트폴리오는 서버 사이드 렌더링으로 인한 느린 페이지 전환과 정적 콘텐츠 수정 시 서버 재배포가 필요한 한계가 있었습니다.",
        purpose: "최신 프론트엔드 프레임워크를 도입하여 빠른 페이지 전환과 SEO 최적화를 달성하고, 반응형 디자인과 국제화를 구현하여 글로벌 채용 시장에 대응 가능한 포트폴리오 구축",
      },

      // 03. 진행한 일
      tasks: [
        {
          background: "정적 사이트의 한계로 인한 낮은 사용자 참여도 및 느린 페이지 전환",
          problem: "서버 사이드 렌더링 부재로 SEO 최적화 미흡 및 초기 로딩 속도 저하",
          core: "Next.js 15 App Router와 React Server Components 도입",
          solution: "서버 컴포넌트를 통한 초기 렌더링 최적화 및 동적 메타데이터 생성으로 SEO 개선, Vercel CDN 캐싱으로 LCP 1.2초 달성",
        },
        {
          background: "글로벌 채용 시장 대응을 위한 다국어 지원 필요",
          problem: "기존 i18n 라이브러리의 복잡한 설정 및 성능 오버헤드로 번들 크기 증가",
          core: "next-intl v4.5를 활용한 서버 컴포넌트 기반 다국어 처리",
          solution: "동적 라우팅 [locale]로 SEO 친화적 URL 구현, JSON 기반 번역 파일로 콘텐츠 중앙 관리하여 번들 크기 30% 감소",
        },
        {
          background: "사용자 경험 향상을 위한 인터랙티브한 UI 요구",
          problem: "Three.js SSR 환경에서 'window is not defined' 에러 발생",
          core: "'use client' 디렉티브와 하이드레이션 최적화",
          solution: "클라이언트 컴포넌트로 명시하고 useEffect로 마운트 감지, 모바일 환경에서는 성능을 위해 3D 씬 비활성화",
        },
        {
          background: "테마 전환 시 사용자 경험 저해",
          problem: "다크모드 전환 시 FOUC(Flash of Unstyled Content) 발생",
          core: "블로킹 스크립트와 CSS 변수를 활용한 테마 초기화",
          solution: "로컬 스토리지 + 블로킹 스크립트로 깜빡임 현상 제거, disableTransitionOnChange로 부드러운 전환",
        },
        {
          background: "Vercel 무료 플랜의 빌드 시간 제한(45초) 존재",
          problem: "70개 이상의 npm 패키지 설치로 빌드 시간 52초 초과",
          core: "의존성 최적화 및 SWC 컴파일러 활용",
          solution: "사용하지 않는 Radix UI 컴포넌트 제거, npm ci 사용, optimizePackageImports로 아이콘 트리 쉐이킹하여 빌드 시간 45% 단축(29초)",
        },
      ],

      // 04. 과정
      process: [
        {
          action: "Three.js와 React Three Fiber를 활용한 3D 인터랙티브 Hero Section 구현",
          insight: "Canvas 렌더링 최적화를 위해 useFrame 훅의 렌더링 주기를 조절하여 60fps 유지, 모바일에서는 디바이스 감지로 3D 씬 숨김 처리하여 초기 로딩 속도 2.8초 개선",
        },
        {
          action: "Radix UI 기반 shadcn/ui로 접근성 중심의 컴포넌트 라이브러리 구축",
          insight: "키보드 내비게이션과 스크린 리더 지원을 기본 제공하는 컴포넌트 선택으로 WCAG AAA 등급 달성, 소스 코드 직접 수정 가능하여 커스터마이징 용이",
        },
        {
          action: "GitHub와 Vercel 연동으로 CI/CD 파이프라인 구축 및 배포 자동화",
          insight: "Preview 배포를 통한 변경사항 사전 검증 가능, CDN 캐시 히트율 94% 달성. 기존 Spring Boot 배포 대비 배포 시간 86.6% 단축 (5분 → 40초)으로 운영 효율성 극대화",
        },
        {
          action: "Chrome DevTools Performance 패널 및 Lighthouse를 활용한 성능 최적화",
          insight: "JavaScript 번들 26% 감소(420KB → 312KB), CSS 번들 78% 감소(68KB → 15KB), 이미지 최적화로 72% 감소(1.2MB → 340KB)",
        },
        {
          action: "미들웨어 무한 리다이렉트 오류 해결",
          insight: "커스텀 로직 제거하고 next-intl 기본 미들웨어 사용, 검증된 라이브러리 활용의 중요성과 정규식 matcher로 불필요한 미들웨어 실행 방지 학습",
        },
      ],

      // 05. 결과물
      results: {
        achievements: [
          "Lighthouse 점수 - Performance: 96(Desktop), 91(Mobile), Accessibility: 100, Best Practices: 100, SEO: 100",
          "Core Web Vitals 모든 항목 Good 등급 - LCP 1.2초, FID 8ms, CLS 0.02",
          "국문/영문 완벽 지원으로 글로벌 접근성 확보 (한국어/영어 자동 감지 및 전환)",
          "Three.js 기반 인터랙티브 3D 배경 효과 60fps 유지",
          "완전 반응형 디자인 (Mobile, Tablet, Desktop 최적화)",
          "Vercel 배포 후 60일+ 무장애 운영",
        ],
        keyPoints: [
          "배포 시간 86.6% 단축 (5분 → 40초) - GitHub & Vercel 연동 자동화",
          "빌드 시간 45% 단축 (52초 → 29초) - 의존성 최적화 및 SWC 컴파일러 활용",
          "JavaScript 번들 크기 26% 감소 (420KB → 312KB)",
          "CSS 번들 크기 78% 감소 (68KB → 15KB)",
          "이미지 최적화 72% 개선 (1.2MB → 340KB)",
          "모바일 Lighthouse 점수 73 → 91점 (3D 씬 조건부 렌더링)",
          "접근성 표준(WCAG AAA) 준수 및 키보드 네비게이션 완벽 지원",
        ],
      },

      // 06. 성장한 점
      growth: {
        achievements: [
          "Next.js 15 App Router와 React 19 Server Components 실전 적용 경험",
          "Three.js를 활용한 3D 웹 그래픽 구현 및 성능 최적화 역량 확보",
          "Lighthouse 기반 성능 측정 및 개선 사이클 경험 (측정 → 분석 → 최적화)",
          "국제화(i18n) 구현 및 다국어 라우팅 전략 수립 경험",
        ],
        learnings: [
          "서버 컴포넌트와 클라이언트 컴포넌트의 최적 조합 - SSR/SSG 혼합 아키텍처 설계 역량",
          "TypeScript 타입 시스템 실전 활용 - Generic, Union, Utility Types로 타입 안정성 확보",
          "성능 최적화 전략 - Code Splitting, Dynamic Import, 이미지 최적화(WebP, Lazy Loading)",
          "접근성(Accessibility) 고려 - ARIA 속성, 키보드 네비게이션, 스크린 리더 테스트",
          "트러블슈팅 경험 - Three.js SSR 에러, 미들웨어 무한 리다이렉트, FOUC, Vercel 빌드 타임아웃 해결",
          "Git & GitHub 협업 워크플로우 - Feature Branch 전략, Conventional Commits 규칙 준수",
        ],
      },

      // 07. 나의 역할
      myRole: {
        period: "2025.11.04 - 2025.12.01 (약 4주)",
        responsibilities: [
          "프로젝트 기획 및 기술 스택 선정 - Next.js 15, React 19, TypeScript, Tailwind CSS, Three.js 등",
          "Next.js App Router 기반 라우팅 구조 설계 및 [locale] 동적 라우팅 구현",
          "Three.js + React Three Fiber로 3D 인터랙티브 Hero Section 개발",
          "next-intl을 이용한 서버 컴포넌트 기반 다국어 지원 시스템 구축",
          "shadcn/ui 기반 재사용 가능한 컴포넌트 라이브러리 구축 및 접근성 준수",
          "성능 최적화 - 번들 크기 감소, 이미지 최적화, Lighthouse 점수 90+ 달성",
          "Vercel CI/CD 파이프라인 구축, 자동 배포 설정 및 도메인 연결",
          "5가지 주요 트러블슈팅 해결 - Three.js SSR, 미들웨어, FOUC, Vercel 빌드, 모바일 성능",
        ],
        learnings: [
          "최신 React 생태계(RSC, Server Actions) 및 Next.js App Router에 대한 깊은 이해",
          "성능 최적화 및 사용자 경험 개선 전략 - Chrome DevTools, Lighthouse 활용",
          "풀스택 개발 및 배포 프로세스 전반에 대한 실무 경험",
          "프로그레시브 인핸스먼트(Progressive Enhancement) 개념 - 모바일 우선 성능 최적화",
        ],
      },
      images: {
        architecture: "/images/projects/portfolio-nextjs-architecture.jpg",
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
    details: {
      introduction: "Next.js 15와 Drizzle ORM을 활용한 풀스택 유튜브 클론 프로젝트 - Mux 영상 처리, 크리에이터 스튜디오, 실시간 업로드 등 실제 서비스 수준의 기능 구현",

      overview: {
        background: "실제 서비스 수준의 동영상 플랫폼 개발 경험을 위한 클론코딩 프로젝트",
        purpose: "Next.js 15 최신 기능과 Drizzle ORM을 활용하여 영상 스트리밍, 업로드, 관리 등 복잡한 미디어 처리 로직을 구현하고 풀스택 개발 역량 강화",
      },

      tasks: [
        {
          background: "대용량 동영상 파일의 효율적인 처리 및 스트리밍 필요",
          problem: "직접 영상 인코딩 및 스트리밍 구현 시 서버 부하 및 복잡도 증가",
          core: "Mux API를 활용한 전문 영상 처리 서비스 도입",
          solution: "Mux의 자동 인코딩, 적응형 비트레이트 스트리밍(ABR), HLS 프로토콜 활용으로 안정적인 영상 재생 환경 구축",
        },
        {
          background: "크리에이터를 위한 영상 관리 및 분석 대시보드 필요",
          problem: "복잡한 데이터 관계와 실시간 업데이트 처리",
          core: "Drizzle ORM과 PostgreSQL을 활용한 타입 안전 데이터베이스 설계",
          solution: "영상 메타데이터, 조회수, 좋아요 등을 효율적으로 관리하는 스키마 설계 및 쿼리 최적화",
        },
      ],

      process: [
        {
          action: "Next.js 15 App Router와 Server Actions를 활용한 영상 업로드 플로우 구현",
          insight: "서버 액션을 통한 파일 업로드 처리로 클라이언트 부담 감소 및 보안 향상",
        },
        {
          action: "Drizzle ORM의 타입 안전 쿼리 빌더로 데이터베이스 스키마 설계",
          insight: "TypeScript와의 완벽한 통합으로 런타임 에러 사전 방지 및 개발 생산성 향상",
        },
        {
          action: "shadcn/ui 컴포넌트로 유튜브 UI/UX 재현",
          insight: "기존 디자인 시스템 분석 및 재구현을 통한 UI/UX 설계 감각 향상",
        },
      ],

      results: {
        achievements: [
          "영상 업로드, 스트리밍, 검색, 재생목록 등 핵심 기능 구현",
          "크리에이터 스튜디오 대시보드 - 영상 관리, 조회수 분석 기능",
          "Mux를 활용한 적응형 비트레이트 스트리밍(ABR) 구현",
          "NeonDB를 활용한 서버리스 PostgreSQL 연동",
        ],
        keyPoints: [
          "Drizzle ORM으로 타입 안전한 데이터베이스 쿼리 작성",
          "Next.js Server Actions를 활용한 서버 사이드 파일 처리",
          "Mux API 연동으로 전문적인 영상 처리 경험",
        ],
      },

      growth: {
        achievements: [
          "풀스택 개발 역량 - 프론트엔드부터 백엔드, 데이터베이스까지 전체 구현",
          "외부 API 연동 경험 - Mux 영상 처리 API 통합",
          "복잡한 데이터 모델링 경험 - 영상, 사용자, 댓글 등 다대다 관계 설계",
        ],
        learnings: [
          "Drizzle ORM의 타입 안전 쿼리와 마이그레이션 시스템 학습",
          "대용량 파일 업로드 및 스트리밍 처리 방법 이해",
          "Next.js 15 Server Actions를 활용한 서버 사이드 로직 구현",
          "NeonDB 서버리스 데이터베이스 활용 및 관리",
        ],
      },

      myRole: {
        period: "2025.06.02 - 2025.06.28 (약 4주)",
        responsibilities: [
          "프로젝트 전체 기획 및 기술 스택 선정",
          "Next.js App Router 기반 페이지 라우팅 구조 설계",
          "Drizzle ORM을 활용한 데이터베이스 스키마 설계 및 마이그레이션",
          "Mux API 연동 - 영상 업로드, 인코딩, 스트리밍 구현",
          "크리에이터 스튜디오 대시보드 개발",
          "사용자 인증 및 권한 관리 시스템 구축",
          "Vercel 배포 및 환경 변수 관리",
        ],
        learnings: [
          "Drizzle ORM과 PostgreSQL을 활용한 타입 안전 데이터베이스 개발",
          "미디어 스트리밍 서비스 아키텍처 이해",
          "Next.js Server Actions를 활용한 실전 개발 경험",
        ],
      },
    },
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
    details: {
      introduction: "Spring Boot v3와 React 18 기반의 종합 여행 플랫폼 - Redis 캐싱과 Kafka 이벤트 드리븐 아키텍처로 DB 병목을 해결하고 조회 속도 12배 개선",

      overview: {
        background: "RDB에 대한 강한 의존성이 확장성의 발목을 잡고 있었습니다. 채팅방 입장 시마다 동일한 메시지 내역을 DB에서 반복 조회하며 발생하는 과도한 Disk I/O가 커넥션 풀 고갈의 직접적인 원인이었고, 트래픽 증가 시 서비스 전체 마비로 이어질 수 있는 구조적 결함 발견",
        purpose: "DB 접근을 원천 차단하는 아키텍처로 재설계하여 조회 성능 가속화 및 쓰기 부하 분산, 느슨한 결합(Loose Coupling) 시스템 구축으로 확장 가능한 토대 마련",
      },

      tasks: [
        {
          background: "채팅방 입장 시마다 동일한 메시지 내역을 DB에서 반복 조회",
          problem: "변하지 않는 과거 대화 내역에 대해 반복적으로 발생하는 Disk I/O가 시스템 자원을 낭비하고 커넥션 풀 고갈 유발",
          core: "Look Aside 패턴 기반 Redis 캐싱 전략",
          solution: "채팅방별 '최근 메시지 Top 100'을 Redis(In-Memory)에 캐싱하여 DB 접근을 원천 차단. Cache Miss 발생 시에만 DB를 참조하도록 설계하여 다수의 유저가 동시에 입장하더라도 DB 부하 없이 메모리에서 데이터를 즉각 반환. 결과적으로 조회 속도 12배 개선 달성",
        },
        {
          background: "채팅 메시지 저장(Insert) 트래픽이 몰릴 경우 메인 서버 스레드 블로킹 위험",
          problem: "동기적인 DB 처리가 메인 비즈니스 로직을 블로킹하여 순간적인 트래픽 스파이크(Spike) 상황에서 메시지 유실 가능성",
          core: "Kafka 기반 이벤트 드리븐 아키텍처",
          solution: "Kafka를 메시지 브로커로 도입하여 채팅 전송 로직과 DB 저장 로직을 물리적으로 분리. 클라이언트 메시지를 Kafka Topic으로 발행하고, Consumer가 이를 구독하여 DB에 저장함으로써 느슨한 결합(Loose Coupling) 시스템 구축. 순간적인 트래픽 스파이크 상황에서도 메시지 유실 없이 안정적인 처리 가능",
        },
        {
          background: "사용자 인증 및 보안이 중요한 여행 플랫폼 특성",
          problem: "단순 세션 기반 인증으로는 확장성 및 보안성 부족",
          core: "JWT + OAuth2 기반 토큰 인증 시스템 구축",
          solution: "Access Token과 Refresh Token을 활용한 보안 강화, 소셜 로그인(Google, Kakao) 연동으로 사용자 편의성 향상",
        },
      ],

      process: [
        {
          action: "Spring Boot v3와 MyBatis를 활용한 RESTful API 설계 및 구현",
          insight: "MyBatis의 동적 쿼리를 활용하여 복잡한 여행 일정 검색 조건 처리, XML 매핑으로 SQL 관리 용이성 향상",
        },
        {
          action: "JWT 토큰 기반 인증/인가 시스템 구축 및 Spring Security 설정",
          insight: "Filter Chain을 통한 토큰 검증, Role 기반 권한 관리, 예외 처리 핸들러 구현으로 보안 강화",
        },
        {
          action: "Kafka Consumer/Producer 구현 및 메시지 파티셔닝 전략 수립",
          insight: "채팅방 ID 기준 파티셔닝으로 메시지 순서 보장, 컨슈머 그룹 활용으로 확장성 확보",
        },
        {
          action: "Redis 캐시 전략 설계 - TTL 설정, 캐시 무효화 정책",
          insight: "여행지 정보는 1시간 TTL, 사용자 세션은 7일 TTL 설정으로 적절한 캐시 수명 관리",
        },
      ],

      results: {
        achievements: [
          "5인 팀 프로젝트로 백엔드 API 30개 이상 개발",
          "Redis Look Aside 패턴으로 채팅 메시지 조회 속도 12배 개선",
          "Kafka 이벤트 드리븐 아키텍처로 DB 부하 분산 및 메시지 유실 방지",
          "메인 비즈니스 로직이 DB 응답 지연에 영향받지 않는 비차단(Non-blocking) 구조 완성",
          "JWT + OAuth2 인증으로 보안 강화 및 소셜 로그인 연동",
          "WebSocket + Kafka 실시간 채팅 시스템 구축 - 동시 접속자 100명 이상 지원",
          "Tour API 연동 - 전국 여행지 정보 10,000개 이상 제공",
        ],
        keyPoints: [
          "Look Aside 패턴 + Redis 캐싱으로 조회 속도 12배(1200%) 개선",
          "Kafka Consumer 인스턴스 Scale-out으로 유연한 처리량 조절 가능",
          "DB 접근 원천 차단으로 커넥션 풀 고갈 문제 근본 해결",
          "이벤트 기반 아키텍처로 느슨한 결합(Loose Coupling) 시스템 구축",
          "MyBatis 동적 쿼리로 복잡한 검색 조건 처리",
          "팀 협업을 통한 대규모 프로젝트 경험",
        ],
      },

      growth: {
        achievements: [
          "Spring Boot v3 최신 기능 실전 적용 경험",
          "Kafka 메시지 브로커를 활용한 이벤트 기반 아키텍처 설계 역량",
          "5인 팀에서 백엔드 리드 역할 수행",
          "대규모 여행 데이터 처리 및 최적화 경험",
        ],
        learnings: [
          "JWT 토큰 기반 인증/인가 시스템 구축 및 보안 고려사항",
          "WebSocket 프로토콜과 실시간 통신 메커니즘 이해",
          "Kafka의 파티셔닝, 컨슈머 그룹, 메시지 순서 보장 학습",
          "Redis 캐싱 전략 - TTL, 캐시 무효화, 메모리 관리",
          "MyBatis와 Spring Boot 통합 및 동적 SQL 작성 기법",
          "팀 협업 - Git Branch 전략, 코드 리뷰, API 문서화",
        ],
      },

      myRole: {
        period: "2024.10.21 - 2025.03.19 (약 5개월)",
        responsibilities: [
          "백엔드 아키텍처 설계 및 Spring Boot 기반 RESTful API 개발",
          "JWT + OAuth2 인증 시스템 구축 - Google, Kakao 소셜 로그인 연동",
          "WebSocket + Kafka 실시간 채팅 시스템 개발",
          "Redis 캐싱 전략 수립 및 구현 - TTL 설정, 캐시 무효화",
          "Tour API 연동 및 여행지 정보 데이터베이스 설계",
          "MyBatis 동적 쿼리를 활용한 복잡한 검색 기능 구현",
          "MySQL 데이터베이스 스키마 설계 및 쿼리 최적화",
          "팀원 코드 리뷰 및 API 문서화(Swagger)",
        ],
        learnings: [
          "Spring Boot 생태계 전반에 대한 깊은 이해 - Security, WebSocket, Kafka 통합",
          "대규모 트래픽 처리를 위한 캐싱 및 메시징 시스템 설계",
          "팀 프로젝트에서 백엔드 리드로서 아키텍처 의사결정 경험",
          "외부 API 연동 및 데이터 동기화 전략 수립",
        ],
      },
      images: {
        erd: "/images/projects/k-sketch-erd.jpg",
        architecture: "/images/projects/k-sketch-architecture.jpg",
      },
    },
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
    details: {
      introduction: "Spring Boot와 Thymeleaf 기반의 첫 번째 개인 포트폴리오 웹사이트 - OAuth2 소셜 로그인과 이메일 발송 기능을 갖춘 서버 사이드 렌더링 프로젝트",

      overview: {
        background: "백엔드 개발자로서의 기술 역량을 보여줄 포트폴리오 사이트 필요",
        purpose: "Spring Boot 프레임워크를 활용하여 인증, 이메일 발송 등 실무 기능을 구현하고 클라우드 배포 경험 확보",
      },

      tasks: [
        {
          background: "사용자 인증 기능 구현 필요",
          problem: "자체 회원가입/로그인 구현 시 보안 취약점 및 관리 부담",
          core: "Spring Security + OAuth2를 활용한 소셜 로그인 구현",
          solution: "Google, GitHub OAuth2 연동으로 안전하고 편리한 인증 시스템 구축",
        },
        {
          background: "방문자와의 소통을 위한 컨택트 기능 필요",
          problem: "이메일 서버 구축 및 관리의 복잡성",
          core: "Spring Boot Mail 모듈과 Gmail SMTP 활용",
          solution: "문의 양식을 통한 자동 이메일 발송 기능 구현",
        },
      ],

      process: [
        {
          action: "Spring Security 설정 및 OAuth2 Client 구현",
          insight: "Security Filter Chain 이해, OAuth2 인증 플로우 학습",
        },
        {
          action: "Thymeleaf 템플릿 엔진으로 동적 페이지 렌더링",
          insight: "서버 사이드 렌더링의 장단점 이해",
        },
        {
          action: "PostgreSQL 데이터베이스 연동 및 JPA 엔티티 설계",
          insight: "ORM 개념 학습 및 데이터베이스 스키마 설계 경험",
        },
      ],

      results: {
        achievements: [
          "OAuth2 소셜 로그인 구현 (Google, GitHub)",
          "이메일 발송 기능 구현 - 문의 양식 연동",
          "Cloudtype 클라우드 플랫폼 배포",
          "PostgreSQL 데이터베이스 연동",
        ],
        keyPoints: [
          "Spring Security + OAuth2 인증 시스템 구축 경험",
          "서버 사이드 렌더링(Thymeleaf) 이해",
          "클라우드 배포 경험 확보",
        ],
      },

      growth: {
        learnings: [
          "Spring Boot 프레임워크 전반에 대한 이해",
          "Spring Security와 OAuth2 인증 메커니즘 학습",
          "JPA/Hibernate ORM 개념 및 활용",
          "클라우드 배포 프로세스 경험 (Cloudtype, AWS Lightsail)",
          "이메일 발송 시스템 구현 및 SMTP 설정",
        ],
      },

      myRole: {
        period: "2024.07.29 - 2024.08.18 (약 3주)",
        responsibilities: [
          "프로젝트 전체 설계 및 개발",
          "Spring Security + OAuth2 소셜 로그인 구현",
          "이메일 발송 기능 개발",
          "Thymeleaf 템플릿 작성 및 UI 구성",
          "PostgreSQL 데이터베이스 설계",
          "Cloudtype 및 AWS Lightsail 배포",
        ],
        learnings: [
          "Spring Boot 기반 웹 애플리케이션 개발 전반",
          "클라우드 배포 및 운영 경험",
        ],
      },
      images: {
        erd: "/images/projects/old-portfolio-erd.jpg",
        architecture: "/images/projects/old-portfolio-architecture.jpg",
      },
    },
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
    details: {
      introduction: "Spring Framework 5.x와 Vue.js 기반의 금융기관 내부 업무 시스템 - MyBatis 동적 쿼리를 활용한 복잡한 금융 데이터 처리",

      overview: {
        background: "금융기관 내부 업무 처리 및 데이터 조회 시스템 개발 교육 프로젝트",
        purpose: "Spring Framework와 MyBatis를 활용한 엔터프라이즈 애플리케이션 개발 역량 강화 및 금융 도메인 이해",
      },

      tasks: [
        {
          background: "복잡한 금융 데이터 조회 조건 처리 필요",
          problem: "정적 SQL로는 다양한 검색 조건 조합 처리 어려움",
          core: "MyBatis 동적 쿼리 활용",
          solution: "<if>, <choose>, <foreach> 등의 동적 SQL 태그를 활용하여 유연한 쿼리 작성",
        },
      ],

      process: [
        {
          action: "Spring MVC 패턴 기반 Controller-Service-DAO 계층 설계",
          insight: "계층 분리를 통한 유지보수성 향상 및 비즈니스 로직 재사용성 확보",
        },
        {
          action: "MyBatis XML 매퍼를 활용한 동적 쿼리 작성",
          insight: "복잡한 조건문을 SQL에서 분리하여 가독성 및 유지보수성 향상",
        },
        {
          action: "Vue.js를 활용한 프론트엔드 개발",
          insight: "컴포넌트 기반 UI 개발 및 상태 관리 학습",
        },
      ],

      results: {
        achievements: [
          "6인 팀 프로젝트로 금융 업무 시스템 개발",
          "MyBatis 동적 쿼리로 복잡한 검색 조건 처리",
          "Spring MVC 패턴 기반 백엔드 API 개발",
          "Vue.js 프론트엔드 통합",
        ],
        keyPoints: [
          "MyBatis 동적 SQL 활용 역량",
          "Spring Framework 계층 구조 이해",
          "팀 협업 및 코드 통합 경험",
        ],
      },

      growth: {
        learnings: [
          "Spring Framework 5.x MVC 패턴 이해",
          "MyBatis 동적 쿼리 작성 및 XML 매퍼 활용",
          "금융 도메인 비즈니스 로직 이해",
          "Vue.js 프론트엔드 프레임워크 기초",
          "PostgreSQL 데이터베이스 활용",
        ],
      },

      myRole: {
        period: "2024.07.04 - 2024.07.25 (약 3주)",
        responsibilities: [
          "백엔드 API 개발 - Controller, Service, DAO 계층 구현",
          "MyBatis 동적 쿼리 작성 - 복잡한 검색 조건 처리",
          "PostgreSQL 데이터베이스 쿼리 최적화",
          "팀원과 코드 통합 및 버그 수정",
        ],
        learnings: [
          "Spring Framework 실무 활용 경험",
          "MyBatis를 활용한 데이터 액세스 계층 개발",
          "팀 협업 및 Git 버전 관리",
        ],
      },
    },
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
    details: {
      introduction: "Spring Boot 기반의 제주도 해수욕장 종합 정보 플랫폼 - 실시간 수질 데이터 시각화, 기상청 날씨 정보, 서핑 클래스 예약 시스템",

      overview: {
        background: "제주도 해수욕장 방문객을 위한 실시간 환경 정보 및 서핑 클래스 예약 서비스 필요",
        purpose: "공공 API 연동을 통한 실시간 수질 및 날씨 데이터 제공, 서핑 클래스 예약/결제 시스템 구축으로 관광객 편의성 향상",
      },

      tasks: [
        {
          background: "해수욕장 수질 정보를 실시간으로 제공할 필요",
          problem: "공공 API 데이터 형식 복잡 및 실시간 업데이트 처리",
          core: "환경부 수질 측정망 API 연동 및 데이터 파싱",
          solution: "Spring Boot RestTemplate으로 API 호출, JSON 데이터 파싱 후 데이터베이스 저장 및 시각화",
        },
        {
          background: "서핑 클래스 예약 및 결제 시스템 필요",
          problem: "복잡한 예약 로직 및 결제 처리",
          core: "Spring Boot 기반 예약 시스템 및 결제 모듈 구현",
          solution: "예약 가능 시간 체크, 중복 예약 방지, 결제 API 연동",
        },
      ],

      process: [
        {
          action: "기상청 날씨 API 및 환경부 수질 API 연동",
          insight: "공공 데이터 API 활용 방법 및 데이터 파싱 기술 습득",
        },
        {
          action: "Chart.js를 활용한 수질 데이터 시각화",
          insight: "데이터 시각화 라이브러리 활용으로 사용자 경험 향상",
        },
        {
          action: "H2 인메모리 데이터베이스 활용",
          insight: "빠른 개발 및 테스트를 위한 경량 데이터베이스 활용",
        },
      ],

      results: {
        achievements: [
          "실시간 수질 데이터 시각화 - Chart.js 활용",
          "기상청 날씨 정보 API 연동",
          "서핑 클래스 예약 및 결제 시스템 구현",
          "6인 팀 프로젝트로 2주 내 개발 완료",
        ],
        keyPoints: [
          "공공 API 연동 및 데이터 처리 경험",
          "Spring Boot 기반 백엔드 개발",
          "데이터 시각화 라이브러리 활용",
        ],
      },

      growth: {
        learnings: [
          "공공 데이터 API 연동 및 활용 방법",
          "Spring Boot RestTemplate을 활용한 외부 API 호출",
          "Chart.js를 활용한 데이터 시각화",
          "H2 데이터베이스 활용 및 JPA 엔티티 설계",
          "예약 시스템 비즈니스 로직 구현",
        ],
      },

      myRole: {
        period: "2024.06.21 - 2024.07.03 (약 2주)",
        responsibilities: [
          "환경부 수질 측정망 API 연동 및 데이터 처리",
          "기상청 날씨 API 연동",
          "Chart.js를 활용한 수질 데이터 시각화",
          "서핑 클래스 예약 로직 구현",
          "H2 데이터베이스 스키마 설계",
        ],
        learnings: [
          "외부 API 연동 실무 경험",
          "데이터 시각화 및 사용자 경험 개선",
          "단기 프로젝트 개발 경험",
        ],
      },
      images: {
        erd: "/images/projects/jeju-for-suffer-erd.jpg",
        architecture: "/images/projects/jeju-for-suffer-architecture.jpg",
      },
    },
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
    details: {
      introduction: "React 기반의 경기도 교통사고 다발지역 조회 및 시각화 SPA - 카카오맵 API 연동, react-virtualized 렌더링 최적화",

      overview: {
        background: "교통안전 정보를 효과적으로 시각화하여 사용자에게 제공할 필요",
        purpose: "React를 활용한 SPA 개발 역량 강화 및 대용량 데이터 렌더링 최적화, 지도 API 연동 경험 확보",
      },

      tasks: [
        {
          background: "수천 개의 교통사고 데이터 렌더링 시 성능 저하",
          problem: "모든 데이터를 한 번에 렌더링하면 브라우저 성능 저하 및 사용자 경험 악화",
          core: "react-virtualized 라이브러리 도입",
          solution: "가상 스크롤링으로 화면에 보이는 항목만 렌더링하여 성능 80% 향상",
        },
        {
          background: "교통사고 위치를 지도에 시각화할 필요",
          problem: "복잡한 지도 API 연동 및 마커 관리",
          core: "카카오맵 API 연동 및 마커 클러스터링",
          solution: "사고 유형별 마커 표시, 클러스터링으로 가독성 향상",
        },
      ],

      process: [
        {
          action: "React 컴포넌트 설계 및 상태 관리",
          insight: "함수형 컴포넌트와 Hooks를 활용한 효율적인 상태 관리",
        },
        {
          action: "react-virtualized로 대용량 리스트 렌더링 최적화",
          insight: "가상 스크롤링 개념 이해 및 성능 최적화 전략 학습",
        },
        {
          action: "카카오맵 API 연동 및 마커 표시",
          insight: "외부 라이브러리 연동 및 지도 API 활용 경험",
        },
      ],

      results: {
        achievements: [
          "경기도 교통사고 데이터 5,000건 이상 처리",
          "react-virtualized로 렌더링 성능 80% 향상",
          "카카오맵 API 연동 - 사고 위치 시각화",
          "사고유형별/지역별/연도별 필터링 기능",
          "GitHub Pages 배포 - 실제 사용 가능한 웹 서비스",
        ],
        keyPoints: [
          "React Hooks를 활용한 효율적인 상태 관리",
          "대용량 데이터 렌더링 최적화",
          "지도 API 연동 경험",
        ],
      },

      growth: {
        learnings: [
          "React 함수형 컴포넌트 및 Hooks(useState, useEffect) 활용",
          "react-virtualized를 활용한 성능 최적화",
          "카카오맵 API 연동 및 마커 관리",
          "SPA(Single Page Application) 개발 경험",
          "GitHub Pages를 활용한 정적 사이트 배포",
          "팀 협업 및 컴포넌트 분리 전략",
        ],
      },

      myRole: {
        period: "2024.05.28 - 2024.06.04 (약 1주)",
        responsibilities: [
          "React 컴포넌트 설계 및 개발",
          "react-virtualized 렌더링 최적화 구현",
          "카카오맵 API 연동 및 마커 표시",
          "필터링 기능 구현 - 사고유형/지역/연도별",
          "GitHub Pages 배포",
        ],
        learnings: [
          "React 기반 SPA 개발 전반",
          "성능 최적화 기법 및 가상 스크롤링",
          "외부 API 연동 실무 경험",
        ],
      },
    },
  },
]
