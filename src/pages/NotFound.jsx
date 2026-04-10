import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-[#fafafa]">
      <Helmet>
        <title>404 - Pagina Non Trovata | AADU Trasporti</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="text-center animate-in fade-in zoom-in duration-500">
        <h1 className="font-heading font-black text-[120px] md:text-[180px] text-zinc-100 leading-none select-none">
          404
        </h1>
        
        <div className="relative -mt-12 md:-mt-20">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-zinc-900 mb-6">
            Pagina non trovata<span className="text-[#0d6efd]">.</span>
          </h2>
          <p className="text-zinc-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Ops! Sembra che la strada che stai percorrendo non porti a nulla. 
            La pagina che cerchi non esiste o è stata spostata.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="bg-[#0d6efd] hover:bg-blue-700 text-white font-bold px-8 py-4 flex items-center transition-all group"
            >
              <Home className="w-5 h-5 mr-3" />
              TORNA IN HOME
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="border-2 border-zinc-200 hover:border-zinc-900 text-zinc-900 font-bold px-8 py-4 flex items-center transition-all"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              TORNA INDIETRO
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 text-[10px] font-black text-zinc-300 tracking-[0.4em] uppercase">
        AADU Trasporti &bull; Logistica Specialistica
      </div>
    </div>
  );
}
