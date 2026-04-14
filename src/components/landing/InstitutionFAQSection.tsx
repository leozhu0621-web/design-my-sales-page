import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "How does UniPaith help us find better candidates?", a: "AI matching surfaces students whose profiles align with your programs, improving yield and fit rates significantly." },
  { q: "What does integration look like?", a: "A simple API or dashboard — no need to overhaul your existing admissions systems. We fit into your workflow." },
  { q: "How is UniPaith priced for institutions?", a: "Flexible plans based on institution size and needs. Request a demo for a tailored quote." },
  { q: "Can we customize our institution profile?", a: "Yes, showcase your programs, campus culture, and unique strengths to attract the right students." },
];

const InstitutionFAQSection = () => (
  <section className="py-24 px-4 bg-muted/30">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 font-heading text-center">
          Frequently Asked Questions
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`i-${i}`}>
              <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-secondary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default InstitutionFAQSection;
