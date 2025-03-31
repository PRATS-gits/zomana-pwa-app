
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ProductGrid } from '@/components/ui-components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const fetchClothingProducts = async (subcategory?: string) => {
  let query = supabase
    .from('products')
    .select(`
      id, 
      title, 
      description, 
      price, 
      original_price, 
      category, 
      rating, 
      review_count, 
      is_new, 
      on_sale, 
      stock,
      product_images (
        image_url, 
        is_primary, 
        display_order
      )
    `)
    .eq('category', 'Fashion');

  if (subcategory) {
    query = query.ilike('subcategory', `%${subcategory}%`);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data || [];
};

export default function ClothingCategory() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategoryParam = queryParams.get('subcategory');
  
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | undefined>(
    subcategoryParam || undefined
  );

  const { 
    data: products, 
    isLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ['clothing-products', selectedSubcategory],
    queryFn: () => fetchClothingProducts(selectedSubcategory),
  });

  // Refetch products when page loads to ensure we get the latest data
  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    // Update subcategory when URL changes
    const subcatParam = new URLSearchParams(location.search).get('subcategory');
    if (subcatParam !== selectedSubcategory) {
      setSelectedSubcategory(subcatParam || undefined);
    }
  }, [location.search]);

  const subcategories = [
    "All Clothing", 
    "Men's Wear", 
    "Women's Fashion", 
    "Kids Clothing", 
    "Sportswear", 
    "Formal Wear", 
    "Casual Attire", 
    "Seasonal Collections"
  ];

  // Helper function to seed products if none exist
  const seedProductsIfEmpty = async () => {
    if (!isLoading && (!products || products.length === 0)) {
      try {
        const { data: existingProducts } = await supabase
          .from('products')
          .select('id')
          .eq('category', 'Fashion')
          .limit(1);
          
        if (!existingProducts || existingProducts.length === 0) {
          // Run the seed function from data/products.ts
          const { loadSampleProducts } = await import('@/data/products');
          await loadSampleProducts();
          refetch();
        }
      } catch (error) {
        console.error("Error seeding products:", error);
      }
    }
  };

  // Attempt to seed products when page loads and no products exist
  useEffect(() => {
    seedProductsIfEmpty();
  }, [isLoading, products]);

  if (error) {
    return (
      <div className="container mx-auto py-8 text-center text-destructive">
        Error loading products: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 text-green-700 h-12 w-12 rounded-full flex items-center justify-center">
              <Shirt className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Clothing</h1>
              <p className="text-muted-foreground">Explore stylish and trendy clothing options</p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
          {subcategories.map((subcategory) => (
            <Button
              key={subcategory}
              variant={selectedSubcategory === subcategory || (subcategory === "All Clothing" && !selectedSubcategory) ? "default" : "outline"}
              onClick={() => setSelectedSubcategory(subcategory === "All Clothing" ? undefined : subcategory)}
              className="whitespace-nowrap"
            >
              {subcategory}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-lg h-72" />
            ))}
          </div>
        ) : (
          <ProductGrid products={products || []} />
        )}

        {!isLoading && (!products || products.length === 0) && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-xl mb-4">
              No products found in this category.
            </p>
            <Button onClick={() => setSelectedSubcategory(undefined)}>
              View All Clothing
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
