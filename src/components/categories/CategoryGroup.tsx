
import React from 'react';
import { CategoryCard } from './CategoryCard';

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  link: string;
};

type CategoryGroupProps = {
  title: string;
  categories: Category[];
  selectedCategory: string;
  onCategoryClick: (categoryId: string) => void;
};

export const CategoryGroup: React.FC<CategoryGroupProps> = ({
  title,
  categories,
  selectedCategory,
  onCategoryClick
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            icon={category.icon}
            color={category.color}
            textColor={category.textColor}
            isSelected={selectedCategory === category.id}
            onClick={onCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};
