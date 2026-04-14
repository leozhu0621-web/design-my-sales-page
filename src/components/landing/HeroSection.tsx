import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    {/* Ambient background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-ocean-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-steel-400/20 rounded-full blur-3xl animate-float-slow" />
    </div>

    <div className="max-w-5xl mx-auto text-center">
      <ScrollReveal delay={200} variant="scale-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] mb-6 tracking-tight font-heading">
          Everyone's Private
          <br />
          <span className="text-ocean-500">College Advisor</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover programs, get matched by AI, and apply to universities worldwide — all from one profile.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={600}>
        <Button size="lg" className="h-14 rounded-2xl px-10 bg-accent hover:bg-gold-400 text-accent-foreground shadow-[0_0_24px_rgba(255,229,0,0.35)] text-base font-semibold" asChild>
          <a href="https://app.unipaith.co/login">
            Join the Waitlist
            <ArrowRight size={18} className="ml-2" />
          </a>
        </Button>
      </ScrollReveal>

      {/* Product mockup */}
      <ScrollReveal delay={800} variant="scale-up">
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border bg-card shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-ocean-500/60" />
              </div>
              <div className="flex-1 text-center text-xs text-muted-foreground">app.unipaith.co</div>
            </div>
            {/* Dashboard mockup */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-4 w-32 bg-foreground/10 rounded mb-2" />
                  <div className="h-3 w-48 bg-muted-foreground/10 rounded" />
                </div>
                <div className="h-10 w-10 rounded-full bg-ocean-500/20" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {["98%", "12", "3"].map((val, i) => (
                  <div key={i} className="rounded-xl border bg-background p-4 text-center">
                    <div className="text-2xl font-bold text-foreground font-heading">{val}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {["Match Score", "Programs", "Applications"][i]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[85, 72, 60].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-ocean-500/15 shrink-0" />
                    <div className="flex-1">
                      <div className="h-3 rounded bg-foreground/8" style={{ width: `${w}%` }} />
                      <div className="h-2 rounded bg-muted-foreground/8 mt-1.5 w-1/2" />
                    </div>
                    <div className="text-sm font-semibold text-ocean-500">{[98, 94, 91][i]}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
      <a href="#wow" className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors text-center">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown size={20} />
      </a>
    </div>
  </section>
);

export default HeroSection;
