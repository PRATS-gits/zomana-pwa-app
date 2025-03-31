
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchAllProducts, checkAndLoadSampleProducts } from '@/integrations/supabase/client';
import { ProductGrid } from '@/components/ui-components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Dumbbell, RefreshCw } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { ProductsEmpty } from '@/components/product/ProductsEmpty';

export default function SportsCategory() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subcategoryParam = queryParams.get('subcategory');
  
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | undefined>(
    subcategoryParam || undefined
  );
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Use React Query to fetch and cache products
  const { 
    data: products, 
    isLoading: isQueryLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['sports-products', selectedSubcategory, isDebugMode],
    queryFn: async () => {
      console.log("Fetching sports products with subcategory:", selectedSubcategory);
      
      if (isDebugMode) {
        const allProducts = await fetchAllProducts(500);
        return allProducts.filter(p => p.category === 'Sports & Fitness');
      }
      
      return fetchProducts({
        category: 'Sports & Fitness',
        subcategory: selectedSubcategory || null,
        limit: 100
      });
    },
    staleTime: 60000 // 1 minute
  });

  // Combined loading state
  useEffect(() => {
    setIsLoading(isQueryLoading);
  }, [isQueryLoading]);

  // Refetch products when page loads to ensure we get the latest data
  useEffect(() => {
    refetch();
  }, [refetch]);

  // Update subcategory when URL changes
  useEffect(() => {
    const subcatParam = new URLSearchParams(location.search).get('subcategory');
    if (subcatParam !== selectedSubcategory) {
      setSelectedSubcategory(subcatParam || undefined);
    }
  }, [location.search]);

  const subcategories = [
    "All Sports & Fitness", 
    "Workout Gear", 
    "Sporting Equipment", 
    "Athletic Wear", 
    "Outdoor Sports", 
    "Team Sports", 
    "Fitness Accessories", 
    "Supplements"
  ];

  const resetFilters = () => {
    setSelectedSubcategory(undefined);
  };

  const handleCheckProducts = async () => {
    try {
      setIsLoading(true);
      const loaded = await checkAndLoadSampleProducts();
      
      if (loaded) {
        toast.success("Sample products loaded", {
          description: "The sample products have been loaded successfully. Refreshing data..."
        });
      } else {
        toast.info("Products check completed", {
          description: "Products are already in the database. Refreshing data..."
        });
      }
      
      // Refetch data regardless
      await refetch();
      setIsLoading(false);
    } catch (error) {
      console.error("Error checking products:", error);
      toast.error("Error checking products", {
        description: "There was an error checking or loading products."
      });
      setIsLoading(false);
    }
  };

  const toggleDebugMode = () => {
    setIsDebugMode(!isDebugMode);
    toast.info(isDebugMode ? "Debug mode disabled" : "Debug mode enabled", {
      description: isDebugMode 
        ? "Using normal filtering mode" 
        : "Fetching all products and filtering client-side"
    });
  };

  if (error) {
    return (
      <div className="container mx-auto py-8 text-center text-destructive">
        <p>Error loading products: {(error as Error).message}</p>
        <Button 
          onClick={() => refetch()} 
          variant="outline" 
          className="mt-4 flex items-center gap-2"
        >
          <RefreshCw size={16} />
          Try Again
        </Button>
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
            <div className="bg-cyan-100 text-cyan-700 h-12 w-12 rounded-full flex items-center justify-center">
              <Dumbbell className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Sports & Fitness</h1>
              <p className="text-muted-foreground">Equipment and apparel for all your fitness activities</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDebugMode}
              className="text-xs"
            >
              {isDebugMode ? "Exit Debug" : "Debug Mode"}
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleCheckProducts}
              className="text-xs"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Check Products"}
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
          {subcategories.map((subcategory) => (
            <Button
              key={subcategory}
              variant={selectedSubcategory === subcategory || (subcategory === "All Sports & Fitness" && !selectedSubcategory) ? "default" : "outline"}
              onClick={() => setSelectedSubcategory(subcategory === "All Sports & Fitness" ? undefined : subcategory)}
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
          <>
            {products && products.length > 0 ? (
              <>
                <div className="text-sm text-muted-foreground mb-4">
                  Showing {products.length} product{products.length !== 1 ? 's' : ''} in Sports & Fitness
                  {selectedSubcategory ? ` (${selectedSubcategory})` : ''}
                </div>
                <ProductGrid products={products} />
              </>
            ) : (
              <ProductsEmpty 
                onReset={resetFilters} 
                category="Sports & Fitness" 
                subcategory={selectedSubcategory} 
              />
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
