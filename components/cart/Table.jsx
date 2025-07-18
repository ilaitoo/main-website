"use client";

import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";

export default function Table() {
  const { cartProducts, currency, addToCart, removeFromCart, deleteFromCart } =
    useAppContext();
  console.log(cartProducts);
  return (
    <div className="">
      <table className="min-w-full table-auto ">
        <thead className="">
          <tr>
            <th className="text-left px-6 py-3 font-medium">Product Details</th>
            <th className="text-left px-6 py-3 font-medium">Price</th>
            <th className="text-center px-6 py-3 font-medium">Quantity</th>
            <th className="text-left px-6 py-3 font-medium">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.length > 0 ? (
            cartProducts.map((p) => (
              <tr
                key={p.product._id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-6 py-4 flex items-center justify-start gap-4">
                  <Link
                    href={`/product/${p.product._id}`}
                    className="bg-[#f0f0f2] p-2 w-[70px] h-[70px] flex items-center justify-center rounded"
                  >
                    <Image
                      width={50}
                      height={50}
                      src={p.product.images[0]}
                      alt={"Product image"}
                    />
                  </Link>
                  <div className="flex flex-col gap-1">
                    <Link href={`/product/${p.product._id}`}>
                      {p.product.title}
                    </Link>
                    <button
                      className="text-left text-xs text-(--main-color) hover:bg-(--main-color) hover:text-white w-fit px-1 rounded"
                      onClick={() => removeFromCart(p.product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {currency}
                  {p.product.price}
                </td>
                <td className="px-6 py-4 text-center ">
                  <div className="flex justify-center gap-2 items-center">
                    <button
                      className="cursor-pointer "
                      onClick={() => deleteFromCart(p.product._id)}
                    >
                      <Image
                        src={assets.decreaseArrow}
                        alt={"increase arrow"}
                        width={14}
                        height={14}
                      />
                    </button>
                    <span className="border border-[#eee] px-2 w-[30px] flex justify-center">
                      {p.quantity}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => addToCart(p.product)}
                    >
                      <Image
                        src={assets.increaseArrow}
                        alt={"increase arrow"}
                        width={14}
                        height={14}
                      />
                    </span>{" "}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {currency}
                  {p.product.price * p.quantity}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-6 text-center text-gray-500">
                Your cart is empty.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
