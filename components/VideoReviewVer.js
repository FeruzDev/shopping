"use client"; // 👈 BUNI ALBATTA YOZING!!
import React, { useState } from "react";

const VideoReviewVer = () => {
  const videos = [
    {
      video: "https://www.youtube.com/embed/RojwdwnkxZA?si=ufDGOyOSr90n07PT",
      img: "https://i.ytimg.com/vi/RojwdwnkxZA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDmkW9wOZrfwHW89IPWsFiq0c-Nxw",
    },
    {
      video: "https://www.youtube.com/embed/PsGcqKKs4rs?si=1XD0qDaa8y1Nxlrk",
      img: "https://i.ytimg.com/vi/PsGcqKKs4rs/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDuwGA3h4adzSqMzCx18bxnQWdLCw",
    },
    {
      video: "https://www.youtube.com/embed/K6ksFZxgUF8?si=xkGGeu8LaQkQoHei",
      img: "https://i.ytimg.com/vi/K6ksFZxgUF8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZui9uOTuRMHjJhvefUL_JvFmrfw",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]?.video);

  return (
    <div className="all2123">
      {videos.map((video, index) => (
        <a
          key={index}
          className={`w-100 d-block h-16 cursor-pointer border-0 mt-2 rounded-lg overflow-hidden shadow-md transition-all duration-200 ${
            selectedVideo === video ? "border-blue-500" : "border-gray-300"
          }`}
          style={{ borderRadius: "10px" }}
          href={video?.video}
          onClick={() => setSelectedVideo(video?.video)}
          target={`_blank`}
        >
          <img
            src={video?.img}
            alt={`Video ${index + 1}`}
            style={{ borderRadius: "10px" }}
            className="w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  );
};

export default VideoReviewVer;
