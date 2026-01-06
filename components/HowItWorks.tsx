const steps = [
  {
    step: "01",
    title: "Free Consultation & Requirement Analysis",
    description:
      "We begin with a detailed consultation to understand your bookkeeping, accounting, tax, and financial management needs.",
  },
  {
    step: "02",
    title: "Customized Financial Planning",
    description:
      "Our financial advisors create a tailored accounting, bookkeeping, and tax planning strategy aligned with your business goals.",
  },
  {
    step: "03",
    title: "Execution & Compliance Management",
    description:
      "We manage your accounting and bookkeeping services, payroll accounting, tax filing, and regulatory compliance efficiently.",
  },
  {
    step: "04",
    title: "Ongoing Support & Financial Growth",
    description:
      "Continuous monitoring, financial analysis, and expert support to help your business grow with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-soft py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SEO Heading */}
        <h2 className="text-4xl font-bold text-primary text-center">
          How Our Accounting & Bookkeeping Services Work
        </h2>

        <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto">
          Our transparent process ensures reliable accounting, bookkeeping,
          tax preparation, and financial advisory services from start to finish.
        </p>

        {/* Steps */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {/* Step Circle */}
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white text-2xl font-bold">
                {step.step}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-primary">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
