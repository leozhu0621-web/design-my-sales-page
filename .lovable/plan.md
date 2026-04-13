

# Complete Landing Page Redesign — New Color Palette & Structure

## Overview
Tear down and rebuild the entire landing page with a new navy/slate/mist/ivory color palette and restructured navigation. The earthy forest green theme is replaced with a sophisticated deep blue scheme.

## New Color System

```text
Warm Ivory   #FEF6DC  — backgrounds, light sections
Mist Blue    #80939B  — muted text, secondary elements
Slate Blue   #586C7B  — body text, borders
Deep Harbor  #273C4D  — headings, primary actions
Midnight Navy #1A223F — dark sections, footer, navbar
```

## New Navigation
Links: **Student** | **Institution** | **AI Engine** | **About**
CTAs: **Request Demo** (outline) | **Join the Waitlist** (solid)

## What Changes

### 1. Color tokens (`src/index.css`)
Replace all `:root` and `.dark` CSS variables to map to the new palette:
- `--background` → Warm Ivory
- `--foreground` → Deep Harbor
- `--primary` → Deep Harbor
- `--secondary` → Slate Blue
- `--muted` → Mist Blue tones
- `--accent` → Warm Ivory/gold kept as accent
- Dark mode section → Midnight Navy base

### 2. Tailwind config (`tailwind.config.ts`)
- Remove `forest`, `sage`, `gold` color scales
- Add `ivory`, `mist`, `slate`, `harbor`, `navy` scales derived from the 5 hex values
- Keep Lora + Inter fonts

### 3. Navbar (`Navbar.tsx`)
- Update links to: Student (`#students`), Institution (`#institutions`), AI Engine (`#ai-engine`), About (`#about`)
- Restyle with Midnight Navy background, ivory text
- CTA buttons use harbor/ivory scheme

### 4. Hero Section (`HeroSection.tsx`)
- Replace forest/gold floating blobs with navy/mist/ivory gradient blobs
- Update badge, heading accent color, and button colors to new palette
- Keep copy structure but restyle

### 5. Problem Section (`ProblemSection.tsx`)
- Swap all `forest-*`, `gold-*` references to new palette equivalents
- Counter colors → harbor, slate, mist

### 6. Narrative Breaks (`NarrativeBreak.tsx`)
- Dark band uses Midnight Navy instead of forest-800
- Accent line uses ivory or mist instead of gold

### 7. Students Section (`StudentsSection.tsx`)
- Step colors/badges → harbor, slate, mist tones
- Section background → ivory

### 8. Institutions Section (`InstitutionsSection.tsx`)
- Comparison table restyled with harbor/slate palette
- Section ID stays `#institutions`

### 9. AI Features Section (`AIFeaturesSection.tsx`)
- Section ID → `#ai-engine` to match new nav
- Feature icon colors → harbor, slate, mist scheme
- Mock UI cards reworked with new palette

### 10. Flywheel Section (`FlywheelSection.tsx`)
- Orbit/node colors → new palette
- Background → light mist tone

### 11. Social Proof / About Section (`SocialProofSection.tsx`)
- Add `id="about"` anchor for new nav link
- Restyle founder cards with harbor/ivory scheme

### 12. FAQ Section (`FAQSection.tsx`)
- Restyle accordion triggers and icons with new palette

### 13. Dual CTA Section (`DualCTASection.tsx`)
- Gradient background → Midnight Navy to Deep Harbor
- Button colors → ivory on harbor, outline variant

### 14. Footer (`Footer.tsx`)
- Background → Midnight Navy
- Link hover → Warm Ivory
- Update nav links to match new structure

### 15. Update project memory
Save new color palette to `mem://design/brand-colors` and update index.

## Files Modified
- `src/index.css` — full CSS variable replacement
- `tailwind.config.ts` — new color scales
- All 12 landing components restyled
- `mem://design/brand-colors` and `mem://index.md`

