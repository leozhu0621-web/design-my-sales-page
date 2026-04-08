import { Users, TrendingUp, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FlywheelSection = () => (
  <section id="flywheel" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The UniPaith flywheel</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-14">
          Every participant makes the network smarter — creating better outcomes for everyone.
        </p>
      </ScrollReveal>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
        <ScrollReveal delay={0}>
          <div className="bg-card rounded-2xl border p-6 shadow-sm max-w-xs">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">More Participation</h3>
            <p className="text-sm text-muted-foreground">Students and institutions join the network</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="text-muted-foreground text-2xl hidden md:block">→</div>
          <div className="text-muted-foreground text-2xl md:hidden">↓</div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-card rounded-2xl border p-6 shadow-sm max-w-xs">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-accent-foreground" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Better Matching</h3>
            <p className="text-sm text-muted-foreground">AI improves with more data and diversity</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <div className="text-muted-foreground text-2xl hidden md:block">→</div>
          <div className="text-muted-foreground text-2xl md:hidden">↓</div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="bg-card rounded-2xl border p-6 shadow-sm max-w-xs">
            <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mx-auto mb-3">
              <Award className="text-secondary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Better Outcomes</h3>
            <p className="text-sm text-muted-foreground">Higher acceptance rates, lower churn, happier people</p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={500}>
        <p className="text-sm text-muted-foreground mt-8 italic">…which attracts even more participants ↻</p>
      </ScrollReveal>
    </div>
  </section>
);

export default FlywheelSection;
