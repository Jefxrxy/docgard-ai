import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// This loads the standard, clean font for your app
const inter = Inter({ subsets: ["latin"] });

// 🚀 YOUR CUSTOM METADATA & FAVICON
export const metadata: Metadata = {
  title: "DocGard AI | Document Verification & Forensics",
  description: "Instantly run Error Level Analysis (ELA) to catch modified bank statements and forged invoices. A forensic tool by Jeff Enterprises.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}