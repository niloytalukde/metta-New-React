import React, { useEffect, useState } from "react";

const YouTubeEmbed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          "https://metta-backend.vercel.app/youtube/youtube-links"
        );
        const data = await res.json();
        setVideos(data.YUrl || []);
      } catch (error) {
        console.error("Error fetching YouTube links:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const extractVideoId = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.slice(1);
      }
      // if (parsed.hostname.includes('youtube.com')) {
      //   if (parsed.searchParams.has('v')) {
      //     return parsed.searchParams.get('v')!;
      //   }
      //   const pathParts = parsed.pathname.split('/');
      //   const embedIndex = pathParts.findIndex(part => part === 'embed' || part === 'v');
      //   return embedIndex !== -1 ? pathParts[embedIndex + 1] : '';
      // }
      return "";
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  return (
    <div className="px-4 md:px-16 py-10 md:py-20">
      <h2 className="text-center text-2xl md:text-4xl font-semibold uppercase">
        Join Our YouTube Channel
      </h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-full aspect-video bg-gray-200 animate-pulse rounded"
              />
            ))}
        </div>
      ) : videos.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No videos found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {videos.map(({ _id, youtubeUrl }, index) => {
            const id = extractVideoId(youtubeUrl);
            return id ? (
              <div key={_id} className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  aria-label="Embedded YouTube video"
                />
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default YouTubeEmbed;
