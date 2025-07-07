"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React from "react";

export default function Diploms() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-3">
      <SwiperSlide>
        <div className="item i1 item-i1">
          <div className="row">
            <div className="col-md-4">
              <div className="item-l1 w-100 h-100">
                <img className="w-100 h-100" src="/img/s1.jpg" alt="..." />
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-l1 w-100 h-100">
                <img className="w-100 h-100" src="/img/s2.jpg" alt="..." />
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-l1 w-100 h-100">
                <img className="w-100 h-100" src="/img/s3.png" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item i1 item-i1">
          <div className="row">
            <div className="col-md-4">
              <div className="item-l1 w-100 h-100">
                <img className="w-100 h-100" src="/img/s4.png" alt="..." />
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-l1 w-100 h-100">
                <img className="w-100 h-100" src="/img/s5.jpg" alt="..." />
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-l1 w-100 h-100">
                <img className="w-100 h-100" src="/img/s6.png" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
