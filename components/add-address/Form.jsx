"use client";

export default function Form() {
  return (
    <form action="" className="flex flex-col gap-3" id="contact-form">
      <input type="text" placeholder="Full name" />
      <input type="text" placeholder="Phone number" />
      <input type="text" placeholder="Pin code" />
      <textarea name="" id="" placeholder="Address(Area and Street)"></textarea>
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
  );
}
