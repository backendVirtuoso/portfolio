import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "개인 포트폴리오 웹 사이트 구축",
    description: "Next.js 15와 React 19 기반의 개인 포트폴리오 웹사이트로, Three.js 3D 인터랙션과 next-intl 다국어 지원, Vercel 자동 배포를 포함한 모던 스택으로 구성되었습니다.",
    period: "2025.11.04 - 2025.11.23",
    team: "개인 프로젝트",
    tech: ["Next.js 15.5", "React 19", "TypeScript", "Three.js", "Tailwind CSS", "shadcn/ui", "next-intl", "Vercel"],
    github: "https://github.com/backendVirtuoso/portfolio",
    demo: "https://hjh-portfolio.vercel.app/",
    category: "personal",
    details: {
      service: "개인 포트폴리오를 효과적으로 전달하기 위한 인터랙티브 웹 사이트 개발",
      highlights: [
        "Three.js 3D 씬의 SSR Hydration Mismatch를 Client Component 분리와 useMemo 기반 파티클 캐싱으로 해결하여 7,000개 별과 200개 파티클의 3D 배경을 안정적으로 렌더링",
        "next-intl의 서버 사이드 메시지 로딩과 Middleware 기반 locale 자동 감지를 적용하여 한/영 다국어와 SSG가 공존하는 라우팅 체계를 구축",
        "Set 기반 상태 관리와 event.stopPropagation()을 활용하여 프로젝트 카드의 필터링, 페이지네이션, 확장/접기 간 이벤트 충돌을 해결",
        "generateStaticParams()와 generateMetadata()를 활용한 프로젝트 상세 페이지 SSG 및 동적 메타데이터 생성을 구현",
        "Vercel 배포 파이프라인과 Analytics/Speed Insights를 통합하여 Lighthouse Performance 96점(Desktop), Accessibility 100점, SEO 100점을 달성",
      ],
      images: {
        architecture: "/images/projects/portfolio-nextjs-architecture.jpg",
      },
      problems: [
        {
          title: "Three.js 3D 씬의 SSR Hydration Mismatch",
          details: [
            "Next.js SSR 환경에서 Three.js가 window 객체에 접근하여 런타임 에러 발생",
            "'use client'만 추가하면 서버/클라이언트 렌더링 결과 불일치로 Hydration Mismatch 추가 에러 유발",
          ],
        },
        {
          title: "다국어 라우팅과 SSG 공존 문제",
          details: [
            "클라이언트 사이드 i18n 솔루션(react-i18next)은 번들 크기 증가 불가피",
            "서버 컴포넌트 기반 다국어 처리와 정적 생성(SSG)의 동시 구현 필요",
          ],
        },
        {
          title: "프로젝트 카드 UI 이벤트 충돌",
          details: [
            "필터링, 페이지네이션, 카드 확장/접기 간 이벤트 버블링으로 의도치 않은 동작 발생",
            "복합 상태 관리의 복잡도 증가",
          ],
        },
      ],
      solutions: [
        {
          title: "Client Component 분리 + useMemo 기반 파티클 캐싱",
          details: [
            "'use client' + useEffect 마운트 감지로 Three.js 초기화 시점 제어",
            "useMemo로 7,000개 별과 200개 파티클 데이터를 캐싱하여 리렌더링 방지",
            "모바일 환경에서는 3D 씬을 비활성화하여 성능 최적화",
          ],
        },
        {
          title: "next-intl 서버 사이드 메시지 로딩 + Middleware locale 감지",
          details: [
            "서버 컴포넌트에서 번역 처리하여 클라이언트 번들에서 번역 파일 완전 제거",
            "Middleware 기반 Accept-Language 헤더 자동 감지로 /ko, /en SEO 친화적 URL 구현",
          ],
        },
        {
          title: "Set 기반 상태 관리 + event.stopPropagation()",
          details: [
            "Set 자료구조로 확장/접기 상태를 효율적으로 관리",
            "event.stopPropagation()으로 카드 내부 이벤트와 외부 이벤트를 격리",
          ],
        },
      ],
      results: [
        "Lighthouse Performance 96점(Desktop), Accessibility 100점, SEO 100점 달성",
        "7,000개 별과 200개 파티클의 3D 배경 안정 렌더링 (데스크탑 60fps)",
        "한/영 다국어와 SSG가 공존하는 라우팅 체계 구축",
        "generateStaticParams() + generateMetadata()로 프로젝트 상세 페이지 SSG 및 동적 메타데이터 생성",
      ],
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
      service: "YouTube의 핵심 기능(영상 업로드/스트리밍/검색/추천)을 직접 설계하고 구현한 풀스택 클론 프로젝트",
      highlights: [
        "영상 업로드 → Mux 인코딩 → HLS 적응형 비트레이트 스트리밍 전체 파이프라인 구현",
        "Drizzle ORM 타입 안전 쿼리 빌더로 복잡한 데이터 관계(영상-사용자-댓글-재생목록) 설계",
        "Server Actions 기반 서버 사이드 파일 처리로 API 키 클라이언트 노출 방지",
        "크리에이터 스튜디오 대시보드 — 영상별 조회수/좋아요/댓글 통계 집계",
      ],
      problems: [
        {
          title: "대용량 영상 처리 파이프라인의 복잡도",
          details: [
            "원본 영상의 해상도/코덱이 제각각이며, 시청 환경에 따라 적절한 품질을 동적으로 제공해야 함",
            "직접 인코딩 서버 구축 시 FFmpeg 큐 관리, HLS 세그먼트 분할, CDN 배포까지 복잡도 급증",
          ],
        },
        {
          title: "복잡한 데이터 관계에서 타입 안전성과 쿼리 성능 양립",
          details: [
            "영상, 사용자, 댓글, 좋아요, 재생목록 간 복잡한 다대다 관계",
            "Prisma는 복잡한 집계 쿼리에서 Raw SQL 빈도 증가, TypeORM은 N+1 쿼리 발생 빈번",
          ],
        },
        {
          title: "크리에이터 스튜디오 실시간 통계 집계 성능",
          details: [
            "매 요청마다 COUNT, SUM 집계 쿼리 실행 시 영상 수 증가에 따라 성능 선형 저하",
            "비정규화는 데이터 정합성 관리 부담 증가",
          ],
        },
      ],
      solutions: [
        {
          title: "Mux API 인코딩/스트리밍 위임 + 상태 관리 직접 설계",
          details: [
            "영상 업로드 → Mux Webhook 인코딩 완료 알림 → DB 상태 업데이트(processing→ready)",
            "Mux Playback ID 기반 HLS 적응형 비트레이트 스트리밍 제공",
            "업로드 상태 관리(대기/처리중/완료/실패)와 에러 핸들링 직접 설계",
          ],
        },
        {
          title: "Drizzle ORM + NeonDB 타입 안전 데이터 계층 구축",
          details: [
            "SQL에 가까운 쿼리 빌더로 타입 안전성과 쿼리 제어를 양립",
            "relationalQuery로 영상-사용자-댓글 다대다 관계를 타입 안전하게 조회",
            "TypeScript 타입과 DB 스키마를 하나의 소스(schema.ts)에서 관리",
          ],
        },
        {
          title: "Drizzle 서브쿼리와 집계 함수를 활용한 효율적 통계 설계",
          details: [
            "SQL 수준 서브쿼리로 영상별 통계를 단일 쿼리에서 조인하여 반환",
            "대시보드 조회 시 N+1 문제 없이 영상 목록 + 통계를 한 번에 가져오는 구조",
          ],
        },
      ],
      results: [
        "Mux 연동으로 영상 업로드 → 인코딩 → HLS 스트리밍 전체 파이프라인 구현",
        "Drizzle ORM 타입 안전 쿼리 — Prisma 대비 SQL 수준 제어력 + TypeScript 타입 추론 양립",
        "Server Actions 기반 서버 사이드 파일 처리 — API 키 클라이언트 노출 방지",
        "Mux Webhook 기반 비동기 상태 관리 — 업로드 → 인코딩 → 완료 상태 자동 갱신",
      ],
    },
  },
  {
    id: "k-sketch",
    title: "K-Sketch",
    description: "Spring Boot 기반 실시간 채팅 및 여행 경로 플랫폼으로, Redis 캐싱과 Kafka 이벤트 드리븐 아키텍처를 적용하여 조회 성능 12배 개선 및 Non-blocking 시스템을 구축한 5인 팀 프로젝트입니다.",
    period: "2024.10.21 - 2025.03.19",
    team: "5인 팀 프로젝트",
    tech: ["Spring Boot", "MyBatis", "MySQL", "Redis", "Apache Kafka", "STOMP/WebSocket", "Cloudtype"],
    github: "https://github.com/backendVirtuoso/K-Sketch",
    demo: "#",
    category: "team",
    details: {
      service: "사용자가 여행 일정을 생성·관리하고, 공공 API 기반의 관광지·축제·숙박 정보를 탐색할 수 있는 여행 일정 플랫폼",
      highlights: [
        "관광지 API 조회 시, 외부 API 반복 호출로 인한 느린 응답 문제 발생 및 Redis 캐시 (24시간 TTL) + React Query 클라이언트 캐싱 이중 캐시 전략 적용으로 평균 응답속도 3s → 200ms 개선",
        "채팅 Kafka Consumer 지연으로 WebSocket Heartbeat Timeout 발생 및 Heartbeat 주기 조정(10s/20s), SockJS 버퍼 확장, Disconnect Delay 설정으로 100+ 동시 접속 안정화",
        "STOMP + Kafka 기반 실시간 채팅 시스템 구현 (채팅방 생성/입장/퇴장, 최근 100건 메시지 Redis 캐싱)",
        "Cloudtype 기반 백엔드/프론트엔드 운영 배포 환경 구축 및 커스텀 도메인(k-sketch.site) 연결",
        "Redis (세션 관리 + 캐시) 및 Kafka (메시지 큐) 개발 환경 구성",
        "PR 템플릿 도입 및 Git Flow 브랜치 전략 수립으로 코드 리뷰 프로세스 정착에 기여",
      ],
      images: {
        erd: "/images/projects/k-sketch-erd.jpg",
        architecture: "/images/projects/k-sketch-architecture.jpg",
      },
      problems: [
        {
          title: "반복적인 Disk I/O로 인한 커넥션 풀 고갈",
          details: [
            "채팅방 입장 시마다 동일한 메시지 내역을 MySQL에서 반복 조회",
            "변하지 않는 과거 대화 내역에 대해 매번 DB 접근 발생",
            "동시 접속자 증가 시 커넥션 풀 고갈로 서비스 전체 마비 위험",
          ],
        },
        {
          title: "동기적 DB 처리로 인한 메인 스레드 블로킹 위험",
          details: [
            "메시지 저장(Insert) 트래픽이 몰릴 경우 동기적 처리가 병목 발생",
            "트래픽 스파이크 상황에서 메시지 유실 가능성 존재",
          ],
        },
        {
          title: "RDB에 대한 강한 의존성으로 확장성 제약",
          details: [
            "읽기/쓰기 로직이 모두 MySQL에 집중",
            "Scale-out 시 DB가 단일 장애 지점(SPOF)이 될 수 있는 구조",
          ],
        },
      ],
      solutions: [
        {
          title: "Redis Cache-Aside 패턴 도입 (조회 성능 가속화)",
          details: [
            "채팅방별 '최근 메시지 Top 100'을 Redis(In-Memory)에 캐싱",
            "Cache Miss가 발생할 때만 DB를 참조하도록 설계",
            "다수의 유저가 동시 입장해도 DB 부하 없이 메모리에서 즉각 반환",
          ],
        },
        {
          title: "Kafka 기반 Event-Driven 아키텍처 적용 (쓰기 부하 분산)",
          details: [
            "채팅 전송 로직과 DB 저장 로직을 물리적으로 분리",
            "클라이언트 메시지를 Kafka Topic으로 발행",
            "Consumer가 이를 구독하여 DB에 저장하는 비동기 처리 방식 적용",
          ],
        },
        {
          title: "느슨한 결합(Loose Coupling) 시스템 구축",
          details: [
            "메시지 브로커를 둠으로써 트래픽 증가 시 Consumer 인스턴스만 Scale-out",
            "읽기(Redis)와 쓰기(Kafka→MySQL) 책임을 물리적으로 분리",
          ],
        },
      ],
      results: [
        "조회 지연 시간 12배 단축: 60ms → 5ms (Redis 캐싱 적용)",
        "트래픽 스파이크 대응력 확보: Kafka 메시지 큐로 메시지 유실 없는 안정적 처리",
        "확장 가능한 아키텍처 완성: Consumer 인스턴스 추가만으로 처리량 유연하게 조절 가능",
        "DB 부하 원천 차단: 비차단(Non-blocking) 구조로 메인 비즈니스 로직이 DB 응답 지연에 영향받지 않음",
      ],
    },
  },
  {
    id: "old-portfolio",
    title: "(구) 개인 포트폴리오 웹 사이트 구축",
    description: "Spring Boot와 Spring Data JPA를 활용하여 OAuth2 소셜 로그인과 이메일 발송 기능을 구현한 포트폴리오 웹사이트입니다. GitHub Actions + Cloudtype 기반 CI/CD 자동 배포를 적용했습니다.",
    period: "2024.07.29 - 2024.08.18",
    team: "개인 프로젝트",
    tech: ["Spring Boot", "Spring Data JPA", "Thymeleaf", "PostgreSQL", "Spring Mail", "GitHub Actions", "Cloudtype"],
    github: "https://github.com/backendVirtuoso/portfolio-website",
    demo: "#",
    category: "personal",
    details: {
      service: "방문자에게 반응형 포트폴리오 전시 페이지와 실시간 이메일 문의 기능을 제공하는 풀스택 웹 애플리케이션",
      highlights: [
        "GitHub Actions + Cloudtype 기반 CI/CD 파이프라인 구축 (main 브랜치 push 시 자동 배포)",
        "SMTP 인증 실패 및 네트워크 오류 발생 시 사용자에게 피드백이 전달되지 않는 문제를 Try-Catch 처리와 Flash Attributes 기반 PRG(Post-Redirect-Get) 패턴으로 개선하여 Redirect 이후에도 성공/실패 메시지를 유지하도록 구현하고, 이메일 발송 성공률을 95% → 98%로 향상시키며 UX를 개선함",
        "JAR 패키징 후 실행 시 발생하던 정적 리소스(CSS/JS) 404 오류를 해결하기 위해 application.yml에 static-path-pattern 및 static-locations를 명시적으로 설정하고, Thymeleaf th:href=\"@{...}\" 문법을 적용하여 개발·운영 환경 간 리소스 경로 차이를 해소함",
        "콘텐츠 삭제 시 데이터가 물리적으로 제거되는 문제를 Soft Delete 패턴(isActive 필드)으로 개선하고, findAllByIsActive() 기반 JPA 쿼리 메서드를 도입하여 활성/비활성 데이터를 분리 관리함으로써 복구 가능 구조를 설계함",
      ],
      images: {
        erd: "/images/projects/old-portfolio-erd.jpg",
        architecture: "/images/projects/old-portfolio-architecture.jpg",
      },
      problems: [
        {
          title: "수동 빌드/배포 프로세스로 인한 생산성 저하",
          details: [
            "코드 수정 시마다 수동으로 빌드 및 배포 수행",
            "평균 10분 이상의 배포 시간 소요",
          ],
        },
        {
          title: "배포 과정의 일관성 부재",
          details: [
            "개발자마다 다른 배포 방식으로 환경 불일치 발생 가능성",
            "휴먼 에러로 인한 배포 실패 위험",
          ],
        },
        {
          title: "빠른 피드백 루프 부재",
          details: [
            "코드 변경 후 결과 확인까지 시간 지연",
            "반복적인 수정-배포 사이클에서 비효율 누적",
          ],
        },
      ],
      solutions: [
        {
          title: "GitHub Actions 워크플로우 구성",
          details: [
            "main 브랜치 푸시 시 자동으로 빌드 트리거",
            "YAML 기반 워크플로우 파일로 빌드 단계 정의",
          ],
        },
        {
          title: "Cloudtype 연동 자동 배포 파이프라인 구축",
          details: [
            "GitHub → Build → Deploy → Cloudtype 자동화",
            "Cloudflare Custom Domain 연동으로 도메인 설정",
          ],
        },
        {
          title: "빌드 캐싱 최적화",
          details: [
            "Gradle 의존성 캐싱으로 반복 빌드 시간 단축",
            "빌드 아티팩트 재사용으로 배포 속도 향상",
          ],
        },
      ],
      results: [
        "배포 소요 시간 80% 단축: 10분 → 2분 내외",
        "운영 효율성 극대화: 자동화로 개발 집중도 향상",
        "일관된 배포 품질: 휴먼 에러 제거 및 배포 프로세스 표준화",
      ],
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
      service: "금융기관 내부 업무 시스템에서 복합 조건 검색과 데이터 관리를 지원하는 웹 애플리케이션",
      highlights: [
        "MyBatis 동적 쿼리로 12가지 검색 조건 조합을 단일 매퍼로 처리",
        "Spring MVC 3계층 컨벤션 수립으로 팀 모듈 통합 효율화",
        "파라미터 바인딩(#{})으로 SQL Injection 원천 방지",
      ],
      problems: [
        {
          title: "12가지 검색 조건의 동적 쿼리 처리",
          details: [
            "금융 업무에서 날짜 범위 + 거래 유형 + 금액 범위 + 고객명 등 12가지 조건의 자유로운 조합 필요",
            "정적 SQL로 모든 조합(2^12 = 4,096가지)에 대응하려면 수십 개의 쿼리 작성·관리 필요",
            "애플리케이션 레벨 문자열 SQL 동적 생성 시 SQL Injection 위험성 증가",
          ],
        },
        {
          title: "팀원 간 코드 스타일/계층 구조 불일치",
          details: [
            "6인 팀에서 각자 개발한 모듈의 코드 스타일과 계층 구조가 달라 통합 시 충돌 빈번",
            "Controller에서 직접 SQL을 호출하거나 Service 없이 DAO를 직접 사용하는 코드 존재",
          ],
        },
      ],
      solutions: [
        {
          title: "MyBatis 동적 SQL 태그로 단일 XML 매퍼 처리",
          details: [
            "<if test=\"\">로 조건 존재 여부에 따른 동적 WHERE절 생성",
            "<foreach>로 IN 절 동적 구성, <choose>로 정렬 조건 분기 처리",
            "파라미터 바인딩(#{})으로 SQL Injection 원천 방지",
          ],
        },
        {
          title: "Spring MVC Controller-Service-DAO 3계층 규칙 수립",
          details: [
            "Controller(요청/응답), Service(비즈니스 로직), DAO(데이터 접근) 역할 명확 분리",
            "코드 리뷰로 계층 규칙 준수 여부 확인",
            "모듈 간 통합 시 충돌 최소화, 비즈니스 로직 재사용성 향상",
          ],
        },
      ],
      results: [
        "12가지 검색 조건의 모든 조합을 단일 XML 매퍼 파일로 관리",
        "Spring MVC 3계층 컨벤션으로 모듈 간 결합도 최소화",
        "Vue.js 프론트엔드와 RESTful API 안정적 연동",
      ],
    },
  },
  {
    id: "jeju-for-suffer",
    title: "Jeju for suffer (실시간 모니터링)",
    description: "Spring Boot 기반 제주도 해수욕장 종합 정보 플랫폼으로, 실시간 수질 데이터 시각화, 기상청 날씨 정보, 서핑 클래스 예약 시스템을 제공합니다.",
    period: "2024.06.21 - 2024.07.03",
    team: "6인 팀 프로젝트",
    tech: ["Spring Boot", "Spring Security 6", "Spring Data JPA", "H2 Database", "Thymeleaf"],
    github: "https://github.com/GSITM-Team3/spring-environment-monitoring",
    demo: "#",
    category: "team",
    details: {
      service: "제주도 18개 해수욕장의 수질 데이터, 기상 정보, 서핑 강습 예약, 커뮤니티 기능을 하나의 플랫폼에 통합한 서핑 정보 서비스",
      highlights: [
        "기상청 단기예보 API 연동을 통한 기온·풍속·파고·풍향 날씨 정보 제공",
        "게시글 검색(작성자/위치 기반) 및 페이지네이션(3건 단위) 구현",
        "WebMvcConfig를 통한 정적 리소스 매핑 및 파일 업로드 경로 설정 (최대 20MB)",
        "Notion 기반 기능 명세서 작성",
      ],
      images: {
        erd: "/images/projects/jeju-for-suffer-erd.jpg",
        architecture: "/images/projects/jeju-for-suffer-architecture.jpg",
      },
      problems: [
        {
          title: "외부 날씨 API JSON 파싱 오류",
          details: [
            "기상청 실시간 API 응답의 복잡한 JSON 중첩 구조",
            "실제 응답 구조와 DTO 매핑 로직 불일치로 예외 발생",
          ],
        },
        {
          title: "대량 게시글 조회 시 성능 저하",
          details: [
            "페이지네이션 미적용으로 전체 데이터 한 번에 로딩",
            "게시글 수 증가에 따른 응답 시간 선형 증가",
          ],
        },
        {
          title: "참조 무결성 제약 조건 처리 미흡",
          details: [
            "회원 탈퇴 시 연관 데이터(게시글, 댓글, 좋아요, 예약) 처리 문제",
            "FK 제약조건으로 인한 삭제 실패",
          ],
        },
      ],
      solutions: [
        {
          title: "응답 전문 분석 및 DTO 매핑 로직 재설계",
          details: [
            "API 문서와 실제 응답 구조 비교 분석",
            "다양한 응답 형태에 대응할 수 있는 유연한 DTO 설계",
            "예외 처리 강화로 파싱 실패 시 폴백 로직 구현",
          ],
        },
        {
          title: "JPA Pageable 적용으로 쿼리 최적화",
          details: [
            "페이지 단위 조회로 한 번에 가져오는 데이터 양 제한",
            "정렬 조건 추가로 최신 게시글 우선 표시",
          ],
        },
        {
          title: "참조 무결성 유지하면서 회원 탈퇴 처리",
          details: [
            "연관 데이터 순차 삭제 로직 구현 (좋아요 → 댓글 → 게시글 → 예약 → 회원)",
            "트랜잭션 처리로 데이터 일관성 보장",
          ],
        },
      ],
      results: [
        "데이터 파싱 오류 해결: 서비스 안정성 확보 및 날씨 정보 정상 표시",
        "대량 조회 성능 개선: 페이지네이션 적용으로 일정한 응답 속도 유지",
        "회원 관리 기능 완성: 참조 무결성 유지하면서 회원 탈퇴 처리 가능",
      ],
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
      service: "경기도 교통사고 다발지역 데이터를 지도 위에 시각화하고 사고유형/지역/연도별 필터링을 제공하는 교통안전 정보 플랫폼",
      highlights: [
        "react-virtualized로 5,000건 이상 데이터 렌더링 성능 80% 향상 (DOM 노드 5,000개→30개)",
        "카카오맵 API + MarkerClusterer로 사고 위치 시각화 및 사고유형별 마커 색상 분리",
        "useMemo + useCallback 메모이제이션으로 필터 변경 시 불필요한 재계산/리렌더링 방지",
        "GitHub Pages 배포 — 실제 접속 가능한 교통안전 정보 웹 서비스 운영",
      ],
      problems: [
        {
          title: "5,000건 데이터 동시 렌더링 시 브라우저 프리징",
          details: [
            "모든 DOM 노드를 한 번에 생성하여 브라우저 메인 스레드 블로킹",
            "초기 렌더링 시 3초 이상 프리징, 스크롤 시 프레임 드롭(10fps 이하)",
          ],
        },
        {
          title: "지도 위 대량 마커 시각화 성능 문제",
          details: [
            "5,000개 이상의 마커를 카카오맵에 동시 표시 시 렌더링 성능 급격히 저하",
            "마커가 겹쳐서 정보 식별 불가",
          ],
        },
        {
          title: "복합 필터링 상태 관리 복잡도",
          details: [
            "사고유형/지역/연도 필터 상태를 여러 컴포넌트(리스트, 지도, 통계)에서 공유 필요",
            "필터 조건 변경 시 5,000건 전체 데이터 순회로 UI 반응 지연",
          ],
        },
      ],
      solutions: [
        {
          title: "react-virtualized 가상 스크롤링 적용",
          details: [
            "화면에 보이는 20~30개 항목만 DOM에 유지, 스크롤 위치에 따라 동적 교체",
            "DOM 노드 수 5,000개→30개로 감소, 60fps 스크롤 안정 유지",
          ],
        },
        {
          title: "카카오맵 MarkerClusterer 클러스터링",
          details: [
            "줌 레벨에 따라 인접 마커를 자동 그룹핑하여 가독성 확보",
            "사고 유형별(차대차/차대사람/단독사고) 마커 색상 분리로 시각적 구분",
          ],
        },
        {
          title: "useState + useMemo 조합으로 필터 상태 관리 최적화",
          details: [
            "useMemo로 필터링 결과를 캐싱하여 동일 조건 재계산 방지",
            "useCallback으로 이벤트 핸들러 메모이제이션하여 하위 컴포넌트 불필요한 리렌더링 방지",
          ],
        },
      ],
      results: [
        "렌더링 성능 80% 향상: DOM 노드 5,000개→30개, 초기 렌더링 시간 대폭 단축",
        "카카오맵 MarkerClusterer로 5,000개 마커 가독성 확보",
        "React Hooks 기반 효율적 상태 관리 패턴 정립",
        "GitHub Pages 배포로 실제 사용 가능한 웹 서비스 운영",
      ],
    },
  },
]
