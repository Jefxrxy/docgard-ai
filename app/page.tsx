'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, FileSearch, ShieldCheck, RefreshCw, Image as ImageIcon, CheckCircle, Loader2, Download, AlertTriangle, X } from 'lucide-react';

export default function DocumentVerificationTool() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'processing' | 'results'>('idle');
  const [progress, setProgress] = useState(0);
  
  const [resultData, setResultData] = useState<{heatmap: string, score: number, mimeType: string} | null>(null);
  
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFileUpload(e.dataTransfer.files[0]);
  };

  const handleFileUpload = async (selectedFile: File) => {
    if (!selectedFile.type.includes('image') && selectedFile.type !== 'application/pdf') {
      alert("Please upload a JPEG, PNG, or PDF document for analysis.");
      return;
    }
    
    setFile(selectedFile);
    setStatus('processing');
    setProgress(15); 

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error("Backend Error");

      setProgress(75); 
      const data = await response.json();
      
      setResultData({
        heatmap: data.heatmap_base64,
        score: data.confidence_score,
        mimeType: data.mime_type
      });

      setProgress(100);
      setTimeout(() => setStatus('results'), 500);

    } catch (error) {
      console.error(error);
      alert("AI Engine Offline: Make sure to run your Python server!");
      setStatus('idle');
    }
  };

  const downloadReport = () => {
    if (!resultData?.heatmap) return;
    const link = document.createElement('a');
    link.href = resultData.heatmap;
    
    let extension = "jpg";
    if (resultData.mimeType === "application/pdf") extension = "pdf";
    else if (resultData.mimeType === "image/png") extension = "png";
    
    link.download = `DocGard_Analysis_${new Date().getTime()}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetTool = () => {
    setFile(null);
    setStatus('idle');
    setResultData(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative">
      
      {showHowItWorks && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                How DocGard Works
              </h3>
              <button onClick={() => setShowHowItWorks(false)} className="bg-slate-200 hover:bg-slate-300 p-1.5 rounded-full text-slate-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4 text-slate-600 font-medium leading-relaxed">
              <p>DocGard uses a forensic technique called <strong>Error Level Analysis (ELA)</strong> to detect digital tampering.</p>
              <p>When a document is saved as a JPEG or PDF, the entire image compresses at a uniform rate. If a forger opens that file in Photoshop, pastes new numbers over a bank statement, and saves it again, that newly added text compresses differently.</p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                <strong>The Heatmap:</strong> Our AI mathematically subtracts the compression layers. Authentic pixels remain dark, while forged pixels will "glow" brightly.
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button onClick={() => setShowHowItWorks(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all">Got it</button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center shadow-md">
              <FileSearch className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tight">DocGard<span className="text-blue-600">AI</span></span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-500">
            <button onClick={() => setShowHowItWorks(true)} className="hover:text-slate-900 transition-colors">How it Works</button>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 mt-8 hidden sm:block">
        <div className="bg-slate-200/50 border border-dashed border-slate-300 rounded-xl h-[90px] w-full flex flex-col items-center justify-center text-slate-400">
          <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Advertisement</span>
          <span className="text-xs">Leaderboard Slot (728 x 90)</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-black text-slate-900 mb-3">Detect Fake Documents</h1>
          <p className="text-slate-500 mb-6">Instantly run Error Level Analysis (ELA) to catch modified bank statements and forged invoices.</p>
          
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">
            
            {status === 'idle' && (
              <div onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()} className="p-16 sm:p-20 flex flex-col items-center justify-center cursor-pointer group hover:bg-slate-50 transition-colors min-h-[500px]">
                <input type="file" ref={fileInputRef} onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])} className="hidden" accept="image/jpeg, image/png, application/pdf" />
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><UploadCloud className="w-10 h-10 text-blue-600" /></div>
                <h3 className="text-xl font-bold text-slate-900">Upload Document for ELA</h3>
                <p className="text-sm text-slate-500 mt-2 text-center max-w-sm">Drag and drop your JPEG, PNG, or PDF file here. We will mathematically scan for pixel inconsistencies.</p>
              </div>
            )}

            {status === 'processing' && (
              <div className="p-20 flex flex-col items-center justify-center text-center min-h-[500px]">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-6" />
                <h3 className="text-xl font-bold text-slate-900">Analyzing Cryptographic Layers...</h3>
                <p className="text-slate-500 mt-2">Checking compression signatures against the original file structure.</p>
                <div className="w-full max-w-xs bg-slate-100 h-2 rounded-full mt-8 overflow-hidden">
                  <div className="bg-blue-600 h-full transition-all duration-500" style={{width: `${progress}%`}}></div>
                </div>
              </div>
            )}

            {status === 'results' && resultData && (
              <div className="p-6 sm:p-8 animate-in fade-in zoom-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1"><ImageIcon className="w-4 h-4"/> Source Document</p>
                    <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center h-64">
                      {file?.type === 'application/pdf' ? (
                        <iframe src={URL.createObjectURL(file)} className="w-full h-full border-0" title="PDF Preview" />
                      ) : (
                        <img src={file ? URL.createObjectURL(file) : ""} className="max-w-full max-h-full object-contain p-2" alt="Original" />
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1"><AlertTriangle className="w-4 h-4 text-blue-500"/> ELA Heatmap (AI Generated)</p>
                    <div className="rounded-xl overflow-hidden border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-black flex items-center justify-center h-64 relative">
                      {/* FIX: Render an iframe if the result is a PDF, otherwise an img */}
                      {resultData.mimeType === 'application/pdf' ? (
                        <iframe src={resultData.heatmap} className="w-full h-full border-0 bg-white" title="PDF Heatmap Result" />
                      ) : (
                        <img src={resultData.heatmap} className="max-w-full max-h-full object-contain p-2" alt="Heatmap" />
                      )}
                    </div>
                  </div>
                </div>

                <div className={`border rounded-2xl p-6 mb-8 flex items-start gap-4 transition-colors ${resultData.score > 25 ? 'bg-rose-50 border-rose-100' : 'bg-emerald-50 border-emerald-100'}`}>
                  {resultData.score > 25 ? <AlertTriangle className="w-8 h-8 text-rose-600 shrink-0 mt-1" /> : <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />}
                  <div>
                    <h4 className={`font-bold text-lg mb-1 flex items-center gap-3 ${resultData.score > 25 ? 'text-rose-900' : 'text-emerald-900'}`}>
                      {resultData.score > 25 ? 'Forgery Probability' : 'Document Appears Authentic'} 
                      <span className={`px-2.5 py-0.5 rounded-md text-sm font-black shadow-sm bg-white border ${resultData.score > 25 ? 'border-rose-200 text-rose-600' : 'border-emerald-200 text-emerald-600'}`}>
                        {resultData.score}% Score
                      </span>
                    </h4>
                    <p className={`text-sm font-medium leading-relaxed ${resultData.score > 25 ? 'text-rose-800' : 'text-emerald-800'}`}>
                      {resultData.score > 25 ? "High pixel variance detected. The glowing areas represent text that does not match the base error level." : "Compression signatures are uniform. No obvious signs of digital manipulation were detected."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={downloadReport} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]">
                    <Download className="w-5 h-5" /> Download Report {resultData.mimeType === 'application/pdf' ? '(PDF)' : '(Image)'}
                  </button>
                  <button onClick={resetTool} className="sm:w-auto px-8 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                    <RefreshCw className="w-5 h-5" /> Scan Another
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="bg-slate-200/50 border border-dashed border-slate-300 rounded-xl h-[120px] w-full flex flex-col items-center justify-center text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Sponsored Content</span>
                    <span className="text-xs">In-Article Ad Slot</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="w-full lg:w-80 space-y-6 shrink-0">
          <div className="bg-slate-200/50 border border-dashed border-slate-300 rounded-2xl h-[250px] flex flex-col items-center justify-center text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Advertisement</span>
            <span className="text-xs">Sidebar Rectangle (300 x 250)</span>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /> Professional Tool</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">DocGard relies on cryptographic Error Level Analysis to detect pixel resaving inconsistencies—standard practice in digital forensics.</p>
          </div>
          <div className="bg-slate-200/50 border border-dashed border-slate-300 rounded-2xl h-[400px] hidden lg:flex flex-col items-center justify-center text-slate-400 sticky top-24">
            <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Advertisement</span>
            <span className="text-xs">Sticky Sidebar Slot</span>
          </div>
        </aside>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© 2026 DocGard. A product of Jeff Enterprises.</p>
      </footer>
    </div>
  );
}