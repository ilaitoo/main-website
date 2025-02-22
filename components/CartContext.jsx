"use client";
const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    }
  }, []);
  useEffect(() => {
    if (cartProducts?.length > 0) {
      localStorage?.setItem("cart", JSON.stringify(cartProducts));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cartProducts]);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }
  function removeProduct(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        const result = prev.filter((value, index) => index !== pos);
        return result;
      }
      return prev;
    });
  }
  function clearCart() {
    setCartProducts([]);
    localStorage.removeItem("cart");
  }
  return (
    <CartContext.Provider
      value={{ cartProducts, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
