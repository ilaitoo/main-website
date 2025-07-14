import OrderForm from "@/components/cart/OrderForm";
import delay from "@/lib/lib";
import { ArrowLeft } from "lucide-react";

export default async function CartPage() {
  await delay();
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        <div className="flex-9 flex flex-col gap-6 ">
          <div className="flex justify-between ">
            <h1 className="text-3xl  text-[#6b7280]">
              Your <span className="text-[#ec5f1e] font-semibold">Cart</span>
            </h1>
            <div className="text-xl text-[#888e99]">0 Items</div>
          </div>
          <hr className="border-[#d3d5d8]" />
          <table className="">
            <thead>
              <tr className="flex justify-between px-8 mt-3 ">
                <th className="font-medium">Product Details </th>
                <th className="font-medium">Price </th>
                <th className="font-medium">Quantity</th>
                <th className="font-medium">Subtotal</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <button className="flex gap-2 text-[#ea580b] mt-8 cursor-pointer group">
            <ArrowLeft className="w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Continue Shopping
          </button>
        </div>
        <OrderForm />
      </div>
    </>
  );
}
