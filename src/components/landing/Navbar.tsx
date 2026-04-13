import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Student", href: "#students" },
    { label: "Institution", href: "#institutions" },
    { label: "AI Engine", href: "#ai-engine" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-500/95 backdrop-blur-md border-b border-navy-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl hover:scale-105 transition-transform">
            <span className="font-normal text-mist-400">Uni</span>
            <span className="font-extrabold text-ivory-100">Paith</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="story-link text-sm font-medium text-mist-300 hover:text-ivory-100 transition-colors">
                {l.label}
              </a>
            ))}
            <Button variant="outline" size="sm" className="border-mist-500 text-ivory-100 hover:bg-harbor-500 hover:text-ivory-100" asChild>
              <a href="#cta">Request a Demo</a>
            </Button>
            <Button size="sm" className="bg-ivory-100 text-navy-500 hover:bg-ivory-200" asChild>
              <a href="#cta">Join the Waitlist</a>
            </Button>
          </div>

          <button className="md:hidden text-ivory-100" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-500 border-b border-navy-400/30 px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-mist-300 hover:text-ivory-100">
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" size="sm" className="border-mist-500 text-ivory-100 hover:bg-harbor-500" asChild>
              <a href="#cta">Request a Demo</a>
            </Button>
            <Button size="sm" className="bg-ivory-100 text-navy-500 hover:bg-ivory-200" asChild>
              <a href="#cta">Join the Waitlist</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
