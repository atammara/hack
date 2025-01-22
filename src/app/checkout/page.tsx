'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../Components/CartContext';

const CheckoutPage: React.FC = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit_card',
  });
  const [errors, setErrors] = useState({
    name: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce((acc, product) => acc + product.price, 0);
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const validateInput = () => {
    let isValid = true;
    const newErrors = { name: '', address: '' };

    if (!userDetails.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!userDetails.address.trim()) {
      newErrors.address = 'Address is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));

    // Clear error for the field
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const placeOrder = async () => {
    if (!validateInput()) return;

    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
      clearCart();
      router.push('/thank-you'); // Redirect to a thank-you page
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

      {/* Cart Summary */}
      <div className="border shadow-md p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product._id} className="flex justify-between mb-2">
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
        <div className="flex justify-between font-semibold mt-4">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold mt-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* User Details Form */}
      <div className="border shadow-md p-4 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={`w-full border p-2 rounded ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              className={`w-full border p-2 rounded ${errors.address ? 'border-red-500' : ''}`}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="paymentMethod">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={userDetails.paymentMethod}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash_on_delivery">Cash on Delivery</option>
            </select>
          </div>
        </form>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => router.push('/cart')}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back to Cart
        </button>
        <button
          onClick={placeOrder}
          disabled={loading}
          className={`px-4 py-2 rounded ${loading ? 'bg-gray-300' : 'bg-green-500 text-white'}`}
        >
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
