import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-3xl font-black text-slate-900">Privacy Policy</h1>
              <p className="text-slate-500 mt-1">Last Updated: February 2026</p>
            </div>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed font-medium">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p>Welcome to DocGard AI, a forensic analysis tool operated by Jeff Enterprises. We respect your privacy and are committed to protecting your digital data. This policy explains how we handle the documents you upload to our service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Data Collection and Processing</h2>
              <p>When you use our Error Level Analysis (ELA) tool, you upload digital files (JPEG, PNG, or PDF). <strong>We do not permanently store these files.</strong> The documents are securely transmitted to our processing servers, analyzed mathematically in temporary memory (RAM), and instantly discarded once the heatmap is generated.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Third-Party Services</h2>
              <p>We use third-party services like Google Analytics to monitor website traffic and performance. Furthermore, we may use Google AdSense to serve advertisements. Google uses cookies to serve ads based on your prior visits to our website or other websites.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Security</h2>
              <p>We implement industry-standard security measures to ensure your connection to our site is encrypted via HTTPS. Because we do not store your documents, there is no risk of your sensitive financial or academic files being leaked from our databases.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Contact Us</h2>
              <p>If you have any questions regarding this Privacy Policy or how your data is handled, please contact the administrative team at Jeff Enterprises via our official communication channels.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}