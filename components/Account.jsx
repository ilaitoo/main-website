"use client";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function Account() {
  useEffect(() => {
    // Disable scroll on both body and html
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white w-[400px] h-[500px] p-6 rounded-xl shadow-xl flex items-center justify-center flex-col">
          <div>
            <h1>Sign in to QuickCart Ecommerce</h1>
            <p>Welcome back! Please sign in to continue</p>
            <button>
              <FontAwesomeIcon icon={faGoogle} /> Continue With Google{" "}
            </button>
            <div className="flex items-center gap-4 my-4">
              <hr className="flex-grow border-t border-red-500 w-32" />
              <span className="text-red-500">or</span>
              <hr className="flex-grow border-t border-red-500 w-32" />
            </div>
            <form action="">
              <label htmlFor="">Email address</label>
              <input type="email" placeholder="Enter your email address" />
              <button>
                Continue <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
