import React, { useState } from 'react';
import { 
  GUINEA_PROJECTS, 
  FAQ_DATA 
} from '../data/products';
import { 
  Building, 
  MapPin, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  ShieldAlert,
  Award,
  ShieldCheck,
  Star
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Real Projects Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3 font-mono">
              <Building className="w-3.5 h-3.5" />
              <span>RÉFÉRENCES & INSTALLATIONS RÉUSSIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
              Nos Réalisations & Chantiers en Guinée
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Découvrez quelques-uns des bâtiments emblématiques équipés et maintenus par Experts Group Compagny à Conakry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUINEA_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold font-mono uppercase bg-amber-400/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded">
                      {proj.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{proj.location}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {proj.title}
                  </h3>

                  <div className="text-xs text-amber-400/90 font-mono font-medium mb-3">
                    {proj.type}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.outcome}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Conformité EN 81-20 validée</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Quote Strip */}
        <div className="mb-20 bg-slate-950 border border-slate-800 rounded-2xl p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-4 border-l-2 border-amber-400">
              <div className="flex gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic mb-4 leading-relaxed">
                "Experts Group a installé les 2 ascenseurs MRL de notre immeuble à Kaloum. Le système de secours automatique lors des coupures EDG fonctionne de manière irréprochable."
              </p>
              <div className="text-xs font-bold text-white">M. Ibrahima Diallo</div>
              <div className="text-[10px] text-slate-400">Promoteur Immobilier, Kaloum</div>
            </div>

            <div className="p-4 border-l-2 border-amber-400">
              <div className="flex gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic mb-4 leading-relaxed">
                "Leur contrat de maintenance Sérénité 24/7 nous rassure au quotidien. En cas de blocage, leurs techniciens arrivent en moins de 30 minutes avec les bonnes pièces de rechange."
              </p>
              <div className="text-xs font-bold text-white">Mme Aminata Camara</div>
              <div className="text-[10px] text-slate-400">Gestionnaire de Copropriété, Kipé</div>
            </div>

            <div className="p-4 border-l-2 border-amber-400">
              <div className="flex gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic mb-4 leading-relaxed">
                "L'ascenseur panoramique vitré dans le hall de notre hôtel fait l'admiration de tous nos clients. La qualité de finition en inox doré et la douceur de déplacement sont exceptionnelles."
              </p>
              <div className="text-xs font-bold text-white">M. Alpha Oumar Barry</div>
              <div className="text-[10px] text-slate-400">Directeur d'Hôtel, Camayenne</div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3 font-mono">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>QUESTIONS FRÉQUENTES & RÉPONSES D'EXPERTS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
              Tout ce que vous devez savoir avant d'installer un ascenseur en Guinée
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/60 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 bg-slate-900/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
