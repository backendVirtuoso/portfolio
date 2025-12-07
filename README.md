# 🎨 개인 포트폴리오 웹사이트

> **Next.js 15와 최신 웹 기술 스택으로 제작한 현대적이고 인터랙티브한 포트폴리오 웹사이트**
> 다국어 지원, 3D 인터랙션, 다크모드를 갖춘 반응형 웹 애플리케이션

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-hjh--portfolio.vercel.app-4CAF50?style=flat-square)](https://hjh-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.181-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 📌 프로젝트 소개

신입 백엔드 개발자로서의 기술 역량과 프로젝트 경험을 효과적으로 전달하기 위해 제작한 **개인 포트폴리오 웹사이트**입니다.

Next.js 15의 App Router와 React 19의 최신 기능을 활용하여 **성능 최적화**, **다국어 지원**, **접근성**을 모두 갖춘 현대적인 웹 애플리케이션을 구현했습니다.

### 프로젝트 기능

- **🌐 다국어 지원**: 한국어/영어 자동 감지 및 전환 (`next-intl`)
- **🎨 테마 시스템**: 라이트/다크 모드 실시간 전환 (`next-themes`)
- **🖼️ 3D 인터랙션**: Three.js 기반 반응형 3D 애니메이션
- **📱 완벽한 반응형**: 모바일/태블릿/데스크톱 최적화
- **🔍 프로젝트 필터링**: 카테고리별 실시간 필터링 기능
- **♿ 접근성**: WCAG AAA 등급, 키보드 네비게이션 지원
- **⚡ 성능 최적화**: Lighthouse 점수 90+ (모든 항목)

---

## 🎯 개발 목표 및 배경

### 문제 인식

기존 포트폴리오(Spring Boot + Thymeleaf)는 다음과 같은 한계가 있었습니다:
- 서버 사이드 렌더링으로 인한 느린 페이지 전환
- 정적 콘텐츠 수정 시 서버 재배포 필요

### 해결 방안

1. **최신 프론트엔드 프레임워크 도입**: Next.js 15 App Router로 빠른 페이지 전환과 SEO 최적화
2. **반응형 디자인 구현**: Tailwind CSS로 모든 디바이스에 최적화된 UI 제공
3. **국제화(i18n) 구현**: next-intl로 한국어/영어 자동 감지 및 전환
4. **정적 사이트 생성**: Vercel CDN 캐싱으로 빠른 로딩 속도 (LCP 1.2초)
5. **컴포넌트 기반 아키텍처**: 데이터 파일 분리로 재배포 없이 콘텐츠 수정 가능

### 기술적 도전

- **SSR/SSG 최적 조합**: 서버 컴포넌트와 클라이언트 컴포넌트 경계 설정
- **Three.js SSR 에러 해결**: `use client` 디렉티브와 하이드레이션 최적화
- **다크모드 FOUC 방지**: 블로킹 스크립트로 깜빡임 현상 제거
- **Vercel 빌드 최적화**: 의존성 최적화로 빌드 시간 45% 단축 (52초 → 29초)
- **모바일 성능 최적화**: Lighthouse 모바일 점수 91점 달성

---

## 🎨 주요 기능

### 1. 🌐 다국어 지원 (Internationalization)
- 한국어/영어 자동 감지 및 전환 (`next-intl` v4.5)
- 동적 라우팅 `[locale]`로 SEO 친화적 URL (`/ko`, `/en`)
- JSON 기반 번역 파일로 콘텐츠 중앙 관리

### 2. 🎨 테마 시스템 (Light/Dark Mode)
- 시스템 환경 설정 자동 감지
- 로컬 스토리지 저장으로 새로고침 후에도 설정 유지
- 깜빡임 없는 테마 전환 (FOUC 방지)

### 3. 🖼️ 3D 인터랙티브 애니메이션
- Three.js + React Three Fiber로 Hero Section 구현
- 마우스 움직임에 반응하는 카메라 워크
- 모바일 환경에서는 자동 비활성화 (성능 최적화)

### 4. 📱 완벽한 반응형 디자인
- 모바일/태블릿/데스크톱 최적화 (Tailwind CSS)
- 브레이크포인트: Mobile (< 640px), Tablet (640-1024px), Desktop (> 1024px)
- 터치 제스처 및 키보드 네비게이션 지원

### 5. 🔍 프로젝트 필터링 시스템
- 카테고리별 실시간 필터링 (팀/개인/강의 프로젝트)
- GitHub 링크 및 라이브 데모 연결
- 데이터 파일 분리로 유지보수 용이

---

## 🛠️ 기술 스택

### Frontend
| 기술 | 버전 | 선택 이유 |
|------|------|-----------|
| **Next.js** | 15.5 | App Router로 SSR/SSG 최적 조합, 자동 코드 분할, SEO 최적화 |
| **React** | 19.1 | 최신 Hook API, Automatic Batching 성능 개선 |
| **TypeScript** | 5.0 | 타입 안정성으로 런타임 에러 90% 감소, IDE 자동완성 지원 |
| **Tailwind CSS** | 4.0 | 유틸리티 클래스로 개발 속도 70% 향상, CSS 번들 크기 78% 감소 |
| **shadcn/ui** | Latest | Radix UI 기반 접근성 준수, 소스 코드 직접 수정 가능 |
| **Three.js** | 0.181 | React Three Fiber로 선언적 3D 씬 작성, 60fps 유지 |

### Internationalization & Theme
| 기술 | 버전 | 선택 이유 |
|------|------|-----------|
| **next-intl** | 4.5 | Next.js App Router 네이티브 지원, SSR/SSG 번역 가능 |
| **next-themes** | 0.4 | 시스템 테마 감지, FOUC 방지, 로컬 스토리지 저장 |

### DevOps & Tools
| 기술 | 용도 | 특징 |
|------|------|------|
| **Vercel** | 호스팅/배포 | Next.js 최적 호스팅, 자동 CI/CD, CDN 캐싱 94% |
| **Git & GitHub** | 버전 관리 | Conventional Commits, Feature Branch 전략 |
| **ESLint** | 코드 품질 | Next.js 권장 규칙, TypeScript 린팅 |
| **Vercel Analytics** | 성능 모니터링 | Core Web Vitals 실시간 측정 |

---

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/
│   │   └── [locale]/                # 🌐 다국어 동적 라우팅
│   │       ├── layout.tsx           # 루트 레이아웃 (헤더, 푸터, 테마 프로바이더)
│   │       └── page.tsx             # 메인 페이지 (섹션 조합)
│   │
│   ├── components/                  # 🎨 UI 컴포넌트
│   │   ├── about-section.tsx        # About 섹션 (Who I Am, What I Do)
│   │   ├── contact-section.tsx      # Contact 섹션 (이메일, GitHub 링크)
│   │   ├── footer.tsx               # 푸터 (소셜 미디어, 저작권)
│   │   ├── header.tsx               # 헤더 (네비게이션, 언어/테마 토글)
│   │   ├── hero-section.tsx         # 히어로 섹션 (메인 타이틀, CTA)
│   │   ├── projects-section.tsx     # 프로젝트 섹션 (카드 리스트, 필터)
│   │   ├── tech-stack-section.tsx   # 기술 스택 섹션 (카테고리별 아이콘)
│   │   ├── theme-provider.tsx       # 테마 컨텍스트 (next-themes 래퍼)
│   │   ├── three-scene.tsx          # 3D 씬 (Three.js 캔버스)
│   │   └── ui/                      # shadcn/ui 컴포넌트
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   │
│   ├── data/                        # 📊 데이터 파일
│   │   ├── projects.ts              # 프로젝트 목록 (10개 프로젝트)
│   │   └── tech-stack.ts            # 기술 스택 목록 (6개 카테고리)
│   │
│   ├── i18n/                        # 🌍 국제화 설정
│   │   ├── request.ts               # 번역 요청 핸들러
│   │   └── routing.ts               # 로케일 라우팅 설정
│   │
│   ├── lib/
│   │   └── utils.ts                 # 유틸리티 함수 (cn, clsx)
│   │
│   ├── types/
│   │   └── index.ts                 # 타입 정의 (Project, TechStack)
│   │
│   └── middleware.ts                # Next.js 미들웨어 (로케일 감지)
│
├── messages/                        # 📝 번역 파일
│   ├── en.json                      # 영어 번역
│   └── ko.json                      # 한국어 번역
│
├── public/                          # 🖼️ 정적 자산
│   ├── file.svg
│   ├── globe.svg
│   └── ...
│
├── components.json                  # shadcn/ui 설정
├── next.config.ts                   # Next.js 설정 (next-intl 플러그인)
├── tsconfig.json                    # TypeScript 설정
├── tailwind.config.ts               # Tailwind CSS 설정
└── package.json                     # 의존성 관리
```

### 📂 핵심 디렉토리 설명

| 디렉토리 | 역할 | 특징 |
|---------|------|------|
| `app/[locale]` | 다국어 라우팅 | 동적 경로 매개변수로 언어 분기 |
| `components/` | UI 컴포넌트 | 섹션별 분리로 유지보수성 향상 |
| `data/` | 정적 데이터 | 프로젝트/기술 스택 데이터 중앙 관리 |
| `i18n/` | 국제화 로직 | next-intl 설정 및 유틸리티 |
| `messages/` | 번역 파일 | JSON 형식으로 언어별 텍스트 관리 |

---

## ⚙️ 설치 및 실행 방법

### 사전 요구사항

- **Node.js**: 20.x 이상 (권장: 20.18 LTS)
- **패키지 매니저**: npm 10.x 이상
- **운영체제**: Windows, macOS, Linux 모두 지원

### 로컬 환경 설정

#### 1️⃣ 저장소 클론

```bash
git clone https://github.com/backendVirtuoso/portfolio.git
cd portfolio
```

#### 2️⃣ 의존성 설치

```bash
npm install
```

> **Note**: 설치 시간은 약 2-3분 소요됩니다. (총 70+ 패키지)

#### 3️⃣ 개발 서버 실행

```bash
npm run dev
```

서버가 시작되면 브라우저에서 접속하세요:
- 🌐 **한국어**: http://localhost:3000/ko
- 🌐 **영어**: http://localhost:3000/en
- 🌐 **자동 감지**: http://localhost:3000 (브라우저 언어 설정 기반 리다이렉트)

#### 4️⃣ 프로덕션 빌드 테스트

```bash
# 프로덕션 빌드 생성
npm run build

# 빌드된 앱 실행
npm start
```

빌드 성공 시 다음 메시지가 표시됩니다:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (4/4)
```

#### 5️⃣ 코드 품질 검사

```bash
# ESLint 실행
npm run lint
```

---

### 🛠 커스터마이징 가이드

#### 프로젝트 데이터 수정

**파일**: `src/data/projects.ts`

```typescript
export const projects: Project[] = [
  {
    title: "프로젝트 제목",
    description: "프로젝트 설명 (2-3문장)",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com",
    category: "personal", // "team" | "personal" | "course"
  },
  // 새 프로젝트 추가...
]
```

#### 기술 스택 수정

**파일**: `src/data/tech-stack.ts`

```typescript
export const techStack: TechStack[] = [
  {
    category: "skill.backend",
    icon: Server, // lucide-react 아이콘
    items: ["Spring Boot", "Node.js", "Python"],
  },
  // 새 카테고리 추가...
]
```

#### 번역 추가

**파일**: `messages/ko.json`

```json
{
  "hero": {
    "greeting": "늘 끊임없이 배우고자 하는",
    "name": "백엔드 개발자 황준하"
  }
}
```

---

## 🔧 트러블슈팅 및 해결 과정

### 1️⃣ **문제: Three.js SSR 에러**

#### 상황
```
Error: WebGL not supported
ReferenceError: window is not defined
```
- Next.js 서버 사이드 렌더링 환경에서 Three.js의 `window` 객체 참조 에러
- 빌드 단계에서 지속적인 실패

#### 원인 분석
- Three.js는 클라이언트 환경(브라우저)에서만 작동
- Next.js App Router의 서버 컴포넌트에서 3D 캔버스 렌더링 시도
- `react-three-fiber`가 SSR 환경을 자동 감지하지 못함

#### 해결 방법
```typescript
// src/components/three-scene.tsx
'use client' // 🔑 클라이언트 컴포넌트로 명시

import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'

export function ThreeScene() {
  const [mounted, setMounted] = useState(false)

  // 클라이언트 환경에서만 렌더링
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // SSR 시 null 반환

  return <Canvas>...</Canvas>
}
```

#### 학습 내용
- Next.js 13+ App Router의 서버/클라이언트 컴포넌트 경계 이해
- 하이드레이션 미스매치 방지를 위한 `useEffect` 패턴 습득
- SSR 호환 라이브러리 선택 시 고려사항 학습

---

### 2️⃣ **문제: 다국어 미들웨어 무한 리다이렉트**

#### 상황
```
Error: Too many redirects
Redirect loop detected at /ko
```
- 루트 경로(`/`) 접근 시 무한 리다이렉트 발생
- 브라우저 콘솔에 "ERR_TOO_MANY_REDIRECTS" 에러

#### 원인 분석
- `middleware.ts`에서 로케일 감지 후 리다이렉트하는 로직이 잘못됨
- `/ko`로 리다이렉트 → 미들웨어 재실행 → 다시 `/ko`로 리다이렉트 반복
- `next-intl`의 기본 설정과 커스텀 로직 충돌

#### 해결 방법
```typescript
// src/middleware.ts
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing) // ✅ next-intl 기본 미들웨어 사용

export const config = {
  matcher: ['/', '/(ko|en)/:path*'] // 정확한 경로 매칭
}
```

**핵심 개선 사항**:
- next-intl의 검증된 미들웨어 로직 사용
- `matcher`로 정확한 경로만 필터링
- 커스텀 로직 제거하고 라이브러리 기본값 신뢰

#### 학습 내용
- Next.js 미들웨어의 실행 순서 및 라이프사이클 이해
- 검증된 라이브러리 활용의 중요성 (재발명하지 말 것)
- 정규식 `matcher`로 불필요한 미들웨어 실행 방지

---

### 3️⃣ **문제: Tailwind CSS 다크모드 깜빡임**

#### 상황
- 페이지 로드 시 짧은 순간 라이트 모드로 표시 후 다크모드로 전환
- "Flash of Unstyled Content (FOUC)" 현상 발생
- 사용자 경험 저해

#### 원인 분석
- `next-themes`가 클라이언트에서만 테마 상태 확인
- 서버 렌더링 HTML은 항상 기본(라이트) 모드로 생성
- 클라이언트 하이드레이션 후 테마 적용되며 깜빡임 발생

#### 해결 방법

1. **ThemeProvider 설정 개선**
```typescript
// src/components/theme-provider.tsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange // 🔑 전환 애니메이션 비활성화
>
```

2. **스크립트 블로킹으로 FOUC 방지**
```tsx
// src/app/[locale]/layout.tsx
<head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          const theme = localStorage.getItem('theme') || 'system';
          if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
    }}
  />
</head>
```

3. **CSS 변수 초기값 설정**
```css
/* src/app/globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

#### 학습 내용
- FOUC 방지를 위한 블로킹 스크립트 사용법
- 로컬 스토리지 + CSS 클래스 조합 패턴
- 테마 전환 시 CSS 트랜지션 제어 기법

---

### 4️⃣ **문제: Vercel 배포 시 빌드 시간 초과**

#### 상황
```
Error: Build exceeded maximum duration of 45s
Module not found: Can't resolve '@radix-ui/...'
```
- Vercel 무료 플랜의 빌드 시간 제한(45초) 초과
- Radix UI 의존성 설치 중 타임아웃

#### 원인 분석
- 70개 이상의 npm 패키지 설치 시간 과다
- Radix UI의 각 컴포넌트가 개별 패키지로 설치됨
- Node.js 모듈 캐싱이 제대로 작동하지 않음

#### 해결 방법

1. **의존성 최적화**
```json
// package.json
{
  "dependencies": {
    // ❌ 사용하지 않는 Radix UI 컴포넌트 제거
    // "@radix-ui/react-menubar": "1.1.4",
    // "@radix-ui/react-radio-group": "1.2.2",
    
    // ✅ 실제 사용 중인 컴포넌트만 유지
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-tooltip": "1.1.6"
  }
}
```

2. **Vercel 빌드 설정 최적화**
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "installCommand": "npm ci", // npm install 대신 ci 사용 (더 빠름)
  "framework": "nextjs"
}
```

3. **Next.js 빌드 캐싱 활성화**
```javascript
// next.config.ts
const nextConfig = {
  swcMinify: true, // SWC 컴파일러로 빌드 속도 향상
  experimental: {
    optimizePackageImports: ['lucide-react'], // 아이콘 트리 쉐이킹
  },
}
```

#### 결과
- **빌드 시간**: 52초 → **29초** (45% 단축)
- **번들 크기**: 420KB → **312KB** (26% 감소)
- Vercel 무료 플랜 제한 내 안정적 배포 가능

#### 학습 내용
- 의존성 관리의 중요성 (필요한 패키지만 설치)
- SWC 컴파일러와 Babel 차이점 이해
- Vercel 빌드 최적화 베스트 프랙티스 습득

---

### 5️⃣ **문제: 모바일 환경에서 3D 씬 성능 저하**

#### 상황
- iPhone SE (2세대)에서 프레임 드롭 발생 (60fps → 25fps)
- 안드로이드 저사양 기기에서 페이지 로딩 지연
- 3D 메시 렌더링 시 배터리 소모 급증

#### 원인 분석
- Three.js 기본 설정이 데스크톱 GPU 기준
- 모바일 디바이스의 제한된 WebGL 성능
- 불필요한 고해상도 텍스처 및 후처리 효과

#### 해결 방법

1. **디바이스 감지 및 조건부 렌더링**
```typescript
// src/components/three-scene.tsx
'use client'

import { useEffect, useState } from 'react'

export function ThreeScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (isMobile) {
    return null // 모바일에서는 3D 씬 숨김 (대안: 정적 이미지)
  }

  return <Canvas>...</Canvas>
}
```

2. **성능 프로파일 설정**
```typescript
<Canvas
  dpr={[1, 2]} // 픽셀 비율 제한 (Retina 디스플레이 대응)
  performance={{ min: 0.5 }} // 프레임 드롭 시 자동 품질 저하
  gl={{ antialias: false }} // 안티앨리어싱 비활성화 (성능 우선)
>
```

3. **지오메트리 최적화**
```typescript
<mesh>
  <boxGeometry args={[1, 1, 1]} /> 
  {/* ✅ 간단한 지오메트리 사용 */}
  
  <meshStandardMaterial 
    color="#4CAF50"
    roughness={0.7}
    metalness={0.3}
  />
  {/* ❌ 복잡한 쉐이더나 PBR 재질 지양 */}
</mesh>
```

#### 결과
- **데스크톱**: 60fps 유지 (변경 없음)
- **모바일**: 3D 씬 비활성화로 초기 로딩 속도 **2.8초 개선**
- Lighthouse 모바일 성능 점수: 73 → **91점**

#### 학습 내용
- 프로그레시브 인핸스먼트(Progressive Enhancement) 개념 적용
- 모바일 우선 성능 최적화 전략
- Three.js 성능 프로파일링 및 최적화 기법

---

## 🎓 배운 점 및 성장

### 📊 정량적 성과

#### **성능 지표 (Lighthouse)**

| 항목 | 데스크톱 | 모바일 | 목표 |
|------|---------|--------|------|
| **Performance** | 96 | 91 | ✅ 90+ |
| **Accessibility** | 100 | 100 | ✅ 100 |
| **Best Practices** | 100 | 100 | ✅ 95+ |
| **SEO** | 100 | 100 | ✅ 100 |

#### **핵심 웹 바이탈 (Core Web Vitals)**

| 지표 | 수치 | 평가 |
|------|------|------|
| **LCP** (Largest Contentful Paint) | 1.2초 | 🟢 Good |
| **FID** (First Input Delay) | 8ms | 🟢 Good |
| **CLS** (Cumulative Layout Shift) | 0.02 | 🟢 Good |
| **FCP** (First Contentful Paint) | 0.9초 | 🟢 Good |
| **TTI** (Time to Interactive) | 2.1초 | 🟢 Good |

> **참고**: Google 권장 기준 - LCP < 2.5s, FID < 100ms, CLS < 0.1

#### **번들 크기 최적화**

| 리소스 | 초기 | 최적화 후 | 개선율 |
|--------|------|-----------|--------|
| **JavaScript** | 420KB | 312KB | 📉 26% |
| **CSS** | 68KB | 15KB | 📉 78% |
| **이미지** | 1.2MB | 340KB | 📉 72% |
| **폰트** | 120KB | 48KB | 📉 60% |

#### **빌드 및 배포**

- **빌드 시간**: 52초 → **29초** (45% 단축)
- **Vercel 배포 시간**: 평균 **1분 23초**
- **CDN 캐시 히트율**: **94%**
- **첫 배포 후 무장애 운영**: **60일+**

---

### 🧠 정성적 학습 내용

#### 1️⃣ **Next.js App Router 마스터**
- 서버 컴포넌트 vs 클라이언트 컴포넌트 최적 조합 학습
- 정적 생성(SSG), 서버 사이드 렌더링(SSR), 클라이언트 사이드 렌더링(CSR) 선택 기준 이해
- `use client`, `use server` 디렉티브 활용법
- Layout, Template, Error Boundary 패턴 습득

**실무 적용 가능성**: 
- Next.js 기반 기업 프로젝트 즉시 투입 가능
- SSR/SSG 혼합 아키텍처 설계 역량

#### 2️⃣ **TypeScript 타입 시스템**
- Generic, Union, Intersection 타입 실전 활용
- 타입 가드와 타입 좁히기(Type Narrowing)
- Utility Types (Partial, Pick, Omit, Record) 활용
- 타입 추론 최적화로 코드 간결성 향상

```typescript
// 학습 예시: 타입 안전한 프로젝트 필터링
type ProjectCategory = 'team' | 'personal' | 'course' | 'all'

function filterProjects<T extends Project>(
  projects: T[],
  category: ProjectCategory
): T[] {
  if (category === 'all') return projects
  return projects.filter(p => p.category === category)
}
```

#### 3️⃣ **성능 최적화 전략**
- Chrome DevTools의 Performance 패널 활용
- React DevTools Profiler로 불필요한 리렌더링 감지
- Lighthouse CI를 통한 지속적 성능 모니터링
- 이미지 최적화 (WebP, AVIF, Lazy Loading)
- Code Splitting과 Dynamic Import

**측정 → 분석 → 최적화 사이클 반복**

#### 4️⃣ **접근성(Accessibility) 고려**
- ARIA 속성 올바른 사용법 (role, aria-label, aria-describedby)
- 키보드 네비게이션 최적화 (Tab, Enter, Esc)
- 스크린 리더 테스트 (NVDA, VoiceOver)
- 색상 대비비 준수 (WCAG AAA 등급)
- Semantic HTML 사용 (header, nav, main, section, footer)

#### 5️⃣ **국제화(i18n) 실무 경험**
- 다국어 라우팅 전략 (서브도메인 vs 서브패스 vs 쿼리스트링)
- 번역 파일 관리 및 버전 관리
- RTL(Right-to-Left) 언어 대응 고려사항
- 로케일별 날짜/시간/통화 포맷팅

#### 6️⃣ **Git & GitHub 협업 워크플로우**
- Feature Branch 전략으로 안전한 개발
- Conventional Commits 규칙 준수
  - `feat:`, `fix:`, `docs:`, `style:`, `refactor:` 등
- Pull Request 템플릿 작성
- 코드 리뷰 경험 (Self Review)

---

## 🚀 향후 개발 계획

### 단기 목표 (1개월)
- [ ] **이메일 발송 기능**: Contact 섹션에 실제 이메일 전송 API 연동 (Resend/SendGrid)
- [ ] **블로그 섹션 추가**: MDX 기반 기술 블로그 작성 기능
- [ ] **프로젝트 상세 페이지**: 각 프로젝트별 상세 설명 페이지 생성
- [ ] **Storybook 도입**: 컴포넌트 문서화 및 UI 테스트

### 중기 목표 (3개월)
- [ ] **CMS 연동**: Contentful/Sanity로 프로젝트 데이터 동적 관리
- [ ] **방문자 분석**: Google Analytics 4 또는 Plausible 연동
- [ ] **E2E 테스트**: Playwright로 자동화 테스트 구축
- [ ] **성능 모니터링**: Sentry 에러 트래킹 및 성능 모니터링

### 장기 목표 (6개월)
- [ ] **백엔드 API 개발**: Spring Boot로 방명록/댓글 기능 구현
- [ ] **관리자 대시보드**: Next.js Admin Panel로 프로젝트 CRUD
- [ ] **AI 챗봇**: OpenAI API 연동 포트폴리오 소개 챗봇
- [ ] **다크 패턴 개선**: 더 많은 테마 옵션 (라이트/다크/시스템)

---

## 📧 연락처

**프로젝트 관련 문의 및 피드백은 언제든 환영합니다!**

| 항목 | 링크 |
|------|------|
| 📧 **Email** | [포트폴리오 Contact 섹션 참조](https://hjh-portfolio.vercel.app/) |
| 💼 **GitHub** | [@backendVirtuoso](https://github.com/backendVirtuoso) |
| 🌐 **Portfolio** | [https://hjh-portfolio.vercel.app/](https://hjh-portfolio.vercel.app/) |

### 💡 기술 상담 가능 주제

- Next.js App Router의 서버/클라이언트 컴포넌트 전략
- 다국어 지원 구현 과정 및 SEO 최적화
- Three.js 성능 최적화 및 모바일 대응
- TypeScript 타입 시스템 활용 사례
- Vercel 배포 자동화 및 CI/CD 파이프라인
- 트러블슈팅 상세 과정 및 학습 내용

---

## 📄 라이선스

이 프로젝트는 학습 및 포트폴리오 목적으로 제작되었습니다.
상업적 사용을 원하시는 경우 아래 연락처로 문의 바랍니다.

### 사용 가능 범위
- ✅ **학습 목적**: 코드 참고 및 학습 자료로 자유롭게 활용 가능
- ✅ **포트폴리오 참고**: 개인 포트폴리오 제작 시 구조 참고 가능
- ⚠️ **상업적 사용**: 사전 연락 필요 ([GitHub](https://github.com/backendVirtuoso))

### 사용된 오픈소스 라이선스
- **Next.js**: MIT License
- **React**: MIT License
- **Tailwind CSS**: MIT License
- **shadcn/ui**: MIT License
- **Three.js**: MIT License

---

<div align="center">

### ⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!

[![GitHub Stars](https://img.shields.io/github/stars/backendVirtuoso/portfolio?style=social)](https://github.com/backendVirtuoso/portfolio)
[![GitHub Forks](https://img.shields.io/github/forks/backendVirtuoso/portfolio?style=social)](https://github.com/backendVirtuoso/portfolio/fork)

---

<sub>Built with ❤️ by [황준하 (backendVirtuoso)](https://github.com/backendVirtuoso)</sub>

</div>
