
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Database, Info } from 'lucide-react';
import { toast } from 'sonner';

type ProductsEmptyProps = {
  onReset: () => void;
  category?: string;
  subcategory?: string;
};

export const ProductsEmpty: React.FC<ProductsEmptyProps> = ({ 
  onReset, 
  category, 
  subcategory 
}) => {
  const [showDebugInfo, setShowDebugInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckProducts = async () => {
    try {
      setIsLoading(true);
      
      // Check if we're in the Sports & Fitness category
      if (category === 'Sports & Fitness') {
        // Import and use the specialized loader
        const { loadSportsFitnessProducts } = await import('@/integrations/supabase/loadSportsFitnessProducts');
        const result = await loadSportsFitnessProducts();
        
        if (result.success) {
          if (result.added > 0) {
            toast.success(`${result.added} Sports & Fitness products loaded`, {
              description: "Products have been loaded into the database. Refreshing page..."
            });
          } else {
            toast.info("Sports & Fitness products check completed", {
              description: "Products already exist in the database. Try checking subcategory spelling."
            });
          }
        } else {
          toast.error("Error loading Sports & Fitness products", {
            description: result.error instanceof Error ? result.error.message : "An unknown error occurred"
          });
        }
      } else {
        // Use the general loader for other categories
        const { checkAndLoadSampleProducts } = await import('@/integrations/supabase/client');
        const loaded = await checkAndLoadSampleProducts();
        
        if (loaded) {
          toast.success("Sample products loaded", {
            description: "Products have been loaded into the database. Refreshing page..."
          });
        } else {
          toast.info("Products check completed", {
            description: "Products already exist in the database. Try checking category spelling."
          });
        }
      }
      
      // Refresh the page after a delay
      setTimeout(() => window.location.reload(), 1500);
    } catch (error) {
      console.error("Error checking products:", error);
      toast.error("Error checking products", {
        description: error instanceof Error ? error.message : "An unknown error occurred"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <AlertTriangle className="h-12 w-12 text-amber-500" />
      </div>
      <h3 className="text-xl font-medium mb-2">No products found</h3>
      
      <p className="text-muted-foreground text-lg mb-4 max-w-md mx-auto">
        {category 
          ? `No products found in the "${category}" category${subcategory ? ` with subcategory "${subcategory}"` : ''}.` 
          : 'No products match the selected filters.'}
      </p>
      
      <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
        Try changing your selection or view all products.
      </p>
      
      <div className="flex gap-4 justify-center mb-4">
        <Button onClick={onReset} variant="default">
          View All Products
        </Button>
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw size={16} />
          Refresh Page
        </Button>
      </div>
      
      <div className="mt-8 text-sm text-muted-foreground">
        <p className="mb-2">If you're continuing to experience issues:</p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 mt-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleCheckProducts}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Database size={14} />
            {isLoading ? "Loading Products..." : "Check & Load Products"}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowDebugInfo(!showDebugInfo)}
            className="flex items-center gap-2"
          >
            <Info size={14} />
            {showDebugInfo ? "Hide Debug Info" : "Show Debug Info"}
          </Button>
        </div>

        {showDebugInfo && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md text-left max-w-xl mx-auto">
            <h4 className="font-medium mb-2">Debug Information:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Make sure the category name exactly matches the database (case-sensitive)</li>
              <li>Current category filter: <code className="bg-gray-200 px-1 rounded">{category || "none"}</code></li>
              <li>Current subcategory filter: <code className="bg-gray-200 px-1 rounded">{subcategory || "none"}</code></li>
              <li>Check if the data is loaded in the database (use the "Check & Load Products" button)</li>
              <li>Try viewing all products without filters</li>
              <li>Check browser console for any errors</li>
            </ul>
            <div className="mt-4 p-2 bg-gray-200 rounded text-xs overflow-auto">
              <p>Common database categories: Electronics, Fashion, Furniture, Home & Kitchen, Accessories</p>
              <p>Sports & Fitness subcategories: Workout Gear, Sporting Equipment, Athletic Wear, Outdoor Sports, Team Sports, Fitness Accessories, Supplements</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
