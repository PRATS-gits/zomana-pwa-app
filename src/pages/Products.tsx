
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProducts, fetchAllProducts, countAllProducts, checkAndLoadSampleProducts } from '@/integrations/supabase/client';
import { ProductGrid } from '@/components/ui-components/ProductGrid';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { ProductsHeader } from '@/components/product/ProductsHeader';
import { ProductsEmpty } from '@/components/product/ProductsEmpty';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { RefreshCw, Database, Layers } from 'lucide-react';

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const subcategoryParam = queryParams.get('subcategory');
  
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categoryParam || undefined
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | undefined>(
    subcategoryParam || undefined
  );
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [hasTriedSeeding, setHasTriedSeeding] = useState(false);
  const [isManualLoading, setIsManualLoading] = useState(false);

  // Using the appropriate fetch function based on filters
  const { 
    data: products, 
    isLoading: isQueryLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ['products', selectedCategory, selectedSubcategory, isDebugMode],
    queryFn: async () => {
      console.log("Fetching products with:", { 
        category: selectedCategory, 
        subcategory: selectedSubcategory,
        isDebugMode
      });
      
      // First check if we have any products at all
      const count = await countAllProducts();
      console.log(`Total product count in database: ${count}`);
      
      if (count === 0 && !hasTriedSeeding) {
        const loaded = await checkAndLoadSampleProducts();
        setHasTriedSeeding(true);
        if (loaded) {
          toast.success("Sample products loaded", {
            description: "Sample products have been loaded into the database."
          });
        }
      }
      
      if (isDebugMode) {
        const allProducts = await fetchAllProducts(500);
        // If category is selected in debug mode, filter client-side
        if (selectedCategory) {
          console.log(`Debug mode: filtering ${allProducts.length} products for category: ${selectedCategory}`);
          return allProducts.filter(p => p.category === selectedCategory);
        }
        return allProducts;
      }
      
      // Normal mode - server-side filtering
      return fetchProducts({
        category: selectedCategory || null,
        subcategory: selectedSubcategory || null,
        limit: 500 // Increased limit to ensure all products are shown
      });
    },
    staleTime: 60000, // 1 minute
  });

  // Combined loading state
  const isLoading = isQueryLoading || isManualLoading;

  // Refetch products when dependencies change
  useEffect(() => {
    console.log("Refetching products due to dependency change");
    refetch();
  }, [refetch, selectedCategory, selectedSubcategory, isDebugMode]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedSubcategory) params.set('subcategory', selectedSubcategory);
    
    navigate({
      pathname: location.pathname,
      search: params.toString()
    }, { replace: true });
  }, [selectedCategory, selectedSubcategory, navigate, location.pathname]);

  useEffect(() => {
    // Log products when they change for debugging
    if (products) {
      console.log(`Loaded ${products.length} products`);
      
      if (selectedCategory) {
        const categoryCount = products.filter(p => p.category === selectedCategory).length;
        console.log(`Category '${selectedCategory}' has ${categoryCount} products`);
      }
      
      // Log unique categories
      const uniqueCategories = [...new Set(products.map(p => p.category))];
      console.log("Available categories in loaded products:", uniqueCategories);
      
      // Group products by category for debugging
      if (products.length > 0) {
        const productsByCategory = {};
        products.forEach(product => {
          if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = 0;
          }
          productsByCategory[product.category]++;
        });
        
        console.log('Products count by category:', productsByCategory);
      }
    }
  }, [products, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'Electronics', name: 'Electronics' },
    { id: 'Fashion', name: 'Clothing' },
    { id: 'Home & Kitchen', name: 'Home & Living' },
    { id: 'Accessories', name: 'Accessories' },
    { id: 'Furniture', name: 'Furniture' },
    { id: 'Kitchen', name: 'Kitchen' },
    { id: 'Kids & Baby', name: 'Kids & Baby' },
    { id: 'Health', name: 'Health' },
    { id: 'Sports & Fitness', name: 'Sports & Fitness' },
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === 'all' ? undefined : category);
    setSelectedSubcategory(undefined);
  };

  const resetFilters = () => {
    setSelectedCategory(undefined);
    setSelectedSubcategory(undefined);
  };

  const toggleDebugMode = () => {
    setIsDebugMode(!isDebugMode);
    toast.info(isDebugMode ? "Debug mode deactivated" : "Debug mode activated", {
      description: isDebugMode ? "Filtering restored" : "Showing all products"
    });
  };

  const handleCheckProducts = async () => {
    try {
      setIsManualLoading(true);
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
      setIsManualLoading(false);
    } catch (error) {
      console.error("Error checking products:", error);
      toast.error("Error checking products", {
        description: "There was an error checking or loading products."
      });
      setIsManualLoading(false);
    }
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
        <ProductsHeader 
          categories={categories}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="flex justify-between items-center my-4">
          <div className="text-sm text-muted-foreground">
            {products ? `Showing ${products.length} product${products.length !== 1 ? 's' : ''}` : ''}
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={toggleDebugMode}
              size="sm"
              variant="ghost"
              className="text-xs flex items-center gap-1"
            >
              <Layers size={14} />
              {isDebugMode ? "Exit Debug Mode" : "Debug Mode"}
            </Button>
            
            <Button 
              onClick={handleCheckProducts}
              size="sm"
              variant="outline"
              className="text-xs flex items-center gap-1"
              disabled={isLoading}
            >
              <Database size={14} />
              {isLoading ? "Loading..." : "Check Products"}
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

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
          <>
            {products && products.length > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <ProductsEmpty 
                onReset={resetFilters} 
                category={selectedCategory}
                subcategory={selectedSubcategory}
              />
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
