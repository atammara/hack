"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { client } from "@/sanity/lib/client";

const fetchProducts = async () => {
  const query = `
    *[_type == 'product']{
      _id,
      name,  
      slug {
        current
      }
    }
  `;
  return await client.fetch(query);
};

const Navbar = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [cart] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // Dummy user data

  // Fetch products from Sanity
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  // Total cart items quantity
  const totalCartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  // Function to clear search input
  const clearSearch = () => {
    setSearchTerm(""); // Reset search term
    setFilteredProducts([]); // Hide search results dropdown
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800">
            <Link href="/">Avion</Link>
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex space-x-14 text-gray-600`}
          >
            <Link href="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-900 transition">
              About Us
            </Link>
            <Link href="/all-products" className="hover:text-gray-900 transition">
              New Items
            </Link>
            <Link href="/blog" className="hover:text-gray-900 transition">
              Blog
            </Link>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-6">
            {/* Search Section */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <div className="absolute top-10 left-0 bg-white shadow-md p-4 w-full max-h-60 overflow-auto z-10">
                  {filteredProducts.length > 0 ? (
                    <ul className="space-y-2">
                      {filteredProducts.map((product) => (
                        <li key={product._id}>
                            <Link href={`/all-products/${product.slug.current}`}
                            
                            className="text-blue-600 hover:underline"
                            onClick={clearSearch}
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No products found.</p>
                  )}
                </div>
              )}
            </div>
              
 
            <Link href="/profile">
              <button className="text-gray-500 hover:text-gray-700 text-2xl">
                <CgProfile />
              </button>
            </Link>

            {/* Cart Icon */}
            <Link href="/cart">
              <button className="relative text-gray-500 hover:text-gray-700 text-xl">
                <FiShoppingCart />
                {totalCartQuantity > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalCartQuantity}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
