import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://metta-backend.vercel.app/metta/blog/${id}`
        );
        if (!res.ok) {
          throw new Error("Blog not found");
        }
        const data = await res.json();

        // Your blog object is inside data.blog
        setBlog(data.blog);
      } catch (err) {
        setError(err.message || "Error fetching blog");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading blog...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  if (!blog) {
    return (
      <div className="p-4 text-center text-gray-500">
        No blog data available.
      </div>
    );
  }

  return (
    <div className="p-4 rounded-md max-w-4xl mx-auto">
      <img
        src={blog.blogImage}
        alt={blog.title}
        width={600}
        height={300}
        className="w-full object-cover rounded-md"
      />
      <h1 className="text-3xl mt-4 font-bold mb-4">{blog.title}</h1>

      <p className="mt-4 text-lg whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetailsPage;
