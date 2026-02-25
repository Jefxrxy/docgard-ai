import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, FileSearch, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Blog & Resources | DocGard AI",
  description: "Learn about digital forensics, Error Level Analysis (ELA), and how to protect your business from document forgery.",
};

export default function BlogIndex() {
  const articles = [
    { title: "What is Error Level Analysis (ELA) and How Does It Catch Forgeries?", link: "/blog/what-is-error-level-analysis", category: "Digital Forensics", color: "bg-blue-100 text-blue-700" },
    { title: "Top 3 Signs of a Forged Digital Invoice", link: "/blog/top-3-signs-forged-invoice", category: "Business Security", color: "bg-slate-100 text-slate-700" },
    { title: "How to Verify a PDF Bank Statement: A Forensic Guide", link: "/blog/verify-pdf-bank-statement", category: "Financial Security", color: "bg-emerald-100 text-emerald-700" },
    { title: "Visual Inspection vs. ELA: Why the Naked Eye Fails", link: "/blog/ela-vs-visual-inspection", category: "Technology", color: "bg-purple-100 text-purple-700" },
    { title: "5 Ways to Protect Your Business Documents from Tampering", link: "/blog/protect-documents-from-tampering", category: "Best Practices", color: "bg-rose-100 text-rose-700" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg"><FileSearch className="w-6 h-6 text-white" /></div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">DocGard<span className="text-blue-600">AI</span></span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4"/> Back to Scanner</Link>
          </nav>
        </div>
      </header>

      <div className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6"><BookOpen className="w-8 h-8 text-blue-500" /></div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Digital Forensics <span className="text-blue-500">Blog</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Insights, guides, and technical breakdowns on how to detect document forgery.</p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-16 flex-grow w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Link key={idx} href={article.link} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${article.color} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>{article.category}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors flex-grow">
                  {article.title}
                </h2>
                <div className="flex items-center text-blue-600 font-bold text-sm mt-auto pt-4 border-t border-slate-100">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500 mt-auto">
        <p>© 2026 DocGard. A product of Jeff Enterprises.</p>
      </footer>
    </div>
  );
}