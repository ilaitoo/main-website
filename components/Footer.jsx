import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="grid sm:grid-cols-4 text-[#6b7280] sm:justify-items-center w-full gap-10 mt-auto pt-20">
        <div className="flex flex-col gap-5 sm:col-span-2 mr-20">
          <Image src={assets.logo} alt={"logo"} />
          <p className="sm:text-sm text-xs ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-black mb-5 font-semibold ">Company</h2>
          <div className="sm:text-sm text-xs flex flex-col gap-2">
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:underline">
              About us
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
            <Link href="#" className="hover:underline">
              Privacy policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-black mb-4 font-semibold">Get in touch</h2>
          <div className="sm:text-sm text-xs flex  flex-col gap-2">
            <Link href="#">+1-234-567-890</Link>
            <Link href="#">contact@greatstack.dev</Link>
          </div>
        </div>
      </div>
    </>
  );
}
