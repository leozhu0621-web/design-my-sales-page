

# Add FAQ Accordion Section

## What
A new FAQ section placed between SocialProofSection and DualCTASection, using the existing shadcn Accordion component. Two columns on desktop: one for student questions, one for institution questions.

## Content

**For Students:**
- "Is UniPaith really free for students?" — Yes, always free. We're funded by institutional partnerships.
- "How does the AI matching work?" — Analyzes your profile, preferences, and goals to recommend best-fit programs — no guesswork.
- "Can I apply to multiple universities at once?" — Yes, one profile powers all your applications. Fill it once, apply everywhere.
- "Is my data safe?" — Absolutely. Your data is encrypted and never shared without your explicit consent.

**For Institutions:**
- "How does UniPaith help us find better candidates?" — AI matching surfaces students whose profiles align with your programs, improving yield and fit.
- "What does integration look like?" — A simple API or dashboard — no need to overhaul your existing admissions systems.
- "How is UniPaith priced for institutions?" — Flexible plans based on institution size. Request a demo for a tailored quote.
- "Can we customize our institution profile?" — Yes, showcase your programs, campus culture, and unique strengths to attract the right students.

## Design
- Section title "Frequently Asked Questions" with a short subtitle
- Two-column grid (stacked on mobile) with "For Students" and "For Institutions" headers
- Uses existing `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` from shadcn
- Wrapped in `ScrollReveal` for fade-in animation
- Warm cream/neutral background to match page rhythm

## Technical Details

**Create:** `src/components/landing/FAQSection.tsx`
**Edit:** `src/pages/Index.tsx` — import and place `<FAQSection />` between `<SocialProofSection />` and `<DualCTASection />`

