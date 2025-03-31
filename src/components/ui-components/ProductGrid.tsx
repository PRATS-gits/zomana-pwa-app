
import { ProductCard } from './ProductCard';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

export interface Product {
  id: string;
  title: string;
  price: number;
  original_price?: number | null;
  originalPrice?: number | null;
  image?: string;
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
}

interface ProductGridProps {
  products: Product[];
  className?: string;
  columns?: 2 | 3 | 4;
  children?: React.ReactNode;
}

export function ProductGrid({ 
  products, 
  className,
  columns = 4,
  children
}: ProductGridProps) {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.product_images?.[0]?.image_url || product.image || '',
      }, 1);
      
      toast.success("Added to cart", {
        description: "Item has been added to your cart.",
      });
    }
  };

  const handleAddToWishlist = (product: Product) => {
    toast.success("Added to wishlist", {
      description: "Item has been added to your wishlist.",
    });
  };

  return (
    <div className={cn(
      "grid grid-cols-1 gap-4 sm:grid-cols-2",
      {
        "md:grid-cols-3 lg:grid-cols-4": columns === 4,
        "md:grid-cols-3": columns === 3,
        "md:grid-cols-2": columns === 2,
      },
      className
    )}>
      {children ? children : (products || []).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => handleAddToCart(product)}
          onAddToWishlist={() => handleAddToWishlist(product)}
        />
      ))}
    </div>
  );
}
