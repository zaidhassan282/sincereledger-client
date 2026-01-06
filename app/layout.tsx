import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/Topbar";

export const metadata: Metadata = {
  title: "Sincere Ledger | Professional Bookkeeping & Accounting Services",
  description:
    "Sincere Ledger provides advanced bookkeeping, accounting, tax, payroll, and CFO support services for growing businesses.",
  keywords:
    "bookkeeping services, accounting services, tax preparation, payroll services, CFO services, outsourced accounting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
