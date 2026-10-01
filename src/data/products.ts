import { IMAGES } from '../assets/images';

export interface Product {
  id: string;
  name: string;
  category: 'residentiel' | 'commercial' | 'panoramique' | 'medical' | 'industriel' | 'villa' | 'escalator';
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  capacity: string;
  speed: string;
  floors: string;
  motorType: string;
  powerSupply: string;
  standardCompliance: string;
  features: string[];
  dimensions: {
    shaft: string;
    cabin: string;
    doorOpening: string;
  };
  suitableFor: string[];
  highlight: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'mrl-smart-resi',
    name: 'Ascenseur MRL Résidentiel Smart-Glide',
    category: 'residentiel',
    categoryLabel: 'Résidentiel & Immeubles',
    tagline: 'Technologie sans salle des machines (MRL) - Compact & Silencieux',
    description: 'Conçu spécialement pour les immeubles résidentiels modernes à Conakry. Équipé d\'un moteur synchrone sans réducteur (Gearless) à aimants permanents offrant jusqu\'à 40% d\'économie d\'énergie et une sécurité maximale en cas de coupure EDG avec rapatriement automatique (ARD).',
    image: IMAGES.heroModernMrl,
    capacity: '450 kg à 1000 kg (6 à 13 Personnes)',
    speed: '1.0 m/s à 1.75 m/s',
    floors: 'Jusqu\'à 24 niveaux (R+23)',
    motorType: 'Moteur Gearless synchrone VVVF sans salle des machines',
    powerSupply: '380V Triphasé + Stabilisateur intégré anti-variation',
    standardCompliance: 'Normes Européennes EN 81-20 / EN 81-50 & ISO 9001:2015',
    features: [
      'Dispositif ARD (Automatic Rescue Device) sur batterie de secours',
      'Portes télescopiques ou centrales en acier inoxydable 304L anti-corrosion marine',
      'Éclairage LED basse consommation avec mise en veille automatique',
      'Boutonnerie palière et cabine avec afficheur LCD couleur et Braille',
      'Système de pesage électronique anti-surcharge avec alarme sonore',
      'Rideau infrarouge de sécurité pleine hauteur à 128 faisceaux'
    ],
    dimensions: {
      shaft: '1600 x 1700 mm (pour 630 kg)',
      cabin: '1100 x 1400 x 2200 mm',
      doorOpening: '800 x 2100 mm (Ouverture centrale/latérale)'
    },
    suitableFor: ['Immeubles résidentiels R+3 à R+20', 'Copropriétés privées', 'Résidences d\'habitation'],
    highlight: 'Idéal pour le climat et le réseau électrique de Conakry'
  },
  {
    id: 'panoramic-elite-360',
    name: 'Ascenseur Panoramique Élite Glass 360°',
    category: 'panoramique',
    categoryLabel: 'Panoramique & Atrium',
    tagline: 'Design architectural spectaculaire en verre trempé sécurit feuilleté',
    description: 'Une véritable attraction visuelle valorisant le standing des hôtels, sièges d\'entreprises et centres commerciaux de Conakry. Cabine circulaire, semi-circulaire ou polygonale en verre haute résistance avec vue imprenable.',
    image: IMAGES.panoramicGlass,
    capacity: '630 kg à 1600 kg (8 à 21 Personnes)',
    speed: '1.0 m/s à 2.5 m/s',
    floors: 'Jusqu\'à 30 niveaux',
    motorType: 'Traction Gearless haute précision avec suspension silencieuse',
    powerSupply: '380V Triphasé / 50Hz',
    standardCompliance: 'EN 81-20/50 & Sécurité vitrage EN 12600',
    features: [
      'Verre feuilleté trempé haute transparence anti-UV et anti-chaleur',
      'Structure portante en acier inoxydable poli miroir ou brossé',
      'Éclairage d\'ambiance LED périphérique personnalisable (Chaud/Froid/RGB)',
      'Plancher en marbre ou granit composite ultra résistant',
      'Ventilation silencieuse et climatisation intégrée en option'
    ],
    dimensions: {
      shaft: 'Sur mesure (Gaine maçonnée ou pylône autoportant vitré)',
      cabin: '1350 x 1400 x 2300 mm',
      doorOpening: '900 x 2100 mm en verre sécurit'
    },
    suitableFor: ['Hôtels étoilés', 'Centres commerciaux & Malls', 'Tours d\'affaires', 'Atriums'],
    highlight: 'Valorise l\'architecture et l\'attractivité du bâtiment'
  },
  {
    id: 'villa-prestige-home',
    name: 'Ascenseur Privatif Villa Prestige',
    category: 'villa',
    categoryLabel: 'Villas & Résidences Privées',
    tagline: 'Confort absolu, ultra-silencieux et sur-mesure pour villas de luxe',
    description: 'Apportez prestige, accessibilité et commodité à votre villa ou duplex à Kipé, Camayenne ou Lambanyi. Fonctionne sur courant monophasé 220V ou triphasé avec une fosse réduite de seulement 150 à 250 mm.',
    image: IMAGES.luxuryVilla,
    capacity: '300 kg à 450 kg (4 à 6 Personnes)',
    speed: '0.4 m/s à 0.6 m/s',
    floors: 'RDC à R+4 (2 à 5 niveaux)',
    motorType: 'Électrique Gearless basse consommation (1.1 kW à 2.2 kW)',
    powerSupply: '220V Monophasé standard ou 380V Triphasé',
    standardCompliance: 'Directive Machines 2006/42/CE & EN 81-41',
    features: [
      'Fosse ultra-réduite (pas besoin de gros travaux de génie civil)',
      'Consommation équivalente à un réfrigérateur domestique',
      'Finitions d\'exception : boiseries fines, miroirs dorés, marbre ou cuir',
      'Batterie de secours autonome en cas de coupure d\'électricité',
      'Fonctionnement ultrasilencieux (< 48 dB)'
    ],
    dimensions: {
      shaft: '1200 x 1300 mm (encombrement réduit)',
      cabin: '900 x 1050 x 2100 mm',
      doorOpening: '750 x 2000 mm (Porte automatique ou battante vitrée)'
    },
    suitableFor: ['Villas de maître', 'Duplex & Triplex privés', 'Résidences de standing'],
    highlight: 'Alimentation 220V standard - Faible encombrement'
  },
  {
    id: 'commercial-heavy-duty',
    name: 'Ascenseur Tertiaire Haute Fréquence Pro',
    category: 'commercial',
    categoryLabel: 'Bureaux & Banques',
    tagline: 'Performance et trafic intensif pour tours d\'affaires et ministères',
    description: 'Idéal pour les immeubles de bureaux et institutions à Kaloum et Almamya. Conçu pour un trafic dense ininterrompu avec gestion intelligente des appels en groupe (Duplex, Triplex, Quadruplex).',
    image: IMAGES.heroModernMrl,
    capacity: '1000 kg à 2000 kg (13 à 26 Personnes)',
    speed: '1.6 m/s à 3.0 m/s',
    floors: 'Jusqu\'à 35 niveaux',
    motorType: 'Synchrone à régénération d\'énergie (Energy Recovery System)',
    powerSupply: '380V / 400V Triphasé',
    standardCompliance: 'EN 81-20/50 & ISO 9001:2015',
    features: [
      'Algorithme de répartition intelligente des passagers pour réduire l\'attente',
      'Contrôle d\'accès sécurisé par badge RFID, QR Code ou biométrie',
      'Écran multimédia d\'information et de communication d\'entreprise',
      'Structure renforcée anti-vandale et inox texturé résistant aux rayures'
    ],
    dimensions: {
      shaft: '1900 x 2100 mm',
      cabin: '1400 x 1600 x 2300 mm',
      doorOpening: '1000 x 2100 mm'
    },
    suitableFor: ['Sièges de banques', 'Ministères et administrations', 'Tours de bureaux'],
    highlight: 'Gestion de trafic haute cadence et contrôle d\'accès VIP'
  },
  {
    id: 'hospital-bed-lift',
    name: 'Ascenseur Hospitalier & Clinique (Monte-Brancard)',
    category: 'medical',
    categoryLabel: 'Hôpitaux & Cliniques',
    tagline: 'Précision millimétrique d\'arrêt et cabine spacieuse pour lits médicalisés',
    description: 'Spécifiquement conçu pour les centres hospitaliers, cliniques et dispensaires en Guinée. Permet le transport aisé de brancards, lits médicalisés, appareils de réanimation et personnel soignant avec un nivellement au millimètre près.',
    image: IMAGES.elevatorTechnicians,
    capacity: '1600 kg à 2500 kg',
    speed: '1.0 m/s à 1.75 m/s',
    floors: 'Jusqu\'à 18 niveaux',
    motorType: 'Gearless avec contrôle vectoriel d\'accélération ultra-douce',
    powerSupply: '380V Triphasé avec raccordement direct au groupe électrogène',
    standardCompliance: 'EN 81-20, EN 81-70 (Accessibilité) & Normes Sanitaires',
    features: [
      'Nivellement parfait avec le sol du couloir (zéro ressaut pour les brancards)',
      'Revêtement intérieur antibactérien et lavable avec plinthes de protection',
      'Fonction d\'appel d\'urgence prioritaire médical (Code Bleu)',
      'Pare-chocs antichoc en inox sur tout le périmètre de la cabine'
    ],
    dimensions: {
      shaft: '2300 x 2900 mm',
      cabin: '1400 x 2400 x 2300 mm (profondeur spéciale lit)',
      doorOpening: '1200 x 2100 mm'
    },
    suitableFor: ['Centres hospitaliers universitaires', 'Cliniques privées', 'Centres de radiologie'],
    highlight: 'Priorité médicale d\'urgence & arrêt sans secousse'
  },
  {
    id: 'freight-heavy-cargo',
    name: 'Monte-Charge Industriel & Monte-Voiture',
    category: 'industriel',
    categoryLabel: 'Industrie & Monte-Charges',
    tagline: 'Robuste, puissant et endurant pour entrepôts et concessions automobiles',
    description: 'Solutions d\'élévation pour charges lourdes destinées aux zones industrielles, entrepôts de stockage du Grand Marché de Dabondy, ports et parkings à étages à Conakry.',
    image: IMAGES.elevatorTechnicians,
    capacity: '1000 kg à 5000 kg (Monte-Voiture jusqu\'à 5 tonnes)',
    speed: '0.3 m/s à 0.63 m/s',
    floors: 'Jusqu\'à 10 niveaux',
    motorType: 'Traction hydraulique robuste ou treuil électrique renforcé',
    powerSupply: '380V Triphasé renforcé',
    standardCompliance: 'EN 81-31 & Directive Machines',
    features: [
      'Plancher en tôle larmée antidérapante haute résistance',
      'Portes renforcées à ouverture verticale guillotine ou battante',
      'Structure métallique mécano-soudée pour supporter les chariots élévateurs',
      'Système de guidage lourd résistant aux chocs latéraux'
    ],
    dimensions: {
      shaft: '2800 x 3200 mm (selon tonnage)',
      cabin: '2000 x 2600 x 2400 mm',
      doorOpening: '1800 x 2200 mm'
    },
    suitableFor: ['Entrepôts logistiques', 'Usines agroalimentaires', 'Garages & Parkings', 'Supermarchés'],
    highlight: 'Charge utile jusqu\'à 5 000 kg - Structure ultra-renforcée'
  },
  {
    id: 'escalator-pro-flow',
    name: 'Escaliers Mécaniques & Trottoirs Roulants',
    category: 'escalator',
    categoryLabel: 'Escaliers Mécaniques',
    tagline: 'Mobilité continue et fluide pour centres commerciaux et gares/aéroports',
    description: 'Systèmes de transport continu haut de gamme pour gérer d\'importants flux de visiteurs. Disponibles en inclinaisons 30° et 35° avec éclairage LED sous les marches et mains courantes antibactériennes.',
    image: IMAGES.panoramicGlass,
    capacity: 'Jusqu\'à 9000 personnes / heure',
    speed: '0.5 m/s (avec mode ralenti éco automatique)',
    floors: 'Dénivelé de 2.0 m à 8.0 m par volée',
    motorType: 'Entraînement VVVF à haut rendement énergétique',
    powerSupply: '380V Triphasé',
    standardCompliance: 'Norme européenne EN 115-1',
    features: [
      'Détecteur radar de présence pour passage automatique en mode veille éco',
      'Marches en aluminium coulé sous pression avec lignes de délimitation jaunes',
      'Système de lubrification automatique des chaînes de traction',
      'Arrêts d\'urgence multiples et sécurité anti-pincement aux plinthes'
    ],
    dimensions: {
      shaft: 'Largeur de marche : 800 mm ou 1000 mm',
      cabin: 'Inclinaison standard 30° ou 35°',
      doorOpening: 'N/A'
    },
    suitableFor: ['Centres commerciaux', 'Aéroports', 'Supermarchés & Grands magasins'],
    highlight: 'Économie d\'énergie intelligente avec détection de passagers'
  }
];

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Vente & Ingénierie sur-mesure',
    tagline: 'Étude de faisabilité et dimensionnement technique',
    description: 'Notre bureau d\'études basé à Conakry analyse vos plans architecturaux, calcule le trafic prévisionnel et vous recommande l\'appareil parfaitement dimensionné pour votre bâtiment.',
    points: [
      'Plans d\'implantation 2D/3D et réservations de gaine',
      'Calcul du trafic vertical et dimensionnement de gaine',
      'Sélection personnalisée des finitions et matériaux',
      'Devis clair, transparent et sans frais cachés'
    ]
  },
  {
    number: '02',
    title: 'Installation & Mise en service certifiée',
    tagline: 'Montage selon les normes EN 81-20/50 et ISO 9001',
    description: 'Nos équipes d\'ingénieurs et techniciens certifiés assurent la réception du matériel, le montage mécanique, le raccordement électrique et les tests d\'homologation sous charge réelle.',
    points: [
      'Respect strict du calendrier de chantier et des règles de sécurité',
      'Équipes formées aux dernières technologies Gearless et MRL',
      'Intégration des dispositifs de secours pour coupures électriques',
      'Contrôle technique et remise du certificat de conformité'
    ]
  },
  {
    number: '03',
    title: 'Maintenance Préventive & Dépannage 24/7',
    tagline: 'Intervention rapide partout à Conakry et en province',
    description: 'Un ascenseur en panne paralyse un immeuble. Nous assurons des visites préventives mensuelles et un service d\'astreinte 24h/24 et 7j/7 avec un temps d\'intervention garanti.',
    points: [
      'Astreinte technique d\'urgence disponible 24h/24 au (+224) 624 06 90 22',
      'Stock permanent de pièces de rechange d\'origine à Dabondy Matoto',
      'Visites de contrôle mensuelles, graissage et réglages de sécurité',
      'Rapports d\'intervention numérisés et suivi d\'historique'
    ]
  },
  {
    number: '04',
    title: 'Modernisation & Mise aux Normes',
    tagline: 'Redonnez une seconde jeunesse à vos installations existantes',
    description: 'Rénovation complète ou partielle de vos ascenseurs vétustes : remplacement de l\'armoire de commande par une technologie VVVF moderne, nouvelle cabine, motorisation plus économe.',
    points: [
      'Audit technique complet de l\'installation existante',
      'Réduction de la consommation électrique jusqu\'à 50%',
      'Amélioration du confort acoustique et de la précision d\'arrêt',
      'Mise en conformité avec les standards de sécurité actuels'
    ]
  }
];

