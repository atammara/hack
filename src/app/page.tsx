import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuSprout } from "react-icons/lu";
import AllProductsPreview from "./Components/AllProductsPreview";
import ProductsPreview from "./Components/AllProductsPreview";

const Homehero = () => {
  return (
    <div>
      {/* Hero Section*/}
      <section
        className="relative bg-[#F9F5F0] min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/main.jpg')" }}
      >
        <div className="container mx-auto px-6 lg:px-28 flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Hero Text Content */}
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg bg-opacity-90">
            <h1 className="font-title lg:text-4xl text-2xl font-extralight text-gray-800 mb-6">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop the new Spring-Summer 2023 collection today.
            </p>
            <button className="bg-black text-white py-3 mt-14 px-6 rounded hover:bg-gray-800 transition">
              Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 lg:py-20 lg:px-28 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-title text-gray-800 mb-10">
            What makes our brand different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Items */}
            {[
              {
                title: "Next day as standard",
                description:
                  "Order before 3pm and get your order the next day as standard.",
                icon: <LiaShippingFastSolid className="text-[#322E2F] w-10 h-10" />,
              },
              {
                title: "Made by true artisans",
                description:
                  "Handmade crafted goods made with real passion and craftsmanship.",
                icon: <FaRegCircleCheck className="text-[#322E2F] w-10 h-10" />,
              },
              {
                title: "Unbeatable prices",
                description:
                  "For our materials and quality, you won’t find better prices anywhere.",
                icon: <CiCreditCard1 className="text-[#322E2F] w-10 h-10" />,
              },
              {
                title: "Recycled packaging",
                description:
                  "We use 100% recycled materials to ensure our footprint is more manageable.",
                icon: <LuSprout className="text-[#322E2F] w-10 h-10" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-[#F9F9F9] text-center shadow-sm rounded-lg"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#322E2F]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <div>
        <ProductsPreview/>
      </div>

      {/* About Section */}
      <section className="py-12 px-6 lg:px-28">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-4">
          <div className="lg:w-1/2 bg-[#2A254B] pt-8 pb-16 px-14 text-white">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-6">
              It started with a small idea
            </h2>
            <p className="text-lg mb-6">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014.
            </p>
            <button className="bg-white text-black mt-16 py-3 px-6 rounded hover:bg-gray-100 transition">
              View More
            </button>
          </div>
          <div className="lg:w-1/2">
            <Image
              width={100}
              height={100}
              src="/img.png"
              alt="About us"
              className="w-full shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="py-12 px-6 lg:py-20 lg:px-28 bg-cover text-white mb-16"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      >
        <div className="max-w-6xl mx-auto text-center bg-opacity-60 p-8">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
            Join the club and get the benefits
          </h2>
          <p className="text-lg mb-6">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex justify-center gap-2 mb-6 mt-6 text-sm">
            <span className="flex items-center gap-2 text-lg"><FaRegCircleCheck className="text-xl"/> Exclusive offers</span>
            <span className="flex items-center gap-2 text-lg"><FaRegCircleCheck className="text-xl"/> Free events</span>
            <span className="flex items-center gap-2 text-lg"><FaRegCircleCheck className="text-xl"/> Large discounts</span>
          </div>
          <form className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-1/2 px-4 py-3 text-gray-800 rounded"
            />
            <button className="bg-[#2A254B] text-white py-3 px-6 hover:bg-[#A66A44] transition rounded mt-4 sm:mt-0 sm:ml-4">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homehero;
