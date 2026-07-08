---
version: alpha
name: "Help Scout Marketing 2024"
description: "Help Scout's marketing site pairs a warm off-white clay palette (#faf8f7, #ede8e6) with a deep charcoal text hierarchy and a vivid cobalt-blue (#304ddb) for all interactive actions. The hero mixes an italic serif (Victor Serif) with a bold sans (GT America) to create editorial contrast. Typography is driven by a fluid clamp-based scale spanning XS–10XL. Elevation is expressed through a systematic multi-stop box-shadow stack (1px → 64px) rather than heavy fills. Border radii are small and consistent (~3.5–7px), reinforcing a structured, approachable product feel."
colors:
  clay-100: "#faf8f7"
  basics-white: "#ffffff"
  charcoal-1200: "#131b24"
  charcoal-600: "#7e8e9e"
  charcoal-700: "#556575"
  charcoal-800: "#405261"
  charcoal-900: "#314351"
  cobalt-600: "#304ddb"
  clay-300: "#ede8e6"
  dfe6eb-border: "#dfe6eb"
typography:
  hero-display:
    fontFamily: "Victor Serif"
    fontWeight: "400"
    lineHeight: "1.0"
    letterSpacing: "-0.02em"
  hero-bold:
    fontFamily: "GT America"
    fontSize: "63.6416px"
    fontWeight: "500"
    lineHeight: "1.0"
    letterSpacing: "-0.02em"
  section-heading-5xl:
    fontFamily: "GT America"
    fontWeight: "500"
    lineHeight: "1.1"
    letterSpacing: "-0.01em"
  subheading-2xl:
    fontFamily: "GT America"
    fontSize: "22.9536px"
    fontWeight: "500"
    lineHeight: "1.0"
    letterSpacing: "-0.02em"
  body-default:
    fontFamily: "GT America"
    fontSize: "15.4784px"
    fontWeight: "400"
    lineHeight: "24.7654px"
  body-medium:
    fontFamily: "GT America"
    fontSize: "15.4784px"
    fontWeight: "500"
    lineHeight: "21.5654px"
  body-large:
    fontFamily: "GT America"
    fontSize: "17.4784px"
    fontWeight: "400"
    lineHeight: "27.9654px"
  label-small:
    fontFamily: "GT America"
    fontSize: "13.4784px"
    fontWeight: "400"
    lineHeight: "21.5654px"
  label-uppercase-xs:
    fontFamily: "GT America"
    fontSize: "8.7392px"
    fontWeight: "500"
    lineHeight: "13.9827px"
    letterSpacing: "0.12em"
  code-mono:
    fontFamily: "Source Code Pro"
    fontWeight: "400"
    lineHeight: "1.6"
rounded:
  radius-xs: "1.7px"
  radius-sm: "3.5px"
  radius-md: "5.2px"
  radius-lg: "7px"
  radius-xl: "10.4px"
  radius-2xl: "17.9px"
  radius-pill: "41.7px"
  radius-full: "100000px"
spacing:
  spacing-1: "4px"
  spacing-2: "8.4px"
  spacing-3: "9.4px"
  spacing-4: "10.4px"
  spacing-5: "11.4px"
  spacing-6: "12px"
  spacing-7: "13.9px"
  spacing-8: "17.4px"
  spacing-9: "20.9px"
  spacing-10: "27.8px"
  spacing-11: "31.3px"
  spacing-12: "34.8px"
  spacing-13: "35px"
  spacing-14: "41.7px"
  spacing-15: "48px"
  spacing-16: "69.6px"
---

## Overview

Help Scout's marketing site pairs a warm off-white clay palette (#faf8f7, #ede8e6) with a deep charcoal text hierarchy and a vivid cobalt-blue (#304ddb) for all interactive actions. The hero mixes an italic serif (Victor Serif) with a bold sans (GT America) to create editorial contrast. Typography is driven by a fluid clamp-based scale spanning XS–10XL. Elevation is expressed through a systematic multi-stop box-shadow stack (1px → 64px) rather than heavy fills. Border radii are small and consistent (~3.5–7px), reinforcing a structured, approachable product feel.

**Signature traits:**
- Dual typeface system: Pairs Victor Serif and GT America across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 100000px.

## Colors

