import ScrollReveal from "./ScrollReveal";
import RequestDemoForm from "./RequestDemoForm";

const InstitutionCTASection = () => (
  <section className="py-28 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
    <div className="max-w-2xl mx-auto text-center">
      <ScrollReveal variant="scale-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading">
          Transform your admissions
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
          See how UniPaith can streamline your intake, improve matching, and free your team to focus on what matters.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg">
          <RequestDemoForm />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default InstitutionCTASection;
