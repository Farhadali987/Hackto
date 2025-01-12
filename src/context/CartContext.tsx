"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product, CartContextType } from "../../data/products";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  // Load cart and wishlist from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    const storedWishlist = localStorage.getItem("wishlistItems");
    console.log("cartItems updated:", cartItems);

    if (storedCart) setCartItems(JSON.parse(storedCart));
    if (storedWishlist) setWishlistItems(JSON.parse(storedWishlist));
  }, []);

  // Save cartItems to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save wishlistItems to localStorage whenever wishlistItems change
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product: Product) => {
    const existingProduct = cartItems.find((item) => item.slug === product.slug);
    if (existingProduct) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const addToWishlist = (product: Product) => {
    const existingProduct = wishlistItems.find(
      (item) => item.slug === product.slug
    );
    if (existingProduct) {
      setWishlistItems((prev) =>
        prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setWishlistItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (slug: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
  };

  const removeFromWishlist = (slug: string) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.slug !== slug)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (slug: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const updateQuantityWishlist = (slug: string, quantity: number) => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const calculateShipping = (country:string, city:string) => {
    // Example logic based on location
    if (country === "Bangladesh" && city.includes("Dhaka")) {
      return 10; // Flat rate for Dhaka
    }
    return 20; // General flat rate
  };
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        addToWishlist,
        removeFromWishlist,
        updateQuantityWishlist,
        clearCart,
        calculateShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
