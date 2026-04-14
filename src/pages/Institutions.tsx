import Navbar from "@/components/landing/Navbar";
import InstitutionHero from "@/components/landing/InstitutionHero";
import InstitutionWalkthroughSection from "@/components/landing/InstitutionWalkthroughSection";
import InstitutionFAQSection from "@/components/landing/InstitutionFAQSection";
import InstitutionCTASection from "@/components/landing/InstitutionCTASection";
import Footer from "@/components/landing/Footer";

const Institutions = () => (
  <div className="min-h-screen">
    <Navbar />
    <InstitutionHero />
    <InstitutionWalkthroughSection />
    <InstitutionFAQSection />
    <InstitutionCTASection />
    <Footer />
  </div>
);

export default Institutions;
