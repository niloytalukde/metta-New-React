import React, { useEffect, useState } from "react";
import news from "../../assets/news.jpg"; // Make sure this path is correct based on your file structure

function News() {
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("https://metta-backend.vercel.app/news/news");
        const data = await res.json();
        setAllNews(data.news || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <div className="text-center text-gray-600 mt-10">Loading...</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[60vh] md:h-[80vh] w-full flex items-center justify-center px-4 text-center"
        style={{ backgroundImage: `url(${news})` }}
      >
        <div className="bg-black/50 p-6 rounded-lg max-w-3xl w-full">
          {/* Heading */}
          <div className="text-center px-4 mt-6 md:mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Our News
            </h1>
            <p className="text-white mt-2 text-sm md:text-base ">
              Stay updated with the latest news and events from our community.
            </p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="px-4 sm:px-6 lg:px-12 mt-8 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {allNews.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No news available at the moment.
          </p>
        ) : (
          allNews.map((newsItem) => (
            <div
              key={newsItem._id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60">
                <img
                  src={newsItem.newsImage}
                  alt={newsItem.title || "News Image"}
                  className="object-cover rounded-md w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 text-base md:text-lg font-semibold mt-3 line-clamp-2">
                {newsItem.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {newsItem.content}
              </p>

              {/* Learn More Button */}
              <button className="bg-gradient-to-r mt-4 from-purple-600 to-blue-500 px-6 py-2 rounded text-white font-medium hover:opacity-90 transition">
                Learn More
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default News;
