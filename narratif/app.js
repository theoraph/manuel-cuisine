// ============================================================
// DATA
// ============================================================

const HEROES = [
  {
    id: 'aubergine',
    name: 'Aubergine',
    subtitle: "L'éponge transformatrice",
    traits: ['absorbante', 'amère', 'se révèle au feu'],
    texture: 'spongieuse',
    fragility: 'medium',
    affinities: ['roast', 'fry', 'braise', 'char'],
    manual_ref: '../legumes.html#sec-5-7',
    manual_label: 'Légumes-fruits — Manuel'
  },
  {
    id: 'poulpe',
    name: 'Poulpe',
    subtitle: 'Le guerrier tenace',
    traits: ['dense', 'fibreux', 'marin'],
    texture: 'coriace',
    fragility: 'high',
    affinities: ['slow_cook', 'sous_vide', 'braise'],
    manual_ref: '../viandes.html',
    manual_label: 'Protocoles poissons — Manuel'
  },
  {
    id: 'poulet',
    name: 'Poulet entier',
    subtitle: 'Le classique universel',
    traits: ['polyvalent', 'délicat', 'juteux si maîtrisé'],
    texture: 'ferme',
    fragility: 'medium',
    affinities: ['roast', 'braise', 'sear'],
    manual_ref: '../viandes.html',
    manual_label: 'Protocoles volaille — Manuel'
  },
  {
    id: 'carotte',
    name: 'Carotte',
    subtitle: 'La douce endurante',
    traits: ['sucrée', 'résistante', 'se concentre'],
    texture: 'ferme',
    fragility: 'low',
    affinities: ['roast', 'braise', 'steam', 'glaze'],
    manual_ref: '../legumes.html#sec-5-5',
    manual_label: 'Légumes-racines — Manuel'
  },
  {
    id: 'chou_fleur',
    name: 'Chou-fleur',
    subtitle: 'La révolution végétale',
    traits: ['crucifère', 'caramélisable', 'versatile'],
    texture: 'dense',
    fragility: 'low',
    affinities: ['roast', 'steam', 'fry', 'char'],
    manual_ref: '../legumes.html#sec-5-4',
    manual_label: 'Crucifères — Manuel'
  },
  {
    id: 'boeuf',
    name: 'Côte de bœuf',
    subtitle: "L'archétype noble",
    traits: ['persillé', 'umami', 'fragile hors zone'],
    texture: 'dense',
    fragility: 'high',
    affinities: ['sear', 'roast', 'reverse_sear', 'slow_cook'],
    manual_ref: '../viandes.html',
    manual_label: 'Protocoles bœuf — Manuel'
  }
];

const UNIVERSES = [
  {
    id: 'grill_fort',
    name: 'Monde brûlant',
    subtitle: 'Feu vif · Maillard · Caramélisation',
    heat: 'Chaleur intense',
    humidity: 'Sèche',
    allowed_methods: ['sear', 'roast', 'char', 'fry', 'reverse_sear'],
    description: 'La chaleur intense révèle les sucres, crée la croûte, construit la complexité par le brunissement.',
    manual_ref: '../pilier-1-temperature.html#sec-1-6',
    manual_label: 'Maillard & caramélisation — Manuel'
  },
  {
    id: 'slow_wet',
    name: 'Monde lent humide',
    subtitle: 'Braisage · Collagène · Profondeur',
    heat: 'Chaleur douce',
    humidity: 'Humide',
    allowed_methods: ['braise', 'steam', 'simmer', 'glaze'],
    description: "Le temps et l'humidité dissolvent le collagène, fondent les fibres, concentrent les jus en sauce.",
    manual_ref: '../pilier-2-humidite.html#sec-2-5',
    manual_label: 'Le braisage — Manuel'
  },
  {
    id: 'basse_temperature',
    name: 'Monde silencieux',
    subtitle: 'Précision · Sous-vide · Maîtrise totale',
    heat: 'Précise',
    humidity: 'Contrôlée',
    allowed_methods: ['slow_cook', 'sous_vide'],
    description: "La température exacte préserve les textures à leur point d'équilibre, élimine l'incertitude.",
    manual_ref: '../pilier-1-temperature.html#sec-1-4',
    manual_label: 'Basse température & sous-vide — Manuel'
  },
  {
    id: 'vapeur',
    name: 'Monde de la vapeur',
    subtitle: 'Douceur · Préservation · Minéralité',
    heat: 'Douce',
    humidity: 'Maximale',
    allowed_methods: ['steam', 'simmer'],
    description: 'La vapeur préserve la couleur, la minéralité, la texture naturelle sans agression ni perte.',
    manual_ref: '../pilier-2-humidite.html#sec-2-1',
    manual_label: 'La vapeur — Manuel'
  }
];

