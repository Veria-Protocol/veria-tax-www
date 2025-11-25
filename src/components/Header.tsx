import Link from 'next/link';

export function Header() {
  return (
    <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
                <img src="/logo.svg" className="h-9 w-9" alt="Veria Tax Logo" />
                <span className="text-brand font-bold text-xl tracking-tight">Veria <span className="text-slate-400 font-normal">Tax</span></span>
            </Link>
            <div className="flex items-center gap-6">
                <a href="https://protocol.veria.cc" className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand transition group">
                    Veria Protocol <span className="text-slate-400 group-hover:text-brand">↗</span>
                </a>
                <div className="hidden md:block h-4 w-px bg-slate-200"></div>
                <a href="https://veria-excel-prod-190356591245.us-central1.run.app/analyze/spreadsheet" className="bg-accent hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-sm">Launch Simulator</a>
            </div>
        </div>
    </nav>
  );
}
