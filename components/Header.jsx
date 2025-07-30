"use client";
import Image from "next/image";
import image from "@/assets/logo.svg";
import Link from "next/link";
import {
  LogOut,
  Menu,
  Search,
  Settings,
  ShoppingBag,
  ShoppingBagIcon,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import { signIn, signOut, useSession } from "next-auth/react";
import CartCounter from "./cart/CartCounter";
import CartItems from "./cart/cartItems";
import DropOption from "./DropOption";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const { user, router } = useAppContext();
  const sidebarRef = useRef(null);
  const dropMenuRef = useRef(null);
  const cartCounter = CartCounter();
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
    function handleClickOutside(event) {
      if (dropMenuRef.current && !dropMenuRef.current.contains(event.target)) {
        setDropMenu(false);
      }
    }

    if (dropMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropMenu]);

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
        <div className="md:flex gap-4 text-md hidden  items-center ">
          {user ? (
            <div className="flex items-center gap-6 ">
              <Link href={"/cart"}>
                <div className="relative">
                  {cartCounter > 0 && (
                    <span className="absolute -top-3 -right-2 size-3 p-2 bg-[#ea580b] rounded-full text-xs flex items-center justify-center text-gray-100">
                      <CartItems />
                    </span>
                  )}
                  <ShoppingCart className="size-5 -z-10" />
                </div>
              </Link>
              <div className="relative ">
                <button
                  onClick={() => {
                    setDropMenu((prev) => !prev);
                  }}
                >
                  <Image
                    src={user.image || assets.noProfile}
                    width={30}
                    height={30}
                    alt="avatar"
                    className="rounded-full"
                  />
                </button>
                <div
                  ref={dropMenuRef}
                  className={`absolute right-2 top-8 shadow-md bg-[white]  z-50  rounded-lg w-[376px] border  transition-all  duration-100  overflow-hidden ${
                    dropMenu
                      ? " translate-y-2 opacity-100 pointer-events-auto scale-100"
                      : " opacity-0 translate-y-0 pointer-events-none scale-95"
                  }`}
                >
                  <div className="flex w-full items-center gap-5 p-5">
                    <Image
                      src={user?.image || assets.noProfile}
                      alt="avatar"
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <div>
                      <div className="text-sm">{user.name}</div>
                      <div className="text-xs">{user?.email}</div>
                    </div>
                  </div>
                  <ul className="flex flex-col  ">
                    <DropOption
                      name="Manage account"
                      icon={<Settings className="size-4 " />}
                    />
                    <DropOption
                      name="My Orders"
                      icon={<ShoppingBagIcon className="size-4 " />}
                    />
                    <DropOption
                      name="Sign out"
                      icon={<LogOut className="size-4 " />}
                    />
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                signIn("google");
              }}
            >
              account
            </button>
          )}
          {/* {user ? (
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
          )} */}
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
          {/* {user ? (
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
          )} */}
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
