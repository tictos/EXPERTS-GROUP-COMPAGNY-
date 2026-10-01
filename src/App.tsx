/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { CabinConfigurator } from './components/CabinConfigurator';
import { ElevatorSimulator } from './components/ElevatorSimulator';
import { ServicesSection } from './components/ServicesSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Product } from './data/products';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [customConfigNotes, setCustomConfigNotes] = useState<string>('');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('');

  const scrollToQuote = () => {
    const el = document.getElementById('calculateur');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConfigFromCabin = (configSummary: string) => {
    setCustomConfigNotes(configSummary);
    scrollToQuote();
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProductForQuote(product.name);
    setCustomConfigNotes(`Modèle sélectionné : ${product.name} (${product.capacity} - ${product.speed})`);
    scrollToQuote();
  };

  const handleSelectMaintenancePlan = (planName: string) => {
    setCustomConfigNotes(`Demande de souscription au : ${planName}`);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* 3-Zone Header Contract */}
      <Header 
        onOpenQuote={scrollToQuote} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenQuote={scrollToQuote} 
          onExploreCatalog={scrollToCatalog} 
        />

        {/* Product Catalog */}
        <ProductCatalog 
          onSelectProductForQuote={handleSelectProduct} 
        />

        {/* Interactive Cabin Configurator */}
        <CabinConfigurator 
          onSendConfigToQuote={handleConfigFromCabin} 
        />

        {/* Interactive Elevator & ARD Safety Simulator */}
        <ElevatorSimulator />

        {/* Services & Maintenance */}
        <ServicesSection 
          onSelectPlan={handleSelectMaintenancePlan} 
        />

        {/* Quote Calculator */}
        <QuoteCalculator 
          initialConfig={customConfigNotes} 
          initialProduct={selectedProductForQuote}
        />

        {/* Guinea References & FAQ */}
        <ProjectsSection />

        {/* Contact & Localisation Dabondy Matoto */}
        <ContactSection />
      </main>

      {/* Floating Action Buttons for Guinea (Official WhatsApp & Direct Call) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href="https://wa.me/224624069022?text=Bonjour%20EXPERTS%20GROUP%20COMPAGNY,%20je%20souhaite%20des%20informations%20sur%20vos%20ascenseurs."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 border-2 border-slate-900 shadow-emerald-950/50"
          title="Discuter sur WhatsApp"
          aria-label="WhatsApp (+224) 624 06 90 22"
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-7 h-7 text-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <a
          href="tel:+224624069022"
          className="w-13 h-13 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 border-2 border-slate-900 shadow-amber-950/50"
          title="Appel d'urgence 24/7"
          aria-label="Appeler (+224) 624 06 90 22"
        >
          <Phone className="w-6 h-6 fill-slate-950" />
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
