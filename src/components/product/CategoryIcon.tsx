
import React from 'react';
import { 
  Grid2X2, 
  Shirt, 
  Home, 
  Watch, 
  Smartphone, 
  LampDesk, 
  Utensils, 
  Baby, 
  HeartPulse, 
  Dumbbell,
  LucideIcon
} from 'lucide-react';

type CategoryIconProps = {
  categoryId: string;
  size?: number;
  className?: string;
};

export const CategoryIcon: React.FC<CategoryIconProps> = ({ 
  categoryId, 
  size = 24,
  className = ""
}) => {
  const getCategoryIcon = (categoryId: string) => {
    const categoryIcons: Record<string, LucideIcon> = {
      'all': Grid2X2,
      'Electronics': Smartphone,
      'Fashion': Shirt,
      'Home & Kitchen': Home,
      'Accessories': Watch,
      'Furniture': LampDesk,
      'Kitchen': Utensils,
      'Kids & Baby': Baby,
      'Health': HeartPulse,
      'Sports & Fitness': Dumbbell,
    };

    const Icon = categoryIcons[categoryId] || Grid2X2;
    return <Icon className={className} size={size} />;
  };

  return getCategoryIcon(categoryId);
};
