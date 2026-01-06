export default function Contact() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-soft py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-secondary font-semibold uppercase tracking-wide">
            Contact Us
          </span>

          <h1 className="mt-4 text-5xl font-bold text-primary">
            Let’s Talk About Your Business & Finances
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need expert <strong>accounting and bookkeeping services</strong>?
            Reach out to Sincere Ledger — your trusted <strong>financial services agency</strong> for tax, payroll, and financial consulting.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2">

          {/* LEFT — CONTACT INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Contact Information
              </h2>
              <p className="mt-4 text-gray-600 max-w-md">
                Reach out to our expert <strong>financial consultants</strong> using the details below or send us a message through the form.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Email Us",
                  value: "info@sincereledger.com",
                },
                {
                  title: "Call Us",
                  value: "+92 332 1234567",
                },
                {
                  title: "Visit Us",
                  value: "123 Finance St., Suite 456, New York, NY 10001",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-6 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary">
              Send Us a Message
            </h2>

            <p className="mt-3 text-gray-600">
              Fill out the form below and our <strong>financial advisors</strong> will get back to you promptly.
            </p>

            <form className="mt-8 grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              />

              <button
                type="submit"
                className="mt-4 px-10 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
