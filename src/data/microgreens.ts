export interface Microgreen {
  id: string;
  name: string;
  image: string;
  description: string;
  healthBenefits: string[];
  fitnessGains: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    vitamins: string[];
    minerals: string[];
    antioxidants: string[];
  };
  whyPreegreen: string;
  suitableFor: string[];
}

export const microgreens: Microgreen[] = [
  {
    id: "radish",
    name: "Radish",
    image: "/microgreens/radish.jpg",
    description: "Radish microgreens deliver a peppery, zesty punch that elevates any dish. These vibrant greens are harvested at peak nutrition, offering 40x more nutrients than mature radishes.",
    healthBenefits: [
      "Boosts immune system with high vitamin C content",
      "Supports liver detoxification",
      "Reduces inflammation naturally",
      "Aids digestive health"
    ],
    fitnessGains: [
      "Accelerates post-workout recovery",
      "Enhances muscle oxygenation",
      "Supports fat metabolism",
      "Natural energy booster"
    ],
    nutrition: {
      calories: 43,
      protein: 3.8,
      carbs: 3.4,
      fat: 2.5,
      fiber: 1.6,
      vitamins: ["Vitamin C", "Vitamin K", "Vitamin E", "B Vitamins"],
      minerals: ["Potassium", "Calcium", "Magnesium", "Iron"],
      antioxidants: ["Sulforaphane", "Anthocyanins", "Glucosinolates"]
    },
    whyPreegreen: "Our radish microgreens are grown in controlled organic conditions with purified water, ensuring maximum nutrient density and zero pesticides. Harvested at the perfect 7-day mark for optimal flavor and nutrition.",
    suitableFor: ["Weight Loss", "Muscle Building", "Immunity Boost", "Detox"]
  },
  {
    id: "broccoli",
    name: "Broccoli",
    image: "/microgreens/broccoli.jpg",
    description: "Broccoli microgreens are nutritional powerhouses containing up to 100x more sulforaphane than mature broccoli. These mild, crunchy greens are perfect for daily consumption.",
    healthBenefits: [
      "Powerful cancer-fighting properties",
      "Supports heart health",
      "Enhances brain function",
      "Promotes cellular detoxification"
    ],
    fitnessGains: [
      "Reduces exercise-induced oxidative stress",
      "Supports lean muscle development",
      "Improves endurance capacity",
      "Accelerates recovery time"
    ],
    nutrition: {
      calories: 35,
      protein: 3.5,
      carbs: 4.2,
      fat: 0.6,
      fiber: 2.8,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate"],
      minerals: ["Calcium", "Iron", "Phosphorus", "Zinc"],
      antioxidants: ["Sulforaphane", "Glucoraphanin", "Kaempferol"]
    },
    whyPreegreen: "We use organic broccoli seeds and grow them in our state-of-the-art vertical farms. Our broccoli microgreens contain 50% more sulforaphane than industry standards due to our optimized growing conditions.",
    suitableFor: ["Weight Loss", "Immunity Boost", "Heart Health", "Anti-Aging"]
  },
  {
    id: "coriander",
    name: "Coriander",
    image: "/microgreens/coriander.jpg",
    description: "Coriander microgreens offer an intensified, fresh herbal flavor that transforms any dish. These aromatic greens are packed with essential oils and nutrients.",
    healthBenefits: [
      "Natural heavy metal detoxifier",
      "Supports healthy blood sugar levels",
      "Reduces anxiety and promotes calm",
      "Aids digestion and reduces bloating"
    ],
    fitnessGains: [
      "Reduces muscle cramps",
      "Supports hydration balance",
      "Natural anti-inflammatory",
      "Enhances nutrient absorption"
    ],
    nutrition: {
      calories: 23,
      protein: 2.1,
      carbs: 3.7,
      fat: 0.5,
      fiber: 2.8,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin E"],
      minerals: ["Potassium", "Manganese", "Copper", "Iron"],
      antioxidants: ["Quercetin", "Kaempferol", "Tocopherols"]
    },
    whyPreegreen: "Our coriander microgreens are grown using heirloom seeds, preserving the authentic flavor profile. Extended dark period during growth maximizes essential oil content for superior taste.",
    suitableFor: ["Detox", "Stress Relief", "Digestive Health", "General Wellness"]
  },
  {
    id: "pea",
    name: "Pea Shoots",
    image: "/microgreens/pea.jpg",
    description: "Sweet, crunchy pea shoots are a protein-rich superfood that tastes like fresh spring peas. Perfect as a salad base or garnish, these tender greens are crowd favorites.",
    healthBenefits: [
      "Complete plant protein source",
      "Supports bone health",
      "Boosts collagen production",
      "Strengthens immune response"
    ],
    fitnessGains: [
      "Excellent plant protein for muscle repair",
      "Pre-workout energy source",
      "Supports nitrogen balance",
      "Reduces muscle fatigue"
    ],
    nutrition: {
      calories: 42,
      protein: 4.5,
      carbs: 5.8,
      fat: 0.4,
      fiber: 2.4,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate"],
      minerals: ["Iron", "Calcium", "Manganese", "Phosphorus"],
      antioxidants: ["Beta-carotene", "Lutein", "Zeaxanthin"]
    },
    whyPreegreen: "We select premium organic pea varieties for optimal sweetness and tenderness. Our growing process ensures maximum protein content with zero bitter aftertaste.",
    suitableFor: ["Muscle Building", "Weight Loss", "General Wellness", "Athletes"]
  },
  {
    id: "mustard",
    name: "Mustard",
    image: "/microgreens/mustard.jpg",
    description: "Mustard microgreens bring a bold, spicy kick that wakes up your taste buds. These fiery greens are loaded with metabolism-boosting compounds.",
    healthBenefits: [
      "Boosts metabolism naturally",
      "Supports respiratory health",
      "Anti-bacterial properties",
      "Aids in fat breakdown"
    ],
    fitnessGains: [
      "Thermogenic fat burning",
      "Increases metabolic rate",
      "Supports lean body composition",
      "Pre-workout stimulant"
    ],
    nutrition: {
      calories: 31,
      protein: 3.2,
      carbs: 4.1,
      fat: 0.8,
      fiber: 3.1,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "B Vitamins"],
      minerals: ["Calcium", "Magnesium", "Potassium", "Selenium"],
      antioxidants: ["Isothiocyanates", "Sinigrin", "Glucosinolates"]
    },
    whyPreegreen: "Our mustard microgreens are grown to the optimal spiciness level - bold enough to excite, gentle enough to enjoy. We use traditional mustard seed varieties for authentic flavor.",
    suitableFor: ["Weight Loss", "Fat Burning", "Metabolism Boost", "Immunity"]
  },
  {
    id: "basil",
    name: "Basil",
    image: "/microgreens/basil.jpg",
    description: "Basil microgreens offer concentrated aromatic flavor with sweet, slightly peppery notes. These fragrant greens are rich in essential oils and antioxidants.",
    healthBenefits: [
      "Powerful anti-inflammatory",
      "Supports mental clarity",
      "Natural stress reducer",
      "Antibacterial properties"
    ],
    fitnessGains: [
      "Reduces exercise-induced stress",
      "Supports cortisol management",
      "Enhances focus during workouts",
      "Natural adaptogen"
    ],
    nutrition: {
      calories: 27,
      protein: 3.0,
      carbs: 2.6,
      fat: 0.8,
      fiber: 1.8,
      vitamins: ["Vitamin K", "Vitamin A", "Vitamin C", "Folate"],
      minerals: ["Calcium", "Iron", "Magnesium", "Potassium"],
      antioxidants: ["Eugenol", "Rosmarinic acid", "Anthocyanins"]
    },
    whyPreegreen: "We grow multiple basil varieties including Genovese and Thai, all organic. Our controlled environment enhances essential oil production for maximum aroma and health benefits.",
    suitableFor: ["Stress Relief", "Mental Focus", "Anti-Aging", "General Wellness"]
  },
  {
    id: "amaranth",
    name: "Amaranth",
    image: "/microgreens/amaranth.jpg",
    description: "Vibrant red and green amaranth microgreens are ancient superfoods making a modern comeback. These stunning greens are as nutritious as they are beautiful.",
    healthBenefits: [
      "Complete protein with all amino acids",
      "Supports healthy cholesterol",
      "Gluten-free superfood",
      "Rich in dietary fiber"
    ],
    fitnessGains: [
      "Complete amino acid profile",
      "Supports muscle synthesis",
      "Sustained energy release",
      "Excellent post-workout food"
    ],
    nutrition: {
      calories: 46,
      protein: 4.2,
      carbs: 6.5,
      fat: 1.1,
      fiber: 3.2,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate"],
      minerals: ["Iron", "Calcium", "Magnesium", "Manganese"],
      antioxidants: ["Betalains", "Phenolic acids", "Flavonoids"]
    },
    whyPreegreen: "Our amaranth microgreens display stunning red-purple hues indicating high antioxidant content. We use heirloom varieties for superior nutrition and visual appeal.",
    suitableFor: ["Muscle Building", "Athletes", "Vegans", "General Wellness"]
  },
  {
    id: "spinach",
    name: "Spinach",
    image: "/microgreens/spinach.jpg",
    description: "Spinach microgreens are tender, mild greens that pack the nutrition of mature spinach in a delicate package. Perfect for those new to microgreens.",
    healthBenefits: [
      "Excellent iron source",
      "Supports eye health",
      "Builds strong bones",
      "Boosts energy naturally"
    ],
    fitnessGains: [
      "Iron for oxygen transport",
      "Supports red blood cell production",
      "Enhances workout endurance",
      "Nitrate-rich for performance"
    ],
    nutrition: {
      calories: 29,
      protein: 3.2,
      carbs: 3.8,
      fat: 0.5,
      fiber: 2.4,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate"],
      minerals: ["Iron", "Calcium", "Magnesium", "Potassium"],
      antioxidants: ["Lutein", "Zeaxanthin", "Beta-carotene"]
    },
    whyPreegreen: "Our spinach microgreens are harvested at peak tenderness, avoiding the oxalate buildup of mature spinach. This means better iron absorption and superior taste.",
    suitableFor: ["Energy Boost", "Athletes", "Anemia Prevention", "Eye Health"]
  },
  {
    id: "alfalfa",
    name: "Alfalfa",
    image: "/microgreens/alfalfa.jpg",
    description: "Delicate alfalfa microgreens are mild and crunchy with a subtle nutty flavor. These ancient greens have been used for centuries for their healing properties.",
    healthBenefits: [
      "Supports healthy cholesterol levels",
      "Rich in chlorophyll for detox",
      "Alkalizing for the body",
      "Supports hormonal balance"
    ],
    fitnessGains: [
      "Alkalizing post-workout",
      "Supports recovery",
      "Light and easily digestible",
      "Hydrating properties"
    ],
    nutrition: {
      calories: 23,
      protein: 3.0,
      carbs: 2.1,
      fat: 0.7,
      fiber: 1.9,
      vitamins: ["Vitamin K", "Vitamin C", "Vitamin A", "B Vitamins"],
      minerals: ["Calcium", "Potassium", "Iron", "Zinc"],
      antioxidants: ["Saponins", "Flavonoids", "Phytoestrogens"]
    },
    whyPreegreen: "We grow our alfalfa in pristine conditions with purified water, ensuring clean, safe sprouts free from any contamination. Our quality testing exceeds industry standards.",
    suitableFor: ["Detox", "Alkalizing", "Gentle Nutrition", "Recovery"]
  },
  {
    id: "fenugreek",
    name: "Fenugreek",
    image: "/microgreens/fenugreek.jpg",
    description: "Fenugreek microgreens offer a unique maple-like flavor with hints of bitterness. These traditional Indian greens are prized for their medicinal properties.",
    healthBenefits: [
      "Supports blood sugar regulation",
      "Enhances milk production for mothers",
      "Aids digestive health",
      "Supports testosterone levels"
    ],
    fitnessGains: [
      "Natural testosterone support",
      "Enhances strength gains",
      "Improves glucose uptake",
      "Supports muscle growth"
    ],
    nutrition: {
      calories: 35,
      protein: 4.4,
      carbs: 5.8,
      fat: 0.9,
      fiber: 3.9,
      vitamins: ["Vitamin A", "Vitamin C", "B Vitamins", "Folate"],
      minerals: ["Iron", "Manganese", "Magnesium", "Copper"],
      antioxidants: ["Diosgenin", "Trigonelline", "4-hydroxyisoleucine"]
    },
    whyPreegreen: "Our fenugreek microgreens are grown from premium organic seeds sourced from traditional farms. We optimize growing conditions to reduce bitterness while maximizing nutrition.",
    suitableFor: ["Muscle Building", "Blood Sugar Control", "Men's Health", "Digestion"]
  },
  {
    id: "sunflower",
    name: "Sunflower",
    image: "/microgreens/sunflower.jpg",
    description: "Sunflower microgreens are hearty, crunchy greens with a nutty, slightly sweet flavor. These substantial greens can replace lettuce in any application.",
    healthBenefits: [
      "Rich in complete protein",
      "Excellent vitamin E source",
      "Supports skin health",
      "Boosts mood naturally"
    ],
    fitnessGains: [
      "High protein content",
      "Healthy fats for hormones",
      "Vitamin E for recovery",
      "Substantial and filling"
    ],
    nutrition: {
      calories: 45,
      protein: 4.8,
      carbs: 4.2,
      fat: 2.4,
      fiber: 2.1,
      vitamins: ["Vitamin E", "Vitamin A", "Vitamin C", "B Vitamins"],
      minerals: ["Selenium", "Zinc", "Iron", "Magnesium"],
      antioxidants: ["Vitamin E", "Phenolic acids", "Flavonoids"]
    },
    whyPreegreen: "We use black oil sunflower seeds for maximum nutrition. Our sunflower microgreens are grown to the perfect height for optimal crunch and flavor.",
    suitableFor: ["Muscle Building", "Skin Health", "Mood Support", "Salad Base"]
  },
  {
    id: "clover",
    name: "Clover",
    image: "/microgreens/clover.jpg",
    description: "Red clover microgreens are mild, sweet, and incredibly nutritious. These gentle greens are perfect for daily consumption and blend well with other foods.",
    healthBenefits: [
      "Supports hormonal balance",
      "Blood purifying properties",
      "Respiratory health support",
      "Rich in isoflavones"
    ],
    fitnessGains: [
      "Gentle and easily digestible",
      "Supports overall health",
      "Blood circulation support",
      "Recovery-friendly"
    ],
    nutrition: {
      calories: 25,
      protein: 2.8,
      carbs: 3.2,
      fat: 0.6,
      fiber: 2.0,
      vitamins: ["Vitamin C", "Vitamin K", "B Vitamins", "Vitamin A"],
      minerals: ["Calcium", "Magnesium", "Potassium", "Chromium"],
      antioxidants: ["Isoflavones", "Coumarins", "Phenolic acids"]
    },
    whyPreegreen: "Our red clover microgreens are grown with extra care to develop their natural sweetness. Perfect for those who prefer milder flavored greens.",
    suitableFor: ["Women's Health", "Gentle Detox", "Daily Wellness", "Beginners"]
  },
  {
    id: "kale-purple",
    name: "Kale Purple",
    image: "/microgreens/kale-purple.jpg",
    description: "Purple kale microgreens are stunning superfood powerhouses with a mild, sweet flavor. The vibrant purple color indicates exceptional antioxidant content.",
    healthBenefits: [
      "Extremely high in antioxidants",
      "Supports brain health",
      "Anti-inflammatory properties",
      "Excellent for eye health"
    ],
    fitnessGains: [
      "Reduces oxidative stress",
      "Anti-inflammatory recovery",
      "Nutrient-dense fuel",
      "Supports longevity"
    ],
    nutrition: {
      calories: 38,
      protein: 3.6,
      carbs: 4.8,
      fat: 0.7,
      fiber: 2.8,
      vitamins: ["Vitamin K", "Vitamin C", "Vitamin A", "B Vitamins"],
      minerals: ["Calcium", "Iron", "Manganese", "Copper"],
      antioxidants: ["Anthocyanins", "Quercetin", "Kaempferol", "Glucosinolates"]
    },
    whyPreegreen: "Our purple kale microgreens are grown under specific light spectrums that maximize anthocyanin production, giving them their deep purple color and exceptional nutrition.",
    suitableFor: ["Anti-Aging", "Brain Health", "Athletes", "Immunity Boost"]
  }
];
