import Link from "next/link";

const blogs = [
  {
    title: "Top 5 Accounting Tips for Small Businesses",
    description:
      "Learn the best practices for bookkeeping, financial accounting, and tax return management to keep your business compliant and profitable.",
    image: "/images/Advance_Bookkeeping.png",
    date: "Jan 2, 2026",
    link: "/blog/top-5-accounting-tips",
  },
  {
    title: "Understanding Corporate Taxation in 2026",
    description:
      "A complete guide for business owners in Pakistan and globally to navigate corporate taxation, tax filing, and compliance efficiently.",
    image: "/images/Indivdual_&_Corporate_Taxation.png",
    date: "Jan 5, 2026",
    link: "/blog/corporate-taxation-2026",
  },
  {
    title: "How CFO Support Can Boost Your Business",
    description:
      "Discover how expert CFO support and financial advisory services can enhance your strategic planning and business growth.",
    image: "/images/CFO_Support.png",
    date: "Jan 10, 2026",
    link: "/blog/cfo-support-benefits",
  },
  {
    title: "R&D Tax Credits Explained",
    description:
      "Unlock hidden tax savings through R&D tax credits with professional guidance from top financial consultants and accountants.",
    image: "/images/R&D_Tax_Credit.png",
    date: "Jan 12, 2026",
    link: "/blog/rd-tax-credits",
  },
];

export default function Blog() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-soft py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-secondary font-semibold uppercase tracking-wide">
            Insights & Tips
          </span>

          <h1 className="mt-4 text-5xl font-bold text-primary">
            Accounting, Bookkeeping & Tax Insights
          </h1>
          <p className="mt-4 text-gray-600">
            Stay updated with the latest <strong>bookkeeping services</strong>, 
            <strong> financial accounting</strong>, <strong>tax return services</strong>, and 
            business strategies from Sincere Ledger, your trusted <strong>financial services agency</strong>.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden rounded-t-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-secondary">{blog.date}</p>
                <h3 className="mt-2 text-xl font-semibold text-primary leading-snug">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm flex-1">
                  {blog.description}
                </p>

                <Link
                  href={blog.link}
                  className="mt-4 inline-block px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition self-start"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
