"use client";
import playstation from "@/assets/header_playstation_image.png";
import macbook from "@/assets/macbook_image.png";
import headphone from "@/assets/header_headphone_image.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { img: playstation, color: "bg-red-500" },
  { img: macbook, color: "bg-blue-500" },
  { img: headphone, color: "bg-green-500" },
];

export default function HeaderSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //   setIndex((prev) => (prev + 1) % slides.length);
      setIndex((prev) => {
        if (prev < slides.length - 1) return prev + 1;
        else return prev - prev;
      });
    }, 3000); // Change every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="overflow-hidden h-[400px] mt-10">
        <div
          className={`h-full flex transition-transform duration-1000 ease-in-out`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="bg-[#e7e9f2] rounded-xl h-full grid grid-cols-1  grid-rows-1 md:grid-rows-1 md:grid-cols-3 items-center min-w-full px-3 md:px-0"
            >
              {/* Text Section */}
              <div className="md:col-span-2 flex flex-col justify-center gap-3 h-full px-2 md:px-24 py-5 md:py-0 order-last md:order-0">
                <div className="text-[#ea580b] font-medium text-sm md:text-base t">
                  Hurry up only few lefts!
                </div>
                <div className="text-[#374151] text-xl md:text-5xl font-bold mb-5 leading-snug md:leading-tight">
                  Next-Level Gaming Starts Here – Discover PlayStation 5 Today!
                </div>
                <div className="flex flex-row gap-3  md:gap-5 items-center justify-between sm:justify-normal sm:items-center font-medium text-sm">
                  <button className="bg-[#ea580b] text-white rounded-full px-6 md:px-4 py-3 sm:w-auto cursor-pointer">
                    Shop Now
                  </button>
                  <button className="flex items-center gap-2 text-[#374151] cursor-pointer">
                    Explore Deals
                    <ArrowRight className="w-5 mt-[2px]" />
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center md:justify-end mt-6 md:mt-0 max-w-[150px] md:max-w-[290px] mx-auto mb-6 md:mb-12">
                <Image
                  src={slide.img}
                  alt="product image"
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${
              index === i ? "bg-amber-500" : "bg-[#ccc]"
            } p-1 rounded-full transition-colors duration-300`}
          ></span>
        ))}
      </div>
    </>
  );
}

// "use client";
// import playstation from "@/assets/header_playstation_image.png";
// import macbook from "@/assets/macbook_image.png";
// import headphone from "@/assets/header_headphone_image.png";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const slides = [
//   { img: playstation, color: "bg-red-500" },
//   { img: macbook, color: "bg-blue-500" },
//   { img: headphone, color: "bg-green-500" },
// ];

// export default function HeaderSlider() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       //   setIndex((prev) => (prev + 1) % slides.length);
//       setIndex((prev) => {
//         console.log(prev);
//         if (prev < slides.length - 1) return prev + 1;
//         else return prev - prev;
//       });
//     }, 3000); // Change every 3s

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className=" overflow-hidden h-[400px] mt-10">
//         <div
//           className={`h-full flex transition-transform duration-1000 ease-in-out`}
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {slides.length > 0 &&
//             slides.map((slide, i) => (
//               <div
//                 key={i}
//                 className={`bg-[#e7e9f2] rounded-xl   h-full grid grid-cols-3 items-center min-w-full`}
//               >
//                 <div className="col-span-2 flex flex-col justify-center gap-2 h-full px-24">
//                   <div className="text-[#ea580b] font-medium">
//                     Hurry up only few lefts!
//                   </div>
//                   <div className="text-[#374151] text-5xl font-bold mb-5">
//                     Next-Level Gaming Starts Here - Discover PlayStation 5
//                     Today!
//                   </div>
//                   <div className="flex gap-5 items-center font-medium text-sm">
//                     <button className="bg-[#ea580b] text-white rounded-full px-4 py-3">
//                       Shop Now
//                     </button>
//                     <button className="flex items-center gap-2">
//                       Explore Deals{" "}
//                       <span>
//                         <ArrowRight className="w-5 mt-1" />
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="max-w-[290px] mb-12 ">
//                   <Image src={slide.img} alt="product image" className="" />
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//       <div className="mt-5 flex justify-center gap-2">
//         <span
//           className={` ${
//             index === 0 ? "bg-amber-500" : "bg-[#ccc]"
//           } p-1 rounded-full `}
//         ></span>
//         <span
//           className={`${
//             index === 1 ? "bg-amber-500" : "bg-[#ccc]"
//           } p-1 rounded-full `}
//         ></span>
//         <span
//           className={`${
//             index === 2 ? "bg-amber-500" : "bg-[#ccc]"
//           } p-1 rounded-full `}
//         ></span>
//       </div>
//     </>
//   );
// }
