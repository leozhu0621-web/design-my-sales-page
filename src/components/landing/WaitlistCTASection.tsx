import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WaitlistCTASection = () => (
  <section className="py-28 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal variant="scale-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading">
          Your future starts here
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
          Join thousands of students already on the waitlist for smarter, fairer admissions.
        </p>
        <Button size="lg" className="h-14 rounded-2xl px-10 bg-accent hover:bg-gold-400 text-accent-foreground shadow-[0_0_24px_rgba(255,229,0,0.35)] text-base font-semibold" asChild>
          <a href="https://app.unipaith.co/login">
            Join the Waitlist
            <ArrowRight size={18} className="ml-2" />
          </a>
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default WaitlistCTASection;
