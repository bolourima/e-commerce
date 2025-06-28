"use client";

import { CartProduct } from "@/lib/types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CartContextType = {
  cartItems: CartProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  addToCart: (product: CartProduct) => void;
  updateQuantity: (id: string, pieces: number) => void;
  removeFromCart: (id: string) => void;
  cartCount: number;
  getTotalQuantity: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      const parsed = JSON.parse(stored);
      setCartItems(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: CartProduct) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex >= 0) {
        const updated = [...prev];
        updated[existingItemIndex] = {
          ...updated[existingItemIndex],
          pieces: product.pieces,
        };
        return updated;
      } else {
        return [...prev, product];
      }
    });
  };

  const updateQuantity = (id: string, pieces: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const itemIndex = updated.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        updated[itemIndex] = {
          ...updated[itemIndex],
          pieces: pieces,
        };
      }

      return updated;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.pieces, 0);
  };

  const cartCount = cartItems.length;

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartCount,
    getTotalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
