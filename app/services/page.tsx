import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Image from "next/image";

const stats = [
  { label: "Accuracy in Bookkeeping", value: 95 },
  { label: "Tax Savings for Clients", value: 87 },
  { label: "Client Satisfaction Rate", value: 98 },
  { label: "Businesses Served", value: 100 },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-soft py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Professional Accounting & Bookkeeping Services
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Sincere Ledger provides expert <strong>financial accounting</strong>, 
            <strong> bookkeeping services</strong>, <strong>tax preparation services</strong>, and 
            <strong> financial advisory</strong> to help businesses in Pakistan and internationally 
            manage their finances efficiently and grow confidently.
          </p>
        </div>
      </section>

      {/* Stats + Graph Section */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wide">
              Our Impact
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary">
              Measurable Results That Drive Business Growth
            </h2>

            <p className="mt-4 text-gray-700">
              At Sincere Ledger, our focus is on <strong>accuracy in bookkeeping</strong>, 
              <strong> financial management</strong>, and strategic financial insights. 
              We help companies with <strong>tax return services</strong>, 
              <strong>payroll accounting</strong>, and <strong>accounting and auditing</strong> 
              to improve performance, reduce risk, and achieve sustainable growth.
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-16 lg:grid-cols-2 items-center">

            {/* LEFT: Stats */}
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-soft rounded-xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                    {stat.value === 100 ? "+" : "%"}
                  </div>

                  <div className="mt-1 text-gray-700 font-medium">
                    {stat.label}
                  </div>

                  <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Image */}
            <div className="flex justify-center">
              <img
                src="/images/chart.png"
                alt="Business growth and financial performance graph showing bookkeeping and tax services improvements"
                className="rounded-xl shadow-lg max-w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Full Services Component */}
      <section className="bg-soft py-24">
        <Services />
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
