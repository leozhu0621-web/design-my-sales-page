

# Remove the "Who Built This" / Founders Section

## Overview
Delete the `SocialProofSection` component (the founders/about section with Leo Zhu and Rick Arrowood cards) and remove all references to it.

## Changes

### 1. Delete `src/components/landing/SocialProofSection.tsx`

### 2. Update `src/pages/About.tsx`
Remove the `SocialProofSection` import and usage. The About page will just show `DualCTASection` (or we can discuss adding different content later).

