import { sanityfetch } from '@/sanity/lib/fetch'; // Fetch function for Sanity
import PaginatedProducts from '../Components/PaginatedProducts'; // Import the client component

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
}

export default async function AllProductsPage() {
  // Fetch all products from Sanity
  const query = `
    *[_type == "product"]{
      _id,
      name,
      price,
      "imageUrl": image.asset->url,
      slug
    }
  `;
  const allProducts: Product[] = await sanityfetch({ query });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      {/* Pass products to the client component */}
      <PaginatedProducts products={allProducts} />
    </div>
  );
}
