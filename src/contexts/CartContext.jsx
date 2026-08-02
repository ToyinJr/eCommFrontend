import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
  setCart([]);
  localStorage.removeItem("cart");
};

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
  setCart((prevCart) =>
    prevCart.filter((item) => item.id !== productId)
  );
};

const incrementQuantity = (productId) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decrementQuantity = (productId) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  
  const getCartTotal = () => {
    return cart.reduce((total, item) => {

      const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
      return total + (numericPrice * item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartTotal, removeFromCart,  incrementQuantity,
    decrementQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

