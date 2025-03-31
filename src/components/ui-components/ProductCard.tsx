
import React from 'react';
import { Link } from 'react-router-dom';
import { PriceTag } from './PriceTag';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { toast } from 'sonner';

// Unified product type that works with both the mock data and Supabase data
type ProductCardProps = {
  product: {
    id: string;
    title: string;
    description?: string;
    price: number;
    original_price?: number | null;
    originalPrice?: number | null;
    rating: number;
    review_count?: number;
    reviewCount?: number;
    is_new?: boolean;
    isNew?: boolean;
    on_sale?: boolean;
    onSale?: boolean;
    product_images?: Array<{
      image_url: string;
      is_primary: boolean;
      display_order: number;
    }>;
    image?: string;
  };
  onAddToCart?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onAddToWishlist }) => {
  // Safely handle product if it might be null or undefined
  if (!product) {
    console.error("Product is undefined");
    return null;
  }

  // Handle both data formats - the one from Supabase and the one from mock data
  const getImageUrl = (): string => {
    if (product.product_images && product.product_images.length > 0) {
      const primaryImage = product.product_images.find(img => img.is_primary) || product.product_images[0];
      return primaryImage.image_url;
    }
    return product.image || 'https://placehold.co/300x400?text=No+Image';
  };

  const getReviewCount = (): number => {
    return product.review_count || product.reviewCount || 0;
  };

  const isNew = (): boolean => {
    return product.is_new || product.isNew || false;
  };

  const isOnSale = (): boolean => {
    return product.on_sale || product.onSale || false;
  };

  const getOriginalPrice = (): number | null | undefined => {
    return product.original_price || product.originalPrice;
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id);
    } else {
      toast.success("Added to cart", {
        description: "Item has been added to your cart.",
      });
    }
  };

  const handleAddToWishlist = () => {
    if (onAddToWishlist) {
      onAddToWishlist(product.id);
    } else {
      toast.success("Added to wishlist", {
        description: "Item has been added to your wishlist.",
      });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative">
          <img
            src={getImageUrl()}
            alt={product.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute top-3 right-3 flex space-x-2">
            {isNew() && (
              <Badge variant="outline" className="bg-green-500 text-white">
                New
              </Badge>
            )}
            {isOnSale() && (
              <Badge variant="destructive">Sale</Badge>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.title}</h3>
          
          <div className="flex items-center justify-between mb-2">
            <PriceTag 
              price={product.price} 
              originalPrice={getOriginalPrice()} 
            />
            
            <div className="flex items-center text-yellow-500 space-x-1">
              <Star size={16} fill="currentColor" />
              <span className="text-sm">
                {product.rating.toFixed(1)} ({getReviewCount()})
              </span>
            </div>
          </div>
        </div>
      </Link>
      
      <button 
        className="absolute top-3 left-3 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Add to Favorites"
        onClick={handleAddToWishlist}
      >
        <Heart size={24} />
      </button>
    </motion.div>
  );
};
