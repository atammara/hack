import React from "react";

const Footer = () => {
    return (
        <div className="h-auto bg-[#2A254B] py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20">
                {/* Menu Section */}
                <div>
                    <h1 className="text-white text-lg font-Clash Display">Menu</h1>
                    <p className="text-white mt-4 text-sm">New arrivals</p>
                    <p className="text-white mt-4 text-sm">Best seller</p>
                    <p className="text-white mt-4 text-sm">Recently Viewed</p>
                    <p className="text-white mt-4 text-sm">Popular this week</p>
                    <p className="text-white mt-4 text-sm">All Products</p>
                </div>

                {/* Category Section */}
                <div>
                    <h1 className="text-white text-lg font-Clash Display">Category</h1>
                    <p className="text-white mt-4 text-sm">Crockery</p>
                    <p className="text-white mt-4 text-sm">Furniture</p>
                    <p className="text-white mt-4 text-sm">Homeware</p>
                    <p className="text-white mt-4 text-sm">Plant pot</p>
                    <p className="text-white mt-4 text-sm">Chair</p>
                    <p className="text-white mt-4 text-sm">Crockery</p>
                </div>

                {/* Our Company Section */}
                <div>
                    <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
                    <p className="text-white mt-4 text-sm">About Us</p>
                    <p className="text-white mt-4 text-sm">Vacancies</p>
                    <p className="text-white mt-4 text-sm">Contact Us</p>
                    <p className="text-white mt-4 text-sm">Privacy</p>
                    <p className="text-white mt-4 text-sm">Return Policy</p>
                </div>

                {/* Mailing List Section */}
                <div>
                    <h1 className="text-white text-lg font-Clash Display">Join our mailing list</h1>
                    <input
                        type="text"
                        placeholder="you@gmail.com"
                        className="bg-input-bg w-full mt-5 h-12 p-5 rounded-sm"
                    />
                    <button className="bg-white h-12 w-full mt-2 rounded-sm">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t-2 my-8 w-full px-6 md:px-20">
                <p className="text-white text-center mt-4 text-sm mb-4">Copyright 2022 Avion LTD</p>
            </div>
        </div>
    );
};

export default Footer;
