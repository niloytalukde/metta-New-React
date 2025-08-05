import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://metta-backend.vercel.app/metta/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogs(data.blogs || []);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center text-center px-2 sm:px-4"
        style={{ backgroundImage: "url('/ContactUsImg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            Our Blogs
          </h1>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg">
            Discover the story behind our journey.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
          Our Blog
        </h2>

        {loading && (
          <p className="mt-10 text-center text-gray-500 text-base sm:text-lg">
            Loading blogs...
          </p>
        )}

        {error && (
          <p className="mt-10 text-center text-red-500 text-base sm:text-lg">
            {error}
          </p>
        )}

        {!loading && !error && blogs.length === 0 && (
          <p className="mt-10 text-center text-gray-500 text-base sm:text-lg">
            No blogs available at the moment.
          </p>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogs.map(({ _id, blogImage, title, content }) => (
              <article
                key={_id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-38 sm:h-40 md:h-44 lg:h-52">
                  <img
                    src={blogImage}
                    alt={title || "Blog Image"}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-gray-900 text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {content}
                  </p>
                  <div>
                    <a
                      href={`/blog/${_id}`}
                      className="w-full block"
                      aria-label={`Read more about ${title}`}
                    >
                      <button
                        type="button"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-2 rounded text-white font-medium hover:opacity-90 transition w-full mt-4"
                      >
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogPage;
