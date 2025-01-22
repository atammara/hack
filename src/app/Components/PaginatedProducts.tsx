'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
}

interface PaginatedProductsProps {
  products: Product[];
}

const PRODUCTS_PER_PAGE = 6;

export default function PaginatedProducts({ products }: PaginatedProductsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <Link href={`/all-products/${product.slug.current}`}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              <p className="text-gray-700 mt-2">Price: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2A254B] text-white hover:bg-[#4e4b71]'
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            aria-label={`Go to page ${index + 1}`}
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1 ? 'bg-[#2A254B] text-white' : 'bg-gray-200 hover:bg-gray-400'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          aria-label="Next page"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2A254B] text-white hover:bg-[#4e4b71]'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
