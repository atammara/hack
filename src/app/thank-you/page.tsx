'use client';

import { useRouter } from 'next/navigation'; // Use next/navigation for next.js 13+ and onwards
import { useEffect, useState } from 'react';

const ThankYouPage = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that the code runs only in the client-side
  }, []);

  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 5000); // Redirect to the homepage after 5 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isClient, router]);

  if (!isClient) {
    return null; // Prevent rendering until the component is client-side
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your order has been successfully placed. We appreciate your business!
      </p>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        onClick={() => router.push('/')}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ThankYouPage;
