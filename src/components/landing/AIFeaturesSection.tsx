import { Sparkles, FileSearch, Activity, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Sparkles,
    title: "Smart Matching",
    description: "AI recommends the best student-program matches based on fit, eligibility, and preferences.",
    color: "text-accent" as const,
    bg: "bg-accent/15" as const,
  },
  {
    icon: FileSearch,
    title: "Document Parsing",
    description: "Transcripts, essays, and certificates are automatically extracted, verified, and structured.",
    color: "text-primary" as const,
    bg: "bg-primary/10" as const,
  },
  {
    icon: Activity,
    title: "Readiness Diagnostics",
    description: "Students see exactly where they stand and what to improve before applying.",
    color: "text-secondary" as const,
    bg: "bg-secondary/15" as const,
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    description: "Flag inconsistencies, plagiarism, and integrity issues before they become problems.",
    color: "text-primary" as const,
    bg: "bg-primary/10" as const,
  },
];

const AIFeaturesSection = () => (
  <section id="ai-features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full px-4 py-1 mb-4">
            <Sparkles size={14} /> Powered by AI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Intelligence at every step</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">From discovery to decision, AI works behind the scenes so you don't have to.</p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="bg-card rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition-shadow h-full">
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mx-auto mb-4`}>
                <f.icon className={f.color} size={24} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AIFeaturesSection;
