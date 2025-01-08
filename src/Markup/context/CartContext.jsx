import React, { createContext, useContext, useState } from 'react';

// Create Context
const CartContext = createContext();

// CartProvider component to provide context values
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.name === product.name);

      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const avgPrice = (item.priceRange[0] + item.priceRange[1]) / 2;
      return total + avgPrice * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
