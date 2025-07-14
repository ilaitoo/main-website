"use client";
import { productsDummyData } from "@/assets/assets";
import { fetchProducts } from "@/lib/lib";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const { user } = useUser();

  async function fetchProductsData() {
    setProducts(await fetchProducts());
  }
  useEffect(() => {
    async function fetch() {
      fetchProductsData();
    }
    fetch();
  }, []);

  const value = {
    user,
    router,
    products,
    fetchProductsData,
    currency,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
