
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { toast } from 'sonner';
import { Product } from '@/data/products';

// Define cart item type
export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

// Define cart state
interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

// Define cart actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' };

// Create initial state
const initialState: CartState = {
  items: [],
  isOpen: false,
};

// Create cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: updatedItems };
      } else {
        // Item doesn't exist, add new item
        return { ...state, items: [...state.items, action.payload] };
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, items: updatedItems };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

// Create cart context
interface CartContextType {
  state: CartState;
  addItem: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  cartItemsCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Create cart provider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    // Load cart from localStorage
    if (typeof window === 'undefined') return initialState;
    
    const savedCart = localStorage.getItem('cart');
    return savedCart ? { ...JSON.parse(savedCart), isOpen: false } : initialState;
  });

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({ items: state.items }));
  }, [state.items]);

  // Calculate cart totals
  const cartItemsCount = state.items.reduce(
    (count, item) => count + item.quantity,
    0
  );
  
  const cartTotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Cart actions
  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        cartItemsCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
