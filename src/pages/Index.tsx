import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WowMomentsSection from "@/components/landing/WowMomentsSection";
import AudienceForkSection from "@/components/landing/AudienceForkSection";
import WaitlistCTASection from "@/components/landing/WaitlistCTASection";
import Footer from "@/components/landing/Footer";
import ScrollProgressCurve from "@/components/landing/ScrollProgressCurve";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <ScrollProgressCurve />
    <HeroSection />
    <WowMomentsSection />
    <AudienceForkSection />
    <WaitlistCTASection />
    <Footer />
  </div>
);

export default Index;
