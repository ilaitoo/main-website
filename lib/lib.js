"use server";
// import { products } from "@/assets/productData";
import { signIn } from "@/auth";
import axios from "axios";

// export async function fetchProducts(num) {
//   if (num) return products.slice(0, num);
//   return products;
// }

// export async function fetchProduct(id) {
//   const product = products.find((p) => p.id.toString() === id.toString());
//   return product ? product : null;
// }

export default async function delay() {
  await new Promise((res) => setTimeout(res, 1000));
}
//
export async function getProducts() {
  try {
    const data = await axios.get(
      `${
        process.env.ADMIN_PANEL_URL || process.env.NEXT_PUBLIC_ADMIN_PANEL_URL
      }/products`
    );
    const products = await data?.data?.products;
    return products;
  } catch (err) {
    console.log("failed fetching products", err);
    return [];
  }
}

export async function getProduct(id) {
  const data = await axios.get(
    `${
      process.env.ADMIN_PANEL_URL || process.env.NEXT_PUBLIC_ADMIN_PANEL_URL
    }/products?id=${id}`
  );
  const product = await data?.data?.product;
  return product ? product : null;
}

export async function login() {
  await signIn("google");
}
