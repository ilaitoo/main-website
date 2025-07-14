import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import delay from "@/lib/lib";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default async function AboutUsPage() {
  await delay();
  return (
    <FadeIn>
      <Container>
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-12 gap-4">
          <Image
            src={assets.teamwork}
            alt="Teamwork Illustration"
            width={260}
            height={180}
            className="mb-6 rounded-xl shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Welcome to our store! We are passionate about delivering the best
            tech products and an exceptional shopping experience.
          </p>
        </section>

        {/* Our Story */}
        <section className="py-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 text-base mb-2">
              Founded by tech enthusiasts, our mission is to make the latest and
              greatest technology accessible to everyone. We believe in quality,
              trust, and customer satisfaction above all else.
            </p>
            <p className="text-gray-700 text-base">
              Over the years, we have grown into a trusted destination for
              electronics, gadgets, and accessories, serving thousands of happy
              customers. Our team is dedicated to curating the best products and
              providing top-notch support.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={assets.Innovation}
              alt="Innovation Illustration"
              width={220}
              height={180}
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="py-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <Image
              src={assets.success}
              alt="Mission Illustration"
              width={220}
              height={180}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-medium text-black">Customer First:</span>{" "}
                We put your needs at the heart of everything we do.
              </li>
              <li>
                <span className="font-medium text-black">
                  Quality Products:
                </span>{" "}
                We only offer products we believe in and use ourselves.
              </li>
              <li>
                <span className="font-medium text-black">Innovation:</span> We
                stay ahead by embracing the latest trends and technologies.
              </li>
              <li>
                <span className="font-medium text-black">Integrity:</span>{" "}
                Honesty and transparency guide all our actions.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-10 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Want to know more?</h3>
          <p className="text-gray-700 mb-4">
            Contact us or explore our shop to discover our latest products!
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
            <a
              href="/shop"
              className="px-6 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
            >
              Shop Now
            </a>
          </div>
        </section>
      </Container>
    </FadeIn>
  );
}
