import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, FileSearch, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: "Top 3 Signs of a Forged Digital Invoice | DocGard AI Blog",
  description: "Learn how to spot a fake digital invoice before paying it. Discover the visual and cryptographic red flags of document tampering.",
};

export default function BlogPost2() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center py-12 px-4">
      <main className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 text-white relative">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Scanner
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Business Security</span>
            <span className="text-slate-400 text-sm font-medium">February 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 leading-tight">
            Top 3 Signs of a Forged Digital Invoice
          </h1>
          <p className="text-slate-300 text-lg">
            Fake invoices cost businesses millions every year. Here is how to spot the red flags before you accidentally authorize a fraudulent payment.
          </p>
        </div>

        {/* Article Content */}
        <div className="p-8 sm:p-12 text-slate-700 space-y-8 leading-relaxed text-lg">
          
          <section>
            <p>
              Invoice fraud is one of the fastest-growing cybercrimes in the world. Fraudsters intercept legitimate business emails, download the attached PDF invoice, alter the bank account details, and send it to the accounts payable department. To the naked eye, the document looks perfect. But underneath the surface, there are always clues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">1</span> 
              Inconsistent Typography and Alignment
            </h2>
            <p>
              When a scammer edits a PDF or JPEG, they often use a software tool like Photoshop or a free online PDF editor. While they might find a font that looks "close enough" to the original, it is rarely an exact match. 
            </p>
            <p className="mt-4">
              Look closely at the account number or the total amount due. Is the text slightly blurrier than the company logo? Is the spacing between the numbers slightly off-center compared to the rest of the document? These micro-inconsistencies are major red flags.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">2</span> 
              Missing or Altered Metadata
            </h2>
            <p>
              Every digital file carries hidden data known as "metadata." This includes information about when the file was created, the software used to make it, and the author's name. 
            </p>
            <p className="mt-4">
              If an invoice claims to be from a major vendor's automated billing system, but the metadata shows the file was last saved using "Adobe Photoshop CS6" just ten minutes before you received it, you are likely dealing with a forged document.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">3</span> 
              Hidden Compression Artifacts
            </h2>
            <p>
              This is the hardest sign to spot visually, but the easiest to catch with the right tools. When text is pasted over an existing JPEG or PDF and resaved, it creates "compression artifacts." The newly saved area compresses differently than the rest of the document.
            </p>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl mt-6">
              <h3 className="text-xl font-bold text-rose-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> The Solution: Error Level Analysis
              </h3>
              <p className="text-rose-800 text-base">
                You cannot see these compression differences with the naked eye. You need an Error Level Analysis (ELA) tool to mathematically strip away the file layers. If the bank account number lights up like a neon sign on an ELA heatmap, it has been altered.
              </p>
            </div>
          </section>

          {/* Call to Action for the App */}
          <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-center text-white border border-slate-800 shadow-2xl">
            <FileSearch className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-2xl font-black mb-2">Verify Your Invoices Free</h3>
            <p className="text-slate-400 mb-6">
              Don't guess. Upload your suspicious invoices to DocGard AI and run a forensic ELA scan in under 60 seconds.
            </p>
            <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              Scan Document Now
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}