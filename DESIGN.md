---
name: junha-portfolio
description: Personal portfolio of backend developer Junha Hwang. An engineering-notebook look built on Vercel's ink-on-paper system, adjusted to the unslop rules and the taste-skill house rules. The work itself is the visual.
sources:
  - awesome-design-md / design-md/vercel/DESIGN.md (base tokens)
  - heydamir/unslop (anti-slop passes, CC BY 4.0, Damir Sokolovsky)
  - taste-skill 2.5 (layout and motion house rules)
  - vercel-labs/agent-skills web-design-guidelines (a11y, focus, forms, motion)

colors:
  light:
    canvas: "#ffffff"
    surface: "#fafafa"      # raised rows, code panels
    surface-2: "#f4f4f5"    # active rows, hover
    ink: "#171717"          # primary text and the primary button
    body: "#4d4d4d"         # secondary text
    muted: "#6b6b6b"        # meta only, 5.3:1 on white
    hairline: "#ebebeb"
    hairline-strong: "#d4d4d4"
    accent: "#0062d1"       # cobalt; links, focus, selection, one key figure
    positive: "#16a34a"
  dark:
    canvas: "#0a0a0a"
    surface: "#111111"
    surface-2: "#1a1a1a"
    ink: "#ededed"
    body: "#a1a1a1"
    muted: "#8a8a8a"
    hairline: "rgba(255,255,255,0.08)"
    hairline-strong: "rgba(255,255,255,0.16)"
    accent: "#4d94ff"
    positive: "#4cc38a"

typography:
  sans: Geist Sans, then Pretendard Variable for Hangul, then system-ui
  mono: Geist Mono (meta, periods, stack lists, code panels)
  weights: 400 body, 500 headings and buttons, 600 only for the hero h1
  scale:
    hero: 44px mobile / 64px desktop, line-height 1.08, -0.03em, weight 600
    h2: 32px / 40px desktop, line-height 1.15, -0.02em, weight 500
    h3: 18-20px, line-height 1.35, weight 500
    body: 16px / 1.7 for Korean prose
    small: 14px / 20px
    meta: 12-13px mono, tabular-nums, no letter-spacing
  rules:
    - Sentence case. No uppercase tracked labels.
    - No gradient text, no italics for emphasis.
    - No trailing period on headings, labels or buttons.
    - text-wrap balance on headings, pretty on paragraphs.

spacing: 4px grid. Steps 4 8 12 16 20 24 32 40 48 64 80 96 128.
  - Section padding 96-128 desktop, 64-80 mobile.
  - Page gutter 24 desktop, 20 mobile; container max-w-6xl (1152px).

radius:
  control: 6px (buttons, inputs, segmented control)
  card: 12px
  panel: 12px (code panel, diagram image frames)
  never pill except the theme/lang icon buttons (square 36px, radius 6)

depth:
  - Hairlines at ~8% ink do all the work.
  - Floating panel in light: 0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05).
  - No coloured shadows or glows.

motion:
  easing: cubic-bezier(0.22, 1, 0.36, 1) everywhere (--ease)
  hover / press: 150ms; entrances: 480ms; stagger 60ms, max 6 items
  - Linked card: translateY(-2px) and a stronger hairline.
  - Image inside a frame: scale 1.02.
  - Buttons: colour step on hover, translateY(1px) on press.
  - Text links: underline draws from left.
  - Hero enters once on load. Nothing fades in on scroll. No loops, bounce or parallax.
  - Transition only color, background-color, border-color, opacity, transform.
  - prefers-reduced-motion: everything rests, nothing stays hidden.

components:
  button-primary: ink fill, white text, 44px tall in hero, 36px elsewhere, radius 6
  button-secondary: canvas fill, hairline-strong border, ink text
  nav: 64px, wordmark left, text links, two 36px icon buttons; hairline + blur after scroll
  section: border-top hairline, one wrap, left-aligned h2 + one-line lead in body colour
  meta: mono 12-13px muted, `·` separated, never pills
  code-panel: surface fill, hairline, 12px radius, mono 13px, a title bar with the file name

do:
  - Show the work: the real pipeline, the real architecture and ERD images, real numbers from the resume.
  - Keep one accent, used for links, focus rings and the one key figure.
  - Left-align headings; use asymmetric splits and row lists instead of equal card grids.
dont:
  - Violet, lavender, purple to blue gradients, gradient text.
  - Icons in tinted circles, emoji, sparkles.
  - transition-all, hover:scale on cards, animate-bounce, animate-pulse, scroll fade-ins.
  - Invented metrics, testimonials or logos.
---

# Junha Hwang portfolio design system

Read the front matter above before touching any UI. The page reads like a well-kept engineering notebook: white paper, black ink, thin rules, and mono for anything that is data. The one picture that matters is the work itself, so the hero shows a code-built diagram of a pipeline he actually built, and the projects show their real architecture images.

Credit: the motion and slop rules adapt unslop by Damir Sokolovsky (@heydamir), CC BY 4.0.
