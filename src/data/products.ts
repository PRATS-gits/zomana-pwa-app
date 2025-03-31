
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  onSale?: boolean;
  features?: string[];
  specifications?: Record<string, string>;
  stock: number;
}

export const products: Product[] = [
  // Electronics
  {
    id: "p1",
    title: "Smart Watch Series 5",
    description: "The ultimate device for a healthier life. Apple Watch can do what your other devices can't because it's on your wrist. When you wear it, you get a fitness partner that measures all the ways you move, meaningful health insights, and a connection to the people and things you care about most.",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
    ],
    category: "Electronics",
    subcategory: "Wearables",
    rating: 4.8,
    reviewCount: 152,
    isNew: true,
    onSale: true,
    features: [
      "Always-On Retina display",
      "ECG app",
      "Heart rate notifications",
      "Activity tracking",
      "Water resistant to 50 meters"
    ],
    specifications: {
      "Case Size": "44mm",
      "Display": "Always-On Retina LTPO OLED",
      "Processor": "S5 with 64-bit dual-core processor",
      "Connectivity": "Wi-Fi (802.11b/g/n 2.4GHz), Bluetooth 5.0",
      "Battery": "Up to 18 hours"
    },
    stock: 45
  },
  {
    id: "p2",
    title: "Professional Wireless Headphones",
    description: "Premium noise cancelling headphones with high-quality sound, wireless freedom, and a comfortable fit. Perfect for long listening sessions, featuring adaptive sound control that adjusts ambient sound settings to your environment.",
    price: 179.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    category: "Electronics",
    subcategory: "Audio",
    rating: 4.6,
    reviewCount: 89,
    onSale: true,
    features: [
      "Industry-leading noise cancellation",
      "30 hours battery life",
      "Touch controls",
      "Quick charging (5 hours playback from 10 min charge)",
      "Voice assistant compatibility"
    ],
    specifications: {
      "Driver": "40mm, dome type",
      "Frequency Response": "4Hz-40,000Hz",
      "Battery Life": "Up to 30 hours",
      "Weight": "254g",
      "Bluetooth": "Version 5.0"
    },
    stock: 23
  },
  {
    id: "p3",
    title: "iPhone 13 Pro - Alpine Green",
    description: "The iPhone 13 Pro takes a huge leap forward, bringing incredible speed to everything you do and dramatic new photo and video capabilities — all in two beautiful finishes.",
    price: 999.00,
    image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    images: [
      "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1592750475357-99a780301881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80"
    ],
    category: "Electronics",
    subcategory: "Smartphones",
    rating: 4.9,
    reviewCount: 284,
    isNew: true,
    features: [
      "Super Retina XDR display with ProMotion",
      "Pro camera system with new 12MP Telephoto",
      "A15 Bionic chip",
      "Up to 28 hours video playback",
      "Face ID"
    ],
    specifications: {
      "Display": "6.1‑inch Super Retina XDR display with ProMotion",
      "Capacity": "128GB / 256GB / 512GB / 1TB",
      "Chip": "A15 Bionic chip",
      "Camera": "Pro 12MP camera system",
      "Battery": "Up to 22 hours video playback"
    },
    stock: 12
  },
  
  // Furniture
  {
    id: "p4",
    title: "Modern Coffee Table",
    description: "A minimalist coffee table featuring a blend of modern design and functionality. The sleek silhouette and clean lines make it a perfect centerpiece for any living room.",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
    images: [
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1532499012374-13b9fc61a19c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Furniture",
    subcategory: "Tables",
    rating: 4.5,
    reviewCount: 56,
    onSale: true,
    features: [
      "Minimalist design",
      "Durable construction",
      "Easy assembly",
      "Spacious surface area",
      "Built-in storage shelf"
    ],
    specifications: {
      "Materials": "Engineered wood, steel",
      "Dimensions": "47\" W x 23.5\" D x 16\" H",
      "Weight": "40 lbs",
      "Assembly": "Required, tools included",
      "Warranty": "1-year limited"
    },
    stock: 34
  },
  {
    id: "p5",
    title: "Ergonomic Office Chair",
    description: "Designed for all-day comfort, this ergonomic office chair features adjustable height, breathable mesh back, and lumbar support to help maintain proper posture during long work sessions.",
    price: 229.99,
    originalPrice: 279.99,
    image: "https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    category: "Furniture",
    subcategory: "Chairs",
    rating: 4.7,
    reviewCount: 132,
    onSale: true,
    features: [
      "Adjustable height and armrests",
      "Breathable mesh back",
      "Lumbar support",
      "360° swivel",
      "Smooth-rolling casters"
    ],
    specifications: {
      "Material": "Mesh, fabric, metal frame",
      "Weight Capacity": "275 lbs",
      "Seat Dimensions": "20\" W x 19\" D",
      "Back Height": "22\"",
      "Warranty": "3-year limited"
    },
    stock: 18
  },
  
  // Electronics
  {
    id: "p6",
    title: "Digital SLR Camera with 18-55mm Lens",
    description: "Capture stunning photos and videos with this versatile digital SLR camera. The included 18-55mm lens is perfect for everyday photography, from landscapes to portraits.",
    price: 649.99,
    originalPrice: 799.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Electronics",
    subcategory: "Cameras",
    rating: 4.7,
    reviewCount: 78,
    isNew: false,
    onSale: true,
    features: [
      "24.2MP CMOS sensor",
      "DIGIC 8 image processor",
      "Dual Pixel CMOS AF",
      "4K video recording",
      "3.0\" vari-angle touchscreen LCD"
    ],
    specifications: {
      "Sensor": "24.2MP APS-C CMOS",
      "ISO Range": "100-25600 (expandable to 51200)",
      "Continuous Shooting": "Up to 7 fps",
      "Video": "4K UHD at 24p",
      "Battery Life": "Approx. 1,300 shots per charge"
    },
    stock: 15
  },
  {
    id: "p7",
    title: "Ultra-thin Laptop 15\"",
    description: "Experience exceptional performance in an incredibly thin design. With a stunning 15-inch display, powerful processor, and all-day battery life, this laptop is perfect for work and play.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "Electronics",
    subcategory: "Laptops",
    rating: 4.8,
    reviewCount: 203,
    isNew: true,
    features: [
      "15.6\" 4K Ultra HD display",
      "11th Gen Intel Core i7 processor",
      "16GB RAM, 512GB SSD",
      "Intel Iris Xe Graphics",
      "Up to 12 hours battery life"
    ],
    specifications: {
      "Processor": "Intel Core i7-1165G7",
      "Memory": "16GB LPDDR4X",
      "Storage": "512GB PCIe NVMe SSD",
      "Display": "15.6\" 4K (3840 x 2160) IPS",
      "Weight": "3.64 lbs (1.65 kg)"
    },
    stock: 8
  },
  
  // Fashion
  {
    id: "p8",
    title: "Leather Weekend Bag",
    description: "A stylish and durable weekend bag crafted from premium leather. Perfect for short trips, this spacious bag features multiple compartments to keep your belongings organized.",
    price: 189.99,
    originalPrice: 229.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "Fashion",
    subcategory: "Men's Wear",
    rating: 4.6,
    reviewCount: 45,
    onSale: true,
    features: [
      "Genuine full-grain leather",
      "Spacious main compartment",
      "Multiple interior pockets",
      "Adjustable shoulder strap",
      "Durable metal hardware"
    ],
    specifications: {
      "Material": "Full-grain leather",
      "Dimensions": "21\" L x 11\" H x 9\" W",
      "Capacity": "40L",
      "Weight": "3.2 lbs",
      "Closure": "Top zipper"
    },
    stock: 22
  },
  
  // Health Products
  {
    id: "p9",
    title: "Smart Fitness Tracker",
    description: "Track your fitness goals with this advanced fitness tracker. Monitor heart rate, sleep quality, and activity levels with precision. Water-resistant and long battery life.",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    images: [
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      "https://images.unsplash.com/photo-1509983165097-0c31a863e3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Health",
    subcategory: "Health Monitors",
    rating: 4.4,
    reviewCount: 178,
    isNew: true,
    onSale: true,
    features: [
      "24/7 heart rate monitoring",
      "Sleep tracking",
      "Step counter",
      "Water-resistant (50m)",
      "7-day battery life"
    ],
    specifications: {
      "Display": "OLED touch screen",
      "Battery": "Lithium polymer",
      "Connectivity": "Bluetooth 5.0",
      "Sensors": "Accelerometer, optical heart rate sensor",
      "Compatibility": "iOS 10.0+ / Android 5.0+"
    },
    stock: 120
  },
  {
    id: "p10",
    title: "Vitamin D3 Supplements (90 Capsules)",
    description: "High-potency vitamin D3 supplement to support immune health, bone strength, and overall well-being. Each capsule contains 5000 IU of vitamin D3.",
    price: 19.99,
    originalPrice: 24.99,
    image: "https://images.unsplash.com/photo-1584362917137-56406a73241c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    images: [
      "https://images.unsplash.com/photo-1584362917137-56406a73241c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Health",
    subcategory: "Vitamins",
    rating: 4.7,
    reviewCount: 421,
    features: [
      "5000 IU per capsule",
      "90-day supply",
      "Supports immune function",
      "Promotes bone health",
      "Non-GMO formula"
    ],
    specifications: {
      "Serving Size": "1 capsule",
      "Servings Per Container": "90",
      "Ingredients": "Vitamin D3, olive oil, gelatin capsule",
      "Suggested Use": "Take 1 capsule daily with food",
      "Storage": "Store in a cool, dry place"
    },
    stock: 350
  },
  
  // Sports & Fitness
  {
    id: "p11",
    title: "Premium Yoga Mat",
    description: "High-density yoga mat providing excellent cushioning and grip for all types of yoga. Non-slip surface ensures safety during practice, while the eco-friendly material is free from harmful chemicals.",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
    ],
    category: "Sports & Fitness",
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
    id: "p12",
    title: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbell set that replaces 15 sets of weights. Quickly switch between weights with the simple dial system, perfect for home gyms and varied workout routines.",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Sports & Fitness",
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
  
  // Home & Kitchen
  {
    id: "p13",
    title: "Smart Home Assistant Speaker",
    description: "Voice-controlled smart speaker with premium sound quality. Control your smart home devices, play music, get news updates, and more with simple voice commands.",
    price: 99.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1512446816042-444d641267d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
    ],
    category: "Home & Kitchen",
    subcategory: "Smart Home",
    rating: 4.6,
    reviewCount: 521,
    isNew: true,
    features: [
      "Voice control",
      "Smart home integration",
      "360° sound",
      "Far-field microphones",
      "Multi-room audio support"
    ],
    specifications: {
      "Connectivity": "Wi-Fi, Bluetooth",
      "Power": "AC power",
      "Dimensions": "5.8\" x 5.8\" x 3.9\"",
      "Speakers": "2.5\" woofer, 0.5\" tweeter",
      "Microphones": "7-mic array"
    },
    stock: 42
  },
  {
    id: "p14",
    title: "Professional Stand Mixer",
    description: "Powerful stand mixer perfect for baking enthusiasts. Easily mix, knead, and whip ingredients with 10 speed settings and multiple attachments for versatile food preparation.",
    price: 379.99,
    originalPrice: 449.99,
    image: "https://images.unsplash.com/photo-1594228737120-6b1eda06b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1594228737120-6b1eda06b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1578020190105-f8487ac16ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "Kitchen",
    subcategory: "Appliances",
    rating: 4.9,
    reviewCount: 1248,
    onSale: true,
    features: [
      "500W powerful motor",
      "5-quart stainless steel bowl",
      "10 speed settings",
      "Tilt-head design",
      "Includes whisk, dough hook, and flat beater"
    ],
    specifications: {
      "Power": "500 watts",
      "Capacity": "5 quarts",
      "Speeds": "10",
      "Dimensions": "14.1\" H x 8.7\" W x 14\" D",
      "Warranty": "1-year limited"
    },
    stock: 23
  },
  
  // Accessories
  {
    id: "p15",
    title: "Luxury Automatic Watch",
    description: "Elegant automatic watch with premium craftsmanship. Features a sophisticated design with sapphire crystal, stainless steel case, and genuine leather strap.",
    price: 349.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1608541737042-87a473cbb337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
    ],
    category: "Accessories",
    subcategory: "Watches",
    rating: 4.7,
    reviewCount: 87,
    onSale: true,
    features: [
      "Automatic movement",
      "Sapphire crystal",
      "Stainless steel case",
      "Genuine leather strap",
      "Water-resistant to 50m"
    ],
    specifications: {
      "Case Diameter": "42mm",
      "Movement": "Japanese automatic",
      "Water Resistance": "50 meters",
      "Band Material": "Genuine leather",
      "Warranty": "2-year international"
    },
    stock: 19
  },
  {
    id: "p16",
    title: "Designer Polarized Sunglasses",
    description: "Premium polarized sunglasses with UV protection. Stylish design with durable frame and polarized lenses that reduce glare and enhance vision clarity.",
    price: 129.99,
    originalPrice: 169.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      "https://images.unsplash.com/photo-1566003358094-e9c2a02b9583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    ],
    category: "Accessories",
    subcategory: "Eyewear",
    rating: 4.5,
    reviewCount: 124,
    isNew: true,
    features: [
      "Polarized lenses",
      "100% UV protection",
      "Lightweight frame",
      "Anti-reflective coating",
      "Scratch-resistant lenses"
    ],
    specifications: {
      "Frame Material": "Acetate",
      "Lens Material": "Polycarbonate",
      "Lens Width": "52mm",
      "Bridge Width": "21mm",
      "Temple Length": "145mm"
    },
    stock: 48
  },
  
  // Kids & Baby
  {
    id: "p17",
    title: "Interactive Learning Toy Set",
    description: "Educational toy set designed to develop cognitive skills, problem-solving abilities, and creativity in children ages 3-6. Includes multiple activities for endless learning fun.",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
      "https://images.unsplash.com/photo-1560859251-d563a49c41f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
    ],
    category: "Kids & Baby",
    subcategory: "Toys",
    rating: 4.8,
    reviewCount: 312,
    features: [
      "6 learning activities",
      "Lights and sounds",
      "Teaches letters, numbers, and shapes",
      "Bilingual option (English/Spanish)",
      "Requires 3 AA batteries (included)"
    ],
    specifications: {
      "Age Range": "3-6 years",
      "Material": "BPA-free plastic",
      "Dimensions": "12\" x 10\" x 3\"",
      "Battery": "3 AA batteries (included)",
      "Educational Focus": "Literacy, numeracy, problem-solving"
    },
    stock: 65
  },
  {
    id: "p18",
    title: "Baby Sleep Soother",
    description: "Gentle sleep aid for babies with soothing sounds, lullabies, and soft night light. Helps establish healthy sleep routines and comforts fussy babies.",
    price: 34.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
    ],
    category: "Kids & Baby",
    subcategory: "Nursery",
    rating: 4.7,
    reviewCount: 245,
    isNew: true,
    onSale: true,
    features: [
      "10 soothing sounds and lullabies",
      "Soft night light with adjustable brightness",
      "Auto-off timer (15, 30, 60 min)",
      "Volume control",
      "Portable design"
    ],
    specifications: {
      "Power": "USB rechargeable (cable included)",
      "Battery Life": "Up to a week on one charge",
      "Dimensions": "4.5\" diameter x 2\" height",
      "Sound Options": "White noise, heartbeat, lullabies, nature sounds",
      "Materials": "BPA-free plastic, soft-touch surface"
    },
    stock: 89
  }
];

