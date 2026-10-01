import React, { useState, useMemo } from 'react';
import { 
  PRODUCTS, 
  Product 
} from '../data/products';
import { 
  Search, 
  Layers, 
  Gauge, 
  Users, 
  Zap, 
  ShieldCheck, 
  Check, 
  FileText, 
  ArrowRight, 
  X, 
  Phone, 
  MessageSquare,
  Building,
  Maximize2
} from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductForQuote: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'Tous les Appareils' },
    { id: 'residentiel', label: 'Résidentiel MRL' },
    { id: 'panoramique', label: 'Panoramique Verre' },
    { id: 'villa', label: 'Villas & Privatif' },
    { id: 'commercial', label: 'Bureaux & Banques' },
    { id: 'medical', label: 'Hôpitaux & Cliniques' },
    { id: 'industriel', label: 'Monte-Charges & Fret' },
    { id: 'escalator', label: 'Escaliers Mécaniques' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchQuery = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.capacity.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalogue" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3 font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>GAMME COMPLÈTE & NORMES EUROPÉENNES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
              Catalogue Produits & Équipements d'Élévation
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Solutions d'ascenseurs neufs certifiés ISO 9001 et EN 81-20/50, avec motorisation Gearless synchrone adaptée aux réalités climatiques et électriques de Conakry.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher modèle, charge, usage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">
            <p className="text-slate-400 text-sm mb-4">Aucun appareil ne correspond à votre recherche "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-lg"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-400 font-mono text-[11px] font-bold px-2.5 py-1 rounded">
                    {product.categoryLabel}
                  </div>

                  {/* Highlight pill */}
                  <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-200 font-medium truncate">
                    {product.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Key specs strip */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-800 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{product.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Gauge className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{product.speed}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="px-3 py-2.5 sm:py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                      <span>Fiche Détail</span>
                    </button>

                    <button
                      onClick={() => onSelectProductForQuote(product)}
                      className="px-3 py-2.5 sm:py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/20 transition-colors cursor-pointer"
                    >
                      <span>Devis</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Detail Modal */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg border border-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="text-amber-400 text-xs font-mono font-bold uppercase mb-1">
                  {activeModalProduct.categoryLabel}
                </div>
                <h3 className="text-2xl font-black text-white font-display">
                  {activeModalProduct.name}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeModalProduct.description}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 space-y-2.5 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Capacité nominale :</span>
                  <span className="text-white font-bold">{activeModalProduct.capacity}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Vitesse de déplacement :</span>
                  <span className="text-amber-400 font-bold">{activeModalProduct.speed}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Course & Niveaux :</span>
                  <span className="text-white">{activeModalProduct.floors}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Type de motorisation :</span>
                  <span className="text-white">{activeModalProduct.motorType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Alimentation électrique :</span>
                  <span className="text-white">{activeModalProduct.powerSupply}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Normes de conformité :</span>
                  <span className="text-emerald-400">{activeModalProduct.standardCompliance}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Dimensions de gaine :</span>
                  <span className="text-white">{activeModalProduct.dimensions.shaft}</span>
                </div>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-3">
                  Équipements & Systèmes de Sécurité Inclus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeModalProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions inside modal */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`https://wa.me/224624069022?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20le%20mod%C3%A8le%20${encodeURIComponent(activeModalProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp (+224)</span>
                </a>

                <button
                  onClick={() => {
                    const prod = activeModalProduct;
                    setActiveModalProduct(null);
                    onSelectProductForQuote(prod);
                  }}
                  className="px-4 sm:px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-lg shadow-lg shadow-amber-400/20 transition-all cursor-pointer whitespace-nowrap"
                >
                  Calculer le Devis
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
