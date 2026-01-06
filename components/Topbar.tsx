import { Phone, Mail, HelpCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        
        {/* Left Info */}
        <div className="flex flex-col sm:flex-row gap-4">
          <span className="flex items-center gap-2">
            <Phone size={14} />
            Call us: +1 321 7582899
          </span>

          <span className="flex items-center gap-2">
            <Mail size={14} />
            Email: info@sincereedgers.com
          </span>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4 md:justify-end">
          <span className="flex items-center gap-2 text-soft">
            <HelpCircle size={14} />
            Have any questions?
          </span>

          <a
            href="#"
            className="bg-accent text-primary px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Book a Free Consultation
          </a>
        </div>

      </div>
    </div>
  );
}
