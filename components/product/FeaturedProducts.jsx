import { fetchProducts, getProducts } from "@/lib/lib";
import ProductCard from "../ProductCard";

export default async function FeaturedProducts() {
  const products = (await getProducts()).slice(0, 5);
  return (
    <>
      <div className=" grid grid-cols-2 lg:grid-cols-5">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard p={product} key={product._id} />
          ))}
      </div>
    </>
  );
}
