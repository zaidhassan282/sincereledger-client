const reasons = [
  {
    title: "100% Accuracy in Accounting & Bookkeeping",
    description:
      "Our qualified accountants ensure accurate bookkeeping, financial accounting, and reporting you can rely on for compliance and audits.",
    icon: "📊",
  },
  {
    title: "Trusted Financial Services Agency",
    description:
      "We support startups, SMEs, and enterprises with professional accounting, auditing, and financial management services.",
    icon: "🤝",
  },
  {
    title: "Secure & Confidential Financial Data",
    description:
      "Your accounting and financial records are protected with strict data security, confidentiality, and compliance standards.",
    icon: "🔒",
  },
  {
    title: "Expert Financial Advisors & Analysts",
    description:
      "Get strategic insights from experienced financial advisors and analysts to support smarter business decisions.",
    icon: "🎯",
  },
  {
    title: "Cost-Effective & Time-Saving Solutions",
    description:
      "Reduce operational costs and save valuable time with our outsourced bookkeeping and accounting services.",
    icon: "⏱️",
  },
  {
    title: "Dedicated Accounting Support",
    description:
      "Receive personalized support from our accounting professionals whenever you need help with tax, payroll, or compliance.",
    icon: "💬",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SEO Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-primary">
            Why Choose Sincere Ledger for Accounting & Tax Services
          </h2>

          <p className="mt-4 text-gray-600">
            We are a trusted financial services agency providing professional
            bookkeeping, accounting, taxation, and financial advisory services
            tailored to your business needs.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-soft rounded-2xl p-8 text-center hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-3xl">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-primary">
                {reason.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
