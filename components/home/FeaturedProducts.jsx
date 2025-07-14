import Link from "next/link";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import FeaturedProductsh1 from "./FeaturedProductsh1";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      image: assets.girl_with_headphone_image,
      title: "Unparalleled Sound",
      description: "Experience crystal-clear audio with premium headphones.",
    },
    {
      id: 2,
      image: assets.girl_with_earphone_image,
      title: "Stay Connected",
      description: "Compact and stylish earphones for every occasion.",
    },
    {
      id: 3,
      image: assets.boy_with_laptop_image,
      title: "Power in Every Pixel",
      description: "Shop the latest laptops for work, gaming, and more.",
    },
  ];
  return (
    <>
      <div className="my-20 flex flex-col gap-10">
        <FeaturedProductsh1 />
        <div className="grid gap-10 sm:gap-0 sm:grid-cols-3 justify-items-center">
          {products.length > 0 &&
            products.map((p, index) => (
              <div
                key={p.id}
                style={{
                  backgroundImage: `url(${p.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-[320px] h-[480px] flex flex-col justify-end text-white pl-5 pr-2 pb-10 hover:pb-12 transition-all duration-500 relative"
              >
                <div className="absolute w-full h-full bg-black top-0 left-0 opacity-[0] hover:opacity-[0.2] transition-opacity "></div>
                {/* <Image src={assets.girl_with_earphone_image} alt="hello" /> */}
                <div className="flex flex-col gap-4 z-10">
                  <h2 className="text-xl font-semibold">{p.title}</h2>
                  <p className="text-xs font-medium">{p.description} </p>
                  <Link
                    href="#"
                    className="bg-orange-600 w-fit px-4 py-2 rounded-md flex gap-2 text-sm font-medium items-center"
                  >
                    Buy now <SquareArrowOutUpRight className="w-[13px]" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
