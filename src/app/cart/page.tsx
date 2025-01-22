'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../Components/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const taxRate = 0.1; // 10% tax

  // Calculate total price
  const subtotal = cart.reduce((acc, product) => acc + (product.price * product.quantity || 0), 0); // Handle price and quantity
  const tax = subtotal * taxRate;
  const totalPrice = subtotal - discount + tax;

  // Normalize coupon input and apply discount
  const applyCoupon = () => {
    const normalizedCoupon = coupon.trim().toUpperCase();
    if (normalizedCoupon === 'SAVE20') {
      setDiscount(20); // Example: $20 discount
    } else if (normalizedCoupon === 'FREESHIP') {
      setDiscount(10); // Example: $10 discount
    } else {
      alert('Invalid coupon code');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          <p>Your cart is empty. Start shopping now!</p>
          <button
            onClick={() => (window.location.href = '/')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6 w-1/2">
            {cart.map((product) => (
              <div key={product._id} className="border shadow-md p-4 rounded-lg flex items-center">
                <Image
                  src={product.imageUrl || '/placeholder.png'}
                  alt={product.name || 'Product Image'}
                  width={300}
                  height={300}
                  className="rounded object-cover"
                />
                <div className="flex-1 bg-white p-6 rounded-lg  hover:shadow-lg transition-all duration-300">
                  {/* Product Name */}
                  <h2 className="font-semibold text-2xl text-gray-800 mb-2">{product.name || 'Unnamed Product'}</h2>

                  {/* Price */}
                  <p className="text-lg text-gray-700 font-medium mb-2">
                    Price: ${product.price ? product.price.toFixed(2) : 'N/A'}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-lg text-gray-700">Quantity: {product.quantity}</p>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="bg-red-500 text-white text-sm py-2 px-4 rounded hover:bg-red-600 transition-all duration-200"
                    onClick={() => removeFromCart(product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-8 text-right">
            <p className="text-lg">Tax: ${tax.toFixed(2)}</p>
            <p className="text-lg">Discount: -${discount.toFixed(2)}</p>
            <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          </div>

          {/* Coupon Code */}
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Have a coupon?</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="border p-2 rounded w-full"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  className="ml-2 bg-green-500 text-white px-4 rounded"
                  onClick={applyCoupon}
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Loyalty Points */}
            <p>
              You’ll earn{' '}
              <strong>{Math.floor(subtotal / 10)} points</strong> on this purchase!
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-between mt-8">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={() => (window.location.href = '/checkout')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
