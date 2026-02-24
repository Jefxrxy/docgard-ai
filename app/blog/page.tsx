import React from 'react';
import { BookOpen, ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-xl font-black text-slate-900 tracking-tight">DocGard<span className="text-blue-600">AI</span></span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-12">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-10 h-10 text-blue-600" />
          <div>
            <h1 className="text-3xl font-black text-slate-900">DocGard Engineering Blog</h1>
            <p className="text-slate-500 mt-1">Insights on document forensics, AI, and digital security.</p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Article 1 */}
          <Link href="/blog/ela-explained" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                <span>Core Tech</span>
                <span>•</span>
                <span>5 Min Read</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Demystifying Error Level Analysis (ELA): How Cryptography Catches Digital Forgery</h2>
              <p className="text-slate-500 mt-2 font-medium line-clamp-2">Discover the mathematics behind JPEG compression and how our Python engine detects microscopic pixel variances in tampered documents.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-full group-hover:bg-blue-50 transition-colors shrink-0">
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600" />
            </div>
          </Link>

          {/* Article 2 */}
          <Link href="/blog/fake-invoices" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                <span>Business & Security</span>
                <span>•</span>
                <span>4 Min Read</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">The Rise of Fake Invoices: Why Visual Inspection is No Longer Enough</h2>
              <p className="text-slate-500 mt-2 font-medium line-clamp-2">How MSMEs are losing money to synthetic document fraud, and why automated mathematical verification is the only scalable defense.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-full group-hover:bg-emerald-50 transition-colors shrink-0">
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-emerald-600" />
            </div>
          </Link>

          {/* Article 3 */}
          <Link href="/blog/building-forensic-engine" className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">
                <span>Engineering</span>
                <span>•</span>
                <span>6 Min Read</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Building a Forensic AI Engine: High-Fidelity Image Processing in Python</h2>
              <p className="text-slate-500 mt-2 font-medium line-clamp-2">A deep dive into our decoupled architecture, stateless cloud deployment on Render, and utilizing FastAPI and Pillow for cryptographic imaging.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-full group-hover:bg-purple-50 transition-colors shrink-0">
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-purple-600" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}