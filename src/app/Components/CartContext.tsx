'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  quantity: number;
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find((item) => item._id === product._id);
      
      if (existingProduct) {
        // If product exists, update the quantity
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // If product doesn't exist, add it to the cart with quantity 1
      return [...prevCart, { ...product, quantity: 0 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((product) => product._id !== id));
  };

  const clearCart = () => {
    setCart([]); // Clears the entire cart
  };

  const totalItems = cart.length; // Calculates the total number of items in the cart

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
