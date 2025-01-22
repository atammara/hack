import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ProductsPage = () => {
    const products = [
        { name: "The Comfy Chair", Image: "/chair.png", price: "$250" },
        { name: "Rustic Vase Set", Image: "/vas.png", price: "$155" },
        { name: "Stoneware Pitcher", Image: "/pot.png", price: "$125" },
        { name: "The Luxe Lamp", Image: "/lamp.png", price: "$399" },
        { name: "Modern Pendant Lamp", Image: "/dandy.png", price: "$350" },
        { name: "Abstract Ceramic Vase", Image: "/rustic.png", price: "$200" },
        { name: "Yellow Accent Chair", Image: "/lucy.png", price: "$299" },
        { name: "Wooden Stool", Image: "/silky.png", price: "$180" },
        { name: "The Comfy Chair", Image: "/chair.png", price: "$250" },
        { name: "Rustic Vase Set", Image: "/vas.png", price: "$155" },
        { name: "Stoneware Pitcher", Image: "/pot.png", price: "$125" },
        { name: "The Luxe Lamp", Image: "/lamp.png", price: "$399" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div
                style={{ backgroundImage: "url('/F.png')" }}
                className="bg-gray-900 text-white h-48 py-6 px-4 lg:px-28 bg-cover bg-center"
            >
                {/* You can add a title or any other content here if needed */}
            </div>

            {/* Filters */}
            <div className="py-4 px-4 lg:px-28">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Left-Aligned Filters */}
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <button className="flex items-center text-lg px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-gray-200 transition w-full sm:w-auto">
                            Category <FaChevronDown className="ml-2 text-xs" />
                        </button>
                        <button className="flex items-center text-lg px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-gray-200 transition w-full sm:w-auto">
                            Product Type <FaChevronDown className="ml-2 text-xs" />
                        </button>
                        <button className="flex items-center text-lg px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-gray-200 transition w-full sm:w-auto">
                            Price <FaChevronDown className="ml-2 text-xs" />
                        </button>
                        <button className="flex items-center text-lg px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-gray-200 transition w-full sm:w-auto">
                            Rating <FaChevronDown className="ml-2 text-xs" />
                        </button>
                    </div>

                    {/* Right-Aligned Filters */}
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-3 sm:mt-0">
                        <button className="flex items-center text-lg px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-gray-200 transition">
                            Sort by :
                        </button>
                        <button className="flex items-center text-lg px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-gray-200 transition">
                            Filter <FaChevronDown className="ml-2 text-xs" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="py-10 px-4 lg:px-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white shadow rounded-lg hover:shadow-lg transition overflow-hidden"
                        >
                            <Image
                                src={product.Image}
                                alt={product.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-gray-700 font-medium">{product.name}</p>
                                <p className="text-gray-900 font-semibold">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
