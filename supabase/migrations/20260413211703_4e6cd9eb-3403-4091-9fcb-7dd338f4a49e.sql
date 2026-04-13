CREATE TABLE public.waitlist_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  source text DEFAULT 'website',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.waitlist_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
  ON public.waitlist_entries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);