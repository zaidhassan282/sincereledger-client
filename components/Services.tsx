const services = [
  {
    title: "Advanced Bookkeeping Services",
    description:
      "Professional bookkeeping services to keep your financial records accurate, compliant, and audit-ready with real-time reporting.",
    image: "/images/Advance_Bookkeeping.png",
  },
  {
    title: "Individual & Corporate Taxation",
    description:
      "Expert individual and corporate tax services including tax planning, return filing, compliance, and liability minimization.",
    image: "/images/Indivdual_&_Corporate_Taxation.png",
  },
  {
    title: "Business Formation Services",
    description:
      "End-to-end business formation services to help you legally register, structure, and launch your company with confidence.",
    image: "/images/Business_Formation.png",
  },
  {
    title: "Business Planning & Advisory",
    description:
      "Strategic business planning services designed to improve profitability, scalability, and long-term financial growth.",
    image: "/images/Business_Planning.png",
  },
  {
    title: "LLC & LTD Company Formation",
    description:
      "Complete LLC and LTD company formation services, including documentation, registration, and regulatory compliance.",
    image: "/images/LLC_&_LTD.png",
  },
  {
    title: "Controller Services",
    description:
      "Professional controller services to oversee accounting operations, financial controls, and reporting accuracy.",
    image: "/images/Controller.png",
  },
  {
    title: "Management Accounting Services",
    description:
      "In-depth management accounting services delivering actionable financial insights, budgeting, and performance analysis.",
    image: "/images/Management_Accounting.png",
  },
  {
    title: "CFO Support & Advisory Services",
    description:
      "Virtual CFO support services to guide financial strategy, cash-flow management, and executive-level decision making.",
    image: "/images/CFO_Support.png",
  },
  {
    title: "R&D Tax Credit Services",
    description:
      "Specialized R&D tax credit services to help eligible businesses claim incentives and maximize tax savings.",
    image: "/images/R&D_Tax_Credit.png",
  },
];

export default function Services() {
  return (
    <section className="bg-soft py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SEO Heading */}
        <h2 className="text-4xl font-bold text-primary text-center">
          Professional Accounting, Bookkeeping & Tax Services
        </h2>

        {/* Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="flex items-center justify-center bg-gray-50 p-8 rounded-t-xl">
                <img
                  src={service.image}
                  alt={`${service.title} by Sincere Ledger`}
                  className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 text-center">
                <h3 className="text-xl font-semibold text-primary leading-snug">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-primary
                    border
                    border-accent
                    rounded-lg
                    transition-all
                    duration-300
                    hover:bg-accent
                    hover:text-white
                  "
                >
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
