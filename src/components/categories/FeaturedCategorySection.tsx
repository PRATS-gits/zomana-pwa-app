
import React from 'react';
import { Button } from '@/components/ui/button';

type FeaturedContent = {
  title: string;
  description: string;
  subcategories: string[];
};

type FeaturedCategorySectionProps = {
  featuredContent: FeaturedContent;
  onViewAllClick: (categoryId: string) => void;
  onSubcategoryClick: (category: string, subcategory: string) => void;
  featuredCategory: string;
};

export const FeaturedCategorySection: React.FC<FeaturedCategorySectionProps> = ({
  featuredContent,
  onViewAllClick,
  onSubcategoryClick,
  featuredCategory
}) => {
  return (
    <div className="mt-12 p-6 bg-muted/50 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">{featuredContent.title}</h2>
          <p className="text-muted-foreground mt-1">{featuredContent.description}</p>
        </div>
        <Button 
          className="mt-4 md:mt-0" 
          onClick={() => onViewAllClick(featuredCategory)}
        >
          View All Products
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {featuredContent.subcategories.map((subcat, index) => (
          <div 
            key={index}
            onClick={() => onSubcategoryClick(featuredCategory, subcat)}
            className="text-center p-3 bg-background rounded-md hover:bg-primary/10 transition-colors cursor-pointer"
          >
            <p className="text-sm font-medium">{subcat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
