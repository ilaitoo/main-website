"use client";

import { useAppContext } from "@/context/AppContext";

export default function CartCounter() {
  const { cartProducts } = useAppContext();
  return cartProducts.length;
}
