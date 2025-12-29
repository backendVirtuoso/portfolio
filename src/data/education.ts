import type { Education, Experience, Certification } from "@/types"

export const educationData = {
  ko: [
    {
      school: "경기과학기술대학교",
      degree: "컴퓨터모바일융합공학과 학사 (4.0/4.5)",
      period: "2023.03 - 2024.02",
    },
    {
      school: "경기과학기술대학교",
      degree: "컴퓨터모바일융합과 전문학사 (4.11/4.5)",
      period: "2018.03 - 2023.02",
    },
  ] as Education[],
  en: [
    {
      school: "Gyeonggi University of Science and Technology",
      degree: "Bachelor's in Computer Mobile Convergence Engineering (4.0/4.5)",
      period: "2023.03 - 2024.02",
    },
    {
      school: "Gyeonggi University of Science and Technology",
      degree: "Associate Degree in Computer Mobile Convergence (4.11/4.5)",
      period: "2018.03 - 2023.02",
    },
  ] as Education[],
}

export const bootcampData = {
  ko: [
    {
      school: "GSITM 부트캠프 3기",
      degree: "교육 수료",
      period: "2024.03.27 - 2024.07.25",
      description: "무질서했던 협업 환경을 개선하기 위해 Git Flow 기반의 브랜치 전략을 설계·표준화하여, 무분별한 커밋으로 인한 Merge Conflict 문제를 근본적으로 해결하고 충돌 발생률 0건을 유지했습니다.\n\n설계 주도의 개발 문화 정착을 위해 팀 내 코드 컨벤션 가이드라인 수립 및 공통 로직 모듈화를 주도하여, 코드 중복률을 낮추고 유지보수 생산성을 높였습니다.",
    },
  ] as Education[],
  en: [
    {
      school: "GSITM Bootcamp 3rd Batch",
      degree: "Bootcamp Completion",
      period: "2024.03.27 - 2024.07.25",
      description: "Designed and standardized a Git Flow-based branching strategy to improve the chaotic collaboration environment, fundamentally resolving Merge Conflict issues caused by indiscriminate commits and maintaining zero conflict occurrences.\n\nLed the establishment of team code convention guidelines and common logic modularization to cultivate a design-driven development culture, reducing code duplication and improving maintenance productivity.",
    },
  ] as Education[],
}

export const certificationsData = {
  ko: [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2024.06",
    },
    {
      name: "SQLD",
      issuer: "한국데이터산업진흥원",
      date: "2024.06",
    },
  ] as Certification[],
  en: [
    {
      name: "Engineer Information Processing",
      issuer: "Korea Human Resources Development Service",
      date: "2024.06",
    },
    {
      name: "SQL Developer (SQLD)",
      issuer: "Korea Data Agency",
      date: "2024.06",
    },
  ] as Certification[],
}

export const experiencesData = {
  ko: [
    {
      company: "㈜포테이토넷",
      position: "일경험 인턴 (Backend Developer)",
      period: "2025.10.13 ~ 2026.01.02",
      description: "사이버 보안 전문 기업에서 악성 URL 탐지 및 위협 인텔리전스 플랫폼 개발",
      responsibilities: [
        "CypherThreat Backend - SimHash 기반 유사도 쿼리 응답 시간 90% 단축: MySQL 인덱스 적용, MongoDB 연결 풀 최적화, BIGINT SimHash 문자열 변환으로 JavaScript Number 정밀도 문제 해결",
        "대용량 스크립트 데이터 처리 아키텍처 최적화: url_id 기반 복합 인덱스 설정 및 Projection 적용, LRU 캐싱 전략(TTL 5분) 도입, zlib 압축으로 네트워크 트래픽 효율화",
        "캠페인 관리 시스템(Olpemi Web) - 데이터 로딩 성능 82~91% 개선: Promise.all을 활용한 병렬 API 호출로 로딩 시간 2.25초에서 0.2~0.4초로 단축",
        "복합 조건 검색 및 페이지네이션 시스템 구현: 캠페인 ID/범위 검색 기능, 서버/클라이언트 페이지네이션 분리 설계, Recoil 기반 상태 관리",
        "5개 탭 기반 캠페인 상세 분석 대시보드 완성: Custom Hook 패턴(.logic.ts)으로 UI와 비즈니스 로직 분리",
      ],
      tech: ["FastAPI", "Neo4j", "MongoDB", "MySQL", "Python", "React", "TypeScript", "Material-UI", "Recoil"],
    },
  ] as Experience[],
  en: [
    {
      company: "PotatoNet Co., Ltd.",
      position: "Work Experience Intern (Backend Developer)",
      period: "2025.10.13 ~ 2026.01.02",
      description: "Development of malicious URL detection and threat intelligence platform at a cybersecurity company",
      responsibilities: [
        "CypherThreat Backend - 90% reduction in SimHash-based similarity query response time: Applied MySQL indexing, optimized MongoDB connection pool, resolved JavaScript Number precision issues by converting BIGINT SimHash to string",
        "Optimized architecture for large-scale script data processing: Set up composite indexes based on url_id with Projection, implemented LRU caching strategy (TTL 5 minutes), enhanced network efficiency with zlib compression",
        "Campaign Management System (Olpemi Web) - 82-91% improvement in data loading performance: Reduced loading time from 2.25s to 0.2-0.4s using Promise.all for parallel API calls",
        "Implemented complex conditional search and pagination system: Campaign ID/range search functionality, separated server/client pagination design, Recoil-based state management",
        "Completed 5-tab campaign detailed analysis dashboard: Separated UI and business logic using Custom Hook pattern (.logic.ts)",
      ],
      tech: ["FastAPI", "Neo4j", "MongoDB", "MySQL", "Python", "React", "TypeScript", "Material-UI", "Recoil"],
    },
  ] as Experience[],
}
