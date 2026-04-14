import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "Is UniPaith really free for students?", a: "Yes, always free. We're funded by institutional partnerships, so students never pay a cent." },
  { q: "How does the AI matching work?", a: "Our AI analyzes your profile, preferences, and goals to recommend best-fit programs — no guesswork, just data-driven guidance." },
  { q: "Can I apply to multiple universities at once?", a: "Absolutely. One profile powers all your applications. Fill it once, apply everywhere." },
  { q: "Is my data safe?", a: "Your data is encrypted end-to-end and never shared without your explicit consent. Your privacy is our priority." },
];

const StudentFAQSection = () => (
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
            <AccordionItem key={i} value={`s-${i}`}>
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

export default StudentFAQSection;
