import ScrollReveal from "./ScrollReveal";

const InstitutionHero = () => (
  <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
    <div className="max-w-4xl mx-auto text-center">
      <ScrollReveal variant="scale-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] mb-6 tracking-tight font-heading">
          Admissions,
          <br />
          <span className="text-ocean-500">reimagined.</span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Smarter candidate matching. Structured profiles. Less manual work, better outcomes.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default InstitutionHero;
