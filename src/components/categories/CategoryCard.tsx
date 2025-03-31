
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

type CategoryCardProps = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  isSelected: boolean;
  onClick: (id: string) => void;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  icon,
  color,
  textColor,
  isSelected,
  onClick
}) => {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => onClick(id)}
    >
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className={`${color} ${textColor} h-14 w-14 rounded-full flex items-center justify-center mb-3`}>
          {icon}
        </div>
        <h3 className="font-medium">{name}</h3>
      </CardContent>
    </Card>
  );
};
