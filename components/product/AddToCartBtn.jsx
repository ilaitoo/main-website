"use client";

import { useAppContext } from "@/context/AppContext";

export default function AddToCartBtn({ product, className }) {
  const { addToCart, cartProducts } = useAppContext();
  console.log("cart products: ", cartProducts);
  return (
    <button className={className} onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  );
}
