import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
  originalPrice?: number; // For tracking discounted prices
  discountApplied?: number; // Percentage of discount applied
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  subtotal: number; // Before discounts
  discountAmount: number; // Total discount applied
  membershipDiscount?: number; // Membership discount percentage
  vipMembershipSelected?: boolean; // Whether user selected VIP membership
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'APPLY_MEMBERSHIP_DISCOUNT'; payload: number }
  | { type: 'REMOVE_MEMBERSHIP_DISCOUNT' }
  | { type: 'SET_VIP_MEMBERSHIP'; payload: boolean }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

// Helper functions for calculations
const calculateSubtotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.quantity, 0);
};

const calculateDiscountAmount = (subtotal: number, discountPercentage?: number): number => {
  if (!discountPercentage) return 0;
  return (subtotal * discountPercentage) / 100;
};

const calculateTotal = (subtotal: number, discountAmount: number): number => {
  return Math.max(0, subtotal - discountAmount);
};

// Functions for working with localStorage
const saveToLocalStorage = (state: CartState) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const loadFromLocalStorage = (): CartState => {
  try {
    const saved = localStorage.getItem('cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure all required fields exist
      return {
        items: parsed.items || [],
        total: parsed.total || 0,
        itemCount: parsed.itemCount || 0,
        subtotal: parsed.subtotal || 0,
        discountAmount: parsed.discountAmount || 0,
        membershipDiscount: parsed.membershipDiscount,
        vipMembershipSelected: parsed.vipMembershipSelected || false
      };
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return {
    items: [],
    total: 0,
    itemCount: 0,
    subtotal: 0,
    discountAmount: 0,
    vipMembershipSelected: false
  };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;
  
  switch (action.type) {
    case 'LOAD_CART':
      return action.payload;
      
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let updatedItems: CartItem[];
      
      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newItem: CartItem = { 
          ...action.payload, 
          quantity: 1,
          originalPrice: action.payload.price
        };
        updatedItems = [...state.items, newItem];
      }
      
      const subtotal = calculateSubtotal(updatedItems);
      const discountAmount = calculateDiscountAmount(subtotal, state.membershipDiscount);
      const total = calculateTotal(subtotal, discountAmount);
      const itemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      newState = {
        ...state,
        items: updatedItems,
        subtotal,
        discountAmount,
        total,
        itemCount
      };
      saveToLocalStorage(newState);
      return newState;
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const subtotal = calculateSubtotal(updatedItems);
      const discountAmount = calculateDiscountAmount(subtotal, state.membershipDiscount);
      const total = calculateTotal(subtotal, discountAmount);
      const itemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      newState = {
        ...state,
        items: updatedItems,
        subtotal,
        discountAmount,
        total,
        itemCount
      };
      saveToLocalStorage(newState);
      return newState;
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      
      const subtotal = calculateSubtotal(updatedItems);
      const discountAmount = calculateDiscountAmount(subtotal, state.membershipDiscount);
      const total = calculateTotal(subtotal, discountAmount);
      const itemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      newState = {
        ...state,
        items: updatedItems,
        subtotal,
        discountAmount,
        total,
        itemCount
      };
      saveToLocalStorage(newState);
      return newState;
    }
    
    case 'APPLY_MEMBERSHIP_DISCOUNT': {
      const discountPercentage = action.payload;
      const discountAmount = calculateDiscountAmount(state.subtotal, discountPercentage);
      const total = calculateTotal(state.subtotal, discountAmount);
      
      newState = {
        ...state,
        membershipDiscount: discountPercentage,
        discountAmount,
        total
      };
      saveToLocalStorage(newState);
      return newState;
    }
    
    case 'REMOVE_MEMBERSHIP_DISCOUNT': {
      const total = state.subtotal; // No discount
      
      newState = {
        ...state,
        membershipDiscount: undefined,
        discountAmount: 0,
        total
      };
      saveToLocalStorage(newState);
      return newState;
    }
    
    case 'SET_VIP_MEMBERSHIP': {
      newState = {
        ...state,
        vipMembershipSelected: action.payload
      };
      saveToLocalStorage(newState);
      return newState;
    }
    
    case 'CLEAR_CART':
      newState = {
        items: [],
        total: 0,
        itemCount: 0,
        subtotal: 0,
        discountAmount: 0,
        vipMembershipSelected: false
      };
      saveToLocalStorage(newState);
      return newState;
    
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (product: Product) => void;
  addToCart: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  applyMembershipDiscount: (discountPercentage: number) => void;
  removeMembershipDiscount: () => void;
  setVipMembership: (selected: boolean) => void;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
    subtotal: 0,
    discountAmount: 0,
    vipMembershipSelected: false
  });

  // Load data from localStorage on initialization
  useEffect(() => {
    const savedCart = loadFromLocalStorage();
    if (savedCart.items.length > 0 || savedCart.membershipDiscount) {
      dispatch({ type: 'LOAD_CART', payload: savedCart });
    }
  }, []);

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const applyMembershipDiscount = (discountPercentage: number) => {
    dispatch({ type: 'APPLY_MEMBERSHIP_DISCOUNT', payload: discountPercentage });
  };

  const removeMembershipDiscount = () => {
    dispatch({ type: 'REMOVE_MEMBERSHIP_DISCOUNT' });
  };

  const setVipMembership = (selected: boolean) => {
    dispatch({ type: 'SET_VIP_MEMBERSHIP', payload: selected });
  };

  return (
    <CartContext.Provider value={{
      state,
      addItem,
      addToCart,
      removeItem,
      updateQuantity,
      clearCart,
      applyMembershipDiscount,
      removeMembershipDiscount,
      setVipMembership,
      dispatch
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
