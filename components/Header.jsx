"use client";
import Image from "next/image";
import image from "@/assets/logo.svg";
import Link from "next/link";
import { Menu, Search, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppContext } from "@/context/AppContext";
import { assets, BagIcon, CartIcon } from "@/assets/assets";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { user, router } = useAppContext();
  const { openSignIn, openUserProfile } = useClerk();
  const sidebarRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "";
    }

    return () => {
      // Clean up on unmount
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleSearch() {
    setSearch(true);
  }
  return (
    <>
      <nav className="flex justify-between h-[60px] lg:px-32 px-6  items-center  border-b-[1px] border-[#d1d5db] relative">
        <Link href={"/"}>
          <Image
            className="cursor-pointer md "
            priority
            src={image}
            alt="logo"
          />
        </Link>
        <div className="md:flex gap-10 text-md hidden ">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        {/* search  */}
        {/* <div className="xl:flex gap-3 w-[100px] items-center absolute right-[310px] hidden">
          <label htmlFor="search">
            <Search className="w-4 cursor-pointer " />
          </label>
          <input
            id="search"
            type="text"
            className="border border-[#ccc] px-3 py-1 text-sm rounded-sm  outline-none"
            placeholder="search"
          />
        </div> */}
        {/*  */}
        <div className="md:flex gap-4 text-md hidden justify-center items-center">
          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Cart"
                  labelIcon={<CartIcon />}
                  onClick={() => router.push("/cart")}
                />
                <UserButton.Action
                  label="My Orders"
                  labelIcon={<BagIcon />}
                  onClick={() => router.push("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button onClick={openSignIn} className="flex gap-2">
              <User className="w-4 cursor-pointer" />
              <span className="cursor-pointer">Account</span>
            </button>
          )}
        </div>
        <div
          ref={sidebarRef}
          className={`flex flex-col items-end gap-10 w-full h-[100vh] top-0 ${
            isMenuOpen ? "-left-[100px]" : "-left-[768px]"
          }  z-50 fixed bg-[#eee] p-10 transition-all duration-500 md:hidden`}
        >
          <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href={"/shop"} onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
          <Link href={"/about-us"} onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link href={"/contact"} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          {user ? (
            <div className="flex gap-4 mt-auto mb-10 cursor-pointer items-center">
              <span>{user.firstName}</span>

              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Cart"
                    labelIcon={<CartIcon />}
                    onClick={() => router.push("/cart")}
                  />
                  <UserButton.Action
                    label="My Orders"
                    labelIcon={<BagIcon />}
                    onClick={() => router.push("/my-orders")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openSignIn();
              }}
              className="flex gap-2 mt-auto mb-10"
            >
              <User className="w-4 cursor-pointer" />
              <span className="cursor-pointer">Account</span>
            </button>
          )}
        </div>
        {isMenuOpen ? (
          <X
            onClick={toggleMenu}
            className="z-50 md:hidden right-5 cursor-pointer"
          />
        ) : (
          <Menu
            onClick={toggleMenu}
            className="z-50 md:hidden  right-5 cursor-pointer"
          />
        )}
      </nav>
      {/* <Account /> */}
    </>
  );
}
