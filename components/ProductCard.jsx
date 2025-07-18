"use client";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import { Heart, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ p }) {
  const [liked, setLiked] = useState(false);
  const starsSize = 15;

  function handleLike(e) {
    e.preventDefault();
    setLiked((prev) => !prev);
  }
  return (
    <Link
      href={`/product/${p._id}`}
      className="w-[150px] md:w-[200px] m-2 cursor-pointer"
    >
      <div className="bg-[#eee]   rounded-md  relative h-[200px] flex items-center justify-center p-2 overflow-hidden">
        <span
          className={`p-2 rounded-full bg-white absolute right-3 top-2 shadow-md z-10 `}
          onClick={handleLike}
        >
          <Heart
            className={`w-[12px] h-[12px] ${
              liked ? "text-transparent animate-pop" : ""
            }`}
            fill={`${liked ? "red" : "transparent"}`}
          />
        </span>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={p?.images[0] || assets.no_product}
            className="max-h-full py-1 object-contain hover:scale-[1.05] transition"
            alt="product image"
            width={800}
            height={800}
          />
        </div>
      </div>
      <h2 className="text-md font-medium py-2 truncate">{p.title}</h2>
      <p className="text-[12px] text-[#989ca6] truncate">{p.description}</p>
      <div className="flex items-center text-xs ">
        <span>4.5</span>
        <div className="flex gap-[1px] p-1">
          <Star fill="#f54900" className="" strokeWidth={0} size={starsSize} />
          <Star fill="#f54900" className="" strokeWidth={0} size={starsSize} />
          <Star fill="#f54900" className="" strokeWidth={0} size={starsSize} />
          <Star fill="#f54900" className="" strokeWidth={0} size={starsSize} />
          <StarHalf fill="#f54900" strokeWidth={0} size={starsSize} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>${p.price}</span>
        <button className="border border-[#e2e3e5]  rounded-full px-3 py-2 text-xs text-[#6b7280] hover:bg-[#eee] transition-all duration-300 cursor-pointer">
          Buy Now
        </button>
      </div>
    </Link>
  );
}
