export default function Home() {
  return (
    <>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-accent">
                    New: Washington State ESD Automation
                </div>
                <h1 className="text-5xl font-bold text-brand tracking-tight leading-[1.1]">
                    Enterprise-Grade Crypto Tax & Compliance <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Built for Financial Rigor and Regulatory Assurance.</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    The first compliance platform for accountants with crypto-native clients. Automate spot-rate calculations, ESD filings, and DAC8 reporting in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="https://veria-excel-prod-190356591245.us-central1.run.app/analyze/spreadsheet" className="px-8 py-3.5 bg-accent hover:bg-blue-700 text-white rounded-lg font-bold transition shadow-lg shadow-blue-200 text-center">Try Interactive Demo</a>
                    <a href="mailto:info@veria.cc" className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 rounded-lg font-medium border border-slate-200 transition flex items-center justify-center gap-2">Join Waitlist</a>
                </div>
                <div className="pt-8 flex items-center gap-4 text-sm text-slate-400">
                    <span>Trusted by teams at:</span>
                    <span className="font-semibold text-slate-600">Pilot</span> •
                    <span className="font-semibold text-slate-600">Bitwave</span> •
                    <span className="font-semibold text-slate-600">TaxBit</span>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-white rounded-3xl -z-10"></div>
                <img src="/dashboard_preview.svg" className="rounded-xl shadow-2xl border border-slate-200 w-full" alt="Veria Tax Dashboard" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 w-64 animate-bounce" style={{animationDuration: "3s"}}>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div><div className="text-xs text-slate-500">WA ESD Filing</div><div className="text-sm font-bold text-brand">Ready to Submit</div></div>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-green-500 h-full w-full"></div></div>
                </div>
            </div>
        </div>
      </main>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand mb-2">Automated Spot Rates</h3>
                    <p className="text-sm text-slate-500">We pull the exact fiat value at the moment of transaction (ETH/USD) for 100% accurate payroll tax reporting.</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand mb-2">State-Ready Exports</h3>
                    <p className="text-sm text-slate-500">Generate ESD, 1099, and W-2 forms formatted exactly for state web portals. No more manual data entry.</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand mb-2">Audit-Proof History</h3>
                    <p className="text-sm text-slate-500">Every transaction is cryptographically linked to its source. Pass audits with a single "Export Evidence" click.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
