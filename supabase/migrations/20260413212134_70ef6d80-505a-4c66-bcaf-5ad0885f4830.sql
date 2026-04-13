CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  institution TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a demo request"
ON public.demo_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);