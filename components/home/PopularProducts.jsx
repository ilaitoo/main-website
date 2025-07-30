import Image from "next/image";
import Link from "next/link";
import { products as productsData } from "../../assets/productData";
import ProductCard from "../ProductCard";
import { getProducts } from "@/lib/lib";
import { ArrowLeft } from "lucide-react";

export default async function PopularProducts() {
  const starsSize = 15;
  //   const products = products;
  const products = (await getProducts()).slice(0, 10);
  return (
    <>
      <div>
        <h1 className="text-xl font-bold mb-4 mt-10">Popular products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center  w-full mb-16">
          {products?.length > 0 &&
            products.map((p) => <ProductCard p={p} key={p?._id} />)}
        </div>
        <div className=" my-5 flex justify-center">
          <Link
            href="/shop"
            className="px-10 py-3 border rounded-sm text-[#aaa] hover:bg-[#eee] transition duration-500 shadow-sm flex w-fit gap-4 items-center"
          >
            <span>See more</span>
          </Link>
        </div>
      </div>
    </>
  );
}
