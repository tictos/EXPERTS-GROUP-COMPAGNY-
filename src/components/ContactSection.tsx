import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck,
  Building,
  ArrowUpRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Demande de devis ascenseur neuf',
    location: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3 font-mono">
            <MapPin className="w-3.5 h-3.5" />
            <span>SIÈGE SOCIAL & ATELIER TECHNIQUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            Contactez EXPERTS GROUP COMPAGNY à Conakry
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Nos ingénieurs sont à votre disposition pour vos projets de construction, d'installation d'ascenseurs neufs ou de reprise de contrat de maintenance en Guinée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Coordinates & Real Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Business Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-400 flex items-center justify-center font-bold text-slate-950 text-xl sm:text-2xl shadow-lg shadow-amber-400/20 shrink-0">
                  EG
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-black text-white font-display leading-tight truncate">
                    EXPERTS GROUP COMPAGNY
                  </h3>
                  <div className="text-[11px] sm:text-xs text-amber-400 font-mono font-semibold truncate">
                    Vente · Installation · Maintenance
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-mono text-xs sm:text-sm">Adresse & Siège :</strong>
                    <span className="text-xs sm:text-sm">Grand Marché de Dabondy, Matoto</span>
                    <span className="block text-slate-400 text-xs sm:text-sm">Conakry - République de Guinée</span>
                  </div>
                </div>

                {/* Telephones */}
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-mono text-xs sm:text-sm">Téléphones Directs & Urgence :</strong>
                    <div className="flex flex-col gap-1 mt-1 font-mono text-xs sm:text-sm">
                      <a href="tel:+224624069022" className="text-amber-400 hover:underline font-bold">
                        (+224) 624 06 90 22
                      </a>
                      <a href="tel:+224610718383" className="text-slate-300 hover:text-amber-400">
                        (+224) 610 71 83 83
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours & Dispatch */}
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-mono text-xs sm:text-sm">Horaires & Disponibilité :</strong>
                    <span className="text-xs sm:text-sm">Bureaux : Lun - Sam (08h00 - 18h30)</span>
                    <span className="block text-amber-400 font-bold text-xs sm:text-sm">Astreinte Dépannage : 24h/24 & 7j/7</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href="https://wa.me/224624069022?text=Bonjour%20EXPERTS%20GROUP%20COMPAGNY,%20je%20souhaite%20un%20renseignement%20technique%20ou%20un%20devis."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Direct (+224)</span>
              </a>
            </div>

            {/* Geographical Zones Covered in Guinea */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-xs text-slate-300">
              <div className="font-bold text-white uppercase font-mono text-xs mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Zones d'Intervention Rapide Couvertes :
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['Kaloum', 'Almamya', 'Camayenne', 'Dixinn', 'Matoto', 'Dabondy', 'Kipé', 'Nongo', 'Lambanyi', 'Sonfonia', 'Coyah', 'Dubréka', 'Kamsar', 'Boké'].map((zone, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px]">
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-7 sm:p-9 shadow-2xl">
            {isSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white font-display">
                  Message Transmis avec Succès !
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Merci {formData.name}. Un conseiller technique de <strong>EXPERTS GROUP COMPAGNY</strong> prendra attache avec vous au <strong>{formData.phone}</strong> dans les meilleurs délais.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs rounded-lg border border-slate-700 cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-display">
                    Envoyez-nous Votre Demande de Projet
                  </h3>
                  <p className="text-xs text-slate-400">
                    Remplissez ce formulaire pour planifier une visite de chantier, une étude de gaine ou un devis d'ascenseur.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                      Nom complet ou Entreprise *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ibrahima Diallo / Société BTP"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                      Numéro de Téléphone (+224...) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 624 06 90 22"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      placeholder="contact@votre-entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                      Localisation du Projet
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Kaloum, Matoto, Kipé, Coyah..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                    Objet de Votre Demande
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Demande de devis ascenseur neuf">Demande de devis ascenseur neuf (MRL / Panoramique / Villa)</option>
                    <option value="Contrat de maintenance ou dépannage">Souscription ou audit de maintenance / Dépannage</option>
                    <option value="Modernisation ascenseur existant">Modernisation et mise aux normes d'ancien ascenseur</option>
                    <option value="Monte-charge ou escalator commercial">Monte-charge industriel ou escalator commercial</option>
                    <option value="Autre demande">Autre demande de renseignement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                    Détails ou Spécifications de Votre Chantier
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez le nombre de niveaux (ex: R+5), le type d'usage, les dimensions de la gaine si connues..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm rounded-lg shadow-xl shadow-amber-400/20 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Envoyer ma Demande de Projet</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
