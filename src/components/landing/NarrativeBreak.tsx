import ScrollReveal from "./ScrollReveal";

interface NarrativeBreakProps {
  text: string;
  variant?: "fade-up" | "scale-up" | "blur-in";
}

const NarrativeBreak = ({ text, variant = "blur-in" }: NarrativeBreakProps) => (
  <div className="py-16 px-4 sm:px-6 lg:px-8">
    <ScrollReveal variant={variant}>
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-foreground/80 max-w-3xl mx-auto leading-snug italic">
        {text}
      </p>
    </ScrollReveal>
  </div>
);

export default NarrativeBreak;
