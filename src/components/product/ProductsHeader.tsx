
import React from 'react';
import { CategoryFilter, Category } from './CategoryFilter';
import { CategoryIcon } from './CategoryIcon';

type ProductsHeaderProps = {
  categories: Category[];
  selectedCategory: string | undefined;
  selectedSubcategory: string | undefined;
  onCategoryChange: (category: string) => void;
};

export const ProductsHeader: React.FC<ProductsHeaderProps> = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange
}) => {
  const getCategoryName = () => {
    if (!selectedCategory) return 'All Products';
    const category = categories.find(c => c.id === selectedCategory);
    return category ? category.name : 'All Products';
  };

  const getSubtitle = () => {
    if (selectedSubcategory) {
      return `Browsing ${selectedSubcategory} in ${selectedCategory}`;
    } else if (selectedCategory) {
      return `Explore our ${selectedCategory} collection`;
    } else {
      return 'Browse our complete product catalog';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <div className="flex items-center gap-3 mb-4 sm:mb-0">
        {selectedCategory ? (
          <div className="bg-primary/10 text-primary h-12 w-12 rounded-full flex items-center justify-center">
            <CategoryIcon categoryId={selectedCategory} />
          </div>
        ) : null}
        <div>
          <h1 className="text-3xl font-bold">
            {getCategoryName()}
          </h1>
          <p className="text-muted-foreground">
            {getSubtitle()}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onCategoryChange={onCategoryChange} 
        />
      </div>
    </div>
  );
};
