"use client";
import { useAppContext } from "@/context/AppContext";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderForm() {
  const { cartProducts } = useAppContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(
    (totalPrice * Number.parseInt(process.env.NEXT_PUBLIC_TAX)) / 100
  );
  const [shippingFee, setShippingFee] = useState(20);
  const [addressInputOpen, setAddressInputOpen] = useState(false);

  useEffect(() => {
    setTotalPrice(() => {
      let total = 0;
      cartProducts.map((p) => {
        total += p?.product?.price * p.quantity;
      });
      return total;
    });
  }, [cartProducts]);

  useEffect(() => {
    setTaxPrice(
      (totalPrice * Number.parseInt(process.env.NEXT_PUBLIC_TAX)) / 100
    );
  }, [totalPrice]);

  function handleSelectAddress(e) {
    setAddressInputOpen((prev) => !prev);
  }

  return (
    <>
      <div className=" flex-4 bg-[#f8f8f9] py-7 px-5 flex flex-col gap-4 shadow-lg rounded">
        <h2 className="text-2xl font-medium ">Order Summary</h2>
        <hr className="border-[#ced0d4]" />
        <form action="" className="flex flex-col gap-3 ">
          <label htmlFor="" className="uppercase text-[#4b5563] font-semibold">
            Select Address
          </label>
          <div
            type="button"
            className=" border-1 border-[#e5e7eb] text-sm flex justify-between p-2 pl-5 bg-white relative cursor-pointer select-none"
            onClick={handleSelectAddress}
          >
            Select Address{" "}
            <ChevronRight
              className={`transition w-5 ${
                addressInputOpen ? "rotate-90" : ""
              }`}
            />
            <div
              className={`absolute text-xs text-center shadow-md  bg-white w-full ${
                addressInputOpen ? "flex" : "hidden"
              } flex-col gap-2  left-0 top-11 `}
            >
              <Link
                href="/add-address"
                type="button"
                className="py-4 hover:bg-[#f8f8f9]"
              >
                + Add New Address
              </Link>
            </div>
          </div>
          <label
            htmlFor=""
            className="uppercase mt-4 text-[#4b5563] font-semibold"
          >
            Promo Code
          </label>
          <input
            type="text"
            className="border border-[#e5e7eb] px-5 p-3 bg-white outline-none text-md"
            placeholder="Enter promo code"
          />
          <button
            type="button"
            className="bg-[#ea580b] w-fit px-8 py-2 text-white"
          >
            Apply
          </button>
        </form>
        <hr className="border-[#ced0d4]" />
        <div className="flex justify-between">
          <span className="text-[#4b5563]">Price</span>
          <span className="font-semibold">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#4b5563]">Shipping Fee</span>
          <span className="font-semibold">
            {shippingFee > 0 ? shippingFee : "Free"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#4b5563]">Tax (2%)</span>
          <span className="font-semibold">${taxPrice}</span>
        </div>
        <hr className="border-[#ced0d4]" />
        <div className="flex justify-between text-xl font-semibold">
          <span className=" tracking-wide ">Total</span>
          <span>
            ${`${totalPrice + taxPrice + (totalPrice > 0 ? shippingFee : 0)}`}
          </span>
        </div>
        <button type="button" className="bg-[#ea580b] text-white py-3 ">
          Place Order
        </button>
      </div>
    </>
  );
}
