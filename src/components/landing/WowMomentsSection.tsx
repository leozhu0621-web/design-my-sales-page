import ScrollReveal from "./ScrollReveal";
import { Brain, Layers, MessageCircle } from "lucide-react";

const moments = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    desc: "Get a personalized match score for every program — powered by your goals, grades, and preferences.",
    mockup: (
      <div className="relative w-full max-w-sm mx-auto">
        {/* Radial gauge mockup */}
        <svg viewBox="0 0 200 200" className="w-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--border))" strokeWidth="12" />
          <circle
            cx="100" cy="100" r="80" fill="none"
            stroke="hsl(var(--secondary))" strokeWidth="12"
            strokeDasharray="502" strokeDashoffset="50"
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            className="transition-all duration-1000"
          />
          <text x="100" y="95" textAnchor="middle" className="fill-foreground text-4xl font-bold font-heading" fontSize="40">98%</text>
          <text x="100" y="120" textAnchor="middle" className="fill-muted-foreground" fontSize="12">Match Score</text>
        </svg>
      </div>
    ),
  },
  {
    icon: Layers,
    title: "One Profile, Every School",
    desc: "Build your profile once. Apply to programs across the world with a single click.",
    mockup: (
      <div className="space-y-3 max-w-sm mx-auto">
        {["University of Toronto", "ETH Zurich", "University of Melbourne"].map((name, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border bg-card p-4 hover-lift">
            <div className="w-10 h-10 rounded-lg bg-ocean-500/15 flex items-center justify-center text-sm font-bold text-secondary">{name[0]}</div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-foreground">{name}</div>
              <div className="text-xs text-muted-foreground">Computer Science · M.Sc.</div>
            </div>
            <div className="text-xs font-medium text-ocean-500 bg-ocean-500/10 px-2 py-1 rounded-full">Applied</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: "Your AI Advisor",
    desc: "Ask anything about admissions, deadlines, or strategy — and get instant, personalized answers.",
    mockup: (
      <div className="max-w-sm mx-auto space-y-3">
        <div className="flex justify-end">
          <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-br-sm px-4 py-2.5 text-sm max-w-[80%]">
            What are my chances at ETH Zurich?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-muted text-foreground rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm max-w-[80%]">
            Based on your profile, you have a <span className="font-semibold text-ocean-500">strong match (94%)</span>. Your GPA and research experience align well with their CS program.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-br-sm px-4 py-2.5 text-sm max-w-[80%]">
            Help me draft my statement of purpose
          </div>
        </div>
      </div>
    ),
  },
];

const WowMomentsSection = () => (
  <section id="wow" className="py-28 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto space-y-32">
      {moments.map((m, i) => (
        <ScrollReveal key={i} delay={100} variant={i % 2 === 0 ? "fade-left" : "fade-right"}>
          <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-ocean-500/10 mb-5">
                <m.icon className="text-secondary" size={24} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading">{m.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{m.desc}</p>
            </div>
            <div className="flex-1 w-full">{m.mockup}</div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default WowMomentsSection;
