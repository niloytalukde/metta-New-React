import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [stopScroll, setStopScroll] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://metta-backend.vercel.app/image/image-links"
        );
        const data = await res.json();
        setImages(data.images || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium">Loading images...</p>
      </div>
    );
  }

  if (!images.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-gray-500">No images found.</p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <h2 className="text-4xl font-semibold mt-10 text-center ">
        Our Image Gallery
      </h2>

      <div
        className="overflow-hidden w-full relative max-w-7xl mx-auto py-10"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        {/* Scrolling image cards */}
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${images.length * 2.5}s`,
          }}
        >
          <div className="flex">
            {[...images, ...images].map((img, index) => (
              <div
                key={`${img._id}-${index}`}
                className="w-56 mx-4 h-80 relative group hover:scale-95 transition-transform duration-300 overflow-hidden rounded-lg"
              >
                <img
                  src={img.image}
                  alt={img.title || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index > 2 ? "lazy" : "eager"}
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-black/30 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-center px-4">
                  <span className="text-sm">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
};

export default ImageGallery;
