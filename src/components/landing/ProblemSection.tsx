import { GraduationCap, Building2 } from "lucide-react";

const ProblemSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
        The admissions process is broken
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Both sides of the equation are struggling — and it doesn't have to be this way.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Student side */}
        <div className="bg-card rounded-2xl border p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mb-5">
            <GraduationCap className="text-secondary" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">Overwhelmed by applications?</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Filling out the same forms over and over</li>
            <li>• No idea which programs are the right fit</li>
            <li>• Tracking deadlines across dozens of schools</li>
            <li>• Uncertain if you're even eligible</li>
          </ul>
        </div>

        {/* Institution side */}
        <div className="bg-card rounded-2xl border p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
            <Building2 className="text-primary" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">Drowning in admin work?</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Manually reviewing thousands of applications</li>
            <li>• Inconsistent data formats from every applicant</li>
            <li>• Compliance & integrity concerns growing</li>
            <li>• Hard to find the right-fit students</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
