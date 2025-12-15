import type { Education, Experience, Certification } from "@/types"

export const educationData = {
  ko: [
    {
      school: "경기과학기술대학교",
      degree: "컴퓨터모바일융합과 학사",
      period: "2023.03 - 2024.02",
      description: "컴퓨터 공학 및 모바일 융합 기술 전공",
    },
    {
      school: "GSITM",
      degree: "부트캠프 수료",
      period: "2024.03 - 2024.07",
      description: "풀스택 개발 부트캠프 - Spring Boot 및 React 기반 웹 개발",
    },
  ] as Education[],
  en: [
    {
      school: "Gyeonggi University of Science and Technology",
      degree: "Bachelor's in Computer Mobile Convergence Engineering",
      period: "2023.03 - 2024.02",
      description: "Major in Computer Science and Mobile Convergence Technology",
    },
    {
      school: "GSITM",
      degree: "Bootcamp Completion",
      period: "2024.03 - 2024.07",
      description: "Full-stack development bootcamp - Spring Boot and React-based web development",
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
      company: "포테이토넷",
      position: "백엔드 개발 인턴",
      period: "2025.10 - 현재",
      description: "사이버 보안 프로젝트 개발 및 데이터 분석",
      responsibilities: [
        "악성 URL 탐지 시스템 개발 (MySQL + MongoDB 크로스 데이터베이스 연동)",
        "JavaScript 난독화 분석 및 SimHash 기반 유사도 검증 시스템 구현",
        "Neo4j 기반 공격자 프로파일링 대시보드 개발",
        "FastAPI를 활용한 MongoDB 데이터 API 서버 구축 및 쿼리 레벨 캐싱 구현 (응답시간 90% 개선)",
        "30만 건 이상의 대용량 악성 URL 데이터 처리 및 MongoDB Aggregation Pipeline 최적화",
      ],
      tech: ["Next.js", "Python", "FastAPI", "MongoDB", "MySQL"],
    },
  ] as Experience[],
  en: [
    {
      company: "PotatoNet",
      position: "Backend Development Intern",
      period: "2025.10 - Present",
      description: "Cybersecurity project development and data analysis",
      responsibilities: [
        "Developed malicious URL detection system (MySQL + MongoDB cross-database integration)",
        "Implemented JavaScript obfuscation analysis and SimHash-based similarity verification system",
        "Built Neo4j-based attacker profiling dashboard",
        "Developed FastAPI MongoDB data API server with query-level caching implementation (90% response time improvement)",
        "Processed large-scale malicious URL datasets (300,000+ records) with MongoDB Aggregation Pipeline optimization",
      ],
      tech: ["Next.js", "Python", "FastAPI", "MongoDB", "MySQL"],
    },
  ] as Experience[],
}
