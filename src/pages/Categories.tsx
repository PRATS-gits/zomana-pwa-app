
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { CategoryGroup } from '@/components/categories/CategoryGroup';
import { FeaturedCategorySection } from '@/components/categories/FeaturedCategorySection';
import { categoryGroups, featuredContentMap } from '@/components/categories/categoryData';

const Categories = () => {
  const [featuredCategory, setFeaturedCategory] = useState('Electronics');
  const navigate = useNavigate();
  
  const handleCategoryClick = (categoryId: string) => {
    setFeaturedCategory(categoryId);
  };

  const handleViewAllClick = (categoryId: string) => {
    // Get the category object
    const category = [...categoryGroups[0].categories, ...categoryGroups[1].categories, ...categoryGroups[2].categories]
      .find(c => c.id === categoryId);
    
    if (category && category.link) {
      navigate(category.link);
    } else if (categoryId === 'new') {
      navigate('/products/new');
    } else if (categoryId === 'sale') {
      navigate('/deals');
    } else {
      navigate(`/products?category=${categoryId}`);
    }
  };

  const handleSubcategoryClick = (category: string, subcategory: string) => {
    // Special cases
    if (category === 'new') {
      navigate('/products/new');
      return;
    } 
    if (category === 'sale') {
      navigate('/deals');
      return;
    }
    if (category === 'all') {
      navigate('/products');
      return;
    }
    
    // Get the category object for its link pattern
    const categoryObj = [...categoryGroups[0].categories, ...categoryGroups[1].categories, ...categoryGroups[2].categories]
      .find(c => c.id === category);
    
    if (categoryObj && categoryObj.link && categoryObj.link.includes('category/')) {
      // For dedicated category pages
      navigate(`${categoryObj.link}?subcategory=${subcategory.toLowerCase().replace(' ', '-')}`);
    } else {
      // For products page with query parameters
      navigate(`/products?category=${category}&subcategory=${subcategory.toLowerCase().replace(' ', '-')}`);
    }
  };

  // Get current featured content with a fallback in case it's undefined
  const currentFeatured = featuredContentMap[featuredCategory] || featuredContentMap['Electronics'];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold">Shop by Category</h1>
          <p className="text-muted-foreground">Find exactly what you need by browsing our organized categories</p>
        </div>

        <Separator className="my-8" />

        {/* Main Categories Section */}
        <div className="space-y-12">
          {categoryGroups.map((group, groupIndex) => (
            <CategoryGroup
              key={groupIndex}
              title={group.title}
              categories={group.categories}
              selectedCategory={featuredCategory}
              onCategoryClick={handleCategoryClick}
            />
          ))}
        </div>

        {/* Featured Category Content */}
        <FeaturedCategorySection 
          featuredContent={currentFeatured}
          onViewAllClick={handleViewAllClick}
          onSubcategoryClick={handleSubcategoryClick}
          featuredCategory={featuredCategory}
        />
      </motion.div>
    </div>
  );
};

export default Categories;
