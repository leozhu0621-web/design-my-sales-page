import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => (
  <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/3 w-48 h-48 bg-accent/15 rounded-full blur-3xl" />
    </div>

    <div className="max-w-5xl mx-auto text-center">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Sparkles size={16} />
          AI-Powered Admissions Platform
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Apply once,{" "}
          <span className="text-primary">go anywhere</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          UniPaith connects students and institutions through one universal application — powered by AI to simplify admissions for everyone.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-lg" asChild>
            <a href="#cta">
              Create Free Account
              <ArrowRight size={18} className="ml-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl" asChild>
            <a href="#cta">Request a Demo</a>
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <div className="relative mt-16 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl border p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted rounded-lg p-4 h-24 flex flex-col justify-between">
                <div className="w-8 h-2 bg-primary/30 rounded" />
                <div className="space-y-1">
                  <div className="w-full h-2 bg-primary/20 rounded" />
                  <div className="w-2/3 h-2 bg-primary/15 rounded" />
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 h-24 flex flex-col justify-between">
                <div className="w-8 h-2 bg-secondary/30 rounded" />
                <div className="space-y-1">
                  <div className="w-full h-2 bg-secondary/20 rounded" />
                  <div className="w-3/4 h-2 bg-secondary/15 rounded" />
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 h-24 flex flex-col justify-between">
                <div className="w-8 h-2 bg-accent/40 rounded" />
                <div className="space-y-1">
                  <div className="w-full h-2 bg-accent/30 rounded" />
                  <div className="w-1/2 h-2 bg-accent/20 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
