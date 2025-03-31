
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { CategoryIcon } from './CategoryIcon';

export type Category = {
  id: string;
  name: string;
};

type CategoryFilterProps = {
  categories: Category[];
  selectedCategory: string | undefined;
  onCategoryChange: (category: string) => void;
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <Select 
      value={selectedCategory || 'all'}
      onValueChange={onCategoryChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map(category => (
          <SelectItem key={category.id} value={category.id}>
            <div className="flex items-center gap-2">
              <CategoryIcon categoryId={category.id} size={20} />
              <span>{category.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
