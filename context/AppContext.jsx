"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

const address = {
  fullName: "mohammed khaled al-argzi",
  phone: "0542386838",
  pinCode: "123456",
  address: {
    area: "makkah",
    street: "almaeabiduh",
  },
};

export function AppContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const { user } = useUser();

  const addresses = useState([]);

  function addToCart(product) {
    setCartProducts((prev) => {
      const prevProducts = [...prev];
      if (!prev.find((p) => p.product._id === product._id))
        return [...prev, { product, quantity: 1 }];
      else
        return prevProducts.map((p) => {
          if (!(p.product._id === product._id)) return p;
          else return { ...p, quantity: p.quantity + 1 };
        });
    });
  }

  function deleteFromCart(id) {
    setCartProducts((prev) => {
      const product = prev.find((p) => p.product._id === id);
      if (!product) return prev;
      if (product.quantity > 1)
        return prev.map((p) =>
          p.product._id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      else return prev.filter((p) => p.product._id !== id);
    });
  }

  function removeFromCart(id) {
    setCartProducts((prev) =>
      [...prev].filter((pro) => pro.product._id !== id)
    );
  }

  const value = {
    user,
    router,
    currency,
    addToCart,
    deleteFromCart,
    removeFromCart,
    cartProducts,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
