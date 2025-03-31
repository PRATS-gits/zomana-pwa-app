
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export function QuantitySelector({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
  className,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-l-md rounded-r-none border-r-0"
        onClick={decrement}
        disabled={quantity <= min}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Decrease quantity</span>
      </Button>
      <div className="flex h-9 w-10 items-center justify-center border border-input bg-background">
        <span className="text-sm font-medium">{quantity}</span>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-r-md rounded-l-none border-l-0"
        onClick={increment}
        disabled={quantity >= max}
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Increase quantity</span>
      </Button>
    </div>
  );
}
