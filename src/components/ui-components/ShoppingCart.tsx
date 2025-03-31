
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { X, ShoppingCart as CartIcon, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { QuantitySelector } from './QuantitySelector';

export function ShoppingCart() {
  const {
    state,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    cartItemsCount,
    cartTotal,
  } = useCart();

  const handleCheckout = () => {
    toast.success('Checkout process initiated', {
      description: 'This would connect to a payment gateway in a real app.',
    });
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={toggleCart}>
      <SheetContent className="flex flex-col h-full sm:max-w-md w-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="flex items-center justify-between">
            Your Cart ({cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'})
            {cartItemsCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground text-xs"
                onClick={clearCart}
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Clear Cart
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        
        <div className="flex-1 overflow-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4 py-8">
              <CartIcon className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button onClick={toggleCart} asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-4 py-2">
                  <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                    <Link to={`/products/${item.id}`} onClick={toggleCart}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/products/${item.id}`}
                      onClick={toggleCart}
                      className="font-medium hover:text-primary transition-colors line-clamp-1"
                    >
                      {item.title}
                    </Link>
                    <div className="text-sm text-muted-foreground mt-1">
                      ${item.price.toFixed(2)} &times; {item.quantity}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <QuantitySelector
                        initialValue={item.quantity}
                        onChange={(value) => updateQuantity(item.id, value)}
                        min={1}
                        max={10}
                        className="scale-75 origin-left"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {state.items.length > 0 && (
          <div className="flex-shrink-0 mt-auto pt-4">
            <Separator className="mb-4" />
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
