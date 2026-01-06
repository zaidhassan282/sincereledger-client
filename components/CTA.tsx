import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-primary py-24 mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Ready to Take Control of Your Finances?
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-soft max-w-3xl mx-auto">
          Partner with <span className="font-semibold">Sincere Ledger</span> for reliable, transparent,
          and professional <strong>accounting and bookkeeping services</strong>, 
          <strong>tax preparation services</strong>, and expert <strong>financial advisory</strong> 
          that help your business thrive in Pakistan and globally.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
