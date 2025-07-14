import { assets } from "@/assets/assets";
import delay from "@/lib/lib";
import Image from "next/image";

export default async function AddAdressPage() {
  await delay();

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row h-screen lg:pt-10 lg:gap-10">
        <div className="w-full h-full flex flex-col gap-6 flex-3 text-center">
          <h1 className="text-3xl text-[#6b7280] mb-6 ">
            Add Shipping
            <span className="text-[#ea580b] font-bold">Address</span>
          </h1>
          <form action="" className="flex flex-col gap-3" id="contact-form">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Pin code" />
            <textarea
              name=""
              id=""
              placeholder="Address(Area and Street)"
            ></textarea>
            <div className="flex gap-2 mt-1 overflow-hidden">
              <input
                type="text"
                placeholder="City/District/Town"
                className="lg:w-full w-[200px]"
              />
              <input type="text" placeholder="State" className="w-full" />
            </div>
            <button className="uppercase bg-[#ea580b] py-4 text-white mt-6 text-sm">
              Save Address
            </button>
          </form>
        </div>
        <div className="w-full h-full relative flex-5 lg:ml-20 lg:-translate-y-20 lg:translate-x-10 ">
          <Image
            src={assets.address.src}
            fill
            alt="Address illustration"
            className=""
          />
        </div>
      </div>
    </>
  );
}
