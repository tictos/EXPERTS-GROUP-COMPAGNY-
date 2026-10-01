import React from 'react';
import { 
  SERVICES, 
  MAINTENANCE_PLANS 
} from '../data/products';
import { IMAGES } from '../assets/images';
import { 
  Wrench, 
  Clock, 
  ShieldCheck, 
  Check, 
  PhoneCall, 
  ArrowRight, 
  Zap, 
  Layers,
  Award,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="services" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3 font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>INGÉNIERIE, MONTAGE & SERVICE APRÈS-VENTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            Services Techniques & Maintenance 24h/7j à Conakry
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            De l'étude de faisabilité sur plan jusqu'à l'astreinte d'urgence 24h/24, nos ingénieurs et techniciens certifiés garantissent la sécurité et la continuité de service de vos appareils en Guinée.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((srv) => (
            <div
              key={srv.number}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-mono text-amber-400/30 group-hover:text-amber-400 transition-colors">
                    {srv.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {srv.title}
                  </h3>
                  <div className="text-xs font-mono text-amber-400/80 mt-1">
                    {srv.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {srv.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Showcase Box with Real Image */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                <Clock className="w-3.5 h-3.5" />
                DÉPANNAGE D'URGENCE DISPONIBLE 24/7
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Magasin de Pièces Détachées & Atelier Central à Dabondy Matoto
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Contrairement aux intermédiaires, <strong>EXPERTS GROUP COMPAGNY</strong> dispose d'un stock permanent de composants d'origine à Conakry : variateurs VVVF, cartes mères, serrures de portes, câbles de traction et batteries de secours ARD.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Intervention sous 30 à 45 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Techniciens habilités et certifiés</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Audit de sécurité semestriel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Historique numérisé des pannes</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+224624069022"
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Ligne Urgence : (+224) 624 06 90 22</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative aspect-[4/3] bg-slate-950">
                <img
                  src={IMAGES.elevatorTechnicians}
                  alt="Techniciens ascenseurs Experts Group Compagny Conakry"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Contracts Pricing / Formula Matrix */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Nos Formules de Contrats de Maintenance
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Choisissez le niveau de couverture et d'astreinte adapté à la criticité de votre bâtiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {MAINTENANCE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-slate-950 rounded-2xl p-5 sm:p-7 border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isPopular 
                    ? 'border-amber-400 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-400' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-black text-[10px] uppercase font-mono px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    Recommandé Immeubles & Bureaux
                  </div>
                )}

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">{plan.name}</h4>
                  <p className="text-xs text-amber-400 font-medium mb-3.5 leading-snug">{plan.tagline}</p>
                  
                  {/* Price Tag Box */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 mb-5 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block mb-0.5">
                      Tarif indicatif
                    </span>
                    <div className="text-xs sm:text-sm font-black font-mono text-white leading-tight">
                      {plan.priceGNF}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                      {plan.priceEUR}
                    </div>
                  </div>

                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 font-mono">
                    Public : <span className="text-slate-200 normal-case font-sans">{plan.target}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-2.5 sm:py-3 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    plan.isPopular
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  Souscrire à ce Contrat
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
