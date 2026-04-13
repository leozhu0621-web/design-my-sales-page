

# Waitlist Email Signup Form

## Overview
Create a `waitlist_entries` table, then replace the static "Join the Waitlist" buttons with inline email signup forms that store entries in the database. No authentication required — this is a public-facing form.

## Changes

### 1. Database migration — `waitlist_entries` table
```sql
CREATE TABLE public.waitlist_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  source text DEFAULT 'website',
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.waitlist_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can join waitlist" ON public.waitlist_entries
  FOR INSERT TO anon, authenticated WITH CHECK (true);
```
Public insert, no select/update/delete for anon users.

### 2. New component — `WaitlistForm.tsx`
A small inline form with:
- Email input + submit button in a single row
- Client-side validation (zod email schema)
- Inserts into `waitlist_entries` via Supabase client
- Success state: "You're on the list!" message
- Duplicate handling: catches unique constraint error gracefully
- Loading spinner on submit

### 3. Update `DualCTASection.tsx`
Replace the static "Join the Waitlist" button in the student card with the `WaitlistForm` component.

### 4. Update `HeroSection.tsx`
Replace the "Join the Waitlist" button with the `WaitlistForm` component styled for the hero layout.

### Files
- **New**: `src/components/landing/WaitlistForm.tsx`
- **Migration**: new `waitlist_entries` table
- **Modified**: `DualCTASection.tsx`, `HeroSection.tsx`