const ALLIES = [
  {
    id: 'butter',
    name: 'Beurre',
    label: 'Allié gras',
    desc: "Arrose, nourrit, lie les sucs. En fin de cuisson pour monter une sauce ou laquer.",
    universes: ['grill_fort', 'slow_wet'],
    heroes: ['poulet', 'boeuf', 'carotte'],
    manual_ref: '../pilier-2-humidite.html#sec-2-8',
    manual_label: 'Glaçage & nappage — Manuel'
  },
  {
    id: 'lemon',
    name: 'Citron',
    label: 'Allié acide',
    desc: "Réveille, équilibre le gras, tranche l'amertume. Quelques gouttes en fin de course.",
    universes: ['vapeur', 'slow_wet'],
    heroes: ['aubergine', 'poulpe', 'chou_fleur'],
    manual_ref: null,
    manual_label: null
  },
  {
    id: 'olive_oil',
    name: "Huile d'olive",
    label: 'Allié gras vif',
    desc: "Conduit la chaleur, aromatise, protège. Idéale à haute température pour les légumes.",
    universes: ['grill_fort', 'vapeur'],
    heroes: ['aubergine', 'chou_fleur', 'carotte'],
    manual_ref: null,
    manual_label: null
  },
  {
    id: 'fond_brun',
    name: 'Fond brun',
    label: 'Allié umami',
    desc: "Concentré de collagène et de Maillard. La base de toute sauce braisée profonde.",
    universes: ['slow_wet'],
    heroes: ['boeuf', 'poulet', 'poulpe'],
    manual_ref: '../legumes.html#sec-5-14',
    manual_label: "L'extraction & les fonds — Manuel"
  }
];

const ANTAGONISTS = [
  {
    id: 'overcooking',
    name: 'Surcuisson',
    warning: "Surveiller la température à cœur. Chaque degré compte.",
    heroes: ['boeuf', 'poulet', 'poulpe'],
    universes: ['grill_fort', 'basse_temperature'],
    manual_ref: '../pilier-1-temperature.html#sec-1-2',
    manual_label: 'Températures à cœur — Manuel'
  },
  {
    id: 'drying',
    name: 'Dessèchement',
    warning: "Maintenir un environnement humide ou arroser régulièrement.",
    heroes: ['poulet', 'carotte', 'aubergine'],
    universes: ['grill_fort'],
    manual_ref: '../pilier-2-humidite.html#sec-2-6',
    manual_label: 'Le repos de la viande — Manuel'
  },
  {
    id: 'caoutchouc',
    name: 'Texture caoutchouteuse',
    warning: "Le collagène du poulpe ne fond qu'au-delà de 70°C pendant longtemps.",
    heroes: ['poulpe'],
    universes: ['grill_fort', 'vapeur'],
    manual_ref: '../viandes.html',
    manual_label: 'Protocoles poissons — Manuel'
  }
];

const TRICKSTERS = [
  {
    id: 'zeste',
    name: 'Zeste de citron',
    label: 'Trickster aromatique',
    effect: "Un virage aromatique en fin d'assiette. Réveille ce qu'on croyait clos."
  },
  {
    id: 'croustillant',
    name: 'Élément croustillant',
    label: 'Trickster texturel',
    effect: "Une fracture dans le fondant. Chapelure dorée, peau grillée, éclat de sel."
  },
  {
    id: 'anchois',
    name: 'Anchois fondu',
    label: 'Trickster umami',
    effect: "Invisible dans la sauce, il densifie tout. On ne le cherche pas, on le ressent."
  }
];

// ============================================================
// REVELATIONS  hero:universe → narrative
// ============================================================

