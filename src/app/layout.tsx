import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veria Tax | Compliance Workflows for Firms",
  description: "Crypto Payroll & Tax Without the Spreadsheet Hell.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans text-slate-600 antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
