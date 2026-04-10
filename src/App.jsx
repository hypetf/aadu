import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Calculator, ChevronRight } from 'lucide-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import logoPng from './assets/logo.png';

// Import Screens
import VetrinaLanding from './pages/VetrinaLanding.jsx';
import Calcolatore from './pages/Calcolatore.jsx';
import GuidaOperativa from './pages/GuidaOperativa.jsx';
import Business from './pages/Business.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';

// Scroll Handler
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppShell({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isFabExpanded, setIsFabExpanded] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = "+393336563426";
  const displayPhone = "+39 333 656 3426";

  // Hide FAB on the calculator page itself
  const showFab = !location.pathname.includes('/preventivi');

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-zinc-900">
      <header className="fixed top-0 w-full z-50 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-zinc-900">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center shrink-0 group">
              <img src={logoPng} alt="AADU Logo" className="h-10 w-auto mr-3 transition-transform group-hover:scale-105" />
              <div className="flex items-baseline">
                <span className="font-heading font-black text-2xl tracking-tighter text-[#0f172a] leading-none">AADU</span>
                <span className="text-zinc-500 font-medium tracking-normal text-lg ml-1 leading-none uppercase">TRASPORTI</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8 text-zinc-900">
              <Link to="/" className="font-medium text-sm hover:text-[#0d6efd] transition-colors">Home</Link>
              <Link to="/#moto" className="font-medium text-sm hover:text-[#0d6efd] transition-colors">Trasporto Moto</Link>
              <Link to="/preventivi" className="font-medium text-sm hover:text-[#0d6efd] transition-colors">Quanto costa?</Link>
              <Link to="/guida" className="font-medium text-sm hover:text-[#0d6efd] transition-colors">Come funziona</Link>
              <Link to="/business" className="ml-4 border-2 border-[#0d6efd] bg-white text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white font-bold text-[13px] px-6 py-2.5 rounded-none transition-all">Sei un Business?</Link>
              <Link
                to="/preventivi"
                className="ml-4 bg-[#0d6efd] hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-none transition-colors"
              >
                Richiedi Preventivo
              </Link>
            </nav>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <X className="w-6 h-6 text-zinc-900" /> : <Menu className="w-6 h-6 text-zinc-900" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200">
            <div className="px-4 py-4 space-y-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium text-zinc-600">Home</Link>
              <Link to="/#moto" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium text-zinc-600">Trasporto Moto</Link>
              <Link to="/preventivi" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium text-zinc-600">Quanto costa?</Link>
              <Link to="/guida" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium text-zinc-600">Come funziona</Link>
              <Link to="/business" onClick={() => setIsMobileMenuOpen(false)} className="block mx-3 my-2 border-2 border-[#0d6efd] text-[#0d6efd] font-bold text-center py-3">Sei un Business?</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20 bg-[#fafafa]">
        {children}
      </main>

      <footer className="bg-[#fafafa] border-t border-zinc-200 py-16 text-zinc-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center mb-6 group">
                <img src={logoPng} alt="AADU Logo" className="h-8 w-auto mr-2 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                <div className="flex items-baseline">
                  <span className="font-heading font-black text-xl tracking-tighter text-[#0f172a] leading-none">AADU</span>
                  <span className="text-zinc-800 font-medium tracking-normal ml-1 leading-none">Trasporti</span>
                </div>
              </Link>
              <p className="max-w-sm text-sm text-zinc-500 leading-relaxed">
                Soluzioni di trasporto flessibili e professionali in tutta Italia. Specialisti nel trasporto moto door-to-door.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-4 uppercase tracking-widest text-[10px]">Servizi</h4>
              <ul className="space-y-3">
                <li><Link to="/#moto" className="hover:text-zinc-900">Trasporto Moto</Link></li>
                <li><Link to="/" className="hover:text-zinc-900">Spedizioni Nazionali</Link></li>
                <li><Link to="/business" className="hover:text-zinc-900">Soluzioni Business</Link></li>
                <li><Link to="/guida" className="hover:text-zinc-900">Come Funziona</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-4 uppercase tracking-widest text-[10px]">Contatti</h4>
              <ul className="space-y-3">
                <li>Email: aadu.trasporti@gmail.com</li>
                <li>Tel: <a href={`tel:${phoneNumber}`} className="hover:text-zinc-900">{displayPhone}</a></li>
                <li>WhatsApp: <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} className="hover:text-zinc-900">{displayPhone}</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-[11px] text-zinc-400 font-bold uppercase tracking-widest gap-4">
            <p>© 2026 AADU Trasporti.</p>
            <div className="flex space-x-8">
              <Link to="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-zinc-900 transition-colors">Termini di Servizio</Link>
            </div>
            <p>P.IVA 05082640235</p>
          </div>
        </div>
      </footer>
      {/* Mobile FAB */}
      {showFab && (
        <div className="md:hidden fixed bottom-6 right-6 z-[60] flex flex-col items-end">
          <button
            onClick={() => {
              if (isFabExpanded) {
                navigate('/preventivi');
                setIsFabExpanded(false);
              } else {
                setIsFabExpanded(true);
              }
            }}
            onBlur={() => setTimeout(() => setIsFabExpanded(false), 200)}
            className={`bg-[#0d6efd] text-white flex items-center shadow-2xl transition-all duration-300 overflow-hidden ${isFabExpanded ? 'px-6 py-4 h-14' : 'p-4 w-14 h-14 justify-center'}`}
          >
            {isFabExpanded && (
              <span className="mr-3 whitespace-nowrap animate-in fade-in slide-in-from-right-4 duration-500 font-bold text-sm">
                Richiedi Preventivo
              </span>
            )}
            <Calculator className={`w-6 h-6 shrink-0 transition-transform duration-500 ${isFabExpanded ? 'rotate-0' : 'rotate-12'}`} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollHandler />
        <AppShell>
          <Routes>
            <Route path="/" element={<VetrinaLanding />} />
            <Route path="/preventivi" element={<Calcolatore />} />
            <Route path="/guida" element={<GuidaOperativa />} />
            <Route path="/business" element={<Business />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </AppShell>
      </Router>
    </HelmetProvider>
  );
}
