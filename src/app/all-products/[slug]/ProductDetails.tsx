"use client"; // This component is client-side
import { useCart } from '../../Components/CartContext'; // Import Cart context hook
import Image from 'next/image';
import { useState } from 'react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
  tags: string[];
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart(); // Access Cart context
  const [cartState, setCartState] = useState<'default' | 'adding' | 'added'>('default');

  // Add to Cart Button Handler
  const handleAddToCart = () => {
    addToCart({
        ...product, quantity: 1,
        slug: {
            current: ''
        }
    });
    setCartState('added');
    setTimeout(() => setCartState('default'), 1000); // Reset after 1 second
  };

  // Styling for the Add to Cart button
  const buttonStyles = {
    default: 'bg-[#2a254b] text-white',
    adding: 'bg-gray-400 text-gray-800 cursor-not-allowed',
    added: 'bg-slate-500 text-white cursor-not-allowed',
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 mt-16">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 bg-slate-100 rounded-xl my-4 mx-3 md:pl-8">
          <h1 className="text-4xl font-bold mb-4 mt-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">Price: ${product.price}</p>
          <h3 className="text-xl font-bold mb-2">Features:</h3>
          <ul className="list-disc ml-5 mb-4">
            {product.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mb-2">Dimensions:</h3>
          <p>
            {product.dimensions?.height} x {product.dimensions?.width} x {product.dimensions?.depth}
          </p>
          <h3 className="text-xl font-bold mb-4">Tags:</h3>
          <p className="text-gray-500">{product.tags?.join(', ')}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`mt-4 mb-4 py-3 px-6 rounded-lg transition-colors duration-300 ${buttonStyles[cartState]}`}
            disabled={cartState !== 'default'}
          >
            {cartState === 'default' && 'Add to Cart'}
            {cartState === 'adding' && 'Adding...'}
            {cartState === 'added' && 'Added to Cart'}
          </button>
        </div>
      </div>

      {/* Back to All Products */}
      <div className="flex items-center justify-center mt-8">
        <button className="bg-[#2a254b] py-4 px-6 rounded-[5px] text-white transition-colors duration-300">
          Back to All Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
