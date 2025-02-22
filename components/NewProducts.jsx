"use client";

import Center from "./Center";
import ProductsGrid from "./ProductsGrid";
import Title from "./Title";

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}
