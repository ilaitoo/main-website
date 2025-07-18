import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import delay, { fetchProducts, getProducts } from "@/lib/lib";

export default async function ShopPage() {
  // await delay();
  // const products = await fetchProducts();
  // console.log("fake:", products[0]);
  const products = await getProducts();
  return (
    <>
      {/* // <FadeIn> */}
      <h1 className="text-xl font-semibold mt-8 mb-3">All products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-5">
        {products.length > 0 &&
          products.map((p) => <ProductCard p={p} key={p?._id} />)}
      </div>
      {/* // </FadeIn> */}
    </>
  );
}
