"use client"; // 👈 BUNI ALBATTA YOZING!!
import React, { useState } from "react";

const VideoReview = () => {
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
    <div className="all">
      <h3>ПАЦИЕНТЫ О ЛЕЧЕНИИ У ДОКТОРА РЯБОВА</h3>
      <h2 className="dark">Видео-отзывы</h2>

      {/*<div className="why-block video">*/}
      {/*    /!*<div className="pic"><a className="youtube-block" data-youtube*!/*/}
      {/*    /!*                        href="https://www.youtube.com/watch?v=qI29NgBDfpY"*!/*/}
      {/*    /!*                        style="background-image: url(./img/vo01n4b50.jpg?ver2.2);"></a>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    <div className="text">*/}
      {/*        <p>Хирургическое вмешательство&nbsp;&mdash; серьезный стресс. Даже если все прошло*/}
      {/*            успешно,*/}
      {/*            необходимо дальнейшее восстановление, внимание от&nbsp;лечащего врача.</p>*/}
      {/*        <p className="border"><span>Лучшая награда для хорошего врача&nbsp;&mdash; хорошее самочувствие его пациентов и&nbsp;их&nbsp;искренние слова благодарности. Пациенты доктора Рябова также выразили желание поделиться своей историей.</span>*/}
      {/*        </p>*/}
      {/*        <p>Многие из&nbsp;пациентов, перенесших операцию и&nbsp;период восстановления после*/}
      {/*            хирургического*/}
      {/*            вмешательства, хотят оставить свои положительные впечатления о&nbsp;лечении*/}
      {/*            у&nbsp;Обид Собирович.</p>*/}
      {/*    </div>*/}
      {/*</div>*/}

      <div className="">
        <div className="w-full max-w-2xl">
          {/*<iframe*/}
          {/*    className="w-full h-64 md:h-96 rounded-lg shadow-lg"*/}
          {/*    src={selectedVideo}*/}
          {/*    title="YouTube video"*/}
          {/*    frameBorder="0"*/}
          {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
          {/*    allowFullScreen*/}
          {/*></iframe>*/}

          <iframe
            className="w-100"
            height="315"
            src={selectedVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="d-flex gap-4 mt-4">
          {videos.map((video, index) => (
            <button
              key={index}
              className={`w-100 h-16 border-0 rounded-lg overflow-hidden shadow-md transition-all duration-200 ${
                selectedVideo === video ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedVideo(video?.video)}
            >
              <img
                src={video?.img}
                alt={`Video ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoReview;
