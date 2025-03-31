
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

export function CartButton() {
  const { toggleCart, cartItemsCount } = useCart();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="relative"
      onClick={toggleCart}
      aria-label="Open shopping cart"
    >
      <ShoppingBag className="h-5 w-5" />
      {cartItemsCount > 0 && (
        <Badge 
          className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
          variant="destructive"
        >
          {cartItemsCount}
        </Badge>
      )}
    </Button>
  );
}
