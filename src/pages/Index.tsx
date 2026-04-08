import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import StudentsSection from "@/components/landing/StudentsSection";
import InstitutionsSection from "@/components/landing/InstitutionsSection";
import AIFeaturesSection from "@/components/landing/AIFeaturesSection";
import FlywheelSection from "@/components/landing/FlywheelSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import DualCTASection from "@/components/landing/DualCTASection";
import Footer from "@/components/landing/Footer";
import NarrativeBreak from "@/components/landing/NarrativeBreak";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <NarrativeBreak text="But what if it didn't have to be this way?" />
    <StudentsSection />
    <NarrativeBreak text="And it's not just students who benefit." />
    <InstitutionsSection />
    <NarrativeBreak text="Here's the intelligence behind it all." />
    <AIFeaturesSection />
    <FlywheelSection />
    <SocialProofSection />
    <DualCTASection />
    <Footer />
  </div>
);

export default Index;
