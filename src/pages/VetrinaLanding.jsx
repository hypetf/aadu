import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ShieldCheck, Check, X, Star, Bike } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import vanPng from '../assets/van.png';
import bg1 from '../assets/bg1.jpeg';
import whatsappIco from '../assets/whatsapp-ico.webp';

// Import assets
const galleryImages = Object.values(
  import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, import: 'default' })
);

const sponsorLogos = import.meta.glob('../assets/sponsors/*.{png,jpg,jpeg,svg,PNG,JPEG,SVG}', { eager: true, import: 'default' });
const sponsorsList = Object.entries(sponsorLogos).map(([path, src]) => {
  const filename = path.split('/').pop() || '';
  // Clean filename for the link: remove extension, fix 'https' prefix if needed
  const cleanLink = filename.replace(/\.(png|jpg|jpeg|webp|svg)$/i, '').replace(/^https/, 'https://');
  return {
    src,
    link: cleanLink.startsWith('http') ? cleanLink : `https://${cleanLink}`,
    name: filename
  };
});

const phoneNumber = "+39 333 656 3426";
const waNumber = "393336563426";

const testimonials = [
  {
    name: "Valentin Rosanu",
    role: "CLIENTE GOOGLE",
    text: "Moto arrivata in un giorno, perfetta e senza un graffio! Comunicazione sempre super rapida. Servizio top, sicuramente li consiglio a chiunque voglia trasportare la propria moto o qualsiasi bene. Servizio impeccabile!",
    stars: 5
  },
  {
    name: "Hype (hypetf)",
    role: "CLIENTE GOOGLE",
    text: "Esperienza molto positiva. Trasporto della moto organizzato in modo preciso e affidabile, con grande attenzione ai dettagli. Tempistiche rispettate e ottima disponibilità durante tutta la gestione. Servizio serio che consiglio senza esitazioni.",
    stars: 5
  },
  {
    name: "Aruna",
    role: "CLIENTE GOOGLE",
    text: "Servizio davvero top. Avevo bisogno di un trasporto con furgone fatto velocemente e senza stress, e questa azienda è stata super professionale dall’inizio alla fine. Puntuali, organizzati e soprattutto molto attenti nel maneggiare tutto quello che doveva essere trasportato.",
    stars: 5
  },
  {
    name: "redruM Effe",
    role: "CLIENTE GOOGLE",
    text: "cordiale e puntuale! il trasporto della moto è immacolata! 💯",
    stars: 5
  },
  {
    name: "luca fabrizio",
    role: "CLIENTE GOOGLE",
    text: "Servizio e simpatia top",
    stars: 5
  },
  {
    name: "Damiano Bizzi",
    role: "CLIENTE GOOGLE",
    text: "Servizio di trasporto impeccabile, ottima conversazione, cortesia e professionalità. Semplicemente perfetti.",
    stars: 5
  },
];

