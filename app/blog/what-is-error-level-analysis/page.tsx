import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, FileSearch } from 'lucide-react';

export const metadata = {
  title: "What is Error Level Analysis (ELA)? | DocGard AI Blog",
  description: "Learn how Error Level Analysis (ELA) is used in digital forensics to detect forged bank statements, fake invoices, and manipulated documents.",
};

export default function BlogPost1() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center py-12 px-4">
      <main className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 text-white relative">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Scanner
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Digital Forensics</span>
            <span className="text-slate-400 text-sm font-medium">February 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 leading-tight">
            What is Error Level Analysis (ELA) and How Does It Catch Forgeries?
          </h1>
          <p className="text-slate-300 text-lg">
            A deep dive into the cryptographic mathematics used to expose modified bank statements, fake ID cards, and tampered digital invoices.
          </p>
        </div>

        {/* Article Content */}
        <div className="p-8 sm:p-12 text-slate-700 space-y-8 leading-relaxed text-lg">
          
          <section>
            <p>
              In the modern digital economy, submitting a PDF bank statement or a JPEG invoice takes seconds. Unfortunately, forging one takes just as little time. With the rise of advanced photo-editing software, traditional visual inspections are no longer enough to verify a document's authenticity. This is where <strong>Error Level Analysis (ELA)</strong> steps in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Science Behind File Compression</h2>
            <p>
              To understand ELA, you first have to understand how digital images and documents are saved. When a scanner or software creates a JPEG file, it compresses the entire image uniformly. Every pixel in that original file shares the same "compression signature" or "error level."
            </p>
            <p className="mt-4">
              However, if a fraudster opens that document in an editing program, pastes a new name, changes an account balance, and saves it again, something cryptographic happens behind the scenes. The newly added pixels undergo a <em>second</em> round of compression, while the original background undergoes a different mathematical shift.
            </p>
          </section>

          <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" /> The ELA Reveal
            </h3>
            <p className="text-blue-800 text-base">
              Error Level Analysis works by mathematically intentionally resaving the image at a known error rate, and then calculating the difference between the new file and the suspect file. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Reading an ELA Heatmap</h2>
            <p>
              When you run a file through an ELA tool, the output is not a normal image—it is a cryptographic heatmap. 
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Authentic Documents:</strong> Display uniform coloring. The compression edges look similar across the entire page, appearing as a dull, consistent texture.</li>
              <li><strong>Forged Documents:</strong> Display stark, brightly glowing patches. Because the forged text or numbers were saved at a different compression level than the rest of the file, they "pop" off the page during the analysis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Institutions Rely on ELA</h2>
            <p>
              Banks, insurance agencies, and loan officers cannot rely on the naked eye. A perfectly matched font can fool a human, but it cannot fool the underlying file mathematics. By using ELA tools, institutions can flag potentially fraudulent documents before approving payouts or verifying identities.
            </p>
          </section>

          {/* Call to Action for the App */}
          <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-center text-white border border-slate-800 shadow-2xl">
            <FileSearch className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-2xl font-black mb-2">Test Your Documents Instantly</h3>
            <p className="text-slate-400 mb-6">
              Use the DocGard AI engine to run professional-grade Error Level Analysis on your PDFs and JPEGs right in your browser.
            </p>
            <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              Open DocGard Scanner
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}