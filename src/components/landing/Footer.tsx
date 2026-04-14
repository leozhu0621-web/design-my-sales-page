import { Link } from "react-router-dom";
import logoDark from "@/assets/unipaith-logo-dark.svg";

const Footer = () => (
  <footer className="bg-navy-500 text-fog-100 py-14 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <Link to="/" className="mb-4 block">
            <img src={logoDark} alt="UniPaith" className="h-7" />
          </Link>
          <p className="text-sm text-fog-100/60">Apply once, go anywhere. AI-powered admissions for a connected world.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-sm">Platform</h5>
          <ul className="space-y-2 text-sm text-fog-100/60">
            <li><Link to="/students" className="hover:text-fog-100 transition-colors">For Students</Link></li>
            <li><Link to="/institutions" className="hover:text-fog-100 transition-colors">For Institutions</Link></li>
            <li><Link to="/ai-engine" className="hover:text-fog-100 transition-colors">AI Engine</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-sm">Company</h5>
          <ul className="space-y-2 text-sm text-fog-100/60">
            <li><Link to="/about" className="hover:text-fog-100 transition-colors">About</Link></li>
            <li><a href="#" className="hover:text-fog-100 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-sm">Legal</h5>
          <ul className="space-y-2 text-sm text-fog-100/60">
            <li><a href="#" className="hover:text-fog-100 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-fog-100 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-fog-100/20 pt-6 text-center text-sm text-fog-100/50">
        © {new Date().getFullYear()} UniPaith. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
