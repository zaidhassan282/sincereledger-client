"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Advanced Bookkeeping Services", link: "/services/advanced-bookkeeping" },
  { title: "R&D Tax Credit Services", link: "/services#r-d-tax-credit-service" },
  { title: "Individual & Corporate Taxation", link: "/services#individual-corporate-taxation-services" },
  { title: "Business Formation Services", link: "/services#business-formation-services" },
  { title: "Business Planning Services", link: "/services#business-planning-services" },
  { title: "Outsource Payroll Services", link: "/services#outsource-payroll-services" },
  { title: "Controller Services", link: "/services#controller-services" },
  { title: "LLC & LTD Formation", link: "/services#llc-ltd-formation" },
  { title: "Management Accounting", link: "/services#management-accounting-services" },
  { title: "CFO Support Services", link: "/services#cfo-support-services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-[175px] h-[50px] bg-gray-200 flex items-center justify-center text-sm text-gray-500">
              LOGO
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-primary">

            <Link href="/" className="hover:text-accent">Home</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              {/* Main Services link */}
              <Link
                href="/services"
                className="flex items-center gap-1 hover:text-accent"
              >
                Services <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full left-0 mt-3 w-72 rounded-lg bg-white shadow-xl opacity-0 invisible translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out">
                <ul className="py-4 text-sm text-gray-700">
                  {services.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.link}
                        className="block px-4 py-2 hover:bg-soft hover:text-primary transition"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/about" className="hover:text-accent">About Us</Link>
            <Link href="/blog" className="hover:text-accent">Blog</Link>
            <Link href="/contact" className="hover:text-accent">Contact</Link>

          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-primary"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-6 py-4 flex flex-col gap-4 text-primary font-medium">

            <Link href="/">Home</Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full"
            >
              <Link href="/services">Services</Link> <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-2 text-sm text-gray-700">
                {services.map((item) => (
                  <Link key={item.title} href={item.link}>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
