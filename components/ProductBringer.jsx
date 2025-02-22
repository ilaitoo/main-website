import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Children, cloneElement } from "react";

export default async function ProductsBringer({ children }) {
  await mongooseConnection();
  const products = await Product.find();
  return Children.map(children, (child) => cloneElement(child, { products }));
}
