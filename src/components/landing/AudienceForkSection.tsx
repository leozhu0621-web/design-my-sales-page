import { GraduationCap, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const AudienceForkSection = () => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal variant="blur-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4 font-heading">
          Built for both sides of admissions
        </h2>
        <p className="text-center text-muted-foreground mb-14 text-lg max-w-xl mx-auto">
          Whether you're applying or accepting — UniPaith is designed for you.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal delay={100} variant="fade-left">
          <Link to="/students" className="block group">
            <div className="rounded-2xl border bg-card p-10 text-center hover-lift transition-all h-full">
              <div className="w-16 h-16 rounded-2xl bg-ocean-500/10 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-secondary transition-transform duration-300 group-hover:scale-110" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">I'm a Student</h3>
              <p className="text-muted-foreground mb-6">Discover programs, get AI-matched, and apply to universities worldwide from one profile.</p>
              <span className="inline-flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all">
                Explore <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={200} variant="fade-right">
          <Link to="/institutions" className="block group">
            <div className="rounded-2xl border bg-card p-10 text-center hover-lift transition-all h-full">
              <div className="w-16 h-16 rounded-2xl bg-navy-500/10 flex items-center justify-center mx-auto mb-6">
                <Building2 className="text-foreground transition-transform duration-300 group-hover:scale-110" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">I'm an Institution</h3>
              <p className="text-muted-foreground mb-6">Streamline admissions, discover better-fit candidates, and make data-driven decisions.</p>
              <span className="inline-flex items-center text-foreground font-semibold group-hover:gap-3 gap-2 transition-all">
                Explore <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AudienceForkSection;
