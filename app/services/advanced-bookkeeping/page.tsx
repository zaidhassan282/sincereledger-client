"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function AdvancedBookkeepingPage() {
  const features = [
    {
      title: "Financial Statement Preparation",
      description: "Go beyond basic reports with GAAP-compliant financial statements that lenders and investors trust. We prepare detailed Balance Sheets, Profit & Loss Statements, and Cash Flow Statements that provide a clear picture of your financial position. Our meticulous financial statement analysis ensures you understand not just your numbers, but what they mean for your business strategy.",
    },
    {
      title: "Accounts Receivable and Payable Management",
      description: "Take control of your cash flow with systematic receivable and payable management. We streamline your invoicing, payment tracking, and vendor management to improve collections and maintain strong financial relationships.",
    },
    {
      title: "Bank Reconciliation",
      description: "Eliminate financial discrepancies with rigorous bank reconciliation services. We meticulously match every transaction across your accounts, credit cards, and loan statements. Regular reconciliation helps prevent fraud and errors.",
    },
    {
      title: "Payroll Processing",
      description: "Simplify payroll with full-service processing. We handle wage calculations, tax withholdings, and compliance filings, ensuring your team is paid accurately while protecting your business from regulatory risks.",
    },
    {
      title: "Tax Preparation and Filing",
      description: "Transform tax season into a strategic advantage. Our tax preparation and filing services maximize deductions and ensure full compliance, making April 15th just another deadline you’re fully prepared to meet.",
    },
    {
      title: "Financial Analysis and Reporting",
      description: "Move from reactive accounting to proactive business intelligence. Our analysis provides actionable insights into profitability, cash flow trends, and business performance, helping you identify growth opportunities before they impact your bottom line.",
    },
  ];

  const faqs = [
    {
      question: "What is included in Advanced Bookkeeping Services?",
      answer: "Our advanced bookkeeping services encompass comprehensive financial management, including financial statement preparation, accounts receivable/payable management, bank reconciliation, payroll processing, tax preparation, and strategic financial analysis.",
    },
    {
      question: "How does advanced bookkeeping differ from basic bookkeeping?",
      answer: "While basic bookkeeping focuses on transaction recording, advanced bookkeeping provides strategic financial management with accrual accounting, financial analysis, and actionable business insights.",
    },
    {
      question: "How can advanced bookkeeping services benefit my growing business?",
      answer: "Advanced bookkeeping delivers strategic clarity, time recovery, and risk mitigation. We identify profitability drivers and cost-saving opportunities while reclaiming 15-20 hours monthly for business growth.",
    },
    {
      question: "What kind of businesses can benefit from advanced bookkeeping services?",
      answer: "Startups, established companies, professional services, contractors, and any business with complex financial operations can benefit. We help you focus on growth, not bookkeeping.",
    },
    {
      question: "How secure is my financial data with Sincere Ledger?",
      answer: "Your data security is our highest priority. We use 256-bit encryption, multi-factor authentication, SOC 2-compliant data centers, and rigorous security audits to protect your information.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <main className="overflow-x-hidden">

      {/* Hero */}
      <section className="bg-soft py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Advanced Bookkeeping Services: Precision Financial Management for Strategic Growth
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              You’ve moved past the startup stage. Now, your business needs <strong>advanced bookkeeping services</strong> that provide a strategic, accurate, and clear financial foundation for your next phase of growth.
            </p>
            <Link
              href="https://wa.me/+13217582899"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/Advance_Bookkeeping.png"
              alt="Advanced Bookkeeping Services"
              width={526}
              height={600}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Advanced Bookkeeping Services <span className="text-accent">Include:</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="https://wa.me/+13217582899"
              target="_blank"
              className="inline-block px-10 py-4 bg-accent text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-soft py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p className="text-gray-700 text-base leading-relaxed">
            <strong>Sincere Ledger</strong> delivers comprehensive bookkeeping that unifies every facet of your financial management. We transform daily transaction recording and <strong>complex financial reporting</strong> into a streamlined process, fully compliant with GAAP.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>Precision Data Entry:</strong> Accurate categorization for a clear view of your financial position.</li>
            <li><strong>Real-Time Financial Insight:</strong> Continuous updates give you immediate access to your financial health.</li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            <strong>Guaranteed Compliance:</strong> Strict adherence to financial regulations, minimizing audit risk.
          </p>
        </div>
      </section>

      {/* Difference Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">The Sincere Ledger Difference</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li><strong>Elite Financial Expertise:</strong> CPAs, Certified Bookkeepers, and financial analysts with multi-industry experience.</li>
            <li><strong>Cutting-Edge Technology Platform:</strong> Cloud accounting technology with real-time financial visibility.</li>
            <li><strong>Uncompromising Data Security:</strong> Bank-level encryption and regular audits ensure your data is safe.</li>
            <li><strong>Proven Track Record:</strong> Trusted by 500+ businesses for reliable financial operations.</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">FAQs</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg bg-white shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-secondary"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <span className="ml-2 text-gray-600">{openIndex === index ? "−" : "+"}</span>
                </button>
                <div
  className={`px-6 text-gray-700 overflow-hidden transition-all duration-300 ease-out ${
    openIndex === index
      ? "max-h-40 opacity-100 pb-4"
      : "max-h-0 opacity-0 pb-0"
  }`}
>
  <div className="pt-2">{faq.answer}</div>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

    </main>
  );
}
