import delay, { fetchProduct, getProduct } from "@/lib/lib";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import FeaturedProductsh1 from "@/components/home/FeaturedProductsh1";
import FeaturedProducts from "@/components/product/FeaturedProducts";
import { assets } from "@/assets/assets";

export default async function ProductPage({ params }) {
  await delay();
  const productId = (await params).id;
  // const product = await fetchProduct(productId);
  const product = await getProduct(productId);
  const starsSize = 15;
  //
  console.log(product);
  //

  if (!product) return <div> Loading... </div>;

  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 my-15">
        <div>
          <div className="bg-[#f0f0f2]  rounded-lg h-[400px] w-[400px] flex justify-center items-center p-2 mb-3">
            <Image
              src={product?.images[0] || assets.no_product}
              width={400}
              height={300}
              alt={"product image"}
            />
          </div>
          <div className="flex gap-5 cursor-pointer ">
            <Image
              src={product?.images[0] || assets.no_product}
              width={100}
              height={100}
              alt={"product image"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <div className="flex">
            <div className="flex gap-[1px] p-1">
              <Star
                fill="#f54900"
                className=""
                strokeWidth={0}
                size={starsSize}
              />
              <Star
                fill="#f54900"
                className=""
                strokeWidth={0}
                size={starsSize}
              />
              <Star
                fill="#f54900"
                className=""
                strokeWidth={0}
                size={starsSize}
              />
              <Star
                fill="#f54900"
                className=""
                strokeWidth={0}
                size={starsSize}
              />
              <StarHalf fill="#f54900" strokeWidth={0} size={starsSize} />
            </div>
            <span> (4.5) </span>
          </div>
          <p>
            The PlayStation 5 takes gaming to the next level with ultra-HD
            graphics, a powerful 825GB SSD, and ray tracing technology for
            realistic visuals. Whether you're into high-action games or
            immersive storytelling, the PS5 delivers fast loading times,
            seamless gameplay, and stunning visuals. It's a must-have for any
            serious gamer looking for the ultimate gaming experience.
          </p>
          <div className="flex gap-4 items-end mt-5 mb-1">
            <h2 className="text-2xl font-bold">$499.99</h2>
            <span className="text-[#797e87] line-through">$599.99</span>
          </div>
          <hr className="border-[#a9acb2]" />
          <div className="flex  gap-20">
            <div className="flex flex-col gap-3">
              <span>Brand</span>
              <span>Color</span>
              <span>Category</span>
            </div>
            <div className="flex flex-col gap-3 text-[#8f939b]">
              <span>Generic</span>
              <span>Multi</span>
              <span>Accessories</span>
            </div>
          </div>
          <div className="flex justify-between mt-10 ">
            <button className="bg-[#f3f4f6] px-24 py-3 cursor-pointer transition-all duration-200 hover:bg-[#e5e7eb] hover:shadow-md ">
              Add to Cart
            </button>
            <button className="bg-[#f97315] px-24 py-3 text-white cursor-pointer transition-all duration-200 hover:bg-[#fb923c] hover:scale-[1.02] hover:shadow-lg">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <FeaturedProductsh1 />
      <FeaturedProducts />
    </div>
  );
}
