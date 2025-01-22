import Link from 'next/link';

const ThankYouPage: React.FC = () => {
  return (
    <div className="container mx-auto text-center p-6">
      <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
      <p className="text-lg mb-6">Your order has been placed successfully.</p>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
