import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/unipaith-logo-dark.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Student", to: "/students" },
    { label: "Institution", to: "/institutions" },
    { label: "AI Engine", to: "/ai-engine" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-500/95 backdrop-blur-md border-b border-navy-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="hover:scale-105 transition-transform">
            <img src={logoDark} alt="UniPaith" className="h-8" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="story-link text-sm font-medium text-steel-400 hover:text-fog-100 transition-colors">
                {l.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="border-steel-500 text-fog-100 hover:bg-ocean-500 hover:text-white" asChild>
              <a href="https://app.unipaith.co/login">Request a Demo</a>
            </Button>
            <Button size="sm" className="bg-gold-500 text-[#0C1C35] hover:bg-gold-400 font-semibold shadow-[0_0_20px_rgba(255,229,0,0.4)]" asChild>
              <a href="https://app.unipaith.co/login">Join the Waitlist</a>
            </Button>
          </div>

          <button className="md:hidden text-fog-100" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-500 border-b border-navy-400/30 px-4 pb-4 space-y-3">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-steel-400 hover:text-fog-100">
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" size="sm" className="border-steel-500 text-fog-100 hover:bg-ocean-500" asChild>
              <a href="https://app.unipaith.co/login">Request a Demo</a>
            </Button>
            <Button size="sm" className="bg-gold-500 text-[#0C1C35] hover:bg-gold-400 font-semibold shadow-[0_0_20px_rgba(255,229,0,0.4)]" asChild>
              <a href="https://app.unipaith.co/login">Join the Waitlist</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
