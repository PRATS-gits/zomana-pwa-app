
export interface SportsFitnessProduct {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  subcategory?: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  onSale?: boolean;
  features?: string[];
  specifications?: Record<string, string>;
  stock: number;
}

export const sportsFitnessProducts: SportsFitnessProduct[] = [
  {
    title: "Premium Yoga Mat",
    description: "High-density yoga mat providing excellent cushioning and grip for all types of yoga. Non-slip surface ensures safety during practice, while the eco-friendly material is free from harmful chemicals.",
    price: 49.99,
    originalPrice: 69.99,
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
    ],
    subcategory: "Workout Gear",
    rating: 4.8,
    reviewCount: 216,
    onSale: true,
    features: [
      "6mm thickness for optimal comfort",
      "Non-slip surface",
      "Eco-friendly materials",
      "Easy to clean",
      "Includes carrying strap"
    ],
    specifications: {
      "Material": "TPE (Thermoplastic Elastomer)",
      "Dimensions": "72\" x 24\" x 6mm",
      "Weight": "2.5 lbs",
      "Colors Available": "Purple, Blue, Black, Green",
      "Care": "Wipe clean with damp cloth"
    },
    stock: 87
  },
  {
    title: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbell set that replaces 15 sets of weights. Quickly switch between weights with the simple dial system, perfect for home gyms and varied workout routines.",
    price: 299.99,
    originalPrice: 399.99,
    images: [
      "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    subcategory: "Sporting Equipment",
    rating: 4.9,
    reviewCount: 183,
    isNew: true,
    features: [
      "Adjustable from 5-52.5 lbs",
      "Replaces 15 sets of weights",
      "Quick adjustment dial",
      "Compact storage",
      "Durable construction"
    ],
    specifications: {
      "Weight Range": "5-52.5 lbs (each dumbbell)",
      "Increments": "2.5 lbs up to 25 lbs, 5 lbs thereafter",
      "Handle": "Ergonomic grippy texture",
      "Dimensions": "16.9\" L x 8.3\" W x 9\" H (per dumbbell)",
      "Material": "Steel and durable molding"
    },
    stock: 15
  },
  {
    title: "Fitness Tracker Watch",
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and multiple sport modes. Track your fitness goals and stay motivated with real-time stats and achievements.",
    price: 89.99,
    originalPrice: 129.99,
    images: [
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      "https://images.unsplash.com/photo-1510024227321-9f9658be5612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    subcategory: "Fitness Accessories",
    rating: 4.7,
    reviewCount: 324,
    onSale: true,
    features: [
      "24/7 heart rate monitoring",
      "20+ sport modes",
      "Sleep quality analysis",
      "5 ATM water resistance",
      "14-day battery life"
    ],
    specifications: {
      "Display": "1.3\" Color Touch Screen",
      "Connectivity": "Bluetooth 5.0",
      "Compatibility": "iOS 9.0+ / Android 5.0+",
      "Battery": "300mAh Lithium Ion",
      "Sensors": "Accelerometer, Gyroscope, Heart Rate"
    },
    stock: 48
  },
  {
    title: "Protein Powder - Vanilla",
    description: "Premium whey protein isolate for muscle recovery and growth. Low in sugar and fat, this clean formula provides 25g of protein per serving to support your fitness goals.",
    price: 39.99,
    originalPrice: 49.99,
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c9cc4b56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1607443355671-a7d38016cde5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    subcategory: "Supplements",
    rating: 4.6,
    reviewCount: 512,
    features: [
      "25g protein per serving",
      "Low sugar and fat",
      "Gluten-free",
      "No artificial flavors",
      "Enzyme-enhanced for easy digestion"
    ],
    specifications: {
      "Size": "2 lb (908g)",
      "Servings": "30",
      "Protein Source": "Whey Isolate",
      "Calories per Serving": "120",
      "Protein per Serving": "25g"
    },
    stock: 75
  },
  {
    title: "Basketball - Official Size",
    description: "Official size and weight basketball with superior grip and durability. Ideal for indoor and outdoor play with consistent bounce performance on any court surface.",
    price: 29.99,
    originalPrice: 39.99,
    images: [
      "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      "https://images.unsplash.com/photo-1612118745077-ff41d8f36a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    ],
    subcategory: "Team Sports",
    rating: 4.7,
    reviewCount: 187,
    onSale: true,
    features: [
      "Official size and weight",
      "Deep channel design for better grip",
      "Durable rubber cover",
      "Suitable for indoor and outdoor use",
      "Consistent bounce performance"
    ],
    specifications: {
      "Size": "Size 7 (29.5\")",
      "Material": "Composite leather",
      "Weight": "22 oz",
      "Inflation": "8 PSI",
      "Recommended Use": "Indoor/Outdoor"
    },
    stock: 60
  },
  {
    title: "Hiking Backpack 40L",
    description: "Durable 40L hiking backpack with multiple compartments and hydration system compatibility. Designed for comfort during long treks with padded shoulder straps and ventilated back panel.",
    price: 79.99,
    originalPrice: 109.99,
    images: [
      "https://images.unsplash.com/photo-1527605158555-853f200063e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
      "https://images.unsplash.com/photo-1520374437325-67d0a1c0b54a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    ],
    subcategory: "Outdoor Sports",
    rating: 4.8,
    reviewCount: 156,
    isNew: true,
    features: [
      "40L capacity",
      "Hydration system compatible",
      "Multiple compartments and pockets",
      "Adjustable chest and waist straps",
      "Ventilated back panel"
    ],
    specifications: {
      "Material": "Ripstop nylon",
      "Capacity": "40 liters",
      "Weight": "2.4 lbs",
      "Dimensions": "24\" x 13\" x 9\"",
      "Water Resistant": "Yes"
    },
    stock: 29
  }
];
