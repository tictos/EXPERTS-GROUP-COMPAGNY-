import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Layers, 
  Sun, 
  Sliders, 
  Eye, 
  Send,
  Info,
  Smartphone,
  Maximize2
} from 'lucide-react';

interface FinishOption {
  id: string;
  name: string;
  description: string;
  previewColor: string;
  texturePattern: string;
  badge?: string;
  extraPrice: number;
}

const WALL_FINISHES: FinishOption[] = [
  {
    id: 'inox-brosse',
    name: 'Inox Brossé 304L Satiné',
    description: 'Finition classique intemporelle, résistante aux rayures et à l\'air marin de Conakry.',
    previewColor: '#94a3b8',
    texturePattern: 'linear-gradient(90deg, #64748b 0%, #94a3b8 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
    badge: 'Standard Inclus',
    extraPrice: 0
  },
  {
    id: 'inox-gold-mirror',
    name: 'Inox Miroir Doré (Gold Titanium)',
    description: 'Revêtement en titane doré miroir apportant luxe et éclat pour hôtels et résidences VIP.',
    previewColor: '#d97706',
    texturePattern: 'linear-gradient(135deg, #b45309 0%, #f59e0b 35%, #fef3c7 50%, #f59e0b 65%, #b45309 100%)',
    badge: 'Luxe VIP',
    extraPrice: 15000000
  },
  {
    id: 'panoramic-glass',
    name: 'Verre Panoramique Sécurit 360°',
    description: 'Parois en verre feuilleté extra-clair pour vue dégagée et luminosité maximale.',
    previewColor: '#0ea5e9',
    texturePattern: 'linear-gradient(180deg, rgba(14, 165, 233, 0.3) 0%, rgba(56, 189, 248, 0.5) 100%)',
    badge: 'Architectural',
    extraPrice: 28000000
  },
  {
    id: 'boiserie-prestige',
    name: 'Boiseries Nobles & Chêne Massif',
    description: 'Placage bois chaleureux avec inserts inox polis pour villas de maître et duplex.',
    previewColor: '#78350f',
    texturePattern: 'repeating-linear-gradient(45deg, #78350f, #78350f 10px, #92400e 10px, #92400e 20px)',
    badge: 'Chaleur & Confort',
    extraPrice: 18500000
  }
];

const FLOOR_OPTIONS: FinishOption[] = [
  {
    id: 'granit-noir',
    name: 'Granit Noir Galaxy Étoilé',
    description: 'Pierre naturelle ultra-résistante avec reflets scintillants dorés et argentés.',
    previewColor: '#0f172a',
    texturePattern: 'radial-gradient(circle, #334155 10%, #020617 90%)',
    badge: 'Haute Résistance',
    extraPrice: 0
  },
  {
    id: 'marbre-blanc',
    name: 'Marbre Blanc de Carrare',
    description: 'Élégance noble et pure avec veinages gris doux, traité anti-tâches.',
    previewColor: '#f1f5f9',
    texturePattern: 'linear-gradient(45deg, #e2e8f0 25%, #f8fafc 25%, #f8fafc 50%, #e2e8f0 50%, #e2e8f0 75%, #f8fafc 75%, #f8fafc 100%)',
    badge: 'Prestige',
    extraPrice: 8500000
  },
  {
    id: 'tole-larmee',
    name: 'Tôle Larmée Antidérapante',
    description: 'Idéale pour monte-charges, passages fréquents et usages intensifs.',
    previewColor: '#475569',
    texturePattern: 'repeating-linear-gradient(0deg, #334155, #334155 5px, #475569 5px, #475569 10px)',
    badge: 'Industriel',
    extraPrice: 3000000
  }
];

const CEILING_OPTIONS = [
  {
    id: 'led-constellation',
    name: 'LED Constellation Étoilé',
    description: 'Micro-spots LED encastrés avec diffuseur acrylique opale anti-éblouissement.',
  },
  {
    id: 'led-perimeter',
    name: 'LED Ambiance Périphérique',
    description: 'Bandeaux LED indirects créant une lumière feutrée et moderne.',
  },
  {
    id: 'led-panel',
    name: 'Dalle LED Ultra-Mince',
    description: 'Éclairage uniforme lumière du jour 4000K écoénergétique.',
  }
];

