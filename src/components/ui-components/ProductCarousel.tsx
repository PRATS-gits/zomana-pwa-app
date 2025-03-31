
import { useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ProductCard } from './ProductCard';
import { Product } from './ProductGrid';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';

interface ProductCarouselProps {
  products: Product[];
  title?: string;
  className?: string;
}

export function ProductCarousel({ products, title, className }: ProductCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
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
    <div className={cn("relative px-4", className)} ref={carouselRef}>
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {(products || []).map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="h-full">
                <ProductCard
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                  onAddToWishlist={() => handleAddToWishlist(product)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90" />
      </Carousel>
    </div>
  );
}
