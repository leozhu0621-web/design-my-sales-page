import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "10K+", label: "Applications Simplified" },
  { value: "150+", label: "Partner Institutions" },
  { value: "95%", label: "Student Satisfaction" },
  { value: "60%", label: "Less Admin Time" },
];

const SocialProofSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Trusted by students and institutions alike</h2>
        <p className="text-center text-primary-foreground/70 mb-14 max-w-lg mx-auto">
          Join a growing network transforming how admissions work.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">{s.value}</div>
              <div className="text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400}>
        <div className="mt-16 max-w-2xl mx-auto bg-primary-foreground/10 rounded-2xl p-8 text-center">
          <p className="text-lg italic mb-4">
            "UniPaith cut our application review time in half. The AI matching is a game-changer for finding the right students."
          </p>
          <div className="text-sm text-primary-foreground/70">— Admissions Director, Partner University</div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SocialProofSection;
