import React from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export default function ArticleThree() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/blog" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-xl font-black text-slate-900 tracking-tight">DocGard<span className="text-blue-600">AI</span></span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 mt-12">
        <article className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
              <span>Engineering</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">Building a Forensic AI Engine: Handling High-Fidelity Image Processing in Python</h1>
            
            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium pb-8 border-b border-slate-100 mb-8">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /> Jeff Enterprises Engineering</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> February 2026</div>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed font-medium text-lg">
              <p>Building a robust AI tool requires more than just a clever algorithm; it requires an architecture capable of handling heavy computational loads without sacrificing user experience. When developing DocGard AI, our engineering team had to architect a system that could process high-fidelity PDFs and JPEGs in real-time.</p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Decoupled Architecture</h2>
              <p>We opted for a strictly decoupled architecture. The frontend is built with React and Next.js, hosted globally on Vercel's Edge Network for sub-second load times. However, Next.js is not optimized for heavy mathematical image processing. Therefore, the core Error Level Analysis (ELA) logic was abstracted into an independent Python backend.</p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Python, FastAPI, and Pillow</h2>
              <p>The backend API is powered by FastAPI, chosen for its asynchronous capabilities and speed. When a user uploads a document, the API utilizes the <code>PyMuPDF</code> library to securely extract raw image data from PDFs without altering the underlying cryptographic signatures. The <code>Pillow</code> library then handles the pixel-by-pixel compression rate subtraction necessary for the ELA heatmap generation.</p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Stateless Cloud Deployment</h2>
              <p>To ensure scalability, the Python engine operates as a stateless service deployed on Render. Because the application does not store files locally or rely on a persistent database, it can instantly scale up during traffic spikes and safely wipe temporary server memory (RAM) after every scan, guaranteeing strict data privacy for our users.</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}