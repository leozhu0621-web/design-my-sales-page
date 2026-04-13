import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WaitlistForm from "./WaitlistForm";

const DualCTASection = () => (
  <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-navy-500 to-harbor-500">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal variant="blur-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-ivory-100 mb-4 font-heading">
          Your future starts here
        </h2>
        <p className="text-center text-ivory-100/70 mb-14 text-lg max-w-xl mx-auto">
          Whether you're a student ready to explore or an institution ready to evolve — UniPaith is being built for you.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal delay={100} variant="fade-left">
          <div className="bg-card rounded-2xl border p-8 sm:p-10 text-center shadow-sm hover-lift transition-all h-full group">
            <div className="w-16 h-16 rounded-2xl bg-harbor-500/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="text-harbor-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Start your journey</h3>
            <p className="text-muted-foreground mb-8">Be among the first to experience a smarter way to discover and apply to programs. Join our waitlist — it takes 30 seconds.</p>
            <Button size="lg" className="w-full sm:w-auto px-10 py-7 rounded-xl text-lg bg-harbor-500 hover:bg-harbor-600 text-ivory-100" asChild>
              <a href="https://app.unipaith.co/login">
                Join the Waitlist
                <ArrowRight size={20} className="ml-2" />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300} variant="fade-right">
          <div className="bg-card rounded-2xl border p-8 sm:p-10 text-center shadow-sm hover-lift transition-all h-full group">
            <div className="w-16 h-16 rounded-2xl bg-slate-500/10 flex items-center justify-center mx-auto mb-6">
              <Building2 className="text-slate-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Transform your admissions</h3>
            <p className="text-muted-foreground mb-8">See how UniPaith can streamline your intake, improve matching, and free your team to focus on what matters.</p>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 py-7 rounded-xl text-base border-harbor-500 text-harbor-500 hover:bg-harbor-500 hover:text-ivory-100 text-lg">
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
