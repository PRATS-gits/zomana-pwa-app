
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ProductGrid } from '@/components/ui-components/ProductGrid';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui-components/SectionHeading';

const fetchFeaturedProducts = async () => {
  // For featured products, we'll get products with high ratings or that are on sale
  const { data, error } = await supabase
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
    .or('rating.gte.4.5,on_sale.eq.true')
    .order('rating', { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
};

export default function FeaturedProducts() {
  const [sortBy, setSortBy] = useState<string>("rating");

  const { 
    data: products, 
    isLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ['featured-products', sortBy],
    queryFn: fetchFeaturedProducts,
  });

  // Refetch products when page loads to ensure we get the latest images
  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  let sortedProducts = [...(products || [])];
  
  switch (sortBy) {
    case 'price-low':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      // Sort by ID instead of created_at since we don't have that field
      sortedProducts.sort((a, b) => {
        // Use a simple string comparison for UUIDs
        return a.id > b.id ? -1 : 1;
      });
      break;
    default:
      // Already sorted by rating from the database
      break;
  }

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
        <SectionHeading 
          title="Featured Products" 
          subtitle="Our most popular and highest rated products" 
          className="mb-8"
        />
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p className="text-muted-foreground mb-4 sm:mb-0">
            {!isLoading && `Showing ${sortedProducts.length} featured products`}
          </p>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select 
              onValueChange={handleSortChange}
              defaultValue="rating"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className="bg-gray-200 rounded-lg h-72"
              />
            ))}
          </div>
        ) : (
          <ProductGrid products={sortedProducts} />
        )}

        {!isLoading && (!sortedProducts || sortedProducts.length === 0) && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-xl mb-4">
              No featured products found at this time.
            </p>
            <Button onClick={() => window.location.href = '/products'}>
              View All Products
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
