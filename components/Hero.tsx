import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            {/* H1 – Primary SEO Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Professional Bookkeeping, Accounting & Tax Services for
              Growing Businesses
            </h1>

            {/* SEO-optimized paragraph */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Sincere Ledger is a trusted financial services agency providing
              expert <strong>bookkeeping services</strong>, 
              <strong> financial accounting</strong>, 
              <strong> tax return filing</strong>, and 
              <strong> payroll accounting</strong>.  
              We help businesses stay compliant, reduce tax stress, and gain
              complete financial clarity.
            </p>

            {/* Trust & Authority Line */}
            <h2 className="text-lg font-semibold text-secondary">
              Trusted by 200+ Businesses | Accurate Bookkeeping & Tax Filing |
              Secure & Confidential
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90 transition"
              >
                View Our Services
              </Link>

              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-primary font-medium hover:opacity-90 transition"
              >
                Book a Free Consultation
              </Link>

            </div>
          </div>

{/* Right Image */}
<div className="flex justify-center">
  <Image
    src="/images/Hero.png"
    alt="Sincere Ledger Accounting & Bookkeeping Services"
    width={450}
    height={450}
    priority
    className="rounded-lg object-contain"
  />
</div>

        </div>
      </div>
    </section>
  );
}
