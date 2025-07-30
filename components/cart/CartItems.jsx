"use client";

import { products } from "@/assets/productData";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";

export default function CartItems() {
  const { cartProducts } = useAppContext();
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let counter = 0;
    for (let product of cartProducts) {
      counter += product.quantity;
    }
    setTotalItems(counter);
  }, [cartProducts]);

  return totalItems;
}
