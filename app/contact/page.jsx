import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import delay from "@/lib/lib";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { User, Mail, MessageSquare } from "lucide-react";

export default async function ContactPage() {
  await delay();
  return (
    <FadeIn>
      <div className="min-h-screen flex items-center justify-center  py-12">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left: Illustration & Info */}
          <div className="md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-[#ea580b]/10 to-white p-10 gap-8">
            <Image
              src={assets.contact}
              alt="Contact Illustration"
              width={260}
              height={180}
              className="mb-2"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#ea580b]">
                Let's Talk!
              </h1>
              <p className="text-gray-600 mb-6 max-w-xs">
                Have a question, feedback, or just want to say hello? Reach out
                and we'll get back to you as soon as possible.
              </p>
              <div className="mb-4">
                <p className="text-gray-700 mb-1 font-medium">Email:</p>
                <a
                  href="mailto:contact@greatstack.dev"
                  className="text-[#ea580b] font-semibold hover:underline"
                >
                  contact@greatstack.dev
                </a>
              </div>
              <div>
                <p className="text-gray-700 mb-1 font-medium">Phone:</p>
                <a
                  href="tel:+1234567890"
                  className="text-[#ea580b] font-semibold hover:underline"
                >
                  +1-234-567-890
                </a>
              </div>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="#" aria-label="Instagram">
                  <Image
                    src={assets.instagram_icon}
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
                </a>
                <a href="#" aria-label="Facebook">
                  <Image
                    src={assets.facebook_icon}
                    alt="Facebook"
                    width={28}
                    height={28}
                  />
                </a>
                <a href="#" aria-label="Twitter">
                  <Image
                    src={assets.twitter_icon}
                    alt="Twitter"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <div className="md:w-1/2 flex items-center justify-center p-10 bg-white">
            <form className="w-full max-w-md flex flex-col gap-7">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Contact Form
              </h2>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  className="peer pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-[#ea580b] focus:ring-2 focus:ring-[#ea580b] outline-none transition"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#ea580b] bg-white px-1"
                >
                  Your Name
                </label>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-[#ea580b] focus:ring-2 focus:ring-[#ea580b] outline-none transition"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#ea580b] bg-white px-1"
                >
                  Your Email
                </label>
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  id="message"
                  placeholder=" "
                  rows={5}
                  className="peer pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-[#ea580b] focus:ring-2 focus:ring-[#ea580b] outline-none transition resize-none"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-10 top-4 text-gray-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#ea580b] bg-white px-1"
                >
                  Your Message
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#ea580b] text-white py-3 rounded-lg hover:bg-orange-700 transition font-semibold text-lg shadow-md mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
