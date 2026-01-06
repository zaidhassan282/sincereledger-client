import Link from "next/link";

const services = [
  "Advanced Bookkeeping Services",
  "Individual & Corporate Taxation Services",
  "Business Formation Services",
  "Business Planning Services",
  "LLC & LTD Formation",
  "Controller Services",
  "Management Accounting Services",
  "CFO Support Services",
];

const menu = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li key={idx}>
                <Link
                  href={`/services#${service.replace(/\s+/g, "-").toLowerCase()}`}
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <span className="text-secondary">→</span>
                  <span>{service}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-200">
            <li>Email: info@sincereledger.com</li>
            <li>Phone: +1 321 7582899</li>
            <li>
              Address: 6501 Arlington Expwy B105 #2067, Jacksonville, FL 32211
            </li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {menu.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary/30 mt-10 py-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Sincere Ledger. All Rights Reserved.
      </div>
    </footer>
  );
}