The palette uses 10 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **action-text** maps to `charcoal-800`: Role "text" is grounded by usage context "Primary body text, nav links, card text — dominant text color across all zones".
- **content-text** maps to `charcoal-1200`: Role "text" is grounded by usage context "Headline text, h1 elements, darkest foreground".
- **action-background** maps to `basics-white`: Role "background" is grounded by usage context "Card backgrounds, button fills, modal surfaces".
- **action-primary** maps to `clay-100`: Role "primary" is grounded by usage context "Page background, hero section, feature link backgrounds".

### Primary Brand
- **Clay 100** (#faf8f7): Page background, hero section, feature link backgrounds. Role: primary. {authored: rgb(250, 248, 247), space: rgb}

### Text Scale
- **Charcoal 1200** (#131b24): Headline text, h1 elements, darkest foreground. Role: text. {authored: rgb(19, 27, 36), space: rgb, alpha: 0.8}
- **Charcoal 600** (#7e8e9e): Disabled text, footer secondary text. Role: text. {authored: rgb(126, 142, 158), space: rgb}
- **Charcoal 700** (#556575): Secondary/muted text, nav button labels, light text variant. Role: text. {authored: rgb(85, 101, 117), space: rgb}
- **Charcoal 800** (#405261): Primary body text, nav links, card text — dominant text color across all zones. Role: text. {authored: rgb(64, 82, 97), space: rgb}
- **Charcoal 900** (#314351): Dark text variant, footer/header accents. Role: text. {authored: rgb(49, 67, 81), space: rgb}
- **Cobalt 600** (#304ddb): Primary CTA buttons, links, action states, subnav links. Role: text. {authored: rgb(48, 77, 219), space: rgb}

### Interactive
- **Clay 300** (#ede8e6): Subtle borders on feature links, dividers, card outlines. Role: border. {authored: rgb(237, 232, 230), space: rgb}
- **DFE6EB Border** (#dfe6eb): Inset border on elevated cards (box-shadow inset layer). Role: border. {authored: rgb(223, 230, 235), space: rgb}

### Surface & Shadows
- **Basics White** (#ffffff): Card backgrounds, button fills, modal surfaces. Role: background. {authored: rgb(255, 255, 255), space: rgb, alpha: 0.5}

## Typography

Typography uses Victor Serif, GT America, Source Code Pro across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes Victor Serif and GT America and Source Code Pro for visual contrast. Weight range spans regular, medium. Sizes range from 8.7392px to 63.6416px.

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Hero italic serif headline (e.g. 'The most intuitive') | Victor Serif | clamp(2.75rem, calc(4.245vw + 1.755rem), 6rem) | 400 | 1.0 | -0.02em | Victor Serif | Extracted token |
| Hero bold sans headline (e.g. 'customer support platform') | GT America | 63.6416px | 500 | 1.0 | -0.02em | GT America, Helvetica, Arial, sans-serif; features: "ss01", "ss03", "ss05" | Extracted token |
| Section-level headings | GT America | clamp(2rem, calc(1.306vw + 1.694rem), 3rem) | 500 | 1.1 | -0.01em | GT America, Helvetica, Arial, sans-serif; features: "ss01", "ss03", "ss05" | Extracted token |
| Card headings, feature titles | GT America | 22.9536px | 500 | 1.0 | -0.02em | GT America, Helvetica, Arial, sans-serif; features: "ss01", "ss03", "ss05" | Extracted token |
| Primary body copy, card descriptions, nav items | GT America | 15.4784px | 400 | 24.7654px | normal | GT America, Helvetica, Arial, sans-serif; features: "ss01", "ss03", "ss05" | Extracted token |
| Emphasized body text, button labels | GT America | 15.4784px | 500 | 21.5654px | normal | GT America, Helvetica, Arial, sans-serif; features: "ss01", "ss03", "ss05" | Extracted token |
| Hero subtext, intro paragraphs | GT America | 17.4784px | 400 | 27.9654px | normal | GT America, Helvetica, Arial, sans-serif; features: "ss01", "ss03", "ss05" | Extracted token |
| Nav labels, secondary UI text | GT America | 13.4784px | 400 | 21.5654px | normal | GT America, Helvetica, Arial, sans-serif; features: "ss01", "ss03", "ss05" | Extracted token |
| Eyebrow labels, category tags (uppercase) | GT America | 8.7392px | 500 | 13.9827px | 0.12em | GT America, Helvetica, Arial, sans-serif; features: "ss01", "ss03", "ss05" | Extracted token |
| Inline code snippets | Source Code Pro | clamp(0.875rem, calc(0.163vw + 0.837rem), 1rem) | 400 | 1.6 | normal | Source Code Pro | Extracted token |

## Layout

Responsive system uses 4 breakpoint tier(s): mobile, tablet, desktop, wide.

This system uses a 6.95px base grid with scale values 4, 8.4, 9.4, 10.4, 11.4, 13.9, 17.4, 20.9, 27.8, 31.3, 34.8, 41.7, 48, 69.6, 111.3, 180.8.

### Responsive Strategy
- **mobile (340-768px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (>= 708px)**: Increase spacing and column structure for medium-width viewports.
- **desktop (>= 1024px)**: Expand layout density and horizontal composition for wide viewports.
- **wide (>= 1600px)**: Stretch composition with generous gutters and wider layout spans.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| spacing-1 | 4px | 4 | Extracted spacing token |
| spacing-2 | 8.4px | 8.4 | Extracted spacing token |
| spacing-3 | 9.4px | 9.4 | Extracted spacing token |
| spacing-4 | 10.4px | 10.4 | Extracted spacing token |
| spacing-5 | 11.4px | 11.4 | Extracted spacing token |
| spacing-6 | 12px | 12 | Extracted spacing token |
| spacing-7 | 13.9px | 13.9 | Extracted spacing token |
| spacing-8 | 17.4px | 17.4 | Extracted spacing token |
| spacing-9 | 20.9px | 20.9 | Extracted spacing token |
| spacing-10 | 27.8px | 27.8 | Extracted spacing token |
| spacing-11 | 31.3px | 31.3 | Extracted spacing token |
| spacing-12 | 34.8px | 34.8 | Extracted spacing token |
| spacing-13 | 35px | 35 | Extracted spacing token |
| spacing-14 | 41.7px | 41.7 | Extracted spacing token |
| spacing-15 | 48px | 48 | Extracted spacing token |
| spacing-16 | 69.6px | 69.6 | Extracted spacing token |
| spacing-17 | 111.3px | 111.3 | Extracted spacing token |
| spacing-18 | 180.8px | 180.8 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | backdrop-filter | blur(2px) ; blur(3px) ; blur(8px) |
| Light | outline-color | rgb(64, 82, 97) ; rgb(19, 27, 36) ; rgb(126, 142, 158) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 0, 0) ; matrix(-1, 0, 0, 1, 0, 0) ; matrix(0.9, 0, 0, 0.9, 0, 0) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| radius-xs | 1.7px | 1.7 | Hairline corner |
| radius-sm | 3.5px | 3.5 | Subtle corner |
| radius-md | 5.2px | 5.2 | Subtle corner |
| radius-lg | 7px | 7 | Control corner |
| radius-xl | 10.4px | 10.4 | Control corner |
| radius-2xl | 17.9px | 17.9 | Card corner |
| radius-pill | 41.7px | 41.7 | Large surface corner |
| radius-full | 100000px | 100000 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| radius-xs | 1.7px | px |
| radius-sm | 3.5px | px |
| radius-md | 5.2px | px |
| radius-lg | 7px | px |
| radius-xl | 10.4px | px |
| radius-2xl | 17.9px | px |
| radius-pill | 41.7px | px |
| radius-full | 100000px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 767px | (max-width: 767px) |
| Breakpoint 2 | <= 768px | (max-width: 768px) |
| Mobile | >= 340px | (min-width: 340px) |
| Mobile | >= 375px | (min-width: 375px) |
| Mobile | >= 445px | (min-width: 445px) |
| Mobile | >= 480px | (min-width: 480px) |
| Mobile | >= 560px | (min-width: 560px) |
| Mobile | >= 635px | (min-width: 635px) |
| Mobile | >= 708px | (min-width: 708px) |
| Tablet | >= 768px | (min-width: 768px) |
| Tablet | >= 900px | (min-width: 900px) |
| Tablet | >= 1020px | (min-width: 1020px) |
| Desktop | >= 1024px | (min-width: 1024px) |
| Desktop | >= 1200px | (min-width: 1200px) |
| Desktop | >= 1220px | (min-width: 1220px) |
| Desktop | >= 1600px | (min-width: 1600px) |
| Desktop | >= 2560px | (min-width: 2560px) |
| Breakpoint 18 | Unknown | (hover: hover) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
