import { UserCircle, Search, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: UserCircle,
    title: "Build Your Universal Profile",
    description: "Create one comprehensive profile with your academics, activities, essays, and documents. Write it once — use it everywhere.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    line: "bg-secondary",
  },
  {
    icon: Search,
    title: "Discover & Match Programs",
    description: "Our AI analyzes your profile and recommends programs where you're a great fit. No more guessing, no more spreadsheets.",
    color: "text-primary",
    bg: "bg-primary/10",
    line: "bg-primary",
  },
  {
    icon: Send,
    title: "Apply & Track Everything",
    description: "Submit applications to multiple schools with one click. Track every status, deadline, and update in a single dashboard.",
    color: "text-accent-foreground",
    bg: "bg-accent/15",
    line: "bg-accent",
  },
];

const StudentsSection = () => (
  <section id="students" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/40">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal variant="blur-in">
        <div className="text-center mb-20">
          <span className="inline-block bg-secondary/15 text-secondary text-sm font-medium rounded-full px-4 py-1.5 mb-4">For Students</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Your path, simplified</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">Three steps from overwhelmed to admitted.</p>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline connector line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 250} variant={i % 2 === 0 ? "fade-left" : "fade-right"}>
              <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className={`w-8 h-8 rounded-full ${step.line} text-card flex items-center justify-center text-sm font-bold`}>
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md">{step.description}</p>
                </div>

                {/* Timeline dot (desktop) */}
                <div className="hidden md:flex w-5 h-5 rounded-full border-4 border-background shadow-md flex-shrink-0 z-10" style={{ backgroundColor: `hsl(var(--${i === 0 ? 'secondary' : i === 1 ? 'primary' : 'accent'}))` }}>
                  <div className={`w-full h-full rounded-full ${step.line}`} />
                </div>

                {/* Visual card */}
                <div className="flex-1">
                  <div className={`${step.bg} rounded-2xl p-8 flex items-center justify-center`}>
                    <step.icon className={step.color} size={64} strokeWidth={1.2} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StudentsSection;