export interface MaintenancePlan {
  id: string;
  name: string;
  tagline: string;
  target: string;
  isPopular?: boolean;
  priceGNF: string;
  priceEUR: string;
  features: string[];
}

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    id: 'standard',
    name: 'Contrat Standard',
    tagline: 'Essentiel pour la conformité et la sécurité légale',
    target: 'Petits immeubles résidentiels et copropriétés',
    priceGNF: '1 200 000 GNF / mois',
    priceEUR: '~ 130 € / mois',
    features: [
      '1 Visite d\'inspection préventive mensuelle',
      'Graissage, nettoyage mécanique et contrôle des sécurités',
      'Rapport technique après chaque passage',
      'Assistance dépannage aux heures ouvrables (8h - 18h)',
      'Pièces de rechange facturées sur devis préférentiel'
    ]
  },
  {
    id: 'serenite',
    name: 'Contrat Sérénité Pro',
    tagline: 'La tranquillité d\'esprit avec dépannage prioritaire',
    target: 'Bureaux d\'entreprises, hôtels et résidences de standing',
    isPopular: true,
    priceGNF: '2 500 000 GNF / mois',
    priceEUR: '~ 270 € / mois',
    features: [
      '2 Visites de maintenance préventive par mois',
      'Dépannage d\'urgence 7j/7 avec intervention en moins de 45 minutes',
      'Petites fournitures et consommables inclus (ampoules, contacteurs)',
      'Ligne téléphonique dédiée directe avec nos ingénieurs',
      'Audit annuel de performance et réglage fin du variateur VVVF'
    ]
  },
  {
    id: 'integral',
    name: 'Contrat Intégral 24/7',
    tagline: 'Garantie totale pièces et main d\'œuvre avec astreinte continue',
    target: 'Hôpitaux, centres commerciaux, ministères et sièges de banques',
    priceGNF: 'Sur Devis Personnalisé',
    priceEUR: 'Étude sur mesure',
    features: [
      'Visites préventives bi-mensuelles approfondies',
      'Astreinte dépannage 24h/24 et 7j/7 garantie sous 30 minutes',
      'Prise en charge intégrale des pièces d\'usure et main d\'œuvre',
      'Remplacement préventif anticipé des câbles et patins de guidage',
      'Technicien d\'astreinte dédié pour les événements VIP'
    ]
  }
];

