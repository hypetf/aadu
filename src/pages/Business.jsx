import React, { useState } from 'react';
import { Building2, MessageCircle, Send, CheckCircle2, Phone, Mail, User } from 'lucide-react';

import { Helmet } from 'react-helmet-async';

const phoneNumber = "+39 333 656 3426";
const waNumber = "393336563426";

export default function Business() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = `Richiesta Business AADU:\n\nAzienda: ${formData.companyName}\nReferente: ${formData.contactPerson}\nTel: ${formData.phone}\nEmail: ${formData.email}\nNote: ${formData.details}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Helmet>
        <title>Servizi Business e Logistica Aziendale | AADU Trasporti</title>
        <meta name="description" content="Soluzioni logistiche dedicate per aziende. Trasporto pallet, merci ingombranti e gestione spedizioni programmate in tutta Italia." />
        <meta name="keywords" content="logistica aziendale, trasporto pallet b2b, corriere dedicato aziende, gestione merci ingombranti" />
        <link rel="canonical" href="https://aadutrasporti.com/business" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Info */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="bg-blue-50 text-[#0d6efd] w-16 h-16 flex justify-center items-center mb-8 border border-blue-100">
              <Building2 className="w-8 h-8" />
            </div>
            <h1 className="font-heading font-black text-6xl md:text-7xl text-zinc-900 mb-8 leading-tight italic">
              Soluzioni per<br/><span className="text-[#0d6efd]">Aziende.</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-xl leading-relaxed font-medium mb-12">
              Logistica dedicata, tariffe concordate e gestione pallet professionale. Siamo il partner affidabile per la tua crescita commerciale.
            </p>
            
            <div className="space-y-6 max-w-md">
              <div className="flex items-center space-x-4 text-zinc-700 font-bold tracking-tight">
                <CheckCircle2 className="text-[#0ea5e9] w-6 h-6 shrink-0" />
                <span>Prezzi fissi e trasparenti per rotte ricorrenti</span>
              </div>
              <div className="flex items-center space-x-4 text-zinc-700 font-bold tracking-tight">
                <CheckCircle2 className="text-[#0ea5e9] w-6 h-6 shrink-0" />
                <span>Gestione completa rimborsi pallet</span>
              </div>
              <div className="flex items-center space-x-4 text-zinc-700 font-bold tracking-tight">
                <CheckCircle2 className="text-[#0ea5e9] w-6 h-6 shrink-0" />
                <span>Referente dedicato per ogni spedizione</span>
              </div>
            </div>

            <div className="mt-20 border-t border-zinc-200 pt-10 text-zinc-400 text-sm font-bold uppercase tracking-widest">
              Oppure chiamaci direttamente: <br/>
              <a href={`tel:${waNumber}`} className="text-zinc-900 text-2xl mt-2 block">{phoneNumber}</a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white border-4 border-zinc-900 p-8 md:p-12 shadow-2xl shadow-zinc-200 animate-in fade-in slide-in-from-right duration-700">
            <h2 className="font-heading font-black text-3xl text-zinc-900 mb-10">Richiedi un account Business</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Nome Azienda</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                  <input 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 p-4 pl-12 focus:border-zinc-900 outline-none transition-all font-medium" 
                    placeholder="Esempio Srl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Referente</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                    <input 
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full bg-zinc-50 border-2 border-zinc-100 p-4 pl-12 focus:border-zinc-900 outline-none transition-all font-medium" 
                      placeholder="Nome e Cognome"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Telefono</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-50 border-2 border-zinc-100 p-4 pl-12 focus:border-zinc-900 outline-none transition-all font-medium" 
                      placeholder="+39 --- -------"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Email Aziendale</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 p-4 pl-12 focus:border-zinc-900 outline-none transition-all font-medium" 
                    placeholder="aadu.trasporti@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-3">Dettagli della richiesta</label>
                <textarea 
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-zinc-50 border-2 border-zinc-100 p-4 focus:border-zinc-900 outline-none transition-all font-medium resize-none" 
                  placeholder="Descrivi le tue esigenze di trasporto..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  onClick={handleWhatsApp}
                  disabled={!formData.companyName || !formData.contactPerson || !formData.phone || !formData.email || !formData.details}
                  className="w-full bg-[#25D366] hover:bg-green-600 disabled:bg-zinc-100 disabled:text-zinc-300 disabled:shadow-none disabled:cursor-not-allowed text-white font-black py-5 flex items-center justify-center tracking-widest text-sm transition-all shadow-xl shadow-green-500/20"
                >
                  <MessageCircle className={`w-5 h-5 mr-3 ${(!formData.companyName || !formData.contactPerson || !formData.phone || !formData.email || !formData.details) ? 'opacity-30' : ''}`} /> 
                  INVIA RICHIESTA BUSINESS
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
