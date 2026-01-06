import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-soft py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-secondary font-semibold tracking-wide uppercase">
            About Us
          </span>

          <h1 className="mt-4 text-5xl font-bold text-primary leading-tight">
            Financial Clarity Built on Trust, Accuracy, and Experience
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Sincere Ledger is a leading <strong>financial services agency</strong> providing 
            expert <strong>bookkeeping services</strong>, <strong>financial accounting</strong>, 
            <strong>tax return services</strong>, and <strong>accounting and auditing</strong> solutions 
            to businesses in Pakistan and globally. We simplify finances, maintain compliance, and 
            help you make confident decisions.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-14 lg:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Founded on the belief that businesses deserve clear and accurate financial guidance, 
              Sincere Ledger helps companies achieve financial clarity through <strong>accounting and bookkeeping services</strong>, 
              <strong>tax filing</strong>, and strategic <strong>financial management</strong>. 
              Many businesses face challenges not because of lack of potential, but due to disorganized finances.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to bridge this gap by offering structured <strong>bookkeeping and accounting services</strong>, 
              reliable <strong>tax return filing services</strong>, and actionable financial insights 
              that allow business owners to focus on growth, not financial stress.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "500+", label: "Clients Served" },
              { value: "100%", label: "Compliance Driven" },
              { value: "Global", label: "Client Reach" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-3xl font-bold text-primary">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <HowItWorks />

      {/* VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center">
            What Sets Us Apart
          </h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Integrity First",
                desc: "Transparent processes and honest financial reporting with top accounting standards.",
              },
              {
                title: "Detail Oriented",
                desc: "Every number matters — precision in bookkeeping and auditing is non-negotiable.",
              },
              {
                title: "Business Focused",
                desc: "We align financial data and accounting services with your growth objectives.",
              },
              {
                title: "Compliance Ready",
                desc: "Always aligned with tax laws and regulatory standards for Pakistan and international clients.",
              },
              {
                title: "Scalable Support",
                desc: "Accounting, bookkeeping, and financial advisory services that grow with your business.",
              },
              {
                title: "Trusted Partnership",
                desc: "We act as your financial partner, delivering expert guidance and strategic insight.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
