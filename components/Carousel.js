"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React from "react";

const videos = [
  {
    video: "https://youtube.com/shorts/n6sGnrLOmjQ?si=XlgqjowDm6zykaTW",
    image:
      "https://i.ytimg.com/vi/n6sGnrLOmjQ/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCa_VQYQc6_pEadm3LRrjXYtcyvLA",
  },
  {
    video: "https://youtube.com/shorts/tHkFHQLOyIA?si=ZNpjaD8mKlqRasYI",
    image:
      "https://i.ytimg.com/vi/tHkFHQLOyIA/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBCAbBjCJVTux8sdalgacbtzVDZ6A",
  },
  {
    video: "https://youtube.com/shorts/2TXbLf0FLts?si=dkMWxl33SUIRd-M6",
    image:
      "https://i.ytimg.com/vi/2TXbLf0FLts/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBD35Hcia7CjQ9akO82nRIjcnwN_g",
  },
  {
    video: "https://youtube.com/shorts/n6sGnrLOmjQ?si=XlgqjowDm6zykaTW",
    image:
      "https://i.ytimg.com/vi/n6sGnrLOmjQ/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCa_VQYQc6_pEadm3LRrjXYtcyvLA",
  },
  {
    video: "https://youtube.com/shorts/tHkFHQLOyIA?si=ZNpjaD8mKlqRasYI",
    image:
      "https://i.ytimg.com/vi/tHkFHQLOyIA/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBCAbBjCJVTux8sdalgacbtzVDZ6A",
  },
  {
    video: "https://youtube.com/shorts/2TXbLf0FLts?si=dkMWxl33SUIRd-M6",
    image:
      "https://i.ytimg.com/vi/2TXbLf0FLts/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBD35Hcia7CjQ9akO82nRIjcnwN_g",
  },
];

export default function Carousel() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={5}
      className="mySwiper"
    >
      {videos.map((item, index) => (
        <SwiperSlide>
          <button
            key={index}
            className={`w-100 h-16 border-0 rounded-lg overflow-hidden shadow-md transition-all duration-200 `}
          >
            <img src={item?.image} alt={`Video ${index + 1}`} />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