const REVELATIONS = {
  'aubergine:grill_fort': {
    title: "Fumée & Fondant",
    narrative: "Au contact du feu vif, l'aubergine se carbonise en surface et s'effondre en son cœur. L'amertume de départ se mue en complexité fumée. La peau brûlée protège une chair laiteuse, presque sucrée.",
    transformation: { label: 'Transformation', name: 'Amertume → Complexité fumée', desc: 'Rôtir ou carboniser entière sous flamme directe ou four 240°C. La peau cloque, la chair se liquéfie.' },
    trickster: TRICKSTERS[0]
  },
  'aubergine:slow_wet': {
    title: "Fondant Absorbé",
    narrative: "Dans l'humidité lente, l'aubergine devient éponge consciente. Elle boit la sauce, le fond, les arômes. Sa structure s'efface pour laisser place au goût du milieu qui l'entoure.",
    transformation: { label: 'Transformation', name: 'Spongieux → Fondant chargé', desc: 'Braiser à couvert, feu doux, 45 min minimum. Arroser régulièrement. Elle absorbe tout.' },
    trickster: TRICKSTERS[2]
  },
  'aubergine:basse_temperature': {
    title: "Soie Amère",
    narrative: "La basse température révèle une texture impossible autrement : fondante mais structurée, amère mais maîtrisée. Sous-vide à 85°C, 45 minutes. Saisie finale à feu vif pour la croûte.",
    transformation: { label: 'Transformation', name: 'Cru → Soie structurée', desc: 'Sous-vide 85°C / 45 min avec huile d\'olive et thym. Puis saisie vive 1 min par face.' },
    trickster: TRICKSTERS[1]
  },
  'aubergine:vapeur': {
    title: "Douceur Minérale",
    narrative: "La vapeur révèle l'aubergine dans sa forme la plus directe — sans brunissement, sans grillé. La chair reste blanche, la minéralité intacte. Délicat, inattendu.",
    transformation: { label: 'Transformation', name: 'Cru → Délicat préservé', desc: 'Vapeur 10 min. Pas une seconde de plus. Assaisonner à cru avec huile de sésame ou citron.' },
    trickster: TRICKSTERS[0]
  },
  'poulpe:grill_fort': {
    title: "Tension Risquée",
    narrative: "Le feu vif sur un poulpe cru, c'est le pari le plus périlleux. La chaleur saisit l'extérieur mais le centre reste coriace. Ce monde exige une pré-cuisson : braisé d'abord, grillé ensuite.",
    transformation: { label: 'Transformation requise', name: 'Précuisson obligatoire', desc: 'Braiser 45 min d\'abord, laisser refroidir. Puis grill très chaud 2 min par face pour la croûte.' },
    trickster: TRICKSTERS[0],
    clash_note: "Ce monde ne pardonne pas le poulpe cru. La précuisson n'est pas une option."
  },
  'poulpe:slow_wet': {
    title: "Marin & Gélatineux",
    narrative: "Le braisage lent est le monde naturel du poulpe. Le collagène fond au-delà de 70°C, les fibres s'assouplissent, la sauce prend une texture nacrée de la mer. Patience récompensée.",
    transformation: { label: 'Transformation', name: 'Coriace → Fondant gélatineux', desc: 'Braiser à couvert, 70°C minimum, 60-90 min selon taille. Dans un fond aromatique : tomate, vin blanc, ail.' },
    trickster: TRICKSTERS[2]
  },
  'poulpe:basse_temperature': {
    title: "Précision Marine",
    narrative: "Le sous-vide offre au poulpe sa meilleure version : tendre avec précision, sans la chance. À 77°C pendant 5 heures, chaque tentacule atteint le même point de fondant.",
    transformation: { label: 'Transformation', name: 'Dense → Tendre précis', desc: 'Sous-vide 77°C / 5h. Refroidir rapidement. Saisir 1 min côté peau avant service.' },
    trickster: TRICKSTERS[1]
  },
  'poulpe:vapeur': {
    title: "Limite du Monde",
    narrative: "La vapeur seule est trop douce pour dissoudre le collagène du poulpe. Ce monde est en dehors de ses affinités naturelles. Une expérimentation possible, mais sans garantie.",
    transformation: { label: 'Avertissement', name: 'Compatibilité limitée', desc: 'Si tenté : vapeur très longue (90 min+). Résultat incertain. Préférer braiser.' },
    trickster: null,
    clash_note: "Le poulpe résiste à ce monde. La chaleur humide de la vapeur seule ne suffit pas."
  },
  'poulet:grill_fort': {
    title: "Dorure & Juteux",
    narrative: "Le poulet rôti au four chaud est l'archétype du Maillard domestique. La peau se tend, se dore, devient craquante. En dessous, la chair reste juteuse si on maîtrise la température à cœur.",
    transformation: { label: 'Transformation', name: 'Cru → Doré juteux', desc: '220°C chaleur tournante. Saler la peau 24h avant. Cible : 65°C à cœur blanc, 70°C à cœur brun.' },
    trickster: TRICKSTERS[1]
  },
  'poulet:slow_wet': {
    title: "Cocotte Fondante",
    narrative: "Dans la cocotte close, le poulet baigne dans ses propres jus concentrés. La chair blanche, fragile, devient moelleuse. C'est un monde de patience et d'arômes cumulés.",
    transformation: { label: 'Transformation', name: 'Ferme → Fondant aromatique', desc: 'Braiser en cocotte, 150°C, 1h30 avec fond et aromates. Arroser toutes les 20 min.' },
    trickster: TRICKSTERS[2]
  },
  'poulet:basse_temperature': {
    title: "Juteux Absolu",
    narrative: "Sous-vide à 63°C, la chair blanche reste d'une jutosité impossible autrement. Pas de croûte — il faudra la construire après. Mais la texture est sans équivalent.",
    transformation: { label: 'Transformation', name: 'Cru → Juteux parfait', desc: 'Sous-vide 63°C / 1h30 pour les blancs, 72°C / 2h pour les cuisses. Saisie vive après.' },
    trickster: TRICKSTERS[1]
  },
  'poulet:vapeur': {
    title: "Délicatesse Asiatique",
    narrative: "La vapeur révèle un poulet d'une délicatesse cristalline, à la façon Hainanese. La chair reste blanche, nacrée, tremblante. Le goût vient du bouillon aromatique dans lequel on la trempe.",
    transformation: { label: 'Transformation', name: 'Cru → Nacré délicat', desc: 'Vapeur douce 20 min. Cible : 65°C à cœur. Servir avec sauce soja + gingembre + ciboule.' },
    trickster: TRICKSTERS[0]
  },
  'carotte:grill_fort': {
    title: "Caramélisée Concentrée",
    narrative: "La chaleur vive déshydrate la carotte en surface et concentre ses sucres naturels en caramel végétal. La douceur naturelle s'intensifie jusqu'à l'ambré. Un légume transformé en confiserie.",
    transformation: { label: 'Transformation', name: 'Douce → Caramel concentré', desc: 'Four 200°C, carrément, 35-45 min. Huile d\'olive généreuse, sel, retourner à mi-cuisson.' },
    trickster: TRICKSTERS[0]
  },
  'carotte:slow_wet': {
    title: "Glaçage Brillant",
    narrative: "Dans le braisage, la carotte cède sa douceur à la sauce qui, réduite, vient la napper d'un glacis brillant. Elle brille. Elle est douce-amère. Elle est le glaze.",
    transformation: { label: 'Transformation', name: 'Crue → Glacée brillante', desc: 'Braiser à hauteur d\'eau + beurre + sucre. Couvercle puis découvrir pour réduire en glaze.' },
    trickster: TRICKSTERS[2]
  },
  'carotte:basse_temperature': {
    title: "Texture Contrôlée",
    narrative: "La basse température donne à la carotte une précision texturale absolue. Ni trop cuite ni trop ferme. La pectine se dissout exactement où on le souhaite.",
    transformation: { label: 'Transformation', name: 'Crue → Texture exacte', desc: 'Sous-vide 85°C / 45 min avec beurre et sel. Résultat fondant mais structuré.' },
    trickster: TRICKSTERS[1]
  },
  'carotte:vapeur': {
    title: "Minérale Préservée",
    narrative: "La vapeur conserve la couleur orange vive, la minéralité de la carotte, sa légèreté. Aucune perte dans l'eau, aucun brunissement. La carotte dans son état le plus pur.",
    transformation: { label: 'Transformation', name: 'Crue → Fraîche préservée', desc: 'Vapeur 8-12 min selon épaisseur. Vérifier à la pointe. Assaisonner immédiatement après.' },
    trickster: TRICKSTERS[0]
  },
  'chou_fleur:grill_fort': {
    title: "Rôti Complexe",
    narrative: "C'est au four très chaud que le chou-fleur se révèle — la révolution culinaire de ces dix dernières années. Les fleurettes brunissent, se caramélisent, développent une complexité de noisette.",
    transformation: { label: 'Transformation', name: 'Blanc → Brun complexe', desc: 'Four 220°C, entier ou en tranches épaisses. 40-50 min. L\'extérieur brûle légèrement, c\'est voulu.' },
    trickster: TRICKSTERS[1]
  },
  'chou_fleur:slow_wet': {
    title: "Fondant Délicat",
    narrative: "La vapeur douce et le braisage léger transforment le chou-fleur en fondant délicat. Il perd sa résistance, s'attendrit. Une base pour purée ou légume d'accompagnement soyeux.",
    transformation: { label: 'Transformation', name: 'Dense → Fondant soyeux', desc: 'Braiser à couvert avec fond légume et beurre, 15-20 min. Ou vapeur puis finir au beurre.' },
    trickster: TRICKSTERS[0]
  },
  'chou_fleur:basse_temperature': {
    title: "Précision Végétale",
    narrative: "La basse température donne au chou-fleur une texture mi-cuit précise, impossible autrement. Tendre, avec encore de la mâche, gardant sa couleur blanche immaculée.",
    transformation: { label: 'Transformation', name: 'Dense → Mi-cuit précis', desc: 'Sous-vide 85°C / 30 min avec beurre et sel. Parfait pour une purée texturée ou un service en tranche.' },
    trickster: TRICKSTERS[1]
  },
  'chou_fleur:vapeur': {
    title: "Blanc Immaculé",
    narrative: "La vapeur préserve la blancheur du chou-fleur et sa légèreté naturelle. Minéral, direct, honnête. Son moment de vérité sans artifice.",
    transformation: { label: 'Transformation', name: 'Dense → Léger préservé', desc: 'Vapeur 12-15 min. La lame doit entrer sans résistance. Assaisonner à cru.' },
    trickster: TRICKSTERS[0]
  },
  'boeuf:grill_fort': {
    title: "Maillard Absolu",
    narrative: "La côte de bœuf dans le Monde brûlant, c'est la rencontre parfaite. La croûte se construit en quelques minutes sur acier ou fonte fumante. Dessous : le rouge rosé protégé par la chaleur elle-même.",
    transformation: { label: 'Transformation', name: 'Cru → Croûte & Cœur rosé', desc: 'Poêle fonte fumante ou grill. 2-3 min par face selon épaisseur. Cible : 54°C à cœur. Repos 5 min.' },
    trickster: TRICKSTERS[1]
  },
  'boeuf:slow_wet': {
    title: "Résistance Naturelle",
    narrative: "La côte de bœuf résiste au braisage — ce n'est pas sa vocation. Les morceaux braiser sont d'autres coupes (joue, paleron). Ici, l'univers humide et lent dessert le persillé délicat.",
    transformation: { label: 'Avertissement', name: 'Incompatibilité de coupe', desc: "Pour braiser du bœuf : préférer joue, paleron, gîte. La côte mérite le feu vif ou la basse température." },
    trickster: null,
    clash_note: "Ce héros appartient au feu. Le braisage lui vole son identité."
  },
  'boeuf:basse_temperature': {
    title: "Reverse Sear — La Maîtrise",
    narrative: "La basse température donne à la côte de bœuf son meilleur résultat : une cuisson homogène à l'intérieur de 100%, puis une saisie finale qui construit la croûte en 45 secondes par face.",
    transformation: { label: 'Transformation', name: 'Cru → Homogène puis croûte', desc: 'Four 100°C jusqu\'à 52°C à cœur (1h-2h). Poser, reposer 5 min. Poêle fonte fumante : 45s/face.' },
    trickster: TRICKSTERS[1]
  },
  'boeuf:vapeur': {
    title: "Monde Étranger",
    narrative: "La vapeur seule n'est pas le monde de la côte de bœuf. Aucune croûte, aucun Maillard, aucun grillé. La rencontre est possible en précuisson, jamais en finition.",
    transformation: { label: 'Avertissement', name: 'Hors de son monde', desc: 'Si vapeur : uniquement comme précuisson douce. Toujours finir à feu très vif.' },
    trickster: null,
    clash_note: "Le bœuf persillé a besoin du feu pour exprimer son caractère."
  }
};

