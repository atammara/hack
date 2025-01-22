import { useCart } from '../Components/CartContext';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
  quantity: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
