import ScrollReveal from "./ScrollReveal";
import { Users, UserCheck, BarChart3, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Smart candidate pipeline",
    desc: "AI-ranked applicants surface the best-fit students for your programs — reducing noise and accelerating decisions.",
    mockup: (
      <div className="rounded-2xl border bg-card shadow-lg p-6 space-y-3">
        <div className="text-sm font-semibold text-foreground mb-2">Candidate Pipeline</div>
        {[
          { name: "Sarah Chen", match: 98, status: "Strong Fit" },
          { name: "James Okafor", match: 95, status: "Strong Fit" },
          { name: "Priya Sharma", match: 89, status: "Good Fit" },
          { name: "Lucas Weber", match: 76, status: "Moderate" },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border bg-background p-3">
            <div className="w-9 h-9 rounded-full bg-ocean-500/15 flex items-center justify-center text-xs font-bold text-secondary">
              {c.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.status}</div>
            </div>
            <div className="text-sm font-bold text-ocean-500">{c.match}%</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: UserCheck,
    title: "Structured, comparable profiles",
    desc: "Every applicant arrives in a standardized format — making review faster, fairer, and more consistent.",
    mockup: (
      <div className="rounded-2xl border bg-card shadow-lg p-6">
        <div className="text-sm font-semibold text-foreground mb-4">Student Profile</div>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full bg-ocean-500/15 flex items-center justify-center text-lg font-bold text-secondary">SC</div>
          <div>
            <div className="font-semibold text-foreground">Sarah Chen</div>
            <div className="text-sm text-muted-foreground">Computer Science · GPA 3.92</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: "SAT", value: "1520" },
            { label: "Research", value: "2 papers" },
            { label: "Leadership", value: "Club President" },
            { label: "Languages", value: "EN, ZH, FR" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border bg-background p-2.5 text-center">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="text-sm font-semibold text-foreground">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Machine Learning", "Robotics", "Ethics in AI"].map((t) => (
            <span key={t} className="text-xs bg-ocean-500/10 text-secondary px-2.5 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    desc: "Track application volume, yield predictions, and demographic insights — all in one live dashboard.",
    mockup: (
      <div className="rounded-2xl border bg-card shadow-lg p-6">
        <div className="text-sm font-semibold text-foreground mb-4">Analytics Dashboard</div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Applications", value: "2,847" },
            { label: "Yield Rate", value: "34%" },
            { label: "Avg Match", value: "86%" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border bg-background p-3 text-center">
              <div className="text-xl font-bold text-foreground font-heading">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Chart mockup */}
        <div className="flex items-end gap-2 h-24">
          {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 92].map((h, i) => (
            <div key={i} className="flex-1 bg-secondary/20 rounded-t" style={{ height: `${h}%` }}>
              <div className="w-full bg-secondary rounded-t" style={{ height: `${Math.min(h + 10, 100)}%` }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
          <span>Jan</span><span>Jun</span><span>Dec</span>
        </div>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Integrity built in",
    desc: "Verified transcripts, AI-checked essays, and fraud detection — so you can trust every application.",
    mockup: (
      <div className="rounded-2xl border bg-card shadow-lg p-6 space-y-3">
        <div className="text-sm font-semibold text-foreground mb-2">Verification Status</div>
        {[
          { label: "Transcript", status: "Verified", ok: true },
          { label: "Essay Originality", status: "98% Original", ok: true },
          { label: "Identity", status: "Confirmed", ok: true },
          { label: "Recommendations", status: "2 of 2 received", ok: true },
        ].map((v, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border bg-background p-3">
            <span className="text-sm text-foreground">{v.label}</span>
            <span className="text-xs font-medium text-ocean-500 bg-ocean-500/10 px-2.5 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck size={12} /> {v.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];

const InstitutionWalkthroughSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto space-y-32">
      {steps.map((step, i) => (
        <ScrollReveal key={i} delay={100} variant={i % 2 === 0 ? "fade-left" : "fade-right"}>
          <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-ocean-500/10 mb-5">
                <step.icon className="text-secondary" size={24} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading">{step.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{step.desc}</p>
            </div>
            <div className="flex-1 w-full max-w-md">{step.mockup}</div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default InstitutionWalkthroughSection;