// ============================================================
// STATE
// ============================================================

let state = { step: 1, hero: null, universe: null };

// ============================================================
// HELPERS
// ============================================================

function getCompatible(hero, universe) {
  return hero.affinities.filter(m => universe.allowed_methods.includes(m));
}

function getAllies(hero, universe) {
  return ALLIES.filter(a =>
    a.universes.includes(universe.id) || a.heroes.includes(hero.id)
  ).slice(0, 3);
}

function getAntagonists(hero, universe) {
  return ANTAGONISTS.filter(a =>
    a.heroes.includes(hero.id) || a.universes.includes(universe.id)
  ).slice(0, 2);
}

// ============================================================
// RENDER
// ============================================================

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(renderHeader());
  if (state.step === 1) app.appendChild(renderStep1());
  else if (state.step === 2) app.appendChild(renderStep2());
  else if (state.step === 3) app.appendChild(renderStep3());
}

function renderHeader() {
  const h = document.createElement('header');
  h.className = 'app-header';
  const stepLabel = state.step === 3 ? 'Révélation' : `Étape ${state.step} / 2`;
  h.innerHTML = `
    <a class="app-logo" href="../index.html">Cuisine <span>/ Manuel</span></a>
    <span class="step-indicator">${state.step < 3 ? stepLabel : 'Révélation'}</span>
  `;
  return h;
}

