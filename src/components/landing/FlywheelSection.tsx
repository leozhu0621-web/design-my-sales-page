import { Users, TrendingUp, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const nodes = [
  { icon: Users, label: "More Participation", desc: "Students & institutions join", color: "text-primary", bg: "bg-primary/10" },
  { icon: TrendingUp, label: "Better Matching", desc: "AI improves with scale", color: "text-accent-foreground", bg: "bg-accent/20" },
  { icon: Award, label: "Better Outcomes", desc: "Higher satisfaction & yield", color: "text-secondary", bg: "bg-secondary/15" },
];

const FlywheelSection = () => (
  <section id="flywheel" className="py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <ScrollReveal variant="blur-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">The UniPaith flywheel</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-20 text-lg">
          Every participant makes the network smarter — creating a cycle that benefits everyone.
        </p>
      </ScrollReveal>

      {/* Circular flywheel */}
      <ScrollReveal delay={200} variant="scale-up">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
          {/* Rotating orbit ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-border animate-orbit" style={{ animationDuration: "30s" }} />
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm sm:text-base font-bold text-primary">UniPaith</span>
            </div>
          </div>

          {/* Node: top */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="bg-card rounded-2xl border p-4 shadow-md w-40 sm:w-48">
              <div className={`w-10 h-10 rounded-lg ${nodes[0].bg} flex items-center justify-center mx-auto mb-2`}>
                <Users className={nodes[0].color} size={20} />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">{nodes[0].label}</p>
              <p className="text-xs text-muted-foreground">{nodes[0].desc}</p>
            </div>
          </div>

          {/* Node: bottom-left */}
          <div className="absolute -bottom-8 -left-10 sm:-left-16">
            <div className="bg-card rounded-2xl border p-4 shadow-md w-40 sm:w-48">
              <div className={`w-10 h-10 rounded-lg ${nodes[2].bg} flex items-center justify-center mx-auto mb-2`}>
                <Award className={nodes[2].color} size={20} />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">{nodes[2].label}</p>
              <p className="text-xs text-muted-foreground">{nodes[2].desc}</p>
            </div>
          </div>

          {/* Node: bottom-right */}
          <div className="absolute -bottom-8 -right-10 sm:-right-16">
            <div className="bg-card rounded-2xl border p-4 shadow-md w-40 sm:w-48">
              <div className={`w-10 h-10 rounded-lg ${nodes[1].bg} flex items-center justify-center mx-auto mb-2`}>
                <TrendingUp className={nodes[1].color} size={20} />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">{nodes[1].label}</p>
              <p className="text-xs text-muted-foreground">{nodes[1].desc}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={500}>
        <p className="text-muted-foreground mt-24 text-base italic">
          …and the cycle keeps accelerating. More users → smarter AI → better matches → happier outcomes → more users.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FlywheelSection;
