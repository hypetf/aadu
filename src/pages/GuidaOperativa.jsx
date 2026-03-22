import React, { useState } from 'react';
import { MessageCircle, Plus, Minus, Calculator, Truck, ShieldCheck, MapPin, CheckCircle, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqsFromTxt = [
  {
    question: "CHE TIPO DI TRASPORTI EFFETTUATE?",
    answer: "Effettuiamo trasporti dedicati per aziende e privati in tutta Italia. Trasportiamo moto, merci, pallet, oggetti delicati e consegne riservate. Ogni trasporto viene organizzato in base alle esigenze del cliente."
  },
  {
    question: "COME GARANTITE LA SICUREZZA DURANTE IL TRASPORTO DELLE MOTO?",
    answer: "Alcuni dei nostri furgoni sono attrezzati specificamente per il trasporto moto e sono attrezzati di: pareti imbottite, rampe di carico professionali e sistemi di fissaggio con cinghie specifiche per il trasporto moto. Ogni veicolo viene fissato in modo stabile per evitare movimenti durante il viaggio, garantendo un trasporto sicuro anche su lunghe distanze."
  },
  {
    question: "I VOSTRI TRASPORTI SONO ASSICURATI?",
    answer: "Sì. Tutti i trasporti sono coperti da assicurazione fino a 50.000€ per singolo oggetto, per garantire la massima tranquillità ai nostri clienti."
  },
  {
    question: "TRASPORTATE IN TUTTA ITALIA?",
    answer: "Sì, operiamo su tutto il territorio nazionale, con ritiri e consegne organizzate in base alle necessità del cliente."
  },
  {
    question: "EFFETTUATE TRASPORTI URGENTI O DEDICATI?",
    answer: "Sì. Offriamo servizi di trasporto dedicato e urgente, senza passaggi intermedi, per garantire tempi rapidi e la massima sicurezza della merce."
  },
  {
    question: "TRASPORTATE ANCHE PER PRIVATI?",
    answer: "Certamente. Lavoriamo sia con aziende che con privati, per trasporto moto, oggetti voluminosi, merci o consegne particolari."
  },
  {
    question: "COME POSSO RICHIEDERE UN PREVENTIVO?",
    answer: "Puoi richiedere un preventivo contattandoci tramite telefono, WhatsApp o tramite il modulo sul sito. Ti risponderemo nel più breve tempo possibile."
  },
  {
    question: "È POSSIBILE TRACCIARE LA SPEDIZIONE?",
    answer: "Durante il trasporto manteniamo un contatto diretto con il cliente e forniamo aggiornamenti sullo stato della consegna di continuo."
  },
  {
    question: "RITIRATE E CONSEGNATE DIRETTAMENTE A DOMICILIO?",
    answer: "Sì. Offriamo servizio porta a porta, con ritiro e consegna direttamente all’indirizzo indicato dal cliente."
  },
  {
    question: "TRASPORTATE OGGETTI DELICATI O DI VALORE?",
    answer: "Sì. Grazie alla nostra esperienza e alla copertura assicurativa fino a 50.000€, possiamo trasportare oggetti delicati o di valore con la massima attenzione."
  },
  {
    question: "COME VIENE CONTROLLATA LA MOTO PRIMA DEL TRASPORTO?",
    hasComplexAnswer: true,
    answer: (
      <div className="space-y-4">
        <p>Prima del ritiro effettuiamo sempre una verifica completa del mezzo insieme al cliente.</p>
        <p className="font-bold">Durante questa fase:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Scattiamo foto dettagliate della moto</li>
          <li>Controlliamo lo stato generale del veicolo</li>
          <li>Annotiamo eventuali graffi, segni o parti danneggiate</li>
        </ul>
        <p>Successivamente viene compilato un modulo di presa in carico, dove vengono segnati tutti i dettagli dello stato della moto. Il documento viene firmato dal cliente e dal nostro operatore, così da avere una prova chiara e trasparente della situazione al momento del ritiro.</p>
      </div>
    )
  }
];

export default function GuidaOperativa() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Helmet>
        <title>Come Funziona il Trasporto Moto | Guida AADU Trasporti</title>
        <meta name="description" content="Scopri il metodo AADU per il trasporto della tua moto: ritiro door-to-door, imballaggio protetto e transito sicuro con assicurazione inclusa." />
        <meta name="keywords" content="come spedire moto, sicurezza trasporto moto, assicurazione spedizione moto, guida logistica" />
        <link rel="canonical" href="https://aadutrasporti.com/guida" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-20">

        {/* Header matching screenshot */}
        <div className="mb-24 animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="font-heading font-black text-6xl md:text-7xl text-zinc-900 mb-8 leading-tight">Il Metodo <span className="text-[#0d6efd] italic -tracking-wide">AADU.</span></h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed font-medium">
            Cinque passaggi chiari e professionali per portare il tuo carico a destinazione senza stress e con la massima sicurezza.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-20 relative w-full mb-40">
          {/* Connecting dashed line in background */}
          <div className="hidden md:block absolute top-[110px] left-[10%] right-[10%] h-px border-dashed border-t-2 border-zinc-200 z-0"></div>

          {/* S1 */}
          <div className="relative z-10 w-full group">
            <div className="relative border-2 border-zinc-200 bg-white h-[260px] mb-8">
              <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Preventivo" />
              <div className="absolute -top-1 left-0 bg-[#0f172a] text-white w-10 h-10 flex justify-center items-center font-mono font-black text-lg">1</div>
              <div className="absolute bottom-3 right-3 bg-white border-2 border-[#0d6efd] p-3 text-[#0d6efd] shadow-lg shadow-blue-500/10 z-10">
                <Calculator className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-heading font-black text-2xl italic tracking-tight text-zinc-900 mb-4 uppercase">Richiedi Preventivo</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px] font-medium">
              Usa il nostro calcolatore o contattaci su WhatsApp. Riceverai un prezzo bloccato e trasparente in pochi minuti.
            </p>
          </div>

          {/* S2 */}
          <div className="relative z-10 w-full group">
            <div className="relative border-2 border-zinc-200 bg-white h-[260px] mb-8">
              <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ritiro" />
              <div className="absolute -top-1 left-0 bg-[#0f172a] text-white w-10 h-10 flex justify-center items-center font-mono font-black text-lg">2</div>
              <div className="absolute bottom-3 right-3 bg-white border-2 border-[#0d6efd] p-3 text-[#0d6efd] shadow-lg shadow-blue-500/10 z-10">
                <Truck className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-heading font-black text-2xl italic tracking-tight text-zinc-900 mb-4 uppercase">Ritiro Professionale</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px] font-medium">
              I nostri trasportatori specializzati ritirano il carico direttamente al tuo domicilio con attrezzatura specifica.
            </p>
          </div>

          {/* S3 */}
          <div className="relative z-10 w-full group">
            <div className="relative border-2 border-zinc-200 bg-white h-[260px] mb-8">
              {/* <img src="https://images.unsplash.com/photo-1542362567-b05e55939de3?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Transito" /> */}
              <div className="absolute -top-1 left-0 bg-[#0f172a] text-white w-10 h-10 flex justify-center items-center font-mono font-black text-lg">3</div>
              <div className="absolute bottom-3 right-3 bg-white border-2 border-[#0d6efd] p-3 text-[#0d6efd] shadow-lg shadow-blue-500/10 z-10">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-heading font-black text-2xl italic tracking-tight text-zinc-900 mb-4 uppercase">Transito Sicuro</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px] font-medium">
              Viaggiamo su rotte ottimizzate. Il tuo oggetto è monitorato e protetto da coperture assicurative All-Risk.
            </p>
          </div>

          {/* S4 */}
          <div className="relative z-10 w-full md:col-start-1 md:w-2/3 group">
            <div className="relative border-2 border-zinc-200 bg-white h-[260px] mb-8">
              {/* <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a34?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Consegna" /> */}
              <div className="absolute -top-1 left-0 bg-[#0f172a] text-white w-10 h-10 flex justify-center items-center font-mono font-black text-lg">4</div>
              <div className="absolute bottom-3 right-3 bg-white border-2 border-[#0d6efd] p-3 text-[#0d6efd] shadow-lg shadow-blue-500/10 z-10">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-heading font-black text-2xl italic tracking-tight text-zinc-900 mb-4 uppercase">Consegna Diretta</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px] font-medium">
              Portiamo tutto a destinazione, senza passaggi intermedi o trasbordi rischiosi. Massima puntualità.
            </p>
          </div>

          {/* S5 */}
          <div className="relative z-10 w-full md:col-start-2 md:col-span-1 md:-ml-12 lg:ml-0 md:w-[130%] group">
            <div className="relative border-2 border-zinc-200 bg-white h-[260px] mb-8">
              {/* <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Conferma" /> */}
              <div className="absolute -top-1 left-0 bg-[#0f172a] text-white w-10 h-10 flex justify-center items-center font-mono font-black text-lg">5</div>
              <div className="absolute bottom-3 right-3 bg-white border-2 border-[#0d6efd] p-3 text-[#0d6efd] shadow-lg shadow-blue-500/10 z-10">
                <CheckCircle className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-heading font-black text-2xl italic tracking-tight text-zinc-900 mb-4 uppercase">Conferma Ricezione</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px] font-medium">
              Ricevi la notifica di avvenuta consegna e la documentazione firmata digitale istantaneamente.
            </p>
          </div>
        </div>

        {/* Updated FAQs from faq.txt */}
        <div className="border-t border-zinc-200 pt-24 mb-32 max-w-4xl">
          <h2 className="font-heading font-black text-5xl text-zinc-900 mb-6 italic tracking-tight">Domande <span className="text-[#0d6efd]">Frequenti.</span></h2>
          <p className="text-zinc-500 text-xl mb-12 font-medium">Tutto quello che c'è da sapere sulla sicurezza, i pagamenti e la logistica dei tuoi oggetti speciali.</p>

          <div className="space-y-4">
            {faqsFromTxt.map((faq, idx) => (
              <div
                key={idx}
                className={`border-2 transition-all duration-300 overflow-hidden ${openFaq === idx ? 'border-[#0d6efd] bg-white shadow-xl shadow-blue-500/10' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}
              >
                <div
                  className="p-6 md:p-8 flex justify-between items-center cursor-pointer select-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex items-center text-sm md:text-base font-black italic tracking-wide text-zinc-800">
                    <span className="text-[#0d6efd] mr-5 not-italic font-heading text-2xl opacity-40">?</span>
                    {faq.question}
                  </div>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#0d6efd]' : 'text-zinc-300'}`}>
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>

                {openFaq === idx && (
                  <div className="px-8 md:px-14 pb-10 animate-in fade-in slide-in-from-top-2 duration-300 text-zinc-500 text-lg leading-relaxed border-t border-zinc-100 pt-6">
                    {faq.hasComplexAnswer ? faq.answer : <p>{faq.answer}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Dedicato Bottom Box */}
        <div className="border-[6px] border-[#0f172a] bg-white p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-zinc-200">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-heading font-black text-zinc-50 z-0 tracking-tighter w-full whitespace-nowrap hidden lg:block select-none pointer-events-none opacity-40">SUPPORT</div>

          <div className="relative z-10 w-full py-6">
            <div className="w-20 h-20 bg-[#0d6efd] text-white flex justify-center items-center mx-auto mb-10 shadow-xl shadow-blue-500/20">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-black text-6xl md:text-7xl text-zinc-900 italic tracking-tight mb-8">SUPPORTO DEDICATO</h2>
            <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Hai ancora dubbi o esigenze particolari? I nostri esperti sono pronti ad aiutarti in tempo reale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://wa.me/393336563426"
                className="bg-[#25D366] hover:bg-green-600 text-white font-black text-sm uppercase tracking-[0.2em] px-10 py-5 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5 mr-3" /> PARLA CON NOI SU WHATSAPP
              </a>
              <a
                href="tel:+393336563426"
                className="bg-zinc-900 hover:bg-black text-white font-bold text-sm tracking-wide px-8 py-4 flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" /> CHIAMACI ORA: +39 333 656 3426
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
