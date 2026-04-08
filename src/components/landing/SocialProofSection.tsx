import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { end: 10, suffix: "K+", label: "Applications Simplified" },
  { end: 150, suffix: "+", label: "Partner Institutions" },
  { end: 95, suffix: "%", label: "Student Satisfaction" },
  { end: 60, suffix: "%", label: "Less Admin Time" },
];

const testimonials = [
  {
    quote: "UniPaith cut our application review time in half. The AI matching is a game-changer for finding the right students.",
    name: "Dr. Sarah Chen",
    role: "Admissions Director, Partner University",
    initials: "SC",
    bg: "bg-primary/20",
  },
  {
    quote: "I applied to 8 schools with one profile. What used to take me months took two afternoons. I wish I'd had this sooner.",
    name: "Marcus Johnson",
    role: "First-year Student, Accepted 2025",
    initials: "MJ",
    bg: "bg-secondary/20",
  },
];

const SocialProofSection = () => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal variant="blur-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">The numbers speak for themselves</h2>
        <p className="text-center text-primary-foreground/70 mb-16 max-w-lg mx-auto text-lg">
          Join a growing network transforming how admissions work.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {stats.map((s, i) => (
          <ScrollReveal key={i} delay={i * 100} variant="scale-up">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 200} variant={i === 0 ? "fade-left" : "fade-right"}>
            <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm hover-lift">
              <p className="text-lg italic mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center text-sm font-bold text-primary`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-primary-foreground/60">{t.role}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
