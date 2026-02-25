import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // 🚀 Imports the Next.js optimized script loader
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocGard AI | Document Verification & Forensics",
  description: "Instantly run Error Level Analysis (ELA) to catch modified bank statements and forged invoices. A forensic tool by Jeff Enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 🚀 YOUR GOOGLE ADSENSE SCRIPT */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2894657379217217"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}