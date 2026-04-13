const Footer = () => (
  <footer className="bg-navy-500 text-ivory-100 py-14 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <h4 className="text-lg mb-4">
            <span className="font-normal text-mist-400">Uni</span>
            <span className="font-extrabold text-ivory-100">Paith</span>
          </h4>
          <p className="text-sm text-ivory-100/60">Apply once, go anywhere. AI-powered admissions for a connected world.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-sm">Platform</h5>
          <ul className="space-y-2 text-sm text-ivory-100/60">
            <li><a href="#students" className="hover:text-ivory-100 transition-colors">For Students</a></li>
            <li><a href="#institutions" className="hover:text-ivory-100 transition-colors">For Institutions</a></li>
            <li><a href="#ai-engine" className="hover:text-ivory-100 transition-colors">AI Engine</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-sm">Company</h5>
          <ul className="space-y-2 text-sm text-ivory-100/60">
            <li><a href="#about" className="hover:text-ivory-100 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-ivory-100 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-sm">Legal</h5>
          <ul className="space-y-2 text-sm text-ivory-100/60">
            <li><a href="#" className="hover:text-ivory-100 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-ivory-100 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory-100/20 pt-6 text-center text-sm text-ivory-100/50">
        © {new Date().getFullYear()} UniPaith. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
