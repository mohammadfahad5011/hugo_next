"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import SingleSlideItemsr from "./SingleSlideItems";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="mb-[200px] ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <SingleSlideItemsr />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlideItemsr />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlideItemsr />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlideItemsr />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
