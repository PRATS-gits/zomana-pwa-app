
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
import { ArrowRight, BadgePercent, Star, Tag, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fetchNewProducts = async () => {
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
    .eq('is_new', true)
    .order('id', { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
};

export default function NewArrivals() {
  const [sortBy, setSortBy] = useState<string>("newest");

  const { 
    data: products, 
    isLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ['new-products', sortBy],
    queryFn: fetchNewProducts,
  });

  // Refetch products when page loads to ensure we get the latest images
  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
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
    case 'rating':
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Already sorted by newest from the database
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
        {/* Hero Section for New Arrivals */}
        <div className="relative overflow-hidden rounded-xl mb-12">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 md:p-12">
            <div className="max-w-xl">
              <Badge className="mb-4 bg-primary/90">Just Launched</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">New Arrivals</h1>
              <p className="text-muted-foreground mb-6">
                Discover our latest products and be among the first to experience innovation. Fresh drops added regularly!
              </p>
              
              <div className="flex space-x-4 mb-6">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">Trending Now</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">Limited Stock</span>
                </div>
                <div className="flex items-center">
                  <BadgePercent className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">Special Launch Prices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">Quality Assured</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              All our new products undergo rigorous quality testing before making it to our store.
            </p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <BadgePercent className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">New Customer Discount</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              First-time buyers receive an additional 10% off on new arrivals.
            </p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">Trending Items</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Get popular items before they sell out. Updated weekly with trending products.
            </p>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p className="text-muted-foreground mb-4 sm:mb-0">
            {!isLoading && `Showing ${sortedProducts.length} new products`}
          </p>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select 
              onValueChange={handleSortChange}
              defaultValue="newest"
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
              No new products found at this time.
            </p>
            <Button onClick={() => window.location.href = '/products'}>
              View All Products
            </Button>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/products">
              Explore All Products <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
