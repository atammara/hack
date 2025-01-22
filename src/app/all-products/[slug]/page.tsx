import { sanityfetch } from '@/sanity/lib/fetch';
import ProductDetails from './ProductDetails'; // Client Component ko import karein

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // Slug dynamic route se milega

  // Sanity query for fetching specific product details
  const query = `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      features,
      dimensions,
      tags
    }
  `;
  const product = await sanityfetch({ query, params: { slug } }).catch(() => null);

  // Agar product nahi mila, toh "Not Found" message dikhayein
  if (!product) {
    return <div>Product not found</div>;
  }

  // ProductDetails (client component) ko data pass karein
  return <ProductDetails product={product} />;
}
