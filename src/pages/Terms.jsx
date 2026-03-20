import React from 'react';

export default function Terms() {
  return (
    <div className="bg-white min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-heading font-black text-5xl mb-12 italic tracking-tight text-zinc-900 border-b-2 border-zinc-900 pb-4 inline-block">Termini di <span className="text-[#0d6efd]">Servizio.</span></h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-12 font-medium leading-relaxed mt-12 bg-[#fafafa] p-10 md:p-20 border-2 border-zinc-100">
          <section>
            <h2 className="text-zinc-900 font-bold text-3xl mb-6">1. Ambito di Applicazione</h2>
            <p className="text-lg">I presenti Termini di Servizio disciplinano il rapporto tra AADU Trasporti e i propri committenti per i servizi di trasporto nazionale di motocicli, merci e spedizioni dedicate. Effettuando una richiesta di preventivo o confermando un incarico, il cliente accetta integralmente le presenti condizioni.</p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-bold text-3xl mb-6">2. Preventivi e Conferme</h2>
            <p className="text-lg">I preventivi forniti tramite il sito o WhatsApp sono validi per 15 giorni lavorativi. Il contratto si ritiene concluso al momento della conferma scritta e della disponibilità del ritiro secondo quanto concordato.</p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-bold text-3xl mb-6">3. Responsabilità del Carico</h2>
            <p className="text-lg">Ogni trasporto è coperto da assicurazione secondo le normative vigenti. In caso di trasporto specialistico moto, AADU si impegna alla massima cura del veicolo dal ritiro alla consegna. Il cliente è tenuto a segnalare eventuali danni pre-esistenti in fase di ritiro.</p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-bold text-3xl mb-6">4. Tempi di Consegna</h2>
            <p className="text-lg">I tempi di consegna sono forniti a titolo indicativo. Eventuali ritardi dovuti a cause di forza maggiore (meteo, scioperi, restrizioni stradali) non potranno essere imputati al vettore.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
