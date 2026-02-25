import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, FileSearch, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Blog & Resources | DocGard AI",
  description: "Learn about digital forensics, Error Level Analysis (ELA), and how to protect your business from document forgery.",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg">
              <FileSearch className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">DocGard<span className="text-blue-600">AI</span></span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4"/> Back to Scanner
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Digital Forensics <span className="text-blue-500">Blog</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Insights, guides, and technical breakdowns on how to detect document forgery and protect your business using Error Level Analysis.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <main className="max-w-6xl mx-auto px-4 py-16 flex-grow w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Article 1 Card */}
          <Link href="/blog/what-is-error-level-analysis" className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Digital Forensics</span>
                <span className="text-slate-500 text-sm font-medium">February 2026</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                What is Error Level Analysis (ELA) and How Does It Catch Forgeries?
              </h2>
              <p className="text-slate-600 mb-6 line-clamp-3">
                A deep dive into the cryptographic mathematics used to expose modified bank statements, fake ID cards, and tampered digital invoices.
              </p>
              <div className="flex items-center text-blue-600 font-bold text-sm">
                Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Article 2 Card */}
          <Link href="/blog/top-3-signs-forged-invoice" className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Business Security</span>
                <span className="text-slate-500 text-sm font-medium">February 2026</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Top 3 Signs of a Forged Digital Invoice
              </h2>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Fake invoices cost businesses millions every year. Here is how to spot the red flags before you accidentally authorize a fraudulent payment.
              </p>
              <div className="flex items-center text-blue-600 font-bold text-sm">
                Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500 mt-auto">
        <p>© 2026 DocGard. A product of Jeff Enterprises.</p>
      </footer>
    </div>
  );
}