export default function VetrinaLanding() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      <Helmet>
        <title>AADU Trasporti | Trasporto Moto Specialistico e Logistica Nazionale</title>
        <meta name="description" content="AADU Trasporti è lo specialista del trasporto moto door-to-door in tutta Italia. Offriamo anche soluzioni di logistica flessibile per pallet e carichi industriali." />
        <meta name="keywords" content="trasporto moto, corriere moto, spedizione moto italia, aadu trasporti, logistica pallet, logistica industriale" />
        <meta property="og:title" content="AADU Trasporti | Trasporto Moto e Logistica" />
        <meta property="og:description" content="Servizio specialistico di trasporto moto ed eccellenza nella logistica nazionale." />
        <meta property="og:image" content={vanPng} />
        <link rel="canonical" href="https://aadutrasporti.com/" />
      </Helmet>

      {/* Hero */}
      <section className="relative w-full h-[650px] flex items-center bg-zinc-200 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={vanPng}
            alt="AADU Van per trasporto moto e merci"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-in fade-in slide-in-from-left duration-700">
            <h1 className="font-heading font-black text-5xl md:text-6xl text-[#0d6efd] leading-tight mb-6">
              Trasporti che si<br />muovono con te<span className="text-zinc-900">,</span>
            </h1>
            <p className="text-lg text-white mb-8 leading-relaxed font-medium">
              AADU Trasporti: la logistica flessibile per privati e aziende. Dalla merce ingombrante alla tua moto preferita, ce ne prendiamo cura noi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/preventivi" className="bg-[#0d6efd] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-none text-center inline-block transition-transform hover:-translate-y-1">
                Calcola Prezzo
              </Link>
              <a href={`https://wa.me/${waNumber}`} className="bg-zinc-900 hover:bg-[#25D366] text-white px-8 py-4 rounded-none text-center flex justify-center items-center transition-transform hover:-translate-y-1 group">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse"></span> Contattaci su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Row */}
      <section className="py-6 border-b border-zinc-200 bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[11px] font-black text-zinc-400 tracking-[0.2em] uppercase">
          <div className="flex items-center"><strong className="text-zinc-900 mr-2 border-l border-zinc-200 pl-3 ml-3">AADU</strong> SERVIZIO DOOR-TO-DOOR</div>
          <div className="flex items-center"><strong className="text-zinc-900 mr-2 border-l border-zinc-200 pl-3 ml-3">AADU</strong> CONTATTO DIRETTO</div>
          <div className="flex items-center"><strong className="text-zinc-900 mr-2 border-l border-zinc-200 pl-3 ml-3">AADU</strong> CURA ARTIGIANALE</div>
        </div>
      </section>

      {/* Logistica su misura */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full bg-[#fafafa]">
        <div className="mb-2 text-[#0d6efd] text-xs font-bold uppercase tracking-widest">AFFIDABILITÀ NAZIONALE</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="font-heading font-black text-5xl md:text-6xl text-zinc-900 mb-8 leading-[1.1]">Logistica su misura<br />per ogni esigenza.</h2>
            <p className="text-zinc-500 mb-12 text-lg leading-relaxed max-w-xl">
              Soluzioni di logistica flessibile per la tua azienda. Dalla gestione dei pallet ai carichi speciali, semplifichiamo ogni trasporto con un approccio diretto e trasparente.
            </p>

            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-zinc-100 p-3 rounded-sm mr-6 shrink-0 h-14 w-14 flex items-center justify-center border border-zinc-200">
                  <MapPin className="text-zinc-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg mb-1">Servizio Door-to-Door</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Ritiriamo e consegniamo direttamente al tuo indirizzo, senza stress.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-zinc-100 p-3 rounded-sm mr-6 shrink-0 h-14 w-14 flex items-center justify-center border border-zinc-200">
                  <Phone className="text-zinc-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg mb-1">Contatto Diretto</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Parla direttamente con chi gestisce il tuo trasporto, niente call center impersonali.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-zinc-100 p-3 rounded-sm mr-6 shrink-0 h-14 w-14 flex items-center justify-center border border-zinc-200">
                  <ShieldCheck className="text-zinc-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-lg mb-1">Cura Artigianale</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Trattiamo ogni carico come se fosse nostro, specialmente le vostre moto.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-16 border-2 border-zinc-100 shadow-xl shadow-zinc-200/50 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="bg-white border-2 border-zinc-100 shadow-sm w-16 h-16 flex justify-center items-center mb-8 relative z-10">
              <div className="w-6 h-6 border-2 border-[#0ea5e9] rotate-45 transform group-hover:rotate-[135deg] transition-transform duration-500"></div>
            </div>
            <h3 className="font-heading font-black text-3xl text-zinc-900 mb-6 relative z-10">Logistica e<br />Merci Generali</h3>
            <p className="text-zinc-500 mb-10 text-lg leading-relaxed relative z-10">Spedizioni sicure per pallet e carichi industriali in tutta Italia.</p>
            <ul className="space-y-4 mb-12 text-zinc-600 font-medium relative z-10">
              <li className="flex items-center"><Check className="w-5 h-5 text-[#0ea5e9] mr-3" /> Door-to-door</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-[#0ea5e9] mr-3" /> Gestione Pallet</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-[#0ea5e9] mr-3" /> Consegne programmate</li>
            </ul>
            <Link to="/preventivi" className="mt-auto bg-zinc-900 hover:bg-black text-white text-center font-bold py-5 tracking-wide flex items-center justify-center group/btn relative z-10">
              SCOPRI DI PIÙ <span className="ml-3 transform group-hover/btn:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bipartite Section with ID for navbar scroll */}
      <section id="moto" className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto border-2 border-zinc-100 w-full mb-32 bg-white shadow-2xl shadow-zinc-200/40">
        <div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r-2 border-zinc-100">
          <div className="flex items-center mb-6">
            <Bike className="w-8 h-8 text-[#dc2626] mr-4" />
            <h3 className="font-heading font-black text-4xl text-zinc-900 mb-0">Trasporto Moto Specialistico</h3>
          </div>
          <p className="text-zinc-500 mb-10 text-xl leading-relaxed">Il nostro fiore all'occhiello. Attrezzatura dedicata e massima cura per la tua passione.</p>
          <ul className="space-y-5 mb-14 text-zinc-600 font-medium">
            <li className="flex items-center"><Check className="w-6 h-6 text-red-500 mr-4" /> Ancoraggi professionali</li>
            <li className="flex items-center"><Check className="w-6 h-6 text-red-500 mr-4" /> Furgoni imbottiti</li>
            <li className="flex items-center"><Check className="w-6 h-6 text-red-500 mr-4" /> Assicurazione inclusa</li>
          </ul>
          <Link to="/preventivi" className="bg-[#dc2626] hover:bg-red-700 text-white font-bold py-5 text-center tracking-widest text-sm flex items-center justify-center group/moto">
            CALCOLA PREVENTIVO <span className="ml-3 transform group-hover/moto:translate-x-2 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="relative p-12 lg:p-24 flex flex-col justify-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bg1}
              alt="Sfondo Moto"
              className="w-full h-full object-cover blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10">
            <div className="text-red-500 text-xs font-black uppercase tracking-[0.3em] mb-6 flex items-center">
              <span className="w-3 h-3 border border-red-500 mr-4 rotate-45 inline-block"></span> PASSIONE SU DUE RUOTE
            </div>
            <h2 className="font-heading font-black text-5xl md:text-6xl mb-10 leading-tight">Un servizio<br />dedicato alla<br />tua moto.</h2>
            <p className="text-zinc-200 text-xl leading-relaxed mb-12 max-w-lg">
              Abbiamo creato il servizio che noi stessi vorremmo per le nostre moto.
              Furgoni imbottiti, rampe dedicate e sistemi di ancoraggio professionale assicurano che il tuo veicolo arrivi intatto.
            </p>
            <a href={`https://wa.me/${waNumber}`} className="font-bold flex items-center hover:text-[#25D366] transition-colors text-lg italic tracking-tight group">
              Parla con l'esperto Moto <span className="ml-4 font-sans not-italic">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20">
            <h2 className="font-heading font-black text-5xl md:text-6xl mb-6 text-zinc-900">In viaggio con noi.</h2>
            <p className="text-zinc-500 text-xl max-w-2xl leading-relaxed font-medium">Ogni trasporto è una storia di cura e professionalità. Scopri alcuni dei nostri ultimi lavori realizzati in tutta Italia.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                onClick={() => setSelectedImg(src)}
                className="aspect-square bg-zinc-100 overflow-hidden group relative cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Trasporto AADU ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 py-2 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity text-white text-[10px] font-bold text-center uppercase tracking-widest">
                  Ingrandisci
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors area */}
      <section className="py-20 border-t border-zinc-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-zinc-300 text-[10px] font-black tracking-[0.4em] uppercase mb-4">I NOSTRI PARTNER</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            {sponsorsList.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 h-12 w-auto flex items-center justify-center"
              >
                <img src={sponsor.src} alt={sponsor.name} className="max-h-full max-w-[160px] object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#fafafa] border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-[#0d6efd] text-xs font-black uppercase tracking-[0.3em] mb-6">FEEDBACK</div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-zinc-900 mb-20 italic">Cosa dicono i nostri clienti.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border-2 border-zinc-100 p-10 shadow-sm transition-transform hover:-translate-y-1 flex flex-col">
                <div className="flex text-yellow-500 mb-6 space-x-1">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-zinc-700 font-medium italic mb-10 text-sm leading-relaxed grow">"{t.text}"</p>
                <div className="flex items-center pt-6 border-t border-zinc-50">
                  <div className="w-10 h-10 bg-[#0d6efd] text-white flex justify-center items-center font-black mr-4 text-lg shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-black text-zinc-900 uppercase tracking-tight text-xs truncate">{t.name}</div>
                    <div className="text-[9px] font-black text-[#0d6efd] tracking-widest mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="https://g.page/r/CebT10pKliiSEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#0d6efd] font-black uppercase tracking-[0.2em] text-xs border-b-2 border-[#0d6efd] pb-1 hover:text-blue-700 hover:border-blue-700 transition-all group"
            >
              Scrivici una recensione
              <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 p-4 md:p-10 flex items-center justify-center animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImg}
            alt="Ingrandimento Trasporto"
            className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
          />
        </div>
      )}

    </div>
  );
}
