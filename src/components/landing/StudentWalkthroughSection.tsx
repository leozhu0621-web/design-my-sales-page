import ScrollReveal from "./ScrollReveal";
import { User, Search, Send, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Tell us who you are",
    desc: "Grades, interests, goals, extracurriculars — build a rich profile that represents the real you. No repetitive forms, no guesswork.",
    mockup: (
      <div className="rounded-2xl border bg-card shadow-lg p-6 space-y-4">
        <div className="text-sm font-semibold text-foreground mb-4">Profile Builder</div>
        {["Full Name", "GPA / Grades", "Interests & Goals"].map((label, i) => (
          <div key={i}>
            <div className="text-xs text-muted-foreground mb-1">{label}</div>
            <div className="h-10 rounded-lg border bg-background" />
          </div>
        ))}
        <div className="text-xs text-muted-foreground mb-1">Extracurriculars</div>
        <div className="flex flex-wrap gap-2">
          {["Debate Club", "Research", "Volunteer Work"].map((t) => (
            <span key={t} className="text-xs bg-ocean-500/10 text-secondary px-3 py-1.5 rounded-full">{t}</span>
          ))}
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden mt-2">
          <div className="h-full bg-secondary rounded-full" style={{ width: "65%" }} />
        </div>
        <div className="text-xs text-muted-foreground">Profile 65% complete</div>
      </div>
    ),
  },
  {
    icon: Search,
    title: "We'll find where you belong",
    desc: "Our AI analyzes thousands of programs worldwide and ranks them by how well they fit your unique profile.",
    mockup: (
      <div className="rounded-2xl border bg-card shadow-lg p-6 space-y-3">
        <div className="text-sm font-semibold text-foreground mb-2">Your Top Matches</div>
        {[
          { name: "MIT", prog: "Computer Science · B.Sc.", score: 98 },
          { name: "ETH Zurich", prog: "Data Science · M.Sc.", score: 94 },
          { name: "U of Toronto", prog: "AI & ML · M.Sc.", score: 91 },
        ].map((m, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border bg-background p-3">
            <div className="w-10 h-10 rounded-lg bg-ocean-500/15 flex items-center justify-center text-sm font-bold text-secondary">{m.name[0]}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-foreground truncate">{m.name}</div>
              <div className="text-xs text-muted-foreground">{m.prog}</div>
            </div>
            <div className="text-lg font-bold text-ocean-500">{m.score}%</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Send,
    title: "Apply once, go anywhere",
    desc: "Submit your profile to multiple universities with one click. Track every application from a single dashboard.",
    mockup: (
      <div className="rounded-2xl border bg-card shadow-lg p-6 space-y-3">
        <div className="text-sm font-semibold text-foreground mb-2">Applications</div>
        {[
          { name: "MIT", status: "Submitted", color: "text-ocean-500 bg-ocean-500/10" },
          { name: "ETH Zurich", status: "In Review", color: "text-accent-foreground bg-accent/20" },
          { name: "U of Toronto", status: "Draft", color: "text-muted-foreground bg-muted" },
        ].map((a, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border bg-background p-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-ocean-500/15 flex items-center justify-center text-xs font-bold text-secondary">{a.name[0]}</div>
              <span className="text-sm font-medium text-foreground">{a.name}</span>
            </div>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${a.color}`}>{a.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: "Your AI advisor, always on",
    desc: "Get instant, personalized guidance on deadlines, essays, strategy — whenever you need it.",
    mockup: (
      <div className="rounded-2xl border bg-card shadow-lg p-6 space-y-3">
        <div className="text-sm font-semibold text-foreground mb-2">AI Advisor</div>
        <div className="flex justify-end">
          <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-br-sm px-4 py-2.5 text-sm max-w-[80%]">
            Should I apply Early Decision to MIT?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-muted text-foreground rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm max-w-[80%]">
            Based on your profile strength (<span className="font-semibold text-ocean-500">98% match</span>), ED could significantly boost your chances. However, it's binding — make sure MIT is your top choice.
          </div>
        </div>
      </div>
    ),
  },
];

const StudentWalkthroughSection = () => (
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

export default StudentWalkthroughSection;