export const GUINEA_PROJECTS = [
  {
    title: 'Tour Résidentielle Kaloum Prime',
    location: 'Kaloum, Conakry',
    type: '2 x Ascenseurs MRL 1000 kg (13 personnes) - Vitesse 1.75 m/s',
    outcome: 'Installation clé en main avec système de secours ARD anti-coupure. Trafic quotidien fluide pour plus de 300 résidents.',
    badge: 'Projet Livré'
  },
  {
    title: 'Hôtel Océan Prestige Camayenne',
    location: 'Camayenne, Conakry',
    type: '1 x Ascenseur Panoramique Élite Glass + 1 x Ascenseur de Service',
    outcome: 'Mise en valeur architecturale de l\'atrium avec vue panoramique sur l\'océan Atlantique et cabine en inox miroir doré.',
    badge: 'Hôtellerie de Luxe'
  },
  {
    title: 'Complexe Médical Spécialisé Dixinn',
    location: 'Dixinn, Conakry',
    type: '1 x Ascenseur Hospitalier Monte-Brancard 1600 kg',
    outcome: 'Nivellement ultra-précis pour transport sans secousse de lits de soins intensifs et raccordement prioritaire sur groupe électrogène.',
    badge: 'Secteur Santé'
  },
  {
    title: 'Entrepôt Commercial Dabondy Logistique',
    location: 'Matoto, Conakry',
    type: '1 x Monte-Charge Industriel 3000 kg hydraulique renforcé',
    outcome: 'Chargement quotidien intensif de palettes de marchandises avec plancher larmé indéformable.',
    badge: 'Industrie & Fret'
  }
];

