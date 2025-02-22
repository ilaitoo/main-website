"use client";

import { CartContextProvider } from "./CartContext";

export default function CartProviderWrapper({ children }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