const CONTROL_PANELS = [
  {
    id: 'lcd-multimedia',
    name: 'Boutonnerie Colonne avec Écran LCD',
    description: 'Afficheur numérique indiquant étage, sens et statut.',
  },
  {
    id: 'braille-antivandale',
    name: 'Boutons Inox avec Braille & Rétroéclairage',
    description: 'Conforme accessibilité EN 81-70, haute résistance.',
  }
];

interface CabinConfiguratorProps {
  onSendConfigToQuote: (configSummary: string) => void;
}

export const CabinConfigurator: React.FC<CabinConfiguratorProps> = ({ onSendConfigToQuote }) => {
  const [selectedWall, setSelectedWall] = useState<FinishOption>(WALL_FINISHES[0]);
  const [selectedFloor, setSelectedFloor] = useState<FinishOption>(FLOOR_OPTIONS[0]);
  const [selectedCeiling, setSelectedCeiling] = useState(CEILING_OPTIONS[0]);
  const [selectedPanel, setSelectedPanel] = useState(CONTROL_PANELS[0]);
  const [hasMirror, setHasMirror] = useState(true);
  const [hasHandrail, setHasHandrail] = useState(true);

  // Mobile active customization category tab
  const [activeMobileTab, setActiveMobileTab] = useState<'wall' | 'floor' | 'ceiling' | 'options'>('wall');

  const totalExtra = selectedWall.extraPrice + selectedFloor.extraPrice;

  const handleApplyToQuote = () => {
    const summary = `Configuration Cabine:
- Parois : ${selectedWall.name}
- Sol : ${selectedFloor.name}
- Plafond : ${selectedCeiling.name}
- Tableau de Commande : ${selectedPanel.name}
- Miroir de fond : ${hasMirror ? 'Oui (Plein panneau)' : 'Non'}
- Main courante inox : ${hasHandrail ? 'Oui (Inox 304L tubulaire)' : 'Non'}`;
    onSendConfigToQuote(summary);
  };

  return (
    <section id="configurateur" className="py-12 sm:py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>STUDIO DE PERSONNALISATION SUR-MESURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Configurez Votre Cabine d'Ascenseur
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-base leading-relaxed px-2">
            Personnalisez les parois, le sol, l'éclairage et les accessoires de votre futur ascenseur selon le style de votre bâtiment à Conakry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Mobile & Desktop Optimized Cabin 3D Visualizer */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Eye className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rendu 3D Cabine</span>
              </div>
              <span className="text-amber-400 font-mono text-[11px] font-bold">Modèle Experts-3D</span>
            </div>

            {/* Cabin Perspective Container - Responsive & Fluid */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden bg-slate-950 border border-slate-700/80 flex items-center justify-center p-3 sm:p-6 shadow-inner select-none">
              {/* Top Ceiling Plate */}
              <div className="absolute top-0 inset-x-4 sm:inset-x-8 h-8 sm:h-12 bg-slate-900/95 border-b border-slate-700 flex items-center justify-center z-20 shadow-md">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
                  <div className="w-10 sm:w-16 h-1.5 sm:h-2 rounded bg-amber-300/80 shadow-[0_0_8px_#fde68a]" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
                </div>
              </div>

              {/* Cabin Back Wall with chosen finish */}
              <div 
                className="absolute inset-4 sm:inset-8 rounded-lg shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-500 border border-slate-700/60"
                style={{ background: selectedWall.texturePattern }}
              >
                {/* Mirror overlay if checked */}
                {hasMirror && (
                  <div className="w-3/5 h-3/4 sm:w-2/3 sm:h-4/5 bg-gradient-to-tr from-slate-200/40 via-white/60 to-slate-100/30 backdrop-blur-sm border-2 border-slate-300/80 rounded shadow-xl flex flex-col items-center justify-center relative">
                    <span className="text-[9px] sm:text-[11px] font-bold text-slate-800/90 tracking-wider font-mono uppercase bg-white/80 px-2 py-0.5 rounded shadow-sm">
                      Miroir Inox Sécurit
                    </span>
                    <div className="absolute bottom-3 inset-x-3 h-0.5 bg-slate-400/40" />
                  </div>
                )}

                {/* Handrail on back wall if checked */}
                {hasHandrail && (
                  <div className="absolute bottom-10 sm:bottom-16 inset-x-3 sm:inset-x-6 h-2 sm:h-3 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-400 rounded-full border border-slate-500 shadow-lg flex items-center justify-between px-4 sm:px-6 z-10">
                    <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-slate-700 rounded-sm -mt-1" />
                    <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-slate-700 rounded-sm -mt-1" />
                  </div>
                )}
              </div>

              {/* Right Side Control Operating Panel (COP) */}
              <div className="absolute right-6 sm:right-10 top-10 sm:top-16 bottom-12 sm:bottom-20 w-10 sm:w-14 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-slate-600 rounded-md p-1.5 sm:p-2 flex flex-col items-center justify-between shadow-2xl z-30">
                <div className="w-7 sm:w-10 h-5 sm:h-7 bg-amber-500/20 border border-amber-400 rounded flex items-center justify-center text-amber-400 font-mono font-bold text-[9px] sm:text-xs shadow-inner">
                  <span>04 ▲</span>
                </div>
                <div className="grid grid-cols-2 gap-1 w-full my-auto">
                  {['4', '3', '2', '1', 'RDC', 'SS'].map((btn, i) => (
                    <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-slate-700 border border-slate-500 flex items-center justify-center text-[6px] sm:text-[7px] font-bold text-white">
                      {btn}
                    </div>
                  ))}
                </div>
                <div className="w-4 sm:w-6 h-1 bg-red-500/80 rounded-full" />
              </div>

              {/* Floor Plate with chosen texture */}
              <div 
                className="absolute bottom-0 inset-x-2 sm:inset-x-4 h-10 sm:h-16 rounded-b-xl border-t-2 border-slate-700 shadow-2xl transition-all duration-500 flex items-center justify-center"
                style={{ background: selectedFloor.texturePattern }}
              >
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-300 bg-slate-950/85 px-2 py-0.5 rounded border border-slate-800 truncate max-w-[85%] text-center">
                  {selectedFloor.name}
                </span>
              </div>
            </div>

            {/* Spec Indicators */}
            <div className="mt-4 p-3 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between items-center text-slate-400 text-[11px] sm:text-xs">
                <span>Parois :</span>
                <span className="text-white font-bold truncate max-w-[60%] text-right">{selectedWall.name}</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 text-[11px] sm:text-xs">
                <span>Sol :</span>
                <span className="text-white font-bold truncate max-w-[60%] text-right">{selectedFloor.name}</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 text-[11px] sm:text-xs">
                <span>Plafonnier :</span>
                <span className="text-amber-400 font-semibold truncate max-w-[60%] text-right">{selectedCeiling.name}</span>
              </div>
            </div>

            {/* Price & Action Button */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] sm:text-xs text-slate-400 block">Plus-value finitions :</span>
                <span className="text-base sm:text-lg font-bold font-mono text-amber-400">
                  {totalExtra > 0 ? `+ ${totalExtra.toLocaleString('fr-FR')} GNF` : 'Inclus dans le devis standard'}
                </span>
              </div>

              <button
                onClick={handleApplyToQuote}
                className="w-full sm:w-auto px-4 py-2.5 sm:py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Intégrer au Devis</span>
              </button>
            </div>
          </div>

          {/* Right Column: Mobile-Friendly Segmented Controls & Options */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Mobile Category Tab Selector */}
            <div className="lg:hidden flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
              {[
                { id: 'wall', label: '1. Parois' },
                { id: 'floor', label: '2. Sol' },
                { id: 'ceiling', label: '3. Éclairage' },
                { id: 'options', label: '4. Options' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveMobileTab(tab.id as any)}
                  className={`flex-1 min-w-[70px] py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer text-center ${
                    activeMobileTab === tab.id
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 1. Wall Finishes (Visible always on desktop, conditionally on mobile) */}
            <div className={`bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 ${
              activeMobileTab === 'wall' ? 'block' : 'hidden lg:block'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                  1. Habillage des Parois de Cabine
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {WALL_FINISHES.map((wall) => {
                  const isSelected = selectedWall.id === wall.id;
                  return (
                    <button
                      key={wall.id}
                      onClick={() => setSelectedWall(wall)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected 
                          ? 'border-amber-400 bg-slate-800 shadow-md ring-1 ring-amber-400' 
                          : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span 
                            className="w-4 h-4 rounded-full border border-slate-400 shrink-0" 
                            style={{ backgroundColor: wall.previewColor }}
                          />
                          <span className="text-xs sm:text-sm font-bold text-white">{wall.name}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {wall.description}
                      </p>
                      {wall.badge && (
                        <div className="mt-2 text-[10px] font-semibold text-amber-400/90 font-mono">
                          {wall.badge}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Flooring */}
            <div className={`bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 ${
              activeMobileTab === 'floor' ? 'block' : 'hidden lg:block'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <Sliders className="w-4 h-4 text-amber-400 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                  2. Revêtement de Sol
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {FLOOR_OPTIONS.map((floor) => {
                  const isSelected = selectedFloor.id === floor.id;
                  return (
                    <button
                      key={floor.id}
                      onClick={() => setSelectedFloor(floor)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-amber-400 bg-slate-800 ring-1 ring-amber-400' 
                          : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span 
                          className="w-3.5 h-3.5 rounded border border-slate-500" 
                          style={{ backgroundColor: floor.previewColor }}
                        />
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white leading-snug">{floor.name}</div>
                      <div className="text-[10px] text-slate-400 mt-1">{floor.badge}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Ceiling & Controls */}
            <div className={`bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 ${
              activeMobileTab === 'ceiling' ? 'block' : 'hidden lg:block'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                  3. Plafonnier & Éclairage
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {CEILING_OPTIONS.map((ceiling) => {
                  const isSelected = selectedCeiling.id === ceiling.id;
                  return (
                    <button
                      key={ceiling.id}
                      onClick={() => setSelectedCeiling(ceiling)}
                      className={`p-2.5 rounded-lg border text-left transition-all text-xs cursor-pointer ${
                        isSelected 
                          ? 'border-amber-400 bg-slate-800 text-amber-300 font-semibold ring-1 ring-amber-400' 
                          : 'border-slate-800 bg-slate-950/70 text-slate-300'
                      }`}
                    >
                      <div className="font-bold">{ceiling.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-2">{ceiling.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Accessories & Mirror */}
            <div className={`bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 ${
              activeMobileTab === 'options' ? 'block' : 'hidden lg:block'
            }`}>
              <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
                4. Miroir & Mains Courantes
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs">
                <label className="flex items-center gap-2.5 text-slate-300 cursor-pointer p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <input
                    type="checkbox"
                    checked={hasMirror}
                    onChange={(e) => setHasMirror(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-amber-400 cursor-pointer"
                  />
                  <span>Grand miroir de fond sécurit</span>
                </label>

                <label className="flex items-center gap-2.5 text-slate-300 cursor-pointer p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <input
                    type="checkbox"
                    checked={hasHandrail}
                    onChange={(e) => setHasHandrail(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-amber-400 cursor-pointer"
                  />
                  <span>Main courante Inox 304L</span>
                </label>
              </div>
            </div>

            {/* Guinean engineering advice callout */}
            <div className="bg-gradient-to-r from-slate-900 to-amber-950/30 border border-amber-500/20 rounded-xl p-3.5 sm:p-4 flex items-start gap-2.5 sm:gap-3 text-xs text-slate-300">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-[11px] sm:text-xs">
                <strong className="text-amber-400 block mb-0.5">Conseil pour le climat côtier de Conakry :</strong>
                L'inox brossé 304L et le titane doré sont particulièrement recommandés pour résister à l'humidité et à l'air marin à Kaloum, Camayenne et Kipé.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
