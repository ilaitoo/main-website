import Image from "next/image";
import { assets } from "../../assets/assets";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export default function LevelUp() {
  return (
    <>
      <div className="grid sm:grid-cols-3 w-full gap-10 sm:gap-0 sm:h-[310px] bg-[#e7e9f2] rounded-2xl overflow-hidden mb-20 mt-16">
        <div className="flex items-center ">
          <Image
            src={assets.jbl_soundbox_image}
            alt="image"
            className="w-[60%] h-fit mx-auto"
          />
        </div>

        <div className="h-full flex flex-col justify-center gap-5">
          <h2 className="text-3xl font-bold text-center flex flex-col text-[#374151]">
            <span>Level Up Your</span>{" "}
            <span className="whitespace-nowrap">Gaming Experience</span>
          </h2>
          <p className="text-center text-[rgb(111,118,130)] font-semibold">
            From immersive sound to precise controls—everything you need to win
          </p>
          <button className="flex mx-auto gap-3 items-center bg-orange-500 rounded-md px-10 text-sm font-semibold py-3 text-white cursor-pointer">
            Buy now <ArrowRight className="w-4" />
          </button>
        </div>
        <div className="flex ">
          <Image
            src={assets.md_controller_image}
            alt="image"
            className="w-[80%] h-fit ml-auto"
          />
        </div>
      </div>
    </>
  );
}
