"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  Image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample product list
  const products: Product[] = [
    { id: 1, title: "Product 1", price: 29.99, Image: "/chair.png" },
    { id: 2, title: "Product 2", price: 39.99, Image: "/dandy.png" },
    { id: 3, title: "Product 3", price: 19.99, Image: "/lucy.png" },
    { id: 1, title: "Product 1", price: 29.99, Image: "/chair.png" },
    { id: 2, title: "Product 2", price: 39.99, Image: "/dandy.png" },
    { id: 3, title: "Product 3", price: 19.99, Image: "/lucy.png" },
    { id: 1, title: "Product 1", price: 29.99, Image: "/chair.png" },
    { id: 2, title: "Product 2", price: 39.99, Image: "/dandy.png" },
  ];

  // Add product to cart
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart drawer when a product is added
  };

  // Remove product from cart
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Shop</h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          View Cart ({cartItems.length})
        </button>
      </header>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={product.Image}
              alt={product.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end z-50">
          <div className="w-full sm:w-96 bg-white shadow-lg h-full overflow-y-auto">
            {/* Cart Header */}
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            {/* Cart Content */}
            {cartItems.length === 0 ? (
              <p className="p-4 text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="p-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <div>
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <p className="text-gray-600">
                        Qty: {item.quantity} x ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                {/* Cart Total */}
                <div className="border-t pt-4 mt-4">
                  <p className="font-semibold">
                    Total: ${calculateTotal().toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
