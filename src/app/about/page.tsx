import Image from 'next/image';
import React from 'react';
import { CiCreditCard1 } from 'react-icons/ci';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { LuSprout } from 'react-icons/lu';

const BrandMessage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center bg-white py-16 px-8 lg:px-28">
                {/* Text Content */}
                <div className="max-w-xl text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-2xl lg:text-3xl font-title text-gray-800 leading-relaxed">
                        A brand built on the love of craftsmanship, quality, and outstanding customer service
                    </h2>
                </div>

                {/* Button */}
                <div className="mt-6 lg:mt-0 text-center lg:text-right">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg transition">
                        View our products
                    </button>
                </div>
            </div>

            {/* About Section */}
            <section className="py-12 px-6 lg:px-28">
                   <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-4">
                     <div className="lg:w-1/2 h-full flex flex-col justify-center bg-[#2A254B] pt-10 pb-16 px-14 text-white">
                       <h2 className="text-2xl lg:text-4xl font-semibold mb-6">
                         It started with a small idea
                       </h2>
                       <p className="text-lg mb-6">
                         A global brand with local beginnings, our story began in a small
                         studio in South London in early 2014.
                       </p>
                       <button className="bg-white text-black mt-20 py-3 px-6 rounded hover:bg-gray-100 transition">
                         View More
                       </button>
                     </div>
                     <div className="lg:w-1/2 h-auto">
                       <Image
                         width={500}
                         height={500}
                         src="/img.png"
                         alt="About us"
                         className="object-cover shadow-md"
                       />
                     </div>
                   </div>
                 </section>

            {/* Service Section */}
            <div className="flex flex-col lg:flex-row items-center bg-white py-16 px-8 lg:px-28">
                {/* Image Section */}
                <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                    <Image
                        width={500}
                        height={500}
                        src="/img1.png"
                        alt="Interior Design"
                        className="shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 bg-[#F9F9F9] w-full font-title py-7 px-4 mt-10 lg:mt-0 lg:pl-12">
                    <h2 className="text-2xl lg:text-4xl text-gray-800 font-semibold mb-6">
                        Our service isn’t just personal, it’s actually hyper personally exquisite
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                        When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique becomes the hotbed for the London interior design community.
                    </p>
                    <button className="bg-gray-100 text-gray-800 py-1 px-6 rounded-lg hover:bg-gray-200 transition">
                        Get in touch
                    </button>
                </div>
            </div>

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
                                icon: (
                                    <LiaShippingFastSolid className="text-[#322E2F] w-10 h-10" />
                                ),
                            },
                            {
                                title: "Made by true artisans",
                                description:
                                    "Handmade crafted goods made with real passion and craftsmanship.",
                                icon: (
                                    <FaRegCircleCheck className="text-[#322E2F] w-10 h-10" />
                                ),
                            },
                            {
                                title: "Unbeatable prices",
                                description:
                                    "For our materials and quality, you won’t find better prices anywhere.",
                                icon: (
                                    <CiCreditCard1 className="text-[#322E2F] w-10 h-10" />
                                ),
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

            {/* Newsletter Section */}
            <section className="bg-gray-100 py-10">
                <div className="max-w-6xl mx-auto text-center bg-opacity-60 p-8">
                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
                        Join the club and get the benefits
                    </h2>
                    <p className="text-lg mb-6">
                        Sign up for our newsletter and receive exclusive offers on new
                        ranges, sales, pop-up stores, and more.
                    </p>
                    <div className="flex justify-center gap-4 mb-6 mt-6 text-sm">
                        <span className="flex items-center gap-2 text-lg"><FaRegCircleCheck className="text-xl" /> Exclusive offers</span>
                        <span className="flex items-center gap-2 text-lg"><FaRegCircleCheck className="text-xl" /> Free events</span>
                        <span className="flex items-center gap-2 text-lg"><FaRegCircleCheck className="text-xl" /> Large discounts</span>
                    </div>
                    <form className="flex flex-col sm:flex-row items-center justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-1/2 px-4 py-3 text-gray-800 mb-4 sm:mb-0"
                        />
                        <button className="bg-[#2A254B] text-white py-3 px-6 hover:bg-[#A66A44] transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BrandMessage;
