import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-ocean-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-steel-400/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-[20%] w-48 h-48 bg-navy-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-[20%] w-64 h-64 bg-ocean-500/8 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "4s" }} />
    </div>

    <div className="max-w-5xl mx-auto text-center">
      <ScrollReveal variant="blur-in">
        <div className="inline-flex items-center gap-2 bg-ocean-500/10 text-ocean-500 rounded-full px-5 py-2 text-sm font-medium mb-8">
          <Sparkles size={16} />
          AI-Powered Admissions Platform
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200} variant="scale-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight font-heading">
          Apply once.{" "}
          <br className="hidden sm:block" />
          <span className="text-ocean-500">Go anywhere.</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          UniPaith is the AI-powered platform that gives students a single profile to discover and apply to programs worldwide — and gives institutions smarter, faster, fairer admissions.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={600}>
        <div className="max-w-md mx-auto">
          <Button size="lg" className="h-12 rounded-xl px-8 bg-gold-500 hover:bg-gold-400 text-[#0C1C35] shadow-[0_0_20px_rgba(255,242,0,0.4)] text-base font-semibold" asChild>
            <a href="https://app.unipaith.co/login">
              Join the Waitlist
              <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
      <a href="#problem" className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown size={20} />
      </a>
    </div>
  </section>
);

export default HeroSection;
