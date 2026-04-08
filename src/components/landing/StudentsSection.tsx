import { UserCircle, Search, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: UserCircle,
    title: "Build Your Universal Profile",
    description: "Create one comprehensive profile with your academics, activities, essays, and documents. Use it everywhere.",
  },
  {
    icon: Search,
    title: "Discover & Match Programs",
    description: "Our AI analyzes your profile and recommends programs where you're a great fit — no more guessing.",
  },
  {
    icon: Send,
    title: "Apply & Track Everything",
    description: "Submit applications to multiple schools with one click and track every status in a single dashboard.",
  },
];

const StudentsSection = () => (
  <section id="students" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary/15 text-secondary text-sm font-medium rounded-full px-4 py-1 mb-4">For Students</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Your path, simplified</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Three steps to go from overwhelmed to admitted.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div className="relative bg-card rounded-2xl border p-8 text-center shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold shadow">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-5 mt-2">
                <step.icon className="text-secondary" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StudentsSection;