function renderStep1() {
  const step = document.createElement('div');
  step.className = 'step';
  step.innerHTML = `
    <h1 class="step-title">Choisissez votre <em>héros</em></h1>
    <p class="step-subtitle">L'ingrédient principal — celui dont le voyage va commencer.</p>
    <div class="card-grid" id="hero-grid"></div>
  `;
  const grid = step.querySelector('#hero-grid');
  HEROES.forEach(hero => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="card-label">Héros</span>
      <span class="card-name">${hero.name}</span>
      <span class="card-sub">${hero.subtitle}</span>
      <div class="card-traits">
        ${hero.traits.map(t => `<span class="trait">${t}</span>`).join('')}
      </div>
    `;
    card.addEventListener('click', () => {
      state.hero = hero;
      state.step = 2;
      render();
    });
    grid.appendChild(card);
  });
  return step;
}

function renderStep2() {
  const step = document.createElement('div');
  step.className = 'step';
  step.innerHTML = `
    <div class="selected-hero-mini">
      <div>
        <div class="hero-name">${state.hero.name}</div>
        <div class="hero-sub">${state.hero.subtitle}</div>
      </div>
      <button class="back-btn" id="back-btn">← Changer</button>
    </div>
    <h1 class="step-title">Choisissez l'<em>univers</em></h1>
    <p class="step-subtitle">L'environnement de cuisson qui va gouverner la transformation.</p>
    <div class="card-grid universes" id="universe-grid"></div>
  `;
  step.querySelector('#back-btn').addEventListener('click', () => {
    state.step = 1; state.hero = null; render();
  });
  const grid = step.querySelector('#universe-grid');
  UNIVERSES.forEach(universe => {
    const compatible = getCompatible(state.hero, universe).length > 0;
    const card = document.createElement('div');
    card.className = 'card' + (compatible ? '' : ' incompatible');
    card.innerHTML = `
      <span class="card-label">${compatible ? 'Univers' : 'Incompatible'}</span>
      <span class="card-name">${universe.name}</span>
      <span class="card-sub">${universe.subtitle}</span>
      <span class="card-heat" style="margin-top:auto;padding-top:0.5rem">${universe.heat} · ${universe.humidity}</span>
    `;
    if (compatible) {
      card.addEventListener('click', () => {
        state.universe = universe;
        state.step = 3;
        render();
        window.scrollTo(0, 0);
      });
    }
    grid.appendChild(card);
  });
  return step;
}

function renderStep3() {
  const key = `${state.hero.id}:${state.universe.id}`;
  const rev = REVELATIONS[key];
  const allies = getAllies(state.hero, state.universe);
  const antagonists = getAntagonists(state.hero, state.universe);
  const step = document.createElement('div');
  step.className = 'step';

  let html = `<div class="revelation">`;

  // Header
  html += `
    <div class="revelation-header">
      <div class="revelation-match">${state.hero.name} × ${state.universe.name}</div>
      <h2 class="revelation-title">${rev ? rev.title : 'Rencontre incertaine'}</h2>
      <p class="revelation-narrative">${rev ? rev.narrative : "Cette combinaison n'a pas de chemin tracé. L'expérimentation est possible mais sans carte."}</p>
    </div>
  `;

  // Clash note
  if (rev && rev.clash_note) {
    html += `<div class="clash-banner"><strong>⚠ Attention</strong>${rev.clash_note}</div>`;
  }

  // Transformation
  if (rev && rev.transformation) {
    html += `
      <div>
        <div class="revelation-section-title">Chemin de transformation</div>
        <div class="cards-row">
          <div class="technique-card primary">
            <span class="t-label">${rev.transformation.label}</span>
            <span class="t-name">${rev.transformation.name}</span>
            <span class="t-desc">${rev.transformation.desc}</span>
            <a class="t-link" href="${state.hero.manual_ref}" target="_blank">→ ${state.hero.manual_label}</a>
          </div>
          <div class="technique-card primary">
            <span class="t-label">Univers</span>
            <span class="t-name">${state.universe.name}</span>
            <span class="t-desc">${state.universe.description}</span>
            <a class="t-link" href="${state.universe.manual_ref}" target="_blank">→ ${state.universe.manual_label}</a>
          </div>
          ${rev.trickster ? `
          <div class="technique-card trickster-card">
            <span class="t-label">${rev.trickster.label}</span>
            <span class="t-name">${rev.trickster.name}</span>
            <span class="t-desc">${rev.trickster.effect}</span>
          </div>` : ''}
        </div>
      </div>
    `;
  }

  // Allies
  if (allies.length > 0) {
    html += `
      <div>
        <div class="revelation-section-title">Alliés recommandés</div>
        <div class="cards-row">
          ${allies.map(a => `
            <div class="technique-card">
              <span class="t-label">${a.label}</span>
              <span class="t-name">${a.name}</span>
              <span class="t-desc">${a.desc}</span>
              ${a.manual_ref ? `<a class="t-link" href="${a.manual_ref}" target="_blank">→ ${a.manual_label}</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Antagonists
  if (antagonists.length > 0) {
    html += `
      <div>
        <div class="revelation-section-title">À surveiller</div>
        <div class="cards-row">
          ${antagonists.map(a => `
            <div class="technique-card antagonist-card">
              <span class="t-label">Antagoniste</span>
              <span class="t-name">${a.name}</span>
              <span class="t-desc">${a.warning}</span>
              ${a.manual_ref ? `<a class="t-link" href="${a.manual_ref}" target="_blank">→ ${a.manual_label}</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Restart
  html += `
    <div class="restart-row">
      <button class="btn btn-primary" id="restart-btn">Nouveau voyage</button>
      <button class="btn btn-ghost" id="change-universe-btn">Changer d'univers</button>
    </div>
  `;

  html += `</div>`;
  step.innerHTML = html;

  step.querySelector('#restart-btn').addEventListener('click', () => {
    state = { step: 1, hero: null, universe: null };
    render();
    window.scrollTo(0, 0);
  });
  step.querySelector('#change-universe-btn').addEventListener('click', () => {
    state.step = 2;
    state.universe = null;
    render();
    window.scrollTo(0, 0);
  });

  return step;
}

// ============================================================
// INIT
// ============================================================

render();
