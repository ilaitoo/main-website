"use client";
import { useAppContext } from "@/context/AppContext";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function OrderForm() {
  const { cartProducts } = useAppContext();
  const [codeApplied, setCodeApplied] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(
    (totalPrice * Number.parseInt(process.env.NEXT_PUBLIC_TAX)) / 100
  );

  const [shippingFee, setShippingFee] = useState(20);
  const [addressInputOpen, setAddressInputOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const promoCodes = [
    { code: "WELCOME10", percentage: 10 },
    { code: "SAVE20", percentage: 20 },
  ];
  const [finalPrice, setFinalPrice] = useState(getFinalPrice());
  const addressInputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(ev) {
      if (
        addressInputRef.current &&
        !addressInputRef.current.contains(ev.target)
      ) {
        setAddressInputOpen(false);
      }
    }

    if (addressInputOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [addressInputOpen]);

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

  useEffect(() => {
    setFinalPrice(getFinalPrice());
  }, [totalPrice, taxPrice, shippingFee, codeApplied]);

  function handleSelectAddress(e) {
    setAddressInputOpen((prev) => !prev);
  }

  function getFinalPrice() {
    if (codeApplied) {
      const total = totalPrice + taxPrice + (totalPrice > 0 ? shippingFee : 0);
      return (total - total * getPromoCodePercentage()).toFixed(2);
    }
    return (totalPrice + taxPrice + (totalPrice > 0 ? shippingFee : 0)).toFixed(
      2
    );
  }

  function getPromoCodePercentage() {
    for (const code of promoCodes) {
      if (promoCode === code.code) {
        return code.percentage / 100;
      }
    }
    return null;
  }

  function applyPromoCode() {
    const percentage = getPromoCodePercentage();
    if (percentage) {
      setFinalPrice((finalPrice - finalPrice * percentage).toFixed(2));

      return setCodeApplied(true);
    }
    return;
  }

  function disApplyingCode() {
    setCodeApplied(false);
    return setFinalPrice(getFinalPrice());
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
            ref={addressInputRef}
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
            value={promoCode}
            onChange={(ev) => {
              setPromoCode(ev.currentTarget.value);
            }}
            disabled={codeApplied}
          />
          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="bg-[#ea580b] w-fit px-8 py-2 text-white disabled:bg-[#e7baa1]"
              onClick={() => {
                return applyPromoCode();
              }}
              disabled={codeApplied}
            >
              Apply
            </button>

            {codeApplied && (
              <button
                type="button"
                className="text-[#ea580b] px-2 h-fit text-sm"
                onClick={() => {
                  console.log("disApplied");
                  return disApplyingCode();
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
        <hr className="border-[#ced0d4]" />
        <div className="flex justify-between">
          <span className="text-[#4b5563]">Price</span>
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#4b5563]">Shipping Fee</span>
          <span className="font-semibold">
            ${shippingFee > 0 ? shippingFee.toFixed(2) : "Free"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#4b5563]">Tax (2%)</span>
          <span className="font-semibold">${taxPrice.toFixed(2)}</span>
        </div>
        <hr className="border-[#ced0d4]" />
        <div className="flex justify-between text-xl font-semibold">
          <span className=" tracking-wide ">Total</span>
          <span>${`${finalPrice}`}</span>
        </div>
        <button type="button" className="bg-[#ea580b] text-white py-3 ">
          Place Order
        </button>
      </div>
    </>
  );
}
