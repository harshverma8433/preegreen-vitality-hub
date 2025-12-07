export interface BreakfastItem {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    vitamins: string[];
    minerals: string[];
  };
  fitnessbenefits: string[];
  customizationOptions: string[];
  dayPlan: string;
}

export const breakfastItems: BreakfastItem[] = [
  {
    id: "sprout-masala",
    name: "Sprout Masala",
    image: "/breakfast/sprout-masala.jpg",
    description: "A flavorful Indian-style preparation of mixed sprouts seasoned with aromatic spices. This protein-packed dish is perfect for a energizing morning start.",
    ingredients: [
      "Mixed sprouted lentils",
      "Preegreen microgreens mix",
      "Turmeric & cumin",
      "Fresh tomatoes",
      "Green chilies",
      "Coriander leaves",
      "Cold-pressed oil"
    ],
    nutrition: {
      calories: 245,
      protein: 14,
      carbs: 32,
      fat: 6,
      fiber: 8,
      vitamins: ["Vitamin C", "Vitamin K", "B Vitamins", "Folate"],
      minerals: ["Iron", "Potassium", "Magnesium", "Zinc"]
    },
    fitnessbenefits: [
      "High plant protein for muscle repair",
      "Complex carbs for sustained energy",
      "Anti-inflammatory spices for recovery",
      "Rich in fiber for digestive health"
    ],
    customizationOptions: [
      "Spice level (mild/medium/hot)",
      "Add extra microgreens",
      "Oil-free preparation",
      "Extra vegetables",
      "Gluten-free certified"
    ],
    dayPlan: "Days 1, 6, 11, 16, 21, 26"
  },
  {
    id: "green-sandwich",
    name: "Green Sandwich",
    image: "/breakfast/green-sandwich.jpg",
    description: "A wholesome multigrain sandwich loaded with fresh microgreens, avocado spread, and crunchy vegetables. The ultimate grab-and-go healthy breakfast.",
    ingredients: [
      "Multigrain bread",
      "Fresh Preegreen microgreens",
      "Avocado spread",
      "Cherry tomatoes",
      "Cucumber slices",
      "Herb seasoning",
      "Olive oil drizzle"
    ],
    nutrition: {
      calories: 320,
      protein: 11,
      carbs: 38,
      fat: 14,
      fiber: 9,
      vitamins: ["Vitamin E", "Vitamin K", "Vitamin C", "B Vitamins"],
      minerals: ["Potassium", "Magnesium", "Iron", "Calcium"]
    },
    fitnessbenefits: [
      "Healthy fats for hormone balance",
      "Slow-release carbohydrates",
      "Perfect pre-workout meal",
      "Keeps you full for hours"
    ],
    customizationOptions: [
      "Bread type (multigrain/whole wheat/gluten-free)",
      "Extra avocado",
      "Add cheese",
      "Add sprouts",
      "Low-calorie version"
    ],
    dayPlan: "Days 2, 7, 12, 17, 22, 27"
  },
  {
    id: "microgreen-mix",
    name: "Microgreen Mix Bowl",
    image: "/breakfast/microgreen-mix.jpg",
    description: "A vibrant breakfast bowl featuring our signature blend of 5 microgreens, topped with nuts, seeds, and a light citrus dressing. Pure plant power.",
    ingredients: [
      "5-variety Preegreen mix",
      "Quinoa base",
      "Roasted almonds",
      "Pumpkin seeds",
      "Hemp hearts",
      "Lemon-tahini dressing",
      "Fresh herbs"
    ],
    nutrition: {
      calories: 380,
      protein: 16,
      carbs: 28,
      fat: 22,
      fiber: 7,
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin E", "K Vitamins"],
      minerals: ["Magnesium", "Zinc", "Iron", "Selenium"]
    },
    fitnessbenefits: [
      "Complete nutrition profile",
      "Omega-3 rich for brain health",
      "Anti-oxidant powerhouse",
      "Supports lean muscle maintenance"
    ],
    customizationOptions: [
      "Base (quinoa/brown rice/cauliflower rice)",
      "Nut-free option",
      "Extra protein (tofu/tempeh)",
      "Dressing on side",
      "Add seasonal fruits"
    ],
    dayPlan: "Days 3, 8, 13, 18, 23, 28"
  },
  {
    id: "green-thepla",
    name: "Green Thepla",
    image: "/breakfast/green-thepla.jpg",
    description: "Traditional Gujarati flatbread infused with fresh microgreens and fenugreek. A healthy twist on a classic favorite, perfect with yogurt or pickle.",
    ingredients: [
      "Whole wheat flour",
      "Fresh fenugreek microgreens",
      "Spinach microgreens",
      "Turmeric powder",
      "Cumin seeds",
      "Ajwain",
      "Cold-pressed oil"
    ],
    nutrition: {
      calories: 280,
      protein: 9,
      carbs: 42,
      fat: 8,
      fiber: 6,
      vitamins: ["Vitamin A", "Vitamin K", "B Vitamins", "Folate"],
      minerals: ["Iron", "Calcium", "Manganese", "Phosphorus"]
    },
    fitnessbenefits: [
      "Complex carbs for sustained energy",
      "Iron-rich for endurance",
      "Easy to digest",
      "Perfect travel-friendly option"
    ],
    customizationOptions: [
      "Spice level adjustment",
      "Oil quantity (regular/low-oil)",
      "Gluten-free flour option",
      "Extra microgreens blend",
      "Served with accompaniments"
    ],
    dayPlan: "Days 4, 9, 14, 19, 24"
  },
  {
    id: "mixed-sprouts",
    name: "Mixed Sprouts Bowl",
    image: "/breakfast/sprouts.jpg",
    description: "A refreshing bowl of 7 sprouted legumes and beans, seasoned with chaat masala and fresh lemon. Light yet incredibly nutritious.",
    ingredients: [
      "Moong sprouts",
      "Chana sprouts",
      "Moth bean sprouts",
      "Masoor sprouts",
      "Fresh microgreens topping",
      "Chaat masala",
      "Lemon juice"
    ],
    nutrition: {
      calories: 195,
      protein: 13,
      carbs: 28,
      fat: 3,
      fiber: 10,
      vitamins: ["Vitamin C", "Vitamin K", "B Vitamins", "Folate"],
      minerals: ["Iron", "Magnesium", "Potassium", "Zinc"]
    },
    fitnessbenefits: [
      "Highest protein-to-calorie ratio",
      "Enzyme-rich for digestion",
      "Low fat, high nutrition",
      "Perfect for cutting phase"
    ],
    customizationOptions: [
      "Sprout varieties selection",
      "Add puffed rice for crunch",
      "Extra vegetables",
      "Spice level preference",
      "Add roasted peanuts"
    ],
    dayPlan: "Days 5, 10, 15, 20, 25"
  }
];
