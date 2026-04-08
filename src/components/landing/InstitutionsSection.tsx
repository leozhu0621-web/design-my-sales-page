import { ClipboardList, Brain, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Standardized Intake",
    description: "Receive applications in a consistent, structured format — no more manual data wrangling.",
  },
  {
    icon: Brain,
    title: "AI-Powered Review Tools",
    description: "Let AI surface the strongest candidates, flag anomalies, and score fit automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Compliance",
    description: "Built-in document verification, plagiarism detection, and audit-ready workflows.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Understand applicant pipelines, conversion rates, and yield with real-time analytics.",
  },
];

const InstitutionsSection = () => (
  <section id="institutions" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-primary/10 text-primary text-sm font-medium rounded-full px-4 py-1 mb-4">For Institutions</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Admissions, modernized</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Reduce admin burden while finding better-fit students.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-card rounded-2xl border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <f.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InstitutionsSection;
