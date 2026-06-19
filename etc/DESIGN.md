---
name: Eleveweb
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#0059bb'
  on-secondary: '#ffffff'
  secondary-container: '#0070ea'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002019'
  on-tertiary-container: '#00957b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc7ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#5ffbd6'
  tertiary-fixed-dim: '#38debb'
  on-tertiary-fixed: '#002019'
  on-tertiary-fixed-variant: '#005142'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered to project a synthesis of technical precision and executive reliability. Targeted at SMB owners and startups, the visual language avoids typical "agency" fluff in favor of a **Corporate Modern** aesthetic that emphasizes scalability and structural integrity.

The brand personality is characterized by:
- **Authority:** A grounded, expert presence that reassures business owners.
- **Innovation:** Subtle tech-forward cues like microscopic grid patterns and glow effects.
- **Clarity:** High-contrast layouts that prioritize information architecture over decorative elements.

The UI utilizes a "precision-engineered" style, featuring clean lines, purposeful whitespace, and a high-fidelity finish that suggests every pixel has been intentional.

## Colors

The color strategy uses a deep foundation of **Deep Navy (#0A192F)** to establish immediate trust and professional "weight." This is contrasted by **Electric Blue (#007BFF)**, which serves as the primary action color, signaling movement and digital fluency.

- **Primary (Deep Navy):** Used for typography, navigation backgrounds, and structural footers.
- **Secondary (Electric Blue):** Reserved for primary CTAs, active states, and focus indicators.
- **Accent (Teal/Mint):** A tertiary "innovation" color used sparingly for success states or small data highlights.
- **Surface Palette:** Utilizes a range of cool greys (Slate 50 to Slate 200) to create distinct content zones without relying on heavy borders.

## Typography

This design system pairs the geometric confidence of **Montserrat** for headlines with the utilitarian precision of **Inter** for body text. 

- **Headlines:** Use Montserrat with tighter letter spacing to create a "locked-in," professional look. Large display sizes should use bold weights to anchor sections.
- **Body:** Inter is set with generous line height (1.6x) to ensure maximum readability for service descriptions and process details.
- **Labels:** Small, all-caps labels are used above section headers to categorize content (e.g., "OUR SERVICES") and provide a technical, organized feel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium, editorial feel, while transitioning to a fluid stack for mobile.

- **One-Page Flow:** Content is arranged in high-impact vertical strips. Each section must have a minimum height of 60vh to prevent visual clutter.
- **Whitespace:** Use a "Generous-Negative" approach. Large vertical gaps between sections (120px+) signify a premium service and allow the user's eye to rest.
- **Grid:** A standard 12-column grid is used for the Portfolio and Services sections. On mobile, all columns collapse to a 1-column stack with 20px side margins.
- **Visual Rhythm:** Alternating background colors (White vs. Light Grey) define the transition between Process, Portfolio, and Services.

## Elevation & Depth

Depth in this design system is created through **Tonal Layers** and **Ambient Shadows** rather than heavy skeuomorphism.

- **Surfaces:** Cards and containers use a white background against a #F8FAFC surface to create subtle separation.
- **Shadows:** Use a single, highly-diffused "Global Shadow": `0px 20px 40px rgba(10, 25, 47, 0.05)`. This creates a lifted effect that feels light and modern.
- **Interactions:** On hover, primary cards should lift slightly (translate -4px) and the shadow should increase in spread to signify interactivity.
- **Glassmorphism:** Reserved exclusively for the sticky navigation bar. A 12px backdrop blur with a 70% white tint keeps the navigation accessible while showing the content depth during scroll.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding strikes a balance between the clinical sharpness of high-tech firms and the approachability of a partner agency.

- **Small Elements:** Buttons, input fields, and tags use the base `rounded` (4px).
- **Large Elements:** Portfolio images and service cards use `rounded-lg` (8px).
- **Icons:** Use linear, 2px stroke icons with slightly rounded caps to match the UI's radius.

## Components

### Buttons
- **Primary:** Deep Navy background with White text. Sharp corners (4px) and a subtle 1px inner glow on the top edge.
- **Secondary:** Transparent background with a 2px Electric Blue border. Text in Electric Blue.
- **CTA Sizing:** Hero buttons are 56px height with Montserrat Semi-Bold.

### Input Fields
- Outlined style with 1px Slate 200 borders. On focus, the border transitions to Electric Blue with a 3px soft outer glow (halo).

### Cards (Services/Portfolio)
- Cards are borderless with a white fill and the global ambient shadow. 
- Portfolio cards should feature a full-bleed image with a 1.05x scale effect on hover.

### Process Timeline
- A vertical or horizontal line (1px dashed) connecting nodes. Active steps are highlighted in Electric Blue, while upcoming steps are Slate 300.

### Chips/Tags
- Small, low-contrast pills (Slate 100 background, Navy text) used for SEO tags or project categories.