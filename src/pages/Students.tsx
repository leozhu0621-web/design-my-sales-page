import Navbar from "@/components/landing/Navbar";
import StudentHero from "@/components/landing/StudentHero";
import StudentWalkthroughSection from "@/components/landing/StudentWalkthroughSection";
import StudentFAQSection from "@/components/landing/StudentFAQSection";
import WaitlistCTASection from "@/components/landing/WaitlistCTASection";
import Footer from "@/components/landing/Footer";

const Students = () => (
  <div className="min-h-screen">
    <Navbar />
    <StudentHero />
    <StudentWalkthroughSection />
    <StudentFAQSection />
    <WaitlistCTASection />
    <Footer />
  </div>
);

export default Students;
