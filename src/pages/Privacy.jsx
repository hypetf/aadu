import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-white min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-heading font-black text-5xl mb-12 italic tracking-tight">Privacy <span className="text-[#0d6efd]">Policy.</span></h1>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8 font-medium leading-relaxed">
          <section>
            <h2 className="text-zinc-900 font-bold text-2xl mb-4">1. Informative di base</h2>
            <p>La presente Privacy Policy descrive come AADU Trasporti raccoglie, utilizza e protegge i dati personali forniti dagli utenti attraverso il sito web. Ci impegniamo a garantire che la tua privacy sia protetta in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR).</p>
          </section>
          
          <section>
            <h2 className="text-zinc-900 font-bold text-2xl mb-4">2. Dati raccolti</h2>
            <p>Raccogliamo informazioni quando richiedi un preventivo o ci contatti tramite WhatsApp:</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Nome e Cognome</li>
              <li>Indirizzo Email</li>
              <li>Numero di telefono</li>
              <li>Dettagli del trasporto richiesta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-zinc-900 font-bold text-2xl mb-4">3. Finalità del trattamento</h2>
            <p>I dati forniti verranno utilizzati esclusivamente per:</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Rispondere alle richieste di preventivo</li>
              <li>Gestire la logistica dei trasporti concordati</li>
              <li>Inviare comunicazioni relative allo stato della spedizione</li>
            </ul>
          </section>

          <section>
            <h2 className="text-zinc-900 font-bold text-2xl mb-4">4. Conservazione dei dati</h2>
            <p>Conserviamo i tuoi dati personali solo per il tempo necessario a fornire i servizi richiesti o per scopi legali e fiscali obbligatori.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
