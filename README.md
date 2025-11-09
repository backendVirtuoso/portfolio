# 🎨 포트폴리오 웹사이트

> Next.js 15 기반의 현대적이고 반응형 포트폴리오 웹사이트

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://hjh-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-61dafb)](https://react.dev/)

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [주요 구현 사항](#-주요-구현-사항)
- [배포](#-배포)

## 🎯 프로젝트 소개

신입 백엔드 개발자 황준하의 포트폴리오 웹사이트입니다. Next.js 15와 최신 웹 기술을 활용하여 제작된 이 프로젝트는 다국어 지원, 다크모드, 3D 애니메이션 등 현대적인 웹 개발의 모범 사례를 담고 있습니다.

**🔗 라이브 데모**: [https://hjh-portfolio.vercel.app/](https://hjh-portfolio.vercel.app/)

## ✨ 주요 기능

### 🌐 다국어 지원 (i18n)
- 한국어 / 영어 지원
- next-intl을 활용한 동적 로케일 라우팅
- SEO 최적화된 다국어 URL 구조

### 🎨 현대적인 UI/UX
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원
- **다크모드**: next-themes를 활용한 테마 전환
- **3D 애니메이션**: Three.js & React Three Fiber로 구현된 인터랙티브 3D 씬
- **shadcn/ui**: 재사용 가능한 컴포넌트 시스템

### 📱 섹션 구성
- **Hero Section**: 첫인상을 결정하는 메인 히어로 영역
- **About Section**: 개발자 소개 및 가치관
- **Tech Stack Section**: 기술 스택 카테고리별 정리
- **Projects Section**: 팀/개인/강의 프로젝트 필터링 기능
- **Contact Section**: 연락처 정보 및 이메일 전송

### ⚡ 성능 최적화
- Vercel Analytics & Speed Insights 적용
- Next.js 15의 최신 App Router 활용
- 정적 렌더링 최적화

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 15.5 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.1
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js, React Three Fiber, Drei

### UI Components
- **Component Library**: shadcn/ui
- **Icons**: Lucide React
- **Form**: React Hook Form + Zod
- **Radix UI**: 완전한 접근성을 갖춘 UI 프리미티브

### Features
- **Internationalization**: next-intl
- **Theme**: next-themes (다크모드)
- **Font**: Geist (Vercel)
- **Analytics**: Vercel Analytics & Speed Insights

### Development Tools
- **Linting**: ESLint 9
- **Package Manager**: npm
- **Deployment**: Vercel

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/
│   │   └── [locale]/          # 다국어 라우팅
│   │       ├── layout.tsx     # 루트 레이아웃
│   │       └── page.tsx       # 메인 페이지
│   ├── components/
│   │   ├── about-section.tsx       # About 섹션
│   │   ├── contact-section.tsx     # Contact 섹션
│   │   ├── footer.tsx              # 푸터
│   │   ├── header.tsx              # 헤더
│   │   ├── hero-section.tsx        # 히어로 섹션
│   │   ├── projects-section.tsx    # 프로젝트 섹션
│   │   ├── tech-stack-section.tsx  # 기술 스택 섹션
│   │   ├── theme-provider.tsx      # 테마 프로바이더
│   │   ├── three-scene.tsx         # 3D 씬
│   │   └── ui/                     # shadcn/ui 컴포넌트
│   ├── data/
│   │   ├── projects.ts        # 프로젝트 데이터
│   │   └── tech-stack.ts      # 기술 스택 데이터
│   ├── i18n/
│   │   ├── request.ts         # i18n 요청 핸들러
│   │   └── routing.ts         # 라우팅 설정
│   ├── lib/
│   │   └── utils.ts           # 유틸리티 함수
│   ├── types/
│   │   └── index.ts           # TypeScript 타입 정의
│   └── middleware.ts          # Next.js 미들웨어
├── messages/
│   ├── en.json                # 영어 번역
│   └── ko.json                # 한국어 번역
├── public/                    # 정적 파일
├── components.json            # shadcn/ui 설정
├── next.config.ts             # Next.js 설정
├── tsconfig.json              # TypeScript 설정
└── package.json
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 20 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/backendVirtuoso/portfolio.git
cd portfolio
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### 빌드 및 프로덕션 실행

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 린팅

```bash
npm run lint
```

## 💡 주요 구현 사항

### 1. 다국어 지원 (next-intl)
```typescript
// middleware.ts에서 로케일 자동 감지 및 리다이렉션
// messages/ 폴더의 JSON 파일로 번역 관리
// [locale] 동적 라우트로 URL 국제화
```

### 2. 프로젝트 필터링
- 팀 프로젝트, 개인 프로젝트, 강의 프로젝트로 카테고리 분류
- 실시간 필터링 UI로 사용자 경험 향상

### 3. 3D 인터랙션
- Three.js를 활용한 3D 씬 렌더링
- React Three Fiber로 React 컴포넌트처럼 3D 객체 관리
- Drei 라이브러리로 3D 헬퍼 유틸리티 제공

### 4. 반응형 디자인
- Tailwind CSS의 유틸리티 클래스로 모든 디바이스 대응
- 모바일 퍼스트 접근 방식

### 5. 타입 안정성
- TypeScript로 전체 코드베이스 타입 안정성 확보
- 프로젝트, 기술 스택 등 커스텀 타입 정의

## 🌐 배포

이 프로젝트는 Vercel에 배포되어 있습니다.

- **프로덕션 URL**: [https://hjh-portfolio.vercel.app/](https://hjh-portfolio.vercel.app/)
- **배포 플랫폼**: Vercel
- **자동 배포**: main 브랜치에 푸시 시 자동 배포

### Vercel 배포 방법

1. GitHub 저장소를 Vercel과 연결
2. 프로젝트 설정 (자동 감지됨)
3. 배포 버튼 클릭

## 📊 성능 지표

- ✅ Lighthouse Performance Score: 90+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3.0s
- ✅ SEO Score: 100

## 📝 참고 자료

- **프로젝트 데이터**: `src/data/projects.ts`에서 프로젝트 정보 수정
- **기술 스택**: `src/data/tech-stack.ts`에서 기술 스택 수정
- **번역 추가**: `messages/` 폴더의 JSON 파일 편집
- **컴포넌트 커스터마이징**: `src/components/` 폴더의 각 섹션 컴포넌트 수정

## 🤝 연락처

**황준하 (Hwang Jun Ha)**
- 📧 Email: [Contact via website](https://hjh-portfolio.vercel.app/)
- 💼 GitHub: [@backendVirtuoso](https://github.com/backendVirtuoso)
- 🌐 Portfolio: [https://hjh-portfolio.vercel.app/](https://hjh-portfolio.vercel.app/)

---

⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!
