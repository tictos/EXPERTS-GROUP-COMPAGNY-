import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Building2, 
  Layers, 
  Users, 
  Gauge, 
  ShieldCheck, 
  MessageSquare, 
  Printer, 
  Send, 
  Check, 
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Download
} from 'lucide-react';

interface QuoteCalculatorProps {
  initialConfig?: string;
  initialProduct?: string;
  onSuccessSubmit?: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ 
  initialConfig, 
  initialProduct,
  onSuccessSubmit 
}) => {
  const [buildingType, setBuildingType] = useState<string>('residentiel');
  const [floorsCount, setFloorsCount] = useState<number>(6);
  const [capacityKey, setCapacityKey] = useState<string>('8pers');
  const [speedKey, setSpeedKey] = useState<string>('1.0ms');
  
  // Options checkboxes
  const [hasARD, setHasARD] = useState<boolean>(true); // Battery auto rescue
  const [hasAC, setHasAC] = useState<boolean>(false);
  const [hasGoldMirror, setHasGoldMirror] = useState<boolean>(false);
  const [hasBadgeAccess, setHasBadgeAccess] = useState<boolean>(false);
  const [hasMaintenanceYear, setHasMaintenanceYear] = useState<boolean>(true);
  const [customNotes, setCustomNotes] = useState<string>(initialConfig || '');

  // Client info
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientLocation, setClientLocation] = useState<string>('Conakry (Kaloum / Matoto / Ratoma)');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Price base model in GNF (Franc Guinéen)
  const estimatedPriceGNF = useMemo(() => {
    let base = 220000000; // ~ 220M GNF base (~23,000 EUR for high end MRL 4-floor)

    // Building type multiplier
    if (buildingType === 'villa') base = 180000000;
    if (buildingType === 'commercial') base = 260000000;
    if (buildingType === 'hotel') base = 290000000;
    if (buildingType === 'medical') base = 310000000;
    if (buildingType === 'industriel') base = 270000000;

    // Floors addition (each floor above 3 adds 15M GNF)
    const extraFloors = Math.max(0, floorsCount - 3);
    base += extraFloors * 14000000;

    // Capacity multiplier
    if (capacityKey === '6pers') base += 10000000;
    if (capacityKey === '8pers') base += 22000000;
    if (capacityKey === '13pers') base += 45000000;
    if (capacityKey === '16pers') base += 68000000;
    if (capacityKey === 'cargo3000') base += 85000000;

    // Speed
    if (speedKey === '1.5ms') base += 12000000;
    if (speedKey === '1.75ms') base += 20000000;
    if (speedKey === '2.5ms') base += 38000000;

    // Options
    if (hasARD) base += 12000000; // Battery rescue device
    if (hasAC) base += 15000000; // Cabin Air conditioner
    if (hasGoldMirror) base += 18000000; // Titanium gold mirror finish
    if (hasBadgeAccess) base += 8000000; // RFID badge system
    if (hasMaintenanceYear) base += 14400000; // 1-year preventive maintenance

    return base;
  }, [buildingType, floorsCount, capacityKey, speedKey, hasARD, hasAC, hasGoldMirror, hasBadgeAccess, hasMaintenanceYear]);

  const estimatedEUR = Math.round(estimatedPriceGNF / 9300);
  const estimatedUSD = Math.round(estimatedPriceGNF / 8600);

  const handleWhatsAppSend = () => {
    const text = `*DEMANDE DE DEVIS ASCENSEUR - EXPERTS GROUP COMPAGNY*
----------------------------------------
*Type de Projet:* ${buildingType.toUpperCase()}
*Nombre d'Étages:* R+${floorsCount - 1} (${floorsCount} niveaux)
*Capacité:* ${capacityKey}
*Vitesse:* ${speedKey}
*Système ARD Anti-Coupure:* ${hasARD ? 'OUI (Inclus)' : 'NON'}
*Climatisation Cabine:* ${hasAC ? 'OUI' : 'NON'}
*Finition Inox Doré / Luxe:* ${hasGoldMirror ? 'OUI' : 'NON'}
*Contrôle d'accès Badge:* ${hasBadgeAccess ? 'OUI' : 'NON'}
*Contrat Maintenance 1 an:* ${hasMaintenanceYear ? 'OUI' : 'NON'}
----------------------------------------
*Estimation Prévisionnelle:* ~ ${estimatedPriceGNF.toLocaleString('fr-FR')} GNF (~ ${estimatedEUR.toLocaleString('fr-FR')} EUR)
*Client:* ${clientName || 'Particulier / Promoteur'}
*Téléphone:* ${clientPhone || 'À renseigner'}
*Localisation:* ${clientLocation}
${customNotes ? `\n*Notes additionnelles :*\n${customNotes}` : ''}`;

    window.open(`https://wa.me/224624069022?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }
    setIsSubmitted(true);
    if (onSuccessSubmit) onSuccessSubmit();
  };

  return (
    <section id="calculateur" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3 font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATEUR TARIFAIRE INSTANTANÉ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            Calculateur de Devis Personnalisé
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Configurez les caractéristiques de votre projet et obtenez immédiatement une estimation budgétaire transparente en Francs Guinéens (GNF) et en devises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Parameters */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* 1. Building Type */}
            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider font-mono block mb-2.5 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                1. Type d'Établissement & Bâtiment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'residentiel', label: 'Immeuble Résidentiel' },
                  { id: 'commercial', label: 'Bureaux & Banque' },
                  { id: 'hotel', label: 'Hôtel & Atrium' },
                  { id: 'medical', label: 'Clinique / Hôpital' },
                  { id: 'villa', label: 'Villa & Duplex Privé' },
                  { id: 'industriel', label: 'Monte-Charge / Fret' },
                ].map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBuildingType(b.id)}
                    className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                      buildingType === b.id
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow-md'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Floors Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 text-xs">
                <span className="font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  2. Nombre de Niveaux d'Arrêt (Étages)
                </span>
                <span className="text-amber-400 font-mono font-bold text-sm bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                  {floorsCount} Niveaux (R+{floorsCount - 1})
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                value={floorsCount}
                onChange={(e) => setFloorsCount(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-950 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>R+1 (2 niveaux)</span>
                <span>R+9 (10 niveaux)</span>
                <span>R+24 (25 niveaux)</span>
              </div>
            </div>

            {/* 3. Capacity / Passengers */}
            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider font-mono block mb-2.5 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400" />
                3. Capacité & Charge Utile
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: '4pers', label: '4 Pers (320 kg)' },
                  { id: '6pers', label: '6 Pers (450 kg)' },
                  { id: '8pers', label: '8 Pers (630 kg)' },
                  { id: '13pers', label: '13 Pers (1000 kg)' },
                  { id: '16pers', label: '16 Pers (1250 kg)' },
                  { id: 'cargo3000', label: 'Fret (3000 kg)' },
                ].map((cap) => (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setCapacityKey(cap.id)}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      capacityKey === cap.id
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {cap.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Speed */}
            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider font-mono block mb-2.5 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-amber-400" />
                4. Vitesse Nominale
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: '1.0ms', label: '1.00 m/s (Standard)' },
                  { id: '1.5ms', label: '1.50 m/s (Rapide)' },
                  { id: '1.75ms', label: '1.75 m/s (Express)' },
                  { id: '2.5ms', label: '2.50 m/s (Tours R+15)' },
                ].map((sp) => (
                  <button
                    key={sp.id}
                    type="button"
                    onClick={() => setSpeedKey(sp.id)}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                      speedKey === sp.id
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {sp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Options Checkboxes */}
            <div className="pt-2 border-t border-slate-800 space-y-3">
              <label className="text-xs font-bold text-white uppercase tracking-wider font-mono block">
                5. Options de Sécurité & Équipements Climat Conakry
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-amber-400/50">
                  <input
                    type="checkbox"
                    checked={hasARD}
                    onChange={(e) => setHasARD(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-amber-400 cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-white block">Secours ARD Anti-Coupure EDG</span>
                    <span className="text-[10px] text-amber-400">Recommandé pour la Guinée</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-amber-400/50">
                  <input
                    type="checkbox"
                    checked={hasAC}
                    onChange={(e) => setHasAC(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-amber-400 cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-white block">Climatisation Cabine Intégrée</span>
                    <span className="text-[10px] text-slate-400">Confort thermique tropical</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-amber-400/50">
                  <input
                    type="checkbox"
                    checked={hasGoldMirror}
                    onChange={(e) => setHasGoldMirror(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-amber-400 cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-white block">Finition Inox Titane Doré Luxe</span>
                    <span className="text-[10px] text-slate-400">Luxe & anti-corrosion</span>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer hover:border-amber-400/50">
                  <input
                    type="checkbox"
                    checked={hasMaintenanceYear}
                    onChange={(e) => setHasMaintenanceYear(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 bg-slate-900 border-slate-700 focus:ring-amber-400 cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-white block">1 An de Maintenance Offert</span>
                    <span className="text-[10px] text-emerald-400">Garantie 24/7 Conakry</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Price Summary & Submission */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            {/* Price Display */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-center relative overflow-hidden">
              <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
                Estimation Budgétaire Clé en Main
              </div>
              
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight my-2">
                ~ {estimatedPriceGNF.toLocaleString('fr-FR')} <span className="text-amber-400 text-lg">GNF</span>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1 border-t border-slate-800/80">
                <span>≈ {estimatedEUR.toLocaleString('fr-FR')} €</span>
                <span>·</span>
                <span>≈ {estimatedUSD.toLocaleString('fr-FR')} $</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-2">
                *Comprend matériel, expédition, dédouanement port Conakry, montage & mise en service.
              </div>
            </div>

            {/* Spec Checklist */}
            <div className="space-y-2 text-xs font-mono bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-slate-300">
                <span>Bâtiment :</span>
                <span className="font-bold text-white uppercase">{buildingType}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Niveaux :</span>
                <span className="font-bold text-amber-400">{floorsCount} Arrêts</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Capacité :</span>
                <span className="font-bold text-white">{capacityKey}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Vitesse :</span>
                <span className="font-bold text-white">{speedKey}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Secours ARD :</span>
                <span className={hasARD ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {hasARD ? 'Activé (Batterie)' : 'Non'}
                </span>
              </div>
            </div>

            {/* Lead Form */}
            {isSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-5 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Demande de devis transmise avec succès !</h4>
                <p className="text-xs text-slate-300">
                  Notre équipe d'ingénieurs à Dabondy Matoto vous contactera sous 2 heures ouvrées pour valider l'étude de faisabilité.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-amber-400 underline font-semibold cursor-pointer"
                >
                  Effectuer un autre calcul
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Votre Nom & Prénom / Entreprise *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="Téléphone / WhatsApp (+224...) *"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    placeholder="Email professionnel"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Localisation du chantier (ex: Kipé, Kaloum, Dixinn, Kamsar...)"
                    value={clientLocation}
                    onChange={(e) => setClientLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm rounded-lg shadow-xl shadow-amber-400/20 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Générer Mon Devis Détaillé</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-emerald-950/30"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Envoyer par WhatsApp (+224)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