export const FAQ_DATA = [
  {
    q: 'Comment vos ascenseurs gèrent-ils les coupures de courant fréquentes à Conakry ?',
    a: 'Tous nos ascenseurs sont équipés en standard du système ARD (Automatic Rescue Device) sur batterie de secours. En cas de coupure de l\'EDG (Électricité de Guinée), l\'ascenseur ne se bloque jamais : il amène automatiquement et en toute sécurité la cabine au niveau le plus proche, ouvre les portes pour libérer les passagers, et se met en veille en attendant le retour du secteur ou le démarrage du groupe électrogène.'
  },
  {
    q: 'Disposez-vous de pièces de rechange en stock directement à Conakry ?',
    a: 'Oui, absolument. Nous maintenons un magasin de pièces de rechange d\'origine (cartes électroniques, courroies, patins, câbles, contacteurs, variateurs VVVF, batteries ARD) dans notre dépôt central au Grand Marché de Dabondy à Matoto. Cela nous permet d\'effectuer les réparations sans attendre des semaines d\'importation.'
  },
  {
    q: 'Quels sont les délais habituels de livraison et d\'installation ?',
    a: 'Pour les modèles en stock ou formats standards MRL, la pose et mise en service prennent généralement de 2 à 4 semaines une fois la gaine prête. Pour les modèles sur-mesure (panoramiques ou tonnages spécifiques), le délai d\'acheminement et montage est de 6 à 10 semaines avec un suivi d\'ingénierie rigoureux.'
  },
  {
    q: 'Proposez-vous des ascenseurs adaptés aux villas privées en 220V ?',
    a: 'Oui, notre gamme "Villa Prestige" est spécialement conçue pour les maisons individuelles et duplex. Elle fonctionne directement sur une alimentation monophasée standard 220V, nécessite une fosse minime (seulement 15 à 20 cm) et consomme très peu d\'électricité.'
  },
  {
    q: 'Comment souscrire un contrat de maintenance pour un ascenseur déjà installé par une autre entreprise ?',
    a: 'Nos ingénieurs réalisent d\'abord un audit technique complet et gratuit de votre installation existante pour vérifier l\'état de la machinerie, des câbles et des organes de sécurité. Nous vous soumettons ensuite un rapport d\'état et une proposition de contrat de maintenance adaptée.'
  }
];
