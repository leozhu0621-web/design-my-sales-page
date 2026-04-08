import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const DualCTASection = () => (
  <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <ScrollReveal delay={0}>
        <div className="bg-card rounded-2xl border p-8 sm:p-10 text-center shadow-sm h-full">
          <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="text-secondary" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Start your journey</h3>
          <p className="text-muted-foreground mb-6">Create your free UniPaith account and apply to programs worldwide with one profile.</p>
          <Button size="lg" className="w-full sm:w-auto px-8 py-6 rounded-xl text-base bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Create Free Account
            <ArrowRight size={18} className="ml-1" />
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="bg-card rounded-2xl border p-8 sm:p-10 text-center shadow-sm h-full">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Building2 className="text-primary" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Transform admissions</h3>
          <p className="text-muted-foreground mb-6">See how UniPaith can streamline your intake, improve matching, and reduce workload.</p>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 rounded-xl text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Request a Demo
            <ArrowRight size={18} className="ml-1" />
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DualCTASection;
