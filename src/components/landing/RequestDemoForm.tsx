import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const demoSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  institution: z.string().trim().min(1, "Institution is required").max(200),
  message: z.string().trim().max(1000).optional(),
});

interface RequestDemoFormProps {
  className?: string;
}

const RequestDemoForm = ({ className = "" }: RequestDemoFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", institution: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = demoSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    const { error } = await supabase
      .from("demo_requests")
      .insert({
        name: result.data.name,
        email: result.data.email,
        institution: result.data.institution,
        message: result.data.message || null,
      });

    if (error) {
      setStatus("error");
      setErrors({ form: "Something went wrong. Please try again." });
    } else {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex items-center justify-center gap-2 text-harbor-500 font-medium py-4 ${className}`}>
        <CheckCircle2 size={20} />
        <span>We'll be in touch soon!</span>
      </div>
    );
  }

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 text-left ${className}`}>
      <div>
        <Input placeholder="Your name" value={form.name} onChange={update("name")} disabled={status === "loading"} className="h-11 rounded-xl bg-background" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>
      <div>
        <Input type="email" placeholder="Work email" value={form.email} onChange={update("email")} disabled={status === "loading"} className="h-11 rounded-xl bg-background" />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>
      <div>
        <Input placeholder="Institution name" value={form.institution} onChange={update("institution")} disabled={status === "loading"} className="h-11 rounded-xl bg-background" />
        {errors.institution && <p className="text-sm text-destructive mt-1">{errors.institution}</p>}
      </div>
      <div>
        <Textarea placeholder="Tell us about your needs (optional)" value={form.message} onChange={update("message")} disabled={status === "loading"} className="rounded-xl bg-background resize-none" rows={3} />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>
      {errors.form && <p className="text-sm text-destructive">{errors.form}</p>}
      <Button type="submit" size="lg" disabled={status === "loading"} className="h-12 rounded-xl bg-harbor-500 hover:bg-harbor-600 text-ivory-100">
        {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <>Request a Demo <ArrowRight size={18} className="ml-1" /></>}
      </Button>
    </form>
  );
};

export default RequestDemoForm;
