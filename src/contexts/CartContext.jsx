import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart((cart) =>
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((cart) => [...cart, { ...product, quantity: 1 }]);
    }
  }

  function reduceCart(product) {
    const exist = cart.find((item) => item.id === product.id);
    if (exist && exist.quantity > 1) {
      setCart((cart) =>
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart((cart) => cart.filter((item) => item.id !== product.id));
    }
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, reduceCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
