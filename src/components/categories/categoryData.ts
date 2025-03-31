
import { 
  Grid2X2, 
  Tag, 
  ShoppingBag, 
  Home, 
  Shirt, 
  Watch, 
  Smartphone, 
  LampDesk, 
  Utensils, 
  Baby, 
  HeartPulse, 
  Dumbbell 
} from 'lucide-react';
import React from 'react';

export type CategoryGroup = {
  title: string;
  categories: {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
    textColor: string;
    link: string;
  }[];
};

export const categoryGroups: CategoryGroup[] = [
  {
    title: 'Popular Categories',
    categories: [
      { 
        id: 'Electronics', 
        name: 'Electronics', 
        icon: React.createElement(Smartphone, { className: "h-6 w-6" }), 
        color: 'bg-blue-100', 
        textColor: 'text-blue-700', 
        link: '/products?category=Electronics' 
      },
      { 
        id: 'Fashion', 
        name: 'Clothing', 
        icon: React.createElement(Shirt, { className: "h-6 w-6" }), 
        color: 'bg-green-100', 
        textColor: 'text-green-700', 
        link: '/category/clothing' 
      },
      { 
        id: 'Home & Kitchen', 
        name: 'Home & Living', 
        icon: React.createElement(Home, { className: "h-6 w-6" }), 
        color: 'bg-yellow-100', 
        textColor: 'text-yellow-700', 
        link: '/products?category=Home & Kitchen' 
      },
      { 
        id: 'Accessories', 
        name: 'Accessories', 
        icon: React.createElement(Watch, { className: "h-6 w-6" }), 
        color: 'bg-purple-100', 
        textColor: 'text-purple-700', 
        link: '/category/accessories' 
      },
    ]
  },
  {
    title: 'Lifestyle',
    categories: [
      { 
        id: 'Furniture', 
        name: 'Furniture', 
        icon: React.createElement(LampDesk, { className: "h-6 w-6" }), 
        color: 'bg-amber-100', 
        textColor: 'text-amber-700', 
        link: '/products?category=Furniture' 
      },
      { 
        id: 'Kitchen', 
        name: 'Kitchen', 
        icon: React.createElement(Utensils, { className: "h-6 w-6" }), 
        color: 'bg-red-100', 
        textColor: 'text-red-700', 
        link: '/products?category=Kitchen' 
      },
      { 
        id: 'Kids & Baby', 
        name: 'Kids & Baby', 
        icon: React.createElement(Baby, { className: "h-6 w-6" }), 
        color: 'bg-pink-100', 
        textColor: 'text-pink-700', 
        link: '/products?category=Kids & Baby' 
      },
      { 
        id: 'Health', 
        name: 'Health', 
        icon: React.createElement(HeartPulse, { className: "h-6 w-6" }), 
        color: 'bg-emerald-100', 
        textColor: 'text-emerald-700', 
        link: '/category/health' 
      },
    ]
  },
  {
    title: 'Special Collections',
    categories: [
      { 
        id: 'new', 
        name: 'New Arrivals', 
        icon: React.createElement(Tag, { className: "h-6 w-6" }), 
        color: 'bg-indigo-100', 
        textColor: 'text-indigo-700', 
        link: '/products/new' 
      },
      { 
        id: 'sale', 
        name: 'Sale Items', 
        icon: React.createElement(ShoppingBag, { className: "h-6 w-6" }), 
        color: 'bg-rose-100', 
        textColor: 'text-rose-700', 
        link: '/deals' 
      },
      { 
        id: 'Sports & Fitness', 
        name: 'Sports & Fitness', 
        icon: React.createElement(Dumbbell, { className: "h-6 w-6" }), 
        color: 'bg-cyan-100', 
        textColor: 'text-cyan-700', 
        link: '/category/sports' 
      },
      { 
        id: 'all', 
        name: 'All Categories', 
        icon: React.createElement(Grid2X2, { className: "h-6 w-6" }), 
        color: 'bg-slate-100', 
        textColor: 'text-slate-700', 
        link: '/products' 
      },
    ]
  }
];

export type FeaturedContentMap = {
  [key: string]: {
    title: string;
    description: string;
    subcategories: string[];
  };
};

export const featuredContentMap: FeaturedContentMap = {
  Electronics: {
    title: "Electronics",
    description: "Discover the latest gadgets and tech essentials for your home and lifestyle.",
    subcategories: ["Smartphones", "Laptops", "Audio", "Smart Home", "Wearables", "Cameras", "Gaming"]
  },
  Fashion: {
    title: "Clothing",
    description: "Explore stylish and trendy clothing options for men, women, and children.",
    subcategories: ["Men's Wear", "Women's Fashion", "Kids Clothing", "Sportswear", "Formal Wear", "Casual Attire", "Seasonal Collections"]
  },
  'Home & Kitchen': {
    title: "Home & Living",
    description: "Transform your living space with our curated collection of home essentials and decor.",
    subcategories: ["Living Room", "Bedroom", "Kitchen & Dining", "Bathroom", "Home Office", "Garden & Outdoor", "Home Decor"]
  },
  Accessories: {
    title: "Accessories",
    description: "Complete your look with our premium selection of fashion accessories.",
    subcategories: ["Watches", "Jewelry", "Bags", "Eyewear", "Hats & Caps", "Belts", "Scarves"]
  },
  Furniture: {
    title: "Furniture",
    description: "Find the perfect furniture pieces to enhance your home's comfort and style.",
    subcategories: ["Sofas", "Beds", "Tables", "Chairs", "Storage", "Office Furniture", "Outdoor"]
  },
  Kitchen: {
    title: "Kitchen",
    description: "Equip your kitchen with high-quality cookware, appliances, and dining essentials.",
    subcategories: ["Cookware", "Utensils", "Appliances", "Dinnerware", "Glassware", "Food Storage", "Bakeware"]
  },
  'Kids & Baby': {
    title: "Kids & Baby",
    description: "Everything you need for your little ones, from clothes to toys and nursery items.",
    subcategories: ["Baby Clothes", "Toys", "Nursery", "Strollers", "Car Seats", "Feeding", "Diapering"]
  },
  Health: {
    title: "Health",
    description: "Prioritize your wellbeing with our health and wellness products.",
    subcategories: ["Vitamins", "Personal Care", "Fitness", "Health Monitors", "Wellness", "Skincare", "First Aid"]
  },
  new: {
    title: "New Arrivals",
    description: "Be the first to discover our latest products across all categories.",
    subcategories: ["Latest Electronics", "New Fashion", "Fresh Home Items", "Just Launched", "Pre-orders", "Coming Soon", "Limited Editions"]
  },
  sale: {
    title: "Sale Items",
    description: "Great deals and discounts on a wide range of products.",
    subcategories: ["Clearance", "Seasonal Sale", "Bundle Deals", "Last Chance", "Special Offers", "Members Only", "Outlet"]
  },
  'Sports & Fitness': {
    title: "Sports & Fitness",
    description: "Equipment and apparel for all your sports and fitness activities.",
    subcategories: ["Workout Gear", "Sporting Equipment", "Athletic Wear", "Outdoor Sports", "Team Sports", "Fitness Accessories", "Supplements"]
  },
  all: {
    title: "All Categories",
    description: "Browse through our complete catalog of products.",
    subcategories: ["Featured Items", "Best Sellers", "Highest Rated", "Staff Picks", "Recommended", "Popular", "Trending"]
  }
};
