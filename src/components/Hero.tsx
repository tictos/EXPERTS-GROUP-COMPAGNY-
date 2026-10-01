import React from 'react';
import { IMAGES } from '../assets/images';
import { 
  ShieldCheck, 
  Zap, 
  Settings2, 
  VolumeX, 
  Award, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Clock, 
  BatteryCharging 
} from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreCatalog }) => {
  return (
    <section id="accueil" className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Architectural Photo with Light Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBackground}
          alt="Atrium et ascenseurs Experts Group Compagny"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle, transparent gradients to let the image shine through clearly */}
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-slate-950/50" />
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Top Header Badge & Tagline */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-900/90 border border-amber-500/30 text-xs font-semibold text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span>VENTE · INSTALLATION · MAINTENANCE D'ASCENSEURS EN GUINÉE</span>
          </div>

          {/* ISO 9001:2015 Gold Seal Badge */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent px-3.5 py-1.5 rounded-lg border border-amber-500/30">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-left">
              <div className="text-[11px] font-black tracking-wider text-amber-400 uppercase font-mono leading-none">
                ISO 9001 : 2015
              </div>
              <div className="text-[10px] text-slate-300 leading-tight">ÉQUIPEMENTS & NORMES CERTIFIÉS</div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Proposition & Guinean Features */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="space-y-3 w-full">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1] font-display">
                EXPERTS GROUP COMPAGNY
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  ASCENSEURS MRL DE HAUTE QUALITÉ
                </span>
              </h1>
              
              {/* Highlight strip */}
              <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-4 py-1.5 text-xs sm:text-sm tracking-wide uppercase rounded shadow-md mx-auto lg:mx-0">
                Distribution · Installation Agréée · Dépannage 24/7 · Conakry
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Votre partenaire de référence en Guinée pour la <strong>vente, la fourniture, l'installation clé en main et la maintenance</strong> d'ascenseurs MRL sans salle des machines, panoramiques vitrés et monte-charges issus des plus grands fabricants mondiaux certifiés.
            </p>

            {/* Checklist of key engineering merits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 w-full max-w-xl lg:max-w-none text-left">
              {[
                { text: 'Fourniture & Vente d\'appareils neufs certifiés', icon: Settings2 },
                { text: 'Secours ARD anti-coupure d\'électricité EDG', icon: BatteryCharging },
                { text: 'Économie d\'énergie jusqu\'à 40% (Variateur VVVF)', icon: Zap },
                { text: 'Inox 304L haute durabilité anti-corrosion', icon: ShieldCheck },
                { text: 'Montage & Pose par des techniciens qualifiés', icon: VolumeX },
                { text: 'Astreinte technique & SAV 24h/7j à Conakry', icon: Clock },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 justify-start sm:justify-start bg-slate-900/40 sm:bg-transparent p-2 sm:p-0 rounded-lg border sm:border-0 border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 w-full">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black rounded-lg text-xs sm:text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Calculer Mon Devis Gratuit</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-amber-400/50 font-bold rounded-lg text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Voir le Catalogue</span>
              </button>
            </div>

            {/* Contact quick strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-xs text-slate-400 text-center lg:text-left">
              <span className="flex items-center justify-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Assistance directe : <strong className="text-slate-200 font-mono">(+224) 624 06 90 22</strong>
              </span>
              <span className="hidden sm:inline text-slate-600">·</span>
              <span>Siège : Grand Marché de Dabondy, Matoto</span>
            </div>
          </div>

          {/* Right Column: Visual Hero Showcase with MRL Elevator Cutaway & Cabin */}
          <div className="lg:col-span-5 relative">
            {/* Main Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80 group">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-slate-950">
                <img
                  src={IMAGES.heroModernMrl}
                  alt="Ascenseur MRL Experts Group Compagny Conakry"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />
              </div>

              {/* Floating Engineering Highlight Box */}
              <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 bg-slate-950/95 sm:bg-slate-950/90 backdrop-blur-md border border-slate-800 p-2.5 sm:p-4 rounded-xl flex items-center justify-between gap-2.5 sm:gap-3 shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider font-mono truncate leading-snug">
                      Distributeur & Installateur Certifié
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 truncate leading-snug">
                      Technologies Gearless · Normes EN 81-20/50
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-amber-400 text-slate-950 font-black text-[10px] sm:text-xs whitespace-nowrap">
                    EN 81-20
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Floating Trust Pill at the corner */}
            <div className="absolute -top-4 -right-4 bg-slate-900/95 border border-amber-500/40 text-slate-200 px-4 py-2.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-left text-xs font-semibold">
                <span className="text-amber-400 font-bold block">Conakry & Province</span>
                Stock de pièces garanti
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Pillars */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            {
              title: 'Matériaux Robustes',
              desc: 'Équipements importés de fabricants certifiés en acier inoxydable 304L résistant.',
              icon: ShieldCheck,
            },
            {
              title: 'Opération Fluide',
              desc: 'Traction Gearless synchrone garantissant une translation douce sans à-coups.',
              icon: Settings2,
            },
            {
              title: 'Sécurité Totale',
              desc: 'Parachute progressif, ARD batterie de secours et rideaux infrarouges 128 faisceaux.',
              icon: Award,
            },
            {
              title: 'Finitions au Choix',
              desc: 'Configurations sélectionnées : Inox brossé, miroir doré, verre panoramique ou bois.',
              icon: Sparkles,
            },
            {
              title: 'Ultra Silencieux',
              desc: 'Isolation phonique de pointe réduisant les vibrations et nuisances dans les étages.',
              icon: VolumeX,
            },
            {
              title: 'Haute Efficacité',
              desc: 'Moteur synchrone éco-énergétique réduisant la facture électrique jusqu\'à 40%.',
              icon: Zap,
            }
          ].map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index} 
                className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-xl p-4 transition-all duration-300 flex flex-col text-left group"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
