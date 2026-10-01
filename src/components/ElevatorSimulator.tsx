import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUp, 
  ArrowDown, 
  ZapOff, 
  BatteryCharging, 
  AlertTriangle, 
  DoorClosed, 
  DoorOpen, 
  RotateCcw,
  Gauge,
  Users,
  ShieldCheck,
  Play
} from 'lucide-react';

const FLOORS = [
  { id: 4, name: 'Penthouse (R+4)', height: 16 },
  { id: 3, name: 'Étage 3 - Bureaux Direction', height: 12 },
  { id: 2, name: 'Étage 2 - Espace Résidentiel', height: 8 },
  { id: 1, name: 'Étage 1 - Mezzanine & Accueil', height: 4 },
  { id: 0, name: 'RDC - Hall Principal Dabondy', height: 0 }
];

export const ElevatorSimulator: React.FC = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [targetFloor, setTargetFloor] = useState<number>(0);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [direction, setDirection] = useState<'up' | 'down' | 'idle'>('idle');
  const [doorsOpen, setDoorsOpen] = useState<boolean>(false);
  const [isPowerCut, setIsPowerCut] = useState<boolean>(false);
  const [ardActive, setArdActive] = useState<boolean>(false);
  const [passengersCount, setPassengersCount] = useState<number>(4);
  const [statusMessage, setStatusMessage] = useState<string>('Ascenseur prêt en stationnement au RDC');
  const [overload, setOverload] = useState<boolean>(false);

  // Speed calculation
  const speed = isMoving ? '1.50 m/s' : '0.00 m/s';
  const weightKg = passengersCount * 75;
  const maxWeight = 630; // 8 persons max

  // Move elevator logic
  const handleCallFloor = (floorId: number) => {
    if (isPowerCut) {
      setStatusMessage('Alimentation coupée : ARD gère la sécurité.');
      return;
    }
    if (overload) {
      setStatusMessage('ALERTE SURCHARGE : Veuillez réduire le nombre de passagers.');
      return;
    }
    if (doorsOpen) {
      setDoorsOpen(false);
    }
    if (floorId === currentFloor) {
      setDoorsOpen(true);
      setStatusMessage(`Déjà au ${FLOORS.find(f => f.id === floorId)?.name}`);
      return;
    }

    setTargetFloor(floorId);
    setIsMoving(true);
    setDirection(floorId > currentFloor ? 'up' : 'down');
    setStatusMessage(`En déplacement vers ${FLOORS.find(f => f.id === floorId)?.name}...`);

    const distance = Math.abs(floorId - currentFloor);
    const travelTime = distance * 1500;

    setTimeout(() => {
      setCurrentFloor(floorId);
      setIsMoving(false);
      setDirection('idle');
      setStatusMessage(`Arrivé au ${FLOORS.find(f => f.id === floorId)?.name}. Ouverture automatique.`);
      setDoorsOpen(true);
    }, travelTime);
  };

  // Simulate EDG Power Outage and ARD Auto Rescue
  const handleTriggerPowerCut = () => {
    setIsPowerCut(true);
    setIsMoving(false);
    setDoorsOpen(false);
    setStatusMessage('⚠️ COUPURE DE COURANT SECTEUR EDG DÉTECTÉE !');

    // After 1 second, ARD kicks in
    setTimeout(() => {
      setArdActive(true);
      setStatusMessage('🔋 DISPOSITIF ARD ACTIVÉ : Rapatriement de secours vers le niveau le plus proche...');

      setTimeout(() => {
        // Safe level reached
        setDoorsOpen(true);
        setStatusMessage('✅ NIVEAU ATTEINT PAR BATTERIE ARD : Portes ouvertes pour évacuation sécurisée.');
      }, 2200);
    }, 1000);
  };

  const handleRestorePower = () => {
    setIsPowerCut(false);
    setArdActive(false);
    setDoorsOpen(false);
    setStatusMessage('Courant secteur rétabli. Système réinitialisé en mode normal.');
  };

  const handleToggleDoors = () => {
    if (isMoving) return;
    setDoorsOpen(!doorsOpen);
  };

  const handleAddPassenger = () => {
    if (passengersCount >= 10) return;
    const next = passengersCount + 1;
    setPassengersCount(next);
    if (next * 75 > maxWeight) {
      setOverload(true);
      setStatusMessage('⚠️ ALARME SURCHARGE : Poids supérieur à 630 kg !');
    }
  };

  const handleRemovePassenger = () => {
    if (passengersCount <= 0) return;
    const next = passengersCount - 1;
    setPassengersCount(next);
    if (next * 75 <= maxWeight) {
      setOverload(false);
    }
  };

  return (
    <section id="simulateur" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3 font-mono">
            <Gauge className="w-3.5 h-3.5" />
            <span>DÉMONSTRATEUR TECHNIQUE EN DIRECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            Simulateur d'Ascenseur MRL & Sécurité ARD
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Testez en temps réel le comportement de nos ascenseurs gearless, la réactivité aux appels d'étages et le système de sauvetage automatique sur batterie en cas de coupure de courant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Lift Shaft (Left Column) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Ambient indicator top bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
              <span className="text-slate-400">Gaine d'ascenseur (MRL Shaft)</span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                isPowerCut ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                {isPowerCut ? '⚡ COUPURE EDG' : '🟢 RÉSEAU STABLE'}
              </span>
            </div>

            {/* The Shaft with Floors */}
            <div className="relative my-4 h-[440px] bg-slate-900/80 rounded-xl border border-slate-800 flex overflow-hidden">
              {/* Floor Labels Column */}
              <div className="w-1/3 border-r border-slate-800 flex flex-col justify-between py-2 px-3 z-10 bg-slate-950/60">
                {FLOORS.map((floor) => {
                  const isCurrent = currentFloor === floor.id;
                  const isTarget = targetFloor === floor.id && isMoving;
                  return (
                    <div 
                      key={floor.id}
                      className={`text-xs py-1.5 px-2 rounded flex items-center justify-between transition-colors ${
                        isCurrent 
                          ? 'bg-amber-400 text-slate-950 font-bold shadow-md' 
                          : isTarget 
                          ? 'bg-amber-500/20 text-amber-300 font-semibold animate-pulse' 
                          : 'text-slate-400'
                      }`}
                    >
                      <span className="font-mono">{floor.id === 0 ? 'RDC' : `Étage ${floor.id}`}</span>
                      {isCurrent && <span className="text-[10px] uppercase">Ici</span>}
                    </div>
                  );
                })}
              </div>

              {/* Cabin Vertical Shaft */}
              <div className="relative flex-1 flex items-center justify-center p-3 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                {/* Suspension Ropes */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 flex justify-around pointer-events-none opacity-40">
                  <div className="w-0.5 h-full bg-slate-500" />
                  <div className="w-0.5 h-full bg-slate-500" />
                  <div className="w-0.5 h-full bg-slate-500" />
                </div>

                {/* Moving Elevator Cabin */}
                <div 
                  className={`absolute w-44 h-24 rounded-lg border-2 transition-all duration-1000 ease-in-out flex flex-col justify-between p-2 shadow-2xl z-20 ${
                    isPowerCut && !ardActive
                      ? 'bg-slate-950 border-red-500/60' 
                      : ardActive
                      ? 'bg-amber-950/80 border-amber-400 shadow-[0_0_20px_#f59e0b40]'
                      : 'bg-slate-800 border-amber-400/80'
                  }`}
                  style={{
                    bottom: `${(currentFloor / 4) * 330 + 10}px`
                  }}
                >
                  {/* Cabin Top Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono border-b border-slate-700/60 pb-1">
                    <span className="text-amber-400 font-bold">
                      {direction === 'up' ? '▲ Montée' : direction === 'down' ? '▼ Descente' : '● Arrêt'}
                    </span>
                    <span className="text-white">
                      {currentFloor === 0 ? 'RDC' : `ET. ${currentFloor}`}
                    </span>
                  </div>

                  {/* Cabin Doors Visual Simulation */}
                  <div className="relative flex-1 my-1 bg-slate-950 rounded flex items-center justify-center overflow-hidden border border-slate-700">
                    {/* Left Door */}
                    <div 
                      className={`absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-slate-600 to-slate-400 border-r border-slate-700 transition-transform duration-500 ${
                        doorsOpen ? '-translate-x-full' : 'translate-x-0'
                      }`} 
                    />
                    {/* Right Door */}
                    <div 
                      className={`absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-slate-600 to-slate-400 border-l border-slate-700 transition-transform duration-500 ${
                        doorsOpen ? 'translate-x-full' : 'translate-x-0'
                      }`} 
                    />
                    
                    {/* Inside illuminated view when doors open */}
                    <div className="text-[10px] text-amber-300 font-bold text-center px-1">
                      {doorsOpen ? `${passengersCount} Passagers` : ''}
                    </div>
                  </div>

                  {/* Cabin Status Bottom Bar */}
                  <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-0.5">
                    <span>{doorsOpen ? 'Portes Ouvertes' : 'Portes Fermées'}</span>
                    <span>{weightKg} kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Telemetry Bar */}
            <div className="grid grid-cols-3 gap-2 bg-slate-900 border border-slate-800 rounded-xl p-3 text-center text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px]">Vitesse</span>
                <span className="text-amber-400 font-bold">{speed}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Charge Utile</span>
                <span className={`font-bold ${overload ? 'text-red-400 animate-pulse' : 'text-slate-200'}`}>
                  {weightKg} / {maxWeight} kg
                </span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Passagers</span>
                <span className="text-slate-200 font-bold">{passengersCount} pers.</span>
              </div>
            </div>
          </div>

          {/* Control Console (Right Column) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-2xl space-y-6">
            {/* Status Screen */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400/80 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Moniteur Système en Direct
              </div>
              <div className="text-sm font-semibold text-white font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 text-amber-300">
                {statusMessage}
              </div>
            </div>

            {/* Call Floor Buttons */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block mb-3">
                1. Commander l'Ascenseur (Appels Paliers)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {FLOORS.map((floor) => (
                  <button
                    key={floor.id}
                    onClick={() => handleCallFloor(floor.id)}
                    disabled={isMoving}
                    className={`py-3 px-2 rounded-xl font-mono text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                      currentFloor === floor.id
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-400/30'
                        : targetFloor === floor.id && isMoving
                        ? 'bg-slate-800 text-amber-400 border-amber-400 animate-pulse'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:border-amber-400/60 hover:text-white'
                    } disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    <span className="text-sm">{floor.id === 0 ? 'RDC' : `Étage ${floor.id}`}</span>
                    <span className="text-[10px] opacity-75">{floor.id === 4 ? 'Penthouse' : `${floor.height}m`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Passenger Load Simulator */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Gestion du Pesage de Cabine</span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Capacité standard : 8 pers (630 kg)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRemovePassenger}
                  disabled={passengersCount <= 0}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold disabled:opacity-50 cursor-pointer"
                >
                  - 1 Passager
                </button>
                <div className="flex-1 bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      overload ? 'bg-red-500' : 'bg-gradient-to-r from-emerald-500 to-amber-400'
                    }`}
                    style={{ width: `${Math.min(100, (weightKg / maxWeight) * 100)}%` }}
                  />
                </div>
                <button
                  onClick={handleAddPassenger}
                  disabled={passengersCount >= 10}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold disabled:opacity-50 cursor-pointer"
                >
                  + 1 Passager
                </button>
              </div>
            </div>

            {/* Emergency & Guinea Grid Outage Simulation (ARD Test) */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/20 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase">
                  <BatteryCharging className="w-4 h-4" />
                  <span>Test Réel Système de Secours ARD (Anti-Coupure EDG)</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Testez comment nos ascenseurs réagissent instantanément lors des coupures d'électricité fréquentes à Conakry sans intervention manuelle.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {!isPowerCut ? (
                  <button
                    onClick={handleTriggerPowerCut}
                    className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-lg flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all cursor-pointer"
                  >
                    <ZapOff className="w-4 h-4" />
                    <span>Simuler Coupure de Courant EDG</span>
                  </button>
                ) : (
                  <button
                    onClick={handleRestorePower}
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Rétablir le Courant Secteur</span>
                  </button>
                )}

                <button
                  onClick={handleToggleDoors}
                  disabled={isMoving}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs rounded-lg flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {doorsOpen ? <DoorClosed className="w-4 h-4 text-amber-400" /> : <DoorOpen className="w-4 h-4 text-amber-400" />}
                  <span>{doorsOpen ? 'Fermer Portes' : 'Ouvrir Portes'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
