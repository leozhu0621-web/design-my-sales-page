import { GraduationCap, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const ProblemSection = () => (
  <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal variant="blur-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6">
          The admissions process is broken
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
          Every year, millions of students and thousands of institutions go through the same painful cycle.
        </p>
      </ScrollReveal>

      {/* Dramatic stats */}
      <ScrollReveal delay={200}>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-secondary mb-1">
              <AnimatedCounter end={12} suffix="+" />
            </div>
            <p className="text-sm text-muted-foreground">applications per student on average</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">
              <AnimatedCounter end={40} suffix="hrs" />
            </div>
            <p className="text-sm text-muted-foreground">spent on repetitive paperwork</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent-foreground mb-1">
              <AnimatedCounter end={68} suffix="%" />
            </div>
            <p className="text-sm text-muted-foreground">feel overwhelmed by the process</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal delay={100} variant="fade-left">
          <div className="bg-card rounded-2xl border p-8 sm:p-10 shadow-sm h-full">
            <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mb-6">
              <GraduationCap className="text-secondary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Picture this…</h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              It's midnight. You're filling out your 8th application this month. Each one asks for the same transcripts, the same essays, the same test scores. You're exhausted — and you're not even sure these schools are right for you.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">✦</span> Filling out the same forms over and over</li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">✦</span> No idea which programs are the right fit</li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">✦</span> Tracking deadlines across dozens of schools</li>
              <li className="flex items-start gap-2"><span className="text-secondary mt-1">✦</span> Uncertain if you're even eligible</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300} variant="fade-right">
          <div className="bg-card rounded-2xl border p-8 sm:p-10 shadow-sm h-full">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
              <Building2 className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Meanwhile, on the other side…</h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Your admissions team is buried under 5,000 applications — each in a different format. You know there are brilliant students in there, but finding them feels like searching for needles in a haystack.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✦</span> Manually reviewing thousands of applications</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✦</span> Inconsistent data from every applicant</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✦</span> Growing compliance & integrity concerns</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">✦</span> Missing the right-fit students entirely</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ProblemSection;
