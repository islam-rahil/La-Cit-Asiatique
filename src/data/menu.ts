// La carte complète, recopiée du menu Instagram (@laciteasiatique).
// Prix en dinars algériens. Pour changer un prix, modifiez simplement le nombre.
// Photos : déposez /public/menu/<id>.webp (même id que le plat) ; sans photo, un emplacement neutre s'affiche.

export type Price = { label?: string; amount: number };

export type Dish = {
  id: string;
  name: string;
  description?: string;
  prices: Price[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  notes?: string[];
  dishes: Dish[];
};

const pcs = (big: number, bigCount: string, small: number, smallCount: string): Price[] => [
  { label: `${bigCount} pcs`, amount: big },
  { label: `${smallCount} pcs`, amount: small },
];

const roll = (eight: number, four: number) => pcs(eight, "08", four, "04");

export const menu: MenuCategory[] = [
  {
    id: "entrees",
    title: "Entrées",
    dishes: [
      { id: "salade-thai-crevettes", name: "Salade thaï crevettes", description: "Laitue, tomates cerises, avocat, champignons frais, crevettes fraîches", prices: [{ amount: 1400 }] },
      { id: "salade-thai-poulet", name: "Salade thaï poulet", description: "Laitue, tomates cerises, avocat, champignons frais, poulet", prices: [{ amount: 1200 }] },
      { id: "salade-du-jour", name: "Salade du jour", prices: [{ amount: 1000 }] },
      { id: "gyoza-crevettes", name: "Gyoza crevettes ×6", prices: [{ amount: 1800 }] },
      { id: "gyoza-poulet", name: "Gyoza poulet ×6", prices: [{ amount: 1500 }] },
      { id: "crevettes-tempura", name: "Crevettes tempura ×5", description: "Sauce chili", prices: [{ amount: 2000 }] },
      { id: "nems", name: "Nems ×3", prices: [{ label: "Poulet", amount: 1300 }, { label: "Crevettes fraîches", amount: 1500 }] },
    ],
  },
  {
    id: "tom-yum",
    title: "Soupes Tom Yum",
    notes: ["Vermicelle de soja, pousses de soja, champignons frais, légumes"],
    dishes: [
      { id: "tom-yum-vegetarienne", name: "Tom Yum végétarienne", prices: [{ amount: 850 }] },
      { id: "tom-yum-poulet", name: "Tom Yum poulet", prices: [{ amount: 950 }] },
      { id: "tom-yum-crevettes", name: "Tom Yum crevettes", prices: [{ amount: 1100 }] },
    ],
  },
  {
    id: "poke-bowl",
    title: "Poke Bowl",
    dishes: [
      { id: "poke-saumon", name: "Poke saumon", prices: [{ amount: 2400 }] },
      { id: "poke-daurade-thon", name: "Poke daurade / thon", prices: [{ amount: 1600 }] },
      { id: "poke-crevettes", name: "Poke crevettes", prices: [{ amount: 1800 }] },
      { id: "poke-vegetarien", name: "Poke végétarien", prices: [{ amount: 1400 }] },
    ],
  },
  {
    id: "chirachi",
    title: "Chirachi",
    dishes: [
      { id: "chirachi-saumon", name: "Chirachi saumon", description: "Saumon, avocats, riz", prices: [{ amount: 2400 }] },
      { id: "chirachi-daurade-thon", name: "Chirachi daurade / thon", description: "Daurade ou thon, avocats, riz", prices: [{ amount: 1600 }] },
    ],
  },
  {
    id: "ramen",
    title: "Ramen",
    subtitle: "Soupe de nouilles",
    dishes: [
      { id: "ramen-poulet", name: "Ramen poulet", description: "Poulet, oignon, légumes, œuf", prices: [{ amount: 1700 }] },
      { id: "ramen-boeuf", name: "Ramen bœuf", description: "Bœuf, oignon, légumes, œuf", prices: [{ amount: 1900 }] },
      { id: "ramen-crevettes", name: "Ramen crevettes", description: "Crevettes, oignon, légumes, œuf", prices: [{ amount: 2200 }] },
    ],
  },
  {
    id: "riz",
    title: "Riz cantonais & sautés",
    dishes: [
      { id: "riz-cantonais-poulet", name: "Riz cantonais poulet", description: "Poulet, légumes, œuf", prices: [{ amount: 1400 }] },
      { id: "riz-cantonais-boeuf", name: "Riz cantonais bœuf", description: "Bœuf, légumes, œuf", prices: [{ amount: 1600 }] },
      { id: "riz-cantonais-crevettes", name: "Riz cantonais crevettes", description: "Crevettes, légumes, œuf", prices: [{ amount: 1800 }] },
      { id: "poulet-tonkatsu", name: "Poulet tonkatsu (pané)", description: "Riz cantonais ou riz vinaigré, poulet pané, sauce teriyaki", prices: [{ amount: 1800 }] },
      { id: "boeuf-saute-oignons", name: "Bœuf sauté aux oignons", description: "Riz cantonais ou riz vinaigré, légumes sautés au soja, huile de sésame", prices: [{ amount: 2000 }] },
    ],
  },
  {
    id: "nouilles",
    title: "Nouilles",
    subtitle: "À base de blé ou à base de riz",
    notes: [
      "Légumes : oignons, poivrons, carottes, courgettes, choux rouge / vert",
      "Sauces : sucrée citronnelle, curry coco, citron gingembre",
    ],
    dishes: [
      { id: "nouilles-crevettes", name: "Nouilles crevettes", prices: [{ amount: 2400 }] },
      { id: "nouilles-boeuf", name: "Nouilles bœuf", prices: [{ amount: 2000 }] },
      { id: "nouilles-poulet", name: "Nouilles poulet", prices: [{ amount: 1900 }] },
      { id: "nouilles-saumon", name: "Nouilles saumon", description: "Pavé de 100 g", prices: [{ amount: 2800 }] },
    ],
  },
  {
    id: "yakitori",
    title: "Yakitori ×3",
    dishes: [
      { id: "yakitori-poulet-fromage", name: "Poulet pané au fromage", prices: [{ amount: 1200 }] },
      { id: "yakitori-boeuf-fromage", name: "Bœuf au fromage", prices: [{ amount: 1500 }] },
      { id: "yakitori-thon", name: "Thon", prices: [{ amount: 1500 }] },
    ],
  },
  {
    id: "plats",
    title: "Plats",
    notes: [
      "Tous nos plats sont servis avec riz cantonais ou riz vinaigré et salade",
      "Sauce au choix : aigre-douce, chili, mayo épicée, tartare",
    ],
    dishes: [
      { id: "daurade-tempura", name: "Daurade tempura", prices: [{ amount: 2200 }] },
      { id: "chicken-tempura", name: "Chicken tempura", prices: [{ amount: 1700 }] },
      { id: "calamar-tempura", name: "Calamar tempura", prices: [{ amount: 2200 }] },
      { id: "filet-daurade-royal", name: "Filet de daurade royale", description: "Sauce teriyaki, avocats", prices: [{ amount: 2200 }] },
    ],
  },
  {
    id: "california",
    title: "California Roll",
    notes: ["Composez votre combo (California, Crunchy, Maki, Nigiri, Futomaki) : 04 pièces = ½ prix des 08 pièces"],
    dishes: [
      { id: "cal-fresh-salmon", name: "Fresh Salmon", description: "Saumon, avocats, sésame, cheese", prices: roll(2000, 1000) },
      { id: "cal-salmon-cheese", name: "Salmon Cheese", description: "Saumon, cheese", prices: roll(2200, 1100) },
      { id: "cal-tiger-roll", name: "Tiger Roll (cuit)", description: "Crevettes panées, laitue, avocat, sésame", prices: roll(2000, 1000) },
      { id: "cal-fresh-tuna", name: "Fresh Tuna", description: "Thon, avocats, sésame, cheese", prices: roll(1800, 900) },
      { id: "cal-tuna-cheese", name: "Tuna Cheese", description: "Thon, cheese", prices: roll(1900, 950) },
      { id: "cal-chicken-roll", name: "Chicken Roll (cuit)", description: "Poulet pané, avocat, oignons frits, mayo épicée", prices: roll(1700, 850) },
      { id: "cal-fresh-daurade", name: "Fresh Daurade", description: "Daurade, avocats, sésame, cheese", prices: roll(1800, 900) },
      { id: "cal-daurade-cheese", name: "Daurade Cheese", description: "Daurade, cheese", prices: roll(1900, 950) },
      { id: "cal-daurade-tuna-roll", name: "Daurade Roll / Tuna (cuit)", description: "Pané, laitue, avocat, sésame", prices: roll(1800, 900) },
      { id: "cal-fresh-poulpe", name: "Fresh Poulpe (cuit)", description: "Poulpe pané, fromage, avocat", prices: roll(1800, 900) },
    ],
  },
  {
    id: "crunchy",
    title: "Crunchy Roll",
    subtitle: "Pané et cuit",
    notes: ["Avocats, concombre, mayo épicée"],
    dishes: [
      { id: "crunchy-saumon", name: "Crunchy saumon", prices: roll(2200, 1100) },
      { id: "crunchy-crevettes", name: "Crunchy crevettes", prices: roll(2000, 1000) },
      { id: "crunchy-poulet", name: "Crunchy poulet", prices: roll(1700, 850) },
      { id: "crunchy-thon", name: "Crunchy thon", prices: roll(1800, 900) },
      { id: "crunchy-daurade", name: "Crunchy daurade", prices: roll(1800, 900) },
    ],
  },
  {
    id: "sushis",
    title: "Futomaki, Nigiri, Maki & co",
    dishes: [
      { id: "futomaki", name: "Futomaki", description: "Saumon, avocat, concombre", prices: pcs(2200, "10", 1100, "05") },
      { id: "futomaki-crunchy", name: "Futomaki crunchy", description: "Surimi, saumon, avocat, mayo épicée", prices: pcs(2300, "10", 1150, "05") },
      { id: "nigiri", name: "Nigiri", prices: pcs(2000, "06", 1350, "04") },
      { id: "nigiri-saumon", name: "Nigiri tout saumon", prices: pcs(2300, "06", 1500, "04") },
      { id: "sashimi", name: "Sashimi", description: "2 saumon, 2 thon, 2 daurade", prices: [{ label: "06 pcs", amount: 2200 }] },
      { id: "spring-roll-saumon", name: "Spring roll saumon", description: "Saumon, laitue, avocat, ciboulette", prices: [{ label: "06 pcs", amount: 2000 }] },
      { id: "spring-roll-mix", name: "Spring roll daurade / crevettes / thon", description: "Laitue, avocat, ciboulette", prices: [{ label: "06 pcs", amount: 1700 }] },
      { id: "gunkan-saumon", name: "Gunkan tartare de saumon", prices: [{ label: "02 pcs", amount: 700 }] },
      { id: "gunkan-thon", name: "Gunkan tartare de thon", prices: [{ label: "02 pcs", amount: 500 }] },
      { id: "gunkan-daurade", name: "Gunkan tartare de daurade", prices: [{ label: "02 pcs", amount: 450 }] },
      { id: "gunkan-crevette", name: "Gunkan tartare crevette hachée", prices: [{ label: "02 pcs", amount: 600 }] },
      { id: "maki-saumon", name: "Maki saumon", prices: [{ label: "06 pcs", amount: 1300 }] },
      { id: "maki-daurade", name: "Maki daurade", prices: [{ label: "06 pcs", amount: 1000 }] },
      { id: "maki-thon", name: "Maki thon", prices: [{ label: "06 pcs", amount: 1000 }] },
      { id: "maki-avocat-cheese", name: "Maki avocat cheese", prices: [{ label: "06 pcs", amount: 1000 }] },
    ],
  },
  {
    id: "special-roll",
    title: "Special Roll",
    dishes: [
      { id: "sp-rainbow", name: "Rainbow", description: "Saumon, avocat, surimi tempura", prices: roll(2400, 1200) },
      { id: "sp-mango", name: "Mango", description: "Saumon tempura, avocat, mangue", prices: roll(2400, 1200) },
      { id: "sp-panko", name: "Panko", description: "Poulet pané, avocat, fromage, concombre, oignons frits, mayo épicée", prices: roll(2000, 1000) },
      { id: "sp-furai", name: "Furai", description: "Saumon tataki, avocat, daurade", prices: roll(2400, 1200) },
      { id: "sp-signature", name: "Signature", description: "Saumon, avocats, daurade, cheese, œufs de lump", prices: roll(2400, 1200) },
      { id: "sp-salmon-roll", name: "Salmon Roll", description: "Saumon, avocat, concombre, cheese", prices: roll(2400, 1200) },
      { id: "sp-salmon-teriyaki", name: "Salmon Teriyaki", description: "Tartare de saumon, avocats, oignons frits, sauce teriyaki", prices: roll(2400, 1200) },
      { id: "sp-beef", name: "Beef", description: "Bœuf, avocats, poivrons, carottes", prices: roll(2400, 1200) },
      { id: "sp-mekajiki", name: "Mekajiki", description: "Vermicelle de soja, espadon pané, avocat", prices: roll(2400, 1200) },
      { id: "sp-volcano", name: "Volcano", description: "Surimi haché, avocat, surimi", prices: roll(2400, 1200) },
      { id: "sp-green-dragon", name: "Green Dragon", description: "Crevettes tempura, concombre, avocats", prices: roll(2400, 1200) },
      { id: "sp-hawaien", name: "Hawaïen", description: "Saumon, ananas, avocat, zeste d'orange", prices: roll(2400, 1200) },
    ],
  },
  {
    id: "combos",
    title: "Combos",
    dishes: [
      { id: "combo-8", name: "Combo 8 pièces", description: "4 nigiri, 4 california", prices: [{ amount: 2200 }] },
      { id: "combo-10", name: "Combo 10 pièces", description: "6 maki, 4 california", prices: [{ amount: 2400 }] },
      { id: "combo-18", name: "Combo 18 pièces", description: "6 maki, 4 nigiri, 4 crunchy, 4 tiger roll", prices: [{ amount: 4500 }] },
      { id: "combo-23", name: "Combo 23 pièces", description: "6 maki, 4 tiger roll, 4 crunchy, 5 futomaki, 4 nigiri", prices: [{ amount: 5600 }] },
      { id: "combo-33", name: "Combo 33 pièces", description: "5 futomaki, 6 nigiri, 8 tiger roll, 6 maki, 8 panko", prices: [{ amount: 7600 }] },
      { id: "combo-44", name: "Combo 44 pièces", description: "12 maki, 8 panko, 6 nigiri, 10 futomaki, 8 tiger roll", prices: [{ amount: 9500 }] },
      { id: "combo-54", name: "Combo 54 pièces", description: "12 maki, 8 panko, 6 nigiri, 10 futomaki, 10 crunchy, 8 tiger roll", prices: [{ amount: 10800 }] },
      { id: "combo-special-16", name: "Combo spécial 16 pièces", description: "4 beef, 4 mekajiki, 4 volcano, 4 hawaïen", prices: [{ amount: 5000 }] },
      { id: "combo-special-20", name: "Combo spécial 20 pièces", description: "4 rainbow, 4 mango, 4 panko, 4 green dragon, 4 salmon roll", prices: [{ amount: 5600 }] },
      { id: "combo-special-50", name: "Combo spécial 50 pièces", description: "8 rainbow, 8 salmon roll, 8 green dragon, 8 panko, 8 mango, 10 crunchy futomaki", prices: [{ amount: 11800 }] },
    ],
  },
  {
    id: "sushi-burger",
    title: "Sushi Burger",
    subtitle: "Cru ou friture",
    notes: ["Riz vinaigré, avocats, surimi, fromage, mayo épicée, sésame, huile de sésame"],
    dishes: [
      { id: "sushi-burger-saumon", name: "Sushi burger saumon", prices: [{ amount: 2500 }] },
      { id: "sushi-burger-poulet-boeuf", name: "Sushi burger poulet / bœuf", prices: [{ amount: 2000 }] },
    ],
  },
  {
    id: "bento",
    title: "Bento",
    dishes: [
      { id: "bento-mixette-poisson", name: "Bento mixette poisson", description: "Mixette tempura (crevettes, calamar, daurade), 4 pcs sushi, 2 nems ou 2 gyoza, salade poulet ou soupe", prices: [{ amount: 3200 }] },
      { id: "bento-yakitori", name: "Bento yakitori", description: "2 brochettes yakitori, 4 pcs sushi, 2 nems ou 2 gyoza, salade poulet ou soupe", prices: [{ amount: 2500 }] },
      { id: "bento-poulet-pane", name: "Bento poulet pané", description: "Poulet pané ou poulet tonkatsu, 4 pcs sushi, 2 nems ou 2 gyoza, salade poulet ou soupe", prices: [{ amount: 2800 }] },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    dishes: [
      { id: "eau", name: "Eau (petit format)", prices: [{ amount: 100 }] },
      { id: "soda", name: "Soda", prices: [{ amount: 250 }] },
      { id: "jus-presses", name: "Jus pressés", prices: [{ amount: 700 }] },
      { id: "cafe-the", name: "Café / thé", prices: [{ amount: 300 }] },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    dishes: [
      { id: "fondant-chocolat", name: "Fondant au chocolat", description: "Avec boule de glace", prices: [{ amount: 800 }] },
      { id: "maki-choco-banane", name: "Maki choco banane coco", prices: [{ amount: 1000 }] },
      { id: "cookies-skillet", name: "Cookies skillet", description: "Avec boule de glace", prices: [{ amount: 600 }] },
      { id: "mochi", name: "Mochi", description: "Ganache chocolat, chocolat noisette, confiture de fruits de saison", prices: [{ amount: 1800 }] },
      { id: "creme-brulee", name: "Crème brûlée", prices: [{ amount: 800 }] },
    ],
  },
];

export const formatPrice = (amount: number) =>
  `${amount.toLocaleString("fr-FR").replace(/\s/g, " ")} DA`;
