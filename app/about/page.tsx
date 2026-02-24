import React from 'react';
import { Info, ArrowLeft, ShieldCheck, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
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
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-100">
            <Info className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-3xl font-black text-slate-900">About Us</h1>
              <p className="text-slate-500 mt-1">The team behind DocGard AI</p>
            </div>
          </div>

          <div className="space-y-10 text-slate-600 leading-relaxed font-medium">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-500" /> Our Mission
              </h2>
              <p>
                In an era where digital manipulation is easier than ever, financial institutions, academic bodies, and businesses face an unprecedented wave of forged documents. 
                DocGard AI was built with a single mission: to democratize enterprise-grade document forensics and make digital verification accessible, instant, and highly accurate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-500" /> The Technology
              </h2>
              <p>
                We leverage mathematical Error Level Analysis (ELA) powered by a custom Python backend. By analyzing the cryptographic compression layers of PDFs and standard image files, 
                our engine detects the microscopic pixel variances that occur when a document is tampered with and resaved. What used to take forensic experts hours can now be 
                visualized in seconds via our intuitive heatmap interface.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-500" /> Jeff Enterprises
              </h2>
              <p>
                DocGard AI is a flagship product developed and maintained by <strong>Jeff Enterprises</strong>. We are a forward-thinking technology startup focused on building scalable AI solutions 
                that solve real-world security challenges. From deep-tech engineering to seamless user interfaces, we pride ourselves on building tools that users can trust.
              </p>
            </section>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <p className="text-sm text-center text-slate-500">
                For business inquiries, partnership opportunities, or technical support, please reach out to our administration team. <br/>
                <span className="font-bold text-slate-700 mt-2 block">© 2026 Jeff Enterprises. All rights reserved.</span>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}