import Image from "next/image";
import React from "react";

const Blog: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Minimalist Design",
      description:
        "Explore how minimalist design can enhance the user experience and create a modern aesthetic.",
      Image: "/man1.jpg",
      date: "Dec 5, 2024",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Top Furniture Trends in 2024",
      description:
        "Discover the latest trends in furniture design that are shaping modern interiors.",
        Image: "/woman.jpg",
      date: "Nov 28, 2024",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "How to Style Your Living Room",
      description:
        "Tips and tricks for styling your living room with modern furniture and decor.",
        Image: "/woman2.jpg",
      date: "Nov 20, 2024",
      author: "Emily Brown",
    },
    {
      id: 4,
      title: "Sustainable Design Practices",
      description:
        "Learn how sustainable design can make a difference in creating eco-friendly spaces.",
        Image: "/man2.jpg",
      date: "Oct 15, 2024",
      author: "Michael Lee",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-[url('/mod.jpg')] bg-cover bg-center h-[300px] flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-6 rounded shadow-lg text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Our Blog
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Insights, tips, and updates from the world of modern design.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto p-6 mt-16 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Welcome to our blog! At Modern Blog, we are passionate about bringing
          you the latest trends, tips, and insights in the world of modern
          design and home decor. Whether you're looking for inspiration to style
          your living room, or you want to stay up-to-date with the newest
          furniture trends, our blog covers it all. We focus on high-quality,
          minimalist designs that blend functionality and aesthetics. Join us as
          we explore how design can transform spaces and elevate everyday living.
        </p>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={blog.Image}
              alt={blog.title}
              className="w-full h-48 sm:h-64 lg:h-72 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{blog.date}</p>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {blog.description}
              </p>
              <p className="text-gray-500 text-sm mt-4">By {blog.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
