
import { cn } from '@/lib/utils';

interface PriceTagProps {
  price: number;
  originalPrice?: number;
  size?: 'sm' | 'md' | 'lg';
  showDiscount?: boolean;
  className?: string;
}

export function PriceTag({ 
  price, 
  originalPrice, 
  size = 'md', 
  showDiscount = true,
  className 
}: PriceTagProps) {
  const hasDiscount = originalPrice && originalPrice > price;
  const discount = hasDiscount ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl md:text-2xl",
  };
  
  return (
    <div className={cn("flex flex-wrap items-baseline gap-1.5", className)}>
      <span className={cn("font-semibold", sizeClasses[size])}>
        ${price.toFixed(2)}
      </span>
      {hasDiscount && (
        <>
          <span className={cn(
            "text-muted-foreground line-through", 
            size === 'lg' ? "text-sm" : "text-xs"
          )}>
            ${originalPrice.toFixed(2)}
          </span>
          {showDiscount && (
            <span className="text-destructive font-medium text-sm">
              Save {discount}%
            </span>
          )}
        </>
      )}
    </div>
  );
}
