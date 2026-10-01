import React from 'react';
import { Phone, MapPin, Globe, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Top Footer Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-slate-950 text-sm shrink-0">
                EG
              </div>
              <span className="text-base font-extrabold text-white font-display">
                EXPERTS GROUP COMPAGNY
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed text-justify max-w-sm md:max-w-none mx-auto md:mx-0">
              Société spécialisée dans la vente, l'installation et la maintenance d'ascenseurs MRL, panoramiques, privatifs et monte-charges industriels en République de Guinée.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[11px] text-amber-400 font-mono">
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>Conforme EN 81-20/50 & ISO 9001:2015</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-center md:text-left">
              <li><a href="#accueil" className="hover:text-amber-400 transition-colors">Accueil</a></li>
              <li><a href="#catalogue" className="hover:text-amber-400 transition-colors">Catalogue Ascenseurs</a></li>
              <li><a href="#configurateur" className="hover:text-amber-400 transition-colors">Configurateur Cabine</a></li>
              <li><a href="#simulateur" className="hover:text-amber-400 transition-colors">Simulateur & Sécurité ARD</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services & Maintenance</a></li>
              <li><a href="#calculateur" className="hover:text-amber-400 transition-colors">Calculateur de Devis</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact & Urgence</a></li>
            </ul>
          </div>

          {/* Col 3: Gammes & Technologies */}
          <div className="space-y-2.5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Solutions Techniques
            </div>
            <ul className="space-y-1.5 text-slate-400 text-center md:text-left">
              <li>Ascenseurs MRL sans salle des machines</li>
              <li>Système de secours ARD anti-coupure EDG</li>
              <li>Ascenseurs Panoramiques en verre sécurit</li>
              <li>Ascenseurs privatifs pour villas (220V)</li>
              <li>Ascenseurs hospitaliers pour brancards</li>
              <li>Monte-charges industriels jusqu'à 5T</li>
              <li>Escaliers mécaniques commerciaux</li>
            </ul>
          </div>

          {/* Col 4: Coordinates */}
          <div className="space-y-2.5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-xs font-bold text-white uppercase font-mono tracking-wider">
              Siège & Lignes Directes
            </div>
            <div className="space-y-2.5 text-slate-300 flex flex-col items-center md:items-start">
              <div className="flex items-start justify-center md:justify-start gap-2 max-w-xs md:max-w-none text-center md:text-left">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Grand Marché de Dabondy, Matoto, Conakry - Guinée</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 font-mono">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="flex flex-col items-center md:items-start">
                  <a href="tel:+224624069022" className="hover:text-amber-400 text-white font-bold">(+224) 624 06 90 22</a>
                  <a href="tel:+224610718383" className="hover:text-amber-400 text-slate-400">(+224) 610 71 83 83</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} EXPERTS GROUP COMPAGNY. Tous droits réservés · Licence Privée & Propriétaire · Conakry, République de Guinée.
          </div>

          <div className="flex items-center gap-4">
            <span>Matoto Dabondy · Conakry</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
