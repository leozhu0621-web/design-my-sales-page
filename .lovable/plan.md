

# Redesign Landing Page to "Forest Canopy + Gold" Spec

This is a comprehensive redesign touching colors, typography, copy, and section content across the entire landing page based on your brand spec document.

## Summary of Changes

The current teal/coral/gold palette transforms to an earthy **forest green + warm gold** theme. All copy updates to match the spec's recommended text. The Social Proof section replaces fake metrics with a founder credibility block. CTAs change from "Create Free Account" to "Join the Waitlist." Headings switch to Lora serif font.

---

## Technical Plan

### 1. Add Lora font (`index.html`)
Add Google Fonts link for Lora (600, 700 weights) + Inter (400-700).

### 2. Replace color system (`src/index.css`)
Swap all `:root` CSS variables to the Forest Canopy palette:
- `--primary: 118 27% 23%` (forest green)
- `--secondary: 96 8% 48%` (sage)
- `--accent: 42 100% 45%` (warm gold)
- `--background: 40 33% 97%` (ivory)
- `--foreground: 120 27% 14%` (deep forest)
- Update all matching border, muted, ring, dark mode vars
- Remove old `--coral`, `--teal`, `--cream-bg` custom properties if any

### 3. Add forest/sage/gold color scales (`tailwind.config.ts`)
Add `forest`, `sage`, and `gold` color objects under `theme.extend.colors` for direct usage. Add `fontFamily: { heading: ['Lora', 'serif'], body: ['Inter', 'sans-serif'] }`.

### 4. Navbar (`Navbar.tsx`)
- Logo: "Uni" in `forest-600` font-normal, "Paith" in `forest-800` font-extrabold
- Nav links reordered: For Students, For Institutions, How It Works, AI Features
- CTAs: "Request a Demo" (ghost/outline) + "Join the Waitlist" (primary filled)

### 5. Hero Section (`HeroSection.tsx`)
- Headline: "Apply once. Go anywhere."
- Subheadline: updated per spec (mentions dual audience)
- Primary CTA: "Join the Waitlist" (gold button)
- Secondary CTA: "See How It Works" → scrolls to `#students`
- Floating orb colors: forest-100, olive, gold-300 tints

### 6. Problem Section (`ProblemSection.tsx`)
- Heading: "Admissions is broken — on both sides"
- Subheading updated per spec
- Stats: 12+, 40 hrs, 68% with updated labels
- Student card body and bullets updated per spec copy
- Institution card body and bullets updated per spec copy

### 7. Narrative Breaks (`NarrativeBreak.tsx` + `Index.tsx`)
- Style: dark band (`forest-800` bg), ivory text, gold accent line
- Break 1: "What if one platform could fix both sides at once?"
- Break 2 and 3: keep as-is

### 8. Students Section (`StudentsSection.tsx`)
- Subheading: "From overwhelmed to admitted — in three steps."
- Step descriptions updated per spec copy

### 9. Institutions Section (`InstitutionsSection.tsx`)
- "After UniPaith" header changed to "With UniPaith"
- Row copy updated per spec (e.g., "AI surfaces top candidates based on your criteria")

### 10. AI Features Section (`AIFeaturesSection.tsx`)
- Subheading: "From discovery to decision, AI works behind the scenes so you can focus on what matters."
- Feature descriptions updated per spec copy

### 11. Flywheel Section (`FlywheelSection.tsx`)
- Copy updates per spec
- Closing line: "More users → smarter AI → better matches → better outcomes → more users. The cycle keeps accelerating."

### 12. Social Proof Section (`SocialProofSection.tsx`) — **complete rewrite**
- Replace fake stats and testimonials with **founder credibility block** (Option B from spec)
- Heading: "Built by people who've lived both sides"
- Body paragraph about co-founders
- Two founder cards: Leo Zhu (Co-Founder, Product & Operations) and Rick Arrowood (Co-Founder, Strategy & Partnerships)

### 13. FAQ Section (`FAQSection.tsx`)
- Update background to match new palette (remove old `--cream-bg` reference, use ivory bg)

### 14. Dual CTA Section (`DualCTASection.tsx`)
- Heading: "Your future starts here"
- Subheading updated per spec
- Student card: "Join the Waitlist" button (gold/primary)
- Institution card: "Request a Demo" button (outline)
- Background: gradient from forest-600 to forest-800 with ivory text

### 15. Footer (`Footer.tsx`)
- Background: forest-900 near-black
- Tagline: "Apply once, go anywhere. AI-powered admissions for a connected world."
- Remove "Careers" link, keep About + Contact
- Gold hover on links

### 16. Section backgrounds per spec pattern
Apply the alternating background pattern: ivory → white → dark bands → forest-50 etc.

### 17. Update memory
Save new brand colors and design decisions to project memory.

---

## Files Modified
- `index.html` — add Lora font
- `src/index.css` — full `:root` variable replacement
- `tailwind.config.ts` — add forest/sage/gold colors + font families
- All 11 landing components updated for copy + color references
- `mem://design/brand-colors` and `mem://index.md` — updated

