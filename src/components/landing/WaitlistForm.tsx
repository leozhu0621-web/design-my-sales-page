import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);

interface WaitlistFormProps {
  source?: string;
  className?: string;
  buttonClassName?: string;
  inputClassName?: string;
}

const WaitlistForm = ({
  source = "website",
  className = "",
  buttonClassName = "",
  inputClassName = "",
}: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setErrorMsg(result.error.errors[0].message);
      return;
    }

    setStatus("loading");
    const { error } = await supabase
      .from("waitlist_entries")
      .insert({ email: result.data, source });

    if (error) {
      if (error.code === "23505") {
        // duplicate — treat as success
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } else {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex items-center justify-center gap-2 text-harbor-500 font-medium ${className}`}>
        <CheckCircle2 size={20} />
        <span>You're on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-2 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`h-12 rounded-xl bg-background ${inputClassName}`}
          disabled={status === "loading"}
          required
        />
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className={`h-12 rounded-xl px-6 whitespace-nowrap ${buttonClassName}`}
        >
          {status === "loading" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>
              Join the Waitlist
              <ArrowRight size={18} className="ml-1" />
            </>
          )}
        </Button>
      </div>
      {errorMsg && <p className="text-sm text-destructive">{errorMsg}</p>}
    </form>
  );
};

export default WaitlistForm;
