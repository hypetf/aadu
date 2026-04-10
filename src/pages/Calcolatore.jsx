import React, { useState } from 'react';
import { Bike, Box, Archive, Info, MapPin, Calendar, ChevronRight, ArrowLeft, MessageCircle, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import whatsappIco from '../assets/whatsapp-ico.webp';

const waNumber = "393336563426";
const categoryLabels = {
  moto: 'Motocicletta / Scooter',
  pallet: 'Merci su Pallet',
  ingombro: 'Oggetti Ingombranti',
  altro: 'Altro (Carico Speciale)'
};

const italianCities = [
  "Agrigento", "Alessandria", "Ancona", "Aosta", "Arezzo", "Ascoli Piceno", "Asti", "Avellino", "Bari", "Barletta-Andria-Trani", "Belluno", "Benevento", "Bergamo", "Biella", "Bologna", "Bolzano", "Brescia", "Brindisi", "Cagliari", "Caltanissetta", "Campobasso", "Caserta", "Catania", "Catanzaro", "Chieti", "Como", "Cosenza", "Cremona", "Crotone", "Cuneo", "Enna", "Fermo", "Ferrara", "Firenze", "Foggia", "Forlì-Cesena", "Frosinone", "Genova", "Gorizia", "Grosseto", "Imperia", "Isernia", "L'Aquila", "La Spezia", "Latina", "Lecce", "Lecco", "Livorno", "Lodi", "Lucca", "Macerata", "Mantova", "Massa-Carrara", "Matera", "Messina", "Milano", "Modena", "Monza e della Brianza", "Napoli", "Novara", "Nuoro", "Oristano", "Padova", "Palermo", "Parma", "Pavia", "Perugia", "Pesaro e Urbino", "Pescara", "Piacenza", "Pisa", "Pistoia", "Pordenone", "Potenza", "Prato", "Ragusa", "Ravenna", "Reggio Calabria", "Reggio Emilia", "Rieti", "Rimini", "Roma", "Rovigo", "Salerno", "Sassari", "Savona", "Siena", "Siracusa", "Sondrio", "Sud Sardegna", "Taranto", "Teramo", "Terni", "Torino", "Trapani", "Trento", "Treviso", "Trieste", "Udine", "Varese", "Venezia", "Verbano-Cusio-Ossola", "Vercelli", "Verona", "Vibo Valentia", "Vicenza", "Viterbo"
];

export default function Calcolatore() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: 'moto',
    pickup: '',
    delivery: '',
    model: '',
    date: '',
    name: '',
    email: '',
    prefix: '+39',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleWhatsApp = () => {
    const message = `Ciao AADU! Sono ${formData.name}.\n\n` +
      `Vorrei richiedere un preventivo per il trasporto di: *${categoryLabels[formData.type]}*${formData.model ? ` (${formData.model})` : ''}.\n\n` +
      `*Percorso:* Da ${formData.pickup} a ${formData.delivery}\n` +
      `*Data desiderata:* ${formData.date}\n\n` +
      `Lascio i miei contatti per essere ricontattato:\n` +
      `Email: ${formData.email}\n` +
      `Tel: ${formData.prefix} ${formData.phone}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center pt-16 pb-20">
      <Helmet>
        <title>Calcola Preventivo Trasporto Moto | AADU Trasporti</title>
        <meta name="description" content="Ricevi un preventivo immediato per il trasporto della tua moto, di merci su pallet o di oggetti ingombranti in tutta Italia. Servizio rapido e sicuro su WhatsApp." />
        <meta name="keywords" content="preventivo trasporto moto, costo spedizione moto, preventivo trasporto pallet, calcolo costi logistica" />
        <link rel="canonical" href="https://aadutrasporti.com/preventivi" />
      </Helmet>

      {/* Progress Bar - Based on screenshot */}
      <div className="w-full max-w-4xl mx-auto mt-10 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-[11px] font-black tracking-widest uppercase">
            <div className={`flex items-center ${step === 1 ? 'text-zinc-900 border-b-2 border-[#0d6efd] pb-1' : 'text-zinc-300'}`}>
              <span className={`w-6 h-6 flex items-center justify-center mr-2 text-[10px] ${step === 1 ? 'bg-[#0d6efd] text-white' : 'border-2 border-zinc-200'}`}>1</span>
              TYPOLOGIA
            </div>
            <div className="h-px w-8 bg-zinc-200 hidden sm:block"></div>
            <div className={`flex items-center ${step === 2 ? 'text-zinc-900 border-b-2 border-[#0d6efd] pb-1' : 'text-zinc-300'}`}>
              <span className={`w-6 h-6 flex items-center justify-center mr-2 text-[10px] ${step === 2 ? 'bg-[#0d6efd] text-white' : 'border-2 border-zinc-200'}`}>2</span>
              ITINERARIO
            </div>
            <div className="h-px w-8 bg-zinc-200 hidden sm:block"></div>
            <div className={`flex items-center ${step === 3 ? 'text-zinc-900 border-b-2 border-[#0d6efd] pb-1' : 'text-zinc-300'}`}>
              <span className={`w-6 h-6 flex items-center justify-center mr-2 text-[10px] ${step === 3 ? 'bg-[#0d6efd] text-white' : 'border-2 border-zinc-200'}`}>3</span>
              CONTATTO
            </div>
          </div>

          {step > 1 && (
            <button
              onClick={prevStep}
              className="text-[11px] font-black text-zinc-400 uppercase tracking-widest hover:text-zinc-900 flex items-center"
            >
              INDIETRO
            </button>
          )}
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto mt-16 px-4">

        {/* STEP 1: TYPOLOGIA */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-heading font-black text-6xl text-zinc-900 mb-2">Cosa dobbiamo</h1>
            <h1 className="font-heading font-black text-6xl text-[#0d6efd] italic -tracking-wide mb-8">trasportare?</h1>
            <p className="text-zinc-400 text-xl font-medium mb-12">Scegli la categoria per un calcolo più preciso del tuo preventivo.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {['moto', 'pallet', 'ingombro', 'altro'].map((cat) => (
                <div
                  key={cat}
                  onClick={() => setFormData({ ...formData, type: cat })}
                  className={`cursor-pointer p-8 border-2 transition-all relative ${formData.type === cat ? 'border-[#0d6efd] bg-white shadow-xl shadow-blue-500/5' : 'border-zinc-100 bg-white hover:border-zinc-200'}`}
                >
                  {formData.type === cat && <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-white border-2 border-[#0d6efd]"></div>}
                  <div className={`w-10 h-10 mb-8 ${formData.type === cat ? 'text-[#0d6efd]' : 'text-zinc-300'}`}>
                    {cat === 'moto' && <Bike className="w-full h-full" />}
                    {cat === 'pallet' && <Box className="w-full h-full" />}
                    {cat === 'ingombro' && <Archive className="w-full h-full" />}
                    {cat === 'altro' && <div className="w-full h-full border-2 border-current flex items-center justify-center rounded-sm font-black text-lg">?</div>}
                  </div>
                  <h4 className={`font-black uppercase tracking-tight text-sm mb-3 ${formData.type === cat ? 'text-zinc-900' : 'text-zinc-400'}`}>
                    {categoryLabels[cat]}
                  </h4>
                  <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest leading-relaxed">
                    {cat === 'moto' && "Fornisci marca e modello per un'assicurazione precisa."}
                    {cat === 'pallet' && "Standard EPAL o fuori misura commerciale."}
                    {cat === 'ingombro' && "Ideale per divani, armadi o grandi scrivanie."}
                    {cat === 'altro' && "Specifica nelle note il tipo di oggetto speciale."}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 border-t border-zinc-100 pt-10">
              <div className="bg-[#fafafa] border border-zinc-100 p-6 flex items-start text-xs font-medium text-zinc-500 max-w-2xl border-l-4 border-l-[#0d6efd]">
                <Info className="w-5 h-5 text-[#0d6efd] shrink-0 mr-4" />
                <p><strong>Non trovi la tua categoria?</strong> Seleziona "Altro" e descrivi il tuo oggetto nel passaggio successivo. I nostri operatori valuteranno la soluzione migliore per te.</p>
              </div>
              <button
                onClick={nextStep}
                className="ml-auto bg-[#0d6efd] hover:bg-blue-700 text-white font-black px-12 py-5 flex items-center tracking-widest text-sm transition-all"
              >
                AVANTI <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: ITINERARIO - Based on Screenshot 1 */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h1 className="font-heading font-black text-6xl text-zinc-900 mb-2">Dettagli del</h1>
            <h1 className="font-heading font-black text-6xl text-[#0d6efd] italic -tracking-wide mb-8">viaggio.</h1>
            <p className="text-zinc-400 text-xl font-medium mb-12">
              Abbiamo bisogno di sapere dove ritirare e consegnare il tuo <span className="text-zinc-900 font-bold">{categoryLabels[formData.type]}</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Ritiro da</label>
                  <div className="relative border-b-2 border-zinc-100 focus-within:border-[#0d6efd] bg-white p-2">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0d6efd]" />
                    <input
                      name="pickup"
                      list="cities"
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="Città o CAP di ritiro..."
                      className="w-full p-4 pl-12 outline-none font-bold text-zinc-800 placeholder:text-zinc-300"
                    />
                    <datalist id="cities">
                      {italianCities.map(city => <option key={city} value={city} />)}
                    </datalist>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Data desiderata</label>
                  <div className="relative border-b-2 border-zinc-100 focus-within:border-[#0d6efd] bg-white p-2">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                    <input
                      type="date"
                      name="date"
                      min={getMinDate()}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-4 pl-12 outline-none font-bold text-zinc-800"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Consegna a</label>
                  <div className="relative border-2 border-zinc-100 focus-within:border-zinc-900 bg-white">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                    <input
                      name="delivery"
                      list="cities"
                      value={formData.delivery}
                      onChange={handleChange}
                      placeholder="Città o CAP di arrivo..."
                      className="w-full p-6 pl-12 outline-none font-bold text-zinc-800 bg-transparent placeholder:text-zinc-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Marca e Modello</label>
                  <div className="relative border-2 border-zinc-100 focus-within:border-zinc-900 bg-white">
                    <Box className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                    <input
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      placeholder="Marca e modello (Opzionale)"
                      className="w-full p-6 pl-12 outline-none font-bold text-zinc-800 bg-transparent placeholder:text-zinc-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-white border-2 border-zinc-100 p-8 flex items-center shadow-lg shadow-zinc-200/50">
              <button
                onClick={nextStep}
                disabled={!formData.pickup || !formData.delivery || !formData.date}
                className="bg-[#b3b3b3] hover:bg-zinc-900 disabled:bg-zinc-200 text-white font-black px-16 py-5 flex items-center tracking-widest text-sm transition-all grayscale hover:grayscale-0"
              >
                AVANTI <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CONTATTO - Based on Screenshot 2 */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h1 className="font-heading font-black text-6xl text-zinc-900 mb-2">Quasi</h1>
            <h1 className="font-heading font-black text-6xl text-[#0d6efd] italic -tracking-wide mb-8">finito!</h1>
            <p className="text-zinc-400 text-xl font-medium mb-12">
              Come possiamo ricontattarti per fornirti il miglior prezzo possibile?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Nome Completo</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-zinc-100 p-6 focus:border-zinc-900 outline-none transition-all font-bold text-zinc-800"
                  placeholder="Inserisci il tuo nome"
                />
              </div>
              <div>
                <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-zinc-100 p-6 focus:border-zinc-900 outline-none transition-all font-bold text-zinc-800"
                  placeholder="Inserisci la tua email"
                />
              </div>
            </div>

            <div className="mb-16">
              <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Cellulare / WhatsApp</label>
              <div className="flex">
                <input
                  name="prefix"
                  value={formData.prefix}
                  onChange={handleChange}
                  className="w-24 bg-zinc-50 border-2 border-zinc-100 p-6 font-bold text-zinc-400 border-r-0 focus:border-zinc-900 outline-none transition-all"
                  placeholder="+39"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-grow bg-white border-2 border-zinc-100 p-6 focus:border-zinc-900 outline-none transition-all font-bold text-zinc-800"
                  placeholder="333 000 0000"
                />
              </div>
            </div>

            <div className="flex">
              <button
                onClick={handleWhatsApp}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="w-full bg-[#c2fadd] hover:bg-[#25D366] disabled:bg-zinc-100 disabled:text-zinc-300 disabled:cursor-not-allowed text-zinc-600 hover:text-white font-black py-6 flex items-center justify-center tracking-widest text-sm transition-all"
              >
                <img src={whatsappIco} alt="WhatsApp" className={`mr-3 w-6 h-6 object-contain ${(!formData.name || !formData.email || !formData.phone) ? 'grayscale opacity-30' : ''}`} /> 
                WHATSAPP SUBITO
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
