import React, { useState } from 'react';
import { Phone, Shield, Menu, X, ArrowUpRight, Wrench, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-slate-100 w-full">
      {/* Top Utility Bar with Guinean contact info */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border-b border-slate-800/80 text-xs py-1.5 px-2.5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[10px] sm:text-xs whitespace-nowrap">
          {/* Location & Certification */}
          <div className="flex items-center gap-1.5 sm:gap-3 text-slate-300 shrink-0">
            <span className="flex items-center gap-1 text-amber-400 font-semibold whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Conakry, Guinée</span>
            </span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="hidden md:inline text-slate-400 truncate max-w-[200px] lg:max-w-none">
              Grand Marché de Dabondy, Matoto
            </span>
            <span className="hidden xl:inline text-slate-600">·</span>
            <span className="hidden xl:flex items-center gap-1 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Équipements Certifiés EN 81-20/50 & ISO 9001
            </span>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex items-center gap-1.5 sm:gap-3 font-mono text-slate-300 shrink-0">
            <a 
              href="tel:+224624069022" 
              className="flex items-center gap-1 text-slate-200 hover:text-amber-400 transition-colors whitespace-nowrap font-bold text-[10px] sm:text-xs"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 shrink-0" />
              <span>(+224) 624 06 90 22</span>
            </a>
            <span className="hidden lg:inline text-slate-600">/</span>
            <a 
              href="tel:+224610718383" 
              className="hidden lg:inline text-slate-300 hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              610 71 83 83
            </a>
            <a
              href="https://wa.me/224624069022?text=Bonjour%20EXPERTS%20GROUP%20COMPAGNY,%20je%20souhaite%20des%20informations%20sur%20vos%20ascenseurs."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 bg-emerald-950/70 border border-emerald-800/60 px-1.5 sm:px-2 py-0.5 rounded transition-colors whitespace-nowrap text-[9px] sm:text-xs font-sans font-medium"
            >
              <MessageSquare className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Fluid Responsive Contract) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Zone 1: Single text element wordmark / Brand */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center font-bold text-slate-950 text-base sm:text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5l5.5 3.4v6.8L12 18.1l-5.5-3.4V7.9L12 4.5zM9 9h2v6H9V9zm4 0h2v6h-2V9z" />
            </svg>
          </div>
          <div className="flex flex-col truncate">
            <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-white leading-none group-hover:text-amber-400 transition-colors font-display truncate">
              EXPERTS GROUP
            </span>
            <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-wider text-amber-400/90 uppercase font-mono truncate">
              COMPAGNY · ASCENSEURS
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (hidden on smaller screens, shown on desktop) */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs lg:text-sm font-medium text-slate-300">
          <a 
            href="#accueil" 
            className={`transition-colors hover:text-amber-400 whitespace-nowrap ${activeSection === 'accueil' ? 'text-amber-400' : ''}`}
          >
            Accueil
          </a>
          <a 
            href="#catalogue" 
            className={`transition-colors hover:text-amber-400 whitespace-nowrap ${activeSection === 'catalogue' ? 'text-amber-400' : ''}`}
          >
            Catalogue
          </a>
          <a 
            href="#configurateur" 
            className={`transition-colors hover:text-amber-400 whitespace-nowrap ${activeSection === 'configurateur' ? 'text-amber-400' : ''}`}
          >
            Configurateur Cabine
          </a>
          <a 
            href="#simulateur" 
            className={`transition-colors hover:text-amber-400 whitespace-nowrap ${activeSection === 'simulateur' ? 'text-amber-400' : ''}`}
          >
            Simulateur 3D
          </a>
          <a 
            href="#services" 
            className={`transition-colors hover:text-amber-400 whitespace-nowrap ${activeSection === 'services' ? 'text-amber-400' : ''}`}
          >
            Services & Maintenance
          </a>
          <a 
            href="#contact" 
            className={`transition-colors hover:text-amber-400 whitespace-nowrap ${activeSection === 'contact' ? 'text-amber-400' : ''}`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:+224624069022"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:border-amber-400/60 hover:text-amber-400 transition-all whitespace-nowrap"
          >
            <Wrench className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Dépannage 24/7</span>
          </a>
          
          <button
            onClick={onOpenQuote}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-500 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 sm:gap-1.5"
          >
            <span>Devis Express</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 focus:outline-none shrink-0 cursor-pointer"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl px-4 sm:px-6 py-5 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            <a
              href="#accueil"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Accueil
            </a>
            <a
              href="#catalogue"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Catalogue Produits & Ascenseurs
            </a>
            <a
              href="#configurateur"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Configurateur de Cabine
            </a>
            <a
              href="#simulateur"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Simulateur d'Ascenseur & Secours ARD
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Services, Installation & Maintenance
            </a>
            <a
              href="#calculateur"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Calculateur de Prix en GNF
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-900 transition-colors"
            >
              Contact & Localisation Dabondy Matoto
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg text-center shadow-md transition-colors cursor-pointer"
            >
              Demander un Devis Gratuit
            </button>
            <a
              href="tel:+224624069022"
              className="w-full py-2.5 text-xs font-semibold text-center text-slate-200 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-2 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Appeler le (+224) 624 06 90 22
            </a>
            <a
              href="https://wa.me/224624069022?text=Bonjour%20EXPERTS%20GROUP%20COMPAGNY,%20je%20souhaite%20un%20devis."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-xs font-bold text-center text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
