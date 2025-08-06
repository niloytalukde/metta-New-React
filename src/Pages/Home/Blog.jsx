import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // use only if you're using React Router

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://metta-backend.vercel.app/metta/home/blogs"
        );
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="pt-6 pb-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <h2 className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase">
          Our Blog
        </h2>

        {/* Blog Card Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden rounded-md">
                {blog.blogImage ? (
                  <img
                    src={blog.blogImage}
                    alt={blog.title || "Blog Image"}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="text-gray-900 text-lg font-semibold mt-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {blog.content}
              </p>
              <Link to={`/blog/${blog._id}`}>
                <button className="bg-gradient-to-r cursor-pointer mt-4 from-purple-600 to-blue-500 px-6 py-2 rounded text-white font-medium hover:opacity-90 transition">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Read All Button */}
        <div className="flex justify-center mt-10">
          <Link to="/Blogs">
            <button className="bg-gradient-to-r cursor-pointer from-purple-600 to-blue-500 px-6 py-2 rounded text-white font-medium hover:opacity-90 transition">
              Read All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