// New export to seed products into Supabase
export const loadSampleProducts = async () => {
  // This function will load all sample products into the Supabase database
  const { supabase } = await import('@/integrations/supabase/client');
  
  console.log("Starting product seeding process...");
  
  // Insert each product
  for (const product of products) {
    // Insert product
    const { data: insertedProduct, error: productError } = await supabase
      .from('products')
      .insert({
        title: product.title,
        description: product.description,
        price: product.price,
        original_price: product.originalPrice,
        category: product.category,
        subcategory: product.subcategory,
        rating: product.rating,
        review_count: product.reviewCount,
        is_new: product.isNew,
        on_sale: product.onSale,
        stock: product.stock
      })
      .select('id')
      .single();
      
    if (productError) {
      console.error(`Error inserting product ${product.title}:`, productError);
      continue;
    }
    
    const productId = insertedProduct.id;
    
    // Insert product images
    for (let i = 0; i < product.images.length; i++) {
      const { error: imageError } = await supabase
        .from('product_images')
        .insert({
          product_id: productId,
          image_url: product.images[i],
          is_primary: i === 0, // First image is primary
          display_order: i
        });
        
      if (imageError) {
        console.error(`Error inserting image for ${product.title}:`, imageError);
      }
    }
    
    // Insert product features if they exist
    if (product.features) {
      for (let i = 0; i < product.features.length; i++) {
        const { error: featureError } = await supabase
          .from('product_features')
          .insert({
            product_id: productId,
            feature: product.features[i],
            display_order: i
          });
          
        if (featureError) {
          console.error(`Error inserting feature for ${product.title}:`, featureError);
        }
      }
    }
    
    // Insert product specifications if they exist
    if (product.specifications) {
      for (const [key, value] of Object.entries(product.specifications)) {
        const { error: specError } = await supabase
          .from('product_specifications')
          .insert({
            product_id: productId,
            specification_key: key,
            specification_value: value
          });
          
        if (specError) {
          console.error(`Error inserting specification for ${product.title}:`, specError);
        }
      }
    }
    
    console.log(`Successfully seeded product: ${product.title}`);
  }
  
  console.log("Product seeding completed!");
  return true;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew).slice(0, 4);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.onSale).slice(0, 4);
};
