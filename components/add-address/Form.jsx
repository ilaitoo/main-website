"use client";

import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");

  const [invalidPhone, setInvalidPhone] = useState(false);

  // function isNumber(nums) {
  //   for (const num of nums) {
  //     if (isNaN(Number(num))) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // function resetErrors() {
  //   setInvalidPhone(false);
  // }

  function handelSubmit(ev) {
    ev.preventDefault();
    const data = {
      name,
      phone,
      pin,
      address,
      locality,
      state,
    };

    console.log("hello");
    setName("");
    setPhone("");
    setPin("");
    setAddress("");
    setLocality("");
    setState("");
  }

  return (
    <form
      action=""
      className="flex flex-col gap-3"
      id="contact-form"
      onSubmit={handelSubmit}
    >
      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(ev) => {
          setName(ev.currentTarget.value);
        }}
      />
      <div className="text-left inline-block">
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(ev) => {
            setPhone(
              !isNaN(Number(ev.currentTarget.value))
                ? ev.currentTarget.value
                : phone
            );
          }}
          className="w-full"
        />
        {invalidPhone && (
          <div className="mr-auto text-sm mt-1 ml-3 text-red-400">
            Invalid phone number!
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder="Pin code"
        value={pin}
        onChange={(ev) => {
          setPin(ev.currentTarget.value);
        }}
      />
      <textarea
        name=""
        id=""
        placeholder="Address(Area and Street)"
        value={address}
        onChange={(ev) => {
          setAddress(ev.currentTarget.value);
        }}
      ></textarea>
      <div className="flex gap-2 mt-1 overflow-hidden">
        <input
          type="text"
          placeholder="City/District/Town"
          className="lg:w-full w-[200px]"
          value={locality}
          onChange={(ev) => {
            setLocality(ev.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="State"
          className="w-full"
          value={state}
          onChange={(ev) => {
            setState(ev.currentTarget.value);
          }}
        />
      </div>
      <button
        className="uppercase bg-[#ea580b] py-4 text-white mt-6 text-sm"
        type="submit"
      >
        Save Address
      </button>
    </form>
  );
}
