import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const DualCTASection = () => (
  <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    {/* Warm gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />

    <div className="max-w-5xl mx-auto">
      <ScrollReveal variant="blur-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          Your future starts with one click
        </h2>
        <p className="text-center text-muted-foreground mb-14 text-lg max-w-xl mx-auto">
          Whether you're a student ready to explore or an institution ready to evolve — UniPaith is ready for you.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal delay={100} variant="fade-left">
          <div className="bg-card rounded-2xl border p-8 sm:p-10 text-center shadow-sm hover-lift hover:border-secondary/40 transition-all h-full group">
            <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="text-secondary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Start your journey</h3>
            <p className="text-muted-foreground mb-8">Create your free UniPaith account and apply to programs worldwide with one profile. It takes 5 minutes.</p>
            <Button size="lg" className="w-full sm:w-auto px-10 py-7 rounded-xl text-base bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg">
              Create Free Account
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300} variant="fade-right">
          <div className="bg-card rounded-2xl border p-8 sm:p-10 text-center shadow-sm hover-lift hover:border-primary/40 transition-all h-full group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Building2 className="text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Transform admissions</h3>
            <p className="text-muted-foreground mb-8">See how UniPaith can streamline your intake, improve matching, and free your team to focus on what matters.</p>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 py-7 rounded-xl text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg">
              Request a Demo
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default DualCTASection;
